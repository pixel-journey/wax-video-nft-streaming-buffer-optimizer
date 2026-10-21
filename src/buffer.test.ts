import { describe, expect, it } from "vitest";
import { runway } from "./buffer";

describe("buffer runway", () => {
  it("uses whole seconds and marks a short buffer stalled", () => {
    expect(runway(5_000n, 1_000n, 3)).toEqual({ ok: true, seconds: 5n, stalled: false });
    expect(runway(2_000n, 1_000n, 3)).toEqual({ ok: true, seconds: 2n, stalled: true });
    expect(runway(1n, 0n, 1).ok).toBe(false);
  });
});
