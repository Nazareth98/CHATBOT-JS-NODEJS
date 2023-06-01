# SMOKE-BOT Software Documentation

<h1 align="center">
  <img alt="Gif exemplificando consultas" title="Sistema de consulta de dados" src="https://github.com/Nazareth98/CHATBOT---JS---NODEJS-/blob/main/gifConsulta.gif" height="350" />
  <img alt="Gif exemplificando geração de arquivo" title="Sistema de consulta de estoque" src="https://github.com/Nazareth98/CHATBOT---JS---NODEJS-/blob/main/gifEstoque.gif" height="350" />
  <img alt="Imagem de arquivo PDF gerado" title="Arquivo PDF gerado" src="https://github.com/Nazareth98/CHATBOT---JS---NODEJS-/blob/main/arquivoPdf.png" height="350" />
  <img alt="Imagem de arquivo XLSX gerado" title="Arquivo XLSX gerado" src="https://github.com/Nazareth98/CHATBOT---JS---NODEJS-/blob/main/arquivoXlsx.png" height="350" />

</h1>

## 1. INTRODUCTION
The SMOKE-BOT Software is a WhatsApp-based application for querying a database, designed to facilitate access to information that optimizes the day-to-day activities of clients and sellers.

## 2. INSTALLATION
To install the SMOKE-BOT Software, follow these steps:

1. To run the software, it is recommended to install the stable version of VSCode and NodeJS.
2. Navigate to the directory where you want to clone the repository: Use the `cd` command to navigate to the desired directory. For example, if you want to clone the repository in the "Documents" directory, you can run `cd Documents` to enter the "Documents" directory.
3. Clone the repository: In the terminal, execute the 'git clone' command followed by the URL of the Git repository you want to clone. `git clone https://github.com/Nazareth98/CHATBOT---JS---NODEJS-.git`
4.Install dependencies: You will need to install the dependencies before running the project. In the case of this project, you can use the `npm install` or `yarn` command to install the dependencies listed in the `package.json` file.

## 3. USER GUIDE
The SMOKE-BOT Software offers the following main functionalities:
- Exchange rate query for the day.
- Current outstanding balance inquiry.
- Query for the last invoiced order on behalf of the respective client.
- Automatic notifications for pending, expiring, or expired balances.
- For sellers, product inventory query.

To start using the software, follow these steps:

1. In the following path `data\environmentVariables.js`, define the environment variables according to your needs and preferences.
2. In the terminal, execute `node botSmokeConsulta.js` to start the server.
3. Open your preferred browser and navigate to `http://localhost:"REPLACE_WITH_DEFINED_PORT"/`.
4. Scan the QR Code generated with the mobile phone that will act as the application's bot.
5. Now you can test our Bot!!

## 4. SOFTWARE ARCHITECTURE
The SMOKE-BOT Software is based on a three-tier architecture, consisting of:

- User Interface: All interactions are performed through WhatsApp.
- Application Server: Uses NodeJS to manage user requests.
- Database: The software only retrieves information from a pre-existing MySQL database.

## 5. CONFIGURATIONS
The SMOKE-BOT Software has some permission configuration options, including:
### CATEGORIES
Add new categories following the standard structure. The property corresponds to the category description in the database, while its value refers to the internal category code.

### ACCOUNT
Edit it with updated account information, replacing the previous data or using "###" (hashtags) as the default.

### QUERIES
Define new paths for new queries or edit the default paths as needed.

### GROUP TYPES
There are two possible changes to be made. The first is to define which deposits each inventory can access. The second is where we register the groups related to each client.

### TROUBLESHOOTING
If you encounter errors and problems requiring technical support, please contact us via email at patrickn.contact@gmail.com.








# Documentação do Software SMOKE-BOT

## 1. INTRODUÇÃO

O Software SMOKE-BOT é uma aplicação de consulta a uma base de dados dentro do Whatsapp desenvolvida para facilitar o acesso de clientes e vendedores a informações que otimizam seu dia a dia.

## 2. INSTALAÇÃO

Para instalar o Software SMOKE-BOT, siga estas etapas:

1. Para rodar o Software é recomendado installar a versão estável do VSCode e NodeJS.
2. Navegue para o diretório onde deseja clonar o repositório: Use o comando 'cd' para navegar para o diretório desejado. Por exemplo, se você deseja clonar o repositório no diretório "Documentos", você pode executar 'cd' Documents para entrar no diretório "Documentos".
3. Clone o repositório: No terminal, execute o comando git clone seguido do URL do repositório Git que deseja clonar. `git clone https://github.com/Nazareth98/CHATBOT---JS---NODEJS-.git`
4. Instale dependências: Você precisará instalar as dependências antes de executar o projeto. No caso desse projeto, você pode usar o comando `npm install` ou `yarn` para instalar as dependências listadas no arquivo `package.json`.

## 3. GUIA DO USUÁRIO

O Software SMOKE-BOT oferece as seguintes funcionalidades principais:

- Consulta a taxa de câmbio do dia.
- Consulta ao saldo devedor atual.
- Consulta ao último pedido faturado em nome do respectivo cliente.
- Notificações automáticas de saldo prestes a vencer, vencendo ou vencidos.
- Para vendedores, consulta ao estoque de produtos. Gerando automaticamente arquivo `.xlsx` com os dados necessários.
- Geração automática de arquivo `.pdf` com dados dos pedidios faturados.

Para começar a usar o software, siga estas etapas:

1. No seguinte caminho `data\variaveisAmbiente.js`, defina as variáveis de ambiente de acordo com sua necessidade e preferência.
2. No terminal, execute `node botSmokeConsulta.js` para iniciar o servidor.
3. Abra em seu navegador de preferência o caminho `http://localhost:"SUBSTITUA_PELA_PORTA_DEFINIDA"/`.
4. Escaneie o QR Code que será gerado com o celular que será o Bot da aplicação.
5. Agora você já pode testar nosso Robô!!

## 4. ARQUITETURA DO SOFTWARE

O Software SMOKE-BOT é baseado em uma arquitetura de três camadas, composta por:

- Interface do usuário: toda interação é realizada através do Whatsapp.
- Servidor de aplicativos: utiliza o NodeJS para gerenciar as requisições dos usuários.
- Banco de dados: o software apenas consulta as informações em uma base de dados pré-existente construída em MySQL.

## 5. CONFIGURAÇÕES

O Software SMOKE-BOT possui algumas opções de configuraçã de permissões que incluem:

### CATEGORIAS

Adicione novas categorias seguindo a estrutura padrão. Onde a propriedade corresponde a descrição da categoria no Banco de Dados, enquanto seu valor refére-se ao código interno da categoria.

### CONTA

Edite conforme dados de conta atualizados substituíndo os dados anteriores ou "###" (hashtags) por padrão.

### QUERYS

Defina novos caminhos para novas consultas ou edite os caminhos padrões conforme necessidade.

### TIPOS DE GRUPOS

Existem duas possíveis alterações a serem realizadas, a primeira é a definição de quais depósitos cada estoque pode ter acesso. A segunda é onde cadastramos os grupos referentes a cada cliente.

## 6. SOLUCAÇÃO DE PROBLEMAS

Quando ocorrer erros e problemas que necessitem de suporte técnico, entre em contato através do email patrickn.contact@gmail.com.




