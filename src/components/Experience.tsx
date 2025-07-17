import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Werkstudent IT-Support",
      company: "Flick Gocke Schaumburg",
      period: "Aktuell",
      type: "Teilzeit",
      description: "IT-Support, SCCM, Active Directory, Ticketing-Systeme",
      technologies: ["SCCM", "Active Directory", "Windows Server", "Ticketing"],
      current: true
    },
    {
      title: "Wissenschaftliche Hilfskraft",
      company: "Uniklinik Bonn",
      period: "2023",
      type: "Teilzeit",
      description: "Verwaltungsunterstützung und Datenpflege in medizinischen Systemen",
      technologies: ["Datenbank-Management", "Verwaltungssysteme", "Datenpflege"],
      current: false
    },
    {
      title: "Praktikant - Webentwicklung",
      company: "STARTUP MEDIA",
      period: "2022",
      type: "Praktikum",
      description: "Entwicklung eines vollständigen Webshops von der Konzeption bis zur Implementierung",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      current: false
    },
    {
      title: "Praktikant - Java Entwicklung",
      company: "STANDARD PROFIL",
      period: "2021",
      type: "Praktikum",
      description: "Entwicklung einer Java-Anwendung zur Projektverwaltung mit grafischer Benutzeroberfläche",
      technologies: ["Java", "Swing", "MySQL", "Projektmanagement"],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Berufliche <span className="hero-text">Erfahrung</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Praktische Erfahrungen in verschiedenen Bereichen der Informatik und IT
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass-card hover-lift">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-4 gap-6">
                  {/* Timeline */}
                  <div className="lg:col-span-1">
                    <div className="flex flex-col items-start lg:items-center">
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="h-5 w-5 text-primary" />
                        <Badge variant={exp.current ? "default" : "secondary"}>
                          {exp.type}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      {exp.current && (
                        <Badge className="mt-2 bg-primary/20 text-primary border-primary/30">
                          Aktuell
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-3">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-lg text-primary font-medium">{exp.company}</p>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="outline"
                            className="border-primary/30 text-primary hover:bg-primary/10"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary */}
        <Card className="glass-card mt-12">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Erfahrungsschwerpunkte</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-primary mb-2">IT-Support</h4>
                <p className="text-sm text-muted-foreground">
                  Systemdiagnose, Support-Infrastruktur, First & Second Level Support
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Entwicklung</h4>
                <p className="text-sm text-muted-foreground">
                  Java-Anwendungen, Webentwicklung, Datenbankintegration
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Systemadministration</h4>
                <p className="text-sm text-muted-foreground">
                  Active Directory, SCCM, Ticketing-Systeme, Datenpflege
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;