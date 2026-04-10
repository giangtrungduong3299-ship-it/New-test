/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  X, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Mail, 
  ArrowRight,
  Monitor,
  Video,
  Layers,
  Zap,
  ChevronRight
} from 'lucide-react';

// --- Types ---
interface Project {
  id: string;
  title: string;
  role: string;
  client: string;
  thumbnail: string;
  videoUrl: string;
  aspectRatio: '16:9' | '9:16';
}

// --- Mock Data ---
const CLIENTS = ['Luxe Lifestyle', 'Hyper Academy', 'Tech Vision'];

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Hyper',
    role: 'Color Grading & Sound Design',
    client: 'Hyper Academy',
    thumbnail: 'public/IMG_0164.jpg',
    videoUrl: 'https://www.tiktok.com/@hyperacademy.vn/video/7546206542006242566?q=hyper%20academy&t=1775829317293',
    aspectRatio: '9:16'
  },
  {
    id: '2',
    title: 'Trip B',
    role: 'Lead Editor',
    client: 'Luxe Lifestyle',
    thumbnail: 'public/IMG_0159.jpg',
    videoUrl: 'https://drive.google.com/file/d/1Xm4fDXb-xD-3QeXsv_y_sERv0LEKNAdJ/view?usp=drive_link',
    aspectRatio: '9:16'
  },
  {
    id: '3',
    title: 'Trip BB',
    role: 'VFX & Motion Graphics',
    client: 'Tech Vision',
    thumbnail: 'public/IMG_0062.jpg',
    videoUrl: 'https://drive.google.com/file/d/1BVxY2K3EUnhkEGSJ7KLT-2XjaRkp2jwF/view?usp=drive_link',
    aspectRatio: '9:16'
  },
  {
    id: '4',
    title: 'Trip Bi',
    role: 'Dynamic Cutting',
    client: 'Hyper Academy',
    thumbnail: 'public/IMG_0056.jpg',
    videoUrl: 'https://drive.google.com/file/d/1-wSd8KvI2ed10iC_6bgCokTXlEwOmSUH/view?usp=drive_link',
    aspectRatio: '9:16'
  },
  {
    id: '5',
    title: 'Trip C',
    role: 'Colorist',
    client: 'Luxe Lifestyle',
    thumbnail: 'public/IMG_0048.jpg',
    videoUrl: 'https://drive.google.com/file/d/1g07Z7w94uzdn2nd3elMzeCxv534dYfL6/view?usp=drive_link',
    aspectRatio: '9:16'
  },
  {
    id: '6',
    title: 'Trip A',
    role: 'Sound Design',
    client: 'Tech Vision',
    thumbnail: 'https://picsum.photos/seed/cyber/400/711',
    videoUrl: 'hhttps://drive.google.com/file/d/1I7zL0AeuZERrfor5tP6c01xQcZsM7pcq/view?usp=drive_link',
    aspectRatio: '9:16'
  },
  {
    id: '7',
    title: 'Golden Hour',
    role: 'Lead Editor',
    client: 'Luxe Lifestyle',
    thumbnail: 'https://picsum.photos/seed/golden/400/711',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-sunset-over-the-ocean-40033-large.mp4',
    aspectRatio: '9:16'
  }
];

const TOOLS = [
  { name: 'Adobe Premiere Pro', icon: <Video className="w-5 h-5" /> },
  { name: 'CapCut Desktop', icon: <Zap className="w-5 h-5" /> },
  { name: 'Google Veo', icon: <Monitor className="w-5 h-5" /> },
  { name: 'After Effects', icon: <Layers className="w-5 h-5" /> },
  { name: 'AI Video Tools', icon: <Zap className="w-5 h-5" /> }
];

const SHOWREEL_PROJECT: Project = {
  id: 'showreel',
  title: '2025 Showreel',
  role: 'Cinematography & Editing',
  client: 'Featured',
  thumbnail: 'https://picsum.photos/seed/showreel/1920/1080',
  videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-opening-a-window-to-a-beautiful-lake-view-4306-large.mp4',
  aspectRatio: '16:9'
};

