import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import type { Article } from '@/lib/portfolioContent';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card className="flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-portfolio-accent group">
      <CardHeader className="pb-3">
        <h4 className="text-lg font-semibold leading-tight line-clamp-3 group-hover:text-portfolio-accent transition-colors">
          {article.title}
        </h4>
      </CardHeader>
      <CardContent className="flex-grow pb-3">
        <div className="flex justify-between items-center mb-3 text-sm">
          <Badge className="bg-portfolio-accent text-white hover:bg-portfolio-accent/90 font-semibold">
            {article.platform}
          </Badge>
          <span className="text-muted-foreground">{article.date}</span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
          {article.description}
        </p>
      </CardContent>
      <CardFooter className="pt-0">
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-semibold text-portfolio-accent hover:gap-2 transition-all group/link"
        >
          Read Article
          <ExternalLink className="w-4 h-4" />
        </a>
      </CardFooter>
    </Card>
  );
}
