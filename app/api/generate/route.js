import { NextResponse } from "next/server";
import { GenerativeModel, GoogleGenerativeAI } from "@google/generative-ai";

const systemPrompt = `
You are a flashcard creator, you take in text and create multiple flashcards from it. Make sure to create exactly 10 flashcards.
Both front and back should be one sentence long, front should consist of a question and the back consists of an answer.
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
const genAiModel = genAI.getGenerativeModel({model: "gemini-1.5-flash", systemInstruction: systemPrompt, generationConfig: { responseMimeType: "application/json" }})    

export async function POST(req)
{
    const data = await req.json()
    const chat = genAiModel.startChat()
    const message = await chat.sendMessage(data)
    const jsonCards = message.response.text()
    const flashcards = JSON.parse(jsonCards).flashcards
    return NextResponse.json(flashcards)
}