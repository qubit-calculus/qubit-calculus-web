/**
 * SEO Component — Centralized per-page meta tag management
 *
 * Provides consistent Open Graph, Twitter Card, standard meta tags,
 * and JSON-LD structured data across all pages.
 * Built on react-helmet-async for SSR compatibility.
 */

import { Helmet } from 'react-helmet-async';
import { LANDING_URL } from '@/constants';

interface SEOProps {
  /** Page title — appended with " | Qubit Calculus" suffix */
  title?: string;
  /** Meta description (max ~160 chars recommended) */
  description?: string;
  /** Canonical path, e.g. "/about" (domain is prepended automatically) */
  path?: string;
  /** og:type — defaults to "website" */
  type?: string;
  /** og:image URL — defaults to the site-wide OG image */
  image?: string;
  /** og:image alt text */
  imageAlt?: string;
  /** Prevents indexing when true */
  noindex?: boolean;
  /** Additional structured data (JSON-LD) — can be a single object or array */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  /** Page-specific keywords (appended to defaults) */
  keywords?: string;
  /** Article publish date (for blog posts) */
  publishedTime?: string;
  /** Article modified date */
  modifiedTime?: string;
  /** Article author */
  author?: string;
}

const DEFAULTS = {
  title: 'Qubit Calculus — We Build Software That Drives Growth',
  description:
    'Custom software development agency specializing in React, Next.js, and AI-powered applications. MVP in 4-6 weeks. Fixed pricing. 98% on-time delivery.',
  image: `${LANDING_URL}/og-image.png`,
  imageAlt: 'Qubit Calculus — Custom Software Development Agency',
  keywords:
    'software development agency, custom web applications, React development, Next.js, TypeScript, MVP development, AI applications, mobile app development, UI/UX design, full-stack development',
} as const;

export default function SEO({
  title,
  description = DEFAULTS.description,
  path = '',
  type = 'website',
  image = DEFAULTS.image,
  imageAlt = DEFAULTS.imageAlt,
  noindex = false,
  jsonLd,
  keywords,
  publishedTime,
  modifiedTime,
  author,
}: SEOProps) {
  const fullTitle = title ? `${title} | Qubit Calculus` : DEFAULTS.title;
  const canonicalUrl = `${LANDING_URL}${path}`;
  const fullKeywords = keywords
    ? `${keywords}, ${DEFAULTS.keywords}`
    : DEFAULTS.keywords;

  // Normalize jsonLd to array
  const jsonLdItems = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={fullKeywords} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:site_name" content="Qubit Calculus" />
      <meta property="og:locale" content="en_US" />

      {/* Article-specific OG tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@qubitcalculus" />
      <meta name="twitter:creator" content="@qubitcalculus" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {/* JSON-LD Structured Data */}
      {jsonLdItems.map((item, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
}

// ─── Reusable JSON-LD Schema Builders ───────────────────────────────────────

/** BreadcrumbList schema for any page */
export function breadcrumbJsonLd(items: { name: string; path: string }[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${LANDING_URL}${item.path}`,
    })),
  };
}

/** Service schema */
export function serviceJsonLd(service: {
  name: string;
  description: string;
  url: string;
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    name: service.name,
    description: service.description,
    url: `${LANDING_URL}${service.url}`,
    provider: {
      '@type': 'Organization',
      name: 'Qubit Calculus',
      url: LANDING_URL,
    },
    areaServed: 'Worldwide',
  };
}

/** FAQPage schema — generates Google rich results */
export function faqJsonLd(
  faqs: { question: string; answer: string }[]
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/** BlogPosting / Article schema */
export function articleJsonLd(article: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    url: `${LANDING_URL}${article.path}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    image: article.image || `${LANDING_URL}/og-image.png`,
    author: {
      '@type': 'Organization',
      name: article.author || 'Qubit Calculus',
      url: LANDING_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Qubit Calculus',
      url: LANDING_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${LANDING_URL}/og-image.png`,
      },
    },
  };
}
