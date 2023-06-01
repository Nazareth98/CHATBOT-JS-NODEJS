const db = require("../helpers/mysql");
const { escreverXLSX } = require("./generateFile");
const { CATEGORIAS, GRUPOS_AUTORIZADOS } = require("../data/variaveisAmbiente");

let escopoAtual;

const getDepositosAutorizados = (remetente) => {
  let depositosAutorizados = [];
  for (const prop in GRUPOS_AUTORIZADOS) {
    if (GRUPOS_AUTORIZADOS[prop].includes(remetente)) {
      depositosAutorizados.push(prop);
    }
  }
  return depositosAutorizados;
};

const getCategoria = async (
  dadosEstoque,
  MessageMedia,
  deposito,
  remetente
) => {
  console.log(remetente);
  let filePath = `./estoque-${deposito}.xlsx`;
  dados = [["DESCRIÇÃO", "ESTOQUE ATUAL", "PEDIDO"]];
  for (let i = 0; i < dadosEstoque.length; i++) {
    dados.push(new Array(dadosEstoque[i].descricao, dadosEstoque[i][deposito]));
  }
  console.log("dados buscados dentro do for", dados);
  if (dados.length > 1) {
    escreverXLSX(filePath, dados);
    const media = await MessageMedia.fromFilePath(filePath);
    return media;
  } else {
    return `No momento não temos estoque dessa categoria no depósito de ${deposito}!`;
  }
};

const sendFile = async (remetente, results, client, MessageMedia) => {
  const chatId = remetente; // ID do chat para onde você deseja enviar o documento
  const chat = await client.getChatById(chatId);
  if (!chatId.includes("c.us")) {
    for (let i = 0; i < results.length; i++) {
      if (results[i] instanceof MessageMedia) {
        await chat.sendMessage(results[i]); // Envia o documento para o chat
      } else {
        await chat.sendMessage(results[i]); // Envia a mensagem de aviso caso não tenha estoque
      }
    }
  } else {
    await chat.sendMessage(
      "O estoque precisa ser solicitado dentro de um grupo autorizado."
    );
    return null;
  }
};

