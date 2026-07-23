import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import {
  Monitor, Mic, Layers, Eye, Accessibility,
  Terminal, HelpCircle, Server, Zap, Heart
} from 'lucide-react';

const problems = [
  {
    id: 1,
    icon: Monitor,
    title: "Computing Is Still Interface-Driven",
    problem:
      "Despite AI progress, computers still depend on keyboards, mice, menus, and manual navigation — slowing human intent into action.",
    solution:
      "Aura removes the interface layer entirely. Speak naturally, and the system responds."
  },
  {
    id: 2,
    icon: Mic,
    title: "Voice Assistants Are Shallow by Design",
    problem:
      "Existing assistants can answer questions, but cannot control the OS, see the screen, or act inside real applications.",
    solution:
      "Aura operates inside the operating system, with deep native control — not as an external helper."
  },
  {
    id: 3,
    icon: Layers,
    title: "Context Switching Destroys Focus",
    problem:
      "Modern work requires constant app switching, searching, copying, and manual execution — breaking flow continuously.",
    solution:
      "Aura becomes a spoken operating layer. Open apps, edit files, and execute tasks without leaving your context."
  },
  {
    id: 4,
    icon: Eye,
    title: "Assistance Without Vision Is Blind",
    problem:
      "When users say “I’m stuck,” current tools lack screen awareness, application state, and real context.",
    solution:
      "Aura has real-time vision. It sees your screen and understands what you’re doing — not just what you say."
  },
  {
    id: 5,
    icon: Accessibility,
    title: "Accessibility Is Treated as Optional",
    problem:
      "Keyboards and mice remain mandatory, limiting access for hands-busy users and people with motor constraints.",
    solution:
      "Aura enables true hands-free computing, making voice a first-class input — not an afterthought."
  },
  {
    id: 6,
    icon: Terminal,
    title: "Automation Requires Technical Expertise",
    problem:
      "Automation today depends on scripts, CLI tools, configuration, and prior technical knowledge.",
    solution:
      "Aura turns automation into conversation. No scripts. No setup. Just intent."
  },
  {
    id: 7,
    icon: HelpCircle,
    title: "Help Systems React Too Late",
    problem:
      "Users are forced to Google errors, watch tutorials, and troubleshoot through trial and error.",
    solution:
      "Aura is a live companion. It sees where you’re stuck, guides you in real time, and acts immediately."
  },
  {
    id: 8,
    icon: Server,
    title: "There Is No Local AI OS Layer",
    problem:
      "Cloud copilots are app-specific, non-system-level, and disconnected from real actions.",
    solution:
      "Aura is a local AI operating layer — listening, seeing, reasoning, and acting directly on your machine."
  },
  {
    id: 9,
    icon: Zap,
    title: "Thought-to-Action Latency Is Too High",
    problem:
      "Execution today follows a slow loop: think → navigate → click → search → act.",
    solution:
      "Aura compresses this to: think → speak → done."
  },
  {
    id: 10,
    icon: Heart,
    title: "Tools Don’t Feel Like Companions",
    problem:
      "Most software feels mechanical, rigid, and transactional.",
    solution:
      "Aura is designed as a loyal, context-aware presence — not a command tool, but a partner."
  }
];

export const ProblemSolution = () => {
  const containerRef = useRef<HTMLElement>(null);
  useScroll({ target: containerRef });

  return (
    <section ref={containerRef} className="relative py-24 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-slate-900/40 via-black to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-6">
            The Problem Isn’t AI.  
            <span className="block text-primary mt-2">It’s the Interface.</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Aura exists to eliminate friction between human intent and machine execution.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="relative bg-slate-900/30 border border-white/5 rounded-2xl p-8 hover:bg-slate-900/50"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-slate-800/50 text-primary">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
              </div>

              <div className="space-y-6">
                <div className="pl-4 border-l border-slate-700">
                  <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">
                    System Limitation
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.problem}
                  </p>
                </div>

                <div className="pl-4 border-l-2 border-primary">
                  <p className="text-xs uppercase tracking-widest text-primary mb-1">
                    Aura Response
                  </p>
                  <p className="text-white text-sm font-semibold leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing */}
        <div className="text-center mt-32">
          <p className="text-3xl text-slate-400">
            We are not building another assistant.  
            <span className="block text-white font-medium mt-2">
              We are building the operating layer between humans and machines.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
