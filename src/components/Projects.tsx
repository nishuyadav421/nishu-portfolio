import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Online Student Management System",
    description: "A comprehensive web application to manage student records, attendance, and grades. Built with a focus on cloud deployment and database integrity.",
    // Tags update kar diye hain jo aapne use kiye hain
    tech: ["Java", "Servlets", "JSP", "MySQL", "Railway Cloud"], 
    // Apna GitHub link yahan dalein
    github: "https://github.com/nishuyadav421/SchoolManagement", 
    // Apna Railway live link yahan dalein
    demo: "https://schoolmanagement-production-e9b4.up.railway.app/login.jsp"
  },
  {
    title: "E-commerce Web Application",
    description: "A full-stack e-commerce platform with product catalog, shopping cart, user authentication, and order processing capabilities.",
    tech: ["Java", "JDBC", "Servlets", "JSP", "MySQL"],
    github: "#",
    demo: "#"
  },
  {
    title: "REST API using Spring Boot",
    description: "A robust RESTful API service providing endpoints for user management and data processing, featuring JWT authentication and Swagger documentation.",
    tech: ["Spring Boot", "Spring Security", "Hibernate", "PostgreSQL"],
    github: "#",
    demo: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white sm:text-4xl">
            Featured Projects
          </h2>
          <div className="mt-2 w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-all flex flex-col h-full"
            >
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6 line-clamp-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              // Is block ko replace karein (Footer area of the card)
<div className="px-6 py-4 bg-zinc-50 dark:bg-zinc-800/50 border-t border-zinc-100 dark:border-zinc-800 flex justify-between items-center mt-auto">
  <a 
    href={project.github} 
    target="_blank" // Naya tab kholne ke liye
    rel="noopener noreferrer" // Security ke liye
    className="flex items-center text-sm font-medium text-zinc-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors"
  >
    <Github className="w-4 h-4 mr-2" />
    Code
  </a>
  <a 
    href={project.demo} 
    target="_blank" // Naya tab kholne ke liye
    rel="noopener noreferrer" // Security ke liye
    className="flex items-center text-sm font-medium text-zinc-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors"
  >
    <ExternalLink className="w-4 h-4 mr-2" />
    Live Demo
  </a>
</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
