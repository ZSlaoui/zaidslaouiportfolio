import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award, Calendar, Building } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Google IT Support",
      provider: "Google / Coursera",
      duration: "3 Monate",
      date: "2024",
      category: "IT Support",
      url: "https://coursera.org/share/f89761266ba57ccfed21236bb9267c3f",
      color: "text-blue-500",
      description: "Umfassende Schulung in IT-Support-Grundlagen, Troubleshooting und Kundenservice",
      skills: ["Hardware-Troubleshooting", "Betriebssysteme", "Netzwerk-Grundlagen", "Kundenbetreuung", "IT-Sicherheit"],
      level: "Professional Certificate"
    },
    {
      title: "How to create a Jira SCRUM project",
      provider: "Atlassian / Coursera",
      duration: "1 Monat",
      date: "2024",
      category: "Project Management",
      url: "https://coursera.org/share/333f4288f4bde6deb0a70a59d5d8d9c3",
      color: "text-green-500",
      description: "Praktische Anleitung zur Erstellung und Verwaltung von SCRUM-Projekten in Jira",
      skills: ["Jira Administration", "SCRUM Methodology", "Sprint Planning", "Backlog Management"],
      level: "Specialization"
    },
    {
      title: "IT Security: Defense against the digital dark arts",
      provider: "Google / Coursera",
      duration: "2 Monate",
      date: "2024",
      category: "Cybersecurity",
      url: "https://coursera.org/share/174cb38e2bfe5eb66b58bd175232bf76",
      color: "text-red-500",
      description: "Umfassende Einführung in IT-Sicherheit, Bedrohungserkennung und Schutzmaßnahmen",
      skills: ["Threat Assessment", "Encryption", "Network Security", "Malware Analysis", "Security Policies"],
      level: "Professional Course"
    },
    {
      title: "Get started with Jira",
      provider: "Atlassian / Coursera",
      duration: "1 Monat",
      date: "2024",
      category: "Project Management",
      url: "https://coursera.org/share/6517cfd3fb2aa50c10e10d7152623a90",
      color: "text-green-500",
      description: "Grundlagen der Jira-Nutzung für Projektmanagement und Issue-Tracking",
      skills: ["Jira Basics", "Issue Management", "Workflow Configuration", "Dashboard Creation"],
      level: "Beginner Course"
    },
    {
      title: "Operating Systems and You: Becoming a Power User",
      provider: "Google / Coursera",
      duration: "2 Monate",
      date: "2024",
      category: "System Administration",
      url: "https://coursera.org/share/f570830e56b8e32a097a5e4c3fd32647",
      color: "text-purple-500",
      description: "Vertiefung in Betriebssysteme, Dateisysteme und erweiterte Benutzerfertigkeiten",
      skills: ["Windows Administration", "Linux Command Line", "File Systems", "Process Management", "System Logs"],
      level: "Professional Course"
    },
    {
      title: "System Administration and IT Infrastructure Services",
      provider: "Google / Coursera",
      duration: "2 Monate",
      date: "2024",
      category: "System Administration",
      url: "https://coursera.org/share/e87cbdaaf1a3fcc2e9e44b7e82032d06",
      color: "text-purple-500",
      description: "Umfassende Schulung in Systemadministration und IT-Infrastruktur-Management",
      skills: ["Server Management", "Directory Services", "Backup Strategies", "Infrastructure Planning", "Cloud Services"],
      level: "Professional Course"
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      provider: "Google / Coursera",
      duration: "2 Monate",
      date: "2024",
      category: "Networking",
      url: "https://coursera.org/share/ceda367e744328b56135704e453c5254",
      color: "text-blue-500",
      description: "Detaillierte Einführung in Computernetzwerke, Protokolle und Netzwerkarchitektur",
      skills: ["TCP/IP Protocol", "Network Troubleshooting", "Routing & Switching", "Network Security", "Wireless Networks"],
      level: "Professional Course"
    },
    {
      title: "Getting Started with Microsoft Excel",
      provider: "Microsoft / Coursera",
      duration: "1 Monat",
      date: "2024",
      category: "Productivity",
      url: "https://coursera.org/share/11681ed27459f102dbbf4b2f7de70f8d",
      color: "text-orange-500",
      description: "Grundlagen und fortgeschrittene Techniken in Microsoft Excel für Datenanalyse",
      skills: ["Data Analysis", "Formulas & Functions", "Pivot Tables", "Data Visualization", "Macros"],
      level: "Beginner Course"
    },
    {
      title: "Google Ads for Beginners",
      provider: "Google / Coursera",
      duration: "1 Monat",
      date: "2024",
      category: "Digital Marketing",
      url: "https://coursera.org/share/9beb21fa7139c24df0d30b66664be1eb",
      color: "text-yellow-500",
      description: "Einführung in Google Ads, Kampagnenmanagement und digitale Werbung",
      skills: ["Campaign Management", "Keyword Research", "Ad Creation", "Performance Analysis", "Budget Optimization"],
      level: "Beginner Course"
    },
    {
      title: "Accelerate Your Job Search with AI",
      provider: "Coursera",
      duration: "1 Monat",
      date: "2024",
      category: "Career Development",
      url: "https://coursera.org/share/16ca15ec232e0e9e9109b431e915ad5a",
      color: "text-pink-500",
      description: "Moderne Jobsuche-Strategien mit KI-Tools und digitalen Plattformen",
      skills: ["AI Tools", "Resume Optimization", "LinkedIn Strategy", "Interview Preparation", "Personal Branding"],
      level: "Professional Development"
    },
    {
      title: "Technical Support Fundamentals",
      provider: "Google / Coursera",
      duration: "2 Monate",
      date: "2024",
      category: "IT Support",
      url: "https://coursera.org/share/92ff14c8b1c5b6ba1a9d4a43e36fbe0e",
      color: "text-blue-500",
      description: "Grundlagen des technischen Supports, Problemlösung und Kundeninteraktion",
      skills: ["Technical Troubleshooting", "Customer Service", "Documentation", "Remote Support", "Escalation Procedures"],
      level: "Professional Course"
    },
    {
      title: "Software Development on SAP HANA",
      provider: "SAP",
      duration: "3 Monate",
      date: "2024",
      category: "Software Development",
      url: "#",
      color: "text-emerald-500",
      description: "Entwicklung von Anwendungen auf der SAP HANA In-Memory-Plattform",
      skills: ["SAP HANA Studio", "HANA SQL", "XS Engine", "CDS Views", "ABAP Development"],
      level: "Professional Certificate"
    }
  ];

  const categories = [...new Set(certifications.map(cert => cert.category))];

  const getCategoryColor = (category: string) => {
    const colors = {
      "IT Support": "bg-blue-500/10 text-blue-500 border-blue-500/30",
      "Project Management": "bg-green-500/10 text-green-500 border-green-500/30",
      "Cybersecurity": "bg-red-500/10 text-red-500 border-red-500/30",
      "System Administration": "bg-purple-500/10 text-purple-500 border-purple-500/30",
      "Networking": "bg-blue-500/10 text-blue-500 border-blue-500/30",
      "Productivity": "bg-orange-500/10 text-orange-500 border-orange-500/30",
      "Digital Marketing": "bg-yellow-500/10 text-yellow-500 border-yellow-500/30",
      "Career Development": "bg-pink-500/10 text-pink-500 border-pink-500/30",
      "Software Development": "bg-emerald-500/10 text-emerald-500 border-emerald-500/30"
    };
    return colors[category as keyof typeof colors] || "bg-primary/10 text-primary border-primary/30";
  };

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Meine <span className="hero-text">Zertifikate</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kontinuierliche Weiterbildung und professionelle Zertifizierungen
          </p>
        </div>

        {/* Categories Overview */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Badge 
              key={index}
              variant="outline"
              className={getCategoryColor(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {certifications.map((cert, index) => (
            <Card key={index} className="glass-card hover-lift group">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Award className={`h-6 w-6 ${cert.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge 
                        variant="outline" 
                        className={`${getCategoryColor(cert.category)} text-xs`}
                      >
                        {cert.category}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {cert.level}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {cert.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building className="h-4 w-4" />
                      <span>{cert.provider}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{cert.duration} • {cert.date}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-primary mb-2 text-sm">Erworbene Fähigkeiten:</h4>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex}
                          variant="secondary"
                          className="text-xs bg-muted/50 hover:bg-primary/10 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-primary/50 hover:bg-primary/10 group"
                  onClick={() => window.open(cert.url, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                  Zertifikat anzeigen
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { number: "12", label: "Zertifikate erworben" },
            { number: "9", label: "Verschiedene Kategorien" },
            { number: "2024", label: "Aktuellstes Jahr" },
            { number: "20+", label: "Stunden Weiterbildung" }
          ].map((stat, index) => (
            <Card key={index} className="glass-card text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold hero-text mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Commitment Statement */}
        <Card className="glass-card border-primary/30">
          <CardContent className="p-8 text-center">
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Kontinuierliche Weiterbildung</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              In der schnelllebigen IT-Branche ist kontinuierliches Lernen essentiell. Meine Zertifizierungen 
              spiegeln mein Engagement wider, immer auf dem neuesten Stand der Technologie zu bleiben und 
              meine Fähigkeiten ständig zu erweitern. Jedes Zertifikat repräsentiert nicht nur erworbenes 
              Wissen, sondern auch die Bereitschaft, sich neuen Herausforderungen zu stellen.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Certifications;