
import { openai } from "@/lib/openai";
import { NextResponse } from "next/server";

export async function POST(req){

  const {message}=await req.json();

  const completion=await openai.chat.completions.create({
    model:"gpt-4o-mini",
    messages:[
      {role:"system",content:"You are Noor AI Ultra Pro Max"},
      {role:"user",content:message}
    ]
  });

  return NextResponse.json({
    reply:completion.choices[0].message.content
  });

}
