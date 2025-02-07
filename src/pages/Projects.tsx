import React from 'react';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI Image Generator",
      description: "Derin öğrenme kullanarak gerçekçi görüntüler üreten bir web uygulaması.",
      tech: ["Python", "PyTorch", "React", "FastAPI"],
      github: "https://github.com/yourusername/ai-image-generator",
      demo: "https://ai-image-generator.demo",
      stars: 245,
      forks: 45,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995"
    },
    {
      id: 2,
      title: "NLP Sentiment Analyzer",
      description: "Doğal dil işleme ile metin duygu analizi yapan bir API servisi.",
      tech: ["Python", "TensorFlow", "Flask", "Docker"],
      github: "https://github.com/yourusername/nlp-sentiment",
      demo: "https://nlp-sentiment.demo",
      stars: 189,
      forks: 32,
      image: "https://images.unsplash.com/photo-1676277791608-ac54525aa94d"
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary to-tertiary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Projeler</h1>
          <p className="text-secondary text-lg">AI ve yazılım geliştirme projelerim</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.id} className="bg-tertiary/50 rounded-lg overflow-hidden backdrop-blur-sm group hover:bg-tertiary/70 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h2>
                <p className="text-secondary mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm text-purple-400 bg-purple-900/30 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-secondary hover:text-purple-400 transition-colors"
                    >
                      <Github className="w-5 h-5 mr-1" />
                      <span>Kaynak Kod</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-secondary hover:text-purple-400 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 mr-1" />
                      <span>Demo</span>
                    </a>
                  </div>
                  <div className="flex items-center space-x-4 text-secondary">
                    <span className="flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      {project.stars}
                    </span>
                    <span className="flex items-center">
                      <GitFork className="w-4 h-4 mr-1" />
                      {project.forks}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;