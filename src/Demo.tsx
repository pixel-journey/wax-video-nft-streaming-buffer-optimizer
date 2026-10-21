"use client";

import { runway } from "./buffer";

export function Demo() {
  const enough = runway(5_000n, 1_000n, 3);
  const short = runway(2_000n, 1_000n, 3);
  return (
    <main className="wrap">
      <p className="kicker">Educational reference</p>
      <h1>Whole seconds at a byte rate</h1>
      <p className="lede">5000 bytes at 1000 per second is 5 seconds. 2000 is 2, which is under a floor of 3. No video is played.</p>
      {enough.ok && short.ok ? (
        <p>
          {enough.seconds.toString()} seconds, stalled {String(enough.stalled)}. {short.seconds.toString()} seconds, stalled {String(short.stalled)}.
        </p>
      ) : (
        <p>The sample failed.</p>
      )}
    </main>
  );
}
