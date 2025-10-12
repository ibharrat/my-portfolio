import Image from 'next/image'

export default function HomePage() {
    return (
        <main>
            <h2>Welcome to My Portfolio</h2>
            <p>
                My name is Ian Bharrat. I am currently an Information Technology major at Kean University and I also have my Associates in Computer Science
                from Brookdale Community College. Feel free to explore the navigation bar to learn more about me or try out the chatbot I implemented with
                OpenAI's API!
            </p>
            <Image
                src="/technology.jpg" 
                alt="Network Technology"
                className="image"
                width={575}
                height={375}
            />
        </main>
    );
}
