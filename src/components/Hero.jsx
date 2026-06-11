import { useRef, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { downloadResumeFromGit } from '../utils/resume';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class representing neural network nodes
    class Particle {
      constructor(width, height) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4; // slow drift
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2 + 1;
      }

      update(width, height) {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(6, 182, 212, 0.4)'; // glowing cyan
        ctx.fill();
      }
    }

    // Initialize particles
    const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas.width, canvas.height));
    }

    // Animation Loop
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(p => {
        p.update(canvas.width, canvas.height);
        p.draw();
      });

      // Draw lines between close particles (synaptic connections)
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Connect particles within a threshold
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.15; // fade out with distance
            ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black flex items-center">
      {/* Interactive Neural Network Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d405_1px,transparent_1px),linear-gradient(to_bottom,#06b6d405_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-1"></div>
      
      {/* Radial Gradient overlay for vignette depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.85))] pointer-events-none z-1"></div>

      {/* Content Container */}
      <div className="absolute inset-0 z-20 px-6 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col justify-end md:justify-center items-start text-left w-full">
        
        {/* Text and Buttons */}
        <div className="flex flex-col items-start text-left max-w-3xl w-full">
          {/* Tagline */}
          <div 
            data-aos="fade-up"
            className="inline-flex items-center gap-2 border border-cyan-500/30 rounded-full px-4 py-1.5 text-xs text-[#06b6d4] font-bold mb-6 bg-cyan-950/20 backdrop-blur-sm uppercase tracking-[0.15em] shadow-[0_0_15px_rgba(6,182,212,0.1)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
            AI/ML & Deep Learning
          </div>

          {/* Main Heading */}
          <h1 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-white text-4xl sm:text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.05]"
          >
            Hi, I’m <span className="whitespace-nowrap">VishwaMohan SN.</span> <br /> 
            <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.7)] md:[-webkit-text-stroke:1.5px_rgba(255,255,255,0.75)]">AI/ML Engineer</span>
          </h1>

          {/* Subheading */}
          <p 
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-slate-300 text-sm sm:text-base md:text-lg font-medium mb-10 max-w-xl leading-relaxed drop-shadow-md"
          >
            I build neural networks, computer vision tools, and voice agents that bridge advanced research with production-grade engineering.
          </p>

          {/* Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="500"
            className="flex flex-row flex-wrap items-center gap-4 w-full"
          >
            {/* Primary Button */}
            <a href="#projects" className="px-5 py-3 md:px-7 md:py-3 text-xs md:text-sm rounded-full bg-white text-black font-black hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg shadow-white/5 hover:shadow-cyan-400/20 inline-block text-center uppercase tracking-wider">
              View My Work
            </a>

            {/* Download Resume Button */}
            <button 
              onClick={downloadResumeFromGit}
              className="px-5 py-3 md:px-7 md:py-3 text-xs md:text-sm rounded-full bg-transparent border border-[#06b6d4] text-[#06b6d4] font-black hover:bg-[#06b6d4] hover:text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 transform hover:scale-105 inline-block text-center uppercase tracking-wider"
            >
              Download Resume
            </button>
            
            {/* Secondary Button - Contact */}
            <a href="#contact" className="px-5 py-3 md:px-7 md:py-3 text-xs md:text-sm rounded-full bg-black/40 border border-[#06b6d4]/40 text-white font-bold hover:bg-[#06b6d4]/20 hover:border-[#06b6d4]/80 transition-all duration-300 backdrop-blur-md inline-block text-center uppercase tracking-wider">
              Contact Me
            </a>
          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="700"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-[#06b6d4] opacity-50" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="3" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
