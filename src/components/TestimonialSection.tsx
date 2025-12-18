import { Star, Quote } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-16 lg:py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied users who transformed their productivity.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative p-6 sm:p-8 rounded-3xl glass-card shadow-card animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="absolute -top-4 left-6 w-8 h-8 rounded-full gradient-bg flex items-center justify-center">
              <Quote className="w-4 h-4 text-primary-foreground" />
            </div>

            <div className="flex items-center gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <blockquote className="text-base sm:text-lg text-foreground font-medium leading-relaxed mb-6">
              "Since implementing TaskFlow, our development team's sprint completion rate improved by 35%. The real-time collaboration features eliminated communication gaps, and the intuitive interface reduced onboarding time for new team members significantly."
            </blockquote>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-bold text-sm">
                MR
              </div>
              <div>
                <p className="font-semibold text-sm text-foreground">Michael Rodriguez</p>
                <p className="text-xs text-muted-foreground">Engineering Lead at DevStack Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
