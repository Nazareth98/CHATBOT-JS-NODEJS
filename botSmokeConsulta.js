const db = require("../helpers/mysql");
const { formatPedidos } = require("./formatObjects");
const {
  PEDIDOS_QUERY,
  GRUPOS_FINANCEIRO,
  DADOS_CONTA,
} = require("../data/variaveisAmbiente");

// VÁRIAVEL QUE
let escopoAtual = "";

// Busca o último pedido faturado
const getUltimoPedido = async (Pedidos, remetente, user) => {
  if (remetente.includes("g.us")) {
    for (let i = 0; i < Pedidos.length; i++) {
      if (Pedidos[i].number == user) {
        message = `Seu último pedido faturado é o *Nº${Pedidos[i].doc}* no valor de *${Pedidos[i].valor}*!`;
        return message;
      } else {
        message = "Você não possui pedidos faturados recentemente!";
        return message;
      }
    }
  } else {
    return "Você deve solicitar o *último pedido* dentro de um grupo autorizado.";
  }
};

// Retorna resposta automática de acordo com solicitação
const getOptions = async (keyword, client, userId, remetente, msg, user) => {
  if (escopoAtual == "") {
    switch (keyword) {
      case "#consulta":
        escopoAtual = "consulta";
        setTimeout(() => {
          if (escopoAtual == "consulta") {
            escopoAtual = "";
          }
        }, 30000);
        return "Olá, tudo bem?\n\nSelecione a Opção desejada:\n\n*1* - Taxa de câmbio do dia\n*2* - Conta para depósitos\n*3* - Saldo atual\n*4* - Último pedido faturado\n\n*0* - encerrar consulta";
      default:
        return false;
    }
  } else if (escopoAtual == "consulta") {
    switch (keyword) {
      case "0":
        escopoAtual = "";
        return "Consulta finalizada.";
      case "1":
        escopoAtual = "";
        // Se for o numero do Alexandre dispara para todos os grupos
        if (user === "595992766137@c.us") {
          console.log(GRUPOS_FINANCEIRO);
          for (let i = 0; i < GRUPOS_FINANCEIRO.length; i++) {
            const chat = await client.getChatById(GRUPOS_FINANCEIRO[i]);
            const message = await db.getTaxa();
            chat.sendMessage(message);
          }
        } else {
          return db.getTaxa();
        }
        break;
      case "2":
        escopoAtual = "";
        return DADOS_CONTA;
      case "3":
        escopoAtual = "";
        return db.getSaldo(userId, remetente, msg._data.notifyName);
      case "4":
        escopoAtual = "";
        let Pedidos = await db.getConsulta(PEDIDOS_QUERY);
        let formatedPedidos = formatPedidos(Pedidos);
        return getUltimoPedido(formatedPedidos, remetente, user);
      default:
        return false;
    }
  }
};

module.exports = {
  getOptions,
};
