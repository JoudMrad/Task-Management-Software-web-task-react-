import { CheckCircle, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Advanced Task Organization",
    description: "Structure your workflow with customizable boards, smart filters, and priority tagging. Keep projects organized with drag-and-drop functionality and automated categorization.",
  },
  {
    icon: Zap,
    title: "Real-time Team Collaboration",
    description: "Collaborate seamlessly with instant updates, live editing, and threaded comments. Get notified about changes and maintain context with integrated activity feeds.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Bank-level encryption, SOC 2 compliance, and granular access controls. Your data is protected with automated backups and 99.9% uptime SLA.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 lg:py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage your tasks efficiently and boost your productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-2xl glass-card cursor-pointer transition-all duration-300 ease-out hover:border-primary/40 hover:shadow-xl hover:-translate-y-2 hover:bg-gradient-to-b hover:from-card hover:to-primary/5 animate-fade-in"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5 transition-all duration-300 group-hover:shadow-glow group-hover:scale-110 group-hover:rotate-3">
                <feature.icon className="w-6 h-6 text-primary-foreground transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
