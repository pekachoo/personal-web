import GitLogo from '/logos/github_logo.png';
import LILogo from '/logos/linkedin_logo.webp';
import { motion } from 'framer-motion';

export default function ContactComponent() {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
        staggerChildren: 0.15,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };
  return (
    <motion.section
      id="contact"
      className="max-w-3xl mx-auto px-6 py-16 rounded-2xl bg-white/40 backdrop-blur-md shadow-2xl mt-16 mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-4xl font-extrabold mb-10 text-center text-gray-900 drop-shadow-lg"
        variants={itemVariants}
      >
        Contact Me
      </motion.h2>
      <div className="flex flex-col md:flex-row justify-between gap-12 items-center">
        <div className="flex-1 space-y-8 text-center md:text-left">
          <motion.p className="text-lg" variants={itemVariants}>
            Feel free to{' '}
            <a href="mailto:liujason6162@gmail.com" className="text-blue-600 underline">
              email me at liujason6162@gmail.com
            </a>{' '}
            or connect on{' '}
            <a href="https://www.linkedin.com/in/jason-liu-646b30273/" className="text-blue-600 underline">
              LinkedIn
            </a>
            . I'm always open to chatting or working on something cool together!
          </motion.p>
          <motion.p className="text-lg font-semibold" variants={itemVariants}>
            Find me on:
          </motion.p>
          <motion.div className="flex justify-center md:justify-start space-x-12 mt-6" variants={itemVariants}>
            <motion.a
              href="https://github.com/pekachoo"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.12, boxShadow: '0 0 24px 4px #3b82f6' }}
              className="rounded-full transition-all"
            >
              <img
                src={GitLogo}
                alt="GitHub"
                className="w-20 h-20"
              />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/jason-liu-646b30273/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.12, boxShadow: '0 0 24px 4px #2563eb' }}
              className="rounded-full transition-all"
            >
              <img
                src={LILogo}
                alt="LinkedIn"
                className="w-20 h-20"
              />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
