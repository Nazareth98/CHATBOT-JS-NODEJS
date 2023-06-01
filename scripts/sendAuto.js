const { MessageMedia } = require("whatsapp-web.js");
const db = require("./helpers/mysql.js");
const {
  PEDIDOS_QUERY,
  CONTATO_QUERY,
  VENCIDAS_QUERY,
} = require("./data/querys.js");

const {
  formatPedidos,
  formatVencidas,
  formatSaldo,
} = require("./scripts/formatObjects.js");
const { GRUPO_DO_CLIENTE } = require("./data/tiposGrupos.js");
const { escreverPDF } = require("./scripts/generateFile.js");

// VARIAVEIS DE ESTADO
let Contato;
let ultimaListaPedidos = [];

// envia saldo automatico
const sendSaldo = async () => {
  Contato = await db.getConsulta(CONTATO_QUERY); // consultar contatos com saldo devedor e numero cadastrado
  formatedContato = formatSaldo(Contato); // formatar ids para numero, saldo para dolar e adicionar a array de contatos
  formatedContato.map((contato) => {
    for (let i = 0; i < GRUPO_DO_CLIENTE.length; i++) {
      if (GRUPO_DO_CLIENTE[i].clienteId == contato.number) {
        message = `Olá ${GRUPO_DO_CLIENTE[i].nomeCliente}, bom dia. O saldo atual em aberto é de *${contato.saldo}*!`;
        client.sendMessage(GRUPO_DO_CLIENTE[i].grupoId, message); // enviar mensagem automatica para todos eles as segundas feiras
      }
    }
  });
};

// envia aviso de vencimento ou atraso
const sendVencimento = async () => {
  let Vencidas = await db.getConsulta(VENCIDAS_QUERY);
  let formatedVencidas = formatVencidas(Vencidas);
  formatedVencidas.map(({ diasVencido, saldo, nome, number }) => {
    for (let i = 0; i < GRUPO_DO_CLIENTE.length; i++) {
      if (GRUPO_DO_CLIENTE[i].clienteId == number) {
        if (diasVencido > 0 && diasVencido <= 7) {
          if (7 - diasVencido == 0) {
            message = `Bom dia ${nome}, você possui débitos em aberto no valor de *${saldo}*, caso não seja regularizada sua conta será bloqueada *hoje*.`;
            client.sendMessage(GRUPO_DO_CLIENTE[i].grupoId, message);
          } else {
            message = `Bom dia ${nome}, você possui débitos em aberto no valor de *${saldo}*, caso não seja regularizada sua conta será bloqueada em *${
              7 - diasVencido
            }* ${7 - diasVencido == 1 ? "dia" : "dias"}.`;
            client.sendMessage(GRUPO_DO_CLIENTE[i].grupoId, message);
          }
        } else if (diasVencido < 0) {
          message = `Bom dia ${nome}, você possui saldo de *${saldo}* que vencerá em ${-diasVencido} ${
            diasVencido == 1 ? "dia" : "dias"
          }.`;
          client.sendMessage(GRUPO_DO_CLIENTE[i].grupoId, message);
        } else if (diasVencido == 0) {
          message = `Bom dia ${nome}, você possui saldo de *${saldo}* que vence *hoje*.`;
          client.sendMessage(GRUPO_DO_CLIENTE[i].grupoId, message);
        } else if (diasVencido > 7) {
          message = `Bom dia ${nome}, você possui saldo de *${saldo}* aberto á ${diasVencido} ${
            diasVencido == 1 ? "dia" : "dias"
          }, e por isso sua conta está *bloqueada*.\n\nEntre em contato com setor *Financeiro*`;
          client.sendMessage(GRUPO_DO_CLIENTE[i].grupoId, message);
        }
      }
    }
  });
};

// envia pedido faturado na última hora
const sendPedido = async () => {
  let Pedidos = await db.getConsulta(PEDIDOS_QUERY);
  let formatedPedidos = formatPedidos(Pedidos);

  // Anula a primeira busca

  if (ultimaListaPedidos.length == 0) {
    ultimaListaPedidos = formatedPedidos;
    return false;
  }

  // Verifica a diferença a cada 1 hora
  let diferenca = formatedPedidos.length - ultimaListaPedidos.length;
  //let diferenca = 3;

  // Busca detalhes do pedido para gerar PDF
  const getDadosPedido = async (doc, message) => {
    let dados = await db.getConsulta(
      `SELECT A.NOTA,A.DESCRPROD,A.QUANTIDADE,A.PRECO,B.FRETE2 AS TOTAL_PRODUTOS,B.FRETE4 AS FRETE1,B.FRETE5 AS FRETE2,B.FRETE2+B.FRETE4+B.FRETE5 TOTAL_COM_FRETE,C.CONTATO,C.Nome FROM fil090 A INNER JOIN fil080 B ON B.NOTA = A.NOTA AND B.OPERACAO = A.OPERACAO INNER JOIN vw_cadastro_cliente C ON B.NOME = C.Nome WHERE C.Contato <> '' AND A.OPERACAO = 1 AND A.STATUS = 9 AND A.NOTA = ${doc}`
    );

    let formatedDados = {
      nome: dados[0].Nome,
      nota: dados[0].NOTA,
      produtos: [],
      totalProdutos: dados[0].TOTAL_PRODUTOS,
      frete1: dados[0].FRETE1,
      frete2: dados[0].FRETE2,
      totalComFrete: dados[0].TOTAL_COM_FRETE,
      contato: dados[0].Contato,
    };

    for (let i = 0; i < dados.length; i++) {
      formatedDados.produtos.push({
        descricao: dados[i].DESCRPROD,
        quantidade: dados[i].QUANTIDADE,
        preco: dados[i].PRECO,
      });
    }
    escreverPDF(formatedDados);
    console.log(formatedDados);
    const result = MessageMedia.fromFilePath(
      `./pedido-${formatedDados.nota}.pdf`
    );
    let userId = formatedDados.contato;

    for (let i = 0; i < GRUPO_DO_CLIENTE.length; i++) {
      if (GRUPO_DO_CLIENTE[i].clienteId.includes(userId)) {
        client.sendMessage(GRUPO_DO_CLIENTE[i].grupoId, message);
        client.sendMessage(GRUPO_DO_CLIENTE[i].grupoId, result);
      }
    }
  };

  // Caso haja pedidos novos, Envia automaticamente para os respectivos contatos
  if (diferenca > 0) {
    ultimaListaPedidos = formatedPedidos;
    for (let i = 0; i < diferenca; i++) {
      message = `Seu último pedido de *Nº${formatedPedidos[i].doc}* no valor de *${formatedPedidos[i].valor}* foi faturado!`;
      await getDadosPedido(formatedPedidos[i].doc, message);
    }
  } else {
    console.log("Nenhum novo pedido faturado na última hora.");
    return false;
  }
};

module.exports = {
  sendSaldo,
  sendVencimento,
  sendPedido,
};
