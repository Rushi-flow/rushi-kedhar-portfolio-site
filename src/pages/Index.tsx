
import { useState, useEffect, useRef } from "react";
import { Mail, Phone, Linkedin, User, Zap, Rocket, FileText, Download, ExternalLink, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visibleElements, setVisibleElements] = useState(new Set());

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [activeSection]);

  const navigationItems = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "skills", title: "Skills" },
    { id: "projects", title: "Projects" },
    { id: "contact", title: "Contact" },
  ];

  const skills = {
    programming: ["C", "Java", "Python"],
    web: ["HTML", "XML", "CSS", "PHP", "Kotlin", "Prompt Engineering"],
    tools: ["MySQL", "IntelliJ", "Jupyter Notebooks", "VS Code", "Microsoft Office", "Kali Linux", "Adobe Premiere Pro"],
    specialized: ["NLP", "ML", "AI", "Data Analysis", "Salesforce Lightning", "Apex"]
  };

  const projects = [
    {
      title: "Enhancing the Reliability of Self-Driving Cars",
      description: "AI-driven solutions for edge cases using Python and simulation frameworks. Implemented computer vision and ML algorithms to improve reliability and safety in autonomous vehicle systems.",
      technologies: ["Python", "Computer Vision", "Machine Learning", "Simulation Frameworks"],
      role: "Lead Developer"
    },
    {
      title: "Decision Making and Recognition of String Characters",
      description: "NN-Fuzzy Logic Control system achieving 99.8% recognition accuracy. Published research in Elsevier Procedia-Computer Science with conference presentation.",
      technologies: ["Neural Networks", "Fuzzy Logic", "Pattern Recognition", "Python"],
      role: "Research Lead"
    }
  ];

  // Animated Background Component
  const AnimatedBackground = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-black" />
      
      <div className="absolute inset-0 opacity-15">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-blue-400/8 animate-pulse rounded-sm"
          style={{
            width: `${4 + Math.random() * 8}px`,
            height: `${4 + Math.random() * 8}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `translate(${mousePosition.x * (8 + i * 1.5)}px, ${mousePosition.y * (6 + i * 0.8)}px)`,
            animation: `pulse ${4 + i * 0.5}s infinite alternate`,
          }}
        />
      ))}
    </div>
  );

  // Enhanced Glass Card Component with animation support
  const GlassCard = ({ children, className = "", hover = true, delay = 0, onClick, animationId, index = 0 }: { 
    children: React.ReactNode; 
    className?: string; 
    hover?: boolean;
    delay?: number;
    onClick?: () => void;
    animationId?: string;
    index?: number;
  }) => {
    const isVisible = animationId ? visibleElements.has(animationId) : true;
    
    return (
      <div 
        id={animationId}
        data-animate={animationId ? "true" : undefined}
        className={`
          relative backdrop-blur-xl bg-white/8 border border-white/15
          rounded-3xl shadow-2xl
          ${hover ? 'transition-all duration-500 hover:bg-white/12 hover:border-white/25 hover:-translate-y-3 hover:shadow-3xl hover:scale-[1.03]' : ''}
          ${onClick ? 'cursor-pointer' : ''}
          ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}
          ${className}
        `}
        style={{ 
          animationDelay: `${delay + (index * 150)}ms`,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(20px) saturate(180%)'
        }}
        onClick={onClick}
      >
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/8 to-white/0 pointer-events-none" />
        {children}
      </div>
    );
  };

  const renderHomeSection = () => (
    <div className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="text-left space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Rushi Kedhar
              </span>
            </h1>
            
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-200 mb-8">
              AI/ML Engineer | Software Developer
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              Enthusiastic Computer Science professional with expertise in Artificial Intelligence, 
              Machine Learning, and software development. Published research and delivered impactful 
              projects, including AI-driven solutions for real-world challenges.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-10">
              <Button 
                onClick={() => setActiveSection("projects")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-5 text-xl font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
              >
                <Rocket className="w-6 h-6 mr-3" />
                View Projects
              </Button>
              <Button 
                onClick={() => setActiveSection("contact")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-5 text-xl font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
              >
                <Mail className="w-6 h-6 mr-3" />
                Contact Me
              </Button>
            </div>
            
            {/* Social links */}
            <div className="flex gap-6">
              <a href="mailto:rushikedhar.k@gmail.com" className="text-white/60 hover:text-blue-400 transition-all duration-300 hover:scale-125">
                <Mail className="w-8 h-8" />
              </a>
              <a href="tel:+919652543871" className="text-white/60 hover:text-green-400 transition-all duration-300 hover:scale-125">
                <Phone className="w-8 h-8" />
              </a>
              <a href="https://linkedin.com/in/rushi-kedhar-329011222/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-blue-500 transition-all duration-300 hover:scale-125">
                <Linkedin className="w-8 h-8" />
              </a>
            </div>
          </div>
          
          {/* Right side - Profile image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-70 animate-pulse" />
              <GlassCard className="p-3 w-96 h-96 md:w-[26rem] md:h-[26rem] lg:w-[30rem] lg:h-[30rem] relative z-10">
                <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-white/30 shadow-2xl">
                  <img 
                    src="https://i.postimg.cc/pLmdrVmr/Whats-App-Image-2025-06-17-at-21-27-58.jpg" 
                    alt="Rushi Kedhar Konduru"
                    className="w-full h-full object-cover object-center scale-110"
                    style={{ 
                      objectPosition: 'center 20%',
                      filter: 'brightness(1.15) contrast(1.1) saturate(1.05)'
                    }}
                  />
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAboutSection = () => (
    <div className="min-h-screen flex items-center justify-center px-6 relative py-12">
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 
          id="about-title"
          data-animate="true"
          className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-12 transition-all duration-1000 ${
            visibleElements.has('about-title') ? 'animate-fade-in opacity-100' : 'opacity-0'
          }`}
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <GlassCard animationId="about-card-1" delay={300} className="h-fit">
            <CardContent className="p-8 md:p-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center">
                <User className="w-8 h-8 mr-4 text-blue-400" />
                Background
              </h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-2xl font-semibold text-blue-400 mb-4">Education</h4>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    B.E. in Computer Science<br />
                    <span className="font-semibold text-white">R.V. Institute of Technology and Management (RVITM), 2025</span>
                  </p>
                </div>
                <div>
                  <h4 className="text-2xl font-semibold text-blue-400 mb-4">Experience</h4>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Developer Intern, <span className="font-semibold text-white">Philips</span><br />
                    July 2024 – June 2025
                  </p>
                </div>
              </div>
            </CardContent>
          </GlassCard>
          
          <GlassCard animationId="about-card-2" delay={500} className="h-fit">
            <CardContent className="p-8 md:p-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center">
                <Zap className="w-8 h-8 mr-4 text-purple-400" />
                Vision
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                I'm passionate about leveraging cutting-edge AI and ML technologies to solve complex real-world problems. 
                My research background combined with hands-on development experience allows me to bridge the gap between 
                theoretical knowledge and practical implementation.
              </p>
              <a 
                href="https://drive.google.com/file/d/1Ga12SDxO6fXKCDKhbcn208NiievE43Co/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-xl font-bold rounded-2xl transition-all duration-300 shadow-lg hover:scale-105">
                  <Download className="w-6 h-6 mr-3" />
                  Download Resume
                </Button>
              </a>
            </CardContent>
          </GlassCard>
        </div>
      </div>
    </div>
  );

  const renderSkillsSection = () => (
    <div className="min-h-screen flex items-center justify-center px-6 relative py-12">
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 
          id="skills-title"
          data-animate="true"
          className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-12 transition-all duration-1000 ${
            visibleElements.has('skills-title') ? 'animate-fade-in opacity-100' : 'opacity-0'
          }`}
        >
          <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, skillList], index) => (
            <GlassCard 
              key={category} 
              animationId={`skill-category-${index}`}
              delay={200}
              index={index}
              className="h-fit hover:scale-[1.05] transition-all duration-300"
            >
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 capitalize">
                  {category === "specialized" ? "AI/ML" : category}
                </h3>
                <div className="space-y-4">
                  {skillList.map((skill, skillIndex) => (
                    <div 
                      key={skill} 
                      className="group"
                      style={{
                        animationDelay: `${(index * 200) + (skillIndex * 100)}ms`
                      }}
                    >
                      <div className="bg-white/8 border border-white/15 rounded-xl px-4 py-3 transition-all duration-300 hover:bg-white/20 hover:border-white/35 hover:scale-105 hover:shadow-lg cursor-pointer">
                        <span className="text-gray-300 group-hover:text-white font-medium transition-colors duration-300 text-lg">
                          {skill}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProjectsSection = () => (
    <div className="min-h-screen flex items-center justify-center px-6 relative py-12">
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 
          id="projects-title"
          data-animate="true"
          className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-12 transition-all duration-1000 ${
            visibleElements.has('projects-title') ? 'animate-fade-in opacity-100' : 'opacity-0'
          }`}
        >
          <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <GlassCard 
              key={index} 
              animationId={`project-${index}`}
              delay={300}
              index={index}
              className="h-fit"
            >
              <CardContent className="p-8 md:p-10">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-5">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-base font-bold rounded-full">
                    {project.role}
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-sm font-semibold text-white bg-white/15 border border-white/25 px-3 py-2 rounded-lg hover:bg-white/25 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 text-lg font-bold rounded-2xl transition-all duration-300 hover:scale-105">
                  <ExternalLink className="w-5 h-5 mr-3" />
                  View Details
                </Button>
              </CardContent>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContactSection = () => (
    <div className="min-h-screen flex items-center justify-center px-6 relative py-12">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 
          id="contact-title"
          data-animate="true"
          className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-12 transition-all duration-1000 ${
            visibleElements.has('contact-title') ? 'animate-fade-in opacity-100' : 'opacity-0'
          }`}
        >
          <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
            Contact
          </span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: Mail,
              title: "Email",
              content: "rushikedhar.k@gmail.com",
              href: "mailto:rushikedhar.k@gmail.com"
            },
            {
              icon: Phone,
              title: "Phone",
              content: "+91 9652543871",
              href: "tel:+919652543871"
            },
            {
              icon: Linkedin,
              title: "LinkedIn",
              content: "View Profile",
              href: "https://linkedin.com/in/rushi-kedhar-329011222/"
            }
          ].map((contact, index) => (
            <GlassCard 
              key={contact.title} 
              animationId={`contact-${index}`}
              delay={200}
              index={index}
              className="h-fit"
            >
              <CardContent className="p-8 md:p-10 text-center">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="font-bold text-2xl text-white mb-4">
                  {contact.title}
                </h3>
                
                <a 
                  href={contact.href}
                  target={contact.href.startsWith('http') ? "_blank" : undefined}
                  rel={contact.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="text-gray-300 hover:text-white transition-colors text-lg font-semibold"
                >
                  {contact.content}
                </a>
              </CardContent>
            </GlassCard>
          ))}
        </div>
        
        <GlassCard animationId="contact-cta" delay={600} className="max-w-4xl mx-auto">
          <CardContent className="p-8 md:p-10">
            <p className="text-2xl text-gray-300">
              <span>Open to exciting opportunities in </span>
              <span className="font-bold text-white">AI/ML</span>
              <span> and </span>
              <span className="font-bold text-white">Software Development</span>
            </p>
          </CardContent>
        </GlassCard>
      </div>
    </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case "about": return renderAboutSection();
      case "skills": return renderSkillsSection();
      case "projects": return renderProjectsSection();
      case "contact": return renderContactSection();
      default: return renderHomeSection();
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-x-hidden">
      <AnimatedBackground />
      
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => setActiveSection("home")}
              className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
            >
              Rushi Kedhar
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`font-semibold text-lg transition-all duration-300 ${
                    activeSection === item.id 
                      ? "text-white border-b-2 border-blue-400" 
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left py-3 font-medium text-lg transition-colors ${
                    activeSection === item.id ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {renderSection()}
      </main>
    </div>
  );
};

export default Index;
