import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { updateMetaTags } from '@/lib/seo';
import { 
  blogPosts, 
  getCategories, 
  searchPosts, 
  getPostsByCategory,
  getFeaturedPosts 
} from '@/lib/blog-data';
import { Search, Calendar, User, Tag } from 'lucide-react';

/**
 * Blog Page Component
 * Design: Organic Glassmorphism with grid layout, featured post hero, and search/filter
 */
export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
    updateMetaTags({
      title: 'FUTUNO Blog - AI Insights and Industry Trends',
      description: 'Explore latest articles on AI solutions, enterprise technology, and industry insights from FUTUNO experts.',
      keywords: ['Blog', 'AI', 'Technology', 'Insights'],
      type: 'website',
    });
  }, []);

  useEffect(() => {
    let results = blogPosts;

    if (searchQuery) {
      results = searchPosts(searchQuery);
    } else if (selectedCategory) {
      results = getPostsByCategory(selectedCategory);
    }

    setFilteredPosts(results);
  }, [searchQuery, selectedCategory]);

  const categories = getCategories();
  const featuredPost = getFeaturedPosts()[0];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            FUTUNO Blog
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Insights, trends, and best practices in AI and enterprise technology
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <Link href={`/blog/${featuredPost.slug}`}>
              <a className="block group">
                <div className="glass p-8 md:p-12 rounded-3xl shadow-lg hover-lift transition-all duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Featured Post Content */}
                    <div className="space-y-6">
                      <div className="inline-block">
                        <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold">
                          Featured
                        </span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground group-hover:text-accent transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-lg text-foreground/70">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-foreground/60">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {new Date(featuredPost.publishedDate).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center gap-2">
                          <span>📖 {featuredPost.readingTime} min read</span>
                        </div>
                      </div>
                      <Button className="bg-gradient-accent hover:shadow-lg text-white font-semibold px-6 py-2 rounded-full transition-all duration-300">
                        Read Article
                      </Button>
                    </div>

                    {/* Featured Post Image */}
                    <div className="hidden md:block">
                      <div className="w-full h-64 md:h-80 rounded-2xl bg-gradient-accent/20 flex items-center justify-center text-4xl">
                        📰
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </section>
      )}

      {/* Search and Filter Section */}
      <section className="py-12 md:py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground/40" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSelectedCategory(null);
                }}
                className="pl-12 py-3 text-lg rounded-full glass border-0"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => {
                  setSelectedCategory(null);
                  setSearchQuery('');
                }}
                variant={selectedCategory === null ? 'default' : 'outline'}
                className={`rounded-full ${
                  selectedCategory === null
                    ? 'bg-gradient-accent text-white'
                    : 'border-border/50'
                }`}
              >
                All Articles
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setSearchQuery('');
                  }}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  className={`rounded-full ${
                    selectedCategory === category
                      ? 'bg-gradient-accent text-white'
                      : 'border-border/50'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <a className="group">
                    <div className="glass p-6 rounded-2xl shadow hover-lift transition-all duration-300 h-full flex flex-col">
                      {/* Post Image */}
                      <div className="w-full h-48 rounded-xl bg-gradient-accent/20 flex items-center justify-center text-4xl mb-6 group-hover:scale-105 transition-transform duration-300">
                        📄
                      </div>

                      {/* Post Content */}
                      <div className="flex-1 space-y-4">
                        {/* Category Badge */}
                        <div>
                          <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                            {post.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-foreground/70 text-sm line-clamp-3">
                          {post.excerpt}
                        </p>

                        {/* Meta Information */}
                        <div className="space-y-3 pt-4 border-t border-border/50">
                          <div className="flex items-center gap-2 text-xs text-foreground/60">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.publishedDate).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-foreground/60">
                            <User className="w-4 h-4" />
                            {post.author}
                          </div>
                          <div className="text-xs text-foreground/60">
                            📖 {post.readingTime} min read
                          </div>
                        </div>

                        {/* Tags */}
                        {post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 pt-4">
                            {post.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center gap-1 px-2 py-1 bg-secondary rounded text-xs text-foreground/60"
                              >
                                <Tag className="w-3 h-3" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Read More Button */}
                      <Button
                        className="w-full mt-6 bg-gradient-accent hover:shadow-lg text-white font-semibold rounded-full transition-all duration-300"
                      >
                        Read Article
                      </Button>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-2xl font-semibold text-foreground mb-4">
                No articles found
              </p>
              <p className="text-foreground/60 mb-8">
                Try adjusting your search or filter criteria
              </p>
              <Button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory(null);
                }}
                className="bg-gradient-accent hover:shadow-lg text-white font-semibold px-6 py-2 rounded-full"
              >
                View All Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
