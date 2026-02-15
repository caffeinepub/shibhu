export interface Article {
  title: string;
  platform: string;
  date: string;
  description: string;
  url: string;
}

export interface ArticleCategory {
  title: string;
  articles: Article[];
}

export interface ExpertiseItem {
  title: string;
  description: string;
}

export interface Stat {
  number: string;
  label: string;
}

export const expertiseTags = [
  'Global Capability Centers',
  'Marketplace Platforms',
  'Finance & Risk',
  'Technology Leadership',
  'Telecom Strategy'
];

export const articleCategories: ArticleCategory[] = [
  {
    title: 'Global Capability Centers & Organizational Models',
    articles: [
      {
        title: 'Global Capability Centers Surge Ahead as Enterprises Navigate Economic Headwinds',
        platform: 'Torry Harris',
        date: '2025',
        description: 'Modern GCCs function as strategic instruments of resilience and competitive differentiation, enabling enterprises to distribute operational risk while accelerating innovation through AI adoption.',
        url: 'https://www.torryharris.com/insights/articles/global-capability-centers-enterprise-growth-economic-headwinds'
      },
      {
        title: 'Why the C-Suite Is Turning to Micro-GCCs?',
        platform: 'LinkedIn',
        date: 'Dec 2025',
        description: 'Micro-GCCs represent a fundamental shift in capability building. Organizations deploy compact, high-velocity teams designed for rapid experimentation and validated learning.',
        url: 'https://www.linkedin.com/pulse/why-c-suite-turning-micro-gccs-torry-harris-integration-solutions-6becc'
      }
    ]
  },
  {
    title: 'Marketplace Platforms & Ecosystem Strategy',
    articles: [
      {
        title: 'From Network Owner to Platform Orchestrator: What Wholesale Broadband Marketplace Unlocks',
        platform: 'TM Forum',
        date: 'Dec 2025',
        description: 'Digital marketplace ecosystems enable providers to transition from static bilateral agreements to dynamic, on-demand service delivery with multiple revenue streams.',
        url: 'https://inform.tmforum.org/features-and-opinion/from-network-owner-to-platform-orchestrator-what-wholesale-broadband-marketplace-unlocks'
      },
      {
        title: 'Monetizing Network & Data APIs: The Operator\'s API Platform Play',
        platform: 'Torry Harris',
        date: 'Jan 2026',
        description: 'Telecommunications operators can monetize network capabilities through APIs by addressing organizational and commercial barriers with a practical 12-month roadmap.',
        url: 'https://www.torryharris.com/insights/articles/monetizing-network-and-data-apis'
      }
    ]
  },
  {
    title: 'Finance & Risk Management',
    articles: [
      {
        title: 'The CFO\'s Guide to Integrated Risk Management',
        platform: 'Cogneesol',
        date: 'Jan 2026',
        description: 'A practical framework for CFOs to transition from fragmented risk management to integrated risk management embedded in organizational strategy and daily operations.',
        url: 'https://www.cogneesol.com/blog/the-cfos-guide-to-integrated-risk-management'
      }
    ]
  },
  {
    title: 'Technology Leadership & Digital Transformation',
    articles: [
      {
        title: 'Personal Branding for CIOs: How to Become a Thought Leader',
        platform: 'Purple Iris',
        date: 'Oct 2025',
        description: 'A three-pillar framework for building authentic personal brands that resonate with boards, peers, and industry stakeholders through consistency and credibility.',
        url: 'https://purpleiriscomms.com/personal-branding-for-cios-how-to-become-a-thought-leader/'
      },
      {
        title: '7 High-Impact Ways AI & Analytics Are Re-shaping Mortgage Lending',
        platform: 'WNS',
        date: 'Oct 2025',
        description: 'AI and analytics are transforming mortgage lending from underwriting to customer experience with measurable business impact and governance considerations.',
        url: 'https://www.wns.com/perspectives/articles/7-high-impact-ways-ai-analytics-are-re-shaping-mortgage-lending'
      }
    ]
  },
  {
    title: 'Energy & Utilities Sector Strategy',
    articles: [
      {
        title: 'How E&U Leaders Can Turn Trump\'s Tariffs and Policy Headwinds into a Strategic Advantage',
        platform: 'WNS',
        date: 'Apr 2025',
        description: 'Energy and utilities executives can reposition their organizations to capture strategic advantage through operational efficiency improvements and supply chain diversification.',
        url: 'https://www.wns.com/perspectives/blogs/how-e-u-leaders-can-turn-trumps-tariffs-and-policy-headwinds-into-a-strategic-advantage'
      }
    ]
  }
];

export const expertiseItems: ExpertiseItem[] = [
  {
    title: 'Organizational Transformation',
    description: 'Deep expertise in GCC models, micro-GCC innovation, and distributed capability networks. Balancing scale with agility and innovation with operational excellence.'
  },
  {
    title: 'Platform & Ecosystem Strategy',
    description: 'Strategic perspective on marketplace orchestration, API monetization, B2B2X models, and ecosystem value creation across industries.'
  },
  {
    title: 'Finance & Risk Management',
    description: 'Comprehensive understanding of integrated risk management, AI adoption in finance, digital transformation readiness, and financial resilience.'
  },
  {
    title: 'Technology Leadership',
    description: 'Thought leadership on personal branding, translating technical expertise into business impact, and leading through technological change.'
  },
  {
    title: 'Industry-Specific Transformation',
    description: 'Sector expertise in energy & utilities, financial services, telecommunications, and mortgage lending with strategic differentiation focus.'
  }
];

export const stats: Stat[] = [
  {
    number: '700+',
    label: 'Published Articles'
  },
  {
    number: '50+',
    label: 'Publication Platforms'
  },
  {
    number: '9',
    label: 'Expertise Domains'
  },
  {
    number: '12',
    label: 'Years Experience'
  }
];

export const aboutContent = [
  'Strategic business writer and thought leader specializing in organizational transformation, enterprise strategy, and digital innovation. Published across leading platforms including Torry Harris, TM Forum, Cogneesol, WNS, and Purple Iris Communications.',
  'With expertise spanning Global Capability Centers, marketplace platforms, finance transformation, and technology leadership, I contribute to publications reaching executive audiences across multiple industries. My writing combines strategic insight with practical frameworks, grounded in real-world enterprise challenges and industry best practices.'
];

export const footerContent = {
  copyright: `© ${new Date().getFullYear()} ShiBhu. All rights reserved.`,
  lastUpdated: 'Portfolio Last Updated: February 15, 2026'
};
