"use client";

import { useEffect, useRef } from "react";
import sdk from "@farcaster/miniapp-sdk";

export default function Home() {
  const redirected = useRef(false);

  useEffect(() => {
    if (redirected.current) return;

    redirected.current = true;
    sdk.actions.ready();
    sdk.actions.openUrl("/api/frame");
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="text-2xl font-bold">Rock Paper Scissors 🎮</h1>
    </main>
  );
}
