import React from 'react';
import { motion } from 'framer-motion';

const educationData = {
  degree: "Bachelor of Artificial Intelligence and Machine Learning",
  institution: "BNM Institute of Technology",
  location: "Bengaluru, Karnataka",
  period: "2023 – 2027 (Expected)",
  status: "Current Semester: 7th",
  gpa: "CGPA: 8.94",
  details: [
    "Specialized focus on Neural Networks, Deep Learning, and Computer Vision.",
    "Active participation in technical projects spanning medical AI and smart logistics.",
    "Comprehensive coursework in Algorithms, Database Systems, and IoT systems."
  ]
};

const certificationsData = [
  {
    title: "Gen-X-GenAI Hackathon",
    status: "Runner Up",
    description: "Competed and secured runner-up position in designing and pitching generative AI-driven tools.",
    provider: "Gen-X",
    icon: (
      <svg className="w-6 h-6 text-[#06b6d4]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-6.75a1.125 1.125 0 00-1.125 1.125v3.375m9 0h-9M9 6h6m-6 3h6m-6 3h6m-7.5-6h9a1.5 1.5 0 011.5 1.5v6a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 013 10.5v-6A1.5 1.5 0 014.5 3z" />
      </svg>
    )
  },
  {
    title: "HTML, CSS, JavaScript, PHP",
    status: "Springboard Certification",
    description: "Validated skill sets in core web technology constructs, dynamic scripting, and database storage routes.",
    provider: "Infosys",
    icon: (
      <svg className="w-6 h-6 text-[#06b6d4]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    )
  },
  {
    title: "Classifying Data using IBM Granite",
    status: "Generative AI for Software Development",
    description: "Completed specialized developer training on data classification models and semantic intelligence.",
    provider: "IBM",
    icon: (
      <svg className="w-6 h-6 text-[#06b6d4]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v11.896m0-11.896a5.976 5.976 0 00-1.802.449L4.09 5.378a5.968 5.968 0 00-2.34 2.73C1.3 9.4 1 10.66 1 12c0 3.3 2.7 6 6 6h10c3.3 0 6-2.7 6-6 0-3.3-2.7-6-6-6h-3.25M9.75 3.104c.896 0 1.758.13 2.585.377a22.95 22.95 0 00.323-5.328M1.5 8.25l10.5-6 10.5 6-10.5 6-10.5-6z" />
      </svg>
    )
  },
  {
    title: "API Fundamentals Student Expert",
    status: "Student Expert Credentials",
    description: "Certified proficiency in API construction, endpoints testing, request workflows, and schema management.",
    provider: "Postman",
    icon: (
      <svg className="w-6 h-6 text-[#06b6d4]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 0M12 7.5v3.75M9.75 12h4.5M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  }
];

const Education = () => {
  return (
    <section id="education" className="bg-[#0f0f0f] pt-28 pb-32 px-6 md:px-12 w-full relative overflow-hidden border-t border-zinc-900">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d402_1px,transparent_1px),linear-gradient(to_bottom,#06b6d402_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none z-0"></div>
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-[#06b6d4]/5 rounded-full filter blur-[150px] pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-20 text-center md:text-left">
          <div data-aos="fade-up" className="inline-block border border-zinc-800 rounded-full px-5 py-1.5 text-xs text-gray-400 font-bold mb-4 uppercase tracking-[0.2em] bg-black/40 backdrop-blur-md">
            Credentials
          </div>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-none tracking-tight">
            Education & Certs
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-gray-400 text-sm md:text-base max-w-xl font-medium leading-relaxed mt-4">
            Academic pathways and industry-validated certificates certifying machine learning and engineering standards.
          </p>
        </div>

        {/* Central Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Education Card (5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6" data-aos="fade-right">
            <div className="bg-zinc-950 border border-zinc-900 rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between hover:border-zinc-800 transition-all duration-500 shadow-xl group relative overflow-hidden">
              {/* Glow Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#06b6d4]/5 rounded-full filter blur-2xl pointer-events-none"></div>
              
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-[#06b6d4]/10 group-hover:border-[#06b6d4]/30 transition-colors duration-500 shadow-inner">
                    <svg className="w-8 h-8 text-[#06b6d4]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A4.865 4.865 0 007.973 21c.886 0 1.758-.13 2.585-.377a22.95 22.95 0 00.323-5.328M1.5 8.25l10.5-6 10.5 6-10.5 6-10.5-6zm2.25 6v6a3 3 0 003 3h10.5a3 3 0 003-3v-6" />
                    </svg>
                  </div>
                  <span className="text-[10px] md:text-xs font-black tracking-widest uppercase text-gray-500 bg-zinc-900 border border-zinc-850 px-3 py-1.5 rounded-full shadow-inner font-mono">
                    {educationData.period}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-white mb-4 group-hover:text-[#06b6d4] transition-colors duration-300 leading-tight">
                  {educationData.degree}
                </h3>
                
                <h4 className="text-sm font-bold text-gray-300 mb-2 font-sans">
                  {educationData.institution}
                </h4>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#06b6d4] bg-[#06b6d4]/10 border border-[#06b6d4]/20 px-3 py-1 rounded-full">
                    {educationData.status}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#06b6d4] bg-[#06b6d4]/10 border border-[#06b6d4]/20 px-3 py-1 rounded-full">
                    {educationData.gpa}
                  </span>
                </div>

                {/* Details Checklist */}
                <div className="flex flex-col gap-4 pt-6 border-t border-zinc-900">
                  {educationData.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 text-xs md:text-sm font-semibold text-gray-400">
                      <svg className="w-5 h-5 text-[#06b6d4] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="leading-relaxed">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Certifications List (7 columns) */}
          <div className="lg:col-span-7 flex flex-col gap-4" data-aos="fade-left">
            {certificationsData.map((cert, idx) => (
              <div
                key={idx}
                className="bg-zinc-950/60 border border-zinc-900 hover:border-zinc-800 p-6 rounded-[2rem] flex items-center gap-6 group transition-all duration-500 shadow-lg relative overflow-hidden"
              >
                {/* Glow Line Hover Accent */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#06b6d4] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-center"></div>

                {/* Icon Box */}
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-850 flex items-center justify-center shadow-inner group-hover:bg-[#06b6d4]/10 group-hover:border-[#06b6d4]/30 transition-all duration-500 shrink-0">
                  {cert.icon}
                </div>

                {/* Text Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2">
                    <h3 className="text-base md:text-lg font-black text-white group-hover:text-[#06b6d4] transition-colors duration-300 truncate">
                      {cert.title}
                    </h3>
                    <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500 shrink-0 bg-zinc-900/40 px-2 py-1 border border-zinc-900 rounded-md">
                      {cert.provider}
                    </span>
                  </div>
                  
                  <span className="text-[10px] font-bold text-gray-400 block mb-2 font-mono uppercase tracking-wider">
                    {cert.status}
                  </span>

                  <p className="text-xs text-gray-400 font-medium leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
