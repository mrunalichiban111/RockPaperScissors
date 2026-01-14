"use client";

import { useEffect } from "react";
import { sdk } from '@farcaster/miniapp-sdk'

export default function Home() {
  useEffect(() => {
    sdk.actions.ready();   // 🔥 this fixes the error
    sdk.actions.openUrl(
      "https://rock-paper-scissors-one-pearl.vercel.app/api/frame"
    );
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="text-2xl font-bold">Rock Paper Scissors 🎮</h1>
    </main>
  );
}
