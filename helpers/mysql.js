// BIBLIOTECAS UTILIZADAS PARA COMPOSIÇÃO DA API
const mysql = require("mysql2/promise");

// CREDENCIAIS DO BANCO DE DADOS MYSQL
const createConnection = async () => {
  return await mysql.createConnection({
    host: "#######",
    user: "#######",
    password: "#######",
    database: "#######",
  });
};

// DELAY PARA FECHAR A CONEXAO
function delay(t, v) {
  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, v), t);
  });
}

// CONSULTAS NO BANCO DE DADOS
const getReply = async (query) => {
  const connection = await createConnection();
  const [rows] = await connection.execute(query);
  delay(1000).then(async function () {
    await connection.end();
    delay(500).then(async function () {
      connection.destroy();
      console.log("© BOT-SMOKE Conexão fechada");
    });
    console.log("© BOT-SMOKE Conexão fechada");
  });
  if (rows.length > 0) return rows[0];
  return false;
};

// RETORNA TAXA DE CAMBIO DO DIA
const getTaxa = async () => {
  const TAXA_QUERY = "SELECT padrxm02 FROM fil070 where padrxm02";
  let { padrxm02 } = await getReply(TAXA_QUERY);
  let formatedTaxa = padrxm02.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return `A taxa atual é *${formatedTaxa}*`;
};

// RETORNA DADOS DO ESTOQUE E CATEGORIA SELECIONADOS
const getData = async (deposito, categoria) => {
  if (deposito.length <= 0) {
    return false;
  }
  const connection = await createConnection();
  const [rows] = await connection.execute(
    `SELECT descricao, ${deposito} FROM vw_estoque_regiao
    WHERE ${deposito} > 0 
    and Grupo = '${categoria}'`
  );
  console.log(rows);
  delay(1000).then(async function () {
    await connection.end();
    delay(500).then(async function () {
      connection.destroy();
      console.log("© BOT-SMOKE Conexão fechada");
    });
    console.log("© BOT-SMOKE Conexão fechada");
  });
  if (rows.length > 0) return rows;
  return false;
};

// RETORNA SALDO ATUAL DO CLIENTE SOLICITADO
const getSaldo = async (userId, remetente, user) => {
  const SALDO_QUERY = `SELECT Saldo_Devedor FROM vw_saldo_cliente WHERE Contato = ${userId}`;
  let { Saldo_Devedor } = await getReply(SALDO_QUERY);
  if (Saldo_Devedor && remetente.includes("@g.us")) {
    Saldo_Devedor = -Saldo_Devedor;
    const saldoFormated = Saldo_Devedor.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    return `Olá ${user}, seu saldo atual é *${saldoFormated}*!`;
  } else {
    return "Acesso negado!\n\nVocê pode estar consultando seu saldo de uma conversa privada.\nOu seu número ainda não está cadastrado em nosso banco de dados.\n\nEntre em contato com setor *Financeiro*";
  }
};

// FUNÇÃO GENÉRICA PARA CONSULTA AO BANCO DE DADOS SEM TRATAMENTO
const getConsulta = async (query) => {
  const connection = await createConnection();
  let [dados] = await connection.execute(query);
  return dados;
};

// EXPORTANDO FUNÇÕES PARA API
module.exports = {
  createConnection,
  getReply,
  getData,
  getTaxa,
  getSaldo,
  getConsulta,
};
