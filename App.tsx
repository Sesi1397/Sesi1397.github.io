
import React, { useState, useEffect } from 'react';
import TrafficBackground from './components/TrafficBackground';
import ExperienceTimeline from './components/ExperienceTimeline';
import AIChat from './components/AIChat';
import { SKILLS, PUBLICATIONS, EDUCATION, PROJECTS, LECTURES } from './constants';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDarkMode]);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#research', label: 'Research' },
    { href: '#lectures', label: 'Lectures' },
    { href: '#projects', label: 'Portfolio' },
  ];

  return (
    <div className="relative min-h-screen selection:bg-blue-200 selection:text-blue-900 dark:selection:bg-blue-900 dark:selection:text-blue-200 overflow-x-hidden">
      {/* Background Simulation - Ensuring it is visible */}
      <TrafficBackground />
      
      <AIChat />

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-blue-600 z-[70] transition-all duration-100" style={{ width: `${scrollProgress}%` }} />

      {/* Navigation */}
      <nav className="fixed w-full z-50 glass-nav border-b border-slate-200/50 dark:border-slate-800/50 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center text-white font-extrabold text-xl shadow-lg group-hover:rotate-12 transition-transform">V</div>
            <span className="font-extrabold text-xl tracking-tighter hidden sm:inline-block uppercase">V Sai <span className="text-blue-600">Sesidhar</span></span>
          </a>

          <div className="hidden lg:flex items-center gap-10 text-[11px] font-black uppercase tracking-[0.2em]">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="hover:text-blue-600 transition-colors relative group">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all" />
              </a>
            ))}
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-800" />
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="text-xl hover:text-blue-600 transition-transform hover:rotate-45" aria-label="Toggle Dark Mode">
              <i className={`fa-solid ${isDarkMode ? 'fa-sun' : 'fa-moon'}`} />
            </button>
            <a 
              href="https://github.com/Sesi1397/Sesi1397.github.io/blob/ab7e5c4418f5192b9351c0d3d4a83319b8ee93e5/SesidharV.pdf" 
              download 
              className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-7 py-3 rounded-2xl hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white transition-all shadow-xl font-bold"
            >
              Resume <i className="fa-solid fa-arrow-down ml-2" />
            </a>
          </div>

          <div className="flex items-center gap-4 lg:hidden">
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 text-xl" aria-label="Toggle Dark Mode">
              <i className={`fa-solid ${isDarkMode ? 'fa-sun' : 'fa-moon'}`} />
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-2xl" aria-label="Menu">
              <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars-staggered'}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-20 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 p-8 flex flex-col items-center gap-8 transition-all duration-500 origin-top ${isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-xl font-black uppercase tracking-widest hover:text-blue-600 transition-colors">{link.label}</a>
          ))}
          <a 
            href="https://raw.githubusercontent.com/Sesi1397/Sesi1397.github.io/main/SesidharV.pdf" 
            download 
            className="w-full text-center bg-blue-600 text-white py-5 rounded-[2rem] font-bold uppercase tracking-widest text-sm"
          >
            Get Resume
          </a>
        </div>
      </nav>

      {/* Main Content Sections - Note use of relative and transparent bg to show simulation */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section id="about" className="relative pt-48 pb-24 px-6 max-w-7xl mx-auto overflow-visible">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-blue-100 dark:border-blue-900/30">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" /> Available for Collaboration
              </div>
              <h1 className="text-fluid-h1 font-[900] mb-8 leading-[1] tracking-tight text-slate-900 dark:text-white uppercase">
                Pioneering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Smart Transport</span> Infrastructure
              </h1>
              <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-10 leading-relaxed font-medium max-w-2xl">
                Doctoral Scholar at <span className="text-slate-900 dark:text-white font-bold border-b-2 border-blue-500/30">IIT Kharagpur</span>. Bridging the gap between traditional traffic engineering and AI-driven predictive modeling for mixed traffic ecosystems.
              </p>
              <div className="flex flex-wrap gap-5">
                <a href="#experience" className="px-10 py-5 bg-blue-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs hover:bg-blue-700 hover:shadow-[0_20px_40px_rgba(37,99,235,0.3)] hover:-translate-y-1 transition-all active:scale-95">Explore Roadmap</a>
                <div className="flex items-center gap-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-2 rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-sm">
                   <a href="https://www.linkedin.com/in/sai-sesidhar-transport-planner/" target="_blank" className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors text-xl"><i className="fa-brands fa-linkedin-in" /></a>
                   <a href="mailto:sesi.vegeta@gmail.com" className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors text-xl"><i className="fa-regular fa-envelope" /></a>
                   <div className="h-6 w-px bg-slate-200 dark:bg-slate-700" />
                   <span className="px-4 text-[10px] font-black uppercase tracking-widest opacity-50 font-bold">Follow Research</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[320px] md:max-w-sm aspect-square">
                {/* Outer decorative ring */}
                <div className="absolute inset-0 border-2 border-dashed border-blue-500/30 rounded-full animate-[spin_30s_linear_infinite]" />
                <div className="absolute -inset-10 bg-gradient-to-tr from-blue-500 to-indigo-600 opacity-20 blur-[100px] rounded-full" />
                
                {/* Profile Image - Force Perfect Circle */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-[8px] md:border-[12px] border-white dark:border-slate-800 shadow-[0_30px_100px_rgba(0,0,0,0.2)] group z-10 bg-slate-100">
                  <img 
                    src="https://raw.githubusercontent.com/Sesi1397/Sesi1397.github.io/main/Sesi_Formal.jpg" 
                    alt="V Sai Sesidhar" 
                    className="w-full h-full object-cover rounded-full transition-all duration-700 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:opacity-0 transition-opacity" />
                </div>

                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800 px-6 py-3 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 animate-bounce z-20">
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">PhD Researcher</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section id="experience" className="py-32 px-6 bg-white/30 dark:bg-slate-800/10 transition-colors">
          <div className="max-w-4xl mx-auto">
            <div className="mb-24 text-center lg:text-left">
              <h2 className="text-5xl font-[900] mb-6 tracking-tighter uppercase">Career Journey</h2>
              <div className="w-24 h-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto lg:mx-0" />
            </div>
            <ExperienceTimeline />
          </div>
        </section>

        {/* Skills Grid */}
        <section id="skills" className="py-32 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div>
                <p className="text-blue-600 dark:text-blue-400 font-black text-xs uppercase tracking-[0.4em] mb-4">Technical Stack</p>
                <h2 className="text-5xl font-[900] tracking-tighter uppercase">The Modern Planner's Toolkit</h2>
              </div>
              <p className="text-slate-500 max-w-sm font-medium leading-relaxed italic">Leveraging industry-standard simulation software alongside modern data science to solve urban mobility challenges.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {SKILLS.map((skill, i) => (
                <div key={skill.name} className="group p-8 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-100 dark:border-slate-700 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-500">
                  <div className="w-16 h-16 bg-blue-50 dark:bg-slate-900/50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    <i className={`fa-solid ${skill.icon} text-3xl`} />
                  </div>
                  <h4 className="text-xl font-extrabold mb-2 uppercase">{skill.name}</h4>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{skill.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="py-32 px-6 bg-slate-950/90 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] -mr-64 -mt-64 rounded-full" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-24 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <h2 className="text-5xl font-[900] tracking-tighter uppercase">Research Contributions</h2>
              <div className="h-px flex-1 bg-white/10 hidden md:block mx-12" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40 italic">Communicated & Published</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PUBLICATIONS.map((pub, idx) => (
                <div key={idx} className="group p-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-[3rem] hover:bg-white/10 hover:border-blue-500/50 transition-all duration-500 flex flex-col justify-between h-full">
                  <div>
                    <div className="inline-block px-4 py-1.5 bg-blue-600 rounded-full text-[10px] font-black mb-8 uppercase tracking-widest">{pub.year}</div>
                    <h3 className="text-2xl font-bold mb-6 leading-tight group-hover:text-blue-400 transition-colors uppercase">"{pub.title}"</h3>
                  </div>
                  <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider italic flex items-center gap-2">
                    <i className="fa-solid fa-feather-pointed text-blue-500" /> {pub.journal}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guest Lectures & Resources */}
        <section id="lectures" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between mb-24 gap-8">
              <h2 className="text-5xl font-[900] tracking-tighter uppercase">Lectures & Resources</h2>
              <div className="flex gap-4">
                 <span className="px-6 py-2 bg-blue-100 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest">Posters</span>
                 <span className="px-6 py-2 bg-indigo-100 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-widest">Tutorials</span>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {LECTURES.map((lec, i) => (
                <div key={i} className="group relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-md p-10 rounded-[3rem] border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity rotate-12">
                     <i className={`fa-solid ${lec.type === 'Video' ? 'fa-video' : 'fa-file-pdf'} text-9xl`} />
                  </div>
                  <div className="relative z-10">
                    <div className="flex justify-between items-center mb-8">
                      <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em]">{lec.type}</span>
                      <span className="text-[10px] font-bold text-slate-400">{lec.date}</span>
                    </div>
                    <h3 className="text-2xl font-[900] leading-tight mb-4 group-hover:text-blue-600 transition-colors uppercase">{lec.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 font-medium mb-8 leading-relaxed italic">{lec.description}</p>
                  </div>
                  <a 
                    href={lec.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative z-10 w-full py-4 bg-slate-900 dark:bg-slate-700 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] text-center hover:bg-blue-600 transition-all flex items-center justify-center gap-3"
                  >
                    Access {lec.type} <i className={`fa-solid ${lec.type === 'Video' ? 'fa-play' : 'fa-arrow-up-right-from-square'}`} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Showcase */}
        <section id="projects" className="py-32 px-6 bg-gray-50/50 dark:bg-slate-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
              <div>
                 <h2 className="text-5xl font-[900] tracking-tighter mb-4 uppercase">Strategic Portfolio</h2>
                 <div className="w-32 h-2 bg-indigo-600 rounded-full" />
              </div>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-[11px] opacity-70 italic">Consultancy & Professional Work</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {PROJECTS.map((proj, i) => (
                <div key={i} className={`group relative overflow-hidden p-12 rounded-[3.5rem] text-white shadow-2xl bg-gradient-to-br ${proj.gradient} hover:scale-[1.03] transition-all duration-700 h-[450px] flex flex-col justify-between`}>
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                     <i className="fa-solid fa-mountain-city text-9xl" />
                  </div>
                  <div className="relative z-10">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] bg-white/10 px-4 py-2 rounded-full mb-6 inline-block">{proj.location}</span>
                    <h3 className="text-3xl font-[900] leading-tight mb-4 uppercase">{proj.title}</h3>
                    <p className="text-white/80 font-medium leading-relaxed italic">{proj.description}</p>
                  </div>
                  <button className="relative z-10 w-full py-4 bg-white/10 backdrop-blur-md rounded-2xl font-black uppercase tracking-widest text-[10px] group-hover:bg-white group-hover:text-slate-900 transition-all duration-500">
                    View Case Details <i className="fa-solid fa-arrow-right ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-32 bg-slate-950 text-white border-t border-white/5 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter uppercase">Build the future of Mobility</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
              <a href="mailto:sesi.vegeta@gmail.com" className="px-10 py-5 bg-white text-slate-950 rounded-[2rem] font-black uppercase tracking-widest text-xs hover:bg-blue-600 hover:text-white transition-all shadow-2xl">Start a Conversation</a>
              <div className="flex justify-center items-center gap-4">
                 <a href="https://www.linkedin.com/in/sai-sesidhar-transport-planner/" className="w-14 h-14 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-xl transition-all border border-white/10"><i className="fa-brands fa-linkedin-in" /></a>
                 <a href="tel:+918501896638" className="w-14 h-14 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-xl transition-all border border-white/10"><i className="fa-solid fa-phone" /></a>
              </div>
            </div>
            
            <div className="pt-20 border-t border-white/5">
               <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-black">V</div>
                    <span className="font-black tracking-widest text-xs uppercase">V Sai Sesidhar</span>
                  </div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.5em]">© 2026 Transport Systems Research • IIT Kharagpur</p>
                  <div className="flex gap-4">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="w-2 h-2 rounded-full bg-purple-500" />
                  </div>
               </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
