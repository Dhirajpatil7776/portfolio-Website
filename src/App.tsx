/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Splash from './components/Splash';
import AnimatedBackground from './components/AnimatedBackground';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Extra from './components/Extra';
import resumeData from './data/resume.json';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-transparent text-slate-200 font-sans selection:bg-blue-500/30">
      <AnimatedBackground />
      
      <AnimatePresence>
        {showSplash && <Splash onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      {!showSplash && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10"
        >
          <Hero data={resumeData.basics} />
          <Experience data={resumeData.experience} />
          <Skills data={resumeData.skills} />
          <Education data={resumeData.education} certifications={resumeData.certifications} />
          <Extra data={resumeData.extra} />
          
          <footer className="py-8 text-center text-slate-500 text-sm border-t border-white/5 mt-24">
            <p>© {new Date().getFullYear()} {resumeData.basics.name}. All rights reserved.</p>
          </footer>
        </motion.main>
      )}
    </div>
  );
}
