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
      color: "text-blue-500"
    },
    {
      title: "E-Commerce Website",
      description: "Vollständig funktionaler Online-Shop für ein lokales Start-up, entwickelt von der Konzeption bis zur finalen Implementierung mit Zahlungsintegration.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      category: "Web Development",
      icon: Code,
      color: "text-green-500"
    },
    {
      title: "Support Ticket System",
      description: "Inhouse-Tool zur effizienten Ticketverwaltung im IT-Support mit rollenbasiertem Berechtigungssystem und automatisierter Workflow-Unterstützung.",
      technologies: ["C#", ".NET", "SQL Server", "WPF"],
      category: "Enterprise Software",
      icon: TestTube,
      color: "text-purple-500"
    },
    {
      title: "Medical Device Tracker",
      description: "Prototyp zur Echtzeitüberwachung von Medizingeräten für Klinikbetrieb mit Dashboard für Gerätestatus und Wartungsplanung.",
      technologies: ["Python", "Flask", "PostgreSQL", "Chart.js"],
      category: "Healthcare Technology",
      icon: Database,
      color: "text-red-500"
    },
    {
      title: "SCRUM Task Board",
      description: "Webbasiertes Aufgaben-Board mit Jira-API-Integration, ideal für agile Teams zur Verwaltung von Sprints und Backlog-Items.",
      technologies: ["React", "Node.js", "Jira API", "TypeScript"],
      category: "Project Management",
      icon: Users,
      color: "text-orange-500"
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

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card hover-lift group">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`flex-shrink-0 p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors`}>
                    <project.icon className={`h-6 w-6 ${project.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  <div className="flex-1">
                    <Badge variant="outline" className="mb-2 border-primary/30 text-primary">
                      {project.category}
                    </Badge>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                
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
                    Details
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