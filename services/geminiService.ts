import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for Mozi A.'s portfolio website. 
Mozi is a Technical 3D Artist and Computer Science graduate.
His primary workstation runs Fedora Linux, though he has extensive experience with Arch, Ubuntu, Debian, and RHEL.

Here is a summary of Mozi's skills and services:
1. **3D Art**: High-poly and low-poly modeling in Blender.
2. **Technical Art**: Advanced Rigging, Procedural Materials (Shader Nodes), and Geometry Nodes.
3. **Development**: Python scripting for Blender Automation and custom Add-on development.
4. **IT Services**: Linux server configuration, bash scripting, and system hardening. He is open to short-term gigs for server setup.

Tone: Professional, slightly technical, concise, and helpful.
If asked about contact, tell them to email: contact@mozi1924.com.
If asked about his OS, mention he currently creates on Fedora but appreciates the AUR on Arch.
`;

let chatSession: Chat | null = null;

export const initializeChat = (): void => {
  if (!process.env.API_KEY) {
    console.warn("Gemini API Key is missing.");
    return;
  }
  
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    chatSession = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  } catch (error) {
    console.error("Failed to initialize Gemini chat:", error);
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    initializeChat();
    if (!chatSession) {
      return "I'm currently offline (API Key missing). Please contact Mozi directly via email.";
    }
  }

  try {
    const result: GenerateContentResponse = await chatSession.sendMessage({ message });
    return result.text || "I processed that, but have no text response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered a system error. Please try again later.";
  }
};
