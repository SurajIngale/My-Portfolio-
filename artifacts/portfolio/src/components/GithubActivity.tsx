import { motion } from 'framer-motion';

export function GithubActivity() {
  // Generate mock commit data for a heatmap (last 14 weeks)
  const weeks = 14;
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

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <h3 className="text-2xl font-bold mb-8 font-mono">Commit Graph</h3>
        
        <div className="glass-panel p-8 rounded-2xl overflow-x-auto">
          <div className="min-w-[600px]">
            <div className="flex gap-1 mb-2 text-xs font-mono text-muted-foreground justify-between pr-4">
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
            
            <div className="flex gap-1">
              <div className="flex flex-col gap-1 pr-2 text-xs font-mono text-muted-foreground justify-between">
                <span>Mon</span>
                <span>Wed</span>
                <span>Fri</span>
              </div>
              
              <div className="flex gap-1 flex-1">
                {Array.from({ length: weeks }).map((_, weekIdx) => (
                  <div key={weekIdx} className="flex flex-col gap-1">
                    {Array.from({ length: daysPerWeek }).map((_, dayIdx) => {
                      const level = mockData[weekIdx * daysPerWeek + dayIdx];
                      return (
                        <div 
                          key={dayIdx} 
                          className={`w-3 h-3 rounded-[2px] ${getColor(level)} transition-colors duration-300 hover:ring-1 hover:ring-white`}
                          title={`${level * 3} contributions`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-end gap-2 mt-4 text-xs font-mono text-muted-foreground">
              <span>Less</span>
              <div className="w-3 h-3 rounded-[2px] bg-white/5" />
              <div className="w-3 h-3 rounded-[2px] bg-primary/20" />
              <div className="w-3 h-3 rounded-[2px] bg-primary/40" />
              <div className="w-3 h-3 rounded-[2px] bg-primary/70" />
              <div className="w-3 h-3 rounded-[2px] bg-primary" />
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
