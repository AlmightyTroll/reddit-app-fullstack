# readdit-app-fullstack
This reddit app using React, TypeScript, GraphQL, PostgreSQL.

start
step 1: install dependencies & scripts:
- Devdependencies: typescript, @typs/node typescript, ts-node and nodemon.
    - types/node gives access to the different type info.
    - ts-node allows you to runs any ts file in node. wont be using this but have it setup anyway.
- scripts: watch: tsc -w (creates a dist folder and creates a js file out of the ts file), dev: nodemon dist/index.js, start: "node dist/index.js".
- install tsconfig.json file to configure typescript
- dependencies: mikro-orm/cli, mikro-orm/core, mikro-orm/migrations, mikro-orm/postgresql, pg.
