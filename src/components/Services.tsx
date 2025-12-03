import { Code2, Database, Globe, Lock, Cog, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Full-Stack Web Development',
      description:
        'Complete web application development from concept to deployment. Building scalable, maintainable solutions with modern technologies.',
      features: [
        'Custom web application development',
        'Responsive design implementation',
        'Performance optimization',
        'Cross-browser compatibility',
      ],
    },
    {
      icon: Code2,
      title: 'Backend Development',
      description:
        'Robust backend systems with PHP and Laravel. Specialized in creating efficient server-side logic and architectures.',
      features: [
        'RESTful API development',
        'Server-side logic implementation',
        'Third-party API integration',
        'Code optimization and refactoring',
      ],
    },
    {
      icon: Database,
      title: 'Database Design & Management',
      description:
        'Comprehensive database solutions with focus on performance, scalability, and data integrity.',
      features: [
        'Database schema design',
        'Query optimization',
        'Data migration services',
        'Backup and recovery planning',
      ],
    },
    {
      icon: Lock,
      title: 'Authentication Systems',
      description:
        'Secure user authentication and authorization systems with modern security practices.',
      features: [
        'User registration and login',
        'Role-based access control',
        'Session management',
        'Password encryption and security',
      ],
    },
    {
      icon: Cog,
      title: 'System Integration',
      description:
        'Seamless integration of various systems, APIs, and third-party services into your application.',
      features: [
        'Payment gateway integration',
        'Email service integration',
        'Social media integration',
        'Custom API connections',
      ],
    },
    {
      icon: Zap,
      title: 'Maintenance & Support',
      description:
        'Ongoing maintenance, updates, and technical support to keep your application running smoothly.',
      features: [
        'Bug fixes and troubleshooting',
        'Feature enhancements',
        'Security updates',
        'Performance monitoring',
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Services I Offer
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive web development solutions tailored to your needs
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="text-white" size={32} />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
