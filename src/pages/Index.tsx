
import { useState } from "react";
import { Mail, Phone, Linkedin, User, Zap, Rocket, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navigationCards = [
    { id: "about", title: "About", icon: User, emoji: "👨‍💻" },
    { id: "skills", title: "Skills", icon: Zap, emoji: "⚡" },
    { id: "projects", title: "Projects", icon: Rocket, emoji: "🚀" },
    { id: "contact", title: "Contact", icon: FileText, emoji: "📧" },
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

  const renderHomeSection = () => (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="mb-8 relative">
          <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-500 p-1 bg-gradient-to-r from-blue-500 to-purple-500">
            <img 
              src="https://i.postimg.cc/pLmdrVmr/Whats-App-Image-2025-06-17-at-21-27-58.jpg" 
              alt="Rushi Kedhar Konduru"
              className="w-full h-full object-cover rounded-full bg-white"
            />
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-900 animate-pulse"></div>
        </div>

        {/* Name with gradient effect */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
          <span className="text-white">Rushi Kedhar</span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            Konduru
          </span>
        </h1>

        {/* Role */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
          AI/ML Engineer | Software Developer
        </p>

        {/* Description */}
        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Enthusiastic Computer Science professional with expertise in{" "}
          <span className="text-blue-400 font-semibold">Artificial Intelligence</span>,{" "}
          <span className="text-purple-400 font-semibold">Machine Learning</span>, and software development. 
          Published research and delivered impactful projects, including AI-driven solutions for real-world challenges. 
          Skilled in <span className="text-cyan-400 font-semibold">Python</span>,{" "}
          <span className="text-green-400 font-semibold">TensorFlow</span>, and{" "}
          <span className="text-pink-400 font-semibold">NLP</span>, with a strong commitment to innovation and problem-solving.
        </p>

        {/* Navigation Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {navigationCards.map((card, index) => (
            <Card 
              key={card.id}
              className="bg-gray-900/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group hover:scale-105 backdrop-blur-sm"
              onClick={() => setActiveSection(card.id)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {card.emoji}
                </div>
                <h3 className="text-white font-semibold text-lg group-hover:text-blue-400 transition-colors">
                  {card.title}
                </h3>
                <div className="mt-3 text-gray-400 group-hover:text-white transition-colors">
                  <card.icon className="w-5 h-5 mx-auto" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAboutSection = () => (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Background</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">Education</h4>
                    <p className="text-gray-300">
                      B.E. in Computer Science<br />
                      R.V. Institute of Technology and Management (RVITM), 2025
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-2">Experience</h4>
                    <p className="text-gray-300">
                      Developer Intern, Philips<br />
                      July 2024 – June 2025
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Passion & Vision</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I'm passionate about leveraging cutting-edge AI and ML technologies to solve complex real-world problems. 
                  My research background combined with hands-on development experience allows me to bridge the gap between 
                  theoretical knowledge and practical implementation.
                </p>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0">
                  Download Resume
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSkillsSection = () => (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <Card key={category} className="bg-gray-900/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm group">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 capitalize group-hover:text-blue-400 transition-colors">
                  {category === "specialized" ? "AI/ML" : category}
                </h3>
                <div className="space-y-3">
                  {skillList.map((skill, skillIndex) => (
                    <div key={skill} className="flex items-center justify-between">
                      <span className="text-gray-300 group-hover:text-white transition-colors">{skill}</span>
                      <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000"
                          style={{ 
                            width: `${85 + Math.random() * 15}%`,
                            animationDelay: `${(index * skillList.length + skillIndex) * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProjectsSection = () => (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 group hover:scale-105 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Rocket className="w-8 h-8 text-blue-400 mr-3 group-hover:text-purple-400 transition-colors" />
                  <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                    {project.role}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs text-blue-300 bg-blue-900/30 px-3 py-1 rounded-full border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContactSection = () => (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Connect
          </span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-gray-900/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 group hover:scale-105 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:text-purple-400 transition-colors" />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <a href="mailto:rushikedhar.k@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                rushikedhar.k@gmail.com
              </a>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-900/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 group hover:scale-105 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <Phone className="w-12 h-12 text-green-400 mx-auto mb-4 group-hover:text-blue-400 transition-colors" />
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <a href="tel:+919692943871" className="text-gray-300 hover:text-green-400 transition-colors">
                +91-9692943871
              </a>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-900/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 group hover:scale-105 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <Linkedin className="w-12 h-12 text-blue-500 mx-auto mb-4 group-hover:text-purple-400 transition-colors" />
              <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
              <a 
                href="https://linkedin.com/in/rushi-kedhar-329011222/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                View Profile
              </a>
            </CardContent>
          </Card>
        </div>
        
        <p className="text-gray-400 text-lg">
          Open to exciting opportunities in AI/ML and Software Development
        </p>
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => setActiveSection("home")}
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:from-purple-400 hover:to-blue-500 transition-all"
            >
              Rushi Kedhar
            </button>
            
            <div className="hidden md:flex space-x-8">
              {["home", ...navigationCards.map(card => card.id)].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`capitalize px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === section 
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white" 
                      : "text-gray-300 hover:text-white hover:bg-gray-800"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
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
