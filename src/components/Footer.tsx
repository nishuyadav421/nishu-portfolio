import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-xl font-bold text-zinc-900 dark:text-white">Nishu Kumar Yadav</span>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
              Full Stack Java Developer
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="mailto:nishuy421@gmail.com" className="text-zinc-400 hover:text-emerald-500 transition-colors">
              <span className="sr-only">Email</span>
              <Mail className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/nishu-kumar-yadav-7b3384305" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-emerald-500 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com/nishuyadav421" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-emerald-500 transition-colors">
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            &copy; {new Date().getFullYear()} Nishu Kumar Yadav. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
