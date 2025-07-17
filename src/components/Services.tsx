import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Monitor, 
  Code, 
  Database, 
  TestTube, 
  BarChart3, 
  Wrench,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "IT Support",
      description: "Umfassender technischer Support für Unternehmen und Privatpersonen",
      features: [
        "Systemdiagnose und Fehlerbehebung",
        "Support-Infrastruktur Aufbau",
        "Arbeitsplatzsetup und Konfiguration",
        "First & Second Level Support",
        "Remote Support und Wartung"
      ],
      color: "text-blue-500"
    },
    {
      icon: Code,
      title: "Webentwicklung",
      description: "Moderne, responsive Websites und Webanwendungen",
      features: [
        "Responsive Website-Entwicklung",
        "Frontend & Backend Entwicklung",
        "UI/UX Design Optimierung",
        "E-Commerce Lösungen",
        "API Integration und Entwicklung"
      ],
      color: "text-green-500"
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Datenanalyse und intelligente Lösungen für bessere Entscheidungen",
      features: [
        "Datenanalyse und Visualisierung",
        "Machine Learning Modelle",
        "Business Intelligence Lösungen",
        "Predictive Analytics",
        "Data Mining und Preprocessing"
      ],
      color: "text-purple-500"
    },
    {
      icon: TestTube,
      title: "Software Testing",
      description: "Qualitätssicherung und systematische Softwaretests",
      features: [
        "Manuelle und automatisierte Tests",
        "Performance Testing",
        "Security Testing",
        "Usability Testing",
        "Test-Dokumentation und Reporting"
      ],
      color: "text-orange-500"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Meine <span className="hero-text">Leistungen</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Spezialisierte Dienstleistungen für Ihre technischen Anforderungen
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="glass-card hover-lift group">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors`}>
                    <service.icon className={`h-8 w-8 ${service.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Overview */}
        <Card className="glass-card">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-4">Mein Arbeitsprozess</h3>
              <p className="text-muted-foreground">
                Strukturierter Ansatz für erfolgreiche Projektumsetzung
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Anforderungsanalyse",
                  description: "Detaillierte Aufnahme Ihrer Anforderungen und Ziele"
                },
                {
                  step: "02", 
                  title: "Konzept & Planung",
                  description: "Entwicklung einer maßgeschneiderten Lösungsstrategie"
                },
                {
                  step: "03",
                  title: "Implementierung",
                  description: "Professionelle Umsetzung mit regelmäßigen Updates"
                },
                {
                  step: "04",
                  title: "Support & Wartung",
                  description: "Langfristige Betreuung und kontinuierliche Optimierung"
                }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h4 className="font-semibold mb-2">{process.title}</h4>
                  <p className="text-sm text-muted-foreground">{process.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12">
          <Card className="glass-card border-primary/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Bereit für Ihr nächstes Projekt?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Lassen Sie uns gemeinsam an Ihrer technischen Lösung arbeiten. 
                Kontaktieren Sie mich für eine unverbindliche Beratung.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                onClick={scrollToContact}
              >
                Projekt besprechen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;