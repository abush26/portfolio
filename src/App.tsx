import React, { useState, useEffect } from 'react';
import CaseStudy from './CaseStudy';
import Projects from './components/Projects';
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
        { name: "C#", level: 85 },
        { name: "TypeScript", level: 80 }
      ],
      color: "from-purple-500 to-indigo-500",
      description: "Strong foundation in programming languages and software development."
    },
    {
      category: "Tools",
      icon: <Brain className="w-8 h-8" />,
      items: [
        { name: "Jira", level: 85 },
        { name: "Git", level: 88 },
        { name: "Figma", level: 90 },
        { name: "HubSpot", level: 85 },
        { name: "ClickUp", level: 80 }
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
              I am Yeabsira, a software development student currently pursuing my Bachelor's degree. With strong technical skills and two years of experience as the Embassy Coordinator for Association of African students in India, I have managed diplomatic relations and resolved complex issues for students. I am now eager to transition into a project manager role, leveraging my problem-solving abilities and leadership experience.
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
                    src="image\demo.png\17.png" 
                    alt="Demo Image"
                    className="w-4/5 max-w-md rounded-lg shadow-2xl animate-float"
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
                src="image\demo.png\WhatsApp Image 2025-03-01 at 01.28.03_8a559a4b.jpg" 
                alt="Creative Workspace" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 animate-glow">About Me</h2>
              <p className="text-gray-400 mb-6">
              I have a passion for technology and leadership, combining software development expertise with hands-on experience in project coordination. My journey has been a mix of coding, managing teams, and ensuring smooth operations in high-pressure environments. I thrive in fast-paced settings where I can apply my analytical thinking and problem-solving skills to drive success.

Over the past two years, I have worked closely with embassies, universities, and student organizations, leading initiatives to support African students in India. This experience has strengthened my ability to handle negotiations, organize large-scale events, and communicate effectively with stakeholders at all levels.

I enjoy working with diverse teams, solving challenges, and bringing ideas to life through efficient planning and execution. My goal is to bridge the gap between technical development and project management to drive impactful solutions and contribute to innovative projects that make a difference.
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
              title="Cross-Cultural Communication Framework"
              duration="4 months"
              impact="Improved communication efficiency by 60%"
              description="I led a cross-functional team through agile event planning cycles, focusing on improving communication between international students and embassy officials. To address challenges such as language barriers and cultural differences, I segmented stakeholders, including embassy representatives, students, sponsors, and cultural organizations, based on their specific needs and expectations. I created a detailed communication plan, ensuring each stakeholder received timely and relevant updates. By implementing multilingual documentation, cultural training programs, and flexible communication channels, I achieved a 60% improvement in communication efficiency. This was measured by feedback from both embassy officials and students, showing a significant reduction in misunderstandings and an increase in engagement and clarity throughout the process."
              image="image\demo.png\WhatsApp Image 2025-03-01 at 01.10.27_f9978872.jpg"
              imageAlt="Team collaboration in modern office"
              challenges={[
                "Language barriers",
                "Cultural differences",
                "Coordination"
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
            <CaseStudy 
              title="African Day Cultural Celebration"
              duration="3 months"
              impact="500+ attendees, including embassy representatives"
              description="In organizing the African Day Cultural Celebration, I took a systematic approach, segmenting stakeholders such as embassy representatives, sponsors, and cultural organizations by their unique interests and expectations. I created and implemented a stakeholder communication plan, ensuring that every sponsor and embassy was well-informed throughout the planning cycle. Regular updates and feedback loops helped to foster strong partnerships, leading to over 500 attendees and a 95% positive feedback rate."
              image="image\demo.png\IMG_4151.PNG" 
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
                "Successfully hosted 500+ attendees",
                "Secured participation from multiple embassy representatives and institutional partnerships",
                "Achieved 95% positive feedback from attendees",
                "Successfully aligned the project goals with the allocated budget"
              ]}
            />
            <CaseStudy 
              title="African Students Graduation Ceremony"
              duration="5 months"
              impact="800+ graduates and guests"
              description="I served as the overall coordinator, applying a structured project lifecycle (initiation, planning, execution, monitoring) to deliver a culturally rich and organized ceremony. I conducted stakeholder mapping, ensured embassies received the updates they valued most, and facilitated smooth collaboration between teams and institutions. Orchestrated a memorable graduation ceremony celebrating the achievements of African students, bringing together graduates, families, and institutional partners."
              image="image\demo.png\6.jpg"
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
                "Successful ceremony with 800+ attendees",
                "100% graduate participation rate",
                "Smooth coordination of multiple cultural elements",
                "Stayed within budget while delivering a memorable experience"
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
                <h3 className="text-xl font-semibold">Embassy Coordinator</h3>
              </div>
              <p className="text-gray-400 mb-2">Association of African Students in India (AASI)</p>
              <div className="flex items-center text-gray-500 mb-4">
                <Calendar className="mr-2" size={16} />
                <span>2023 - Present</span>
              </div>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Negotiated partnerships with key institutions, including Audi Car and Max Hospital to enhance Africa day event and engagement</li>
                <li>Managed diplomatic relations with over 40 African embassies in India, ensuring strong support for African students</li>
                <li>Organized large-scale events, such as the African Day celebration, fostering cultural exchange and community building</li>
                <li>Improved team communication through new collaboration tools</li>
              </ul>
              {/* Achievement Photo */}
              <div className="mt-6 overflow-hidden rounded-lg">
                <img 
                  src="image\demo.png\WhatsApp Image 2025-03-01 at 13.18.41_67ab9adb.jpg" 
                  alt="Award Ceremony" 
                  className="w-full h-80 object-cover transform hover:scale-105 transition duration-500"
                />
                <p className="text-sm text-gray-500 mt-2">Receiving recognition award for coordinating</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Projects */}
      <section id="projects" className="py-20 px-4 md:px-8 bg-[#0d0d12]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              
            </span>
          </h2>
          <Projects />
        </div>
      </section>

     

     {/* Contact Section */}
      <section id="contact" className={`py-20 bg-black ${isVisible.contact ? 'slide-in' : 'opacity-0'}`}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center animate-glow">Get in Touch</h2>
          <div className="max-w-xl mx-auto">
            <div className="flex justify-center space-x-6 mb-12">
              <a href="mailto:yeabsiraf22@gmail.com" className="group flex flex-col items-center space-y-2 text-gray-400 hover:text-purple-500 transition">
                <div className="p-4 rounded-full bg-gray-900 group-hover:bg-gray-800 transition transform group-hover:scale-110">
                  <Mail className="w-6 h-6" />
                </div>
                <span>Email</span>
              </a>
              <a href="https://github.com/abush26" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center space-y-2 text-gray-400 hover:text-purple-500 transition">
                <div className="p-4 rounded-full bg-gray-900 group-hover:bg-gray-800 transition transform group-hover:scale-110">
                  <Github className="w-6 h-6" />
                </div>
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/yeabsira-feleke-29a988286/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center space-y-2 text-gray-400 hover:text-purple-500 transition">
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
                <a href="https://github.com/abush26" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/yeabsira-feleke-29a988286/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:yeabsiraf22@gmail.com" className="text-gray-400 hover:text-purple-400 transition">
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