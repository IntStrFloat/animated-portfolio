import { motion } from 'framer-motion';
import './sidebar.scss';
import { ToggleButton } from './toggleButton/ToggleButton';
import { Link } from './link/Link';
import { useState } from 'react';
export const Sidebar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const variants = {
    open: {
      clipPath: 'circle(1200px at 50px 50px)',
      transition: { type: 'spring', stiffness: 20 },
    },
    closed: {
      clipPath: 'circle(30px at 50px 50px)',
      transition: { delay: 0.2, type: 'spring', stiffness: 400, damping: 40 },
    },
  };
  return (
    <motion.div className="sidebar" animate={isOpen ? 'open' : 'closed'} initial="closed">
      <motion.div className="menu" variants={variants}>
        <Link />
      </motion.div>
      <ToggleButton open={isOpen} setOpen={setIsOpen} />
    </motion.div>
  );
};
