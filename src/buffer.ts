/**
 * Whole seconds of media left at a byte rate. Not a player.
 */

export type Runway = { ok: false; reason: string } | { ok: true; seconds: bigint; stalled: boolean };

export function runway(bufferedBytes: bigint, bytesPerSecond: bigint, floorSec: number): Runway {
  if (bufferedBytes < 0n) return { ok: false, reason: "bufferedBytes must be non-negative" };
  if (bytesPerSecond <= 0n) return { ok: false, reason: "bytesPerSecond must be positive" };
  if (!Number.isInteger(floorSec) || floorSec < 0 || floorSec > 60) return { ok: false, reason: "floorSec must be an integer from 0 to 60" };
  const seconds = bufferedBytes / bytesPerSecond;
  return { ok: true, seconds, stalled: seconds < BigInt(floorSec) };
}
