import { motion } from 'motion/react';
import { Briefcase, ChevronRight } from 'lucide-react';

export function ExperienceSection() {
  const experiences = [
    {
      company: "HSBC",
      role: "Data Analyst Intern",
      period: "08/2025 – 02/2026",
      responsibilities: [
        "Data extraction, cleaning and validation",
        "Power BI and Excel dashboards",
        "Process automation using Excel Macros",
        "Python-based customer data matching",
        "Account transfer and eligibility analysis",
        "Business reporting and visualization",
      ],
      color: "#00E5FF",
    },
    {
      company: "Primeleed Management",
      role: "Student Counselor",
      period: "06/2022 – 10/2022",
      responsibilities: [
        "Managed UK university communication",
        "Guided students through admissions",
        "Supported enrolment growth",
        "Improved client satisfaction",
      ],
      color: "#7B61FF",
    },
    {
      company: "Course Consultant",
      role: "Course Consultant Officer",
      period: "08/2021 – 02/2022",
      responsibilities: [
        "Conducted workshops",
        "Promoted e-learning programs",
        "Managed social media awareness campaigns",
        "Increased student participation",
      ],
      color: "#00FFB3",
    },
  ];

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f2e] to-[#050816]">
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-[#7B61FF] bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            My journey in data analytics and consulting
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden">
                {/* Hover Gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${exp.color}10 0%, transparent 100%)`,
                  }}
                ></div>

                {/* Animated Border on Hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, ${exp.color}, transparent)`,
                    height: '2px',
                    top: 0,
                  }}
                ></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center backdrop-blur-md bg-white/10 border"
                    style={{ borderColor: exp.color }}
                  >
                    <Briefcase className="w-8 h-8" style={{ color: exp.color }} />
                  </motion.div>

                  {/* Company */}
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.company}</h3>

                  {/* Role */}
                  <p className="text-lg mb-2" style={{ color: exp.color }}>
                    {exp.role}
                  </p>

                  {/* Period */}
                  <p className="text-white/60 mb-6 text-sm">{exp.period}</p>

                  {/* Responsibilities */}
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + i * 0.1 }}
                        className="flex items-start gap-2 text-white/70"
                      >
                        <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: exp.color }} />
                        <span className="text-sm">{resp}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Glow Effect */}
              <div
                className="absolute -inset-0.5 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300 rounded-2xl -z-10"
                style={{ background: exp.color }}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
