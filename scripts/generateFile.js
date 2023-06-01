const XLSX = require("xlsx");
const fs = require("fs");
const { jsPDF } = require("jspdf");
const autoTable = require("jspdf-autotable");

const escreverXLSX = (filePath, dados) => {
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.aoa_to_sheet(dados);
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet 1");
  XLSX.writeFile(workbook, filePath);
  console.log("Arquivo criado", filePath);
};

const escreverPDF = (pedido) => {
  const doc = new jsPDF();
  doc.setFont("helvetica", "initial", "normal");
  doc.autoTable({
    head: [["DADOS DO PEDIDO", ""]],
    body: [
      ["Nome do Cliente", pedido.nome.toString()],
      ["nº Pedido", pedido.nota.toString()],
      ["Telefone para Contato", pedido.contato],
    ],
    startY: 10,
    theme: "grid",
  });

  let dadosTabela = [["DESCRICAO", "PRECO", "QUANTIDADE"]];
  let sumProdutos = 0;
  pedido.produtos.map((produto) => {
    sumProdutos = sumProdutos + produto.quantidade;
    dadosTabela.push([
      produto.descricao,
      produto.preco.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      }),
      produto.quantidade.toString(),
    ]);
  });

  doc.autoTable({
    head: [dadosTabela[0]],
    body: dadosTabela.slice(1),
    startY: 60,
    theme: "plain",
  });

  doc.autoTable({
    head: [["RESUMO DOS VALORES", ""]],
    body: [
      ["Quantidade de Produtos", sumProdutos.toString()],
      [
        "Total dos Produtos",
        pedido.totalProdutos.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        }),
      ],
      [
        "Frete Interno",
        pedido.frete1.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        }),
      ],
      [
        "Frete % ",
        pedido.frete2.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        }),
      ],
      [
        "Valor Total",
        pedido.totalComFrete.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        }),
      ],
    ],
    startY: 220,
    theme: "grid",
  });

  doc.save(`pedido-${pedido.nota}.pdf`);
  console.log("Arquivo Gerado");
};

module.exports = {
  escreverXLSX,
  escreverPDF,
};
