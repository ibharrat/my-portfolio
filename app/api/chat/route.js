
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
                    { role: "system", content: `You are an assistant that answers questions specifically about Ian Bharrat.
                        Background info about Ian: 
                        - Certifications: CompTIA ITF+, AWS Certified Cloud Practitioner .
                        - Programming Languages: Python, JavaScript, Node.js, HTML, CSS, Java.
                        - Interests: DevOps, SysOps, Information Technology, Cloud Infrastructure, Networking.
                        - Education: Currently pursuing a Bachelors in IT at Kean University, Obtained A.A.S in Computer Science at Brookdale Community College.
                        - Current experience: Built out a basic AWS Infrastructure in CloudFormation for a web application. Created a browser sidescrolling arcade game built with Phaser JS.

                        Use this info to answer any questions about Ian accurately.` }, 
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
