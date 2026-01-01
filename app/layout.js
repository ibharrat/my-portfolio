import { Azeret_Mono } from "next/font/google";
import Nav from "./components/Nav"
import "./globals.css";

const azeretMono = Azeret_Mono({
  variable: "--font-azeret-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ian Bharrat Portfolio",
  description: "A portfolio for Ian Bharrat",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${azeretMono.variable}`}>
        <header>
          <h1>Ian Bharrat Portfolio</h1>
          <Nav />
        </header>
        {children}
        <footer>
          <a href="https://www.linkedin.com/in/ian-bharrat/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/ibharrat" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:ian.bharrat@gmail.com">Contact Me</a>
        </footer>
      </body>
    </html>
  );
}
