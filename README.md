# Fivem Nuxt + TS Boilerplate

## Language / Idioma

- [English](./README.md)
- [Português](./README.pt.md)

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

By doing so, it will generate the static files for FiveM, just start your resource!
