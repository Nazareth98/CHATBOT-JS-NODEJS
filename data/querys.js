const PEDIDOS_QUERY =
  "SELECT DOCUMENTO, TOTAL, CONTATO FROM VW_ULTIMA_VENDA WHERE CONTATO <> '' ORDER BY DOCUMENTO DESC";
const VENCIDAS_QUERY =
  "SELECT  A.Codigo_Cliente, A.nome, SUM(A.SALDO_DEVEDOR) AS SALDO_DEVEDOR, A.Dias_vencido, A.vencimento, A.CONTATO FROM vw_vencidas_data A WHERE DIAS_VENCIDO > -3 AND DIAS_VENCIDO < 9 AND CONTATO <> '' AND A.Codigo_Cliente NOT IN ('920','33','1976') GROUP BY A.Codigo_Cliente , A.Dias_vencido";
const CONTATO_QUERY =
  "SELECT Contato, saldo_devedor FROM vw_Saldo_Cliente WHERE saldo_devedor <> '' AND Contato <> ''";

module.exports = {
  CONTATO_QUERY,
  VENCIDAS_QUERY,
  PEDIDOS_QUERY,
};
