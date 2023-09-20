import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import './MainText.modules.css';

const TypingText = () => {
  const typedRef = useRef(null);
  const myNameRef = useRef(null);
 
  useEffect(() => {
    const sayMyNameOptions = {
      strings: ["I am Marius"],
      typeSpeed: 30,
      startDelay: 1000,
      backSpeed: 20,
      backDelay: 2000,
    };

    if (myNameRef.current) {
      const sayMyNameTyped = new Typed(myNameRef.current, sayMyNameOptions);
      return () => {
        sayMyNameTyped.destroy();
      };
    }
  }, []);

  useEffect(() => {
    const options = {
      strings: ["Front End Developer.", "Web Developer."],
      typeSpeed: 30,
      startDelay: 2000,
      backSpeed: 20,
      backDelay: 2000,
      loop: true,
    };

    if (typedRef.current) {
      const typed = new Typed(typedRef.current, options);
      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <div className='App'>
      <h1><span ref={myNameRef}></span></h1>
      <h4><span className='span1'id='444' ref={typedRef}></span></h4>
    </div>
  );
};

export default TypingText;
