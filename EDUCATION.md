# Education — whole seconds of buffer

> **Rung:** `npm test` passes. `bufferedBytes / bytesPerSecond`, integer division. Not a player.  
> **The test is the rule.** The same floor, on a token amount, is [px-token-dust-truncation-visualizer](https://github.com/pixel-journey/px-token-dust-truncation-visualizer).

## Learning outcomes

| Level | After this file |
| --- | --- |
| Beginner | Compute seconds and stalled at the floor boundary |
| Intermediate | Explain inclusive equal boundary and floorSec bounds |
| Masterclass | Separate the teaching floor from a real media player |

---

## Beginner — one scene

Stalled means `seconds < floorSec`. **Equal is not stalled.**

| Call | Locked result |
| --- | --- |
| `runway(5000n, 1000n, 3)` | `{ seconds: 5n, stalled: false }` |
| `runway(3000n, 1000n, 3)` | `{ seconds: 3n, stalled: false }` |
| `runway(2000n, 1000n, 3)` | `{ seconds: 2n, stalled: true }` |
| rate `0` | not ok |

A remainder of bytes is dropped. 1999 bytes at 1000/s is still 1 second.

```bash
npm test
```

---

## Intermediate — rules

| Input | Rule |
| --- | --- |
| `bufferedBytes` | non-negative bigint |
| `bytesPerSecond` | positive bigint |
| `floorSec` | integer 0 .. 60 |

### Attack → test

| Attack | Lab behavior |
| --- | --- |
| Round 1999/1000 up | stays 1 |
| Treat equal to floor as stalled | not stalled |
| Zero rate | refused |
| Call this a video player | pure division |

### Exercises

1. 3000 bytes at 1000/s, floor 3 — stalled? (**No**.)  
2. 2000 at same — stalled? (**Yes**.)  
3. Does remainder round up? (**No**.)

---

## Masterclass

NFT video UIs often show a buffer bar. This lab only answers: given these integers, how many whole seconds remain and is that under the floor? It never fetches media or reads an AtomicAssets asset.

---

## What this course will not teach

- Adaptive bitrate logic
- CDN prefetch policy
- That the floor is a product UX recommendation
