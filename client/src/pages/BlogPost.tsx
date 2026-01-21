import { useParams, Link } from 'wouter';
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { getPostBySlug, getRelatedPosts } from '@/lib/blog-data';
import { Calendar, User, Share2, ArrowLeft, Clock, ChevronRight, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Streamdown } from 'streamdown';

/**
 * Blog Post Detail Page - Superhuman Dark Elegance
 * SEO-optimized with breadcrumbs, social sharing, and related posts
 */
export default function BlogPost() {
  const params = useParams();
  const slug = params?.slug as string;
  const post = getPostBySlug(slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} - FUTUNO Blog`;
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
            <Link href="/blog">
              <Button className="btn-primary">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(post);
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = post.title;

  const handleShare = (platform: string) => {
    const urls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    };
    window.open(urls[platform], '_blank', 'width=600,height=400');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Breadcrumbs */}
        <section className="py-6 border-b border-border/50">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/">
                <span className="hover:text-foreground cursor-pointer">Home</span>
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/blog">
                <span className="hover:text-foreground cursor-pointer">Blog</span>
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground truncate max-w-xs">{post.title}</span>
            </nav>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.publishedDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readingTime} min read</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {/* Featured Image Placeholder */}
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 mb-12 flex items-center justify-center">
                <span className="text-8xl opacity-50">📊</span>
              </div>

              {/* Content */}
              <article className="prose prose-invert prose-lg max-w-none">
                <Streamdown>{post.content}</Streamdown>
              </article>

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-border/50">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-secondary text-sm text-muted-foreground"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Social Sharing */}
              <div className="mt-8 pt-8 border-t border-border/50">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Share2 className="w-5 h-5" />
                    <span className="font-medium">Share this article</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare('twitter')}
                      className="btn-secondary"
                    >
                      <Twitter className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare('linkedin')}
                      className="btn-secondary"
                    >
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare('facebook')}
                      className="btn-secondary"
                    >
                      <Facebook className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 border-t border-border/50">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                    <article className="glass rounded-xl overflow-hidden card-3d group cursor-pointer h-full flex flex-col">
                      <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-4xl opacity-50">📄</span>
                        </div>
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <span className="text-xs text-primary font-medium mb-2">
                          {relatedPost.category}
                        </span>
                        <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2 flex-1">
                          {relatedPost.title}
                        </h3>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>{relatedPost.readingTime} min read</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="glass p-8 md:p-12 rounded-2xl text-center max-w-2xl mx-auto glow-border">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Automate Your Business?
              </h2>
              <p className="text-muted-foreground mb-6">
                See how FUTUNO can transform your operations with AI automation.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <Button className="btn-primary">
                    Book a Demo
                  </Button>
                </Link>
                <Link href="/blog">
                  <Button variant="outline" className="btn-secondary">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Blog
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
