import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const particles = Array.from({ length: 9 }, (_, i) => (
  <div
    key={i}
    className="absolute w-1 h-1 bg-gray-300 rounded-full animate-float"
    style={{ left: `${10 + i * 10}%`, animationDelay: `${i * 2}s` }}
  />
));

const Hero = () => {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to bottom right, #1e293b, #94a3b8)' }} id="home">
      <div style={{ textAlign: 'center', zIndex: 10, maxWidth: 600, padding: '16px', position: 'relative' }} className="w-full px-4 md:px-8">
        <motion.div
          style={{
            position: 'absolute',
            top: -120,
            left: '40%',
            transform: 'translateX(-50%)',
            width: 100,
            height: 120,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.3))',
          }}
          className="hidden md:block"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 1, -1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div
            style={{
              width: 70,
              height: 70,
              borderRadius: '50%',
              background: 'radial-gradient(circle at 30% 30%, #f8fafc, #e2e8f0, #cbd5e1)',
              position: 'relative',
              marginBottom: -10,
              border: '3px solid #1f2937',
              boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.2)',
            }}
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div
              style={{
                position: 'absolute',
                top: -8,
                left: 8,
                width: 20,
                height: 20,
                borderRadius: '50%',
                background: 'radial-gradient(circle at 30% 30%, #374151, #1f2937)',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.2)',
              }}
            />
            <motion.div
              style={{
                position: 'absolute',
                top: -8,
                right: 8,
                width: 20,
                height: 20,
                borderRadius: '50%',
                background: 'radial-gradient(circle at 30% 30%, #374151, #1f2937)',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.2)',
              }}
            />
            <motion.div
              style={{
                position: 'absolute',
                top: 20,
                left: 15,
                width: 18,
                height: 18,
                borderRadius: '50%',
                background: 'radial-gradient(circle at 30% 30%, #374151, #1f2937)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.2)',
              }}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div style={{ 
                width: 6, 
                height: 6, 
                borderRadius: '50%', 
                background: 'radial-gradient(circle at 30% 30%, #ffffff, #f1f5f9)',
                boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)'
              }} />
            </motion.div>
            <motion.div
              style={{
                position: 'absolute',
                top: 20,
                right: 15,
                width: 18,
                height: 18,
                borderRadius: '50%',
                background: 'radial-gradient(circle at 30% 30%, #374151, #1f2937)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.2)',
              }}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <div style={{ 
                width: 6, 
                height: 6, 
                borderRadius: '50%', 
                background: 'radial-gradient(circle at 30% 30%, #ffffff, #f1f5f9)',
                boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)'
              }} />
            </motion.div>
            <motion.div
              style={{
                position: 'absolute',
                top: 40,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 8,
                height: 6,
                borderRadius: '50%',
                background: 'radial-gradient(circle at 30% 30%, #374151, #1f2937)',
                boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.3)',
              }}
            />
          </motion.div>
          <motion.div
            style={{
              width: 80,
              height: 90,
              borderRadius: '40px 40px 25px 25px',
              background: 'radial-gradient(circle at 30% 30%, #f8fafc, #e2e8f0, #cbd5e1)',
              position: 'relative',
              border: '3px solid #1f2937',
              boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.2)',
            }}
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <motion.div
              style={{
                position: 'absolute',
                left: -12,
                top: 25,
                width: 25,
                height: 35,
                borderRadius: '12px',
                background: 'radial-gradient(circle at 30% 30%, #374151, #1f2937)',
                transform: 'rotate(-15deg)',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.2)',
              }}
              animate={{
                rotate: [-15, -10, -15],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              style={{
                position: 'absolute',
                right: -12,
                top: 25,
                width: 25,
                height: 35,
                borderRadius: '12px',
                background: 'radial-gradient(circle at 30% 30%, #374151, #1f2937)',
                transform: 'rotate(15deg)',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.2)',
              }}
              animate={{
                rotate: [15, 10, 15],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
          </motion.div>
          <motion.div
            style={{
              display: 'flex',
              gap: 10,
              marginTop: -5,
            }}
          >
            <motion.div
              style={{
                width: 15,
                height: 12,
                borderRadius: '8px',
                background: 'radial-gradient(circle at 30% 30%, #374151, #1f2937)',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.2)',
              }}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              style={{
                width: 15,
                height: 12,
                borderRadius: '8px',
                background: 'radial-gradient(circle at 30% 30%, #374151, #1f2937)',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.2)',
              }}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
          </motion.div>
        </motion.div>
        
        <h1 style={{ color: '#fff', fontSize: 'clamp(2rem, 8vw, 4rem)', fontWeight: 700, fontFamily: 'Poppins, Nunito, Quicksand, Arial, sans-serif', letterSpacing: 1 }} className="mb-4">
          I am
          <Typewriter
            options={{
              strings: [' Souptik Sinha', ' a Full Stack Developer'],
              autoStart: true,
              loop: true,
              delay: 100,
              deleteSpeed: 50,
              pauseFor: 2000,
            }}
          />
        </h1>
        <p style={{ color: '#e2e8f0', fontSize: 'clamp(1rem, 4vw, 1.125rem)', marginBottom: 32 }} className="mb-8 px-4">
        Bringing visions to life with elegant code and innovative design.
        </p>
        <a href="#projects" style={{ display: 'inline-block', padding: '12px 32px', background: 'linear-gradient(to right, #cbd5e1, #64748b)', color: '#1e293b', fontWeight: 700, borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.12)', textDecoration: 'none', fontSize: 'clamp(1rem, 3vw, 1.125rem)' }} className="hover:scale-105 transition-transform">View My Work</a>
      </div>
      {particles}
    </section>
  );
};

export default Hero; 