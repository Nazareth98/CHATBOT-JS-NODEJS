// DEFINA O CHATID DE CADA GRUPO
const Estoque_BSB_BH_RS = "#################@g.us";
const Estoque_SC = "#################@g.us";
const Estoque_SP_CWB = "#################@g.us";
const Estoque_Geral = "#################@g.us";

// DEFINA A QUAIS DEPOSITOS CADA GRUPO TEM ACESSO
const GRUPOS_AUTORIZADOS = {
  Paraguay: [Estoque_Geral],
  Santa_Catarina: [Estoque_SC, Estoque_Geral],
  Sao_Paulo: [Estoque_SP_CWB, Estoque_Geral],
  Curitiba: [Estoque_SP_CWB, Estoque_Geral],
  Brasilia: [Estoque_BSB_BH_RS, Estoque_Geral],
  Porto_Alegre: [Estoque_BSB_BH_RS, Estoque_Geral],
  Belo_Horizonte: [Estoque_BSB_BH_RS, Estoque_Geral],
};

// ARRAY ALIMENTADO AO CONECTAR QR CODE
const GRUPOS_FINANCEIRO = [];

// PARA O PROJETO ORIGINAL, MENSAGENS AUTOMATICAS SÃO ENVIADAS NO GRUPO CORRESPONDENTE AO CLIENTE
const GRUPO_DO_CLIENTE = [
  {
    nomeCliente: "CLIENTE 1",
    clienteId: "############@c.us",
    nomeGrupo: "GRUPO DO CLIENTE 1",
    grupoId: "#################@g.us",
  },
  {
    nomeCliente: "CLIENTE 1",
    clienteId: "############@c.us",
    nomeGrupo: "GRUPO DO CLIENTE 1",
    grupoId: "#################@g.us",
  },
  {
    nomeCliente: "CLIENTE 1",
    clienteId: "############@c.us",
    nomeGrupo: "GRUPO DO CLIENTE 1",
    grupoId: "#################@g.us",
  },
  {
    nomeCliente: "CLIENTE 1",
    clienteId: "############@c.us",
    nomeGrupo: "GRUPO DO CLIENTE 1",
    grupoId: "#################@g.us",
  },
  {
    nomeCliente: "CLIENTE 1",
    clienteId: "############@c.us",
    nomeGrupo: "GRUPO DO CLIENTE 1",
    grupoId: "#################@g.us",
  },
  {
    nomeCliente: "CLIENTE 1",
    clienteId: "############@c.us",
    nomeGrupo: "GRUPO DO CLIENTE 1",
    grupoId: "#################@g.us",
  },
  {
    nomeCliente: "CLIENTE 1",
    clienteId: "############@c.us",
    nomeGrupo: "GRUPO DO CLIENTE 1",
    grupoId: "#################@g.us",
  },
];

module.exports = {
  GRUPOS_AUTORIZADOS,
  GRUPOS_FINANCEIRO,
  GRUPO_DO_CLIENTE,
};
