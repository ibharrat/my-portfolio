
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { message } = await request.json();

        if (!message) {
           
            return NextResponse.json({ error: "No message provided" }, { status: 400 });
        }

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "You are a assistant." }, 
                    { role: "user", content: message }, 
                ],
            }),
        });

        const data = await response.json();

        console.log("OpenAI response:", data);
        const aiMessage = data.choices?.[0]?.message?.content || "No response from AI";
        return NextResponse.json({ reply: aiMessage });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }

    
}
