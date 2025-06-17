
import { useState, useEffect } from "react";
import { Mail, Phone, Linkedin, User, Zap, Rocket, FileText, Download, ExternalLink } from "lucide-react";
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

  const SciFiBackground = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Grid lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* Floating geometric shapes */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute border border-white/10 rounded-lg"
          style={{
            width: `${60 + Math.random() * 40}px`,
            height: `${60 + Math.random() * 40}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `translate(${mousePosition.x * (5 + i * 2)}px, ${mousePosition.y * (3 + i)}px) rotate(${i * 45}deg)`,
            opacity: 0.1,
          }}
        />
      ))}
    </div>
  );

  const SciFiCard = ({ children, className = "", onClick, delay = 0 }: { children: React.ReactNode; className?: string; onClick?: () => void; delay?: number }) => (
    <div 
      className={`
        relative group cursor-pointer transition-all duration-500 transform-gpu
        bg-white border border-gray-200
        shadow-[0_4px_20px_rgba(0,0,0,0.1)] 
        hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)]
        hover:scale-[1.02] hover:-translate-y-1
        rounded-xl overflow-hidden
        ${className}
      `}
      onClick={onClick}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative z-10">
        {children}
      </div>
      {/* Subtle border glow on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </div>
  );

  const renderHomeSection = () => (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50">
      <SciFiBackground />
      
      {/* Hero Content */}
      <div className="text-center z-10 px-4 max-w-7xl mx-auto">
        {/* Profile Image - Centered and Large */}
        <div className="mb-20 relative group">
          <div className="relative w-80 h-80 mx-auto">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-[0_20px_60px_rgba(0,0,0,0.15)] transform-gpu transition-all duration-700 hover:scale-105 bg-white">
              <img 
                src="https://i.postimg.cc/pLmdrVmr/Whats-App-Image-2025-06-17-at-21-27-58.jpg" 
                alt="Rushi Kedhar Konduru"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Futuristic ring effect */}
            <div className="absolute inset-0 rounded-full border-2 border-red-500/30 animate-pulse" 
                 style={{ transform: 'scale(1.1)' }} />
          </div>
        </div>

        {/* Name and Title - Huge Typography */}
        <div className="mb-16">
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black mb-8 text-black leading-none tracking-tight">
            RUSHI KEDHAR
          </h1>
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black mb-12 text-black leading-none tracking-tight">
            KONDURU
          </h1>
          <div className="inline-block bg-black text-white px-12 py-6 rounded-full font-bold text-2xl md:text-3xl tracking-wide transform-gpu transition-all duration-300 hover:scale-105 hover:bg-red-500">
            AI/ML ENGINEER | SOFTWARE DEVELOPER
          </div>
        </div>

        {/* Description */}
        <div className="mb-24 max-w-5xl mx-auto">
          <SciFiCard delay={200}>
            <CardContent className="p-12">
              <p className="text-2xl md:text-3xl text-black leading-relaxed font-medium">
                Enthusiastic Computer Science professional with expertise in{" "}
                <span className="font-black text-red-500">Artificial Intelligence</span>,{" "}
                <span className="font-black text-red-500">Machine Learning</span>, and software development. 
                Published research and delivered impactful projects, including AI-driven solutions for real-world challenges.
              </p>
            </CardContent>
          </SciFiCard>
        </div>

        {/* Navigation Cards - Futuristic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {navigationCards.map((card, index) => (
            <SciFiCard 
              key={card.id}
              onClick={() => setActiveSection(card.id)}
              delay={index * 100}
            >
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 mx-auto mb-8 bg-black rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300">
                  <card.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-black font-black text-2xl md:text-3xl tracking-wide">
                  {card.title.toUpperCase()}
                </h3>
              </CardContent>
            </SciFiCard>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAboutSection = () => (
    <div className="min-h-screen flex items-center justify-center px-4 relative bg-gray-50">
      <SciFiBackground />
      
      <div className="max-w-8xl mx-auto relative z-10">
        <h2 className="text-7xl md:text-9xl font-black text-center mb-24 text-black tracking-tight">
          ABOUT
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <SciFiCard delay={200}>
            <CardContent className="p-16">
              <h3 className="text-5xl font-black text-black mb-12 tracking-wide">
                BACKGROUND
              </h3>
              <div className="space-y-12">
                <div>
                  <h4 className="text-3xl font-black text-red-500 mb-6 tracking-wide">EDUCATION</h4>
                  <p className="text-xl text-gray-800 leading-relaxed">
                    B.E. in Computer Science<br />
                    <span className="font-bold">R.V. Institute of Technology and Management (RVITM), 2025</span>
                  </p>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-red-500 mb-6 tracking-wide">EXPERIENCE</h4>
                  <p className="text-xl text-gray-800 leading-relaxed">
                    Developer Intern, <span className="font-black">Philips</span><br />
                    July 2024 – June 2025
                  </p>
                </div>
              </div>
            </CardContent>
          </SciFiCard>
          
          <SciFiCard delay={400}>
            <CardContent className="p-16">
              <h3 className="text-5xl font-black text-black mb-12 tracking-wide">
                VISION
              </h3>
              <p className="text-xl text-gray-800 leading-relaxed mb-12">
                I'm passionate about leveraging cutting-edge AI and ML technologies to solve complex real-world problems. 
                My research background combined with hands-on development experience allows me to bridge the gap between 
                theoretical knowledge and practical implementation.
              </p>
              <Button className="bg-red-500 hover:bg-red-600 text-white px-10 py-6 text-xl font-black tracking-wide rounded-full transform-gpu transition-all duration-300 hover:scale-105">
                <Download className="w-6 h-6 mr-3" />
                DOWNLOAD RESUME
              </Button>
            </CardContent>
          </SciFiCard>
        </div>
      </div>
    </div>
  );

  const renderSkillsSection = () => (
    <div className="min-h-screen flex items-center justify-center px-4 relative bg-gray-50">
      <SciFiBackground />
      
      <div className="max-w-8xl mx-auto relative z-10">
        <h2 className="text-7xl md:text-9xl font-black text-center mb-24 text-black tracking-tight">
          SKILLS
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {Object.entries(skills).map(([category, skillList], index) => (
            <SciFiCard key={category} delay={index * 100}>
              <CardContent className="p-12">
                <h3 className="text-4xl font-black text-black mb-10 capitalize tracking-wide">
                  {category === "specialized" ? "AI/ML" : category.toUpperCase()}
                </h3>
                <div className="space-y-6">
                  {skillList.map((skill, skillIndex) => (
                    <div key={skill} className="group">
                      <div className="bg-gray-100 border border-gray-200 rounded-lg px-6 py-4 transform-gpu transition-all duration-300 hover:bg-black hover:text-white hover:scale-105 hover:shadow-lg">
                        <span className="font-bold tracking-wide text-lg">
                          {skill}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </SciFiCard>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProjectsSection = () => (
    <div className="min-h-screen flex items-center justify-center px-4 relative bg-gray-50">
      <SciFiBackground />
      
      <div className="max-w-8xl mx-auto relative z-10">
        <h2 className="text-7xl md:text-9xl font-black text-center mb-24 text-black tracking-tight">
          PROJECTS
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          {projects.map((project, index) => (
            <SciFiCard key={index} delay={index * 200}>
              <CardContent className="p-16">
                <div className="flex items-center mb-10">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mr-6">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-black text-white px-6 py-3 font-bold text-lg tracking-wide rounded-full">
                    {project.role.toUpperCase()}
                  </div>
                </div>
                
                <h3 className="text-4xl font-black text-black mb-10 leading-tight tracking-wide">
                  {project.title.toUpperCase()}
                </h3>
                
                <p className="text-xl text-gray-800 mb-12 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-4 mb-10">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="inline-block text-sm font-bold text-black bg-gray-100 border border-gray-300 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 tracking-wide"
                    >
                      {tech.toUpperCase()}
                    </span>
                  ))}
                </div>
                
                <Button className="bg-black hover:bg-red-500 text-white px-8 py-4 font-black tracking-wide rounded-full transform-gpu transition-all duration-300 hover:scale-105">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  VIEW DETAILS
                </Button>
              </CardContent>
            </SciFiCard>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContactSection = () => (
    <div className="min-h-screen flex items-center justify-center px-4 relative bg-gray-50">
      <SciFiBackground />
      
      <div className="max-w-8xl mx-auto text-center relative z-10">
        <h2 className="text-7xl md:text-9xl font-black mb-24 text-black tracking-tight">
          CONTACT
        </h2>
        
        <div className="grid md:grid-cols-3 gap-10 mb-20">
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
              content: "+91-9692943871",
              href: "tel:+919692943871"
            },
            {
              icon: Linkedin,
              title: "LINKEDIN",
              content: "VIEW PROFILE",
              href: "https://linkedin.com/in/rushi-kedhar-329011222/"
            }
          ].map((contact, index) => (
            <SciFiCard key={contact.title} delay={index * 150}>
              <CardContent className="p-16 text-center">
                <div className="w-24 h-24 mx-auto bg-black rounded-full flex items-center justify-center shadow-xl mb-10 group-hover:bg-red-500 transition-colors duration-300">
                  <contact.icon className="w-12 h-12 text-white" />
                </div>
                
                <h3 className="text-black font-black text-3xl mb-8 tracking-wide">
                  {contact.title}
                </h3>
                
                <a 
                  href={contact.href}
                  target={contact.href.startsWith('http') ? "_blank" : undefined}
                  rel={contact.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="text-gray-800 hover:text-red-500 transition-all duration-300 text-xl font-bold hover:underline tracking-wide"
                >
                  {contact.content}
                </a>
              </CardContent>
            </SciFiCard>
          ))}
        </div>
        
        <SciFiCard delay={500}>
          <CardContent className="p-16">
            <p className="text-3xl text-black leading-relaxed font-medium">
              Open to exciting opportunities in{" "}
              <span className="font-black text-red-500">AI/ML</span> and{" "}
              <span className="font-black text-red-500">Software Development</span>
            </p>
          </CardContent>
        </SciFiCard>
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
    <div className="min-h-screen bg-gray-50 text-black relative overflow-x-hidden">
      {/* Navigation Header - Futuristic Top Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-white/90 border-b border-gray-200">
        <div className="max-w-8xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => setActiveSection("home")}
              className="text-3xl font-black text-black hover:text-red-500 transition-all duration-300 tracking-wide"
            >
              RUSHI KEDHAR
            </button>
            
            <div className="hidden md:flex space-x-2">
              {["home", ...navigationCards.map(card => card.id)].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`capitalize px-8 py-4 transition-all duration-300 font-black tracking-wide rounded-full ${
                    activeSection === section 
                      ? "bg-red-500 text-white" 
                      : "text-black hover:text-red-500 hover:bg-gray-100"
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
      <main className="pt-24 relative">
        <div 
          className="relative transition-all duration-1000 ease-out"
          style={{ 
            transform: `translateY(${mousePosition.y * 1}px) translateX(${mousePosition.x * 0.5}px)` 
          }}
        >
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default Index;
