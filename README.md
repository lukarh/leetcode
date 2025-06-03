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

# Useful Methods

`.has(key: K): boolean - Checks if the map contains the key.`

`.get(key: K): V | undefined - Returns the value for the given key, or undefined if the key doesn’t exist.`

`.set(key: K, value: V): this - Adds or updates the key with the specified value.`

`Math.floor() - to round down;`

`Math.ceil() - to round up;`

`Math.round() - to round nearest integer`

`Math.trunc() - to remove/truncate decimals`

`Math.min/max(num1, num2) - get min/max between two numbers`
