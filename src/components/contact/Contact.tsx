import { FC, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import './contact.scss';
export const Contact: FC = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <div className="textBlock">
          <h1>Let`s work together</h1>

          <div className="mail">
            <span>
              <b>Mail</b> <br /> gostlix20201@gmail.com
            </span>
          </div>

          <div className="tg">
            <span>
              <b>Telegramm</b>
              <br /> @strrrrr1
            </span>
          </div>
        </div>
        <div className="form"></div>
      </div>
    </div>
  );
};
