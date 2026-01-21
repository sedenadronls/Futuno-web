import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  blogPosts, 
  getCategories, 
  searchPosts, 
  getPostsByCategory,
  getFeaturedPosts,
  getAllPosts
} from '@/lib/blog-data';
import { Search, Calendar, User, Clock, ArrowRight } from 'lucide-react';

/**
 * Blog Page - Superhuman Dark Elegance
 * Grid-based layout for Automation Case Studies
 */
export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredPosts, setFilteredPosts] = useState(getAllPosts());

  useEffect(() => {
    document.title = 'Blog - FUTUNO AI Automation Insights';
  }, []);

  useEffect(() => {
    let results = getAllPosts();

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
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative">
          <div className="absolute inset-0 gradient-radial opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Automation Insights & Case Studies
              </h1>
              <p className="text-xl text-muted-foreground">
                Learn how leading companies are transforming their operations with AI automation
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="pb-12">
            <div className="container mx-auto px-4">
              <Link href={`/blog/${featuredPost.slug}`}>
                <div className="glass rounded-2xl overflow-hidden glow-border group cursor-pointer">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="aspect-video lg:aspect-auto relative overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-8xl opacity-50">📊</span>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <span className="text-primary text-sm font-medium mb-3">
                        {featuredPost.category}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-muted-foreground mb-6 line-clamp-3">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(featuredPost.publishedDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{featuredPost.readingTime} min read</span>
                        </div>
                      </div>
                      <Button className="w-fit btn-primary group/btn">
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Search and Filter */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setSelectedCategory(null);
                  }}
                  className="pl-10 bg-secondary border-border"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedCategory === null ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => {
                    setSelectedCategory(null);
                    setSearchQuery('');
                  }}
                  className={selectedCategory === null ? 'btn-primary' : 'text-muted-foreground hover:text-foreground'}
                >
                  All Articles
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => {
                      setSelectedCategory(category);
                      setSearchQuery('');
                    }}
                    className={selectedCategory === category ? 'btn-primary' : 'text-muted-foreground hover:text-foreground'}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-8 pb-20">
          <div className="container mx-auto px-4">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
                <Button
                  variant="ghost"
                  className="mt-4 text-primary"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory(null);
                  }}
                >
                  Clear filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <article className="glass rounded-xl overflow-hidden card-3d group cursor-pointer h-full flex flex-col">
                      <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-5xl opacity-50">📄</span>
                        </div>
                        <div className="absolute top-3 left-3">
                          <span className="px-2 py-1 rounded-full bg-secondary/80 backdrop-blur text-xs font-medium text-foreground">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/50">
                          <span>{post.author}</span>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.readingTime} min</span>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
