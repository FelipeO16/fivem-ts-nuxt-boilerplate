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
