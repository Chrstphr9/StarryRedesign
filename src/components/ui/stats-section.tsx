interface StatItem {
  value: string;
  label: string;
}

interface StatsSectionProps {
  title: string;
  subtitle: string;
  stats: StatItem[];
}

export function StatsSection({ title, subtitle, stats }: StatsSectionProps) {
  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="text-stats-title">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-stats-subtitle">
            {subtitle}
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2" data-testid={`text-stat-value-${index}`}>
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium" data-testid={`text-stat-label-${index}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
