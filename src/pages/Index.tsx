
import { useState, useEffect } from "react";
import { Mail, Phone, Linkedin, User, Zap, Rocket, FileText, Download, ExternalLink, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const navigationCards = [
    { id: "about", title: "About", icon: User },
    { id: "skills", title: "Skills", icon: Zap },
    { id: "projects", title: "Projects", icon: Rocket },
    { id: "contact", title: "Contact", icon: FileText },
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

  const FuturisticBackground = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-black animate-pulse" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 opacity-30 blur-sm"
          style={{
            width: `${4 + Math.random() * 8}px`,
            height: `${4 + Math.random() * 8}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `translate(${mousePosition.x * (10 + i * 3)}px, ${mousePosition.y * (5 + i * 2)}px)`,
            animation: `bounce ${3 + i * 0.5}s infinite alternate`,
          }}
        />
      ))}
      
      {/* Floating geometric shapes */}
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="absolute border border-orange-400/20 rounded-lg rotate-45"
          style={{
            width: `${60 + Math.random() * 40}px`,
            height: `${60 + Math.random() * 40}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `translate(${mousePosition.x * (8 + i * 2)}px, ${mousePosition.y * (4 + i)}px) rotate(${i * 45 + 45}deg)`,
            animation: `pulse ${4 + i}s infinite`,
          }}
        />
      ))}
    </div>
  );

  const FuturisticCard = ({ children, className = "", onClick, delay = 0, glowColor = "blue" }: { 
    children: React.ReactNode; 
    className?: string; 
    onClick?: () => void; 
    delay?: number;
    glowColor?: "blue" | "orange" | "cyan";
  }) => {
    const glowColors = {
      blue: "shadow-blue-500/20 hover:shadow-blue-500/40",
      orange: "shadow-orange-500/20 hover:shadow-orange-500/40",
      cyan: "shadow-cyan-500/20 hover:shadow-cyan-500/40"
    };

    return (
      <div 
        className={`
          relative group cursor-pointer transition-all duration-500 transform-gpu
          bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm
          border border-slate-700/50 hover:border-blue-400/50
          shadow-2xl ${glowColors[glowColor]}
          hover:scale-[1.02] hover:-translate-y-2
          rounded-2xl overflow-hidden
          ${className}
        `}
        onClick={onClick}
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className="relative z-10">
          {children}
        </div>
        {/* Glow effect */}
        <div className={`absolute -inset-0.5 bg-gradient-to-r ${
          glowColor === 'blue' ? 'from-blue-500/30 to-cyan-500/30' :
          glowColor === 'orange' ? 'from-orange-500/30 to-yellow-500/30' :
          'from-cyan-500/30 to-blue-500/30'
        } rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
      </div>
    );
  };

  const GradientText = ({ children, className = "", variant = "primary" }: { 
    children: React.ReactNode; 
    className?: string;
    variant?: "primary" | "accent" | "secondary";
  }) => {
    const variants = {
      primary: "bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500",
      accent: "bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500",
      secondary: "bg-gradient-to-r from-slate-300 via-white to-slate-400"
    };

    return (
      <span className={`${variants[variant]} bg-clip-text text-transparent font-black ${className}`}>
        {children}
      </span>
    );
  };

  const renderHomeSection = () => (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      <FuturisticBackground />
      
      {/* Hero Content - Compact and Centered */}
      <div className="text-center z-10 max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="mb-8 relative group">
          <div className="relative w-48 h-48 mx-auto">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-cyan-400/50 shadow-2xl shadow-cyan-500/30 transform-gpu transition-all duration-700 hover:scale-105 hover:shadow-cyan-500/50">
              <img 
                src="https://i.postimg.cc/pLmdrVmr/Whats-App-Image-2025-06-17-at-21-27-58.jpg" 
                alt="Rushi Kedhar Konduru"
                className="w-full h-full object-cover object-center scale-110"
                style={{ objectPosition: 'center 30%' }}
              />
            </div>
            {/* Rotating ring effect */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-400/40 animate-pulse" 
                 style={{ transform: 'scale(1.1)' }} />
            <div className="absolute inset-0 rounded-full border border-orange-400/20 animate-spin" 
                 style={{ transform: 'scale(1.2)', animationDuration: '8s' }} />
          </div>
        </div>

        {/* Name and Title */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight tracking-tight">
            <GradientText variant="primary">
              RUSHI KEDHAR KONDURU
            </GradientText>
          </h1>
          <div className="inline-block bg-gradient-to-r from-orange-500 to-yellow-400 text-black px-8 py-3 rounded-full font-bold text-lg md:text-xl tracking-wide transform-gpu transition-all duration-300 hover:scale-105 hover:shadow-orange-500/50 shadow-lg mb-6">
            AI/ML ENGINEER | SOFTWARE DEVELOPER
          </div>
        </div>

        {/* Bio Summary */}
        <div className="mb-8 max-w-3xl mx-auto">
          <FuturisticCard glowColor="cyan">
            <CardContent className="p-8">
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                Enthusiastic Computer Science professional with expertise in{" "}
                <GradientText variant="accent" className="font-bold">Artificial Intelligence</GradientText>,{" "}
                <GradientText variant="accent" className="font-bold">Machine Learning</GradientText>, and software development. 
                Published research and delivered impactful projects, including AI-driven solutions for real-world challenges.
              </p>
            </CardContent>
          </FuturisticCard>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-12">
          <Button 
            onClick={() => setActiveSection("projects")}
            className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-8 py-4 text-lg font-bold tracking-wide rounded-full transform-gpu transition-all duration-300 hover:scale-105 shadow-blue-500/30 hover:shadow-blue-500/50 shadow-lg"
          >
            <Rocket className="w-5 h-5 mr-2" />
            VIEW PROJECTS
          </Button>
          <Button 
            onClick={() => setActiveSection("contact")}
            className="bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-black px-8 py-4 text-lg font-bold tracking-wide rounded-full transform-gpu transition-all duration-300 hover:scale-105 shadow-orange-500/30 hover:shadow-orange-500/50 shadow-lg"
          >
            <Mail className="w-5 h-5 mr-2" />
            CONTACT ME
          </Button>
        </div>

        {/* Scroll Down Indicator */}
        <div className="flex flex-col items-center text-cyan-400 animate-bounce">
          <span className="text-sm font-medium mb-2 tracking-wide">EXPLORE MORE</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>
    </div>
  );

  const renderAboutSection = () => (
    <div className="min-h-screen flex items-center justify-center px-4 relative">
      <FuturisticBackground />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-6xl md:text-8xl font-black text-center mb-16 tracking-tight">
          <GradientText variant="primary">ABOUT</GradientText>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <FuturisticCard delay={200} glowColor="blue">
            <CardContent className="p-12">
              <h3 className="text-4xl font-black mb-8 tracking-wide">
                <GradientText variant="accent">BACKGROUND</GradientText>
              </h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-2xl font-black text-cyan-400 mb-4 tracking-wide">EDUCATION</h4>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    B.E. in Computer Science<br />
                    <span className="font-bold text-white">R.V. Institute of Technology and Management (RVITM), 2025</span>
                  </p>
                </div>
                <div>
                  <h4 className="text-2xl font-black text-cyan-400 mb-4 tracking-wide">EXPERIENCE</h4>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Developer Intern, <span className="font-black text-white">Philips</span><br />
                    July 2024 – June 2025
                  </p>
                </div>
              </div>
            </CardContent>
          </FuturisticCard>
          
          <FuturisticCard delay={400} glowColor="orange">
            <CardContent className="p-12">
              <h3 className="text-4xl font-black mb-8 tracking-wide">
                <GradientText variant="accent">VISION</GradientText>
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                I'm passionate about leveraging cutting-edge AI and ML technologies to solve complex real-world problems. 
                My research background combined with hands-on development experience allows me to bridge the gap between 
                theoretical knowledge and practical implementation.
              </p>
              <a 
                href="https://drive.google.com/file/d/1Ga12SDxO6fXKCDKhbcn208NiievE43Co/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-black px-8 py-4 text-lg font-black tracking-wide rounded-full transform-gpu transition-all duration-300 hover:scale-105 shadow-orange-500/30 hover:shadow-orange-500/50 shadow-lg">
                  <Download className="w-5 h-5 mr-2" />
                  DOWNLOAD RESUME
                </Button>
              </a>
            </CardContent>
          </FuturisticCard>
        </div>
      </div>
    </div>
  );

  const renderSkillsSection = () => (
    <div className="min-h-screen flex items-center justify-center px-4 relative">
      <FuturisticBackground />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-6xl md:text-8xl font-black text-center mb-16 tracking-tight">
          <GradientText variant="primary">SKILLS</GradientText>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <FuturisticCard key={category} delay={index * 100} glowColor={index % 2 === 0 ? "blue" : "cyan"}>
              <CardContent className="p-8">
                <h3 className="text-3xl font-black mb-6 capitalize tracking-wide">
                  <GradientText variant="accent">
                    {category === "specialized" ? "AI/ML" : category.toUpperCase()}
                  </GradientText>
                </h3>
                <div className="space-y-4">
                  {skillList.map((skill, skillIndex) => (
                    <div key={skill} className="group">
                      <div className="bg-gradient-to-r from-slate-700/50 to-slate-800/50 border border-slate-600/50 rounded-lg px-4 py-3 transform-gpu transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-cyan-600/20 hover:border-cyan-400/50 hover:scale-105 hover:shadow-cyan-500/20 shadow-lg">
                        <span className="font-bold tracking-wide text-slate-200 group-hover:text-white">
                          {skill}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </FuturisticCard>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProjectsSection = () => (
    <div className="min-h-screen flex items-center justify-center px-4 relative">
      <FuturisticBackground />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-6xl md:text-8xl font-black text-center mb-16 tracking-tight">
          <GradientText variant="primary">PROJECTS</GradientText>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <FuturisticCard key={index} delay={index * 200} glowColor={index % 2 === 0 ? "orange" : "blue"}>
              <CardContent className="p-12">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full flex items-center justify-center mr-4 shadow-orange-500/30 shadow-lg">
                    <Rocket className="w-6 h-6 text-black" />
                  </div>
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 font-bold text-sm tracking-wide rounded-full shadow-blue-500/30 shadow-lg">
                    {project.role.toUpperCase()}
                  </div>
                </div>
                
                <h3 className="text-3xl font-black mb-6 leading-tight tracking-wide">
                  <GradientText variant="secondary">
                    {project.title.toUpperCase()}
                  </GradientText>
                </h3>
                
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="inline-block text-sm font-bold text-slate-300 bg-gradient-to-r from-slate-700/50 to-slate-800/50 border border-slate-600/50 px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-cyan-600/20 hover:to-blue-600/20 hover:border-cyan-400/50 hover:text-white transition-all duration-300 tracking-wide"
                    >
                      {tech.toUpperCase()}
                    </span>
                  ))}
                </div>
                
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-6 py-3 font-black tracking-wide rounded-full transform-gpu transition-all duration-300 hover:scale-105 shadow-blue-500/30 hover:shadow-blue-500/50 shadow-lg">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  VIEW DETAILS
                </Button>
              </CardContent>
            </FuturisticCard>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContactSection = () => (
    <div className="min-h-screen flex items-center justify-center px-4 relative">
      <FuturisticBackground />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-6xl md:text-8xl font-black mb-16 tracking-tight">
          <GradientText variant="primary">CONTACT</GradientText>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Mail,
              title: "EMAIL",
              content: "rushikedhar.k@gmail.com",
              href: "mailto:rushikedhar.k@gmail.com"
            },
            {
              icon: Phone,
              title: "PHONE",
              content: "+91 9652543871",
              href: "tel:+919652543871"
            },
            {
              icon: Linkedin,
              title: "LINKEDIN",
              content: "VIEW PROFILE",
              href: "https://linkedin.com/in/rushi-kedhar-329011222/"
            }
          ].map((contact, index) => (
            <FuturisticCard key={contact.title} delay={index * 150} glowColor={index === 1 ? "orange" : "cyan"}>
              <CardContent className="p-12 text-center">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/30 mb-6 group-hover:from-orange-500 group-hover:to-yellow-400 transition-all duration-300">
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="font-black text-2xl mb-6 tracking-wide">
                  <GradientText variant="accent">{contact.title}</GradientText>
                </h3>
                
                <a 
                  href={contact.href}
                  target={contact.href.startsWith('http') ? "_blank" : undefined}
                  rel={contact.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="text-slate-300 hover:text-cyan-400 transition-all duration-300 text-lg font-bold hover:underline tracking-wide"
                >
                  {contact.content}
                </a>
              </CardContent>
            </FuturisticCard>
          ))}
        </div>
        
        <FuturisticCard delay={500} glowColor="orange">
          <CardContent className="p-12">
            <p className="text-2xl leading-relaxed font-medium">
              <span className="text-slate-300">Open to exciting opportunities in </span>
              <GradientText variant="accent" className="font-black">AI/ML</GradientText>
              <span className="text-slate-300"> and </span>
              <GradientText variant="accent" className="font-black">Software Development</GradientText>
            </p>
          </CardContent>
        </FuturisticCard>
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-black text-white relative overflow-x-hidden">
      {/* Navigation Header - Sticky and Always Visible */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-700/50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => setActiveSection("home")}
              className="text-xl font-black hover:text-cyan-400 transition-all duration-300 tracking-wide"
            >
              <GradientText variant="primary">RUSHI KEDHAR</GradientText>
            </button>
            
            <div className="hidden md:flex space-x-2">
              {["home", ...navigationCards.map(card => card.id)].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`capitalize px-6 py-3 transition-all duration-300 font-bold tracking-wide rounded-full ${
                    activeSection === section 
                      ? "bg-gradient-to-r from-orange-500 to-yellow-400 text-black shadow-orange-500/30 shadow-lg" 
                      : "text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50"
                  }`}
                >
                  {section.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 relative">
        <div 
          className="relative transition-all duration-1000 ease-out"
          style={{ 
            transform: `translateY(${mousePosition.y * 0.5}px) translateX(${mousePosition.x * 0.25}px)` 
          }}
        >
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default Index;
