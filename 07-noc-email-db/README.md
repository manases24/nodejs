# Proyecto NOC

Crear una serie de tareas usando Clean Architecture con TypeScript

# Dev

1. Clonar archivo `env.template` a `.env`

2. Configurar las variables de entorno

```
PORT=3000
MAILER_EMAIL=adfad@gmail.com
MAILER_SECRET_KEY=adfadfaa
MAILER_SERVICE=gmail
PROD=false

MONGO_USERNAME=superman
MONGO_PASSWORD=superman
MONGO_DB_NAME=noc
MONGO_URL=mongodb://superman:superman@localhost:27017

POSTGRES_USER=superman
POSTGRES_PASSWORD=superman
POSTGRES_DB=noc
POSTGRES_URL=
```

3. Ejecutar el comando `pnpm install`

4. Levantar DB con el comando `docker compose up -d`

5. Ejecutar el comando `pnpm dev`

# Node con TypeScript - TS-Node-dev (preferido)

1. Instalar TypeScript y demás dependencias

```
pnpm i -D typescript @types/node ts-node-dev rimraf
```

2. Inicializar el archivo de configuración de TypeScript ( Se puede configurar al gusto)

```
npx tsc --init --outDir dist/ --rootDir src
```

3. Crear scripts para dev, build y start ([Más sobre TS-Node-dev aquí](https://www.npmjs.com/package/ts-node-dev))

```
  "dev": "tsnd --respawn --clear src/app.ts",
  "build": "rimraf ./dist && tsc",
  "start": "npm run build && node dist/app.js"
```

# Pasos para configurar Jest con TypeScript, en Node

Documentación [oficial sobre Jest](https://jestjs.io/docs/getting-started)

1. Instalaciones de desarrollo (super test es útil para probar Express)

```

pnpm install -D jest @types/jest ts-jest supertest

```

2. Crear archivo de configuración de Jest

```

npx jest --init

```

3. En el archivo **jest.config.js** configurar

```

preset: 'ts-jest',
testEnvironment: "jest-environment-node",

// Opcional - The paths to modules that run some code to configure or set up the testing environment before each test
// setupFiles: ['dotenv/config'],

```

4. Crear scripts en el **package.json**

```

"test": "jest",
"test:watch": "jest --watch",
"test:coverage": "jest --coverage",

```
