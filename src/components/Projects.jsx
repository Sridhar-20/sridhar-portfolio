import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Employee Attrition Prediction",
      description: "Machine learning system to predict employee attrition and provide retention strategies.",
      tech: "Python • ML • Flask"
    },
    {
      title: "StudentHub",
      description: "Academic management system with authentication, courses, and results.",
      tech: "Python • Tkinter • SQLite"
    }
  ];

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <h2>Projects</h2>

        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 60px rgba(99, 102, 241, 0.4)"
            }}
            viewport={{ once: true }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span>{project.tech}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;