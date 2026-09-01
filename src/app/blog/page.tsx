import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | HQ Laser - Laser Welding Technology & Industry Insights',
  description: 'Expert guides, industry insights, and technical articles about laser welding, cutting, marking, and cleaning technology from HQ Laser.',
};

const blogPosts = [
  {
    slug: 'pulse-laser-cleaning-guide-2026',
    title: 'Pulse Laser Cleaning Machine: Complete Guide for Industrial Applications (2026)',
    excerpt: 'Everything you need to know about pulsed laser cleaning technology — benefits, applications, how to choose, and HQ Laser solutions.',
    date: 'August 2026',
    category: 'Technical Guide',
    readTime: '10 min read',
  },
  {
    slug: 'handheld-laser-welder-guide-2026',
    title: 'Handheld Laser Welder: The Complete Guide for 2026',
    excerpt: 'Everything you need to know about handheld laser welders — benefits, applications, how to choose the right machine, and expert tips from HQ Laser.',
    date: 'August 2026',
    category: 'Technical Guide',
    readTime: '8 min read',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0A1628]">
      {/* Header */}
      <header className="border-b border-[#1E3A5F] bg-[#0F1B2D]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Blog & <span className="text-[#3B82F6]">Insights</span>
          </h1>
          <p className="text-[#CBD5E1] text-lg max-w-2xl mx-auto">
            Expert guides, industry insights, and technical articles about laser technology.
          </p>
        </div>
      </header>

      {/* Blog List */}
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-[#162032] p-8 rounded-sm border border-[#1E3A5F] hover:border-[#3B82F6] transition-all hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(59,130,246,0.06)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-medium text-[#00D4FF] bg-[#0A2463] rounded-sm">
                  {post.category}
                </span>
                <span className="text-[#94A3B8] text-sm">{post.date}</span>
                <span className="text-[#94A3B8] text-sm">· {post.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-3 hover:text-[#3B82F6] transition-colors">
                {post.title}
              </h2>
              <p className="text-[#CBD5E1] leading-relaxed">
                {post.excerpt}
              </p>
              <div className="mt-4 text-[#0066FF] font-medium">
                Read Article →
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-[#0F1B2D] p-8 rounded-sm border border-[#1E3A5F] text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Stay Updated</h2>
          <p className="text-[#CBD5E1] mb-6">
            Follow us on social media for the latest laser technology insights and product updates.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://www.facebook.com/heqingcnc"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[#1877F2] text-white rounded-sm hover:bg-[#166FE5] transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/company/heqingcnc"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[#0A66C2] text-white rounded-sm hover:bg-[#004182] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.youtube.com/@heqingcnc"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[#FF0000] text-white rounded-sm hover:bg-[#CC0000] transition-colors"
            >
              YouTube
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
