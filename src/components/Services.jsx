import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Tech stack items directly from resume
const techData = [
  // Programming
  { 
    id: 'python', 
    name: 'Python', 
    category: 'Programming & Logic', 
    icon: '🐍', 
    usage: 'Core programming language for ML workflows, dataset preparation, and backend routing layers.' 
  },
  { 
    id: 'java', 
    name: 'Java', 
    category: 'Programming & Logic', 
    icon: '☕', 
    usage: 'Object-oriented programming, data structures, and algorithmic logic workflows.' 
  },
  { 
    id: 'c_lang', 
    name: 'C / C++', 
    category: 'Programming & Logic', 
    icon: '⚙️', 
    usage: 'Low-level hardware firmware loop development for ESP32 systems and hardware nodes.' 
  },

  // Libraries & Frameworks
  { 
    id: 'pytorch', 
    name: 'PyTorch', 
    category: 'Libraries & Frameworks', 
    icon: '🔥', 
    usage: 'Designing CNN models (VGG16), training networks, and customizing eye-tracking models.' 
  },
  { 
    id: 'tensorflow', 
    name: 'TensorFlow', 
    category: 'Libraries & Frameworks', 
    icon: '📊', 
    usage: 'Deep learning modeling pipelines, neural layer structures, and training runs.' 
  },
  { 
    id: 'opencv', 
    name: 'OpenCV', 
    category: 'Libraries & Frameworks', 
    icon: '👁️', 
    usage: 'Real-time computer vision frame pre-processing, matrix operations, and face landmark models.' 
  },
  { 
    id: 'yolov8', 
    name: 'YOLOv8', 
    category: 'Libraries & Frameworks', 
    icon: '🎯', 
    usage: 'Deploying high-speed object detection models for localized classification in medical X-rays.' 
  },
  { 
    id: 'scikit_learn', 
    name: 'Scikit-Learn', 
    category: 'Libraries & Frameworks', 
    icon: '🧠', 
    usage: 'Statistical data scaling, feature engineering, and traditional classification models.' 
  },
  { 
    id: 'pyqt5', 
    name: 'PyQt5', 
    category: 'Libraries & Frameworks', 
    icon: '💻', 
    usage: 'Designing responsive desktop layouts, GUI event structures, and real-time canvas paints.' 
  },
  { 
    id: 'psutil', 
    name: 'psutil & WMI', 
    category: 'Libraries & Frameworks', 
    icon: '📈', 
    usage: 'Interacting with low-level Windows APIs, reading CPU cores, temperature nodes, and system threads.' 
  },
  { 
    id: 'cryptography', 
    name: 'AES / RSA', 
    category: 'Libraries & Frameworks', 
    icon: '🔐', 
    usage: 'Applying symmetric AES encryption, asymmetric RSA key structures, and secure hashing operations.' 
  },

  // Backend & Databases
  { 
    id: 'fastapi', 
    name: 'FastAPI', 
    category: 'Backend & Databases', 
    icon: '⚡', 
    usage: 'Designing asynchronous RESTful API structures connecting local model endpoints to UI panels.' 
  },
  { 
    id: 'flask', 
    name: 'Flask', 
    category: 'Backend & Databases', 
    icon: '🧪', 
    usage: 'Building lightweight microservices and routing structures for system interfaces.' 
  },
  { 
    id: 'mysql', 
    name: 'MySQL', 
    category: 'Backend & Databases', 
    icon: '🐬', 
    usage: 'Relational schema design and query execution for attendance logs and telemetry archives.' 
  },
  { 
    id: 'firebase', 
    name: 'Firebase', 
    category: 'Backend & Databases', 
    icon: '🔥', 
    usage: 'Implementing real-time data synchronizations and serverless user database connections.' 
  },
  { 
    id: 'sqlite', 
    name: 'SQLite', 
    category: 'Backend & Databases', 
    icon: '🗃️', 
    usage: 'Designing lightweight offline database structures for archiving diagnostics and companion telemetry.' 
  },
  { 
    id: 'web_dev', 
    name: 'HTML/CSS/JS', 
    category: 'Backend & Databases', 
    icon: '🌐', 
    usage: 'Structuring browser-native client pages and styling responsive frontend layouts.' 
  },

  // AI/ML & Cloud Tools
  { 
    id: 'llms', 
    name: 'LLMs & GenAI', 
    category: 'AI/ML & Cloud Tools', 
    icon: '🦙', 
    usage: 'Fine-tuning local large language models (Llama 3) for medical symptom reasoning.' 
  },
  { 
    id: 'prompt_eng', 
    name: 'Prompt Eng.', 
    category: 'AI/ML & Cloud Tools', 
    icon: '✍️', 
    usage: 'Structuring context pipelines and custom clinical guardrails for chatbot outputs.' 
  },
  { 
    id: 'vertex_ai', 
    name: 'Vertex AI', 
    category: 'AI/ML & Cloud Tools', 
    icon: '☁️', 
    usage: 'Managing Google Cloud training jobs, model version control, and scalable API endpoints.' 
  },
  { 
    id: 'ollama', 
    name: 'Ollama', 
    category: 'AI/ML & Cloud Tools', 
    icon: '🧮', 
    usage: 'Orchestrating local model compilation and real-time token streaming operations.' 
  },
  { 
    id: 'streamlit', 
    name: 'Streamlit', 
    category: 'AI/ML & Cloud Tools', 
    icon: '🎨', 
    usage: 'Building diagnostic user interfaces and reactive voice assistant interfaces.' 
  },

  // IoT & Hardware
  { 
    id: 'esp32', 
    name: 'ESP32', 
    category: 'IoT & Hardware', 
    icon: '📟', 
    usage: 'Programming hardware boards, GPIO sensor reads, and wireless alerts over network stacks.' 
  },
  { 
    id: 'sensors', 
    name: 'Sensors & Edge', 
    category: 'IoT & Hardware', 
    icon: '🔌', 
    usage: 'Connecting hardware components including temperature probes, accelerometers, and GPS links.' 
  }
];

