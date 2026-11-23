# Security — streaming buffer seconds

## Closed in tests

| Issue | Behavior |
| --- | --- |
| Floor division | whole seconds |
| Under floor | stalled |
| Network | not called |

## Not closed (production)

| Concern | Guidance |
| --- | --- |
| Live CDN / IPFS | Not measured |
| NFT ownership | Not proven by buffer math |

## Attack angles

1. Claiming a live stream was optimized.  
2. Treating buffer seconds as proof of media rights.  
3. Fetching AtomicAssets rows inside unit tests.

## Honesty limits

Pure division only.

[docs.wax.io](https://docs.wax.io/)
