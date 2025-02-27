import React, { useState, useEffect } from 'react';
import CaseStudy from './CaseStudy';
import { 
  Briefcase, 
  Calendar, 
  Mail, 
  Github, 
  Linkedin, 
  Target,
  Workflow,
  Users,
  Brain,
  Menu,
  X,
  Heart,
  Coffee,
  Code
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  // Skills data
  const skills = [
    {
      category: "Frontend",
      icon: <Code className="w-8 h-8" />,
      items: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 88 },
        { name: "Next.js", level: 85 },
        { name: "Angular.js", level: 82 },
        { name: "Bootstrap", level: 90 },
        { name: "Tailwind CSS", level: 88 }
      ],
      color: "from-pink-500 to-rose-500",
      description: "Crafting beautiful and responsive user interfaces with modern web technologies."
    },
    {
      category: "Backend",
      icon: <Target className="w-8 h-8" />,
      items: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "PHP", level: 82 },
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 85 },
        { name: "Flask", level: 80 }
      ],
      color: "from-cyan-500 to-blue-500",
      description: "Building robust and scalable server-side applications and APIs."
    },
    {
      category: "Programming",
      icon: <Coffee className="w-8 h-8" />,
      items: [
        { name: "Python", level: 88 },
        { name: "Java", level: 82 },
        { name: "Git", level: 85 },
        { name: "Machine Learning", level: 80 }
      ],
      color: "from-purple-500 to-indigo-500",
      description: "Strong foundation in programming languages and software development."
    },
    {
      category: "Tools",
      icon: <Brain className="w-8 h-8" />,
      items: [
        { name: "Figma", level: 85 },
        { name: "Git", level: 88 },
        { name: "VS Code", level: 90 },
        { name: "DevTools", level: 85 }
      ],
      color: "from-amber-500 to-orange-500",
      description: "Proficient with modern development tools and workflows."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/95 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-2xl font-bold animate-glow bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Yeabsira F.
            </a>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-400 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#" className="nav-link text-gray-300 hover:text-purple-400 transition">Home</a>
              <a href="#about" className="nav-link text-gray-300 hover:text-purple-400 transition">About</a>
              <a href="#skills" className="nav-link text-gray-300 hover:text-purple-400 transition">Skills</a>
              <a href="#caseStudies" className="nav-link text-gray-300 hover:text-purple-400 transition">Case Studies</a>
              <a href="#experience" className="nav-link text-gray-300 hover:text-purple-400 transition">Experience</a>
              <a href="#projects" className="nav-link text-gray-300 hover:text-purple-400 transition">Projects</a>
              <a href="#contact" className="nav-link text-gray-300 hover:text-purple-400 transition">Contact</a>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4`}>
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-300 hover:text-purple-400 transition">Home</a>
              <a href="#about" className="text-gray-300 hover:text-purple-400 transition">About</a>
              <a href="#skills" className="text-gray-300 hover:text-purple-400 transition">Skills</a>
              <a href="#Case Studies" className="text-gray-300 hover:text-purple-400 transition">Case Studies</a>
              <a href="#experience" className="text-gray-300 hover:text-purple-400 transition">Experience</a>
              <a href="#projects" className="text-gray-300 hover:text-purple-400 transition">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-purple-400 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsla(271, 81.30%, 55.90%, 0.10),transparent_70%)]"></div>
        <div className="container mx-auto px-6 pt-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-in z-10">
              <h1 className="text-5xl font-bold mb-4 animate-glow bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                YEABSIRA FELEKE
              </h1>
              <h2 className="text-2xl mb-6 text-gray-300">Junior Project Manager</h2>
              <p className="text-xl text-gray-400 mb-8">
              I am Yeabsira, a software development student currently pursuing my Bachelor's degree. With strong technical skills and two years of experience as the Embassy Coordinator for AASI, I have managed diplomatic relations and resolved complex issues for students. I am now eager to transition into a project manager role, leveraging my problem-solving abilities and leadership experience.
              </p>
              <div className="flex space-x-4">
                <a href="#contact" className="group relative px-6 py-3 rounded-lg font-medium overflow-hidden">
                  <div className="absolute inset-0 w-full h-full transition-all duration-300 ease-out bg-gradient-to-r from-purple-600 to-pink-600 group-hover:bg-gradient-to-r group-hover:from-purple-700 group-hover:to-pink-700"></div>
                  <span className="relative">Get in Touch</span>
                </a>
                <a href="#experience" className="group relative px-6 py-3 rounded-lg font-medium overflow-hidden">
                  <div className="absolute inset-0 w-0 bg-purple-600/10 transition-all duration-300 ease-out group-hover:w-full"></div>
                  <div className="absolute inset-0 w-full h-full border border-purple-600"></div>
                  <span className="relative">View Experience</span>
                </a>
              </div>
            </div>
            <div className="relative z-10">
              <div className="relative w-3/4 mx-auto">
                {/* Image Wrapper */}
                <div className="relative">
                  {/* Main Image */}
                  <img 
                    src="image/demo.png/img-Photoroom.png" 
                    alt="Demo Image"
                    className="rounded-lg shadow-2xl animate-float"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent opacity-60"></div>

                  {/* Bottom Shadow Overlay */}
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent to-black opacity-80 rounded-b-lg pointer-events-none z-20"></div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-10 animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className={`py-20 bg-gray-950 ${isVisible.about ? 'slide-in' : 'opacity-0'}`}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-float">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" 
                alt="Creative Workspace" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 animate-glow">About Me</h2>
              <p className="text-gray-400 mb-6">
                As a Junior Project Manager with 1 year of experience, I bring fresh perspectives and modern methodologies to project management. My focus is on delivering results while fostering team collaboration and maintaining clear communication channels.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2 card-hover bg-black/50 p-3 rounded-lg">
                  <Users className="text-purple-500" />
                  <span>Team Leadership</span>
                </div>
                <div className="flex items-center space-x-2 card-hover bg-black/50 p-3 rounded-lg">
                  <Workflow className="text-purple-500" />
                  <span>Agile Methods</span>
                </div>
                <div className="flex items-center space-x-2 card-hover bg-black/50 p-3 rounded-lg">
                  <Target className="text-purple-500" />
                  <span>Goal-Oriented</span>
                </div>
                <div className="flex items-center space-x-2 card-hover bg-black/50 p-3 rounded-lg">
                  <Brain className="text-purple-500" />
                  <span>Problem Solving</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 bg-black ${isVisible.skills ? 'slide-in' : 'opacity-0'}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center animate-glow">My Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-gray-950 rounded-lg p-6 card-hover transition-all duration-300"
                onClick={() => setSelectedSkill(selectedSkill === index ? null : index)}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${skill.color} mr-4`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{skill.category}</h3>
                </div>
                
                <p className="text-gray-400 mb-4">{skill.description}</p>
                
                {selectedSkill === index && (
                  <div className="space-y-3 mt-4">
                    {skill.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="space-y-1">
                        <div className="flex justify-between">
                          <span>{item.name}</span>
                          <span>{item.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                            style={{ width: `${item.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {selectedSkill !== index && (
                  <button 
                    className="mt-2 text-purple-400 hover:text-purple-300 text-sm"
                  >
                    Show Details →
                  </button>
                )}
                
                {selectedSkill === index && (
                  <button 
                    className="mt-4 text-purple-400 hover:text-purple-300 text-sm"
                  >
                    Hide Details ↑
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="caseStudies" className={`py-20 bg-gray-950 ${isVisible.caseStudies ? 'slide-in' : 'opacity-0'}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center animate-glow">Case Studies</h2>

          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center"></div>  
            
            <CaseStudy 
              title="African Day Cultural Celebration"
              duration="3 months"
              impact="700+ attendees, including embassy representatives"
              description="Successfully organized and managed a large-scale cultural event celebrating African heritage and fostering international relationships."
              image="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              imageAlt="Cultural celebration event with diverse attendees"
              challenges={[
                "Coordinating with multiple embassies and stakeholders",
                "Managing a large-scale venue and logistics",
                "Ensuring cultural authenticity and representation",
                "Budget management and sponsorship coordination"
              ]}
              solutions={[
                "Created dedicated teams for logistics, cultural programming, and stakeholder relations",
                "Implemented comprehensive event management software",
                "Established partnerships with cultural organizations",
                "Developed detailed budget tracking and allocation system"
              ]}
              results={[
                "Successfully hosted 700+ attendees",
                "Secured participation from multiple embassy representatives",
                "Achieved 95% positive feedback from attendees",
                "Strengthened institutional partnerships"
              ]}
            />
            <CaseStudy 
              title="African Students Graduation Ceremony"
              duration="4 months"
              impact="700+ graduates and guests"
              description="Orchestrated a memorable graduation ceremony celebrating the achievements of African students, bringing together graduates, families, and institutional partners."
              image="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              imageAlt="Graduation ceremony celebration"
              challenges={[
                "Coordinating with multiple educational institutions",
                "Managing complex logistics for large attendance",
                "Ensuring proper recognition for all graduates",
                "Handling diverse cultural protocols"
              ]}
              solutions={[
                "Implemented digital registration system",
                "Created detailed event timeline and flow",
                "Established dedicated communication channels",
                "Formed specialized coordination teams"
              ]}
              results={[
                "Successful ceremony with 700+ attendees",
                "100% graduate participation rate",
                "Smooth coordination of multiple cultural elements",
                "Created lasting memories for graduates and families"
              ]}
            />
            
            <CaseStudy 
              title="Cross-Cultural Communication Framework"
              duration="3 months"
              impact="Improved communication efficiency by 60%"
              description="Developed and implemented a framework for effective communication between international students and embassy officials."
              image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              imageAlt="Team collaboration in modern office"
              challenges={[
                "Language barriers",
                "Cultural differences",
                "Time zone coordination"
              ]}
              solutions={[
                "Created multilingual documentation",
                "Established cultural training programs",
                "Implemented flexible communication channels"
              ]}
              results={[
                "60% improvement in communication efficiency",
                "Reduced misunderstandings by 75%",
                "Increased student engagement"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 bg-black ${isVisible.experience ? 'slide-in' : 'opacity-0'}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center animate-glow">Experience</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-950 p-6 rounded-lg card-hover">
              <div className="flex items-center mb-4">
                <Briefcase className="text-purple-500 mr-2" />
                <h3 className="text-xl font-semibold">Junior Project Manager</h3>
              </div>
              <p className="text-gray-400 mb-2">TechCorp Solutions</p>
              <div className="flex items-center text-gray-500 mb-4">
                <Calendar className="mr-2" size={16} />
                <span>2023 - Present</span>
              </div>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Coordinated a major tech conference with 700+ attendees</li>
                <li>Received recognition award for outstanding event management</li>
                <li>Implemented Agile methodologies resulting in 25% faster project delivery</li>
                <li>Improved team communication through new collaboration tools</li>
              </ul>
              {/* Achievement Photo */}
              <div className="mt-6 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?auto=format&fit=crop&q=80" 
                  alt="Award Ceremony" 
                  className="w-full h-48 object-cover transform hover:scale-105 transition duration-500"
                />
                <p className="text-sm text-gray-500 mt-2">Receiving recognition award for coordinating the Tech Innovation Summit 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 bg-gray-950 ${isVisible.projects ? 'slide-in' : 'opacity-0'}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center animate-glow">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-black rounded-lg overflow-hidden card-hover">
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" 
                  alt="E-Commerce Platform" 
                  className="w-full h-48 object-cover transform hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">E-Commerce Platform</h3>
                <p className="text-gray-400 mb-4">
                  Led the development of a modern e-commerce platform, improving sales by 40%.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-900/50 rounded-full text-sm">Agile</span>
                  <span className="px-3 py-1 bg-purple-900/50 rounded-full text-sm">Scrum</span>
                  <span className="px-3 py-1 bg-purple-900/50 rounded-full text-sm">JIRA</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-black rounded-lg overflow-hidden card-hover">
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80" 
                  alt="Team Collaboration Tool" 
                  className="w-full h-48 object-cover transform hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Team Collaboration Tool</h3>
                <p className="text-gray-400 mb-4">
                  Managed the implementation of a new collaboration tool for 50+ team members.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-900/50 rounded-full text-sm">Slack</span>
                  <span className="px-3 py-1 bg-purple-900/50 rounded-full text-sm">Trello</span>
                  <span className="px-3 py-1 bg-purple-900/50 rounded-full text-sm">Teams</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-black rounded-lg overflow-hidden card-hover">
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80" 
                  alt="Mobile App Launch" 
                  className="w-full h-48 object-cover transform hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Mobile App Launch</h3>
                <p className="text-gray-400 mb-4">
                  Coordinated the successful launch of a fitness tracking mobile app.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-900/50 rounded-full text-sm">Mobile</span>
                  <span className="px-3 py-1 bg-purple-900/50 rounded-full text-sm">Agile</span>
                  <span className="px-3 py-1 bg-purple-900/50 rounded-full text-sm">Analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 bg-black ${isVisible.contact ? 'slide-in' : 'opacity-0'}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center animate-glow">Get in Touch</h2>
          <div className="max-w-xl mx-auto">
            <div className="flex justify-center space-x-6 mb-12">
              <a href="mailto:sarah@example.com" className="group flex flex-col items-center space-y-2 text-gray-400 hover:text-purple-500 transition">
                <div className="p-4 rounded-full bg-gray-900 group-hover:bg-gray-800 transition transform group-hover:scale-110">
                  <Mail className="w-6 h-6" />
                </div>
                <span>Email</span>
              </a>
              <a href="https://github.com/sarahanderson" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center space-y-2 text-gray-400 hover:text-purple-500 transition">
                <div className="p-4 rounded-full bg-gray-900 group-hover:bg-gray-800 transition transform group-hover:scale-110">
                  <Github className="w-6 h-6" />
                </div>
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/sarahanderson" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center space-y-2 text-gray-400 hover:text-purple-500 transition">
                <div className="p-4 rounded-full bg-gray-900 group-hover:bg-gray-800 transition transform group-hover:scale-110">
                  <Linkedin className="w-6 h-6" />
                </div>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 py-12 border-t border-gray-800">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-300">About Me</h3>
              <p className="text-gray-400">Junior Project Manager passionate about delivering successful projects and fostering team collaboration.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-300">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                <a href="#about" className="text-gray-400 hover:text-purple-400 transition">About</a>
                <a href="#skills" className="text-gray-400 hover:text-purple-400 transition">Skills</a>
                <a href="#experience" className="text-gray-400 hover:text-purple-400 transition">Experience</a>
                <a href="#projects" className="text-gray-400 hover:text-purple-400 transition">Projects</a>
                <a href="#contact" className="text-gray-400 hover:text-purple-400 transition">Contact</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-300">Let's Connect</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/sarahanderson" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/sarahanderson" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:sarah@example.com" className="text-gray-400 hover:text-purple-400 transition">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="py-6 text-center text-gray-500 border-t border-gray-800">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Heart className="w-4 h-4 text-pink-500" />
              <Coffee className="w-4 h-4 text-purple-500" />
              <Code className="w-4 h-4 text-blue-500" />
            </div>
            <p>© 2025 Yeabsira Feleke. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;