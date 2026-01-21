/**
 * SEO Utilities for FUTUNO
 * Handles dynamic meta tags, OpenGraph, and structured data
 */

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'blog';
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
}

/**
 * Update document meta tags dynamically
 */
export function updateMetaTags(config: SEOConfig) {
  // Update title
  document.title = config.title;
  
  // Update or create meta description
  let descMeta = document.querySelector('meta[name="description"]');
  if (!descMeta) {
    descMeta = document.createElement('meta');
    descMeta.setAttribute('name', 'description');
    document.head.appendChild(descMeta);
  }
  descMeta.setAttribute('content', config.description);
  
  // Update OpenGraph tags
  updateOGTag('og:title', config.title);
  updateOGTag('og:description', config.description);
  updateOGTag('og:type', config.type || 'website');
  if (config.image) updateOGTag('og:image', config.image);
  if (config.url) updateOGTag('og:url', config.url);
  
  // Update Twitter Card tags
  updateMetaTag('twitter:title', config.title);
  updateMetaTag('twitter:description', config.description);
  if (config.image) updateMetaTag('twitter:image', config.image);
  
  // Update article-specific tags
  if (config.type === 'article' || config.type === 'blog') {
    if (config.publishedDate) {
      updateMetaTag('article:published_time', config.publishedDate);
    }
    if (config.modifiedDate) {
      updateMetaTag('article:modified_time', config.modifiedDate);
    }
    if (config.author) {
      updateMetaTag('article:author', config.author);
    }
  }
}

/**
 * Update or create a meta tag
 */
function updateMetaTag(name: string, content: string) {
  let meta = document.querySelector(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', name);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
}

/**
 * Update or create an OpenGraph meta tag
 */
function updateOGTag(property: string, content: string) {
  let meta = document.querySelector(`meta[property="${property}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('property', property);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
}

/**
 * Generate structured data (Schema.org JSON-LD)
 */
export function generateStructuredData(type: 'Organization' | 'Article' | 'BlogPosting', data: any) {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  });
  document.head.appendChild(script);
}

/**
 * Generate article structured data
 */
export function generateArticleSchema(article: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  url: string;
}) {
  generateStructuredData('BlogPosting', {
    headline: article.headline,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    url: article.url,
  });
}

/**
 * Calculate reading time in minutes
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

/**
 * Generate SEO-friendly slug from title
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

/**
 * Generate breadcrumb structured data
 */
export function generateBreadcrumbs(items: Array<{ name: string; url: string }>) {
  generateStructuredData('Organization', {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  });
}
