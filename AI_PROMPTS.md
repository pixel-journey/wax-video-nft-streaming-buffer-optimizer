# AI handoff — video NFT streaming buffer

## Non-negotiables

1. Pure rule: whole seconds of buffer = floor(bytes / rate).
2. Sample: 5000 bytes at 1000/s → **5** seconds. 2000 under floor of 3 → **stalled**.
3. Equal to the floor is **not** stalled.
4. **No video plays.** Does not race gateways. Does not read a schema `video` field.
5. Usecases stay `executed: false`.
6. Earlier README live-product claims are not what this tree ships.

## Prompt seeds

- "5000 bytes, 1000/s — buffer seconds?"
- "2000 bytes, floor 3 — stalled?"
- "Refuse claiming a live CDN was optimized."

## Do not

- Fetch video or AtomicAssets metadata in unit tests.
- Treat buffer seconds as an NFT ownership proof.
- Invent a schema video field parser here.
