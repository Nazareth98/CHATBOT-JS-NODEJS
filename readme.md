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
- Notificações automáticas de saldo presetes a vencer, vencendo ou vencidos.
- Para vendedores, consulta ao estoque de produtos. Gerando automaticamente arquivo `xlsx` com os dados necessários.
- Geração automática de arquivo `PDF` com dados dos pedidios faturados.

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
- Banco de dados: o software apenas busca as informações em uma base de dados pré-existente construída em MySQL.

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