// --- Components ---

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center bg-gradient-to-b from-[#050505] to-transparent">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl font-light tracking-[0.2em] text-white"
      >
        VDG
      </motion.div>
      <div className="hidden md:flex gap-12">
        {['Work', 'Tools', 'About', 'Contact'].map((item, i) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="text-xs uppercase tracking-[0.3em] text-gray-400 hover:text-[#D4AF37] transition-colors"
          >
            {item}
          </motion.a>
        ))}
      </div>
    </nav>
  );
};

const Hero = ({ onPlay }: { onPlay: () => void }) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6">
      <div className="max-w-6xl w-full text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-extralight tracking-tight text-white mb-6"
        >
          VDG
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-sm md:text-base uppercase tracking-[0.5em] text-[#D4AF37] mb-12"
        >
          Crafting Stories through Cinematic Motion
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        onClick={onPlay}
        className="relative w-full max-w-5xl aspect-video bg-gray-900 rounded-sm overflow-hidden group cursor-pointer"
      >
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Play className="text-white fill-white w-8 h-8 ml-1" />
          </div>
        </div>
        <img 
          src={SHOWREEL_PROJECT.thumbnail} 
          alt="Showreel Thumbnail" 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute bottom-8 left-8 z-20">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/60 mb-2">{SHOWREEL_PROJECT.client}</p>
          <h3 className="text-2xl font-light text-white">{SHOWREEL_PROJECT.title}</h3>
        </div>
      </motion.div>
    </section>
  );
};

const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void; key?: string }) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="relative aspect-[9/16] bg-gray-900 overflow-hidden group cursor-pointer rounded-sm"
    >
      <img 
        src={project.thumbnail} 
        alt={project.title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] mb-1">{project.role}</p>
        <h4 className="text-lg font-light text-white">{project.title}</h4>
      </div>
    </motion.div>
  );
};

