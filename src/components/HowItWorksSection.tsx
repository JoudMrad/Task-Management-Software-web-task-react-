import { ClipboardList, Users, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Set Up Your Workspace",
    description: "Create projects, define workflows, and configure custom fields. Import existing tasks or start fresh with our templates. Set up automation rules to streamline repetitive work.",
  },
  {
    number: "02",
    icon: Users,
    title: "Invite & Collaborate",
    description: "Add team members with role-based permissions. Assign tasks, set dependencies, and enable real-time collaboration. Use @mentions and comments to keep everyone aligned.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Monitor & Optimize",
    description: "Track performance with customizable dashboards and reports. Identify bottlenecks, measure team velocity, and optimize workflows with data-driven insights.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started in just three simple steps and transform your workflow.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary transform -translate-y-1/2 opacity-20" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative text-center group cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-primary-foreground text-sm font-bold z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow">
                  {index + 1}
                </div>

                <div className="pt-8 p-8 rounded-2xl glass-card transition-all duration-300 ease-out group-hover:border-primary/40 group-hover:shadow-xl group-hover:-translate-y-2 group-hover:bg-gradient-to-b group-hover:from-card group-hover:to-primary/5">
                  <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-primary/15 group-hover:scale-110 group-hover:rotate-3">
                    <step.icon className="w-8 h-8 text-primary transition-all duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground/80">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
