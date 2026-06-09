import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Defined technology categories for mobile view
const categoriesData = [
  {
    title: "Artificial Intelligence & Machine Learning",
    skills: ["PyTorch", "OpenCV", "TensorFlow"]
  },
  {
    title: "Backend & APIs",
    skills: ["FastAPI"]
  },
  {
    title: "Databases & Cloud",
    skills: ["Google Cloud"]
  },
  {
    title: "Frontend & Development",
    skills: ["React"]
  }
];

// Node definition for the Neural Knowledge Graph (Only Skills, no Projects)
const nodes = [
  // Central Root Node
  { id: 'root', label: 'AI / ML Engineer', group: 'core', x: 400, y: 300, radius: 26, isRoot: true },
  
  // Vertical Spine Junction Nodes
  { id: 'junc_mid_up', label: '', group: 'junction', x: 400, y: 255, radius: 6 },
  { id: 'junc_mid_down', label: '', group: 'junction', x: 400, y: 345, radius: 6 },
  { id: 'junc_up', label: '', group: 'junction', x: 400, y: 210, radius: 6 },
  { id: 'junc_down', label: '', group: 'junction', x: 400, y: 390, radius: 6 },
  { id: 'junc_top', label: '', group: 'junction', x: 400, y: 155, radius: 6 },
  { id: 'junc_bottom', label: '', group: 'junction', x: 400, y: 445, radius: 6 },

  // Primary Skills and their corresponding dots
  { id: 'pytorch', label: 'PyTorch', group: 'primary', x: 400, y: 100, radius: 15, apps: ["Deep Learning Models", "Neural Networks", "Model Training"] },
  { id: 'gcloud', label: 'Google Cloud', group: 'primary', x: 400, y: 500, radius: 15, apps: ["Cloud Deployment", "Vertex AI", "ML Model Hosting"] },

  // OpenCV
  { id: 'opencv_dot', label: '', group: 'junction', x: 280, y: 210, radius: 6 },
  { id: 'opencv', label: 'OpenCV', group: 'label_left', x: 260, y: 210, radius: 0, apps: ["Computer Vision", "Image Processing", "Object Tracking"] },

  // TensorFlow
  { id: 'tensorflow_dot', label: '', group: 'junction', x: 520, y: 210, radius: 6 },
  { id: 'tensorflow', label: 'TensorFlow', group: 'label_right', x: 540, y: 210, radius: 0, apps: ["Deep Learning", "Keras", "Model Deployment"] },

  // FastAPI
  { id: 'fastapi_dot', label: '', group: 'junction', x: 280, y: 390, radius: 6 },
  { id: 'fastapi', label: 'FastAPI', group: 'label_left', x: 260, y: 390, radius: 0, apps: ["Async APIs", "REST Endpoints", "Python Backend"] },

  // React
  { id: 'react_dot', label: '', group: 'junction', x: 520, y: 390, radius: 6 },
  { id: 'react', label: 'React', group: 'label_right', x: 540, y: 390, radius: 0, apps: ["Frontend Dev", "UI Component Architectures", "Web Apps"] }
];

// Connection lines layout (Only Skills synapses)
const links = [
  // Vertical Spine
  { source: 'root', target: 'junc_mid_up', type: 'spine' },
  { source: 'junc_mid_up', target: 'junc_up', type: 'spine' },
  { source: 'junc_up', target: 'junc_top', type: 'spine' },
  { source: 'junc_top', target: 'pytorch', type: 'spine' },

  { source: 'root', target: 'junc_mid_down', type: 'spine' },
  { source: 'junc_mid_down', target: 'junc_down', type: 'spine' },
  { source: 'junc_down', target: 'junc_bottom', type: 'spine' },
  { source: 'junc_bottom', target: 'gcloud', type: 'spine' },

  // Horizontal Bars
  { source: 'opencv_dot', target: 'junc_up', type: 'spine' },
  { source: 'junc_up', target: 'tensorflow_dot', type: 'spine' },
  { source: 'fastapi_dot', target: 'junc_down', type: 'spine' },
  { source: 'junc_down', target: 'react_dot', type: 'spine' }
];

