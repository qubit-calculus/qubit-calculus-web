/**
 * Blog Page — Qubit Calculus
 *
 * Agency insights, engineering deep-dives, and strategy articles.
 * Professional card layout with category filtering.
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MarketingLayout } from '@/components/marketing';
import { SectionHeader } from '@/components/marketing/ui/SectionHeader';
import { GlassCard } from '@/components/marketing/ui/GlassCard';
import { blogPosts, categories, categoryColors, defaultCategoryColor } from '@/data/blog';
import { REVEAL_UP } from '@/lib/motion-presets';
import SEO, { breadcrumbJsonLd } from '@/components/SEO';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const filteredPosts =
    selectedCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const featuredPosts = filteredPosts.filter((p) => p.featured);
  const regularPosts = filteredPosts.filter((p) => !p.featured);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
    setEmail('');
  };

  return (
    <MarketingLayout
      title="Agency Insights"
      subtitle="Thoughts on engineering, design, and building digital products that matter."
    >
      <SEO
        title="Blog — Agency Insights"
        description="Engineering deep-dives, design thinking, startup advice, and lessons from building digital products. Read insights from the Qubit Calculus team."
        path="/blog"
        keywords="software development blog, engineering insights, startup advice, React tutorials, design thinking"
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
        ])}
      />
      {/* Category Filter */}
      <section className="relative py-8 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              const count = category === 'All' ? blogPosts.length : blogPosts.filter((p) => p.category === category).length;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`text-sm px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
                      : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200/50 dark:border-white/5 hover:bg-gray-200 dark:hover:bg-white/10'
                  }`}
                >
                  {category}
                  {category !== 'All' && (
                    <span className={`ml-1.5 text-xs ${isActive ? 'text-white/70' : 'text-gray-400 dark:text-gray-500'}`}>
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-3 text-center text-xs text-gray-500 dark:text-gray-500"
          >
            {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </motion.p>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="relative py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div {...REVEAL_UP} className="mb-10">
              <SectionHeader
                title="Featured"
                titleAccent="Articles"
                description="Our latest and most impactful insights."
                align="center"
              />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPosts.map((post, index) => {
                const catColor = categoryColors[post.category] ?? defaultCategoryColor;
                return (
                  <Link key={post.id} to={`/blog/${post.slug}`} className="block no-underline">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.12 }}
                    >
                      <GlassCard className="h-full group" enableTilt={false}>
                        <div className="p-6">
                          {/* Category + Date */}
                          <div className="flex items-center justify-between mb-4">
                            <span
                              className="text-xs font-semibold px-2.5 py-1 rounded-full"
                              style={{ background: catColor.bg, color: catColor.text }}
                            >
                              {post.category}
                            </span>
                            <span className="text-xs text-gray-400 dark:text-gray-500">{post.date}</span>
                          </div>

                          {/* Emoji icon */}
                          <div className="text-3xl mb-4">{post.image}</div>

                          {/* Title */}
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 leading-tight">
                            {post.title}
                          </h3>

                          {/* Excerpt */}
                          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[11px] px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-500 border border-gray-200/50 dark:border-white/5"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-gray-200/30 dark:border-white/5">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-[10px] font-bold text-white">{post.author.charAt(0)}</div>
                              <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{post.author}</span>
                            </div>
                            <span className="text-xs text-gray-400 dark:text-gray-500">{post.readTime}</span>
                          </div>
                        </div>
                      </GlassCard>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      {regularPosts.length > 0 && (
        <section className="relative py-12 px-6">
          <div className="max-w-4xl mx-auto">
            {featuredPosts.length > 0 && (
              <motion.div {...REVEAL_UP} className="mb-10">
                <SectionHeader
                  title="All"
                  titleAccent="Posts"
                  description="Every article from our engineering and strategy teams."
                  align="center"
                />
              </motion.div>
            )}

            <div className="space-y-4">
              {regularPosts.map((post, index) => {
                const catColor = categoryColors[post.category] ?? defaultCategoryColor;
                return (
                  <Link key={post.id} to={`/blog/${post.slug}`} className="block no-underline">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.06 }}
                      className="group relative flex gap-5 p-5 rounded-2xl border border-gray-200/30 dark:border-white/[0.04] bg-white/40 dark:bg-white/[0.02] backdrop-blur-sm hover:bg-white/70 dark:hover:bg-white/[0.05] hover:border-gray-300/50 dark:hover:border-white/10 transition-all duration-300"
                    >
                      {/* Left accent bar */}
                      <div
                        className="absolute left-0 top-0 h-full w-1 rounded-l-2xl"
                        style={{ background: `linear-gradient(180deg, ${catColor.text}, transparent)` }}
                      />

                      {/* Emoji */}
                      <div className="text-2xl shrink-0 mt-1">{post.image}</div>

                      {/* Content */}
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span
                            className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                            style={{ background: catColor.bg, color: catColor.text }}
                          >
                            {post.category}
                          </span>
                          <span className="text-xs text-gray-400 dark:text-gray-500">{post.date}</span>
                          <span className="text-xs text-gray-400 dark:text-gray-500">{post.readTime}</span>
                        </div>
                        <h3 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 mb-1.5">
                          {post.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-500 border border-gray-200/50 dark:border-white/5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="relative py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-gray-200/30 dark:border-white/10 p-10"
            style={{
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.06), rgba(59, 130, 246, 0.06))',
            }}
          >
            <div className="absolute -right-16 -top-16 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl" />
            <div className="absolute -left-12 -bottom-12 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />

            <div className="relative">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Stay Updated</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 max-w-lg mx-auto">
                Get notified about engineering insights, new case studies, and agency updates. No spam.
              </p>

              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Thanks for subscribing!
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    aria-label="Email address for newsletter"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-4 py-3 rounded-full bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/50 transition-all"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-sm font-semibold hover:from-indigo-500 hover:to-blue-400 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-indigo-500/25"
                  >
                    Subscribe
                  </button>
                </form>
              )}

              <p className="mt-4 text-xs text-gray-400 dark:text-gray-500">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Popular Topics */}
      <section className="relative pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">Popular Topics</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['React', 'AI', 'TypeScript', 'Performance', 'Web3', 'Architecture', 'DevOps', 'Design Systems'].map((topic) => (
              <span key={topic} className="px-4 py-2 text-sm rounded-full border border-gray-200/30 dark:border-white/10 text-gray-600 dark:text-gray-400 bg-white/40 dark:bg-white/5 hover:border-indigo-300 dark:hover:border-indigo-500/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all cursor-pointer">{topic}</span>
            ))}
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
