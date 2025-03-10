---
id: what-is-mpc
title: What is MPC?
---

Imagine you want to go eat with someone. You'd like to go somewhere you both
like, but you're apprehensive about revealing your true preferences. The other
person might agree prematurely to please you, or they could take issue with an
unusual suggestion.

MPC is like having a special kind of telepathy - it gives you the answer to a
question over your combined inputs, without having to share those inputs with
each other, or anyone else. The only thing that is revealed is the answer to
your mutual question.

![alt](/img/kids-magic-burgers.webp)

## More Formally

**M**ulti-**P**arty **C**omputation is a cryptographic technique that allows
multiple parties to jointly compute a function over their inputs while keeping
those inputs private. The goal is to enable cooperation without revealing
individual data, ensuring confidentiality even if some participants are
untrusted.

In MPC Framework, we are primarily interested in secure boolean MPC. This means:
- The protocol is secure even if all other parties are untrusted
- Inputs are bits
- The function is a boolean circuit
- Outputs are bits

Representing your function as a boolean circuit is not a simple task. We created
the [Summon](/docs/summon) language to make this easier.