const getEstoque = async (keyword, remetente, MessageMedia, client) => {
  if (keyword == "#estoque" && remetente.includes("c.us")) {
    return "O estoque precisa ser solicitado dentro de um grupo autorizado.";
  } else {
    switch (keyword) {
      case "#estoque":
        escopoAtual = "estoque";
        setTimeout(() => {
          if (escopoAtual == "estoque") {
            escopoAtual = "";
          }
        }, 20000);
        return `Agora selecione a categoria desejada:\n*#V15*\n*#V25*\n*#V35*\n*#V40*\n*#V50*\n*#V60*\n*#VAPORESSO*\n*#WAKA 10000 3%*\n*#WAKA 1800*\n*#WAKA 6000*\n\n*0* - Encerrar consulta`;
      case "0":
        escopoAtual = "";
        return false;
      case "#black sheep":
        promises = getDepositosAutorizados(remetente).map(async (deposito) => {
          dadosEstoque = await db.getData(deposito, CATEGORIAS.BLACK_SHEEP);
          return getCategoria(dadosEstoque, MessageMedia, deposito, remetente);
        });
        results = await Promise.all(promises);
        sendFile(remetente, results, client, MessageMedia);
        break;

      case "#elfbar 4000":
        promises = getDepositosAutorizados(remetente).map(async (deposito) => {
          dadosEstoque = await db.getData(deposito, CATEGORIAS.ELFBAR_4000);
          return getCategoria(dadosEstoque, MessageMedia, deposito, remetente);
        });
        results = await Promise.all(promises);
        sendFile(remetente, results, client, MessageMedia);
        break;
      case "#elfbar 6000":
        promises = getDepositosAutorizados(remetente).map(async (deposito) => {
          dadosEstoque = await db.getData(deposito, CATEGORIAS.ELFBAR_6000);
          return getCategoria(dadosEstoque, MessageMedia, deposito, remetente);
        });
        results = await Promise.all(promises);
        sendFile(remetente, results, client, MessageMedia);
        break;
      case "#desconto ignite":
        promises = getDepositosAutorizados(remetente).map(async (deposito) => {
          dadosEstoque = await db.getData(deposito, CATEGORIAS.DESCONTO_IGNITE);
          return getCategoria(dadosEstoque, MessageMedia, deposito, remetente);
        });
        results = await Promise.all(promises);
        sendFile(remetente, results, client, MessageMedia);
        break;
      case "#v15":
        promises = getDepositosAutorizados(remetente).map(async (deposito) => {
          dadosEstoque = await db.getData(deposito, CATEGORIAS.IGNITE_V15);
          return getCategoria(dadosEstoque, MessageMedia, deposito, remetente);
        });
        results = await Promise.all(promises);
        sendFile(remetente, results, client, MessageMedia);
        break;
      case "#v25":
        promises = getDepositosAutorizados(remetente).map(async (deposito) => {
          dadosEstoque = await db.getData(deposito, CATEGORIAS.IGNITE_V25);
          return getCategoria(dadosEstoque, MessageMedia, deposito, remetente);
        });
        results = await Promise.all(promises);
        sendFile(remetente, results, client, MessageMedia);
        break;
      case "#v35":
        promises = getDepositosAutorizados(remetente).map(async (deposito) => {
          dadosEstoque = await db.getData(deposito, CATEGORIAS.IGNITE_V35);
          return getCategoria(dadosEstoque, MessageMedia, deposito, remetente);
        });
        results = await Promise.all(promises);
        sendFile(remetente, results, client, MessageMedia);
        break;
      case "#v40":
        promises = getDepositosAutorizados(remetente).map(async (deposito) => {
          dadosEstoque = await db.getData(deposito, CATEGORIAS.IGNITE_V40);
          return getCategoria(dadosEstoque, MessageMedia, deposito, remetente);
        });
        results = await Promise.all(promises);
        sendFile(remetente, results, client, MessageMedia);
        break;
      case "#v50":
        promises = getDepositosAutorizados(remetente).map(async (deposito) => {
          dadosEstoque = await db.getData(deposito, CATEGORIAS.IGNITE_V50);
          return getCategoria(dadosEstoque, MessageMedia, deposito, remetente);
        });
        results = await Promise.all(promises);
        sendFile(remetente, results, client, MessageMedia);
        break;
      case "#v60":
        promises = getDepositosAutorizados(remetente).map(async (deposito) => {
          dadosEstoque = await db.getData(deposito, CATEGORIAS.IGNITE_V60);
          return getCategoria(dadosEstoque, MessageMedia, deposito, remetente);
        });
        results = await Promise.all(promises);
        sendFile(remetente, results, client, MessageMedia);
        break;
      case "#loom 7000":
        promises = getDepositosAutorizados(remetente).map(async (deposito) => {
          dadosEstoque = await db.getData(deposito, CATEGORIAS.LOOM_7000);
          return getCategoria(dadosEstoque, MessageMedia, deposito, remetente);
        });
        results = await Promise.all(promises);
        sendFile(remetente, results, client, MessageMedia);
        break;
      case "#relx moon":
        promises = getDepositosAutorizados(remetente).map(async (deposito) => {
          dadosEstoque = await db.getData(
            deposito,
            CATEGORIAS.RELX_MOON_1500_PUFF
          );
          return getCategoria(dadosEstoque, MessageMedia, deposito, remetente);
        });
        results = await Promise.all(promises);
        sendFile(remetente, results, client, MessageMedia);
        break;
      case "#vaporesso":
        promises = getDepositosAutorizados(remetente).map(async (deposito) => {
          dadosEstoque = await db.getData(deposito, CATEGORIAS.VAPORESSO);
          return getCategoria(dadosEstoque, MessageMedia, deposito, remetente);
        });
        results = await Promise.all(promises);
        sendFile(remetente, results, client, MessageMedia);
        break;
      case "#waka 10000 3%":
        promises = getDepositosAutorizados(remetente).map(async (deposito) => {
          dadosEstoque = await db.getData(
            deposito,
            CATEGORIAS.WAKKA_POD_10000_3
          );
          return getCategoria(dadosEstoque, MessageMedia, deposito, remetente);
        });
        results = await Promise.all(promises);
        sendFile(remetente, results, client, MessageMedia);
        break;
      case "#waka 10000 5%":
        promises = getDepositosAutorizados(remetente).map(async (deposito) => {
          dadosEstoque = await db.getData(
            deposito,
            CATEGORIAS.WAKKA_POD_10000_5
          );
          return getCategoria(dadosEstoque, MessageMedia, deposito, remetente);
        });
        results = await Promise.all(promises);
        sendFile(remetente, results, client, MessageMedia);
        break;
      case "#waka 1800":
        promises = getDepositosAutorizados(remetente).map(async (deposito) => {
          dadosEstoque = await db.getData(deposito, CATEGORIAS.WAKKA_POD_1800);
          return getCategoria(dadosEstoque, MessageMedia, deposito, remetente);
        });
        results = await Promise.all(promises);
        sendFile(remetente, results, client, MessageMedia);
        break;
      case "#waka 3500":
        promises = getDepositosAutorizados(remetente).map(async (deposito) => {
          dadosEstoque = await db.getData(deposito, CATEGORIAS.WAKKA_POD_3500);
          return getCategoria(dadosEstoque, MessageMedia, deposito, remetente);
        });
        results = await Promise.all(promises);
        sendFile(remetente, results, client, MessageMedia);
        break;
      case "#waka 600":
        promises = getDepositosAutorizados(remetente).map(async (deposito) => {
          dadosEstoque = await db.getData(deposito, CATEGORIAS.WAKKA_POD_600);
          return getCategoria(dadosEstoque, MessageMedia, deposito, remetente);
        });
        results = await Promise.all(promises);
        sendFile(remetente, results, client, MessageMedia);
        break;
      case "#waka 6000":
        promises = getDepositosAutorizados(remetente).map(async (deposito) => {
          dadosEstoque = await db.getData(deposito, CATEGORIAS.WAKKA_POD_6000);
          return getCategoria(dadosEstoque, MessageMedia, deposito, remetente);
        });
        results = await Promise.all(promises);
        sendFile(remetente, results, client, MessageMedia);
        break;
      case "#waka 6000 5%":
        promises = getDepositosAutorizados(remetente).map(async (deposito) => {
          dadosEstoque = await db.getData(
            deposito,
            CATEGORIAS.WAKKA_POD_6000_5
          );
          return getCategoria(dadosEstoque, MessageMedia, deposito, remetente);
        });
        results = await Promise.all(promises);
        sendFile(remetente, results, client, MessageMedia);
        break;
      default:
        return false;
    }
  }
};

module.exports = {
  getEstoque,
};
