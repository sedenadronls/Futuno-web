import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'wouter';
import { 
  Bot, 
  Zap, 
  BarChart3, 
  Settings, 
  Plus, 
  ArrowUpRight,
  Clock,
  CheckCircle2,
  AlertCircle,
  TrendingUp
} from 'lucide-react';

/**
 * User Dashboard - Automation Control Center
 * Landing page for logged-in users
 */
export default function Dashboard() {
  useEffect(() => {
    document.title = 'Dashboard - FUTUNO';
  }, []);

  const stats = [
    { label: 'Active Workflows', value: '12', icon: Bot, change: '+3 this week' },
    { label: 'Tasks Automated', value: '2,847', icon: Zap, change: '+156 today' },
    { label: 'Time Saved', value: '124h', icon: Clock, change: 'This month' },
    { label: 'Success Rate', value: '99.2%', icon: TrendingUp, change: '+0.5%' },
  ];

  const recentWorkflows = [
    { name: 'Lead Qualification Agent', status: 'active', runs: 234, lastRun: '2 min ago' },
    { name: 'Email Response Automation', status: 'active', runs: 1892, lastRun: '5 min ago' },
    { name: 'Data Enrichment Pipeline', status: 'paused', runs: 567, lastRun: '1 hour ago' },
    { name: 'Customer Support Bot', status: 'active', runs: 3421, lastRun: '1 min ago' },
  ];

  const quickActions = [
    { label: 'Create Workflow', icon: Plus, href: '#' },
    { label: 'View Analytics', icon: BarChart3, href: '#' },
    { label: 'Settings', icon: Settings, href: '#' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Welcome Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Automation Control Center
            </h1>
            <p className="text-muted-foreground">
              Welcome back! Here's an overview of your automation workflows.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="glass p-6 rounded-xl hover-lift">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground">{stat.change}</span>
                  </div>
                  <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Recent Workflows */}
            <div className="lg:col-span-2 glass p-6 rounded-xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-foreground">Recent Workflows</h2>
                <Button variant="ghost" className="text-primary hover:text-primary">
                  View All
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </Button>
              </div>

              <div className="space-y-4">
                {recentWorkflows.map((workflow, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        workflow.status === 'active' ? 'bg-green-500/20' : 'bg-yellow-500/20'
                      }`}>
                        {workflow.status === 'active' ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-yellow-500" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{workflow.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {workflow.runs.toLocaleString()} runs • Last run {workflow.lastRun}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                      <Settings className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-foreground mb-6">Quick Actions</h2>
              <div className="space-y-3">
                {quickActions.map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <button
                      key={index}
                      className="w-full flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-primary/10 hover:border-primary/30 border border-transparent transition-all group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium text-foreground">{action.label}</span>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                    </button>
                  );
                })}
              </div>

              {/* Upgrade CTA */}
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20">
                <h3 className="font-semibold text-foreground mb-2">Upgrade to Pro</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Unlock unlimited workflows and advanced features.
                </p>
                <Link href="/#pricing">
                  <Button className="w-full btn-primary">
                    View Plans
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Activity Chart Placeholder */}
          <div className="mt-8 glass p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-foreground mb-6">Automation Activity</h2>
            <div className="h-64 flex items-center justify-center border border-dashed border-border rounded-lg">
              <div className="text-center">
                <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground">Activity chart visualization</p>
                <p className="text-sm text-muted-foreground">Coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
