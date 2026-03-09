import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience({ data }: { data: any[] }) {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-16 flex items-center gap-4">
          <Briefcase className="text-blue-500" size={40} />
          Experience
        </h2>

        <div className="space-y-12">
          {data.map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline line for mobile */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 md:hidden"></div>
              <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-blue-500 md:hidden"></div>

              <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-6 md:p-10 hover:border-white/10 transition-colors group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{job.role}</h3>
                    <div className="text-xl text-blue-400 font-medium">{job.company}</div>
                  </div>
                  <div className="flex flex-col gap-2 text-slate-400 text-sm">
                    <div className="flex items-center gap-2 md:justify-end">
                      <Calendar size={16} />
                      <span>{job.dates}</span>
                    </div>
                    <div className="flex items-center gap-2 md:justify-end">
                      <MapPin size={16} />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-4">
                  {job.bullets.map((bullet: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500/50 shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
