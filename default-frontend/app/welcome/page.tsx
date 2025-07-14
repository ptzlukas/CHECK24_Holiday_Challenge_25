"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Lottie from "lottie-react";
import animationData from "@/public/Enjoy_Beach_Vacation.json"; 

import Image from "next/image";
import CheckLogo from "@/public/images/Check24_logo.png"; 
import WaveTransition from "@/app/components/WaveTransition/WaveTransition";


export default function WelcomePage() {
  const [started, setStarted] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [waveActive, setWaveActive] = useState(false);

  //  Catch Mousepotions
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  // Click anywhere
  useEffect(() => {
    const handleClick = () => {
      setStarted(true);
      setWaveActive(true); 
    };
  
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (

    <div className="relative w-screen h-screen overflow-hidden bg-white">
    {/* Custom Cursor Symbol */}
    {!started && (
      <motion.div
      className="fixed pointer-events-none z-50"
      animate={{
        x: cursorPos.x - 90,
        y: cursorPos.y - 90,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="relative w-[180px] h-[180px] flex items-center justify-center">
        {/* Dunkelblauer Hintergrund-Kreis */}
        <div className="absolute inset-0 rounded-full bg-orange-400 z-10"/>
    
        {/* Weißer Kreis-Text */}
        <svg className="absolute w-full h-full z-20" viewBox="0 0 180 180">
          <defs>
            <path
              id="circlePath"
              d="M90,90 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0"
            />
          </defs>
          <text fill="#ffffff" fontSize="18" fontWeight="bold">
            <textPath href="#circlePath" startOffset="0">
              Click  to  book  your  trip → Click  to  book  your  trip → 
            </textPath>
          </text>
        </svg>
    
        {/* Weißer Pfeil in der Mitte */}
        <div className="z-30 text-white text-6xl">
          →
        </div>
      </div>
    </motion.div>  
    )}
  {!waveActive && (
    <div className="relative h-screen w-screen overflow-hidden bg-zinc-100 font-black text-blue-950">
      {/* Topbar */}
      <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-30">
        <div className="flex items-center space-x-4">
          {/* Burger */}
          <button className="bg-white shadow-md rounded-xl h-14 w-14 flex items-center justify-center">
            <span className="text-xl">☰</span>
          </button>

          {/* Logo */}
          <div className="bg-white shadow-md rounded-xl h-14 px-6 flex items-center justify-center">
            <Image
              src={CheckLogo}
              alt="CHECK24"
              className="h-8 w-auto object-contain"
            />
          </div>
        </div>
        {/* Text Right */}
        <div className="bg-white shadow-md rounded-xl h-14 px-6 flex items-center justify-center">
          <span className="font-semibold">CHECK24 Holiday Challenge</span>
        </div>
      </div>

      
        {/* Headline */}
        <div className="absolute top-[15%] right-[8%] px-10 z-0" >
          <h1 className="text-7xl font-black text-blue-950 opacity-9 tracking-tight text-right">
            Secure your 2025 <br />Travel Plans today.
          </h1>
        </div>
        {/* Background Lottie Animation (unten) */}
        <div className="absolute bottom-0 left-0 right-0 h-[770px] overflow-hidden z-10">
          <div className="w-full scale-110 -translate-y-24">
            <Lottie
              animationData={animationData}
              loop
              autoplay
              className="w-full h-[900px] object-cover"
            />
          </div>
        </div>

      {/* Bottom-Left Text */}
      {/* <div className="absolute bottom-10 left-10 text-sm text-gray-700 z-20 max-w-sm leading-relaxed">
        <p>
          Explore Our 1,000 Hotels<br />
          With Great Flight Deals. Start<br />
          Your Journey Now And Find<br />
          Your Next Adventure.
        </p>
      </div> */}

    </div>
    )}
    {!started && (
      <motion.div
        className="fixed pointer-events-none z-50"
        animate={{
          x: cursorPos.x - 90,
          y: cursorPos.y - 90,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* dein Kreis mit Pfeil und Text */}
      </motion.div>
    )}

    <WaveTransition trigger={started} />

    </div>
  );
}
