
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Download, ExternalLink, Menu, X } from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "resume", "blog", "contact"];
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const skills = {
    languages: ["Python", "C", "Java", "HTML", "CSS", "JavaScript"],
    tools: ["Pandas", "NumPy", "Power BI", "Excel", "Tableau", "SQL", "Git", "GitHub", "MongoDB", "VS Code"],
    concepts: ["Data Analysis", "Machine Learning Basics", "Data Visualization", "DSA", "DBMS", "Operating Systems"]
  };

  const projects = [
    {
      title: "Plastic Waste Tracker",
      description: "A comprehensive data science project tracking plastic waste through community data collection and analysis. Submitted for YUKTI competition.",
      tech: ["Python", "Data Analysis", "Visualization"],
      status: "YUKTI Submission"
    },
    {
      title: "SugandhaVatika",
      description: "Modern e-commerce website with dynamic shopping cart functionality and smooth UI animations built with JavaScript.",
      tech: ["JavaScript", "HTML", "CSS", "UI/UX"],
      status: "Completed"
    },
    {
      title: "Smart Women Safety App",
      description: "Machine learning model for detecting isolated unsafe areas for women using geolocation data and safety analytics.",
      tech: ["Machine Learning", "Python", "Data Processing"],
      status: "In Development"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-800">Nagasri Kola</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Projects", "Resume", "Blog", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.toLowerCase() ? "text-blue-600" : "text-slate-600"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["Home", "About", "Skills", "Projects", "Resume", "Blog", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-600 w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section id="home" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-6xl font-bold text-slate-800 mb-6">
              Nagasri Kola
            </h1>
            <div className="text-xl sm:text-2xl text-blue-600 font-semibold mb-6">
              Data Analyst | CSE Student | Tech Enthusiast
            </div>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Transforming data into insights, one project at a time.
            </p>
            <div className="flex justify-center space-x-4">
              <Button onClick={() => scrollToSection("projects")} size="lg" className="hover:scale-105 transition-transform">
                View My Work
              </Button>
              <Button variant="outline" onClick={() => scrollToSection("contact")} size="lg" className="hover:scale-105 transition-transform">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">About Me</h2>
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                I'm a passionate third-year Computer Science student at <strong>Sasi Institute of Technology and Engineering</strong> 
                with a CGPA of <strong>8.52/10</strong>. My journey in technology is driven by an insatiable curiosity for data 
                and its power to solve real-world problems.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                I love working with data, building meaningful projects, and continuously learning about emerging technologies. 
                My passion lies in data analytics, where I enjoy uncovering patterns and insights that can drive decision-making 
                and create positive impact.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                When I'm not coding or analyzing data, you'll find me exploring the latest tech trends, contributing to open-source 
                projects, or sharing my knowledge with the community.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <Badge key={skill} variant="secondary" className="hover:bg-blue-100 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-green-600">Libraries & Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="secondary" className="hover:bg-green-100 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-purple-600">Concepts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.concepts.map((skill) => (
                    <Badge key={skill} variant="secondary" className="hover:bg-purple-100 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm text-slate-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full group">
                    View Details
                    <ExternalLink size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-12">Experience & Resume</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">Android Developer Intern</CardTitle>
                <CardDescription>India Edu Program</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Built mobile applications using Kotlin with Firebase integration, 
                  focusing on user experience and backend connectivity.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-green-600">Machine Learning Intern</CardTitle>
                <CardDescription>SkillDzire</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Developed machine learning models, worked extensively with datasets, 
                  and implemented data preprocessing techniques.
                </p>
              </CardContent>
            </Card>
          </div>

          <Button size="lg" className="hover:scale-105 transition-transform">
            <Download size={20} className="mr-2" />
            Download Resume
          </Button>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Blog</h2>
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-12">
              <div className="text-6xl mb-6">✍️</div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Coming Soon!</h3>
              <p className="text-lg text-slate-600 mb-6">
                I'm preparing to share insights on data analytics, tech trends, and learning paths. 
                Stay tuned for articles that blend technical expertise with practical applications.
              </p>
              <Button variant="outline">
                Subscribe for Updates
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Let's Connect!</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-6">Get in Touch</h3>
              <p className="text-slate-700 mb-8">
                I'm always excited to discuss data projects, collaboration opportunities, 
                or just chat about technology and innovation.
              </p>
              
              <div className="space-y-4">
                <a
                  href="https://github.com/nagasrikola"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-slate-700 hover:text-blue-600 transition-colors group"
                >
                  <Github size={24} className="group-hover:scale-110 transition-transform" />
                  <span>github.com/nagasrikola</span>
                </a>
                
                <a
                  href="https://linkedin.com/in/nagasrikola"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-slate-700 hover:text-blue-600 transition-colors group"
                >
                  <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
                  <span>linkedin.com/in/nagasrikola</span>
                </a>
                
                <div className="flex items-center space-x-3 text-slate-700">
                  <Mail size={24} />
                  <span>nagasrikola@email.com</span>
                </div>
              </div>
            </div>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Your Name" />
                <Input placeholder="Your Email" type="email" />
                <Input placeholder="Subject" />
                <Textarea placeholder="Your Message" rows={4} />
                <Button className="w-full hover:scale-105 transition-transform">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-300 mb-4">
            © 2024 Nagasri Kola. Transforming data into insights.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/nagasrikola"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/nagasrikola"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:nagasrikola@email.com"
              className="text-slate-300 hover:text-white transition-colors hover:scale-110 transform"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
