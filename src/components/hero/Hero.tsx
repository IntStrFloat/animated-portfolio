import './hero.scss';
import { motion } from 'framer-motion';
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 1,
      repeat: Infinity,
    },
  },
};
const scrollVariants = {
  initial: { x: 0 },
  animate: {
    x: -4900,
    transition: {
      loop: Infinity,
      duration: 40,
    },
  },
};
export const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>DMITRY BEREZNEV</motion.h2>
          <motion.h1 variants={textVariants}>Web developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>Последние работы</motion.button>
            <motion.button variants={textVariants}>Связаться со мной</motion.button>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src="scroll.png" alt="" />
        </motion.div>
      </div>
      <motion.div
        className="slederTextContainer"
        variants={scrollVariants}
        initial="initial"
        animate="animate"
      >
        TypeScript React Next Redux
      </motion.div>
      <div className="imageContainer">
        <img src="/hero1.png" alt="" />
      </div>
    </div>
  );
};
