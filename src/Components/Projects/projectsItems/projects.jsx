import rejuvenescerBG from "../../../Assets/img/rejuvenescerBG.png";
import dogsBG from "../../../Assets/img/dogsBG.png";
import chatBG from "../../../Assets/img/chatBG.png";

const projects = [
  {
    id: "01",
    title: "Chatbot WhastApp em JS",
    description:
      "O Software SMOKE-BOT é uma aplicação de consulta a uma base de dados dentro do Whatsapp desenvolvida para facilitar o acesso de clientes e vendedores a informações que otimizam seu dia a dia.",
    image: chatBG,
    url: "https://github.com/Nazareth98/CHATBOT-JS-NODEJS",
    github: "https://github.com/Nazareth98/CHATBOT-JS-NODEJS",
    orientation: "left",
  },
  {
    id: "02",
    title: "Dogs - Rede Social",
    description:
      "Com o objetivo de por em prática o máximo do que foi aprendido durante o curso, essa rede social conta com consumo de API externa, login via JWT (criação, edição e exclusão de usuários). Hoje utilizo esse projeto como conteúdo base para projetos desenvolvidos em sequência utilizando React.",
    image: dogsBG,
    url: "https://patricknazareth-dogs.netlify.app/",
    github: "https://github.com/Nazareth98/dogs-origamid-ReactJS",
    orientation: "right",
  },

  {
    id: "03",
    title: "Espaço Rejuvenscer",
    description:
      "Projeto desenvolvido em React, conta com a utilização do Tailwind. Ainda foi utilizado a técnica de Loading On Scroll.",
    image: rejuvenescerBG,
    url: "https://espacorejuvenescer.com/",
    github: "https://github.com/Nazareth98/rejuvenescer",
    orientation: "left",
  },
];

export default projects;
