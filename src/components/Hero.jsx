import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h1>Hi, I'm Sridhar Bhukya 👋</h1>
      <h3>Software Developer | Web & Machine Learning</h3>
      <p>
        I build intelligent systems and user-friendly web applications
        that solve real-world problems.
      </p>
      <a className="btn" href="/Sridhar_Bhukya.pdf" download="Sridhar_Bhukya.pdf">
        Download Resume
      </a>
    </motion.section>
  );
}

export default Hero;
