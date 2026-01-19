
import { GoogleGenAI } from "@google/genai";

export const getTutorResponse = async (question: string): Promise<string> => {
  try {
    // Fix: Initialize GoogleGenAI with the API key directly from environment variables as required by guidelines
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: "You are Lumina, a world-class AI Tutor. Be encouraging, concise, and structured. Use formatting (bullet points, bold text) to make complex topics easy to understand.",
        temperature: 0.7,
      },
    });

    // Fix: Access the .text property directly (not as a method)
    return response.text || "I'm sorry, I couldn't process that. Could you try rephrasing?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The tutor is currently over capacity. Please try again in a moment.";
  }
};