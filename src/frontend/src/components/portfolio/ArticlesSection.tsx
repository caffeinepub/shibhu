import { articleCategories } from '@/lib/portfolioContent';
import ArticleCard from './ArticleCard';

export default function ArticlesSection() {
  return (
    <section id="articles" className="py-16 border-b border-border">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative pb-4">
        Published Thought Leadership
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-portfolio-accent rounded-full" />
      </h2>

      {articleCategories.map((category) => (
        <div key={category.title} className="mb-12 last:mb-0">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-foreground">
            {category.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.articles.map((article) => (
              <ArticleCard key={article.title} article={article} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
