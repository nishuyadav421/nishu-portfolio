import { motion } from 'motion/react';
import { ArrowRight, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 tracking-wide uppercase mb-3">
            Hello, I'm
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-4">
            Nishu Kumar Yadav
          </h1>
          <h3 className="text-2xl md:text-3xl font-medium text-zinc-600 dark:text-zinc-300 mb-6">
            Full Stack Java Developer
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-zinc-500 dark:text-zinc-400 mx-auto mb-10">
            Building scalable web applications using Java and modern web technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 transition-colors w-full sm:w-auto"
            >
              View Projects
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-zinc-300 dark:border-zinc-700 text-base font-medium rounded-xl text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors w-full sm:w-auto"
            >
              Contact Me
              <Mail className="ml-2 -mr-1 h-5 w-5" />
            </a>
            <a 
           href="/resume.pdf"
           target="_blank"
             rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-3 border border-zinc-300 rounded-xl"
             >
           Download Resume
           </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
