// BIBLIOTECAS UTILIZADAS PARA COMPOSIÇÃO DA API
const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");
const express = require("express");
const socketIO = require("socket.io");
const qrcode = require("qrcode");
const http = require("http");
const fileUpload = require("express-fileupload");
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
var cron = require("node-cron");
const { sendPedido, sendVencimento, sendSaldo } = require("./scripts/sendAuto");
const { formatId } = require("./scripts/formatObjects.js");
const { getOptions } = require("./scripts/getConsulta.js");
const {
  GRUPOS_FINANCEIRO,
  PORT_1,
  ID_CLIENT,
} = require("./data/variaveisAmbiente.js");

// PORTA ONDE O SERVIÇO SERÁ INICIADO
const port = PORT_1;
const idClient = ID_CLIENT;

// SERVIÇO EXPRESS
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(
  fileUpload({
    debug: true,
  })
);
app.use("/", express.static(__dirname + "/"));

app.get("/", (req, res) => {
  res.sendFile("index.html", {
    root: __dirname,
  });
});

// PARÂMETROS DO CLIENT DO WPP
const client = new Client({
  authStrategy: new LocalAuth({ clientId: idClient }),
  puppeteer: {
    headless: true,
    // CAMINHO DO CHROME PARA WINDOWS (REMOVER O COMENTÁRIO ABAIXO)
    //executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    //===================================================================================
    // CAMINHO DO CHROME PARA MAC (REMOVER O COMENTÁRIO ABAIXO)
    //executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    //===================================================================================
    // CAMINHO DO CHROME PARA LINUX (REMOVER O COMENTÁRIO ABAIXO)
    //executablePath: '/usr/bin/google-chrome-stable',
    //===================================================================================
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-accelerated-2d-canvas",
      "--no-first-run",
      "--no-zygote",
      "--single-process", // <- this one doesn't works in Windows
      "--disable-gpu",
    ],
  },
});

// INITIALIZE DO CLIENT DO WPP
client.initialize();

// EVENTOS DE CONEXÃO EXPORTADOS PARA O INDEX.HTML VIA SOCKET
io.on("connection", function (socket) {
  socket.emit("message", "© BOT-SMOKE - Iniciado");
  socket.emit("qr", "./icon.svg");

  client.on("qr", (qr) => {
    console.log("QR RECEIVED", qr);
    qrcode.toDataURL(qr, (err, url) => {
      socket.emit("qr", url);
      socket.emit(
        "message",
        "© BOT-SMOKE QRCode recebido, aponte a câmera  seu celular!"
      );
    });
  });

  client.on("ready", () => {
    socket.emit("ready", "© BOT-SMOKE Dispositivo pronto!");
    socket.emit("message", "© BOT-SMOKE Dispositivo pronto!");
    socket.emit("qr", "./check.svg");
    console.log("© BOT-SMOKE Dispositivo pronto");
  });

  client.on("authenticated", () => {
    socket.emit("authenticated", "© BOT-SMOKE Autenticado!");
    socket.emit("message", "© BOT-SMOKE Autenticado!");
    console.log("© BOT-SMOKE Autenticado");

    // envios automatizados
    cron.schedule(
      "30 8 * * Monday", //horas-minutos-diaDoMes-mes-diaDaSemana
      () => {
        sendSaldo();
      },
      null,
      true,
      "America/Sao_Paulo"
    );

    cron.schedule("10 8 * * 1-6", () => {
      sendVencimento();
    });

    cron.schedule("*/10 * * * *", () => {
      sendPedido();
    });
  });

  client.on("auth_failure", function () {
    socket.emit("message", "© BOT-SMOKE Falha na autenticação, reiniciando...");
    console.error("© BOT-SMOKE Falha na autenticação");
  });

  client.on("change_state", (state) => {
    console.log("© BOT-SMOKE Status de conexão: ", state);
  });

  client.on("disconnected", (reason) => {
    socket.emit("message", "© BOT-SMOKE Cliente desconectado!");
    console.log("© BOT-SMOKE Cliente desconectado", reason);
    client.initialize();
  });

  client.on("ready", async () => {
    socket.emit("ready", "© BOT-SMOKE Dispositivo pronto!");
    socket.emit("message", "© BOT-SMOKE Dispositivo pronto!");
    socket.emit("qr", "./check.svg");
    console.log("© BOT-SMOKE Dispositivo pronto");
    const groups = await client.getChats();
    for (const group of groups) {
      if (group.id.server.includes("g.us")) {
        GRUPOS_FINANCEIRO.push(group.id._serialized);
        console.log(group.id._serialized, group.name);
      }
    }
  });
});

// EVENTO DE ESCUTA/ENVIO DE MENSAGENS RECEBIDAS PELA API
client.on("message", async (msg) => {
  // Salva mensagem em letras minúsculas
  const keyword = msg.body.toLowerCase();

  // Salva ID de origem da mensagem
  const remetente = msg.from;

  // Transforma número em ID cadastrado no BD
  let user = msg.author || msg.from;
  let userFormated = user.slice(0, -5);
  let userId = formatId(userFormated);

  // Lê a mensagem recebida e redireciona baseando-se nela
  const replyMessage = await getOptions(
    keyword,
    client,
    MessageMedia,
    userId,
    remetente,
    msg,
    user
  );
  console.log("Mensagem recebida: ", keyword);
  console.log("Resposta: ", replyMessage);

  if (replyMessage !== false) {
    client.sendMessage(remetente, replyMessage);
  } else if (replyMessage === false) {
    return false;
  }
});

// INITIALIZE DO SERVIÇO
server.listen(port, function () {
  console.log("© SMOKE FRIENDS - Aplicativo rodando na porta *: " + port);
});
