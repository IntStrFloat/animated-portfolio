import { FC, useRef } from 'react';
import './contact.scss';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
export const Contact: FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const variants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm('service_baqvxul', 'template_r65qqp1', formRef.current!, '3nhcrOrwOyTEuYfJ7')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };
  return (
    <div className="contact">
      <motion.div className="wrapper" variants={variants} initial="initial" whileInView="animate">
        <motion.div className="textBlock" variants={variants}>
          <motion.h1 variants={variants}>Let`s work together</motion.h1>

          <motion.div className="mail" variants={variants}>
            <span>
              <b>Mail</b> <br /> gostlix20201@gmail.com
            </span>
          </motion.div>

          <motion.div className="tg" variants={variants}>
            <span>
              <b>Telegramm</b> <br /> @strrrrr1
            </span>
          </motion.div>
        </motion.div>
        <motion.div className="formBlock" variants={variants}>
          <form ref={formRef} onSubmit={sendEmail}>
            <motion.input variants={variants} type="text" name="name" placeholder="Name" required />
            <motion.input
              variants={variants}
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <motion.textarea
              variants={variants}
              name="text"
              rows={8}
              required
              placeholder="Message"
            />
            <motion.button variants={variants}>Submit</motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};
