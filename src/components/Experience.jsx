import React from 'react';
import { motion } from 'framer-motion';

const experienceData = [
  {
    title: "Equvinoxis Pvt Ltd",
    period: "June 2025 – July 2025",
    tag: "AI/ML Intern",
    icon: (
      <svg className="w-6 h-6 text-[#06b6d4]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    details: [
      "Analyzed and implemented an AI-based Early Osteoporosis Detection System using X-ray image analysis.",
      "Leveraged CNN Architectures (YOLOv8, VGG16) on Google Cloud Vertex AI to enable real-time predictions.",
      "Optimized model inference speed and response latency for clinical screening pipelines.",
      "Developed full-stack web panels and administrative dashboards using React, FastAPI, Flask, Firebase, and MySQL."
    ]
  },
  {
    title: "Research & Innovation",
    period: "April 2025 – Ongoing",
    tag: "Scientific Development",
    icon: (
      <svg className="w-6 h-6 text-[#06b6d4]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75c0 .414-.168.75-.5.75s-.5-.336-.5-.75.168-.75.5-.75.5.336.5.75zM14.25 9.75c0 .414-.168.75-.5.75s-.5-.336-.5-.75.168-.75.5-.75.5.336.5.75z" />
      </svg>
    ),
    details: [
      "Designed and developed COLDWATCH—an intelligent biomedical logistics monitoring system integrating hardware and software frameworks.",
      "Integrated ESP32 microcontrollers, environmental sensors, real-time GSM alerts, and thermoelectric cooling loops.",
      "Designed webcam-based gaze estimation eye-tracking frameworks supporting cursor calibration on consumer hardware."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="bg-[#0f0f0f] pt-28 pb-32 px-6 md:px-12 w-full relative overflow-hidden border-t border-zinc-900">
      
      {/* Dynamic Cyber Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d403_1px,transparent_1px),linear-gradient(to_bottom,#06b6d403_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none z-0"></div>
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full filter blur-[150px] pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-20 text-center md:text-left">
          <div data-aos="fade-up" className="inline-block border border-zinc-800 rounded-full px-5 py-1.5 text-xs text-gray-400 font-bold mb-4 uppercase tracking-[0.2em] shadow-sm bg-black/40 backdrop-blur-md">
            Timeline
          </div>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            Experience
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-gray-400 text-sm md:text-base max-w-xl font-medium leading-relaxed">
            Practical application of machine learning, system design, and product development across software and hardware nodes.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-zinc-850 ml-4 md:ml-12 pl-8 md:pl-16 py-2 flex flex-col gap-16">
          
          {experienceData.map((exp, idx) => (
            <div key={exp.title} className="relative group">
              
              {/* Connector Node Dot */}
              <div className="absolute -left-[41px] md:-left-[73px] top-1.5 w-6 h-6 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:border-[#06b6d4] transition-colors duration-500 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-[#06b6d4] transition-colors duration-500 animate-pulse"></span>
              </div>

              {/* Experience Card */}
              <div 
                data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                className="bg-zinc-950/60 border border-zinc-900 rounded-[2.5rem] p-8 md:p-10 shadow-2xl backdrop-blur-md hover:border-zinc-800 transition-all duration-500 max-w-4xl"
              >
                {/* Meta details */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-850 flex items-center justify-center group-hover:bg-[#06b6d4]/10 group-hover:border-[#06b6d4]/30 transition-colors duration-500">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-white leading-tight group-hover:text-[#06b6d4] transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                        {exp.tag}
                      </span>
                    </div>
                  </div>
                  <span className="px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-850 text-xs font-black text-[#06b6d4] shadow-inner self-start sm:self-auto font-mono">
                    {exp.period}
                  </span>
                </div>

                {/* Details list */}
                <div className="flex flex-col gap-4">
                  {exp.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-4">
                      <svg className="w-5 h-5 text-[#06b6d4] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-sm md:text-base text-gray-400 font-medium leading-relaxed">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Experience;
