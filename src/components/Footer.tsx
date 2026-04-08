import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/icons/SocialIcons";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/in/areebkhan", icon: LinkedinIcon },
    { name: "GitHub", href: "https://github.com/areebkhan", icon: GithubIcon },
    { name: "Instagram", href: "https://instagram.com/AreebNarrates", icon: InstagramIcon },
  ];

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="py-12 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left - Name and copyright */}
          <div>
            <div className="text-lg font-medium mb-2">Areeb Khan</div>
            <p className="text-sm text-foreground-muted">
              © {currentYear} · All rights reserved
            </p>
          </div>

          {/* Center - Navigation */}
          <nav className="flex flex-wrap gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-foreground-muted hover:text-foreground transition-colors link-hover"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right - Social */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-muted hover:text-foreground transition-colors"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
