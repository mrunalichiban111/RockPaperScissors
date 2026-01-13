import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        frames: [
            {
                version: "vNext",
                image: "https://upload.wikimedia.org/wikipedia/en/c/cf/RockPaperScissorsLogo.png",
                buttons: [
                    { label: "🪨 Rock", action: "post", target: "/api/rps", value: "rock" },
                    { label: "📄 Paper", action: "post", target: "/api/rps", value: "paper" },
                    { label: "✂️ Scissors", action: "post", target: "/api/rps", value: "scissors" },

                ],
            },
        ],
    });
}