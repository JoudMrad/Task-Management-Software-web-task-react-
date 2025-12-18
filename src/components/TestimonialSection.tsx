import { Star, Quote } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied users who transformed their productivity.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative p-8 sm:p-12 rounded-3xl glass-card shadow-card animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="absolute -top-5 left-8 w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
              <Quote className="w-5 h-5 text-primary-foreground" />
            </div>

            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <blockquote className="text-xl sm:text-2xl text-foreground font-medium leading-relaxed mb-8">
              "Since implementing TaskFlow, our development team's sprint completion rate improved by 35%. The real-time collaboration features eliminated communication gaps, and the intuitive interface reduced onboarding time for new team members significantly."
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-bold text-lg">
                MR
              </div>
              <div>
                <p className="font-semibold text-foreground">Michael Rodriguez</p>
                <p className="text-muted-foreground">Engineering Lead at DevStack Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
