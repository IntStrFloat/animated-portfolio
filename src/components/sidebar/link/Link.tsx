import { motion } from 'framer-motion';
import './link.scss';
export const Link = (): JSX.Element => {
  const links: string[] = ['Homepage', 'Services', 'Portfolio1', 'Contact'];

  const variants = {
    open: {
      transition: { staggerChildren: 0.1 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };
  const itemVariants = {
    open: { y: 0, opacity: 1, transition: { duration: 0.8 } },
    closed: { y: 50, opacity: 0 },
  };

  return (
    <motion.div className="links" variants={variants}>
      {links.map((elem, index) => (
        <motion.a
          href={`#${elem}`}
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {elem}
        </motion.a>
      ))}
    </motion.div>
  );
};
