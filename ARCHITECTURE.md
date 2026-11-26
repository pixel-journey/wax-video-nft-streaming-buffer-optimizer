# Architecture — buffer runway

## Pure core

`runway(bufferedBytes, bytesPerSecond, floorSec)` lives in `src/buffer.ts`.

| Input | Constraint |
| --- | --- |
| `bufferedBytes` | bigint ≥ 0 |
| `bytesPerSecond` | bigint > 0 |
| `floorSec` | integer 0..60 |

```
seconds = bufferedBytes / bytesPerSecond   // floor
stalled = seconds < BigInt(floorSec)       // equal is not stalled
```

## What is not in the tree

- Media demux / decode
- Network fetch or CDN prefetch
- AtomicAssets schema reads
- Transaction broadcast

## UI

`Demo.tsx` is an offline illustration of the pure function. It does not play video.

## Verification

`npm test` is the source of truth for locked numbers in EDUCATION.md.
