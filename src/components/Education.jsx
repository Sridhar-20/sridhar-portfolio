import { motion } from "framer-motion";

function Education() {
  const education = [
    {
      degree: "B.Tech in Computer Science (CGPA: 8.4)",
      institution: "CVR College of Engineering, Hyderabad"
    },
    {
      degree: "Intermediate (90%)",
      institution: "Prathibha Junior College, Suryapet"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <h2>Education</h2>

        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.03, y: -5 }}
            viewport={{ once: true }}
          >
            <h4>{edu.degree}</h4>
            <p>{edu.institution}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Education;