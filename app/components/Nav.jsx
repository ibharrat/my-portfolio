"use client";

import { usePathname } from "next/navigation";

export default function Nav() {
    const pathname = usePathname();

    return (
        <nav>
            <a href="/" className={pathname === '/' ? 'active' : ''}>Home</a>
            <a href="/about" className={pathname === '/about' ? 'active' : ''}>About Me</a>
            <a href="/projects" className={pathname === '/projects' ? 'active' : ''}>My Projects</a>
            <a href="/chat" className={pathname === '/chat' ? 'active' : ''}>AI Chatbot</a>
        </nav>
    );
}