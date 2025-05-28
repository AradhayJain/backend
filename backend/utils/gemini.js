import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI('AIzaSyA2omopZelLCT_1O-vnJKLxvaWKxoGOI4w');
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const generateResult = async (prompt) => {
    const result = await model.generateContent(prompt);
    return result.response.text();
}
