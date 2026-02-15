import { Card, CardContent } from '@/components/ui/card';
import { stats } from '@/lib/portfolioContent';

export default function StatsSection() {
  return (
    <section id="stats" className="py-16 border-b border-border">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative pb-4">
        Career Overview
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-portfolio-accent rounded-full" />
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="text-center hover:shadow-md transition-shadow">
            <CardContent className="pt-8 pb-8">
              <div className="text-4xl md:text-5xl font-bold text-portfolio-accent mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
