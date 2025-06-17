
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

  const MinimalBackground = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Subtle geometric lines */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute h-px bg-white/10"
          style={{
            width: `${300 + Math.random() * 400}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `translateX(${mousePosition.x * 10}px) translateY(${mousePosition.y * 5}px) rotate(${i * 45}deg)`,
            opacity: 0.1 + Math.random() * 0.1,
          }}
        />
      ))}
      
      {/* Floating dots */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`dot-${i}`}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + i * 12}%`,
            transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 10}px)`,
          }}
        />
      ))}
    </div>
  );

  const PremiumCard = ({ children, className = "", onClick, delay = 0 }: { children: React.ReactNode; className?: string; onClick?: () => void; delay?: number }) => (
    <Card 
      className={`
        relative group cursor-pointer transition-all duration-500 transform-gpu
        bg-white/95 backdrop-blur-sm border border-gray-200/20 
        shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
        hover:shadow-[0_20px_60px_rgb(0,0,0,0.3)]
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
      {/* Subtle glow on hover */}
      <div className="absolute -inset-1 bg-white/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </Card>
  );

  const renderHomeSection = () => (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <MinimalBackground />
      
      {/* Hero Content */}
      <div className="text-center z-10 px-4 max-w-6xl mx-auto">
        {/* Profile Image */}
        <div className="mb-16 relative group">
          <div className="relative w-56 h-56 mx-auto">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-[0_20px_60px_rgb(0,0,0,0.3)] transform-gpu transition-all duration-700 hover:scale-105 hover:shadow-[0_30px_80px_rgb(0,0,0,0.4)]">
              <img 
                src="https://i.postimg.cc/pLmdrVmr/Whats-App-Image-2025-06-17-at-21-27-58.jpg" 
                alt="Rushi Kedhar Konduru"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Status indicator */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full border-4 border-black shadow-lg">
              <div className="w-full h-full bg-green-500 rounded-full animate-pulse" />
            </div>
          </div>
        </div>

        {/* Name and Title */}
        <div className="mb-12">
          <h1 className="text-7xl md:text-9xl font-black mb-6 text-white leading-none tracking-tight">
            RUSHI KEDHAR
          </h1>
          <h1 className="text-7xl md:text-9xl font-black mb-8 text-white leading-none tracking-tight">
            KONDURU
          </h1>
          <div className="inline-block bg-white text-black px-8 py-4 rounded-none font-bold text-xl md:text-2xl tracking-wide transform-gpu transition-all duration-300 hover:scale-105">
            AI/ML ENGINEER | SOFTWARE DEVELOPER
          </div>
        </div>

        {/* Description */}
        <div className="mb-20 max-w-4xl mx-auto">
          <PremiumCard delay={200}>
            <CardContent className="p-10">
              <p className="text-xl md:text-2xl text-black leading-relaxed font-medium">
                Enthusiastic Computer Science professional with expertise in{" "}
                <span className="font-black">Artificial Intelligence</span>,{" "}
                <span className="font-black">Machine Learning</span>, and software development. 
                Published research and delivered impactful projects, including AI-driven solutions for real-world challenges.
              </p>
            </CardContent>
          </PremiumCard>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {navigationCards.map((card, index) => (
            <PremiumCard 
              key={card.id}
              onClick={() => setActiveSection(card.id)}
              delay={index * 100}
            >
              <CardContent className="p-10 text-center">
                <card.icon className="w-12 h-12 mx-auto mb-6 text-black transform-gpu transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-black font-black text-2xl tracking-wide">
                  {card.title.toUpperCase()}
                </h3>
              </CardContent>
            </PremiumCard>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAboutSection = () => (
    <div className="min-h-screen flex items-center justify-center px-4 relative">
      <MinimalBackground />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-6xl md:text-8xl font-black text-center mb-20 text-white tracking-tight">
          ABOUT
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <PremiumCard delay={200}>
            <CardContent className="p-12">
              <h3 className="text-4xl font-black text-black mb-10 tracking-wide">
                BACKGROUND
              </h3>
              <div className="space-y-10">
                <div>
                  <h4 className="text-2xl font-black text-black mb-4 tracking-wide">EDUCATION</h4>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    B.E. in Computer Science<br />
                    <span className="font-bold">R.V. Institute of Technology and Management (RVITM), 2025</span>
                  </p>
                </div>
                <div>
                  <h4 className="text-2xl font-black text-black mb-4 tracking-wide">EXPERIENCE</h4>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Developer Intern, <span className="font-black">Philips</span><br />
                    July 2024 – June 2025
                  </p>
                </div>
              </div>
            </CardContent>
          </PremiumCard>
          
          <PremiumCard delay={400}>
            <CardContent className="p-12">
              <h3 className="text-4xl font-black text-black mb-10 tracking-wide">
                VISION
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-10">
                I'm passionate about leveraging cutting-edge AI and ML technologies to solve complex real-world problems. 
                My research background combined with hands-on development experience allows me to bridge the gap between 
                theoretical knowledge and practical implementation.
              </p>
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-black tracking-wide rounded-none transform-gpu transition-all duration-300 hover:scale-105">
                <Download className="w-5 h-5 mr-2" />
                DOWNLOAD RESUME
              </Button>
            </CardContent>
          </PremiumCard>
        </div>
      </div>
    </div>
  );

  const renderSkillsSection = () => (
    <div className="min-h-screen flex items-center justify-center px-4 relative">
      <MinimalBackground />
      
      <div className="max-w-8xl mx-auto relative z-10">
        <h2 className="text-6xl md:text-8xl font-black text-center mb-20 text-white tracking-tight">
          SKILLS
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <PremiumCard key={category} delay={index * 100}>
              <CardContent className="p-10">
                <h3 className="text-3xl font-black text-black mb-8 capitalize tracking-wide">
                  {category === "specialized" ? "AI/ML" : category.toUpperCase()}
                </h3>
                <div className="space-y-4">
                  {skillList.map((skill, skillIndex) => (
                    <div key={skill} className="group">
                      <div className="bg-gray-100 border border-gray-200 rounded-lg px-6 py-4 transform-gpu transition-all duration-300 hover:bg-black hover:text-white hover:scale-105">
                        <div className="flex items-center justify-between">
                          <span className="font-bold tracking-wide">
                            {skill}
                          </span>
                          <div className="w-16 h-2 bg-gray-300 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-black rounded-full transition-all duration-1000"
                              style={{ 
                                width: `${85 + Math.random() * 15}%`,
                                animationDelay: `${(index * skillList.length + skillIndex) * 0.1}s`
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </PremiumCard>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProjectsSection = () => (
    <div className="min-h-screen flex items-center justify-center px-4 relative">
      <MinimalBackground />
      
      <div className="max-w-8xl mx-auto relative z-10">
        <h2 className="text-6xl md:text-8xl font-black text-center mb-20 text-white tracking-tight">
          PROJECTS
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <PremiumCard key={index} delay={index * 200}>
              <CardContent className="p-12">
                <div className="flex items-center mb-8">
                  <Rocket className="w-10 h-10 text-black mr-4" />
                  <div className="bg-black text-white px-4 py-2 font-bold text-sm tracking-wide">
                    {project.role.toUpperCase()}
                  </div>
                </div>
                
                <h3 className="text-3xl font-black text-black mb-8 leading-tight tracking-wide">
                  {project.title.toUpperCase()}
                </h3>
                
                <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="inline-block text-sm font-bold text-black bg-gray-100 border border-gray-300 px-4 py-2 rounded-lg hover:bg-black hover:text-white transition-all duration-300 tracking-wide"
                    >
                      {tech.toUpperCase()}
                    </span>
                  ))}
                </div>
                
                <Button className="bg-black text-white hover:bg-gray-800 px-6 py-3 font-black tracking-wide rounded-none transform-gpu transition-all duration-300 hover:scale-105">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  VIEW DETAILS
                </Button>
              </CardContent>
            </PremiumCard>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContactSection = () => (
    <div className="min-h-screen flex items-center justify-center px-4 relative">
      <MinimalBackground />
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-6xl md:text-8xl font-black mb-20 text-white tracking-tight">
          CONTACT
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
            <PremiumCard key={contact.title} delay={index * 150}>
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 mx-auto bg-black rounded-full flex items-center justify-center shadow-lg mb-8 transform-gpu transition-all duration-500 group-hover:scale-110">
                  <contact.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-black font-black text-2xl mb-6 tracking-wide">
                  {contact.title}
                </h3>
                
                <a 
                  href={contact.href}
                  target={contact.href.startsWith('http') ? "_blank" : undefined}
                  rel={contact.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="text-gray-700 hover:text-black transition-all duration-300 text-lg font-bold hover:underline tracking-wide"
                >
                  {contact.content}
                </a>
              </CardContent>
            </PremiumCard>
          ))}
        </div>
        
        <PremiumCard delay={500}>
          <CardContent className="p-12">
            <p className="text-2xl text-black leading-relaxed font-medium">
              Open to exciting opportunities in{" "}
              <span className="font-black">AI/ML</span> and{" "}
              <span className="font-black">Software Development</span>
            </p>
          </CardContent>
        </PremiumCard>
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
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-black/90 border-b border-white/10">
        <div className="max-w-8xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => setActiveSection("home")}
              className="text-2xl font-black text-white hover:text-gray-300 transition-all duration-300 tracking-wide"
            >
              RUSHI KEDHAR
            </button>
            
            <div className="hidden md:flex space-x-2">
              {["home", ...navigationCards.map(card => card.id)].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`capitalize px-6 py-3 transition-all duration-300 font-black tracking-wide ${
                    activeSection === section 
                      ? "bg-white text-black" 
                      : "text-white hover:text-gray-300 hover:bg-white/10"
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
            transform: `translateY(${mousePosition.y * 2}px) translateX(${mousePosition.x * 1}px)` 
          }}
        >
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default Index;
