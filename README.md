# Fivem Nuxt + TS Boilerplate

The "fivem-ts-nuxt-boilerplate" is a boilerplate for web application development in the FiveM environment using the Nuxt.js framework and TypeScript. This boilerplate includes predefined configurations for both frameworks and basic resources to make it easier to create new projects.

## Environment Configuration

To use the boilerplate, you will need to have Node.js and Yarn installed on your system. After installing them, open the terminal in the project folder and run the following command to install all dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Starting the Server

To start the server, run the following command:

```bash
npm run dev
```

This command will start the Nuxt.js server in development mode, allowing you to start building your application.

## Project Structure

The project is structured according to the standard conventions of Nuxt.js. The assets folder contains resources such as images and CSS files. The components folder contains reusable Vue.js components. The layouts folder contains layouts for different pages and the pages folder contains the Vue.js pages for the application.

The server folder contains the FiveM server files. The server.ts file is the entry point for the server and contains the server configurations. The src folder contains the TypeScript code for the server.

## Integrating with FiveM

To integrate the project with FiveM, you need to create a resource on the FiveM server. Create a folder for the resource in the server's resources folder, and then copy all the files from the fivem-ts-nuxt-boilerplate project to the resource folder.

Additionally, you need to update the fxmanifest.lua file to include the new resource. Add the following code to the file:

```bash
resource_type 'nui_page' {    -- defines that the resource is a web page
    name = 'Nuxt.js App',    -- the name of the resource
    url = '/',              -- the URL of the web page
    files = {               -- the files that will be sent to the client
        'dist/**/*'
    }
}
```

## Building the Project

To build the project, run the following command:

```bash
npm run build
```

This command will create a dist folder in the root of the project containing the compiled application files ready to be deployed.

To run the compiled application, run the following command:

```bash
yarn start
```

This command will start the Nuxt.js server in production mode, serving the compiled files in the dist folder. Make sure to build the project before running this command.

## Adding to FiveM

```bash
npm run generate
```

By doing so, it will generate the static files for FiveM, just link your script!

# Fivem Nuxt + TS Boilerplate

O "fivem-ts-nuxt-boilerplate" é um boilerplate para desenvolvimento de aplicações web no ambiente FiveM utilizando o framework Nuxt.js e TypeScript. Este boilerplate inclui configurações predefinidas para ambos os frameworks e recursos básicos para facilitar a criação de novos projetos.

## Configuração do Ambiente

Para usar o boilerplate, você precisará ter o Node.js e o Yarn instalados em seu sistema. Depois de instalá-los, abra o terminal na pasta do projeto e execute o seguinte comando para instalar todas as dependências:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Iniciando o Servidor

Para iniciar o servidor, execute o seguinte comando:

```bash
npm run dev
```

Este comando iniciará o servidor Nuxt.js em modo de desenvolvimento, permitindo que você comece a construir sua aplicação.

## Estrutura do Projeto

O projeto está estruturado de acordo com as convenções padrão do Nuxt.js. A pasta assets contém recursos como imagens e arquivos CSS. A pasta components contém componentes Vue.js reutilizáveis. A pasta layouts contém os layouts para diferentes páginas e a pasta pages contém as páginas Vue.js para o aplicativo.

A pasta server contém os arquivos do servidor FiveM. O arquivo server.ts é o ponto de entrada do servidor e contém as configurações do servidor. A pasta src contém o código TypeScript para o servidor.

## Integrando com o FiveM

Para integrar o projeto com o FiveM, é necessário criar um recurso no servidor FiveM. Crie uma pasta para o recurso na pasta resources do servidor e, em seguida, copie todos os arquivos do projeto fivem-ts-nuxt-boilerplate para a pasta do recurso.

Além disso, é necessário atualizar o arquivo fxmanifest.lua para incluir o novo recurso. Adicione o seguinte código ao arquivo:

```bash
resource_type 'nui_page' {    -- define que o recurso é uma página web
    name = 'Nuxt.js App',    -- nome do recurso
    url = '/',              -- a URL da página web
    files = {               -- os arquivos que serão enviados ao cliente
        'dist/**/*'
    }
}
```

## Construção do Projeto

Para construir o projeto, execute o seguinte comando:

```bash
npm run build
```

Este comando criará uma pasta dist na raiz do projeto contendo os arquivos da aplicação compilados e prontos para serem implantados.

Para executar a aplicação compilada, execute o seguinte comando:

```bash
yarn start
```

Este comando iniciará o servidor Nuxt.js em modo de produção, servindo os arquivos compilados na pasta dist. Certifique-se de ter construído o projeto antes de executar este comando.

## Adicionando ao Fivem

```bash
npm run generate
```

Fazendo isso, irá gerar os arquivos estáticos para o fivem, basta ligar o seu script!
