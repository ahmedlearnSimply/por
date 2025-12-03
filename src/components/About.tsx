import { User, GraduationCap, Award, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <User className="text-teal-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Who I Am
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    A passionate Web Developer dedicated to building scalable, secure, and user-friendly web applications. I bring creativity and technical excellence to every project I undertake.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-teal-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Education
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Bachelor's Degree in Computer Science from the Faculty of Computers and Information (2024) with a GPA of 3.4. Strong academic foundation in software engineering principles.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Award className="text-teal-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Expertise
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Specialized in backend development with PHP and Laravel, creating robust authentication systems, RESTful APIs, and comprehensive database architectures. Proficient in full-stack development workflows.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  What I Do Best
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span className="text-gray-700">Backend development with PHP & Laravel</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span className="text-gray-700">Building complete web systems from scratch</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span className="text-gray-700">RESTful API design and implementation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span className="text-gray-700">Database design and optimization</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span className="text-gray-700">Authentication & authorization systems</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span className="text-gray-700">Problem-solving and system optimization</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-lg">
                <Target className="text-teal-400 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-3">Core Strengths</h3>
                <p className="text-gray-300 leading-relaxed">
                  Fast learner with exceptional attention to detail. Strong communication skills and proven ability to deliver complete solutions. Experienced in client collaboration and maintaining clean, organized code using Git and modern development practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
