import Image from 'next/image'

export default function AboutPage() {
    return (
        <main>
                <h2>About Me</h2>
                <p>
                    My name is Ian Bharrat, I currently am finishing my IT major at Kean University. I also
                    have my Computer Science A.A.S at Brookdale Community College. I have a strong interest in all things
                    IT related, including Networking, DevOps, and Cloud Infrastructure.
                </p>

                <Image
                    src="/resume.jpg"
                    alt="Resume"
                    className="image"
                    width={400}
                    height={517}
                />

                <h2>Languages</h2>
                <p>
                    Python, Javascript, Java, Vite, React, Next.js, SQL, MySQL, MongoDB
                </p>

                <h2>Certifications</h2>

                <div className="image-row">
                    <div className="image-item">
                        <Image
                            src="/cloud-practicioner.png"
                            alt="AWS Certified Cloud Practicioner Certification"
                            className="image"
                            width={300}
                            height={300}
                        />

                        <a href="https://www.credly.com/badges/ae6748a2-b8b3-474c-87ab-8e2c997f425c/public_url" target="_blank" rel="noopener noreferrer">
                            View Certificate
                        </a>

                    </div>

                    <div className="image-item">
                        <Image
                            src="/itf+.png"
                            alt="CompTIA ITF+"
                            className="image"
                            width={300}
                            height={300}
                        />

                        <a href="https://www.credly.com/badges/c4372f5b-8455-4386-98b3-a98fdfc1176c/public_url" target="_blank" rel="noopener noreferrer">
                            View Certificate
                        </a>
                    </div>
                </div>
            
        </main>
    );
}