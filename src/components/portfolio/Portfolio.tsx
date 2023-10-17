import { FC, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import './portfolio.scss';

const items = [
  {
    id: 1,
    title: 'Course comparison service',
    img: '/firstProject.jpg',
    href: 'https://next-project-lemon.vercel.app/',
    desc: 'lorem ipsum dolor sit amet, consectet ut labore et dolore magna  aliquet sed',
  },
  {
    id: 2,
    title: 'React web-site',
    img: '/mebelSite.jpg',
    href: 'https://next-project-lemon.vercel.app/',
    desc: 'lorem ipsum dolor sit amet, consectet ut labore et dolore magna  aliquet sed',
  },
  {
    id: 3,
    title: 'Course comparison service',
    img: '/people.webp',
    href: 'https://next-project-lemon.vercel.app/',
    desc: 'lorem ipsum dolor sit amet, consectet ut labore et dolore magna  aliquet sed',
  },
  {
    id: 4,
    title: 'Course comparison service',
    img: '/people.webp',
    href: 'https://next-project-lemon.vercel.app/',
    desc: 'lorem ipsum dolor sit amet, consectet ut labore et dolore magna  aliquet sed',
  },
];
interface Iitem {
  id: number;
  title: string;
  img: string;
  href: string;
  desc: string;
}
type serviceProps = {
  item: Iitem;
};
const Service: FC<serviceProps> = ({ item }) => {
  const ref = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const y = useTransform(scrollYProgress, [0, 1], [-400, 400]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>

          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.href}>See Demo</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Portfolio = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['end end', 'start start'] });
  const yProgress = useSpring(scrollYProgress, { stiffness: 1000, damping: 100 });

  return (
    <div ref={ref} className="portfolio">
      <div className="progress">
        <h1>Futured works</h1>
        <motion.div style={{ scaleX: yProgress }} className="progressBar"></motion.div>
      </div>
      {items.map((el, i) => (
        <Service item={el} key={i} />
      ))}
    </div>
  );
};
