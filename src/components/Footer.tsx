import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { label: "Über mich", id: "about" },
    { label: "Erfahrung", id: "experience" },
    { label: "Fähigkeiten", id: "skills" },
    { label: "Projekte", id: "projects" }
  ];

  const services = [
    { label: "IT Support", id: "services" },
    { label: "Webentwicklung", id: "services" },
    { label: "Data Science", id: "services" },
    { label: "Software Testing", id: "services" }
  ];

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold hero-text mb-4">Zaid Slaoui</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Informatiker mit Leidenschaft für IT-Support, Webentwicklung und technische Lösungen.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>zaidslaoui@outlook.de</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+49 159 06778061</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Bonn, Deutschland</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold mb-4">Navigation</h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="justify-start p-0 h-auto font-normal text-muted-foreground hover:text-primary"
                  onClick={() => scrollToSection(link.id)}
                >
                  {link.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold mb-4">Leistungen</h4>
            <div className="space-y-2">
              {services.map((service, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="justify-start p-0 h-auto font-normal text-muted-foreground hover:text-primary"
                  onClick={() => scrollToSection(service.id)}
                >
                  {service.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Bereit für Ihr nächstes Projekt? Lassen Sie uns sprechen!
            </p>
            <Button 
              className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-4 w-4" />
              Nachricht senden
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Zaid Slaoui. Alle Rechte vorbehalten.
            </div>
            
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-primary"
              >
                Impressum
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-primary"
              >
                Datenschutz
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-primary"
                onClick={scrollToTop}
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;