# leetcode

How to setup a TS Project:

Intialize your project in repo directory

`npm init -y`

Install TypeSCript

`npm install --save-dev typescript`

Install ts-node so that we can run TypeScript files directly in Node.js without needing to compile them manually to JavaScript (script, dev tooling, localing test) & @types/node for TypeScript type definitions for Node.js (e.g. types for fs, path, process, etc.)

`npm install --save-dev ts-node @types/node`

Set up a `tsconfig.json`

`npx tsc --init`

## How to run TS file in terminal

Start ts-node / REPL

`npx ts-node`

Import function from file

`import { functionName } from './filepath/filename`

`functionName(params...)`
