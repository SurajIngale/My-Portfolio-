import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { Presentation } from './sections/Presentation';
import { RobotShowcase } from './sections/RobotShowcase';
import { BootIntro } from './components/BootIntro';
import { FutureEnhancements } from './sections/FutureEnhancements';
import { BusinessModel } from './sections/BusinessModel';
import { TechnicalArchitecture } from './sections/TechnicalArchitecture';
import DemoVideo from './sections/DemoVideo';
import { TeamWork } from './sections/TeamWork';
import { useState } from 'react';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
      {showIntro && <BootIntro onComplete={() => setShowIntro(false)} />}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <RobotShowcase />
        <Presentation />
        <TechnicalArchitecture />
        <BusinessModel />
        <DemoVideo />
        <TeamWork />
        {/* <ProblemSolution /> */}
        <FutureEnhancements />
        {/* <Features /> */}
        {/* <HowItWorks /> */}
        {/* <Pricing /> */}
        {/* <Download /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
