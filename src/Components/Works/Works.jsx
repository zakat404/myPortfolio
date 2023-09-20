import React from 'react';
import s from './Works.modules.css';


export const Works = () => {
  return (
    <div className="portfolio">
        <p className='title'>My Works</p>
        <div className='cards-works'>
        <div className='work'>
        <div class="card">
            <h2>Chat</h2>
                <hr />
            <p>I created a real-time chat application using Node.js, Express.js, Socket.io, and React.js. This project demonstrates my expertise in building efficient and interactive web applications for instant online communication.</p>
            <div className='buttons'>
                <button className="bttn first-bttn">GitHub</button>
                <button className="bttn second-bttn">Demo</button>
            </div>

            </div>
        </div>
        <div className='work'>
        <div class="card">
            <h2>Calculator</h2>
                <hr />
            <p>Designed and developed a versatile calculator application using React.js, providing users with a robust tool for performing various mathematical calculations. <br /><br />
                
            </p>
            <div className='buttons'>
            <button className="bttn first-bttn">GitHub</button>
            <button className="bttn second-bttn">Demo</button>
            </div>

            </div>
        </div>
        <div className='work'>
        <div class="card">
            <h2>ToDo List</h2>
                <hr />
            <p>Created a responsive and intuitive Todo List application using React.js, offering users a seamless task management experience. <br /> <br /><br /></p>
            <div className='buttons'>
            <button className="bttn first-bttn">GitHub</button>
            <button className="bttn second-bttn">Demo</button>
            </div>

            </div>
        </div>
        <div className='work'>
        <div class="card">
            <h2>Portfolio</h2>
                <hr />
            <p>Developed my personal portfolio website using React.js, incorporating the Typed.js library for dynamic text. <br /> <br /><br /></p>
            <div className='buttons'>
            <button className="bttn first-bttn">GitHub</button>
            <button className="bttn second-bttn">Demo</button>
            </div>

            </div>
        </div>
        <div className='work'>
        <div class="card">
            <h2>Restaurant</h2>
                <hr />
            <p>Designed a mouthwatering burger restaurant website using HTML and CSS, featuring an enticing menu and captivating visuals. <br /> <br /></p>
            <div className='buttons'>
            <button className="bttn first-bttn">GitHub</button>
            <button className="bttn second-bttn">Demo</button>
            </div>

            </div>
        </div>
        <div className='work'>
        <div class="card">
            <h2>Gallery</h2>
                <hr />
            <p>Crafted an immersive gallery experience with HTML, CSS, and JavaScript, enriched by captivating parallax effects powered by GSAP. <br /> <br /></p>
            <div className='buttons'>
            <button className="bttn first-bttn">GitHub</button>
            <button className="bttn second-bttn">Demo</button>
            </div>

            </div>
        </div>
        <div className='work'>
        <div class="card">
            <h2>E-commerce</h2>
                <hr />
            <p>Developed a sleek and responsive online e-commerce store using HTML and CSS, with a touch of JavaScript to enhance the user interface. <br /><br /><br /></p>
            <div className='buttons'>
            <button className="bttn first-bttn">GitHub</button>
            <button className="bttn second-bttn">Demo</button>
            </div>

            </div>
        </div>
        </div>
        
    </div>
  )
}
