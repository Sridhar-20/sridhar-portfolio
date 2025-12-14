import { motion } from "framer-motion";

function Contact() {
  const contacts = [
    { 
      label: "Email", 
      value: "bhukyasridharbhukya@gmail.com",
      link: "mailto:bhukyasridharbhukya@gmail.com",
      icon: "📧"
    },
    { 
      label: "GitHub", 
      value: "github.com/Sridhar-20",
      link: "https://github.com/Sridhar-20",
      icon: "💻"
    },
    { 
      label: "LinkedIn", 
      value: "linkedin.com/in/bhukya-sridhar",
      link: "https://linkedin.com/in/bhukya-sridhar",
      icon: "💼"
    }
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
          <motion.a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ x: 10, scale: 1.02 }}
            viewport={{ once: true }}
            style={{
              display: 'block',
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            <p>
              <span style={{ marginRight: '10px', fontSize: '20px' }}>{contact.icon}</span>
              <strong>{contact.label}:</strong> {contact.value}
            </p>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}

export default Contact;