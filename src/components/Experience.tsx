import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Freelance Web Developer',
      type: 'Self-Employed',
      period: '2023 - Present',
      description:
        'Working independently with diverse clients to deliver complete web solutions. Specialized in building custom web applications, e-commerce platforms, and educational systems.',
      achievements: [
        'Successfully delivered 10+ complete web applications to satisfied clients',
        'Built scalable e-commerce solutions with payment integration',
        'Developed educational platforms serving hundreds of users',
        'Maintained 100% client satisfaction through clear communication and timely delivery',
      ],
    },
    {
      role: 'Backend Developer',
      type: 'Development Team Collaborations',
      period: '2023 - 2024',
      description:
        'Collaborated with development teams on various projects, focusing on backend architecture, database design, and API development using PHP and Laravel.',
      achievements: [
        'Designed and implemented RESTful APIs for multiple client projects',
        'Optimized database queries resulting in 40% performance improvement',
        'Implemented secure authentication systems with role-based access control',
        'Contributed to code reviews and maintained high code quality standards',
      ],
    },
    {
      role: 'Web Development Projects',
      type: 'Academic & Personal',
      period: '2022 - 2024',
      description:
        'Developed multiple projects during university and personal learning journey, focusing on full-stack development and modern web technologies.',
      achievements: [
        'Built Et3allem Bbasata educational platform from ground up',
        'Created membership management systems with subscription handling',
        'Developed complete CRUD applications with admin dashboards',
        'Gained hands-on experience with Git, version control, and deployment',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Building real-world solutions and delivering value
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-teal-200 transform md:-translate-x-1/2"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto md:text-left'
                } md:w-1/2`}
              >
                <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-teal-600 rounded-full transform md:-translate-x-1/2 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                <div className="ml-10 md:ml-0 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-4 md:justify-end">
                    <Briefcase className="text-teal-600" size={24} />
                    <h3 className="text-2xl font-bold text-gray-900">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-teal-600 font-semibold mb-2 md:justify-end">
                    <Calendar size={18} />
                    <span>{exp.period}</span>
                  </div>

                  <p className="text-gray-500 font-medium mb-4">{exp.type}</p>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-1.5 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
