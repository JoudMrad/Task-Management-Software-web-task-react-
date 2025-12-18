import { Button } from "@/components/ui/button";
import { ArrowRight, CheckSquare, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero flex items-center overflow-hidden">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-fade-in">
            <CheckSquare className="w-4 h-4" />
            <span>Trusted by 12,500+ teams across 45 countries</span>
          </div>

          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground leading-tight mb-6 animate-slide-up">
            Manage Tasks{" "}
            <span className="gradient-text">Effortlessly</span>
            <br />
            Achieve More Together
          </h1>

          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
            TaskFlow is the modern task management platform that helps teams organize, track, and accomplish their goals with powerful collaboration tools.
          </p>

          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button
              size="lg"
              className="gradient-bg text-primary-foreground hover:opacity-90 transition-opacity px-8 py-6 text-lg font-semibold rounded-xl shadow-glow group"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-border/80 bg-background/80 hover:border-primary/60 hover:bg-primary/5 px-8 py-6 text-lg font-semibold rounded-xl transition-all"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-muted-foreground animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {["MR", "JL", "AK", "SP"].map((initials, i) => (
                  <div
                    key={initials}
                    className="w-10 h-10 rounded-full border-2 border-background flex items-center justify-center text-xs font-semibold"
                    style={{
                      background: `linear-gradient(135deg, hsl(${217 + i * 10}, 91%, ${60 + i * 5}%) 0%, hsl(${258 + i * 10}, 90%, ${66 + i * 5}%) 100%)`,
                      color: 'white'
                    }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <span className="text-sm">Join 12,500+ active teams</span>
            </div>
            <div className="h-6 w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-sm ml-1">4.9/5 rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
