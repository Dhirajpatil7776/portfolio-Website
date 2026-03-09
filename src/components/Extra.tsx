import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function Extra({ data }: { data: string[] }) {
  if (!data || data.length === 0) return null;

  return (
    <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-blue-900/20 to-slate-900/40 backdrop-blur-md border border-blue-500/10 rounded-3xl p-8 md:p-12 text-center"
      >
        <Sparkles className="text-blue-400 mx-auto mb-6" size={32} />
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Additional Information</h2>
        
        <div className="flex flex-col gap-4 items-center justify-center">
          {data.map((item, index) => (
            <p key={index} className="text-slate-300 max-w-2xl">
              {item}
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
