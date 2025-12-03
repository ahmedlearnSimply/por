import { Code, Database, Layout, Wrench, TrendingUp } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Languages',
      skills: [
        { name: 'PHP', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 90 },
      ],
    },
    {
      icon: Layout,
      title: 'Frameworks',
      skills: [
        { name: 'Laravel', level: 88 },
        { name: 'Bootstrap', level: 85 },
        { name: 'React (Learning)', level: 65 },
      ],
    },
    {
      icon: Database,
      title: 'Databases',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'Database Design', level: 88 },
        { name: 'phpMyAdmin', level: 90 },
      ],
    },
    {
      icon: Wrench,
      title: 'Tools & Concepts',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'REST APIs', level: 87 },
        { name: 'MVC Architecture', level: 88 },
      ],
    },
    {
      icon: TrendingUp,
      title: 'Currently Learning',
      skills: [
        { name: 'Node.js', level: 60 },
        { name: 'React.js', level: 65 },
        { name: 'Advanced DevOps', level: 50 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center">
                  <category.icon className="text-teal-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-teal-600 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-teal-600 to-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
