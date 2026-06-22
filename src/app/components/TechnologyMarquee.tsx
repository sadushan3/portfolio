import { motion } from 'motion/react';

export function TechnologyMarquee() {
  const technologies = [
    "Python",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "LangChain",
    "FastAPI",
    "AWS",
    "Power BI",
    "SQL",
    "Git",
    "Docker",
    "MLOps",
    "LLMOps",
    "Generative AI",
    "RAG",
    "FAISS",
    "Transformers",
  ];

  // Duplicate for seamless loop
  const duplicatedTechnologies = [...technologies, ...technologies];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f2e] via-[#050816] to-[#0a0f2e]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-[#00E5FF] bg-clip-text text-transparent">
            Technology Stack
          </h2>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050816] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050816] to-transparent z-10"></div>

          {/* Scrolling Content */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8 py-8"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {duplicatedTechnologies.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex-shrink-0 backdrop-blur-md bg-white/5 px-8 py-4 rounded-2xl border border-white/10 hover:border-[#00E5FF]/50 transition-all duration-300 group"
                >
                  <span className="text-xl font-semibold text-white/80 group-hover:text-[#00E5FF] transition-colors duration-300 whitespace-nowrap">
                    {tech}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
