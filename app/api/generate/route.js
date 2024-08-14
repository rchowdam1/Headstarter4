import { NextResponse } from "next/server";
import { GenerativeModel, GoogleGenerativeAI } from "@google/generative-ai";

const systemPrompt = `
You are a flashcard creator, you take in text and create multiple flashcards from it. Make sure to create exactly 10 flashcards.
Both front and back should be one sentence long.
You should return in the following JSON format:
{
  "flashcards":[
    {
      "front": "Front of the card, type str",
      "back": "Back of the card, type str"
    }
  ]
}
`

export async function POST(req)
{
    const genAI = new GoogleGenerativeAI("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    const genAiModel = genAI.getGenerativeModel({model: "gemini-1.5-flash", systemInstruction: systemPrompt})    
}