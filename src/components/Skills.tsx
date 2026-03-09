import { motion } from 'motion/react';
import { Code2 } from 'lucide-react';

export default function Skills({ data }: { data: any[] }) {
  return (
    <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-16 flex items-center gap-4">
          <Code2 className="text-blue-500" size={40} />
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((group, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-slate-900/30 backdrop-blur-sm border border-white/5 rounded-3xl p-8"
            >
              <h3 className="text-xl font-semibold text-white mb-6">{group.category}</h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill: string, i: number) => (
                  <span 
                    key={i}
                    className="px-4 py-2 bg-slate-800/80 text-slate-200 rounded-full text-sm font-medium border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/10 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
