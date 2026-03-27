import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';

const mainProject = {
  title: "Online Student Management System",
  description: "A comprehensive cloud-based web application to manage student records, attendance, and grades. Features a secure admin authentication system and real-time MySQL database integration on Railway Cloud.",
  tech: ["Java", "Servlets", "JSP", "MySQL", "Railway Cloud"],
  github: "https://github.com/nishuyadav421/SchoolManagement",
  demo: "https://schoolmanagement-production-e9b4.up.railway.app/login.jsp"
};

const otherProjects = [
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
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white sm:text-4xl">
            My Projects
          </h2>
          <div className="mt-2 w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        {/* --- MAIN PROJECT (Separate Section) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-6 flex items-center">
            <span className="w-8 h-[2px] bg-emerald-500 mr-3"></span>
            Featured Project
          </h3>
          
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-xl flex flex-col lg:flex-row">
            {/* Project Content */}
            <div className="p-8 lg:p-12 flex-1">
              <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
                {mainProject.title}
              </h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                {mainProject.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-10">
                {mainProject.tech.map((tech) => (
                  <span key={tech} className="px-4 py-1.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-semibold">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href={mainProject.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl font-bold hover:scale-105 transition shadow-lg"
                >
                  <Github className="w-5 h-5 mr-2" />
                  Source Code
                </a>
                <a 
                  href={mainProject.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-emerald-500 text-white rounded-xl font-bold hover:scale-105 transition shadow-lg shadow-emerald-500/20"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- OTHER PROJECTS GRID --- */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Other Noteworthy Work</h2>
          <div className="mt-2 w-16 h-1 bg-zinc-400 mx-auto rounded-full opacity-30"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all flex flex-col h-full group"
            >
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-emerald-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
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
              
              <div className="px-6 py-4 bg-zinc-50 dark:bg-zinc-800/50 border-t border-zinc-100 dark:border-zinc-800 flex justify-between items-center">
                <a 
                  href={project.github} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm font-medium text-zinc-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
                <a 
                  href={project.demo} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm font-medium text-zinc-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}