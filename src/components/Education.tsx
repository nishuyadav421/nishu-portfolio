import { motion } from 'motion/react';
import { GraduationCap, BookOpen } from 'lucide-react';

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Ramgovind Institute of Technology, Koderma",
    date: "August 2021 - September 2025",
    icon: <GraduationCap className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
  },
  {
    degree: "Class XII (Secondary Education)",
    institution: "VK, Jharkhand Academic Council",
    date: "Completed",
    icon: <BookOpen className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
  },
  {
    degree: "Class X (Secondary Education)",
    institution: "DAV Centenary Public School - India",
    date: "Completed",
    icon: <BookOpen className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white sm:text-4xl">
            Education
          </h2>
          <div className="mt-2 w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-100 dark:border-zinc-800 hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 mr-6 bg-white dark:bg-zinc-900 p-3 rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-800">
                {edu.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">
                  {edu.degree}
                </h3>
                <p className="text-lg font-medium text-emerald-600 dark:text-emerald-400 mb-2">
                  {edu.institution}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                  {edu.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
