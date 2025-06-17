
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
    { id: "about", title: "About", icon: User, emoji: "👨‍💻", color: "from-cyan-400 to-blue-500" },
    { id: "skills", title: "Skills", icon: Zap, emoji: "⚡", color: "from-purple-400 to-pink-500" },
    { id: "projects", title: "Projects", icon: Rocket, emoji: "🚀", color: "from-green-400 to-emerald-500" },
    { id: "contact", title: "Contact", icon: FileText, emoji: "📧", color: "from-orange-400 to-red-500" },
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
      role: "Lead Developer",
      gradient: "from-blue-500 via-purple-500 to-pink-500"
    },
    {
      title: "Decision Making and Recognition of String Characters",
      description: "NN-Fuzzy Logic Control system achieving 99.8% recognition accuracy. Published research in Elsevier Procedia-Computer Science with conference presentation.",
      technologies: ["Neural Networks", "Fuzzy Logic", "Pattern Recognition", "Python"],
      role: "Research Lead",
      gradient: "from-emerald-500 via-cyan-500 to-blue-500"
    }
  ];

  const ParticleBackground = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating Orbs */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse opacity-60`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}
      
      {/* Geometric Shapes */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`geo-${i}`}
          className="absolute w-32 h-32 border border-cyan-500/20 rotate-45 animate-spin opacity-30"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + i * 12}%`,
            animationDuration: `${20 + i * 5}s`,
            transform: `rotate(${i * 60}deg) scale(${0.5 + Math.random() * 0.5})`,
          }}
        />
      ))}

      {/* Parallax Lines */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
            style={{
              width: `${200 + Math.random() * 400}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translateX(${mousePosition.x * 20}px) translateY(${mousePosition.y * 10}px)`,
              opacity: 0.3 + Math.random() * 0.3,
            }}
          />
        ))}
      </div>
    </div>
  );

  const GlassCard = ({ children, className = "", onClick, delay = 0 }) => (
    <Card 
      className={`
        relative group cursor-pointer transition-all duration-700 transform-gpu
        bg-gradient-to-br from-white/10 via-white/5 to-transparent
        backdrop-blur-xl border border-white/20 shadow-2xl
        hover:scale-105 hover:rotate-1 hover:shadow-cyan-500/25
        before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500
        hover:before:opacity-100 overflow-hidden
        ${className}
      `}
      onClick={onClick}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        {children}
      </div>
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </Card>
  );

  const renderHomeSection = () => (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <ParticleBackground />
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 20}px)` }}
        />
        <div 
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{ 
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -15}px)`,
            animationDelay: '2s' 
          }}
        />
      </div>

      <div className="text-center z-10 px-4 max-w-5xl mx-auto">
        {/* 3D Profile Image with Floating Ring */}
        <div className="mb-12 relative group">
          <div className="relative w-48 h-48 mx-auto">
            {/* Floating Rings */}
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-spin" style={{ animationDuration: '20s' }} />
            <div className="absolute inset-2 rounded-full border border-purple-400/30 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
            
            {/* Main Image Container */}
            <div className="relative w-full h-full transform-gpu transition-all duration-700 hover:scale-110 hover:rotate-3">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-1 shadow-2xl shadow-cyan-500/25">
                <img 
                  src="https://i.postimg.cc/pLmdrVmr/Whats-App-Image-2025-06-17-at-21-27-58.jpg" 
                  alt="Rushi Kedhar Konduru"
                  className="w-full h-full object-cover rounded-full bg-gray-900"
                />
              </div>
              
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            
            {/* Status Indicator */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-4 border-gray-900 animate-pulse shadow-lg shadow-green-500/50" />
          </div>
        </div>

        {/* 3D Name with Glass Effect */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-black mb-4 relative">
            <span className="block text-white drop-shadow-2xl transform-gpu transition-all duration-500 hover:scale-105">
              Rushi Kedhar
            </span>
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent animate-pulse relative">
              Konduru
              {/* Glass highlight effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
            </span>
          </h1>
        </div>

        {/* 3D Role Badge */}
        <div className="mb-12">
          <div className="inline-block relative group">
            <div className="bg-gradient-to-r from-gray-900/80 via-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-white/20 px-8 py-4 rounded-2xl shadow-2xl shadow-cyan-500/25 transform-gpu transition-all duration-500 hover:scale-105 hover:shadow-purple-500/25">
              <p className="text-xl md:text-2xl text-white font-semibold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                AI/ML Engineer | Software Developer
              </p>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          </div>
        </div>

        {/* Enhanced Description */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto relative">
            <div className="bg-gradient-to-br from-gray-900/60 via-gray-800/40 to-gray-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Enthusiastic Computer Science professional with expertise in{" "}
                <span className="text-cyan-400 font-bold relative">
                  Artificial Intelligence
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent" />
                </span>,{" "}
                <span className="text-purple-400 font-bold relative">
                  Machine Learning
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-transparent" />
                </span>, and software development. 
                Published research and delivered impactful projects, including AI-driven solutions for real-world challenges. 
                Skilled in <span className="text-emerald-400 font-bold">Python</span>,{" "}
                <span className="text-blue-400 font-bold">TensorFlow</span>, and{" "}
                <span className="text-pink-400 font-bold">NLP</span>, with a strong commitment to innovation and problem-solving.
              </p>
            </div>
          </div>
        </div>

        {/* 3D Navigation Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {navigationCards.map((card, index) => (
            <GlassCard 
              key={card.id}
              onClick={() => setActiveSection(card.id)}
              delay={index * 150}
              className="transform-gpu perspective-1000"
            >
              <CardContent className="p-8 text-center relative">
                {/* 3D Icon Container */}
                <div className="relative mb-6 group-hover:scale-110 transition-transform duration-500">
                  <div className={`text-6xl mb-4 filter drop-shadow-2xl transform-gpu transition-all duration-500 group-hover:rotate-12`}>
                    {card.emoji}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Title with Gradient */}
                <h3 className={`text-white font-bold text-xl mb-4 bg-gradient-to-r ${card.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                  {card.title}
                </h3>
                
                {/* 3D Icon */}
                <div className="relative">
                  <card.icon className="w-6 h-6 mx-auto text-gray-400 group-hover:text-white transition-all duration-300 transform-gpu group-hover:scale-110 group-hover:rotate-12" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </CardContent>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAboutSection = () => (
    <div className="min-h-screen flex items-center justify-center px-4 relative">
      <ParticleBackground />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-7xl font-black text-center mb-16 relative">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-2xl">
            About Me
          </span>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full" />
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <GlassCard delay={200}>
            <CardContent className="p-10">
              <h3 className="text-3xl font-bold text-white mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Background
              </h3>
              <div className="space-y-8">
                <div className="relative group">
                  <div className="absolute -left-4 top-2 w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse" />
                  <h4 className="text-xl font-bold text-cyan-400 mb-3 ml-4">Education</h4>
                  <p className="text-gray-300 ml-4 leading-relaxed">
                    B.E. in Computer Science<br />
                    <span className="text-purple-300">R.V. Institute of Technology and Management (RVITM), 2025</span>
                  </p>
                </div>
                <div className="relative group">
                  <div className="absolute -left-4 top-2 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  <h4 className="text-xl font-bold text-purple-400 mb-3 ml-4">Experience</h4>
                  <p className="text-gray-300 ml-4 leading-relaxed">
                    Developer Intern, <span className="text-emerald-300 font-semibold">Philips</span><br />
                    July 2024 – June 2025
                  </p>
                </div>
              </div>
            </CardContent>
          </GlassCard>
          
          <GlassCard delay={400}>
            <CardContent className="p-10">
              <h3 className="text-3xl font-bold text-white mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Passion & Vision
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                I'm passionate about leveraging cutting-edge AI and ML technologies to solve complex real-world problems. 
                My research background combined with hands-on development experience allows me to bridge the gap between 
                theoretical knowledge and practical implementation.
              </p>
              <Button className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 hover:from-cyan-600 hover:via-purple-700 hover:to-pink-700 text-white border-0 px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl shadow-purple-500/25 transform-gpu transition-all duration-500 hover:scale-105 hover:shadow-cyan-500/25">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
              </Button>
            </CardContent>
          </GlassCard>
        </div>
      </div>
    </div>
  );

  const renderSkillsSection = () => (
    <div className="min-h-screen flex items-center justify-center px-4 relative">
      <ParticleBackground />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-7xl font-black text-center mb-16 relative">
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent drop-shadow-2xl">
            Skills & Expertise
          </span>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 rounded-full" />
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <GlassCard key={category} delay={index * 150}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 capitalize bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {category === "specialized" ? "AI/ML" : category}
                </h3>
                <div className="space-y-4">
                  {skillList.map((skill, skillIndex) => (
                    <div key={skill} className="group relative">
                      {/* 3D Skill Chip */}
                      <div className="relative overflow-hidden">
                        <div className="bg-gradient-to-r from-gray-800/80 via-gray-700/80 to-gray-800/80 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 transform-gpu transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 group-hover:border-cyan-400/30">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300 group-hover:text-white transition-colors font-medium">
                              {skill}
                            </span>
                            <div className="w-16 h-2 bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
                              <div 
                                className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000 hover:shadow-lg hover:shadow-cyan-500/50"
                                style={{ 
                                  width: `${85 + Math.random() * 15}%`,
                                  animationDelay: `${(index * skillList.length + skillIndex) * 0.1}s`
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        
                        {/* Hover glow */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
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
    <div className="min-h-screen flex items-center justify-center px-4 relative">
      <ParticleBackground />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-7xl font-black text-center mb-16 relative">
          <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent drop-shadow-2xl">
            Featured Projects
          </span>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 rounded-full" />
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <GlassCard key={index} delay={index * 200} className="group hover:scale-102 hover:rotate-1">
              <CardContent className="p-10">
                {/* Project Header */}
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <Rocket className="w-10 h-10 text-cyan-400 mr-4 group-hover:text-white transition-all duration-300 transform-gpu group-hover:scale-110 group-hover:rotate-12" />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="bg-gradient-to-r from-gray-800/60 to-gray-700/60 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10 shadow-lg">
                    <span className="text-sm text-cyan-300 font-semibold">
                      {project.role}
                    </span>
                  </div>
                </div>
                
                {/* Project Title */}
                <h3 className={`text-2xl font-bold text-white mb-6 group-hover:bg-gradient-to-r group-hover:${project.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500`}>
                  {project.title}
                </h3>
                
                {/* Project Description */}
                <p className="text-gray-300 mb-8 leading-relaxed text-lg group-hover:text-gray-200 transition-colors duration-300">
                  {project.description}
                </p>
                
                {/* Technology Tags */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <div 
                      key={techIndex}
                      className="relative group-hover:scale-105 transition-transform duration-300"
                      style={{ animationDelay: `${techIndex * 0.1}s` }}
                    >
                      <span className="inline-block text-sm text-cyan-300 bg-gradient-to-r from-cyan-900/40 via-blue-900/40 to-purple-900/40 backdrop-blur-sm px-4 py-2 rounded-xl border border-cyan-500/30 shadow-lg font-medium hover:shadow-cyan-500/50 transition-all duration-300">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* View Project Button */}
                <Button className="group relative overflow-hidden bg-gradient-to-r from-gray-800/80 to-gray-700/80 hover:from-cyan-600 hover:to-purple-600 text-white border border-white/20 px-6 py-3 rounded-xl shadow-lg transform-gpu transition-all duration-500 hover:scale-105 hover:shadow-cyan-500/25 backdrop-blur-sm">
                  <ExternalLink className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  View Details
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                </Button>
              </CardContent>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContactSection = () => (
    <div className="min-h-screen flex items-center justify-center px-4 relative">
      <ParticleBackground />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-black mb-16 relative">
          <span className="bg-gradient-to-r from-pink-400 via-rose-500 to-orange-500 bg-clip-text text-transparent drop-shadow-2xl">
            Let's Connect
          </span>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-36 h-1 bg-gradient-to-r from-pink-400 via-rose-500 to-orange-500 rounded-full" />
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Mail,
              title: "Email",
              content: "rushikedhar.k@gmail.com",
              href: "mailto:rushikedhar.k@gmail.com",
              gradient: "from-blue-400 to-cyan-500",
              hoverColor: "hover:text-cyan-400"
            },
            {
              icon: Phone,
              title: "Phone",
              content: "+91-9692943871",
              href: "tel:+919692943871",
              gradient: "from-green-400 to-emerald-500",
              hoverColor: "hover:text-emerald-400"
            },
            {
              icon: Linkedin,
              title: "LinkedIn",
              content: "View Profile",
              href: "https://linkedin.com/in/rushi-kedhar-329011222/",
              gradient: "from-blue-500 to-indigo-600",
              hoverColor: "hover:text-blue-400"
            }
          ].map((contact, index) => (
            <GlassCard key={contact.title} delay={index * 150} className="group hover:rotate-y-6">
              <CardContent className="p-10 text-center relative">
                {/* 3D Icon */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 mx-auto bg-gradient-to-r ${contact.gradient} rounded-2xl flex items-center justify-center shadow-2xl shadow-${contact.gradient.split('-')[1]}-500/25 transform-gpu transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                    <contact.icon className="w-10 h-10 text-white drop-shadow-lg" />
                  </div>
                  <div className={`absolute -inset-2 bg-gradient-to-r ${contact.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`} />
                </div>
                
                {/* Title */}
                <h3 className={`text-white font-bold text-xl mb-4 bg-gradient-to-r ${contact.gradient} bg-clip-text text-transparent`}>
                  {contact.title}
                </h3>
                
                {/* Contact Link */}
                <a 
                  href={contact.href}
                  target={contact.href.startsWith('http') ? "_blank" : undefined}
                  rel={contact.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className={`text-gray-300 ${contact.hoverColor} transition-all duration-300 text-lg font-medium hover:underline transform-gpu hover:scale-105`}
                >
                  {contact.content}
                </a>
              </CardContent>
            </GlassCard>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="relative">
          <div className="bg-gradient-to-br from-gray-900/60 via-gray-800/40 to-gray-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
            <p className="text-gray-300 text-xl leading-relaxed">
              Open to exciting opportunities in{" "}
              <span className="text-cyan-400 font-bold">AI/ML</span> and{" "}
              <span className="text-purple-400 font-bold">Software Development</span>
            </p>
          </div>
        </div>
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-x-hidden">
      {/* 3D Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-gray-900/60 border-b border-white/10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => setActiveSection("home")}
              className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:from-pink-400 hover:via-purple-500 hover:to-cyan-400 transition-all duration-500 transform-gpu hover:scale-105"
            >
              Rushi Kedhar
            </button>
            
            <div className="hidden md:flex space-x-2">
              {["home", ...navigationCards.map(card => card.id)].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`capitalize px-6 py-3 rounded-xl transition-all duration-300 transform-gpu relative overflow-hidden font-semibold ${
                    activeSection === section 
                      ? "bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25" 
                      : "text-gray-300 hover:text-white hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:scale-105"
                  }`}
                >
                  {section}
                  {activeSection === section && (
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content with Parallax */}
      <main className="pt-20 relative">
        <div 
          className="relative transition-all duration-1000 ease-out"
          style={{ 
            transform: `translateY(${mousePosition.y * 5}px) translateX(${mousePosition.x * 2}px)` 
          }}
        >
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default Index;
