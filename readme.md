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

Install a code editor (VS Code).
Install a stable version of NodeJS.
In your code editor's terminal, navigate to the project directory.
Run the command 'npm install'.

## 3. USER GUIDE
The SMOKE-BOT Software offers the following main functionalities:
Exchange rate query for the day.
Current outstanding balance inquiry.
Query for the last invoiced order on behalf of the respective client.
Automatic notifications for pending, expiring, or expired balances.
For sellers, product inventory query.
To start using the software, follow these steps:

In the following path 'helpers\mysql.js', add your Database access credentials to the 'createConnection' constant.
In the following path '\botSmokeConsulta.js', define the port on which the backend will run. Then define the IdClient, which will be your bot user.
In the terminal, execute 'node botSmokeConsulta.js' to start the server.
Open your preferred browser and navigate to http://localhost:"REPLACE_WITH_DEFINED_PORT"/.
Scan the QR Code generated with the mobile phone that will act as the application's bot.
Now you can test our Bot!!

## 4. SOFTWARE ARCHITECTURE
The SMOKE-BOT Software is based on a three-tier architecture, consisting of:
User Interface: All interactions are performed through WhatsApp.
Application Server: Uses NodeJS to manage user requests.
Database: The software only retrieves information from a pre-existing MySQL database.

## 5. CONFIGURATIONS
The SMOKE-BOT Software has some permission configuration options, including:
### CATEGORIES
Inside the 'data\categorias.js' file, add new categories following the standard structure. The property corresponds to the category description in the database, while its value refers to the internal category code.

### ACCOUNT
Inside the 'data\conta.js' file, edit it with updated account information, replacing the previous data or using "###" (hashtags) as the default.

### QUERIES
Inside the 'data\querys.js' file, define new paths for new queries or edit the default paths as needed.

### GROUP TYPES
Inside the 'data\tiposGrupos.js' file, there are two possible changes to be made. The first is to define which deposits each inventory can access. The second is where we register the groups related to each client.

### TROUBLESHOOTING
If you encounter errors and problems requiring technical support, please contact us via email at patrickn.contact@gmail.com.








# Documentação do Software SMOKE-BOT

## 1. INTRODUÇÃO

O Software SMOKE-BOT é uma aplicação de consulta a uma base de dados dentro do Whatsapp desenvolvida para facilitar o acesso de clientes e vendedores a informações que otimizam seu dia a dia.

## 2. INSTALAÇÃO

Para instalar o Software SMOKE-BOT, siga estas etapas:

1. Instale um editor de cógido (VS Code)
2. Instale uma versão estável do NodeJS
3. Abra o terminal ou prompt de comando do seu sistema operacional. No Windows, você pode usar o Prompt de Comando ou o PowerShell.
4. Navegue para o diretório onde deseja clonar o repositório: Use o comando 'cd' para navegar para o diretório desejado. Por exemplo, se você deseja clonar o repositório no diretório "Documentos", você pode executar 'cd' Documents para entrar no diretório "Documentos".
5. Clone o repositório: No terminal, execute o comando git clone seguido do URL do repositório Git que deseja clonar. `git clone https://github.com/Nazareth98/CHATBOT---JS---NODEJS-.git`
6. Navegue para o diretório do repositório clonado: Use o comando `cd` para entrar no diretório do repositório que você acabou de clonar. `cd CHATBOT---JS---NODEJS-`
7.Instale dependências: Você precisará instalar as dependências antes de executar o projeto. No caso desse projeto, você pode usar o comando `npm install` ou `yarn` para instalar as dependências listadas no arquivo `package.json`.

## 3. GUIA DO USUÁRIO

O Software SMOKE-BOT oferece as seguintes funcionalidades principais:

- Consulta a taxa de câmbio do dia.
- Consulta ao saldo devedor atual.
- Consulta ao último pedido faturado em nome do respectivo cliente.
- Notificações automáticas de saldo prestes a vencer, vencendo ou vencidos.
- Para vendedores, consulta ao estoque de produtos. Gerando automaticamente arquivo `.xlsx` com os dados necessários.
- Geração automática de arquivo `.pdf` com dados dos pedidios faturados.

Para começar a usar o software, siga estas etapas:

1. No seguinte caminho 'helpers\mysql.js', adicione suas credenciais de acesso ao Banco de Dados á constante 'createConnection'.
2. No seguinte caminho '\botSmokeConsulta.js', defina a porta em que o backend irá rodar. Em seguida defina o IdClient, que será seu usuário bot.
3. No terminal, execute 'node botSmokeConsulta.js' para iniciar o servidor.
4. Abra em seu navegador de preferência o caminho http://localhost:"SUBSTITUA_PELA_PORTA_DEFINIDA"/.
5. Escaneie o QR Code que será gerado com o celular que será o Bot da aplicação.
6. Agora você já pode testar nosso Robô!!

## 4. ARQUITETURA DO SOFTWARE

O Software SMOKE-BOT é baseado em uma arquitetura de três camadas, composta por:

- Interface do usuário: toda interação é realizada através do Whatsapp.
- Servidor de aplicativos: utiliza o NodeJS para gerenciar as requisições dos usuários.
- Banco de dados: o software apenas consulta as informações em uma base de dados pré-existente construída em MySQL.

## 5. CONFIGURAÇÕES

O Software SMOKE-BOT possui algumas opções de configuraçã de permissões que incluem:

### CATEGORIAS

Dentro do arquivo 'data\categorias.js', adicione novas categorias seguindo a estrutura padrão. Onde a propriedade corresponde a descrição da categoria no Banco de Dados, enquanto seu valor refére-se ao código interno da categoria.

### CONTA

Dentro do arquivo 'data\conta.js', edite conforme dados de conta atualizados substituíndo os dados anteriores ou "###" (hashtags) por padrão.

### QUERYS

Dentro do arquivo 'data\querys.js', defina novos caminhos para novas consultas ou edite os caminhos padrões conforme necessidade.

### TIPOS DE GRUPOS

Dentro do arquivo 'data\tiposGrupos.js', existem duas possíveis alterações a serem realizadas, a primeira é a definição de quais depósitos cada estoque pode ter acesso. A segunda é onde cadastramos os grupos referentes a cada cliente.

#### 6. SOLUCAÇÃO DE PROBLEMAS

Quando ocorrer erros e problemas que necessitem de suporte técnico, entre em contato através do email patrickn.contact@gmail.com.




