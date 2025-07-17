import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, Database, Monitor, TestTube, Users } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Projektmanagement-Dashboard",
      description: "Java-Anwendung zur Verwaltung von Mitarbeiter- und Projektstatus mit interaktiven Diagrammen und umfassenden Berichten für das Management.",
      technologies: ["Java", "Swing", "MySQL", "JFreeChart"],
      category: "Desktop Application",
      icon: Monitor,
      color: "text-blue-500",
      details: {
        duration: "3 Monate",
        teamSize: "2 Entwickler",
        challenges: "Integration verschiedener Datenquellen, Performance-Optimierung für große Datensätze",
        features: [
          "Echtzeit-Dashboard mit Projektstatus",
          "Interaktive Gantt-Charts",
          "Automatische Berichtsgenerierung",
          "Mitarbeiter-Performance-Tracking",
          "Export-Funktionen (PDF, Excel)"
        ],
        achievements: "50% Zeitersparnis bei der Projektverwaltung, 90% Benutzerakzeptanz"
      }
    },
    {
      title: "E-Commerce Website",
      description: "Vollständig funktionaler Online-Shop für ein lokales Start-up, entwickelt von der Konzeption bis zur finalen Implementierung mit Zahlungsintegration.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      category: "Web Development",
      icon: Code,
      color: "text-green-500",
      details: {
        duration: "4 Monate",
        teamSize: "Solo-Projekt",
        challenges: "Responsive Design, Sicherheit der Zahlungsabwicklung, SEO-Optimierung",
        features: [
          "Vollständige Produktkatalog-Verwaltung",
          "Warenkorb-System mit Session-Management",
          "Sichere Zahlungsintegration (PayPal, Stripe)",
          "Admin-Panel für Bestellverwaltung",
          "Responsive Design für alle Geräte",
          "Newsletter-System"
        ],
        achievements: "Erfolgreiches Go-Live mit 200+ Produkten, 95% mobile Kompatibilität"
      }
    },
    {
      title: "Support Ticket System",
      description: "Inhouse-Tool zur effizienten Ticketverwaltung im IT-Support mit rollenbasiertem Berechtigungssystem und automatisierter Workflow-Unterstützung.",
      technologies: ["C#", ".NET", "SQL Server", "WPF"],
      category: "Enterprise Software",
      icon: TestTube,
      color: "text-purple-500",
      details: {
        duration: "5 Monate",
        teamSize: "3 Entwickler",
        challenges: "Rollenbasierte Sicherheit, Workflow-Automatisierung, Integration in bestehende IT-Infrastruktur",
        features: [
          "Multi-Level Ticket-Routing",
          "Automatische SLA-Überwachung",
          "E-Mail-Integration und Benachrichtigungen",
          "Reporting und Analytics",
          "Knowledge Base Integration",
          "Mobile App für Techniker"
        ],
        achievements: "40% Reduzierung der Ticket-Bearbeitungszeit, 100% SLA-Compliance"
      }
    },
    {
      title: "Medical Device Tracker",
      description: "Prototyp zur Echtzeitüberwachung von Medizingeräten für Klinikbetrieb mit Dashboard für Gerätestatus und Wartungsplanung.",
      technologies: ["Python", "Flask", "PostgreSQL", "Chart.js"],
      category: "Healthcare Technology",
      icon: Database,
      color: "text-red-500",
      details: {
        duration: "6 Monate",
        teamSize: "4 Entwickler + 2 Medizintechniker",
        challenges: "Echtzeitdatenverarbeitung, Compliance mit Medizingeräteverordnung, Hochverfügbarkeit",
        features: [
          "Echtzeit-Gerätemonitoring",
          "Wartungsplanung und -erinnerungen",
          "Compliance-Dokumentation",
          "Alarm-Management-System",
          "Historische Datenanalyse",
          "Mobile Wartungs-App"
        ],
        achievements: "Pilotprojekt erfolgreich in 2 Kliniken implementiert, 99.8% Uptime"
      }
    },
    {
      title: "SCRUM Task Board",
      description: "Webbasiertes Aufgaben-Board mit Jira-API-Integration, ideal für agile Teams zur Verwaltung von Sprints und Backlog-Items.",
      technologies: ["React", "Node.js", "Jira API", "TypeScript"],
      category: "Project Management",
      icon: Users,
      color: "text-orange-500",
      details: {
        duration: "3 Monate",
        teamSize: "2 Frontend + 1 Backend Entwickler",
        challenges: "Jira API-Komplexität, Echtzeitaktualisierungen, Performance bei großen Projekten",
        features: [
          "Drag & Drop Task-Management",
          "Echtzeit-Synchronisation mit Jira",
          "Sprint-Planung und Burn-down Charts",
          "Team-Velocity-Tracking",
          "Custom Workflow-Unterstützung",
          "Zeiterfassung und Reporting"
        ],
        achievements: "Produktivitätssteigerung um 30%, Verwendung in 5+ Entwicklerteams"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Meine <span className="hero-text">Projekte</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Eine Auswahl meiner technischen Projekte und Entwicklungsarbeiten
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card hover-lift group">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Main Project Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`flex-shrink-0 p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors`}>
                        <project.icon className={`h-6 w-6 ${project.color} group-hover:scale-110 transition-transform`} />
                      </div>
                      <div className="flex-1">
                        <Badge variant="outline" className="mb-2 border-primary/30 text-primary">
                          {project.category}
                        </Badge>
                        <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors mb-2">
                          {project.title}
                        </h3>
                        <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                          <span>⏱️ {project.details.duration}</span>
                          <span>👥 {project.details.teamSize}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                      {project.description}
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Herausforderungen:</h4>
                        <p className="text-sm text-muted-foreground">{project.details.challenges}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Erreichte Ziele:</h4>
                        <p className="text-sm text-muted-foreground">{project.details.achievements}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="secondary"
                          className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-primary/50 hover:bg-primary/10"
                      >
                        <Code className="h-4 w-4 mr-2" />
                        Code ansehen
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-muted-foreground hover:text-primary"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="lg:col-span-1">
                    <div className="bg-muted/30 rounded-xl p-6">
                      <h4 className="font-semibold mb-4 text-primary flex items-center gap-2">
                        <Code className="h-4 w-4" />
                        Schlüsselfunktionen
                      </h4>
                      <ul className="space-y-2">
                        {project.details.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {[
            { number: "5+", label: "Abgeschlossene Projekte" },
            { number: "10+", label: "Verwendete Technologien" },
            { number: "3", label: "Verschiedene Branchen" },
            { number: "2+", label: "Jahre Erfahrung" }
          ].map((stat, index) => (
            <Card key={index} className="glass-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold hero-text mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub CTA */}
        <Card className="glass-card mt-12 border-primary/30">
          <CardContent className="p-8 text-center">
            <Github className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Mehr Projekte auf GitHub</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Entdecken Sie weitere Projekte und Open-Source-Beiträge in meinem GitHub-Repository. 
              Dort finden Sie auch Code-Snippets und experimentelle Entwicklungen.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub besuchen
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Projects;