// Project items directly from resume
const projectsData = [
  {
    id: 'osteoporosis',
    title: 'Osteoporosis Detection System',
    subtitle: 'AI/ML Medical Screening',
    description: 'Developed an AI-based early detection system using X-ray analysis, leveraging CNN models (YOLOv8, VGG16) deployed on Vertex AI.',
    techs: ['python', 'yolov8', 'pytorch', 'tensorflow', 'vertex_ai'],
    github: "https://github.com/VishwaMohan7/osteoporosis",
    icon: (
      <svg className="w-5 h-5 text-[#06b6d4]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 3.75a6 6 0 00-5.98 6.496A5.25 5.25 0 006.75 20.25H18a4.5 4.5 0 002.206-8.423 3.75 3.75 0 00-5.956-4.328 6 6 0 00-3.75-3.75z" />
      </svg>
    )
  },
  {
    id: 'health_companion',
    title: 'AI Village Health Companion',
    subtitle: 'Multilingual GenAI Voice Assistant',
    description: 'Built an interactive symptom guidance tool powered by Llama 3 & Ollama with prompt engineering, Streamlit, and TTS/STT integration.',
    techs: ['python', 'llms', 'prompt_eng', 'ollama', 'streamlit'],
    github: "https://github.com/VishwaMohan7/AI-village-health-companion",
    icon: (
      <svg className="w-5 h-5 text-[#06b6d4]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    )
  },
  {
    id: 'coldwatch',
    title: 'Smart Organ Box (COLDWATCH)',
    subtitle: 'IoT Biomedical Logistics',
    description: 'Built a real-time cold-chain tracking solution utilizing ESP32, temperature sensors, GPS modules, accelerometers, and GSM alerts.',
    techs: ['c_lang', 'esp32', 'sensors'],
    github: "",
    icon: (
      <svg className="w-5 h-5 text-[#06b6d4]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.008 1.24l.885 1.77a2.25 2.25 0 002.007 1.24h1.98a2.25 2.25 0 002.007-1.24l.885-1.77a2.25 2.25 0 012.007-1.24h3.86m-18 0h18" />
      </svg>
    )
  },
  {
    id: 'attendance',
    title: 'Attendance Monitoring System',
    subtitle: 'Real-Time Face Recognition Portal',
    description: 'Developed a real-time facial recognition verification portal with OpenCV and deep learning, logging entries to MySQL schemas.',
    techs: ['python', 'opencv', 'mysql'],
    github: "https://github.com/VishwaMohan7/attendance",
    icon: (
      <svg className="w-5 h-5 text-[#06b6d4]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493" />
      </svg>
    )
  },
  {
    id: 'gaze_estimation',
    title: 'Gaze Estimation System',
    subtitle: 'Hands-Free Cursor Control Framework',
    description: 'Designed a webcam-based eye tracker supporting gaze-based navigation and adaptive head-pose normalization using OpenCV & PyTorch.',
    techs: ['python', 'opencv', 'pytorch'],
    github: "https://github.com/preetham-hs-2005/Implementation-of-a-Real-Time-Gaze-Estimation-System",
    icon: (
      <svg className="w-5 h-5 text-[#06b6d4]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      </svg>
    )
  },
  {
    id: 'laptopdoc',
    title: 'LaptopDoc Companion',
    subtitle: 'AI Laptop Health Companion',
    description: 'Windows desktop application translating hardware performance, temperature, and thread profiles into plain-English diagnostics.',
    techs: ['python', 'pyqt5', 'psutil', 'sqlite'],
    github: "https://github.com/VishwaMohan7/laptop_buddy",
    icon: (
      <svg className="w-5 h-5 text-[#06b6d4]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    )
  },
  {
    id: 'secure_search',
    title: 'Secure Search System',
    subtitle: 'Privacy-Preserving Searchable Encryption',
    description: 'Enables encrypted keyword searches over AES/RSA encrypted documents without exposing plaintexts to target servers.',
    techs: ['python', 'flask', 'cryptography', 'web_dev'],
    github: "https://github.com/VishwaMohan7/Encrypto-secure-search-on-encrypted-data",
    icon: (
      <svg className="w-5 h-5 text-[#06b6d4]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    )
  },
  {
    id: 'audio_denoising',
    title: 'Audio Denoising AI App',
    subtitle: 'Deep Learning Web Application',
    description: 'Full-stack Flask application running a PyTorch 1D U-Net deep learning audio wave noise removal model.',
    techs: ['python', 'pytorch', 'flask', 'web_dev'],
    github: "https://github.com/VishwaMohan7/audio-denoiser",
    icon: (
      <svg className="w-5 h-5 text-[#06b6d4]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
      </svg>
    )
  }
];

// Group tech items by category for UI panels
const groupedTech = {
  'Programming & Logic': techData.filter(t => t.category === 'Programming & Logic'),
  'Libraries & Frameworks': techData.filter(t => t.category === 'Libraries & Frameworks'),
  'Backend & Databases': techData.filter(t => t.category === 'Backend & Databases'),
  'AI/ML & Cloud Tools': techData.filter(t => t.category === 'AI/ML & Cloud Tools'),
  'IoT & Hardware': techData.filter(t => t.category === 'IoT & Hardware')
};

const Services = () => {
  const containerRef = useRef(null);
  const [hoveredTech, setHoveredTech] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedTech, setSelectedTech] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [positions, setPositions] = useState({});

  // Active interaction nodes
  const activeTechId = selectedTech || hoveredTech;
  const activeProjectId = selectedProject || hoveredProject;

  // Determine what connected nodes are highlighted
  let highlightedTechs = [];
  let highlightedProjects = [];

  if (activeTechId) {
    highlightedTechs = [activeTechId];
    highlightedProjects = projectsData
      .filter(p => p.techs.includes(activeTechId))
      .map(p => p.id);
  } else if (activeProjectId) {
    highlightedProjects = [activeProjectId];
    const project = projectsData.find(p => p.id === activeProjectId);
    if (project) {
      highlightedTechs = project.techs;
    }
  }

  // Update badge and card coordinates for drawing SVG connectors
  const updatePositions = () => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const newPositions = {};

    techData.forEach(t => {
      const el = document.getElementById(`tech-${t.id}`);
      if (el) {
        const rect = el.getBoundingClientRect();
        const catEl = el.closest('.category-card');
        const catRect = catEl ? catEl.getBoundingClientRect() : rect;
        newPositions[t.id] = {
          x: catRect.right - containerRect.left,
          y: rect.top + rect.height / 2 - containerRect.top
        };
      }
    });

    projectsData.forEach(p => {
      const el = document.getElementById(`proj-${p.id}`);
      if (el) {
        const rect = el.getBoundingClientRect();
        newPositions[p.id] = {
          x: rect.left - containerRect.left,
          y: rect.top + rect.height / 2 - containerRect.top
        };
      }
    });

    setPositions(newPositions);
  };

  useEffect(() => {
    updatePositions();
    window.addEventListener('resize', updatePositions);
    // Extra checks to handle late layouts or loaded fonts
    const timer = setTimeout(updatePositions, 500);
    return () => {
      window.removeEventListener('resize', updatePositions);
      clearTimeout(timer);
    };
  }, []);

  // Recalculate line positions when interaction state changes to ensure perfect alignment
  useEffect(() => {
    updatePositions();
  }, [selectedTech, selectedProject, hoveredTech, hoveredProject]);

  // Generate cubic bezier paths
  const getPathD = (start, end) => {
    if (!start || !end) return '';
    const dx = Math.abs(end.x - start.x) * 0.45;
    return `M ${start.x} ${start.y} C ${start.x + dx} ${start.y}, ${end.x - dx} ${end.y}, ${end.x} ${end.y}`;
  };

  const handleTechClick = (techId) => {
    setSelectedProject(null);
    if (selectedTech === techId) {
      setSelectedTech(null);
    } else {
      setSelectedTech(techId);
    }
  };

  const handleProjectClick = (projectId) => {
    setSelectedTech(null);
    if (selectedProject === projectId) {
      setSelectedProject(null);
    } else {
      setSelectedProject(projectId);
    }
  };

  const clearSelections = () => {
    setSelectedTech(null);
    setSelectedProject(null);
    setHoveredTech(null);
    setHoveredProject(null);
  };

  const activeTechDetails = techData.find(t => t.id === activeTechId);

  return (
    <section 
      id="skills"
      ref={containerRef}
      className="bg-[#030712] pt-16 pb-20 px-6 md:px-12 w-full relative overflow-hidden border-t border-zinc-900"
    >
      {/* Background visual styles */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d402_1px,transparent_1px),linear-gradient(to_bottom,#06b6d402_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none z-0"></div>
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-[#06b6d4]/5 rounded-full filter blur-[150px] pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2"></div>
      
      {/* SVG Canvas Overlay (spanning the entire section) */}
      <svg 
        className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-10"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <filter id="synapse-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {techData.map(t => {
          return projectsData.map(p => {
            if (!p.techs.includes(t.id)) return null;

            const startPos = positions[t.id];
            const endPos = positions[p.id];
            if (!startPos || !endPos) return null;

            const isHighlighted = highlightedTechs.includes(t.id) && highlightedProjects.includes(p.id);
            const isDimmed = (activeTechId || activeProjectId) && !isHighlighted;
            const pathD = getPathD(startPos, endPos);

            return (
              <g key={`synapse-${t.id}-${p.id}`}>
                <path
                  d={pathD}
                  fill="none"
                  stroke={isHighlighted ? '#06b6d4' : '#1f2937'}
                  strokeWidth={isHighlighted ? 2 : 0.8}
                  strokeOpacity={isHighlighted ? 0.95 : isDimmed ? 0.08 : 0.22}
                  className="transition-all duration-500"
                  style={isHighlighted ? { filter: 'url(#synapse-glow)' } : {}}
                />

                {isHighlighted && (
                  <circle r="3" fill="#06b6d4" className="filter drop-shadow-[0_0_6px_rgba(6,182,212,0.8)]">
                    <animateMotion 
                      dur="2s" 
                      repeatCount="indefinite" 
                      path={pathD} 
                    />
                  </circle>
                )}
              </g>
            );
          });
        })}
      </svg>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-8">
          <div>
            <div className="inline-block border border-zinc-800 rounded-full px-5 py-1.5 text-xs text-gray-400 font-bold mb-4 uppercase tracking-[0.2em] bg-black/40 backdrop-blur-md">
              Skills Architecture
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-none tracking-tight">
              Connected Tech Stack
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-xl font-medium leading-relaxed mt-4">
              Select or hover over any technology on the left to see the systems it powers, or click a project on the right to trace its architectural foundation.
            </p>
          </div>
          {(selectedTech || selectedProject) && (
            <button
              onClick={clearSelections}
              className="px-5 py-2 text-xs font-bold bg-zinc-900 border border-zinc-850 hover:border-red-500/50 text-gray-400 hover:text-white rounded-full transition-all duration-300 self-start md:self-auto shadow-lg flex items-center gap-2"
            >
              Reset Selection
              <span className="text-sm">×</span>
            </button>
          )}
        </div>

        {/* Central interactive grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative min-h-[550px]">
          
          {/* LEFT: Technology list by Category in a 2-column grid */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5 content-start z-20">
            {Object.keys(groupedTech).map((catName) => (
              <div 
                key={catName} 
                className="category-card bg-zinc-950/40 border border-zinc-900/60 p-4 rounded-[1.5rem] backdrop-blur-sm shadow-xl flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">
                    {catName}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {groupedTech[catName].map(tech => {
                      const isHighlighted = highlightedTechs.includes(tech.id);
                      const isDimmed = (activeTechId || activeProjectId) && !isHighlighted;
                      
                      return (
                        <button
                          key={tech.id}
                          id={`tech-${tech.id}`}
                          onMouseEnter={() => !selectedTech && !selectedProject && setHoveredTech(tech.id)}
                          onMouseLeave={() => !selectedTech && !selectedProject && setHoveredTech(null)}
                          onClick={() => handleTechClick(tech.id)}
                          className={`px-3 py-1.5 text-xs font-semibold rounded-xl border transition-all duration-300 flex items-center gap-1.5 select-none cursor-pointer ${
                            isHighlighted
                              ? 'bg-[#06b6d4]/10 border-[#06b6d4] text-[#06b6d4] shadow-[0_0_10px_rgba(6,182,212,0.2)] scale-[1.02] z-10'
                              : isDimmed
                                ? 'bg-zinc-950/20 border-zinc-900/30 text-gray-600 opacity-30 scale-[0.98]'
                                : 'bg-zinc-950/60 border-zinc-900 text-gray-300 hover:border-zinc-700 hover:text-white'
                          }`}
                        >
                          <span className="text-xs">{tech.icon}</span>
                          <span>{tech.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}

            {/* Micro details panel (occupying the 6th cell of the Left Column grid) */}
            <div className="bg-zinc-950/40 border border-zinc-900/40 p-4 rounded-[1.5rem] shadow-xl relative min-h-[110px] flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#06b6d4]/2 rounded-full filter blur-xl pointer-events-none"></div>
              <AnimatePresence mode="wait">
                {activeTechDetails ? (
                  <motion.div
                    key={activeTechDetails.id}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-[9px] font-black uppercase tracking-widest text-[#06b6d4] block mb-0.5">
                      Applied Domain
                    </span>
                    <h4 className="text-xs font-black text-white uppercase tracking-tight mb-1">
                      {activeTechDetails.name}
                    </h4>
                    <p className="text-[10px] text-gray-400 font-medium leading-relaxed">
                      {activeTechDetails.usage}
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-2"
                  >
                    <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 block mb-0.5">
                      System Insights
                    </span>
                    <p className="text-[10px] text-zinc-500 font-medium leading-normal">
                      Hover or click a node to reveal integration specifics.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* MIDDLE: Desktop Empty Spacer */}
          <div className="hidden lg:block lg:col-span-3"></div>

          {/* RIGHT: Project cards (single column on desktop) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 content-start z-20">
            {projectsData.map((project) => {
              const isHighlighted = highlightedProjects.includes(project.id);
              const isDimmed = (activeTechId || activeProjectId) && !isHighlighted;

              return (
                <div
                  key={project.id}
                  id={`proj-${project.id}`}
                  onMouseEnter={() => !selectedTech && !selectedProject && setHoveredProject(project.id)}
                  onMouseLeave={() => !selectedTech && !selectedProject && setHoveredProject(null)}
                  onClick={() => handleProjectClick(project.id)}
                  className={`p-4 rounded-[1.5rem] border transition-all duration-500 cursor-pointer select-none relative group ${
                    isHighlighted
                      ? 'bg-zinc-950/80 border-[#06b6d4] text-white shadow-[0_0_25px_rgba(6,182,212,0.15)] scale-[1.02] z-10'
                      : isDimmed
                        ? 'bg-zinc-950/20 border-zinc-900/30 text-gray-400 opacity-30 scale-[0.98]'
                        : 'bg-zinc-950/60 border-zinc-900 text-gray-300 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors duration-500 ${
                      isHighlighted
                        ? 'bg-[#06b6d4]/10 border-[#06b6d4]/30'
                        : 'bg-zinc-900 border-zinc-850 group-hover:bg-zinc-850'
                    }`}>
                      {project.icon}
                    </div>
                    <div className="flex-1 min-w-0 flex items-center justify-between gap-2.5">
                      <div>
                        <h4 className={`text-sm md:text-base font-black transition-colors duration-300 leading-tight ${
                          isHighlighted ? 'text-[#06b6d4]' : 'text-white'
                        }`}>
                          {project.title}
                        </h4>
                        <span className={`text-[9px] font-black uppercase tracking-widest block mt-0.5 transition-colors duration-350 ${
                          isHighlighted ? 'text-[#06b6d4]/70' : 'text-zinc-500'
                        }`}>
                          {project.subtitle}
                        </span>
                      </div>
                      {project.github && (
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 rounded-full bg-zinc-900 border border-zinc-850 text-gray-500 hover:text-[#06b6d4] hover:border-[#06b6d4] hover:shadow-[0_0_10px_rgba(6,182,212,0.3)] transition-all duration-300 shrink-0 animate-pulse-slow z-30"
                          title="View GitHub Repository"
                        >
                          <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Services;
