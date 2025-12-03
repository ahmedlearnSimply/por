import { Target, Rocket, Globe2, TrendingUp } from 'lucide-react';

export default function CareerObjective() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-teal-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Career Vision
          </h2>
          <div className="w-24 h-1 bg-teal-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Committed to continuous growth and technical excellence
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 mb-12 border border-white/20">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Target className="text-white" size={32} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Professional Objective
                </h3>
                <p className="text-gray-200 text-lg leading-relaxed">
                  To advance into a Senior Full-Stack Developer or Senior PHP Developer role, contributing to impactful digital products that make a difference. I'm committed to working in environments that value innovation, continuous learning, and the delivery of clean, high-quality code.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
              <Rocket className="text-teal-400 mb-4" size={36} />
              <h4 className="text-xl font-bold text-white mb-3">
                Growth Mindset
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Continuously expanding my technical skills, currently focusing on Node.js and React to become a versatile full-stack developer.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
              <Globe2 className="text-teal-400 mb-4" size={36} />
              <h4 className="text-xl font-bold text-white mb-3">
                Global Opportunities
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Open to opportunities in Egypt, remote positions, or international roles that offer challenging projects and professional growth.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
              <TrendingUp className="text-teal-400 mb-4" size={36} />
              <h4 className="text-xl font-bold text-white mb-3">
                Value Creation
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Dedicated to building reliable, scalable systems that solve real problems and deliver measurable value to users and businesses.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              What I Bring to Your Team
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white/20 backdrop-blur rounded-full text-white font-medium">
                Strong Communication
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur rounded-full text-white font-medium">
                Fast Learning
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur rounded-full text-white font-medium">
                Attention to Detail
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur rounded-full text-white font-medium">
                Organized Workflow
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur rounded-full text-white font-medium">
                Problem Solving
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur rounded-full text-white font-medium">
                Team Collaboration
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