const Skills = () => {
  const [hoveredNode, setHoveredNode] = useState(null);
  const [clickedNode, setClickedNode] = useState(null);
  const [activeGroup, setActiveGroup] = useState(null); // Mobile accordion state
  const [selectedMobileSkill, setSelectedMobileSkill] = useState(null); // Mobile detail state
  const svgRef = useRef(null);

  // Generate slow organic floating animation values
  const [floatOffsets, setFloatOffsets] = useState({});
  useEffect(() => {
    const offsets = {};
    nodes.forEach(node => {
      offsets[node.id] = {
        phaseX: Math.random() * Math.PI * 2,
        phaseY: Math.random() * Math.PI * 2,
        speed: 0.6 + Math.random() * 0.8,
        amp: node.isRoot ? 2 : 4 + Math.random() * 5
      };
    });
    setFloatOffsets(offsets);
  }, []);

  const [time, setTime] = useState(0);
  useEffect(() => {
    let animId;
    const tick = () => {
      setTime(t => t + 0.02);
      animId = requestAnimationFrame(tick);
    };
    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Get current animated position of a node
  const getNodePos = (node) => {
    // Keep junctions and label nodes static to preserve ASCII alignment
    if (node.group === 'junction' || node.group.startsWith('label')) {
      return { x: node.x, y: node.y };
    }
    const offset = floatOffsets[node.id];
    if (!offset) return { x: node.x, y: node.y };
    const dx = Math.sin(time * offset.speed + offset.phaseX) * offset.amp;
    const dy = Math.cos(time * offset.speed * 1.3 + offset.phaseY) * offset.amp;
    return { x: node.x + dx, y: node.y + dy };
  };

  const handleNodeClick = (node) => {
    if (node.isRoot || node.group === 'junction') return;
    setClickedNode(clickedNode === node.id ? null : node.id);
  };

  // Check if a line/path should be highlighted
  const isLineHighlighted = (link) => {
    const activeId = hoveredNode || clickedNode;
    if (!activeId) return false;
    
    const equivalentIds = [activeId];
    if (activeId === 'opencv') equivalentIds.push('opencv_dot');
    if (activeId === 'opencv_dot') equivalentIds.push('opencv');
    if (activeId === 'tensorflow') equivalentIds.push('tensorflow_dot');
    if (activeId === 'tensorflow_dot') equivalentIds.push('tensorflow');
    if (activeId === 'fastapi') equivalentIds.push('fastapi_dot');
    if (activeId === 'fastapi_dot') equivalentIds.push('fastapi');
    if (activeId === 'react') equivalentIds.push('react_dot');
    if (activeId === 'react_dot') equivalentIds.push('react');

    return equivalentIds.includes(link.source) || equivalentIds.includes(link.target);
  };

  // Check if a node is dimmed due to other selections
  const isNodeDimmed = (node) => {
    const activeId = hoveredNode || clickedNode;
    if (!activeId) return false;
    if (node.id === activeId) return false;
    
    // Highlight root and junctions always
    if (node.isRoot || node.group === 'junction') return false;

    // Check equivalence for labels and their dots
    const equivalentActiveIds = [activeId];
    if (activeId === 'opencv') equivalentActiveIds.push('opencv_dot');
    if (activeId === 'opencv_dot') equivalentActiveIds.push('opencv');
    if (activeId === 'tensorflow') equivalentActiveIds.push('tensorflow_dot');
    if (activeId === 'tensorflow_dot') equivalentActiveIds.push('tensorflow');
    if (activeId === 'fastapi') equivalentActiveIds.push('fastapi_dot');
    if (activeId === 'fastapi_dot') equivalentActiveIds.push('fastapi');
    if (activeId === 'react') equivalentActiveIds.push('react_dot');
    if (activeId === 'react_dot') equivalentActiveIds.push('react');

    if (equivalentActiveIds.includes(node.id)) return false;

    // Check if the node is linked to any of the active equivalent nodes
    const isLinked = links.some(l => 
      (equivalentActiveIds.includes(l.source) && l.target === node.id) || 
      (equivalentActiveIds.includes(l.target) && l.source === node.id)
    );

    return !isLinked;
  };

  const hoverDetails = nodes.find(n => n.id === hoveredNode);

  return (
    <section id="skills" className="bg-[#0a0a0a] pt-28 pb-32 px-6 md:px-12 w-full relative overflow-hidden">
      
      {/* Background glowing elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#06b6d4]/5 rounded-full filter blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full filter blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <div data-aos="fade-up" className="inline-block border border-zinc-800 rounded-full px-5 py-1.5 text-xs text-gray-400 font-bold mb-4 uppercase tracking-[0.2em] shadow-sm bg-black/40 backdrop-blur-md">
            Neural Ecosystem
          </div>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            Technical Stack
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-gray-400 text-sm md:text-base max-w-xl font-medium leading-relaxed">
            Hover over nodes to explore application domains. Click any node to trace connection paths across the neural map.
          </p>
        </div>

        {/* Desktop Interactive Knowledge Graph (SVG Canvas) */}
        <div className="hidden md:block relative w-full h-[650px] bg-zinc-950/40 border border-zinc-900 rounded-[3rem] overflow-hidden shadow-2xl backdrop-blur-md">
          
          {/* Cyber Grid background lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

          <svg 
            ref={svgRef}
            className="w-full h-full"
            viewBox="0 0 800 650"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* SVG Filter for Glow Effect */}
            <defs>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Connection Lines (Synapses) */}
            <g>
              {links.map((link, idx) => {
                const sourceNode = nodes.find(n => n.id === link.source);
                const targetNode = nodes.find(n => n.id === link.target);
                if (!sourceNode || !targetNode) return null;

                const posS = getNodePos(sourceNode);
                const posT = getNodePos(targetNode);
                const highlighted = isLineHighlighted(link);

                const pathD = `M ${posS.x} ${posS.y} L ${posT.x} ${posT.y}`;

                return (
                  <g key={`${link.source}-${link.target}-${idx}`}>
                    {/* The line path */}
                    <path
                      d={pathD}
                      stroke={highlighted ? '#06b6d4' : (link.type === 'spine' ? '#06b6d4' : '#18181b')}
                      strokeWidth={highlighted ? 1.8 : (link.type === 'spine' ? 1.5 : 0.8)}
                      strokeOpacity={highlighted ? 0.95 : (link.type === 'spine' ? 0.25 : 0.35)}
                      fill="none"
                      className="transition-all duration-300"
                    />

                    {/* Glowing packet flows along highlighted lines */}
                    {highlighted && (
                      <circle r="2" fill="#06b6d4" filter="url(#glow)">
                        <animateMotion 
                          dur="3s" 
                          repeatCount="indefinite" 
                          path={pathD} 
                        />
                      </circle>
                    )}
                  </g>
                );
              })}
            </g>

            {/* Graph Nodes */}
            <g>
              {nodes.map((node) => {
                const pos = getNodePos(node);
                const isDimmed = isNodeDimmed(node);
                const isActive = hoveredNode === node.id || clickedNode === node.id;
                
                // Color mapping by node group
                let strokeColor = "#27272a";
                let fillColor = "#09090b";
                let textColor = "#a1a1aa";
                
                if (node.isRoot) {
                  strokeColor = "#06b6d4";
                  fillColor = "#020617";
                  textColor = "#ffffff";
                } else if (node.group === 'junction') {
                  strokeColor = "#06b6d4";
                  fillColor = "#06b6d4";
                  textColor = "transparent";
                } else if (node.group === 'primary' || node.group.startsWith('label')) {
                  strokeColor = "#06b6d4";
                  fillColor = "#0f172a";
                  textColor = "#ffffff";
                }
                
                if (isActive) {
                  if (node.group !== 'junction') {
                    textColor = "#06b6d4";
                    strokeColor = "#06b6d4";
                  }
                }

                return (
                  <g 
                    key={node.id}
                    transform={`translate(${pos.x}, ${pos.y})`}
                    className="cursor-pointer group select-none"
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    onClick={() => handleNodeClick(node)}
                    style={{ opacity: isDimmed ? 0.25 : 1, transition: 'opacity 0.4s ease' }}
                  >
                    {/* Outer Glowing Ring for Hover/Active state */}
                    {node.radius > 0 && (isActive || node.isRoot || node.group === 'junction') && (
                      <circle
                        r={node.radius + (node.group === 'junction' ? 3 : 6)}
                        fill="none"
                        stroke="#06b6d4"
                        strokeWidth="1.5"
                        strokeDasharray={node.isRoot ? "4 4" : "0"}
                        className={node.group !== 'junction' ? "animate-spin" : "animate-pulse"}
                        style={{ animationDuration: '12s', filter: 'url(#glow)' }}
                      />
                    )}

                    {/* Core circle */}
                    {node.radius > 0 && (
                      <circle
                        r={node.radius}
                        fill={fillColor}
                        stroke={strokeColor}
                        strokeWidth={isActive || node.isRoot || node.group === 'junction' ? 2 : 1.5}
                        className="transition-all duration-300"
                      />
                    )}

                    {/* Text Label inside or next to node */}
                    {node.group !== 'junction' && (
                      <text
                        textAnchor={
                          node.group === 'label_left' ? 'end' :
                          node.group === 'label_right' ? 'start' : 'middle'
                        }
                        dy={node.group === 'label_left' || node.group === 'label_right' ? 3 : 5}
                        fontSize={node.isRoot ? 9 : 8}
                        fontWeight={node.isRoot || node.group === 'primary' || node.group.startsWith('label') ? "900" : "600"}
                        fill={textColor}
                        className="font-mono pointer-events-none uppercase tracking-wider transition-colors duration-300"
                      >
                        {node.label}
                      </text>
                    )}
                  </g>
                );
              })}
            </g>
          </svg>

          {/* Floating Glassmorphic Tooltip Overlay */}
          <AnimatePresence>
            {hoverDetails && !hoverDetails.isRoot && hoverDetails.group !== 'junction' && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute bottom-6 left-6 max-w-sm bg-zinc-950/90 border border-zinc-900 p-6 rounded-[2rem] shadow-2xl backdrop-blur-md z-30"
              >
                <span className="text-[9px] font-black uppercase tracking-widest text-[#06b6d4] block mb-1">
                  Technology Node
                </span>
                <h4 className="text-lg font-black text-white mb-4 uppercase tracking-tight">
                  {hoverDetails.label}
                </h4>
                
                {hoverDetails.apps && (
                  <div>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-2">Domain Areas</span>
                    <div className="flex flex-wrap gap-1.5">
                      {hoverDetails.apps.map(a => (
                        <span key={a} className="text-[9px] font-bold bg-zinc-900 border border-zinc-800 text-gray-400 px-2.5 py-1 rounded-full">
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Prompt Indicator inside graph */}
          <div className="absolute top-6 right-6 font-mono text-[9px] text-zinc-500 uppercase tracking-widest pointer-events-none select-none">
            Status: Synapses Active
          </div>

        </div>

        {/* Mobile Dynamic Accordion (Responsive Clustered Groups) */}
        <div className="md:hidden flex flex-col gap-4">
          {categoriesData.map((category) => {
            const isOpen = activeGroup === category.title;
            
            return (
              <div 
                key={category.title}
                className="bg-zinc-950/60 border border-zinc-900 rounded-[2rem] overflow-hidden shadow-xl"
              >
                {/* Header Toggle */}
                <button
                  onClick={() => {
                    setActiveGroup(isOpen ? null : category.title);
                    setSelectedMobileSkill(null);
                  }}
                  className="w-full p-6 text-left flex justify-between items-center font-bold text-sm uppercase tracking-wider text-white"
                >
                  <span>{category.title}</span>
                  <svg 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'transform rotate-180 text-[#06b6d4]' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>

                {/* Expandable Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden border-t border-zinc-900/60"
                    >
                      <div className="p-6 flex flex-wrap gap-2.5 bg-black/30">
                        {category.skills.map((skill) => {
                          const skillNode = nodes.find(n => n.label === skill);
                          if (!skillNode) return null;
                          
                          const isSelected = selectedMobileSkill === skillNode.id;

                          return (
                            <button
                              key={skillNode.id}
                              onClick={() => setSelectedMobileSkill(isSelected ? null : skillNode.id)}
                              className={`px-4 py-2 text-xs font-bold rounded-xl border transition-all duration-300 ${
                                isSelected 
                                  ? "bg-[#06b6d4] border-[#06b6d4] text-black shadow-[0_0_15px_rgba(6,182,212,0.3)]" 
                                  : "bg-zinc-900 border-zinc-800 text-gray-300 hover:text-white"
                              }`}
                            >
                              {skillNode.label}
                            </button>
                          );
                        })}
                      </div>

                      {/* Display detail panel for tapped mobile skill */}
                      <AnimatePresence>
                        {selectedMobileSkill && category.skills.includes(nodes.find(n => n.id === selectedMobileSkill)?.label) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="px-6 pb-6 bg-[#04080f]/40 border-t border-zinc-900"
                          >
                            {(() => {
                              const skillDetail = nodes.find(n => n.id === selectedMobileSkill);
                              if (!skillDetail) return null;

                              return (
                                <div className="pt-6">
                                  <span className="text-[9px] font-black uppercase tracking-widest text-[#06b6d4] block mb-1">
                                    Connected Mapping
                                  </span>
                                  <h4 className="text-base font-black text-white uppercase mb-4">
                                    {skillDetail.label}
                                  </h4>

                                  {skillDetail.apps && (
                                    <div>
                                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-2">Domains</span>
                                      <div className="flex flex-wrap gap-1.5">
                                        {skillDetail.apps.map(a => (
                                          <span key={a} className="text-[9px] font-bold bg-zinc-900 border border-zinc-850 text-gray-400 px-2.5 py-1 rounded-full">
                                            {a}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              );
                            })()}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
