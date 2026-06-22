import { motion } from 'motion/react';
import { Award } from 'lucide-react';

export function CertificationsSection() {
  const certifications = [
    {
      title: "AWS Educate – Introduction to PartyRock",
      provider: "AWS Educate",
      color: "#00E5FF",
    },
    {
      title: "AWS Educate – Introduction to Generative AI",
      provider: "AWS Educate",
      color: "#7B61FF",
    },
    {
      title: "IBM Data Analyst",
      provider: "IBM / Udemy",
      color: "#00FFB3",
    },
    {
      title: "IBM Machine Learning with Python",
      provider: "IBM / Coursera",
      color: "#00E5FF",
    },
    {
      title: "Prompt Engineering",
      provider: "Greating Learning",
      color: "#7B61FF",
    },
  ];

  return (
    <section id="certifications" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050816] to-[#0a0f2e]">
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-[120px]"></div>
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
            Certifications & Achievements
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Professional certifications and learning milestones
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, rotateY: 5 }}
              className="group relative"
              style={{ perspective: '1000px' }}
            >
              {/* Badge Card */}
              <div className="relative h-full backdrop-blur-md bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden">
                {/* Gradient Background */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at top left, ${cert.color}20, transparent)`,
                  }}
                ></div>

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8 }}
                ></motion.div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-20 h-20 rounded-full mb-4 flex items-center justify-center backdrop-blur-md bg-white/10 border-2"
                    style={{ borderColor: cert.color }}
                  >
                    <Award className="w-10 h-10" style={{ color: cert.color }} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>

                  {/* Provider */}
                  <p className="text-sm" style={{ color: cert.color }}>
                    {cert.provider}
                  </p>
                </div>
              </div>

              {/* Glow Effect */}
              <div
                className="absolute -inset-0.5 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300 rounded-2xl -z-10"
                style={{ background: cert.color }}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
