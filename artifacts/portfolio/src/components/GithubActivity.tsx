import { motion } from 'framer-motion';

export function GithubActivity() {
  const weeks = 20;
  const daysPerWeek = 7;
  const mockData = Array.from({ length: weeks * daysPerWeek }, () => Math.floor(Math.random() * 5));

  const getColor = (level: number) => {
    switch(level) {
      case 0: return 'bg-white/5';
      case 1: return 'bg-primary/20';
      case 2: return 'bg-primary/40';
      case 3: return 'bg-primary/70';
      case 4: return 'bg-primary';
      default: return 'bg-white/5';
    }
  };

  const stats = [
    { label: 'Total Repositories', value: '47' },
    { label: 'Total Commits (1yr)', value: '2,104' },
    { label: 'Pull Requests', value: '183' },
    { label: 'Issues Resolved', value: '89' }
  ];

  const langs = [
    { name: 'TypeScript', percent: '45%', color: 'bg-[#3178c6]' },
    { name: 'JavaScript', percent: '25%', color: 'bg-[#f7df1e]' },
    { name: 'Go', percent: '15%', color: 'bg-[#00add8]' },
    { name: 'HTML/CSS', percent: '15%', color: 'bg-[#e34c26]' }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
            <span className="text-primary font-mono text-sm tracking-widest uppercase">06.</span>
            Open Source Activity
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Heatmap Area */}
          <div className="lg:col-span-2 glass-panel p-8 rounded-2xl border-white/5">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-bold text-lg">Contribution Graph</h3>
              <span className="text-xs font-mono text-muted-foreground bg-black/40 px-3 py-1 rounded-full border border-white/5">Last {weeks} Weeks</span>
            </div>
            
            <div className="overflow-x-auto pb-4">
              <div className="min-w-[600px]">
                <div className="flex gap-1">
                  <div className="flex flex-col gap-1 pr-3 text-xs font-mono text-muted-foreground justify-between py-1">
                    <span>Mon</span>
                    <span>Wed</span>
                    <span>Fri</span>
                  </div>
                  
                  <div className="flex gap-[3px] flex-1">
                    {Array.from({ length: weeks }).map((_, weekIdx) => (
                      <div key={weekIdx} className="flex flex-col gap-[3px]">
                        {Array.from({ length: daysPerWeek }).map((_, dayIdx) => {
                          const level = mockData[weekIdx * daysPerWeek + dayIdx];
                          return (
                            <div 
                              key={dayIdx} 
                              className={`w-3.5 h-3.5 rounded-[3px] ${getColor(level)} transition-all duration-300 hover:ring-1 hover:ring-white hover:scale-125 hover:z-10`}
                              title={`${level * 3} contributions`}
                            />
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-end gap-2 mt-6 text-xs font-mono text-muted-foreground">
                  <span>Less</span>
                  <div className="flex gap-1">
                    <div className="w-3.5 h-3.5 rounded-[3px] bg-white/5" />
                    <div className="w-3.5 h-3.5 rounded-[3px] bg-primary/20" />
                    <div className="w-3.5 h-3.5 rounded-[3px] bg-primary/40" />
                    <div className="w-3.5 h-3.5 rounded-[3px] bg-primary/70" />
                    <div className="w-3.5 h-3.5 rounded-[3px] bg-primary" />
                  </div>
                  <span>More</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Side Panel */}
          <div className="space-y-6">
            <div className="glass-panel p-6 rounded-2xl border-white/5">
              <h3 className="font-bold text-sm mb-4 text-muted-foreground uppercase tracking-wider">GitHub Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="p-4 bg-black/30 rounded-xl border border-white/5">
                    <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-xs text-muted-foreground font-mono leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl border-white/5">
              <h3 className="font-bold text-sm mb-4 text-muted-foreground uppercase tracking-wider">Top Languages</h3>
              <div className="space-y-4">
                {langs.map((lang, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs font-mono mb-2">
                      <span>{lang.name}</span>
                      <span className="text-muted-foreground">{lang.percent}</span>
                    </div>
                    <div className="w-full h-1.5 bg-black/50 rounded-full overflow-hidden">
                      <div className={`h-full ${lang.color} rounded-full`} style={{ width: lang.percent }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
