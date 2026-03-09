import { motion } from 'motion/react';
import { GraduationCap, Award } from 'lucide-react';

export default function Education({ data, certifications }: { data: any[], certifications: string[] }) {
  return (
    <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-12 flex items-center gap-4">
            <GraduationCap className="text-blue-500" size={36} />
            Education
          </h2>

          <div className="space-y-8">
            {data.map((edu, index) => (
              <div key={index} className="relative pl-6 border-l border-white/10">
                <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-700 border-2 border-slate-950"></div>
                <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                <div className="text-blue-400 mb-2">{edu.institution}</div>
                <div className="text-slate-500 text-sm">{edu.dates}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-12 flex items-center gap-4">
            <Award className="text-blue-500" size={36} />
            Certifications
          </h2>

          <div className="bg-slate-900/30 backdrop-blur-sm border border-white/5 rounded-3xl p-8">
            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-300">
                  <Award size={18} className="text-blue-500/70" />
                  <span className="font-medium">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
