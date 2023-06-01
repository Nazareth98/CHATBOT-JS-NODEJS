// FORMATA PARA CODIGO INTERNO DO BD
const formatId = (userFormated) => {
  if (userFormated.startsWith("595")) {
    return userFormated;
  } else {
    return userFormated.slice(2, userFormated.length);
  }
};

/* As funções a baixo formatam objetos solicitados no Chat */
const formatPedidos = (Pedidos) => {
  dados = [];
  for (let i = 0; i < Pedidos.length; i++) {
    if (Pedidos[i].Contato.startsWith("595")) {
      dados.push({
        doc: Pedidos[i].NOTA,
        number: Pedidos[i].Contato + "@c.us",
        valor: Pedidos[i].TOTAL_COM_FRETE.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        }),
      });
    } else {
      dados.push({
        doc: Pedidos[i].NOTA,
        number: "55" + Pedidos[i].Contato + "@c.us",
        valor: Pedidos[i].TOTAL_COM_FRETE.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        }),
      });
    }
  }
  return dados;
};

const formatSaldo = (Contato) => {
  dados = [];
  for (let i = 0; i < Contato.length; i++) {
    if (Contato[i].Contato.startsWith("595")) {
      dados.push({
        number: Contato[i].Contato + "@c.us",
        saldo: (-Contato[i].Saldo_Devedor).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        }),
      });
    } else {
      dados.push({
        number: "55" + Contato[i].Contato + "@c.us",
        saldo: (-Contato[i].Saldo_Devedor).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        }),
      });
    }
  }
  return dados;
};

const formatVencidas = (Vencidas) => {
  dados = [];
  for (let i = 0; i < Vencidas.length; i++) {
    if (Vencidas[i].CONTATO.startsWith("595")) {
      dados.push({
        nome: Vencidas[i].nome,
        number: Vencidas[i].CONTATO + "@c.us",
        saldo: Vencidas[i].SALDO_DEVEDOR.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        }),
        diasVencido: Vencidas[i].Dias_vencido,
      });
    } else {
      dados.push({
        nome: Vencidas[i].nome,
        number: "55" + Vencidas[i].CONTATO + "@c.us",
        saldo: Vencidas[i].SALDO_DEVEDOR.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        }),
        diasVencido: Vencidas[i].Dias_vencido,
      });
    }
  }

  return dados;
};

module.exports = {
  formatPedidos,
  formatId,
  formatSaldo,
  formatVencidas,
};
