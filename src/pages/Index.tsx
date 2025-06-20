
import { useState, useEffect } from "react";
import { Mail, Phone, Linkedin, User, Code, Rocket, FileText, Download, ExternalLink, Menu, X, Github, MapPin } from "lucide-react";
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      title: "Programming Languages",
      items: ["Python", "Java", "C", "JavaScript", "TypeScript"],
      icon: Code,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "AI & Machine Learning",
      items: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Computer Vision"],
      icon: Rocket,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Web Technologies",
      items: ["React", "Node.js", "HTML/CSS", "PHP", "REST APIs"],
      icon: User,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Tools & Platforms",
      items: ["Git", "Docker", "AWS", "MySQL", "Linux", "VS Code"],
      icon: FileText,
      color: "from-orange-500 to-orange-600"
    }
  ];

  const projects = [
    {
      title: "AI-Driven Self-Driving Car Enhancement",
      description: "Developed AI solutions for edge cases in autonomous vehicles using computer vision and ML algorithms. Implemented safety protocols and improved reliability through advanced simulation frameworks.",
      technologies: ["Python", "Computer Vision", "Machine Learning", "TensorFlow", "OpenCV"],
      role: "Lead Developer",
      type: "AI/ML Project",
      year: "2024"
    },
    {
      title: "Neural Network Character Recognition System",
      description: "Built a NN-Fuzzy Logic Control system achieving 99.8% accuracy in character recognition. Published research in Elsevier Procedia-Computer Science with conference presentation.",
      technologies: ["Neural Networks", "Fuzzy Logic", "Pattern Recognition", "Python", "Research"],
      role: "Research Lead",
      type: "Research Project",
      year: "2023"
    }
  ];

  // Background Grid Pattern
  const BackgroundPattern = () => (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)
          `,
          backgroundSize: '24px 24px'
        }}
      />
    </div>
  );

  // Modern Card Component
  const ModernCard = ({ children, className = "", delay = 0, animationId, index = 0 }: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    animationId?: string;
    index?: number;
  }) => {
    const isVisible = animationId ? visibleElements.has(animationId) : true;
    
    return (
      <div
        id={animationId}
        data-animate={animationId ? "true" : undefined}
        className={`
          relative bg-[#111111] border border-[#222222] rounded-2xl
          transition-all duration-500 hover:bg-[#151515] hover:border-[#333333]
          hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-2
          ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}
          ${className}
        `}
        style={{
          animationDelay: `${delay + (index * 100)}ms`,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)'
        }}
      >
        {children}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative">
      <BackgroundPattern />
      
      {/* Modern Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#222222]' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-2xl font-black text-white hover:text-blue-400 transition-colors"
            >
              Rushi Kedhar
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
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500 rounded-full" />
                  )}
                </button>
              ))}
              <a 
                href="https://drive.google.com/file/d/1Ga12SDxO6fXKCDKhbcn208NiievE43Co/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-105"
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
                className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300"
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
                  Passionate about leveraging cutting-edge AI and ML technologies to solve complex real-world problems. 
                  Published researcher with hands-on experience in autonomous systems and neural networks.
                </p>
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
                <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-3xl overflow-hidden border-4 border-[#222222] shadow-2xl">
                  <img 
                    src="https://i.postimg.cc/pLmdrVmr/Whats-App-Image-2025-06-17-at-21-27-58.jpg" 
                    alt="Rushi Kedhar"
                    className="w-full h-full object-cover scale-110"
                    style={{ 
                      objectPosition: 'center 20%',
                      filter: 'brightness(1.1) contrast(1.05)'
                    }}
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
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ModernCard 
                key={index} 
                animationId={`project-${index}`}
                delay={200}
                index={index}
                className="group cursor-pointer"
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-semibold text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
                      {project.type}
                    </span>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-sm text-gray-300 bg-[#1a1a1a] border border-[#333333] px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">{project.role}</span>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                </CardContent>
              </ModernCard>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <ModernCard 
                key={index} 
                animationId={`skill-${index}`}
                delay={100}
                index={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${skill.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {skill.title}
                  </h3>
                  
                  <div className="space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="text-gray-400 text-sm bg-[#1a1a1a] border border-[#333333] px-3 py-2 rounded-lg group-hover:bg-[#222222] group-hover:border-[#444444] transition-all duration-200"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </ModernCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Open to exciting opportunities in AI/ML and Software Development. 
            Let's build something amazing together!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Mail,
                title: "Email",
                content: "rushikedhar.k@gmail.com",
                href: "mailto:rushikedhar.k@gmail.com",
                color: "from-red-500 to-red-600"
              },
              {
                icon: Phone,
                title: "Phone",
                content: "+91 9652543871",
                href: "tel:+919652543871",
                color: "from-green-500 to-green-600"
              },
              {
                icon: Linkedin,
                title: "LinkedIn",
                content: "Connect with me",
                href: "https://linkedin.com/in/rushi-kedhar-329011222/",
                color: "from-blue-500 to-blue-600"
              }
            ].map((contact, index) => (
              <ModernCard 
                key={contact.title} 
                animationId={`contact-${index}`}
                delay={100}
                index={index}
                className="group cursor-pointer"
              >
                <a href={contact.href} target={contact.href.startsWith('http') ? "_blank" : undefined} rel={contact.href.startsWith('http') ? "noopener noreferrer" : undefined}>
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <contact.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="font-bold text-xl text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {contact.title}
                    </h3>
                    
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {contact.content}
                    </p>
                  </CardContent>
                </a>
              </ModernCard>
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
            © 2025 Rushi Kedhar. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
