import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ["All", "AI/ML & CV", "GenAI", "IoT & Hardware", "Software Dev"];

const projectsData = [
  {
    title: "Early Osteoporosis Detection System",
    subtitle: "AI/ML Intern Project — Equvinoxis Pvt Ltd",
    category: "AI/ML & CV",
    description: "Analyzed and implemented an AI-based medical imaging system using X-ray analysis to detect early signs of osteoporosis. Deployed CNN models on Google Cloud Vertex AI to achieve optimized real-time predictions.",
    features: [
      "X-ray image analysis for early bone density screening",
      "Leveraged CNN Architectures (YOLOv8, VGG16)",
      "Deployed on Google Cloud Vertex AI for real-time predictions",
      "Optimized inference pipelines to minimize latency"
    ],
    tech: ["YOLOv8", "VGG16", "CNNs", "Vertex AI", "Python", "Google Cloud"],
    github: "https://github.com/VishwaMohan7/osteoporosis",
    icon: (
      <svg className="w-8 h-8 text-[#06b6d4]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 3.75a6 6 0 00-5.98 6.496A5.25 5.25 0 006.75 20.25H18a4.5 4.5 0 002.206-8.423 3.75 3.75 0 00-5.956-4.328 6 6 0 00-3.75-3.75z" />
      </svg>
    )
  },
  {
    title: "AI Village Health Companion",
    subtitle: "Multilingual GenAI Voice Assistant",
    category: "GenAI",
    description: "Developed an interactive multilingual GenAI voice assistant that provides symptom-based healthcare guidance. Integrated advanced prompt engineering and local LLMs to deliver real-time voice guidance.",
    features: [
      "Local LLM inference (Llama 3) via Ollama",
      "Integrated Speech-to-Text (STT) and Text-to-Speech (TTS)",
      "Applied prompt engineering for secure, structured clinical guidance",
      "Multilingual voice interaction (English, Hindi, Kannada)"
    ],
    tech: ["Llama 3", "Streamlit", "Ollama", "Python", "STT/TTS", "Prompt Engineering"],
    github: "https://github.com/VishwaMohan7/AI-village-health-companion",
    icon: (
      <svg className="w-8 h-8 text-[#06b6d4]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    )
  },
  {
    title: "Smart Organ Box (COLDWATCH)",
    subtitle: "Intelligent Biomedical Logistics Monitoring System",
    category: "IoT & Hardware",
    description: "Built a smart IoT biomedical logistics solution to monitor and safeguard vaccines, organs, and blood products during transit, ensuring high cold-chain operational standard and full traceability.",
    features: [
      "Hardware monitoring loops on ESP32 microcontrollers",
      "Real-time sensor feeds for temperature, movement, and vibrations",
      "GPS tracking for end-to-end transit traceability",
      "Automated GSM alerts and thermoelectric cooling loops"
    ],
    tech: ["ESP32", "Sensors", "GSM Module", "Thermoelectric Cooling", "IoT", "C++"],
    github: "",
    icon: (
      <svg className="w-8 h-8 text-[#06b6d4]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.008 1.24l.885 1.77a2.25 2.25 0 002.007 1.24h1.98a2.25 2.25 0 002.007-1.24l.885-1.77a2.25 2.25 0 012.007-1.24h3.86m-18 0h18M12 7.5h.008v.008H12V7.5z" />
      </svg>
    )
  },
  {
    title: "Attendance Monitoring System",
    subtitle: "Real-Time Face Recognition Portal",
    category: "AI/ML & CV",
    description: "Developed a real-time attendance management system using advanced computer vision and deep learning models to recognize faces and automate logs, drastically reducing manual tracking efforts.",
    features: [
      "Achieved ~95% facial recognition tracking accuracy",
      "Real-time video frame matching using OpenCV and deep learning",
      "Automated attendance database logging for 50+ users",
      "Reduced manual administrative tracking effort by 80%"
    ],
    tech: ["OpenCV", "Deep Learning", "Python", "Face Recognition", "MySQL"],
    github: "https://github.com/VishwaMohan7/attendance",
    icon: (
      <svg className="w-8 h-8 text-[#06b6d4]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A3.318 3.318 0 0112 22.5a3.318 3.318 0 01-3-3.263v-.109m0-19.102a9.337 9.337 0 014.121.952 4.125 4.125 0 01-7.533 2.493M9 19.128v-.003c0-1.113.285-2.16.786-3.07M9 19.128v.109A3.318 3.318 0 016 22.5a3.318 3.318 0 01-3-3.263v-.109m12-9.75a3 3 0 11-6 0 3 3 0 016 0zm-3-7.5a3 3 0 100 6 3 3 0 000-6z" />
      </svg>
    )
  },
  {
    title: "Real-Time Gaze Estimation",
    subtitle: "Hands-Free Cursor Control Framework",
    category: "AI/ML & CV",
    description: "Designed a webcam-based eye-tracking gaze estimation system to support hands-free navigation and user controls. Developed a robust calibration framework to handle head-pose variations.",
    features: [
      "Webcam-based real-time eye tracking and gaze estimation",
      "Adaptive head-pose normalization algorithms",
      "Intelligent interaction framework supporting gaze navigation and blink triggers",
      "Responsive navigation controls on standard consumer hardware"
    ],
    tech: ["Computer Vision", "Eye Tracking", "OpenCV", "PyTorch", "Python", "HCI"],
    github: "https://github.com/preetham-hs-2005/Implementation-of-a-Real-Time-Gaze-Estimation-System",
    icon: (
      <svg className="w-8 h-8 text-[#06b6d4]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: "LaptopDoc",
    subtitle: "AI-Powered Laptop Health Companion",
    category: "Software Dev",
    description: "Developed a Windows desktop application that monitors CPU, memory, battery, temperature, and resource-heavy applications in real time. The system translates complex hardware metrics into plain-English explanations, helping users understand performance issues, overheating, and battery health.",
    features: [
      "Real-time monitoring of CPU, memory, battery, temperature, and heavy apps",
      "Predictive 'What-If' analysis and daily health reports",
      "Interactive DocBot assistant and charging habit coaching",
      "Complete offline, privacy-first desktop operation with SQLite"
    ],
    tech: ["Python", "PyQt5", "psutil", "WMI", "SQLite", "PyInstaller"],
    github: "https://github.com/VishwaMohan7/laptop_buddy",
    icon: (
      <svg className="w-8 h-8 text-[#06b6d4]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    )
  },
  {
    title: "Secure Search on Encrypted Data",
    subtitle: "Privacy-Preserving Searchable Encryption",
    category: "Software Dev",
    description: "Developed a privacy-preserving searchable encryption system that enables keyword search over encrypted documents without exposing plaintext data to the server, supporting multi-keyword search, client-side decryption, and authentication.",
    features: [
      "AES document security & RSA-based key protection",
      "SHA-256 trapdoor search supporting multi-keyword queries",
      "Role-Based Access Control (RBAC) for secure access management",
      "Client-side decryption and complete data confidentiality"
    ],
    tech: ["Python", "Flask", "AES", "RSA", "SHA-256", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/VishwaMohan7/Encrypto-secure-search-on-encrypted-data",
    icon: (
      <svg className="w-8 h-8 text-[#06b6d4]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    )
  },
  {
    title: "Audio Denoising AI Web Application",
    subtitle: "Deep Learning Noise Removal Portal",
    category: "AI/ML & CV",
    description: "Developed a full-stack AI-powered web application that removes noise from audio recordings using a deep learning-based 1D U-Net model, complete with a training pipeline and reactive UI.",
    features: [
      "Deep learning-based 1D U-Net noise removal model",
      "Scalable PyTorch training pipeline with lazy-loading dataset processing",
      "Integrated model with a Flask REST API for backend communication",
      "Responsive web interface for upload, denoising, and audio playback"
    ],
    tech: ["Python", "PyTorch", "Flask", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/VishwaMohan7/audio-denoiser",
    icon: (
      <svg className="w-8 h-8 text-[#06b6d4]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
      </svg>
    )
  }
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = projectsData.filter(project => 
    activeTab === "All" || project.category === activeTab
  );

  return (
    <section id="projects" className="bg-[#0f0f0f] pt-28 pb-32 px-6 md:px-12 w-full relative overflow-hidden border-t border-zinc-900">
      
      {/* Torn Paper Divider Style Top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-16 fill-[#030712] transform rotate-180">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div data-aos="fade-up" className="inline-block border border-zinc-800 rounded-full px-5 py-1.5 text-xs text-gray-400 font-bold mb-4 uppercase tracking-[0.2em] bg-black/40 backdrop-blur-md">
              Portfolio
            </div>
            <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-none tracking-tight">
              Featured Work
            </h2>
          </div>

          {/* Tabs */}
          <div 
            data-aos="fade-left"
            data-aos-delay="200"
            className="flex flex-wrap gap-2 md:gap-3 bg-black/50 border border-zinc-900 p-1.5 rounded-full self-start md:self-auto backdrop-blur-md"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 md:px-5 md:py-2 text-xs md:text-sm font-bold rounded-full transition-all duration-300 ${
                  activeTab === cat 
                    ? "bg-[#06b6d4] text-white shadow-[0_5px_15px_rgba(6,182,212,0.3)]" 
                    : "text-gray-400 hover:text-white hover:bg-zinc-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                key={project.title}
                data-aos="fade-up"
                data-aos-delay={100 * (idx % 2)}
                className="bg-zinc-950 border border-zinc-900 rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between hover:border-zinc-800 group transition-all duration-500 shadow-xl"
              >
                <div>
                  {/* Top Bar with Icon & Tag */}
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-inner group-hover:bg-[#06b6d4]/10 group-hover:border-[#06b6d4]/30 transition-colors duration-500">
                      {project.icon}
                    </div>
                    <span className="text-[10px] md:text-xs font-black tracking-widest uppercase text-gray-500 bg-zinc-900 border border-zinc-850 px-3 py-1.5 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-2 group-hover:text-[#06b6d4] transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>
                  <h4 className="text-xs font-bold text-gray-400 mb-6 font-sans">
                    {project.subtitle}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed font-medium mb-8">
                    {project.description}
                  </p>

                  {/* Features Checklist */}
                  <div className="flex flex-col gap-3 mb-8">
                    {project.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs md:text-sm font-semibold text-gray-300">
                        <svg className="w-4 h-4 text-[#06b6d4] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Tags & GitHub Link */}
                <div className="flex justify-between items-center pt-6 border-t border-zinc-900 gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span 
                        key={t}
                        className="text-[9px] md:text-[10px] font-bold bg-zinc-900/60 text-gray-400 border border-zinc-800 px-3 py-1 rounded-full group-hover:text-white transition-colors duration-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-gray-400 hover:text-[#06b6d4] hover:border-[#06b6d4] hover:shadow-[0_0_10px_rgba(6,182,212,0.3)] transition-all duration-300 shrink-0"
                      title="View GitHub Repository"
                    >
                      <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
