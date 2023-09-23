import React,{ useEffect } from 'react';
import s from './Works.modules.css';
import { motion, useAnimation } from 'framer-motion';


export const Works = () => {
    const controls = useAnimation();

    const worksAnimation = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
      };
    
      useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;
      
          if (scrollY >= windowHeight / 1.5) {
            controls.start('visible');
          } else {
            controls.start('hidden');
          }
        };
      
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [controls]);
      
  return (
    <motion.div  
    className="portfolio"
    initial='hidden'
  animate={controls}
  variants={worksAnimation}>
        <p className='title'>My Works</p>
        <div className='cards-works'>
        <div className='work'>
        <div class="card">
            <h2>Chat</h2>
                <hr />
            <p className='discription'>I created a real-time chat application using Node.js, Express.js, Socket.io, and React.js. This project demonstrates my expertise in building efficient and interactive web applications for instant online communication.</p>
            <div className='buttons'>
                <button className="bttn first-bttn" onClick={() => window.open("https://github.com/zakat404/chat", "_blank")}>GitHub</button>
                <button className="bttn second-bttn" onClick={() => window.open("", "_blank")}>Demo</button>
            </div>

            </div>
        </div>
        <div className='work'>
        <div class="card">
            <h2>Calculator</h2>
                <hr />
            <p className='discription'>Designed and developed a versatile calculator application using React.js, providing users with a robust tool for performing various mathematical calculations. <br /><br />
                
            </p>
            <div className='buttons'>
            <button className="bttn first-bttn" onClick={() => window.open("https://github.com/zakat404/calc", "_blank")}>GitHub</button>
            <button className="bttn second-bttn" onClick={() => window.open("https://chatwebsocket.vercel.app/", "_blank")}>Demo</button>
            </div>

            </div>
        </div>
        <div className='work'>
        <div class="card">
            <h2>ToDo List</h2>
                <hr />
            <p className='discription'>Created a responsive and intuitive Todo List application using React.js, offering users a seamless task management experience. <br /> <br /><br /></p>
            <div className='buttons'>
            <button className="bttn first-bttn" onClick={() => window.open("https://github.com/zakat404/ToDoList", "_blank")}>GitHub</button>
            <button className="bttn second-bttn" onClick={() => window.open("https://todolist-six-pi-88.vercel.app/", "_blank")}  >Demo</button>
            </div>

            </div>
        </div>
        <div className='work'>
        <div class="card">
            <h2>Portfolio</h2>
                <hr />
            <p className='discription'>Developed my personal portfolio website using React.js, incorporating the Typed.js library for dynamic text. <br /> <br /><br /></p>
            <div className='buttons'>
            <button className="bttn first-bttn" onClick={() => window.open("https://github.com/zakat404/myPortfolio", "_blank")}>GitHub</button>
            <button className="bttn second-bttn" onClick={() => window.open("https://my-portfolio-3sw22fibo-zakat404.vercel.app/", "_blank")}>Demo</button>
            </div>

            </div>
        </div>
        <div className='work'>
        <div class="card">
            <h2>Restaurant</h2>
                <hr />
            <p className='discription'>Designed a mouthwatering burger restaurant website using HTML and CSS, featuring an enticing menu and captivating visuals. <br /> <br /></p>
            <div className='buttons'>
            <button className="bttn first-bttn" onClick={() => window.open("https://github.com/zakat404/Restoran", "_blank")}>GitHub</button>
            <button className="bttn second-bttn" onClick={() => window.open("https://restoran-seven.vercel.app/", "_blank")}>Demo</button>
            </div>

            </div>
        </div>
        <div className='work'>
        <div class="card">
            <h2>Gallery</h2>
                <hr />
            <p className='discription'>Crafted an immersive gallery experience with HTML, CSS, and JavaScript, enriched by captivating parallax effects powered by GSAP. <br /> <br /></p>
            <div className='buttons'>
            <button className="bttn first-bttn" onClick={() => window.open("https://github.com/zakat404/ScrollEffect", "_blank")}>GitHub</button>
            <button className="bttn second-bttn " onClick={() => window.open("https://scroll-effect-beta.vercel.app/", "_blank")}>Demo</button>
            </div>

            </div>
        </div>
        <div className='work'>
        <div class="card">
            <h2>E-commerce</h2>
                <hr />
            <p className='discription'>Developed a sleek and responsive online e-commerce store using HTML and CSS, with a touch of JavaScript to enhance the user interface. <br /><br /><br /></p>
            <div className='buttons'>
            <button className="bttn first-bttn" onClick={() => window.open("https://github.com/zakat404/E-commerce", "_blank")}>GitHub</button>
            <button className="bttn second-bttn" onClick={() => window.open("https://e-commerce-neon-seven.vercel.app/index.html", "_blank")}>Demo</button>
            </div>

            </div>
        </div>
        </div>
        
    </motion.div>
  )
}
