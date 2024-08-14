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
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const genAiModel = genAI.getGenerativeModel({model: "gemini-1.5-flash", systemInstruction: systemPrompt})    

export async function POST(req)
{
    const data = await req.text()
    const chat = genAiModel.startChat()
    const message = await chat.sendMessage(data)
    const flashcards = message.response.text()
    return NextResponse.json(flashcards)
}