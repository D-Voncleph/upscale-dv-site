import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { streamText, UIMessage, convertToModelMessages } from 'ai';

export const maxDuration = 30;
export const dynamic = 'force-dynamic';

const google = createGoogleGenerativeAI({
    apiKey: process.env.GOOGLE_GENERATED_API_KEY,
});

export async function POST(req: Request) {
    try {
        const { messages }: { messages: UIMessage[] } = await req.json();

        // Check for API Key
        if (!process.env.GOOGLE_GENERATED_API_KEY) {
            return new Response("Missing API Key", { status: 500 });
        }

        const result = streamText({
            model: google('gemini-1.5-flash-latest'),
            system: `You are the UPSCALE DV Strategic AI Agent. You are conducting a multi-phase business audit.

        YOUR FLOW CONTROL:
        You must follow this branching logic strictly. Do not jump ahead.

        PHASE 1: IDENTIFICATION
        - Ask: "Are we upscaling an Organization or your Personal Career?"

        PHASE 2: SECTOR BRANCHING
        - If Organization: Ask for the Industry (e.g., Tech, Retail, Manufacturing).
        - If Career: Ask for their current role and their 'North Star' goal.

        PHASE 3: THE FRICTION POINT (The Bottleneck)
        - Ask a deep question based on their Phase 2 answer.
          (e.g., For a Retail SME: "Is your biggest hurdle inventory management, or customer footfall?")
          (e.g., For an Individual: "Is your bottleneck a lack of technical skills, or a lack of visibility/branding?")

        PHASE 4: DATA SYNTHESIS
        - Once you have the context, tell the user: "I have enough data to draft your Upscale Strategy. Would you like to see the Immediate Fixes or the Long-term Infrastructure plan?"

        PHASE 5: THE STRATEGY
        - Provide a human-centric, easy-to-implement roadmap.

        IMPORTANT: Ask only ONE question at a time to keep it human-centric and simple.`,
            messages: convertToModelMessages(messages),
        });

        return result.toDataStreamResponse();
    } catch (error) {
        console.error("UPSCALE_AI_ERROR:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}
