import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';

function App() {
  let [showContent, setShowContent] = useState(false);
  const mainRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    })
      .to(".vi-mask-group", {
        scale: 10,
        duration: 2,
        delay: -1.8,
        ease: "Expo.easeInOut",
        transformOrigin: "50% 50%",
        opacity: 0,
        onUpdate: function () {
          if (this.progress() >= 0.9) {
            const svg = document.querySelector(".svg");
            if (svg) svg.remove();
            setShowContent(true);
            this.kill();
          }
        }
      });
  }, []);

useGSAP(() => {
  if (!showContent) return;

  gsap.to(".main", {
    scale: 1,
    rotate: 0,
    duration: 2,
    delay: "-1", 
    ease: "Expo.easeInOut"
  });
  gsap.to(".sky", {
    scale: 1.2,
    rotate: 0,
    duration: 2,
    delay: "-.8",  
    ease: "Expo.easeInOut"
  });
   gsap.to(".bg", {
    scale: 1.1,
    rotate: 0,
    duration: 2,
    delay: "-.8",  
    ease: "Expo.easeInOut"
  });
  gsap.to(".girl", {
    scale: 0.8,
    x: "-50%",
    bottom: "-60%",
    rotate: 0,
    duration: 2,
    delay: "-.8",  
    ease: "Expo.easeInOut"
  });
    gsap.to(".text", {
    scale: 1,
    rotate: 0,
    duration: 2,
    delay: "-.8",  
    ease: "Expo.easeInOut"
  });
}, [showContent]); 

  useGSAP(()=> {
    const main = document.querySelector('.main');
    
    main?.addEventListener('mousemove', function(e){
       const xMove = ((e.clientX / window.innerWidth) - 0.5) * 40;
       gsap.to('.imagesdiv .text', {
         x: `${xMove * 0.4}%`,
       })
       gsap.to('.imagesdiv .sky', {
        x: xMove,
       })
       gsap.to('.imagesdiv .bg', {
        x: xMove * 1.7,
       })
    })
  }, [showContent]);
  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="../images/bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden no-scrollbar relative w-full h-screen bg-black ">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-7 px-7">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-15 h-2 bg-white"></div>
                  <div className="line w-8 h-2 bg-white"></div>
                  <div className="line w-5 h-2 bg-white"></div>
                </div>
                <h3 className="text-4xl -mt-[9px] leading-none text-white">Rockstar</h3>
              </div>
            </div>

            <div className="imagesdiv relative w-full h-screen overflow-hidden">
              <img className="sky absolute top-0 left-0 w-full h-full object-cover scale-[1.5] rotate-[-20deg]" src="../images/sky.png" alt="skies" />
              <img className="bg absolute top-0 left-0 w-full h-full object-cover scale-[1.8] rotate-[-3deg]" src="../images/bg.png" alt="background" />
              <div className="text absolute flex flex-col gap-2 top-15 left-1/2 -translate-x-1/2 text-white m-0 scale-[1.4] rotate-[-10deg]">
                <h1 className="text-8xl leading-none -ml-15">grand</h1>
                <h1 className="text-8xl leading-none ml-20">theft</h1>
                <h1 className="text-8xl leading-none -ml-15">auto</h1>
              </div>
              <img className="girl absolute -bottom-[150%] left-1/2 -translate-x-1/2 scale-[1.5] rotate-[-20deg]" src="../images/girlbg.png" alt="girl" />
            </div>

            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex items-center gap-4">
                <i className="text-xl ri-arrow-down-line"></i>
                <h3 className="font-[Helvetica_Now_Display]">Scroll Down</h3>
              </div>
              <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[40px]" src="../images/ps5.png" alt="" />
            </div>
          </div>
          <div className='w-full h-screen flex items-center justify-center bg-black overflow-hidden'>
             <div className='cntnr w-full h-[80%] flex text-white'>
               <div className='limg relative w-1/2 h-full'>
                <img className='absolute scale-[0.8] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="../images/imag.png" alt="" />
               </div>
             <div className='rg w-[30%] py-10'>
               <h1 className='text-6xl'>Still Running</h1>
               <h1 className='text-6xl'>Not Hunting</h1>
               <p className='mt-3 font-[Helvetica_Now_Display]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit illo autem eaque ipsam fugit repellat eveniet voluptatibus ducimus molestiae modi. Provident, amet a.</p>
               <p className='mt-3 font-[Helvetica_Now_Display]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet ipsum iure molestiae maxime.</p>
               <p className='mt-10 font-[Helvetica_Now_Display]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet ipsum iure molestiae maxime.</p>
               <button className='bg-yellow-500 p-5 text-2xl text-black mt-10 rounded'>Download Now</button>
             </div>
             </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

