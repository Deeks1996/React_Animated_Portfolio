import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

import pdf from '../pdf/Deeksha_Shetty_Resume.pdf';
import hero from './Data/hero.json';

const Home=()=>{
  const typedRef = useRef(null);

  useEffect(()=>{
    const options = {
      strings:["Welcome to my profile", "My name is Deeksha Shetty","I'm a Frontend Developer"],
      typeSpeed:50,
      backSpeed:50,
      loop:true
    }

    const typed = new Typed(typedRef.current,options)

    return()=>{
      typed.destroy()
    }
  },[]);

  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}>  </h1>
          <a href={pdf} download="Deeksha_Shetty_CV.pdf" className='btn btn-outline-warning my-3'> Download Resume </a>
        </div>

        <div className="right">
          <div className='img' data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/${hero.imgSrc}`} alt="hero"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
