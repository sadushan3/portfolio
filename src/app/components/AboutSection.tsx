import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';

export function AboutSection() {
  const education = [
    {
      title: "Bachelor's Degree in Data Science",
      institution: "SLIIT",
      period: "2022 – Present",
      color: "#00E5FF",
    },
    {
      title: "BCS Higher Education Qualification (HEQ)",
      institution: "Live College",
      period: "BCS First Stage Completed",
      color: "#7B61FF",
    },
    {
      title: "Diploma in IoT",
      institution: "Esoft Metro Campus",
      period: "Completed",
      color: "#00FFB3",
    },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050816] to-[#0a0f2e]">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#7B61FF]/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-[#00E5FF] bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            My educational journey in Data Science and AI
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00E5FF] via-[#7B61FF] to-[#00FFB3]"></div>

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-16 flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col md:gap-8`}
            >
              {/* Content Card */}
              <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className="group relative backdrop-blur-md bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105">
                  {/* Hover Glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 rounded-2xl"
                    style={{ background: `${item.color}20` }}
                  ></div>

                  <div className="relative">
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-lg mb-2" style={{ color: item.color }}>
                      {item.institution}
                    </p>
                    <p className="text-white/60">{item.period}</p>
                  </div>
                </div>
              </div>

              {/* Center Icon */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center z-20 my-4 md:my-0">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md bg-white/10 border-2"
                  style={{ borderColor: item.color }}
                >
                  <GraduationCap className="w-8 h-8" style={{ color: item.color }} />
                </motion.div>
              </div>

              {/* Spacer for opposite side */}
              <div className="hidden md:block w-[calc(50%-2rem)]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
