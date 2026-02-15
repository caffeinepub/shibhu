import { Badge } from '@/components/ui/badge';
import { expertiseTags } from '@/lib/portfolioContent';

export default function HeaderSection() {
  return (
    <header className="relative bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] text-white py-24 px-4 text-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.03),transparent_50%)]" />
      <div className="relative z-10 container mx-auto max-w-5xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 tracking-tight">
          ShiBhu
        </h1>
        <p className="text-lg md:text-xl text-gray-300 font-light mb-8">
          Strategic Business Writer | Thought Leader | Enterprise Transformation
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {expertiseTags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors px-4 py-2 text-sm font-medium rounded-full"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </header>
  );
}
