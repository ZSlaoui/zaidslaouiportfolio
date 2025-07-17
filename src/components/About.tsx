import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, GraduationCap, ExternalLink } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "B.Sc. Informatik",
      school: "Hochschule Bonn-Rhein-Sieg",
      period: "Aktuell",
      status: "current"
    },
    {
      degree: "Medizintechnik",
      school: "Hochschule Remagen",
      period: "2023",
      status: "completed"
    },
    {
      degree: "B.Sc. Technische Informatik",
      school: "FSTT Tangier",
      period: "2018",
      status: "completed",
      hasLink: true,
      linkUrl: "https://1drv.ms/b/c/d56a6fc00e644c8a/ERLLDRWrLmxFsLdYRaRfb4oBo7bKkfwnarkU-0v4aZVHAQ?e=UzjHm8"
    },
    {
      degree: "Abitur (Schwerpunkt Physik/Chemie)",
      school: "Marokko",
      period: "2013",
      status: "completed"
    }
  ];

  const languages = [
    { language: "Arabisch", level: "Muttersprache" },
    { language: "Deutsch", level: "Fließend" },
    { language: "Englisch", level: "Fließend" },
    { language: "Französisch", level: "Fließend" }
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Über <span className="hero-text">mich</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ein leidenschaftlicher Informatiker mit vielfältiger Bildung und praktischer Erfahrung
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Personal Info */}
          <Card className="glass-card hover-lift">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <MapPin className="h-6 w-6 text-primary" />
                Persönliche Daten
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <span>Geboren am 02.01.1996 in Marokko</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span>Wohnhaft in Bonn, Deutschland</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Sprachen</h4>
                <div className="grid grid-cols-2 gap-4">
                  {languages.map((lang, index) => (
                    <div key={index} className="space-y-1">
                      <div className="font-medium">{lang.language}</div>
                      <div className="text-sm text-muted-foreground">{lang.level}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="glass-card hover-lift">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                Bildungsweg
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-primary/30">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                    <div className="space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold text-lg">{edu.degree}</h4>
                        {edu.status === "current" && (
                          <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                            Aktuell
                          </span>
                        )}
                      </div>
                      <div className="text-muted-foreground">{edu.school}</div>
                      <div className="text-sm text-muted-foreground">{edu.period}</div>
                      {edu.hasLink && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2"
                          onClick={() => window.open(edu.linkUrl, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Diplom anzeigen
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mission Statement */}
        <Card className="glass-card hover-lift mt-12">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Meine Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Als Informatiker bringe ich eine einzigartige Kombination aus theoretischem Wissen und praktischer 
              Erfahrung mit. Meine Reise von der technischen Informatik über die Medizintechnik bis hin zur 
              angewandten Informatik hat mir ein breites Verständnis für verschiedene Technologiebereiche vermittelt. 
              Ich bin leidenschaftlich daran interessiert, komplexe technische Probleme zu lösen und innovative 
              Lösungen zu entwickeln, die echten Mehrwert schaffen.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;