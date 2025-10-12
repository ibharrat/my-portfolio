import Image from 'next/image'

export default function ProjectsPage() {
    return (
        <main>
            <h2>My Projects</h2>

            <div className="projects">
                <h3>Space Run</h3>
                <Image
                    src="/space-run.png"
                    alt="Space Run Game Image"
                    className="image"
                    width={500}
                    height={206}
                />

                <p>
                    Browser-based side scroller game built with HTML, CSS, Javascript, Node.js, and Phaser JS.
                </p>

                <a href="https://github.com/ibharrat/Space-Run" target="_blank" rel="noopener noreferrer">
                    GitHub Link
                </a>

            </div>

            <div className="projects">

                <h3>AWS CloudFormation Architecture</h3>
                <Image
                    src="/AWS-INFRASTRUCTURE.png"
                    alt="AWS Architecture Image"
                    className="image"
                    width={500}
                    height={219}
                />

                <p>
                    AWS CloudFormation template built in YAML. This template creates an AWS Architecture for a basic web application. It consists of
                    CloudFront, S3 to store the frontend files, ALB and EC2 ASG for the backend, and Aurora Serverless V2 for the database.
                </p>

                <a href="https://github.com/ibharrat/webapp-aws-infra" target="_blank" rel="noopener noreferrer">
                    GitHub Link
                </a>
            </div>
        </main>
    )
}