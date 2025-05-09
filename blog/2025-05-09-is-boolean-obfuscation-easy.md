---
title: Is Boolean Obfuscation Easy?
description: Boolean obfuscation might be easy, but it seems too good to be true.
slug: is-boolean-obfuscation-easy
authors: andrew
date: 2025-05-09
tags: [computer science, boolean circuits, obfuscation, indistinguishability obfuscation]
hide_table_of_contents: false
---

The most obvious answer is an emphatic *"NO!"* but I've had this idea rolling around for a while and I'm actually not so sure.

<!--truncate-->

To be a bit more specific:
- Does a relatively simple obfuscator exist which can take any boolean circuit and produce an obfuscated version which behaves the same way and is resilient against attempts to simplify it back to the input circuit? (Or some other circuit of similar/smaller size.)
- As a simple test case of any candidate obfuscator, if we use it to obfuscate a circuit which simply tests the input against a specific bit string (a single output bit producing 1 when matched, 0 otherwise), could an adversary identify the bit string?
  - If we allocated one minute of CPU to a 128-bit obfuscation, how long would an efficient attack implementation need to find those 128 bits? Minutes? Days? Basically forever?
  - (Related: [Boolean Satisfiability Problem](https://en.wikipedia.org/wiki/Boolean_satisfiability_problem))

*If you find this interesting, you might also like [Summon](https://github.com/privacy-scaling-explorations/summon) - a TypeScript-like language for authoring boolean circuits, and the [MPC Cryptography](https://mpc.pse.dev/) that we use it for.*

## 🤔 Why

This would achieve (and exceed?) indistinguishability obfuscation (iO), which is kinda like the final boss of cryptography. We could reimplement basically all (all?) existing cryptography on top of iO, as well as more things that we can't currently do.

## 🚫 Provable Security

I think it would be unfair to reject this idea because it is not *provably* secure. Prime factoring and the discrete logarithm problem are not *proven* secure either, we just think they are because very smart people have tried very hard and failed. They are security *assumptions*.

Perhaps a boolean obfuscator could rest on top of one of those well-respected security assumptions, but I'm more interested in the possibility that we could simply add it as a new security assumption. It may be worth debating whether a new security assumption is a good idea, but I'd contend that a simple boolean obfuscator which stands up to powerful attempts to break it would be, at the very least, extremely interesting.

## 🤯 Isn't this Security by Obscurity?!

Maybe! Perhaps the deeper question is whether obscurity actually can work. Of course obscurity *can* fail—but does it *always*?

It depends on how you define obscurity. If it means providing an opaque program without revealing how it was constructed, then I’d argue this approach doesn’t qualify. On the contrary, it follows the principle of transparent security: we **publish the obfuscator**, invite public scrutiny, and only consider it viable if it withstands real-world attempts to break it.

So the security claim isn’t “nobody knows how this works” but rather “even when you know exactly how it works, it still seems hard to undo.”

## 💡 Possible Implementation

1. Build a grouping of equivalent subcircuits by exploring all circuits of some manageable size and group them by equivalent results (two circuits are equivalent if they have identical input-output tables). (This is a general step that can be done once and embedded in the obfuscator for use with any circuit.)
2. Randomly sample subcircuits from the input circuit and replace them with random equivalents. Repeat until (say) 90% of wires are affected. (This ensures there will be many overlapping substitutions that aren't trivially reversible with the same process.)
3. Simplify. Apply the best known techniques for simplifying circuits. (But only with a modest amount of compute.)
4. Repeat steps 2 and 3 some amount of times.

Note: Step 2 is expected to expand the circuit, since there are many more large equivalent subcircuits than there are small ones. Step 3 contracts the circuit, but presumably not as much. A concrete implementation might repeat steps 2 and 3 until some expansion factor is achieved.

## 🦀 Implementation Advice

We like rust. A proposed implementation would ideally be a rust program which takes a file representing a circuit in [Bristol Format](https://nigelsmart.github.io/MPC-Circuits/) and outputs a file in the same format. Parameters (like how many rounds) would ideally be CLI arguments, but could also be provided via a json or toml file.

We also like TypeScript. I'd love to see any attempt at this really.

Let us know on
[Telegram](https://t.me/+FKnOHTkvmX02ODVl) /
[Discord](https://discord.gg/btXAmwzYJS) /
[GitHub](https://github.com/privacy-scaling-explorations/mpc-framework)

## ⚔️ Contrary Views

I will try to summarise the best contrary views here as people submit them.

- [On the (Im)possibility of Obfuscating Programs (Barak et al, 2001)](https://www.iacr.org/archive/crypto2001/21390001.pdf)
  - I found this by talking to ChatGPT.
  - From what I can tell, this paper applies to a very strict black box property which doesn't really apply to the idea here.
  - I suppose it proves that obfuscation can't be a *perfect* black box, but I don't think it's necessary to be a perfect black box.
  - I think the bit-string test case is a better representation of whether you can extract *useful* information from the obfuscated program. This paper doesn't appear to show that there is a way to get any of the bits from that bit string, but I could be wrong.
  - From the paper: "Our work rules out the standard, 'virtual black box' notion of obfuscators as impossible, along with several of its applications. However, it does not mean that there is no method of making programs 'unintelligible' in some meaningful and precise sense."
