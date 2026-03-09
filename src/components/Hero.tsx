import { motion } from 'motion/react';
import { ArrowDown, Download, Mail, MapPin, Linkedin } from 'lucide-react';

export default function Hero({ data }: { data: any }) {
  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-6xl mx-auto pt-20 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Available for new opportunities
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-4">
          {data.name}
        </h1>
        <h2 className="text-xl md:text-3xl text-slate-400 font-light tracking-tight mb-8 max-w-3xl leading-relaxed">
          {data.title}
        </h2>
        
        <p className="text-slate-300 text-lg md:text-xl max-w-3xl leading-relaxed mb-10">
          {data.summary}
        </p>

        <div className="flex flex-wrap items-center gap-6 mb-12 text-slate-400">
          <div className="flex items-center gap-2">
            <MapPin size={18} />
            <span>{data.location}</span>
          </div>
          <a href={`mailto:${data.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={18} />
            <span>{data.email}</span>
          </a>
          {data.links.map((link: any) => (
            <a key={link.name} href={`https://${link.url}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Linkedin size={18} />
              <span>{link.name}</span>
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={scrollToExperience}
            className="px-8 py-4 bg-white text-slate-950 rounded-full font-medium hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
          >
            View Experience
            <ArrowDown size={18} />
          </button>
          <button 
            onClick={() => window.print()}
            className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white border border-white/10 rounded-full font-medium hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
          >
            Download Resume
            <Download size={18} />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
