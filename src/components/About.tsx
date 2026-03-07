import { motion } from 'motion/react';
import { User, Code, Database, Server } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white sm:text-4xl">
            About Me
          </h2>
          <div className="mt-2 w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
              I am a passionate and results-driven Full Stack Java Developer with strong foundational knowledge and hands-on internship experience in building responsive and scalable web applications.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
              I recently completed my B.Tech in Computer Science & Engineering and gained practical exposure during my 8-month Java Full Stack Internship at QSpiders / JSpiders, Noida, where I worked on both frontend and backend technologies.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
              I enjoy solving problems, writing clean and efficient code, and continuously improving my development skills. I am a fast learner, a strong team player, and someone who adapts quickly to new technologies and environments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { icon: <Code className="w-8 h-8 text-emerald-500" />, title: "Frontend", desc: "HTML, CSS, JS" },
              { icon: <Server className="w-8 h-8 text-emerald-500" />, title: "Backend", desc: "Java, Spring Boot" },
              { icon: <Database className="w-8 h-8 text-emerald-500" />, title: "Database", desc: "MySQL, JDBC" },
              { icon: <User className="w-8 h-8 text-emerald-500" />, title: "Problem Solving", desc: "DSA" },
            ].map((item, index) => (
              <div key={index} className="p-6 bg-zinc-50 dark:bg-zinc-800 rounded-2xl border border-zinc-100 dark:border-zinc-700 hover:shadow-md transition-shadow">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1">{item.title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
