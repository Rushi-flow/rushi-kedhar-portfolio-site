import { useState, useEffect } from "react";
import { Mail, Phone, Linkedin, User, Code, Rocket, FileText, Download, ExternalLink, Menu, X, Github, MapPin, Database, Globe, Brain, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visibleElements, setVisibleElements] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['home', 'work', 'skills', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    const throttledScroll = throttle(handleScroll, 16); // ~60fps
    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  // Throttle function for performance
  const throttle = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    let lastExecTime = 0;
    return function (...args: any[]) {
      const currentTime = Date.now();
      
      if (currentTime - lastExecTime > delay) {
        func(...args);
        lastExecTime = currentTime;
      } else {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func(...args);
          lastExecTime = Date.now();
        }, delay - (currentTime - lastExecTime));
      }
    };
  };

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const navigationItems = [
    { id: "home", title: "Home" },
    { id: "work", title: "Work" },
    { id: "skills", title: "Skills" },
    { id: "contact", title: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const skills = [
    {
      title: "Programming",
      items: ["Python", "Java", "C"],
      icon: Code,
      color: "from-blue-500 to-blue-600",
      bgGlow: "bg-blue-500/20",
      accent: "border-blue-500/30"
    },
    {
      title: "Web Technologies",
      items: ["HTML", "XML", "CSS", "PHP", "Kotlin", "Prompt Engineering"],
      icon: Globe,
      color: "from-green-500 to-green-600",
      bgGlow: "bg-green-500/20",
      accent: "border-green-500/30"
    },
    {
      title: "Tools",
      items: ["MySQL", "IntelliJ", "Jupyter Notebooks", "VS Code", "Microsoft Office", "Kali Linux", "Adobe Premiere Pro"],
      icon: Database,
      color: "from-purple-500 to-purple-600",
      bgGlow: "bg-purple-500/20",
      accent: "border-purple-500/30"
    },
    {
      title: "AI/ML",
      items: ["Natural Language Processing (NLP)", "Machine Learning (ML)", "Artificial Intelligence (AI)", "Data Analysis", "Salesforce Lightning", "Apex"],
      icon: Brain,
      color: "from-orange-500 to-orange-600",
      bgGlow: "bg-orange-500/20",
      accent: "border-orange-500/30"
    }
  ];

  const projects = [
    {
      title: "Enhancing the Reliability of Self-Driving Cars",
      description: "Developed AI-driven solutions for edge cases in autonomous vehicles using Python, simulation frameworks, computer vision, and ML algorithms. Implemented safety protocols and improved reliability through advanced simulation frameworks.",
      technologies: ["Python", "Computer Vision", "Machine Learning", "Simulation Frameworks"],
      role: "Lead Developer",
      type: "AI/ML Project",
      year: "2024"
    },
    {
      title: "Decision Making and Recognition of String Characters",
      description: "Created NN-Fuzzy Logic Control for handwritten character recognition achieving 99.8% accuracy. Presented research at an international conference and published findings.",
      technologies: ["Neural Networks", "Fuzzy Logic", "Pattern Recognition", "Python"],
      role: "Research Lead",
      type: "Research Project",
      year: "2023"
    }
  ];

  // Animated Grid Background
  const AnimatedBackground = () => (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)
          `,
          backgroundSize: '40px 40px',
          animation: 'pulse 4s ease-in-out infinite'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
    </div>
  );

  // 3D Card Component
  const FloatingCard = ({ children, className = "", delay = 0, animationId, index = 0 }: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    animationId?: string;
    index?: number;
  }) => {
    // const isVisible = animationId ? visibleElements.has(animationId) : true;
    
    return (
      <div
        id={animationId}
        data-animate={animationId ? "true" : undefined}
        className={`
          relative bg-gradient-to-br from-[#111111] to-[#0d0d0d] border border-[#222222] rounded-2xl
          transition-all duration-500 hover:bg-gradient-to-br hover:from-[#151515] hover:to-[#111111] 
          hover:border-[#333333] hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-3
          hover:scale-[1.02] backdrop-blur-sm
          animate-fade-in opacity-100
          ${className}
        `}
        style={{
          animationDelay: `${delay + (index * 150)}ms`,
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05)',
          transform: 'perspective(1000px) rotateX(2deg)',
          willChange: 'transform, opacity'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
        {children}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-x-hidden">
      <AnimatedBackground />
      
      {/* Modern Sticky Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#222222] shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-2xl font-black text-white hover:text-blue-400 transition-colors"
            >
              Rushi Kedhar Konduru
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium text-base transition-all duration-300 relative ${
                    activeSection === item.id 
                      ? "text-white" 
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.title}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                  )}
                </button>
              ))}
              <a 
                href="https://drive.google.com/file/d/1Ga12SDxO6fXKCDKhbcn208NiievE43Co/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Resume
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-[#222222] pt-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-3 font-medium text-base text-gray-400 hover:text-white transition-colors"
                >
                  {item.title}
                </button>
              ))}
              <a 
                href="https://drive.google.com/file/d/1Ga12SDxO6fXKCDKhbcn208NiievE43Co/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300"
              >
                Resume
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                  Hello, I'm{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Rushi
                  </span>{" "}
                  👋
                </h1>
                
                <div className="text-2xl md:text-3xl font-bold text-gray-300">
                  AI/ML Engineer & Software Developer
                </div>
                
                <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                  Passionate about leveraging cutting-edge AI and ML technologies to solve real-world problems. 
                  Published researcher with hands-on experience in autonomous systems and neural networks.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection("work")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  View Projects
                </button>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Contact
                </button>
              </div>
              
              <div className="flex items-center space-x-6">
                <a href="mailto:rushikedhar.k@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors hover:scale-110 transform duration-200">
                  <Mail className="w-7 h-7" />
                </a>
                <a href="https://linkedin.com/in/rushi-kedhar-329011222/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors hover:scale-110 transform duration-200">
                  <Linkedin className="w-7 h-7" />
                </a>
                <a href="tel:+919652543871" className="text-gray-400 hover:text-green-400 transition-colors hover:scale-110 transform duration-200">
                  <Phone className="w-7 h-7" />
                </a>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>Bangalore, India</span>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-3xl opacity-30" />
                <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] rounded-3xl overflow-hidden border-4 border-[#333333] shadow-2xl">
                  <img 
                    src="https://i.postimg.cc/pLmdrVmr/Whats-App-Image-2025-06-17-at-21-27-58.jpg" 
                    alt="Rushi Kedhar Konduru"
                    className="w-full h-full object-cover scale-110"
                    style={{ 
                      objectPosition: 'center 20%',
                      filter: 'brightness(1.1) contrast(1.05)'
                    }}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work/Projects Section */}
      <section id="work" className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              id="work-title"
              data-animate="true"
              className={`text-5xl md:text-6xl font-black text-white mb-6 transition-all duration-1000 ${
                visibleElements.has('work-title') ? 'animate-fade-in opacity-100' : 'opacity-0'
              }`}
            >
              My Work
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A collection of projects showcasing my expertise in AI/ML and software development
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <FloatingCard 
                key={index} 
                animationId={`project-${index}`}
                delay={200}
                index={index}
                className="group cursor-pointer h-full"
              >
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-semibold text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
                      {project.type}
                    </span>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-sm text-gray-300 bg-[#1a1a1a] border border-[#333333] px-3 py-1 rounded-full hover:bg-[#222222] hover:border-[#444444] transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm font-medium text-gray-500">{project.role}</span>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                </CardContent>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              id="skills-title"
              data-animate="true"
              className={`text-5xl md:text-6xl font-black text-white mb-6 transition-all duration-1000 ${
                visibleElements.has('skills-title') ? 'animate-fade-in opacity-100' : 'opacity-0'
              }`}
            >
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <FloatingCard 
                key={index} 
                animationId={`skill-${index}`}
                delay={100}
                index={index}
                className="group hover:scale-[1.02] transition-all duration-500"
              >
                <div className="p-8 relative overflow-hidden">
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 ${skill.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
                  
                  {/* Header with Icon and Title */}
                  <div className="flex items-center space-x-4 mb-6 relative z-10">
                    <div className={`w-14 h-14 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                      <skill.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {skill.title}
                    </h3>
                  </div>
                  
                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 gap-3 relative z-10">
                    {skill.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className={`
                          relative p-3 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] 
                          border ${skill.accent} rounded-lg text-center
                          hover:border-opacity-60 hover:shadow-lg hover:shadow-${skill.color.split('-')[1]}-500/20
                          hover:-translate-y-1 transition-all duration-300 cursor-pointer
                          group/item overflow-hidden
                        `}
                        style={{
                          animationDelay: `${(index * 200) + (itemIndex * 50)}ms`
                        }}
                      >
                        {/* Subtle background glow for individual items */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover/item:opacity-5 transition-opacity duration-300`} />
                        
                        <span className="text-sm font-medium text-gray-300 group-hover/item:text-white transition-colors duration-200 relative z-10">
                          {item}
                        </span>
                        
                        {/* Hover indicator */}
                        <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${skill.color} transform scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300`} />
                      </div>
                    ))}
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${skill.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100`} />
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Let's Connect Section */}
      <section id="contact" className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            id="contact-title"
            data-animate="true"
            className={`text-5xl md:text-6xl font-black text-white mb-8 transition-all duration-1000 ${
              visibleElements.has('contact-title') ? 'animate-fade-in opacity-100' : 'opacity-0'
            }`}
          >
            Let's Connect
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in discussing new opportunities, exciting projects, or collaborations in AI/ML and software development. Feel free to reach out!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Mail,
                title: "Email",
                content: "rushikedhar.k@gmail.com",
                href: "mailto:rushikedhar.k@gmail.com",
                color: "from-red-500 to-red-600",
                bgGlow: "bg-red-500/20"
              },
              {
                icon: Phone,
                title: "Phone",
                content: "+91 9652543871",
                href: "tel:+919652543871",
                color: "from-green-500 to-green-600",
                bgGlow: "bg-green-500/20"
              },
              {
                icon: Linkedin,
                title: "LinkedIn",
                content: "Connect with me",
                href: "https://linkedin.com/in/rushi-kedhar-329011222/",
                color: "from-blue-500 to-blue-600",
                bgGlow: "bg-blue-500/20"
              }
            ].map((contact, index) => (
              <FloatingCard 
                key={contact.title} 
                animationId={`contact-${index}`}
                delay={100}
                index={index}
                className="group cursor-pointer hover:scale-105"
              >
                <a href={contact.href} target={contact.href.startsWith('http') ? "_blank" : undefined} rel={contact.href.startsWith('http') ? "noopener noreferrer" : undefined}>
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 ${contact.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
                    
                    <div className={`relative w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 shadow-lg`}>
                      <contact.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="font-bold text-xl text-white mb-3 group-hover:text-blue-400 transition-colors relative z-10">
                      {contact.title}
                    </h3>
                    
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors relative z-10">
                      {contact.content}
                    </p>
                  </CardContent>
                </a>
              </FloatingCard>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 text-lg">
              Currently based in <span className="text-white font-semibold">Bangalore, India</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#222222] relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500">
            © 2025 Rushi Kedhar Konduru. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
