---
title: Performance Improvements!
description: emp-wasm-engine is now much faster 🏎️
slug: performance-improvements
authors: andrew
date: 2025-06-16
tags: [emp-wasm-engine, mpc, garbled circuits, privacy, developer-tools, cryptography, compiler]
hide_table_of_contents: false
---

emp-wasm-engine is now much faster 🏎️

<!--truncate-->

### Results

![Sha1 Performance Progression](/img/performance-improvements/progression.png)

Note: Versions 0, 1, 2 are running all parties on a single thread, which isn't
realistic, but the relative improvements are real. Version 3 fixes this,
providing numbers that are relevant to real deployments.

<video controls src="/img/performance-improvements/jumboswap-comparison.mp4"></video>

Above: Video of the host when running
[JumboSwap](https://mpc.pse.dev/apps/jumboswap) locally in 5 tabs.

### IO Buffering

MPC Framework provides an abstraction for IO so that you can supply any
transport for moving bytes between the parties. When I originally created
emp-wasm, I did the IO in a pretty naive way - when the C++ code wants to send
some bytes, it sends that to JS immediately so that JS can send on the
websocket/etc. Now C++ will buffer up to 64KiB before passing it to JS, and this
makes a huge difference (see v0->v1 in the sha1 results graph).

### Importing Circuits

emp-toolkit provides a bristol circuit parser using C++'s istringstream. When we
compile this to WebAssembly using Emscripten, it's very very slow. So slow that
it's much faster to use JS to parse and encode the bristol into binary, and send
that binary to C++ instead. For the 2.4MiB
[sha1 circuit](https://raw.githubusercontent.com/privacy-scaling-explorations/emp-wasm/4910d03/circuits/sha-1.txt),
this reduces the circuit loading time from 1500ms to under 100ms.

In future, I think this space will benefit from a much better standard format
for circuits. It's actually a bit silly that we have Summon going to the trouble
to serialize the circuit into this verbose format and then emp-wasm has to spend
time parsing it. Bristol format also lacks real descriptions for its input and
output bits, which is why we currently provide metadata separately -
`circuit_info.json`.

I hope that in the not-too-distant future we can unify these into a single
compact circuit format. This will improve speed and reduce complexity. Even if
you want a readable format for debug purposes, we could provide something much
better than Bristol. We should treat Bristol as a legacy format and provide
backwards compatibility by providing a Bristol serializer that is only used when
necessary.

## Join Us!

- [Telegram group](https://t.me/+FKnOHTkvmX02ODVl)
- [Discord](https://discord.gg/btXAmwzYJS) (Channel name: 🔮-mpc-framework)
- [Github Repo](https://github.com/privacy-scaling-explorations/mpc-framework)
  ⭐️
- [Website](https://mpc.pse.dev)

Thanks for building privacy‑preserving magic with us! 🪄
