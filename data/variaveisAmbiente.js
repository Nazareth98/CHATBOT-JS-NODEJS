/*TIPOS DE GRUPO */
// DEFINA O CHATID DE CADA GRUPO
const Estoque_1 = "#################@g.us";
const Estoque_2 = "#################@g.us";
const Estoque_3 = "#################@g.us";
const Estoque_Geral = "#################@g.us";

// DEFINA A QUAIS DEPOSITOS CADA GRUPO TEM ACESSO
const GRUPOS_AUTORIZADOS = {
  Paraguay: [Estoque_Geral],
  Santa_Catarina: [Estoque_2, Estoque_Geral],
  Sao_Paulo: [Estoque_3, Estoque_Geral],
  Curitiba: [Estoque_3, Estoque_Geral],
  Brasilia: [Estoque_1, Estoque_Geral],
  Porto_Alegre: [Estoque_1, Estoque_Geral],
  Belo_Horizonte: [Estoque_1, Estoque_Geral],
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

/* QUERYS  */
const PEDIDOS_QUERY =
  "SELECT DOCUMENTO, TOTAL, CONTATO FROM VW_ULTIMA_VENDA WHERE CONTATO <> '' ORDER BY DOCUMENTO DESC";
const VENCIDAS_QUERY =
  "SELECT  A.Codigo_Cliente, A.nome, SUM(A.SALDO_DEVEDOR) AS SALDO_DEVEDOR, A.Dias_vencido, A.vencimento, A.CONTATO FROM vw_vencidas_data A WHERE DIAS_VENCIDO > -3 AND DIAS_VENCIDO < 9 AND CONTATO <> '' AND A.Codigo_Cliente NOT IN ('920','33','1976') GROUP BY A.Codigo_Cliente , A.Dias_vencido";
const CONTATO_QUERY =
  "SELECT Contato, saldo_devedor FROM vw_Saldo_Cliente WHERE saldo_devedor <> '' AND Contato <> ''";

/* CONTA */
const DADOS_CONTA =
  "Banco: *Banco do Brasil - 001* \nNome Destino: *##* \nAG: #### \nCC: #### \nCNPJ/CPF: ##.###.###/#-## \nCHAVE PIX: #### \nLIMITE: ILIMITADO \n*AVISOS*: NÃO SERÃO CONTABILIZADOS PIX FEITOS ATRAVES DO CNPJ\n*AVISOS*: DEPOSITOS EM EFETIVO,CHEQUE E CAIXA ELETRONICO SERAO TRIBUTADOS EM ##%";

/* CATEGORIAS */
const CATEGORIAS = {
  //BLACK_SHEEP: "1.01.03.01.001.001",
  //NOME_DA_CATEGORIA: "CÓDIGO INTERNO DA CATEGORIA",
  //
};

module.exports = {
  GRUPOS_AUTORIZADOS,
  GRUPOS_FINANCEIRO,
  GRUPO_DO_CLIENTE,
  CONTATO_QUERY,
  VENCIDAS_QUERY,
  PEDIDOS_QUERY,
  DADOS_CONTA,
  CATEGORIAS,
};
