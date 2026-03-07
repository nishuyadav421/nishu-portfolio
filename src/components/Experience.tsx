import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Full Stack Engineer",
    company: "QSpiders / JSpiders",
    location: "Noida, Uttar Pradesh",
    date: "May 2025 - feb 2026", // Adjusted based on 8 months internship
    description: [
      "Gained hands-on experience in Core Java, OOP concepts, and exception handling.",
      "Worked with JDBC, SQL, and basic database operations in MySQL.",
      "Developed front-end interfaces using HTML, CSS, and JavaScript.",
      "Followed best coding practices and improved problem-solving skills."
    ]
  },
  
  
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white sm:text-4xl">
            Experience
          </h2>
          <div className="mt-2 w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-3 md:ml-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-12 ml-8 md:ml-12 relative"
              >
                <div className="absolute -left-[41px] md:-left-[57px] top-1 h-8 w-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border-4 border-white dark:border-zinc-900 flex items-center justify-center">
                  <Briefcase className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                
                <div className="bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800/50 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{exp.role}</h3>
                      <p className="text-lg font-medium text-emerald-600 dark:text-emerald-400">{exp.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0 text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                      {exp.date} | {exp.location}
                    </div>
                  </div>
                  
                  <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-300">
                    {exp.description.map((item, i) => (
                      <li key={i} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
