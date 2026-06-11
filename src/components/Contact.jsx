import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax translation for the big text
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  const contactLinks = [
    {
      label: "Email",
      value: "vishwamohansn@gmail.com",
      href: "mailto:vishwamohansn@gmail.com",
      icon: (
        <svg className="w-6 h-6 text-[#06b6d4]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      )
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/vishwamohan-s-n-b17a89316",
      href: "https://www.linkedin.com/in/vishwamohan-s-n-b17a89316",
      icon: (
        <svg className="w-6 h-6 text-[#06b6d4]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      label: "GitHub",
      value: "github.com/VishwaMohan7",
      href: "https://github.com/VishwaMohan7",
      icon: (
        <svg className="w-6 h-6 text-[#06b6d4]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      label: "Phone",
      value: "+91 7892831602",
      href: "tel:7892831602",
      icon: (
        <svg className="w-6 h-6 text-[#06b6d4]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a20.373 20.373 0 01-7.147-7.147c-.155-.441.011-.928.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      )
    }
  ];

  return (
    <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-[70vh] relative overflow-hidden flex items-center pt-32 pb-24 border-t border-zinc-900">
      
      {/* Huge Background Text */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
      >
        <h1 
          className="text-[25vw] leading-[0.75] font-black text-white/5 uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Grid Overlay */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center md:text-left">
          <div data-aos="fade-up" className="inline-block border border-zinc-800 rounded-full px-5 py-1.5 text-xs text-gray-400 font-bold mb-4 uppercase tracking-[0.2em] bg-black/40 backdrop-blur-md">
            Connect
          </div>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl md:text-5xl font-black text-white leading-none tracking-tight">
            Get In Touch
          </h2>
        </div>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {contactLinks.map((link, idx) => (
            <a 
              key={link.label}
              href={link.href}
              target={link.label !== "Phone" && link.label !== "Email" ? "_blank" : undefined}
              rel={link.label !== "Phone" && link.label !== "Email" ? "noopener noreferrer" : undefined}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="bg-zinc-950/60 border border-zinc-900 hover:border-cyan-500/30 p-8 rounded-[2rem] flex items-center gap-6 group transition-all duration-500 shadow-lg hover:shadow-cyan-950/10 backdrop-blur-md"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-inner group-hover:bg-[#06b6d4]/10 group-hover:border-[#06b6d4]/30 transition-all duration-500">
                {link.icon}
              </div>
              
              {/* Text info */}
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-cyan-400 transition-colors duration-300">
                  {link.label}
                </span>
                <p className="text-base sm:text-lg font-bold text-white mt-1 truncate group-hover:translate-x-1 transition-transform duration-300">
                  {link.value}
                </p>
              </div>

              {/* Arrow */}
              <svg className="w-5 h-5 text-zinc-700 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