const Gallery = ({ onSelectProject }: { onSelectProject: (p: Project) => void }) => {
  const [activeClient, setActiveClient] = useState<string | null>(null);

  const filteredProjects = activeClient 
    ? PROJECTS.filter(p => p.client === activeClient)
    : PROJECTS;

  return (
    <section id="work" className="py-32 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl font-light text-white mb-4">Selected Works</h2>
            <p className="text-gray-500 max-w-md text-sm leading-relaxed">
              A collection of short-form narratives, focusing on rhythm, color, and cinematic impact.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => setActiveClient(null)}
              className={`text-[10px] uppercase tracking-[0.2em] px-4 py-2 border transition-all italic ${!activeClient ? 'bg-white text-black border-white' : 'border-white/10 text-gray-500 hover:border-white/30'}`}
            >
              All Clients
            </button>
            {CLIENTS.map(client => (
              <button 
                key={client}
                onClick={() => setActiveClient(client)}
                className={`text-[10px] uppercase tracking-[0.2em] px-4 py-2 border transition-all italic ${activeClient === client ? 'bg-white text-black border-white' : 'border-white/10 text-gray-500 hover:border-white/30'}`}
              >
                {client}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={() => onSelectProject(project)} 
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const TechStack = () => {
  return (
    <section id="tools" className="py-32 px-6 border-y border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-3xl font-light text-white mb-8">The Arsenal</h2>
          <p className="text-gray-400 mb-12 max-w-md">
            Leveraging industry-standard software and cutting-edge AI tools to push the boundaries of visual storytelling.
          </p>
          <div className="grid grid-cols-1 gap-4">
            {TOOLS.map((tool, i) => (
              <motion.div 
                key={tool.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 border border-white/5 hover:border-[#D4AF37]/30 transition-colors group"
              >
                <div className="text-[#D4AF37] group-hover:scale-110 transition-transform">
                  {tool.icon}
                </div>
                <span className="text-sm uppercase tracking-widest text-gray-300">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="relative aspect-square bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37] via-transparent to-transparent"></div>
          <div className="z-10 text-center">
            <div className="text-8xl font-thin text-white/10 mb-4">08+</div>
            <div className="text-xs uppercase tracking-[0.4em] text-gray-500">Years of Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutContact = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
        <div>
          <h2 className="text-3xl font-light text-white mb-8" id="contact">About Me</h2>
          <div className="space-y-6 text-gray-400 font-light leading-relaxed">
            <p>
              I am a visual storyteller dedicated to the art of cinematic motion. With a focus on short-form content, I help brands and creators transform raw footage into immersive experiences.
            </p>
            <p>
              My approach blends technical precision with creative intuition, ensuring every frame serves the narrative. From high-fashion reels to dynamic tech showcases, I bring a unique aesthetic to every project.
            </p>
          </div>
          
          <div className="mt-12 flex gap-6">
            <a href="https://www.instagram.com/doleghh/" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="http://facebook.com/giangtrungduong" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 border border-white/10 rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="bg-[#0a0a0a] p-10 rounded-sm border border-white/5">
          <h3 className="text-xl font-light text-white mb-8">Start a Project</h3>
          <form className="space-y-6">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Name</label>
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-[#D4AF37] outline-none transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Email</label>
              <input 
                type="email" 
                className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-[#D4AF37] outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-[#D4AF37] outline-none transition-colors resize-none"
                placeholder="Tell me about your vision..."
              />
            </div>
            <button className="w-full py-4 bg-[#D4AF37] text-black text-xs uppercase tracking-[0.3em] font-bold hover:bg-[#b8952e] transition-colors flex items-center justify-center gap-2">
              Send Message <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 text-center">
      <p className="text-[10px] uppercase tracking-[0.5em] text-gray-600">
        &copy; 2024 VDG. All Rights Reserved.
      </p>
    </footer>
  );
};

const Lightbox = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  const isTikTok = project.videoUrl.includes('tiktok.com');
  const isGoogleDrive = project.videoUrl.includes('drive.google.com');
  
  let embedUrl = project.videoUrl;
  if (isTikTok) {
    const videoIdMatch = project.videoUrl.match(/\/video\/(\d+)/);
    if (videoIdMatch) {
      embedUrl = `https://www.tiktok.com/embed/v2/${videoIdMatch[1]}`;
    }
  } else if (isGoogleDrive) {
    const driveIdMatch = project.videoUrl.match(/\/d\/([^\/]+)/);
    if (driveIdMatch) {
      embedUrl = `https://drive.google.com/file/d/${driveIdMatch[1]}/preview`;
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
      >
        <X className="w-8 h-8" />
      </button>
      
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className={`relative w-full max-w-5xl ${project.aspectRatio === '9:16' ? 'max-w-md' : ''} aspect-${project.aspectRatio} bg-black overflow-hidden shadow-2xl`}
        onClick={(e) => e.stopPropagation()}
      >
        {isTikTok || isGoogleDrive ? (
          <iframe
            src={embedUrl}
            className="w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title={project.title}
          />
        ) : (
          <video 
            src={project.videoUrl} 
            controls 
            autoPlay 
            className="w-full h-full object-contain"
          />
        )}
        <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent pointer-events-none">
          <p className="text-xs uppercase tracking-widest text-[#D4AF37] mb-1">{project.client}</p>
          <h3 className="text-2xl font-light text-white">{project.title}</h3>
          <p className="text-sm text-gray-400 mt-2">{project.role}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Smooth scroll implementation
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (!targetId) return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#D4AF37] selection:text-black">
      <Navbar />
      
      <main>
        <Hero onPlay={() => setSelectedProject(SHOWREEL_PROJECT)} />
        <Gallery onSelectProject={setSelectedProject} />
        <TechStack />
        <AboutContact />
      </main>

      <Footer />

      <AnimatePresence>
        {selectedProject && (
          <Lightbox 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>

      {/* Custom Styles for Aspect Ratios in Tailwind */}
      <style>{`
        .aspect-9\\:16 {
          aspect-ratio: 9 / 16;
        }
        .aspect-16\\:9 {
          aspect-ratio: 16 / 9;
        }
      `}</style>
    </div>
  );
}
