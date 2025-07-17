import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Enhanced Background with multiple layers */}
      <div className="absolute inset-0">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-primary opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-accent opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Dot pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary">Verfügbar für neue Projekte</span>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-muted-foreground">Hallo, ich bin</span>
                  <br />
                  <span className="hero-text bg-gradient-primary bg-clip-text text-transparent">
                    Zaid Slaoui
                  </span>
                </h1>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Informatiker
                  </span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    IT-Support
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Webentwickler
                  </span>
                </div>
              </div>
              
              <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed font-light">
                Informatiker mit einer Leidenschaft für IT-Support, Webentwicklung und technische Lösungen. 
                Mit fundierter akademischer Basis und vielseitiger Berufserfahrung kombiniere ich analytisches 
                Denken mit praktischer Umsetzungskraft.
              </p>
            </div>
            
            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105 group"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                Kontakt aufnehmen
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 hover:bg-primary/5 backdrop-blur-sm transition-all duration-300 hover:border-primary/50"
                onClick={() => scrollToSection('projects')}
              >
                <ArrowDown className="mr-2 h-5 w-5" />
                Projekte ansehen
              </Button>
            </div>

            {/* Enhanced Contact info with glassmorphism */}
            <div className="bg-card/50 backdrop-blur-md border border-border/50 rounded-2xl p-6 space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 text-sm">
                <div className="flex items-center gap-3 group hover:text-primary transition-colors cursor-pointer">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <span>zaidslaoui@outlook.de</span>
                </div>
                <div className="flex items-center gap-3 group hover:text-primary transition-colors cursor-pointer">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <span>+49 159 06778061</span>
                </div>
                <div className="flex items-center gap-3 group hover:text-primary transition-colors cursor-pointer">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <span>Bonn, Deutschland</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Main image container with enhanced effects */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Glowing border effect */}
                <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
                
                {/* Image container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm shadow-2xl group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src="https://i.postimg.cc/C5294Qxk/temp-Images-Kek-AO.avif" 
                    alt="Zaid Slaoui" 
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent"></div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-primary rounded-2xl opacity-80 animate-float shadow-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-accent rounded-3xl opacity-70 animate-float delay-1000 shadow-lg"></div>
              <div className="absolute top-1/4 -left-8 w-8 h-8 bg-gradient-primary rounded-xl opacity-60 animate-pulse delay-500"></div>
              
              {/* Tech stack indicators */}
              <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 space-y-4 hidden lg:block">
                <div className="bg-card/80 backdrop-blur-md border border-border/50 p-3 rounded-xl shadow-lg hover:scale-110 transition-transform">
                  <div className="w-6 h-6 bg-gradient-primary rounded-lg"></div>
                </div>
                <div className="bg-card/80 backdrop-blur-md border border-border/50 p-3 rounded-xl shadow-lg hover:scale-110 transition-transform delay-100">
                  <div className="w-6 h-6 bg-gradient-accent rounded-lg"></div>
                </div>
                <div className="bg-card/80 backdrop-blur-md border border-border/50 p-3 rounded-xl shadow-lg hover:scale-110 transition-transform delay-200">
                  <div className="w-6 h-6 bg-gradient-primary rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 group cursor-pointer" onClick={() => scrollToSection('about')}>
          <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center group-hover:border-primary/50 transition-colors">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;