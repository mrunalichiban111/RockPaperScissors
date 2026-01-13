import { NextResponse } from "next/server";
import { use } from "react";

const choices = ["rock", "paper", "scissors"];

function getWinner(user: string,bot: string): string{
    if(user === bot) return "It's a tie!";
    if(
        (user === "rock" && bot === "scissors") ||
        (user === "paper" && bot === "rock") ||
        (user === "scissors" && bot === "paper")
    ){
        return "🎉 You Win!";
    }
    return "😢 You Lose!";
}

export async function POST(req: Request) {
  const body = await req.json();
  const user = body.untrustedData?.buttonValue;

  const bot = choices[Math.floor(Math.random() * 3)];
  const result = getWinner(user, bot);

  const text = encodeURIComponent(`You: ${user} Bot: ${bot} ${result}`);


  return NextResponse.json({
    frames: [
      {
        version: "vNext",
        image: `https://dummyimage.com/600x400/000/fff&text=${text}`,
        buttons: [
          { label: "Play Again 🔁", action: "post", target: "/api/frame" }
        ],
      },
    ],
  });
}