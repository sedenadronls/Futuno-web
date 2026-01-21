import { useParams, Link } from 'wouter';
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { updateMetaTags, generateArticleSchema } from '@/lib/seo';
import { getPostBySlug, getRelatedPosts } from '@/lib/blog-data';
import { Calendar, User, Share2, ArrowLeft, Tag } from 'lucide-react';

/**
 * Blog Post Detail Page Component
 * Design: Organic Glassmorphism with breadcrumbs, social sharing, and related posts
 */
export default function BlogPost() {
  const params = useParams();
  const slug = params?.slug as string;
  const post = getPostBySlug(slug);

  useEffect(() => {
    if (post) {
      updateMetaTags({
        title: `${post.title} - FUTUNO Blog`,
        description: post.excerpt,
        type: 'article',
        author: post.author,
        publishedDate: post.publishedDate,
        modifiedDate: post.modifiedDate,
        keywords: post.tags,
      });

      generateArticleSchema({
        headline: post.title,
        description: post.excerpt,
        image: post.image,
        datePublished: post.publishedDate,
        dateModified: post.modifiedDate,
        author: post.author,
        url: `https://futuno.manus.space/blog/${post.slug}`,
      });
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
          <p className="text-foreground/70 mb-8">The article you're looking for doesn't exist.</p>
          <Link href="/blog">
            <a>
              <Button className="bg-gradient-accent hover:shadow-lg text-white font-semibold px-6 py-2 rounded-full">
                Back to Blog
              </Button>
            </a>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(post);

  const shareOnSocial = (platform: string) => {
    const url = `https://futuno.manus.space/blog/${post.slug}`;
    const text = `Check out: ${post.title}`;
    
    const shareUrls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumbs */}
      <section className="py-6 md:py-8 border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/blog">
              <a className="text-foreground/60 hover:text-foreground transition-colors">
                Blog
              </a>
            </Link>
            <span className="text-foreground/40">/</span>
            <Link href={`/blog?category=${post.category}`}>
              <a className="text-foreground/60 hover:text-foreground transition-colors">
                {post.category}
              </a>
            </Link>
            <span className="text-foreground/40">/</span>
            <span className="text-foreground font-semibold truncate">{post.title}</span>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6">
            {/* Back Button */}
            <Link href="/blog">
              <a className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </a>
            </Link>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap gap-6 text-foreground/70 border-b border-border/50 pb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.publishedDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📖 {post.readingTime} min read</span>
              </div>
            </div>

            {/* Social Sharing */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-foreground/60">Share:</span>
              <button
                onClick={() => shareOnSocial('twitter')}
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-accent/20 flex items-center justify-center text-foreground/70 hover:text-accent transition-all duration-300 hover-lift"
                aria-label="Share on Twitter"
              >
                𝕏
              </button>
              <button
                onClick={() => shareOnSocial('linkedin')}
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-accent/20 flex items-center justify-center text-foreground/70 hover:text-accent transition-all duration-300 hover-lift"
                aria-label="Share on LinkedIn"
              >
                in
              </button>
              <button
                onClick={() => shareOnSocial('facebook')}
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-accent/20 flex items-center justify-center text-foreground/70 hover:text-accent transition-all duration-300 hover-lift"
                aria-label="Share on Facebook"
              >
                f
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Image */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-full h-96 rounded-2xl bg-gradient-accent/20 flex items-center justify-center text-6xl">
            📰
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <article className="prose prose-lg max-w-none">
            <div className="space-y-8 text-foreground/80 leading-relaxed">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('#')) {
                  const level = paragraph.match(/^#+/)?.[0].length || 1;
                  const text = paragraph.replace(/^#+\s/, '');
                  const headingClass = {
                    1: 'text-4xl font-bold text-foreground mt-12 mb-6',
                    2: 'text-3xl font-bold text-foreground mt-10 mb-4',
                    3: 'text-2xl font-bold text-foreground mt-8 mb-3',
                  }[level] || 'text-xl font-bold text-foreground mt-6 mb-2';
                  
                  return (
                    <h2 key={index} className={headingClass}>
                      {text}
                    </h2>
                  );
                }
                return (
                  <p key={index} className="text-lg leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </article>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border/50">
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag}`}>
                    <a className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-foreground/70 hover:text-accent transition-colors">
                      <Tag className="w-4 h-4" />
                      {tag}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
              Related Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <a className="group">
                    <div className="glass p-6 rounded-2xl shadow hover-lift transition-all duration-300 h-full flex flex-col">
                      <div className="w-full h-40 rounded-xl bg-gradient-accent/20 flex items-center justify-center text-3xl mb-4">
                        📄
                      </div>

                      <div className="flex-1 space-y-3">
                        <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                          {relatedPost.category}
                        </span>
                        <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-foreground/70 text-sm line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>

                      <div className="text-xs text-foreground/60 mt-4 pt-4 border-t border-border/50">
                        {new Date(relatedPost.publishedDate).toLocaleDateString()} • {relatedPost.readingTime} min
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Interested in Our Services?
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Let's discuss how FUTUNO can help transform your business with AI solutions.
          </p>
          <Link href="/contact">
            <a>
              <Button className="bg-gradient-accent hover:shadow-lg text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 text-lg">
                Get in Touch
              </Button>
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
