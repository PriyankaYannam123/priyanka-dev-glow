import { useState } from "react";
import { GlassCard } from "@/components/GlassCard";
import { GlowButton } from "@/components/GlowButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ExternalLink, 
  Code, 
  Database, 
  Brain,
  ChevronUp,
  Send,
  Award,
  Terminal,
  BookOpen
} from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.jpg";

const Portfolio = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-6 z-10">
          <div className="text-center animate-slideUp">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 rounded-full overflow-hidden glass-glow animate-float">
                  <img 
                    src={profileAvatar} 
                    alt="Priyanka - Developer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/30 to-accent/30 blur-lg animate-glow"></div>
              </div>
            </div>
            
            <h1 className="text-6xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Priyanka</span>
            </h1>
            <p className="text-2xl text-muted-foreground mb-4 font-light">
              A Passionate Fresher Developer
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              I love building solutions with <span className="text-primary font-mono">Python</span>, 
              <span className="text-primary font-mono"> SQL</span>, and 
              <span className="text-primary font-mono"> NLP</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <GlowButton variant="primary">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </GlowButton>
              <GlowButton variant="secondary" onClick={() => document.getElementById('projects')?.scrollIntoView()}>
                <Code className="w-5 h-5 mr-2" />
                Explore My Projects
              </GlowButton>
            </div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent rounded-full animate-ping animation-delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-ping animation-delay-2000"></div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <GlassCard className="max-w-4xl mx-auto text-center animate-slideUp" glow>
            <h2 className="text-4xl font-bold mb-8 gradient-text">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              As a passionate fresher developer, I'm on an exciting journey of learning and building innovative solutions. 
              My curiosity drives me to explore the fascinating world of data science, machine learning, and web development. 
              I believe in the power of clean code and meaningful projects that solve real-world problems. 
              Every day brings new challenges that fuel my growth as a developer.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="flex flex-col items-center p-4 glass rounded-xl hover:scale-105 transition-transform">
                <Code className="w-12 h-12 text-primary mb-3" />
                <span className="font-mono text-sm">Python</span>
              </div>
              <div className="flex flex-col items-center p-4 glass rounded-xl hover:scale-105 transition-transform">
                <Database className="w-12 h-12 text-primary mb-3" />
                <span className="font-mono text-sm">SQL</span>
              </div>
              <div className="flex flex-col items-center p-4 glass rounded-xl hover:scale-105 transition-transform">
                <Terminal className="w-12 h-12 text-primary mb-3" />
                <span className="font-mono text-sm">HTML/CSS</span>
              </div>
              <div className="flex flex-col items-center p-4 glass rounded-xl hover:scale-105 transition-transform">
                <Brain className="w-12 h-12 text-primary mb-3" />
                <span className="font-mono text-sm">NLP</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">My Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Data Analysis Dashboard",
                description: "Interactive dashboard for data visualization using Python and SQL queries.",
                tech: ["Python", "SQL", "Pandas"],
                github: "#"
              },
              {
                title: "NLP Text Classifier",
                description: "Machine learning model for text classification and sentiment analysis.",
                tech: ["Python", "NLP", "Scikit-learn"],
                github: "#"
              },
              {
                title: "Personal Finance Tracker",
                description: "Web application to track expenses with database integration.",
                tech: ["HTML/CSS", "Python", "SQL"],
                github: "#"
              },
              {
                title: "Weather Data Analyzer",
                description: "Python script to analyze and predict weather patterns from API data.",
                tech: ["Python", "APIs", "Data Analysis"],
                github: "#"
              }
            ].map((project, index) => (
              <GlassCard key={index} hover className="h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-3 text-primary">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-mono bg-primary/20 text-primary rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <GlowButton href={project.github} className="w-full">
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </GlowButton>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ADS Section (Achievements, Dev Tools, Stats) */}
      <section id="ads" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">ADS</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Achievements */}
            <GlassCard glow className="text-center">
              <Award className="w-16 h-16 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Achievements</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Python for Data Science Certified</li>
                <li>NPTEL Database Systems</li>
                <li>Machine Learning Basics</li>
                <li>SQL Fundamentals</li>
              </ul>
            </GlassCard>

            {/* Dev Tools */}
            <GlassCard glow className="text-center">
              <Terminal className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Dev Tools</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>VS Code</li>
                <li>GitHub</li>
                <li>Jupyter Notebook</li>
                <li>MySQL Workbench</li>
              </ul>
            </GlassCard>

            {/* Stats */}
            <GlassCard glow className="text-center">
              <BookOpen className="w-16 h-16 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Learning Stats</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>100+ hours Python</li>
                <li>50+ SQL queries written</li>
                <li>10+ projects completed</li>
                <li>Always learning 🚀</li>
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Latest Insights</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "5 Things I Learned About SQL",
                preview: "My journey with database queries and the insights that surprised me the most...",
                link: "#"
              },
              {
                title: "Building My First NLP Model",
                preview: "Exploring natural language processing and the challenges of text classification...",
                link: "#"
              },
              {
                title: "From Zero to Data Analyst",
                preview: "My learning path and the resources that made the biggest difference...",
                link: "#"
              }
            ].map((post, index) => (
              <GlassCard key={index} hover className="h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-3 text-primary">{post.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{post.preview}</p>
                <Button variant="outline" className="w-full glass">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Read More
                </Button>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Let's Connect</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <GlassCard glow>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="glass"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="glass"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="glass min-h-32"
                      required
                    />
                  </div>
                  <GlowButton variant="primary" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </GlowButton>
                </form>
              </GlassCard>

              {/* Social Links */}
              <GlassCard glow className="flex flex-col justify-center">
                <div className="text-center space-y-8">
                  <h3 className="text-2xl font-semibold">Find me on</h3>
                  
                  <div className="space-y-4">
                    <GlowButton href="http://github.com/PriyankaYannam123" className="w-full">
                      <Github className="w-5 h-5 mr-3" />
                      GitHub
                    </GlowButton>
                    
                    <GlowButton href="https://www.linkedin.com/in/priyanka-yannam-a38872249/" className="w-full">
                      <Linkedin className="w-5 h-5 mr-3" />
                      LinkedIn
                    </GlowButton>
                    
                    <GlowButton href="mailto:priyanka@email.com" className="w-full">
                      <Mail className="w-5 h-5 mr-3" />
                      Email
                    </GlowButton>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-glass-border/30">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              Made with 💻 using Python & SQL by <span className="text-primary font-semibold">Priyanka</span>
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 Priyanka. Always learning, always growing.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 glass-glow p-3 rounded-full z-50"
        size="icon"
      >
        <ChevronUp className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default Portfolio;