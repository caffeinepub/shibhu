import { aboutContent } from '@/lib/portfolioContent';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 border-b border-border">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative pb-4">
        About
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-portfolio-accent rounded-full" />
      </h2>

      <div className="max-w-3xl mx-auto text-center space-y-6">
        {aboutContent.map((paragraph, index) => (
          <p key={index} className="text-base leading-relaxed text-muted-foreground">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
