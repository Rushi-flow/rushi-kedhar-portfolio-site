
import { useState, useEffect } from "react";
import { Mail, Phone, Linkedin, User, Zap, Rocket, FileText, Download, ExternalLink, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-blue-400/10 animate-pulse rounded-sm"
          style={{
            width: `${6 + Math.random() * 12}px`,
            height: `${6 + Math.random() * 12}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `translate(${mousePosition.x * (10 + i * 2)}px, ${mousePosition.y * (8 + i)}px)`,
            animation: `pulse ${3 + i * 0.3}s infinite alternate`,
          }}
        />
      ))}
    </div>
  );

  // Enhanced Glass Card Component
  const GlassCard = ({ children, className = "", hover = true, delay = 0, onClick }: { 
    children: React.ReactNode; 
    className?: string; 
    hover?: boolean;
    delay?: number;
    onClick?: () => void;
  }) => (
    <div 
      className={`
        relative backdrop-blur-xl bg-white/5 border border-white/10
        rounded-2xl shadow-2xl
        ${hover ? 'transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 hover:shadow-3xl hover:scale-[1.02]' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      style={{ 
        animationDelay: `${delay}ms`,
        boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(16px) saturate(180%)'
      }}
      onClick={onClick}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 pointer-events-none" />
      {children}
    </div>
  );

  const renderHomeSection = () => (
    <div className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-left space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Rushi Kedhar
              </span>
            </h1>
            
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-200 mb-6">
              AI/ML Engineer | Software Developer
            </div>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Enthusiastic Computer Science professional with expertise in Artificial Intelligence, 
              Machine Learning, and software development. Published research and delivered impactful 
              projects, including AI-driven solutions for real-world challenges.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={() => setActiveSection("projects")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
              >
                <Rocket className="w-5 h-5 mr-3" />
                View Projects
              </Button>
              <Button 
                onClick={() => setActiveSection("contact")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-3" />
                Contact Me
              </Button>
            </div>
            
            {/* Social links */}
            <div className="flex gap-4">
              <a href="mailto:rushikedhar.k@gmail.com" className="text-white/60 hover:text-blue-400 transition-all duration-300 hover:scale-110">
                <Mail className="w-7 h-7" />
              </a>
              <a href="tel:+919652543871" className="text-white/60 hover:text-green-400 transition-all duration-300 hover:scale-110">
                <Phone className="w-7 h-7" />
              </a>
              <a href="https://linkedin.com/in/rushi-kedhar-329011222/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-blue-500 transition-all duration-300 hover:scale-110">
                <Linkedin className="w-7 h-7" />
              </a>
            </div>
          </div>
          
          {/* Right side - Profile image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-lg opacity-60 animate-pulse" />
              <GlassCard className="p-2 w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] relative z-10">
                <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
                  <img 
                    src="https://i.postimg.cc/pLmdrVmr/Whats-App-Image-2025-06-17-at-21-27-58.jpg" 
                    alt="Rushi Kedhar Konduru"
                    className="w-full h-full object-cover object-center scale-110"
                    style={{ 
                      objectPosition: 'center 15%',
                      filter: 'brightness(1.1) contrast(1.1)'
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
    <div className="min-h-screen flex items-center justify-center px-4 relative py-8">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-8">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <GlassCard delay={200} className="h-fit">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                <User className="w-7 h-7 mr-3 text-blue-400" />
                Background
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-blue-400 mb-3">Education</h4>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    B.E. in Computer Science<br />
                    <span className="font-semibold text-white">R.V. Institute of Technology and Management (RVITM), 2025</span>
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-400 mb-3">Experience</h4>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Developer Intern, <span className="font-semibold text-white">Philips</span><br />
                    July 2024 – June 2025
                  </p>
                </div>
              </div>
            </CardContent>
          </GlassCard>
          
          <GlassCard delay={400} className="h-fit">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
                <Zap className="w-7 h-7 mr-3 text-purple-400" />
                Vision
              </h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm passionate about leveraging cutting-edge AI and ML technologies to solve complex real-world problems. 
                My research background combined with hands-on development experience allows me to bridge the gap between 
                theoretical knowledge and practical implementation.
              </p>
              <a 
                href="https://drive.google.com/file/d/1Ga12SDxO6fXKCDKhbcn208NiievE43Co/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 text-lg font-bold rounded-xl transition-all duration-300 shadow-lg hover:scale-105">
                  <Download className="w-5 h-5 mr-2" />
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
    <div className="min-h-screen flex items-center justify-center px-4 relative py-8">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-8">
          <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(skills).map(([category, skillList], index) => (
            <GlassCard 
              key={category} 
              delay={index * 150}
              className="h-fit animate-fade-in hover:scale-[1.02] transition-all duration-300"
            >
              <CardContent className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 capitalize">
                  {category === "specialized" ? "AI/ML" : category}
                </h3>
                <div className="space-y-3">
                  {skillList.map((skill, skillIndex) => (
                    <div 
                      key={skill} 
                      className="group animate-fade-in"
                      style={{
                        animationDelay: `${(index * 150) + (skillIndex * 100)}ms`
                      }}
                    >
                      <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:scale-105 hover:shadow-lg cursor-pointer">
                        <span className="text-gray-300 group-hover:text-white font-medium transition-colors duration-300">
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
    <div className="min-h-screen flex items-center justify-center px-4 relative py-8">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-8">
          <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <GlassCard key={index} delay={index * 300} className="h-fit">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <Rocket className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 text-sm font-bold rounded-full">
                    {project.role}
                  </div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs font-semibold text-white bg-white/10 border border-white/20 px-2 py-1 rounded-md hover:bg-white/20 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-5 py-2 text-base font-bold rounded-xl transition-all duration-300 hover:scale-105">
                  <ExternalLink className="w-4 h-4 mr-2" />
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
    <div className="min-h-screen flex items-center justify-center px-4 relative py-8">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
          <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
            Contact
          </span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
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
            <GlassCard key={contact.title} delay={index * 200} className="h-fit">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                  <contact.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="font-bold text-xl text-white mb-3">
                  {contact.title}
                </h3>
                
                <a 
                  href={contact.href}
                  target={contact.href.startsWith('http') ? "_blank" : undefined}
                  rel={contact.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="text-gray-300 hover:text-white transition-colors text-base font-semibold"
                >
                  {contact.content}
                </a>
              </CardContent>
            </GlassCard>
          ))}
        </div>
        
        <GlassCard delay={600} className="max-w-3xl mx-auto">
          <CardContent className="p-6 md:p-8">
            <p className="text-xl text-gray-300">
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
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => setActiveSection("home")}
              className="text-xl font-bold text-white hover:text-blue-400 transition-colors"
            >
              Rushi Kedhar
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`font-semibold transition-all duration-300 ${
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
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-3 pb-3">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left py-2 font-medium transition-colors ${
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
      <main className="pt-16">
        {renderSection()}
      </main>
    </div>
  );
};

export default Index;
