import { useActiveSection } from './hooks/useActiveSection';
import { Github, Mail, Twitter, ExternalLink, ChevronRight } from 'lucide-react'; import { Header } from './components/header/header';
import { HeroSection } from './components/heroSection/heroSection';
import { Experience } from './components/experience/experience';

const Portfolio = () => {
  const activeSection = useActiveSection();

  const projects = [
    {
      title: "Gamerly",
      description: "App social para gamers ocacionales que quieran evitar el bullying",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop",
      link: "#",
      tech: "React Native, Zustand, CSS3, Expo,"
    },
    {
      title: "Noches Magicas",
      description: "Tp que abarca los 4 tipos de bases de datos + front",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      link: "#",
      tech: "React, Zustand, Kotlin, Springboot, Docker"
    },
    {
      title: "Gamerly",
      description: "App social para gamers ocacionales que quieran evitar el bullying",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop",
      link: "#",
      tech: "Kotlin, JPA, Springboot, Docker"
    },
    {
      title: "eg-paises-react ",
      description: "Migracion y explicacion de Debounce en react para busquedas e inputs",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&h=300&fit=crop",
      link: "#",
      tech: "React, TypeScript"
    },
    {
      title: "acceledometro ",
      description: "Ejemplos de uso de acceledometro en Angular",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&h=300&fit=crop",
      link: "#",
      tech: "Angular, TypeScript, Ionic"
    },
    {
      title: "Accesible app",
      description: "Ejemplo de accesibilidad de gestos para personas con capacidades nula de vista - ",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&h=300&fit=crop",
      link: "#",
      tech: "React Native, Expo, TypeScript"
    }
  ];



  return (
    <div className="min-h-screen text-gray-100">
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 -z-10"></div>
      {/* Header */}
      <Header activeSection={activeSection} />

      <div id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Hero Section */}
        <HeroSection />

        {/* Projects Section */}
        <section id="project" className="mb-24">
          <h2 className="text-3xl font-bold mb-8 font-mono">~/work/projects</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="group bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition">
                <div className="aspect-video bg-gray-700 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Github size={16} />
                      <span className="text-sm font-mono">{project.title}</span>
                    </div>
                    <a href={project.link} className="text-gray-400 hover:text-blue-400">
                      <ExternalLink size={16} />
                    </a>
                  </div>
                  <p className="text-xs text-gray-400">{project.tech}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <Experience />


        {/* Contact Section */}
        <section id="contact" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-mono">~/contact/</h2>
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-8">
            <p className="text-gray-300 mb-4">
              ¿Tienes un proyecto en mente? ¿O te gustaría colaborar? No dudes en contactarme.
              O envíame un email a <span className="text-blue-400"> pavongomezrodrigo@gmail.com</span>.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm pt-8 border-t border-gray-800">
          <p> {new Date().getFullYear()} © Rodrigo Pavon</p>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;