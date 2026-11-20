# Education — whole seconds of buffer

> **Rung:** `npm test` passes. `bufferedBytes / bytesPerSecond`, integer division. Not a player.  
> **The test is the rule.** The same floor, on a token amount, is [px-token-dust-truncation-visualizer](https://github.com/pixel-journey/px-token-dust-truncation-visualizer).

## Predict, then run

Stalled means `seconds < floorSec`. Equal is not stalled.

| Call | Locked result |
| --- | --- |
| `runway(5000n, 1000n, 3)` | `{ seconds: 5n, stalled: false }` |
| `runway(3000n, 1000n, 3)` | `{ seconds: 3n, stalled: false }` |
| `runway(2000n, 1000n, 3)` | `{ seconds: 2n, stalled: true }` |
| a rate of `0` | not ok |

A remainder of bytes is dropped. 1999 bytes at 1000 per second is still 1 second. The test does not lock that remainder. Do not round it up.

The HTTP examples include an Atomic Packs `unboxassets` row. That request is unsent, and it is not this division.
