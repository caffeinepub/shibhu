import HeaderSection from './HeaderSection';
import StickyNav from './StickyNav';
import ArticlesSection from './ArticlesSection';
import ExpertiseSection from './ExpertiseSection';
import StatsSection from './StatsSection';
import AboutSection from './AboutSection';
import FooterSection from './FooterSection';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderSection />
      <StickyNav />
      <main className="container mx-auto">
        <ArticlesSection />
        <ExpertiseSection />
        <StatsSection />
        <AboutSection />
      </main>
      <FooterSection />
    </div>
  );
}
