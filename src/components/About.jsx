import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-[#030712] bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:30px_30px] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-zinc-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container / Placeholder */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-zinc-950 border border-zinc-800 flex flex-col justify-center items-center p-6 text-center group">
                <svg className="w-16 h-16 text-zinc-700 group-hover:text-[#06b6d4] transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-650 mt-4 group-hover:text-[#06b6d4] transition-colors duration-300">
                  Add Photo Later
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-[#06b6d4] mb-4">Hello!</h2>
          <p className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-slate-300">
            Hi, my name is <span className="text-[#06b6d4] text-xl font-black mx-1 tracking-wide uppercase">VishwaMohan S N</span>, an AI/ML Engineering student with a passion for designing intelligent systems, deep learning architectures, and modern web applications. Currently in my 7th semester of Bachelor of Artificial Intelligence and Machine Learning at BNM Institute of Technology (CGPA: 8.94), I bridge AI research and real-world implementation. I specialize in building solutions ranging from healthcare AI diagnostics to smart IoT systems and interactive generative AI tools.
          </p>

          {/* Horizontal Skills Row (Transparent & Large SVG Logos) */}
          <div className="flex flex-wrap items-center gap-8 mt-8">
            {/* Python */}
            <div data-aos="zoom-in" data-aos-delay="300" className="group relative" title="Python">
              <svg className="w-16 h-16 md:w-20 md:h-20 text-white hover:scale-115 hover:text-black transition-all duration-300 cursor-pointer drop-shadow-2xl" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.933 0c-2.316.02-4.484.18-5.32.55-2.288 1.01-2.428 3.14-2.428 5.61v2.22h4.945v.69H2.176C.936 9.07 0 10.08 0 12.288c0 2.21.895 3.09 2.056 3.09h1.702v-2.352c0-2.618 2.074-4.84 4.882-4.84h4.743V4.492c0-2.378-1.992-4.225-4.444-4.48L11.933 0zM19.112 8.52c-.675 0-1.25.55-1.25 1.25s.575 1.25 1.25 1.25 1.25-.55 1.25-1.25-.575-1.25-1.25-1.25zM12.067 24c2.316-.02 4.484-.18 5.32-.55 2.288-1.01 2.428-3.14 2.428-5.61v-2.22h-4.945v-.69h6.964c1.24 0 2.176-1.01 2.176-3.218 0-2.21-.895-3.09-2.056-3.09h-1.702v2.352c0 2.618-2.074 4.84-4.882 4.84H10.59v3.714c0 2.378 1.992 4.225 4.444 4.48l1.033.058zM4.888 15.48c.675 0 1.25-.55 1.25-1.25s-.575-1.25-1.25-1.25-1.25.55-1.25 1.25.575 1.25 1.25 1.25z"/>
              </svg>
            </div>
            {/* PyTorch */}
            <div data-aos="zoom-in" data-aos-delay="400" className="group relative" title="PyTorch">
              <svg className="w-16 h-16 md:w-20 md:h-20 text-white hover:scale-115 hover:text-black transition-all duration-300 cursor-pointer drop-shadow-2xl" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L1.64 5.38v11.24L12 22l10.36-5.38V5.38L12 0zm0 2.48l7.84 4.07v8.43L12 19.06l-7.84-4.07V6.55L12 2.48z M12 6c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"/>
              </svg>
            </div>
            {/* TensorFlow */}
            <div data-aos="zoom-in" data-aos-delay="500" className="group relative" title="TensorFlow">
              <svg className="w-16 h-16 md:w-20 md:h-20 text-white hover:scale-115 hover:text-black transition-all duration-300 cursor-pointer drop-shadow-2xl" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm-1.5 21V12.6l-6-3.4V7.4l6 3.4V3.8l1.5-.9 1.5.9v7l6-3.4v1.8l-6 3.4V21l-1.5.9-1.5-.9z"/>
              </svg>
            </div>
            {/* OpenCV */}
            <div data-aos="zoom-in" data-aos-delay="600" className="group relative" title="OpenCV">
              <svg className="w-16 h-16 md:w-20 md:h-20 text-white hover:scale-115 hover:text-black transition-all duration-300 cursor-pointer drop-shadow-2xl" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 3c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 2c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
            </div>
            {/* FastAPI */}
            <div data-aos="zoom-in" data-aos-delay="700" className="group relative" title="FastAPI">
              <svg className="w-16 h-16 md:w-20 md:h-20 text-white hover:scale-115 hover:text-black transition-all duration-300 cursor-pointer drop-shadow-2xl" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 14h9v8l10-12h-9z"/>
              </svg>
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0a0a0a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-[#06b6d4] opacity-20 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-[#06b6d4] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
