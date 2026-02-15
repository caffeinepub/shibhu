import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { expertiseItems } from '@/lib/portfolioContent';

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-16 border-b border-border">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative pb-4">
        Core Expertise
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-portfolio-accent rounded-full" />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {expertiseItems.map((item) => (
          <Card key={item.title} className="border-l-4 border-l-portfolio-accent hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
