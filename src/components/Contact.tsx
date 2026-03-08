import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white sm:text-4xl">
            Get In Touch
          </h2>
          <div className="mt-2 w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-center p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-emerald-100 dark:bg-emerald-900/30 p-4 rounded-full mr-6">
                <Mail className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1">Email</h3>
                <a href="mailto:nishuy421@gmail.com" className="text-zinc-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors">
                  nishuy421@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-emerald-100 dark:bg-emerald-900/30 p-4 rounded-full mr-6">
                <Linkedin className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/nishu-kumar-yadav-7b3384305" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors break-all">
                  linkedin.com/in/nishu-kumar-yadav-7b3384305
                </a>
              </div>
            </div>

            <div className="flex items-center p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
  <div className="bg-emerald-100 dark:bg-emerald-900/30 p-4 rounded-full mr-6">
    <Github className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
  </div>
  <div>
    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1">GitHub</h3>
    <a 
      href="https://github.com/nishuyadav421" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-zinc-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors"
    >
      github.com/nishuyadav421
    </a>
  </div>
</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm"
          >
            <form 
  className="space-y-6" 
  action="https://formspree.io/f/mgonvyar" 
  method="POST"
>
  <input type="hidden" name="_next" value="https://nishu-portfolio-nine.vercel.app/" />
  <div>
    <label htmlFor="name" className="...">Name</label>
    <input
      type="text"
      name="name" // DO NOT FORGET THIS
      required
      className="..."
      placeholder="Your Name"
    />
  </div>
  <div>
    <label htmlFor="email" className="...">Email</label>
    <input
      type="email"
      name="email" // DO NOT FORGET THIS
      required
      className="..."
      placeholder="your.email@example.com"
    />
  </div>
  <div>
    <label htmlFor="message" className="...">Message</label>
    <textarea
      name="message" // DO NOT FORGET THIS
      rows={4}
      required
      className="..."
      placeholder="Your message..."
    ></textarea>
  </div>
  <button type="submit" className="...">
    Send Message
  </button>
</form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
