import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg card-hover smooth-transition border border-border">
      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-4" data-testid="text-service-title">{title}</h3>
      <p className="text-muted-foreground leading-relaxed" data-testid="text-service-description">
        {description}
      </p>
    </div>
  );
}
