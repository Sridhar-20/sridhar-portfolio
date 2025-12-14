import { motion } from "framer-motion";

function Contact() {
  const contacts = [
    { label: "Email", value: "bhukyasridharbhukya@gmail.com" },
    { label: "GitHub", value: "github.com/Sridhar-20" },
    { label: "LinkedIn", value: "linkedin.com/in/bhukya-sridhar" }
  ];

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <h2>Contact</h2>
        {contacts.map((contact, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ x: 10, scale: 1.02 }}
            viewport={{ once: true }}
          >
            <strong>{contact.label}:</strong> {contact.value}
          </motion.p>
        ))}
      </div>
    </motion.section>
  );
}

export default Contact;