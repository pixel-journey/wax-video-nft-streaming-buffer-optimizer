# wax-video-nft-streaming-buffer-optimizer

> **Trust label:** `educational-reference`  
> **Status:** Course-format upgrade (2026-11-26)  
> **Catalog:** `wax-ecosystem-blueprint-catalog` (private index; not this public course)

**One-sentence goal:** Teach **whole seconds of buffer** as `bufferedBytes / bytesPerSecond` with an inclusive equal-floor boundary — without shipping a media player.

## Locked scene

Stalled means `seconds < floorSec`. **Equal is not stalled.**

| Call | Result |
| --- | --- |
| `runway(5000n, 1000n, 3)` | `{ seconds: 5n, stalled: false }` |
| `runway(3000n, 1000n, 3)` | `{ seconds: 3n, stalled: false }` |
| `runway(2000n, 1000n, 3)` | `{ seconds: 2n, stalled: true }` |
| rate `0` | refused |

Remainder bytes are dropped. 1999 at 1000/s is still 1 second.

```ts
import { runway } from "./src/buffer";
runway(3000n, 1000n, 3);
// { ok: true, seconds: 3n, stalled: false }
```

## What is actually in the repo

| Piece | Role |
| --- | --- |
| `src/buffer.ts` | Pure runway rules |
| `src/buffer.test.ts` | Locked claims |
| `src/usecases.ts` | HTTP shapes built and not sent |
| `src/Demo.tsx` | Offline page |
| [EDUCATION.md](EDUCATION.md) | Beginner → Intermediate → Masterclass course |

## Quick start

```bash
npm install
npm test
npm run dev
```

## Boundaries

- Not a video player, CDN, or adaptive-bitrate policy
- Does not read AtomicAssets `video` fields or race gateways
- Floor is a teaching threshold, not a product UX recommendation

## Related

- [px-token-dust-truncation-visualizer](https://github.com/pixel-journey/px-token-dust-truncation-visualizer) — same floor idea on amounts
- [wax-reduced-motion-dashboard](https://github.com/pixel-journey/wax-reduced-motion-dashboard) — motion flag teaching

## License

MIT — Pixel Journey
