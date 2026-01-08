
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const askResearchAssistant = async (question: string, context: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an AI research assistant for V Sai Sesidhar, a PhD Researcher at IIT Kharagpur specializing in Transport Systems. 
      Use the following context about his background to answer the user's question. If the information is not in the context, be polite and stick to his professional persona.
      
      CONTEXT:
      ${context}
      
      QUESTION:
      ${question}`,
      config: {
        temperature: 0.7,
        maxOutputTokens: 500,
      }
    });
    
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to the research database right now. Please try again later.";
  }
};
