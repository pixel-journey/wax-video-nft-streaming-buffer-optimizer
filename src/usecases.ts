import { ATOMIC_ORIGIN } from "./api";
import { runway } from "./buffer";
import type { ChainAction, HttpRequest } from "./api";

export type UseCase = {
  title: string;
  detail: string;
  request: HttpRequest;
  transaction: { note: string; actions: ChainAction[] } | null;
};

const enough = runway(5_000n, 1_000n, 3);
if (!enough.ok) throw new Error(enough.reason);
const play = enough;

export const USE_CASES: UseCase[] = [
  {
    title: "An asset read is not a byte rate",
    detail: `5000 bytes at 1000 per second is ${play.seconds.toString()} seconds. The asset request is not sent.`,
    request: { method: "GET", url: `${ATOMIC_ORIGIN}/atomicassets/v1/assets/1`, executed: false },
    transaction: null,
  },
  {
    title: "A short buffer is stalled, not fetched",
    detail: "2000 bytes at the same rate is 2 seconds, under a floor of 3. No gateway is chosen.",
    request: { method: "GET", url: `${ATOMIC_ORIGIN}/atomicassets/v1/assets?owner=alice&page=1&limit=20`, executed: false },
    transaction: null,
  },
];

export function assertUseCases(): void {
  if (play.stalled || play.seconds !== 5n) throw new Error("runway");
  const short = runway(2_000n, 1_000n, 3);
  if (!short.ok || !short.stalled) throw new Error("stall");
}
