---
title: Summon Hacking
description: About this website. Mostly just so the blog isn't empty.
slug: summon-hacking
authors: andrew
date: 2025-04-11
tags: [summon, hacking]
hide_table_of_contents: false
---

A little case study into how you can make Summon your own.

<!--truncate-->

This afternoon [I added](https://github.com/voltrevo/summon/pull/22)
`summon.isSignal(x)` to the Summon language. It's just a little ground work
towards our larger goal of improving the DevX for getting values into and out of
your circuits, but I think it's a good case study for hacking on Summon.

**Note**: At the time of writing, this change only exists in the main branch of
Summon. If you're using `summon-ts`, it may or may not be released when you read
this.

`summon.isSignal(x)` is defined in the new `summon.d.ts`:

```ts
declare const summon: {
  isSignal(value: unknown): boolean;
};
```

Just copy `summon.d.ts` into your circuit project, and you can use it like this:

```ts
export default (x: number) => {
  let count = 0;

  if (summon.isSignal("hello")) {
    count++;
  }
  // 'hello' is not a signal, count: 0

  if (summon.isSignal(count)) {
    count++;
  }
  // `count` is not a signal, count: 0

  if (summon.isSignal(x)) {
    count += x;
  }
  // `x` is a signal, count: x

  if (summon.isSignal(count)) {
    count++;
  }
  // `count` is a signal, count: x + 1
  // (even though it wasn't before)

  return count;
};
```

Here's the code for `summon.isSignal`:

```rust
static IS_SIGNAL: NativeFunction = native_fn(|_this, params| {
  let Some(x) = params.first() else {
    return Ok(false.to_val());
  };

  Ok(val_dynamic_downcast::<CircuitSignal>(x).is_some().to_val())
});
```

If you want to write some code in rust and incorporate that into a Summon
circuit, you could put some other rust code here like this:

```rust
static IN_UNIT_CIRCLE: NativeFunction = native_fn(|_this, params| {
  let (
    Some(Val::Number(x)),
    Some(Val::Number(y)),
  ) = (
    params.first(),
    params.get(1),
  ) else {
    return Err("Expected x, y to be numbers".to_type_error());
  };

  let res = x * x + y * y <= 1.0;

  Ok(res.to_val())
});
```

you also need to add this:

```rust
fn bo_sub(key: &str) -> Val {
  match key {
    "isSignal" => IS_SIGNAL.to_val(),
    "inUnitCircle" => IN_UNIT_CIRCLE.to_val(), // <--- add this line

    _ => Val::Undefined,
  }
}
```

now just `cargo build` and voila, you can use it like this:

```ts
// Use vstc to run programs that don't need signals:
//   ./target/debug/vstc run program.ts

export default () => {
  console.log(summon.inUnitCircle(0.3, 0.4)); // true
};
```

Check [the PR](https://github.com/voltrevo/summon/pull/22) for the full context.
Happy hacking :].
