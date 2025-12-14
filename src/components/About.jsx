import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <h2>About Me</h2>
        <p>
          I am a passionate software developer with a strong interest in
          machine learning and web development. I enjoy building intelligent
          systems and clean, responsive applications.
        </p>
      </div>
    </motion.section>
  );
}

export default About;
