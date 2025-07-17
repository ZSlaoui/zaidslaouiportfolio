import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Clock, Linkedin, Github } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: "Zaid Slaoui"
      };

      await emailjs.send(
        'service_b5lyovl',
        'template_iilh5xu',
        templateParams,
        'VeQIq5nVDUwAKmRrr'
      );

      toast({
        title: "Nachricht gesendet!",
        description: "Vielen Dank für Ihre Nachricht. Ich werde mich schnellstmöglich bei Ihnen melden.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Fehler beim Senden",
        description: "Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "E-Mail",
      value: "zaidslaoui@outlook.de",
      href: "mailto:zaidslaoui@outlook.de"
    },
    {
      icon: Phone,
      label: "Telefon",
      value: "+49 159 06778061",
      href: "tel:+4915906778061"
    },
    {
      icon: MapPin,
      label: "Adresse",
      value: "Pariser Straße 54, 53117 Bonn",
      href: "https://maps.google.com/?q=Pariser+Straße+54,+53117+Bonn"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            <span className="hero-text">Kontakt</span> aufnehmen
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Haben Sie ein Projekt im Kopf? Lassen Sie uns darüber sprechen und gemeinsam eine Lösung entwickeln.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Nachricht senden</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Ihr vollständiger Name"
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-Mail *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="ihre.email@beispiel.de"
                      className="bg-background/50"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Betreff *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Worum geht es in Ihrer Anfrage?"
                    className="bg-background/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Nachricht *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage..."
                    rows={6}
                    className="bg-background/50"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>Wird gesendet...</>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Nachricht senden
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="glass-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Kontaktdaten</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors group"
                    >
                      <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-sm text-muted-foreground mb-1">
                          {info.label}
                        </div>
                        <div className="font-semibold group-hover:text-primary transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="glass-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Verfügbarkeit
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <div>Montag - Freitag: 9:00 - 18:00 Uhr</div>
                  <div>Samstag: 10:00 - 16:00 Uhr</div>
                  <div>Sonntag: Nach Vereinbarung</div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Ich antworte in der Regel innerhalb von 24 Stunden.
                </p>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Folgen Sie mir</h3>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Contact CTA */}
        <Card className="glass-card mt-12 border-primary/30">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Lieber direkt anrufen?</h3>
            <p className="text-muted-foreground mb-6">
              Für dringende Anfragen oder ein spontanes Gespräch erreichen Sie mich auch telefonisch.
            </p>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 hover:bg-primary/10"
              onClick={() => window.open('tel:+4915906778061')}
            >
              <Phone className="mr-2 h-5 w-5" />
              Jetzt anrufen
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;