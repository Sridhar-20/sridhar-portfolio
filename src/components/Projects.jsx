import { motion } from "framer-motion";

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>

        <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
          <h3>Employee Attrition Prediction</h3>
          <p>
            Machine learning system to predict employee attrition and provide
            retention strategies.
          </p>
          <span>Python • ML • Flask</span>
        </motion.div>

        <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
          <h3>StudentHub</h3>
          <p>
            Academic management system with authentication, courses, and results.
          </p>
          <span>Python • Tkinter • SQLite</span>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
