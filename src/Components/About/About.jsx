import React from 'react';
import './About.modules.css';
import { motion } from 'framer-motion';


const textAnimation = {
  hiden : {
    x:  -100,
    opacity: 0,
  },
  visible: custom =>  ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2},
  }),
}

const About = () => {
  return (
    <motion.div
    initial="hiden"
    whileInView="visible"
    viewport={{amount: 0.2}}
    className='about-main'>
      <div className='about-element'>
        <motion.p variants={textAnimation } custom={1}>Front-end developer with a year of experience specializing in HTML, CSS, and JavaScript. Proficient with React, Next.js, and Socket.io. Passionate about creating intuitive and engaging user interfaces.</motion.p>
        <br />
        <motion.p viewport={{amount: 0.3}} variants={textAnimation } custom={2}>I possess good soft skills, communication, adaptability, problem-solving abilities, teamwork skills, creativity, and leadership. If you are looking for a young and ambitious frontend developer, I would be happy to join your team.</motion.p>
      </div>
    </motion.div>
  );
};

export default About;
