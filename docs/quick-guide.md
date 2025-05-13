---
id: quick-guide
title: Quick Guide
---

In addition to `mpc-framework`, you will need:

- a circuit generator to turn your MPC program into a circuit (or byo precompiled or handwritten circuit)
- an mpc-framework engine to do the underlying cryptography

```sh
npm install mpc-framework
npm install summon-ts         # circuit generator
npm install emp-wasm-engine   # engine
```

## Step 1: Create a Circuit

The computation to be done inside MPC must be specified in the form of a
circuit. This is a special simplified program in the form of a fixed tree
specifying how to combine values together. Regular programs allow the CPU to
branch into different code paths, and circuits can't do that. It's possible to
write these circuits by hand (or using third party tools), but you might find it
easier to use [summon](https://github.com/privacy-scaling-explorations/summon/):

```ts
// This isn't exactly TypeScript, but it uses the same syntax and has enough in
// common that you can use the .ts extension and get useful intellisense

export default (io: Summon.IO) => {
  // Alice provides a number called 'a'
  const a = io.input('alice', 'a', summon.number());

  // Bob provides a number called 'b'
  const b = io.input('bob', 'b', summon.number());

  let result;

  // This seems like a branch that I just said is not allowed, but this is just
  // an abstraction, and summon will compile it down to a fixed circuit. Loops
  // are possible too. See the summon docs for more detail.
  if (isLarger(a, b)) {
    result = a;
  } else {
    result = b;
  }

  // Everyone gets an output called 'result'
  io.outputPublic('result', result);
}

// We could inline this, but we're just demonstrating that summon supports
// modularity (multi-file works too and many other TS features).
function isLarger(a: number, b: number) {
  return a > b;
}
```

## Step 2: Compile your Circuit

```ts
import * as summon from 'summon-ts';

// ...

await summon.init();

const { circuit } = summon.compile({
  // Specify the entry point, similar to the `main` field of package.json
  path: 'circuit/main.ts',

  // This is the bit width of numbers in your summon program. You can use any
  // width you like, but all numbers in the program will be the same. You can
  // achieve smaller bit widths within the program using masking (the unused
  // gates will be optimized away). It's also possible to define classes for
  // matrices/floats/etc.
  boolifyWidth: 8,

  // File tree to compile
  files: {
    'circuit/main.ts': `
      // Include code from step 1
      // This can be inlined or you can use build tools to just include a
      // directory from your source tree
      // (eg https://github.com/privacy-scaling-explorations/mpc-hello/tree/main/client-client)
    `,
    // Other files can be specified here
  },
});
```

## Step 3: Set up your Protocol

```ts
import { Protocol } from 'mpc-framework';
import { EmpWasmEngine } from 'emp-wasm-engine';

// ...

const protocol = new Protocol(circuit, new EmpWasmEngine());
```

### Step 4: Run the Protocol

```ts
function send(to: string, msg: Uint8Array) {
  // implement sending a message to the specified party
}

const session = protocol.join('alice', { a: 3 }, send);

// This is just a hypothetical API for getting external messages
onMessageReceived((from: string, msg: Uint8Array) => {
  // The important part is that you provide the messages to the session like
  // this
  session.handleMessage(from, msg);
});

// have another device (or tab) join as bob and provide { b: 5 }

console.log(await session.output()); // { main: 5 }
```

## Bringing it all Together

For clarity, a complete version of the example above is provided as
[mpc-hello](https://mpc.pse.dev/apps/hello).
