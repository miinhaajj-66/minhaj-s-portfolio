import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Planora – Travel Planner',
    role: 'Full Stack Developer',
    description: 'A full-stack travel planning web application built using the MERN stack, designed to help users explore destinations, plan trips, and manage their travel experiences.',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js']
  }
];

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }
  };

  return (
    <section id="projects" className="py-32 bg-[#1a1a1a] text-white relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
            Projects <span className="text-[#ff2a2a]">&</span> Roles
          </h2>
          <div className="w-24 h-1 bg-[#ff2a2a] mx-auto mb-8"></div>
          
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-6 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#ff2a2a] animate-pulse"></span>
            <p className="text-white/70 font-mono text-xs tracking-widest uppercase">
              Click the headings to know more
            </p>
          </div>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, i) => (
            <motion.div 
              key={i} 
              variants={item}
              className="bg-black border border-white/10 rounded-2xl p-8 hover:border-[#ff2a2a]/50 transition-colors duration-300 group"
            >
              <div className="flex justify-between items-start mb-6">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-2xl font-bold uppercase tracking-wide hover:text-[#ff2a2a] transition-colors cursor-pointer block">
                    {project.title}
                  </a>
                ) : (
                  <h3 className="text-2xl font-bold uppercase tracking-wide group-hover:text-[#ff2a2a] transition-colors">
                    {project.title}
                  </h3>
                )}
                <span className="text-4xl font-black text-white/10 group-hover:text-white/20 transition-colors">0{i + 1}</span>
              </div>
              <p className="text-[#ffcccc] font-mono text-sm tracking-widest uppercase mb-4">
                {project.role}
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-white/80">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
