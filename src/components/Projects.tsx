import { ExternalLink, Code } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Et3allem Bbasata',
      description:
        'A comprehensive educational platform designed to simplify programming education for beginners. Features include course management, user enrollment, progress tracking, and an intuitive admin dashboard.',
      technologies: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'JavaScript'],
      highlights: [
        'Full-featured content management system',
        'User authentication and role management',
        'Interactive course delivery system',
        'Real-time progress tracking',
      ],
      color: 'from-blue-500 to-teal-500',
    },
    {
      title: 'E-Commerce Platform',
      description:
        'A complete online store solution with product catalog, shopping cart, order management, and payment processing. Built with scalability and user experience in mind.',
      technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Bootstrap'],
      highlights: [
        'Product inventory management',
        'Shopping cart and checkout flow',
        'Order tracking and management',
        'Payment gateway integration',
      ],
      color: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Membership Management System',
      description:
        'A robust system for managing memberships, subscriptions, and user access levels. Includes automated renewal notifications and payment tracking.',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      highlights: [
        'Subscription tier management',
        'Automated email notifications',
        'Payment history tracking',
        'Member dashboard interface',
      ],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'RESTful API Development',
      description:
        'Design and implementation of secure, scalable REST APIs for various client applications. Includes authentication, rate limiting, and comprehensive documentation.',
      technologies: ['PHP', 'Laravel', 'MySQL', 'JWT', 'Postman'],
      highlights: [
        'JWT-based authentication',
        'Rate limiting and security',
        'Comprehensive documentation',
        'Version control and testing',
      ],
      color: 'from-teal-500 to-green-500',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-world applications built with modern technologies and best practices
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
            >
              <div
                className={`h-2 bg-gradient-to-r ${project.color}`}
              ></div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
                    <Code size={18} />
                    <span>View Code</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-teal-600 hover:text-teal-600 transition-colors">
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
