import { Heart } from 'lucide-react';
import { footerContent } from '@/lib/portfolioContent';

export default function FooterSection() {
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname || 'shibhu-portfolio')
    : 'shibhu-portfolio';

  return (
    <footer className="bg-[#1a1a1a] text-white py-12 px-4 text-center">
      <div className="container mx-auto max-w-4xl space-y-4">
        <p className="text-sm">{footerContent.copyright}</p>
        <p className="text-sm text-gray-400">{footerContent.lastUpdated}</p>
        <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
          Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors underline"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
