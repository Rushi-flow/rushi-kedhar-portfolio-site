
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
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/20 animate-pulse"
          style={{
            width: `${3 + Math.random() * 6}px`,
            height: `${3 + Math.random() * 6}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `translate(${mousePosition.x * (5 + i * 2)}px, ${mousePosition.y * (3 + i)}px)`,
            animation: `pulse ${2 + i * 0.3}s infinite alternate`,
          }}
        />
      ))}
      
      {/* Floating geometric shapes */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute border border-white/10 rounded-lg"
          style={{
            width: `${40 + Math.random() * 30}px`,
            height: `${40 + Math.random() * 30}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `translate(${mousePosition.x * (4 + i)}px, ${mousePosition.y * (2 + i)}px) rotate(${i * 30}deg)`,
            animation: `pulse ${3 + i * 0.5}s infinite`,
          }}
        />
      ))}
    </div>
  );

  // 3D Glass Card Component
  const GlassCard = ({ children, className = "", hover = true, delay = 0 }: { 
    children: React.ReactNode; 
    className?: string; 
    hover?: boolean;
    delay?: number;
  }) => (
    <div 
      className={`
        relative backdrop-blur-sm bg-white/5 border border-white/10
        rounded-2xl shadow-2xl
        ${hover ? 'transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 hover:shadow-3xl' : ''}
        ${className}
      `}
      style={{ 
        animationDelay: `${delay}ms`,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)'
      }}
    >
      {children}
    </div>
  );

  const renderHomeSection = () => (
    <div className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Rushi Kedhar
              </span>
            </h1>
            
            <div className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
              AI/ML Engineer | Software Developer
            </div>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-xl">
              Enthusiastic Computer Science professional with expertise in Artificial Intelligence, 
              Machine Learning, and software development. Published research and delivered impactful 
              projects, including AI-driven solutions for real-world challenges.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={() => setActiveSection("projects")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Rocket className="w-5 h-5 mr-2" />
                View Projects
              </Button>
              <Button 
                onClick={() => setActiveSection("contact")}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </Button>
            </div>
            
            {/* Social links */}
            <div className="flex gap-4">
              <a href="mailto:rushikedhar.k@gmail.com" className="text-white/60 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="tel:+919652543871" className="text-white/60 hover:text-white transition-colors">
                <Phone className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/rushi-kedhar-329011222/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Right side - Profile image */}
          <div className="flex justify-center lg:justify-end">
            <GlassCard className="p-2 w-80 h-80">
              <div className="w-full h-full rounded-xl overflow-hidden">
                <img 
                  src="https://i.postimg.cc/pLmdrVmr/Whats-App-Image-2025-06-17-at-21-27-58.jpg" 
                  alt="Rushi Kedhar Konduru"
                  className="w-full h-full object-cover object-center scale-110"
                  style={{ objectPosition: 'center 30%' }}
                />
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAboutSection = () => (
    <div className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <GlassCard delay={200}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <User className="w-6 h-6 mr-3 text-blue-400" />
                Background
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">Education</h4>
                  <p className="text-gray-300">
                    B.E. in Computer Science<br />
                    <span className="font-semibold text-white">R.V. Institute of Technology and Management (RVITM), 2025</span>
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">Experience</h4>
                  <p className="text-gray-300">
                    Developer Intern, <span className="font-semibold text-white">Philips</span><br />
                    July 2024 – June 2025
                  </p>
                </div>
              </div>
            </CardContent>
          </GlassCard>
          
          <GlassCard delay={400}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Zap className="w-6 h-6 mr-3 text-purple-400" />
                Vision
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm passionate about leveraging cutting-edge AI and ML technologies to solve complex real-world problems. 
                My research background combined with hands-on development experience allows me to bridge the gap between 
                theoretical knowledge and practical implementation.
              </p>
              <a 
                href="https://drive.google.com/file/d/1Ga12SDxO6fXKCDKhbcn208NiievE43Co/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 font-semibold rounded-xl transition-all duration-300 shadow-lg">
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
    <div className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, skillList], index) => (
            <GlassCard key={category} delay={index * 100}>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 capitalize">
                  {category === "specialized" ? "AI/ML" : category}
                </h3>
                <div className="space-y-3">
                  {skillList.map((skill, skillIndex) => (
                    <div key={skill} className="group">
                      <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                        <span className="text-gray-300 group-hover:text-white font-medium">
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
    <div className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <GlassCard key={index} delay={index * 200}>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <Rocket className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 text-sm font-semibold rounded-full">
                    {project.role}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs font-medium text-gray-300 bg-white/5 border border-white/10 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 font-semibold rounded-lg transition-all duration-300">
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
    <div className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
          Contact
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
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
            <GlassCard key={contact.title} delay={index * 150}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                  <contact.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="font-bold text-lg text-white mb-3">
                  {contact.title}
                </h3>
                
                <a 
                  href={contact.href}
                  target={contact.href.startsWith('http') ? "_blank" : undefined}
                  rel={contact.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="text-gray-300 hover:text-white transition-colors font-medium"
                >
                  {contact.content}
                </a>
              </CardContent>
            </GlassCard>
          ))}
        </div>
        
        <GlassCard delay={500}>
          <CardContent className="p-8">
            <p className="text-lg text-gray-300">
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
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
      <AnimatedBackground />
      
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => setActiveSection("home")}
              className="text-xl font-bold text-white hover:text-blue-400 transition-colors"
            >
              Rushi Kedhar
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`font-medium transition-all duration-300 ${
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
            <div className="md:hidden mt-4 pb-4">
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
      <main className="pt-20">
        {renderSection()}
      </main>
    </div>
  );
};

export default Index;
