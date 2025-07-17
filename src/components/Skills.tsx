import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Settings, Users, Brain, Target } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    {
      category: "Programmiersprachen",
      icon: Code,
      skills: ["C#", "Java", "Python", "JavaScript", "PHP", "HTML/CSS", "Bash"]
    },
    {
      category: "Frameworks & Bibliotheken",
      icon: Settings,
      skills: [".NET", "WPF", "Flask", "Spring Boot", "Vaadin", "OpenCV"]
    },
    {
      category: "Datenbanken",
      icon: Database,
      skills: ["MySQL", "Oracle", "PostgreSQL", "SQL Server"]
    },
    {
      category: "Tools & Technologien",
      icon: Settings,
      skills: ["Jenkins", "Jira", "SonarQube", "Figma", "Canva", "Draw.io", "Git"]
    },
    {
      category: "Betriebssysteme",
      icon: Settings,
      skills: ["Windows", "macOS", "Linux", "Windows Server"]
    },
    {
      category: "Methoden",
      icon: Target,
      skills: ["Agile (SCRUM)", "UML", "Test-Driven Development", "CI/CD"]
    }
  ];

  const softSkills = [
    { skill: "Analytisches Denken", description: "Komplexe Probleme strukturiert lösen" },
    { skill: "Teamfähigkeit", description: "Effektive Zusammenarbeit in interdisziplinären Teams" },
    { skill: "Lösungsorientiert", description: "Pragmatische Ansätze für technische Herausforderungen" },
    { skill: "Anpassungsfähig", description: "Schnelle Einarbeitung in neue Technologien" },
    { skill: "Kommunikationsstark", description: "Technische Sachverhalte verständlich vermitteln" },
    { skill: "Detailorientiert", description: "Präzise Arbeitsweise bei komplexen Projekten" }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Meine <span className="hero-text">Fähigkeiten</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Eine umfassende Kombination aus technischen Kenntnissen und sozialen Kompetenzen
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Technische Fähigkeiten</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((category, index) => (
              <Card key={index} className="glass-card hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <category.icon className="h-6 w-6 text-primary" />
                    <h4 className="font-semibold">{category.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Soft Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((item, index) => (
              <Card key={index} className="glass-card hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <Brain className="h-6 w-6 text-primary mt-1" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{item.skill}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <Card className="glass-card mt-12">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Expertise</h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-6">
              Mit über 5 Jahren Erfahrung in der Softwareentwicklung und IT-Support bringe ich eine 
              ausgewogene Mischung aus technischer Tiefe und praktischer Anwendung mit. Meine Stärke 
              liegt in der Fähigkeit, komplexe technische Konzepte zu verstehen und sie in benutzerfreundliche 
              Lösungen umzusetzen.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge className="bg-gradient-primary">Full-Stack Entwicklung</Badge>
              <Badge className="bg-gradient-primary">IT-Support Spezialist</Badge>
              <Badge className="bg-gradient-primary">Systemadministration</Badge>
              <Badge className="bg-gradient-primary">Agile Methoden</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;