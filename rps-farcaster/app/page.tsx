"use client";

import { useEffect } from "react";
import sdk from "@farcaster/frame-sdk";

export default function Home() {
  useEffect(() => {
    sdk.actions.ready();
    sdk.actions.openUrl("/api/frame");
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="text-2xl font-bold">Rock Paper Scissors 🎮</h1>
    </main>
  );
}
