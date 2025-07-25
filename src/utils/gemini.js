import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the model with your API key from the .env file
const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_KEY);

// Use the gemini-1.5-flash model, which is fast and free
export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});