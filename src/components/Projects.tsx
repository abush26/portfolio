import React from 'react';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: '🏀Team Web Application',
    description: 'Designed and developed a modern, responsive web application for the Ramanujan College basketball team.',
    image: 'image/demo.png/Screenshot 2024-04-27 003628.png',
    technologies: ['JavaScript', 'Tailwind css', 'MySQL'],
    github: 'https://github.com/abush26',
    
    color: 'from-blue-500 to-purple-500'
  },
  {
    title: 'Amharic sentiment analysis',
    description: 'Python-based tool for performing sentiment analysis on Amharic text.',
    image: 'image/demo.png/2.png',
    technologies: ['Python', 'Machine learning', 'Jupyter'],
    github: 'https://github.com/abush26',
    
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'AI Gym Trainer',
    description: 'Advanced AI-powered application that predicts body physique and muscle growth for fitness enthusiasts app',
    image: 'image/demo.png/Screenshot 2024-11-21 212324.png',
    technologies: ['Python', 'Machine Learning', 'React'],
    github: 'https://github.com/abush26',
    
    color: 'from-blue-500 to-purple-500'
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center animate-glow">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-dark-800/50 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-800/50 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="aspect-video relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br opacity-20"
                  style={{
                    background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                  }}
                />
                <motion.img 
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent opacity-80"></div>
                
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                  }}
                />
              </div>
              
              <div className="p-6 relative">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}
                />
                
                <motion.h3 
                  className="text-xl font-bold mb-2 text-white relative"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {project.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-400 mb-4 relative"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.description}
                </motion.p>
                
                <motion.div 
                  className="flex flex-wrap gap-2 mb-4 relative"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className={`px-3 py-1 bg-gradient-to-r ${project.color} bg-opacity-10 rounded-full text-sm text-white backdrop-blur-sm
                        border border-white/10 shadow-lg`}
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>
                
                <div className="flex gap-4 relative">
                  <motion.a 
                    href={project.github}
                    className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </motion.a>
                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;