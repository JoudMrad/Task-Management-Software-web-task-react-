import { Button } from "@/components/ui/button";
import { ArrowRight, CheckSquare, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero flex items-center overflow-hidden animated-gradient-bg">
      
      {/* Animated Mesh Gradient Background */}
      <div className="hero-mesh-gradient" />
      
      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>
      
      {/* Additional floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/8 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-secondary/8 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6 animate-fade-in">
            <CheckSquare className="w-3.5 h-3.5" />
            <span>Trusted by 12,500+ teams across 45 countries</span>
          </div>

          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-foreground leading-tight mb-5 animate-slide-up">
            Manage Tasks{" "}
            <span className="gradient-text">Effortlessly</span>
            <br />
            Achieve More Together
          </h1>

          
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
            TaskFlow is the modern task management platform that helps teams organize, track, and accomplish their goals with powerful collaboration tools.
          </p>

          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button
              size="lg"
              className="gradient-bg text-primary-foreground hover:opacity-90 transition-opacity px-6 py-4 text-base font-semibold rounded-xl shadow-glow group"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-border/80 bg-background/80 hover:border-primary/60 hover:bg-primary/5 px-6 py-4 text-base font-semibold rounded-xl transition-all"
            >
              <Play className="w-4 h-4 mr-2" />
              Watch Demo
            </Button>
          </div>

          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {["MR", "JL", "AK", "SP"].map((initials, i) => (
                  <div
                    key={initials}
                    className="w-8 h-8 rounded-full border-2 border-background flex items-center justify-center text-xs font-semibold"
                    style={{
                      background: `linear-gradient(135deg, hsl(${239 + i * 2}, 84%, ${67 + i * 2}%) 0%, hsl(${258 - i * 2}, 90%, ${66 + i * 2}%) 100%)`,
                      color: 'white'
                    }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <span className="text-xs">Join 12,500+ active teams</span>
            </div>
            <div className="h-5 w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-xs ml-1">4.9/5 rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
