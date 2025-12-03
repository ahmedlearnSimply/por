import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900"
    >
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Hi, I'm <span className="text-teal-400">Mohamed</span>
            </h1>
            <p className="text-2xl sm:text-3xl text-gray-300 mb-8">
              Full-Stack Web Developer
            </p>
            <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Crafting scalable, secure, and user-friendly web applications with expertise in PHP, Laravel, and modern JavaScript frameworks
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-in-up animation-delay-200">
            <a
              href="#contact"
              className="px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-all hover:scale-105 shadow-lg"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
            >
              View My Work
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 animate-fade-in-up animation-delay-400">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-teal-400 transition-colors"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-teal-400 transition-colors"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:mohamed@example.com"
              className="text-white hover:text-teal-400 transition-colors"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
