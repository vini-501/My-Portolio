import { Github, Linkedin, Mail, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/90 py-12 border-t border-midnight-blue/20">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center space-x-6 mb-8">
            <a
              href="https://github.com/vini-501"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-midnight-blue transition-colors p-2 rounded-full hover:bg-midnight-blue/10"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/vinay-kumar-694186293"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-midnight-purple transition-colors p-2 rounded-full hover:bg-midnight-purple/10"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/vini501_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-midnight-indigo transition-colors p-2 rounded-full hover:bg-midnight-indigo/10"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://x.com/VinayKumar58040"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-sky-500 transition-colors p-2 rounded-full hover:bg-sky-500/10"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="https://devfolio.co/@vini_501"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-midnight-accent transition-colors p-2 rounded-full hover:bg-midnight-accent/10"
              aria-label="Devfolio"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15 8H9V16H15V8ZM13 12H11V14H13V12ZM13 10H11V12H13V10Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="mailto:svinaykumara501@gmail.com"
              className="text-muted-foreground hover:text-midnight-blue transition-colors p-2 rounded-full hover:bg-midnight-blue/10"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <div className="text-center text-muted-foreground">
            <p>© {currentYear} Vinay Kumar . All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
