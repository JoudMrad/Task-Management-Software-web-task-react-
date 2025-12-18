import { CheckSquare } from "lucide-react";

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Integrations", href: "#integrations" },
    { name: "API", href: "#api" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Blog", href: "#blog" },
    { name: "Careers", href: "#careers" },
    { name: "Contact", href: "#" },
  ],
  resources: [
    { name: "Documentation", href: "#docs" },
    { name: "Help Center", href: "#help" },
    { name: "Community", href: "#community" },
    { name: "Changelog", href: "#changelog" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Security", href: "#security" },
    { name: "Compliance", href: "#compliance" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-10 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                <CheckSquare className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">TaskFlow</span>
            </div>
            <p className="text-background/70 leading-relaxed mb-3 text-sm">
              Enterprise-grade task management platform trusted by 12,500+ teams worldwide. Streamline workflows, boost productivity, and achieve more together.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors duration-200 text-xs"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors duration-200 text-xs"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors duration-200 text-xs"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="font-semibold text-sm mb-3 mt-5">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors duration-200 text-xs"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 text-center">
          <p className="text-background/60 text-xs">
            © {new Date().getFullYear()} TaskFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
