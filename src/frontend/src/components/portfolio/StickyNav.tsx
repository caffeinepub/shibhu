export default function StickyNav() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-muted/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center py-4 gap-8">
          <button
            onClick={() => scrollToSection('articles')}
            className="text-sm font-medium text-foreground hover:text-portfolio-accent transition-colors focus:outline-none focus:text-portfolio-accent"
          >
            Articles
          </button>
          <button
            onClick={() => scrollToSection('expertise')}
            className="text-sm font-medium text-foreground hover:text-portfolio-accent transition-colors focus:outline-none focus:text-portfolio-accent"
          >
            Expertise
          </button>
          <button
            onClick={() => scrollToSection('stats')}
            className="text-sm font-medium text-foreground hover:text-portfolio-accent transition-colors focus:outline-none focus:text-portfolio-accent"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium text-foreground hover:text-portfolio-accent transition-colors focus:outline-none focus:text-portfolio-accent"
          >
            About
          </button>
        </div>
      </div>
    </nav>
  );
}
