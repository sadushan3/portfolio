import { motion } from 'motion/react';
import { Code, Brain, Database, Cloud, Globe, Palette } from 'lucide-react';

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "#00E5FF",
      skills: ["Python", "R", "Java", "C", "C++", "Kotlin", "JavaScript", "TypeScript"],
    },
    {
      title: "Machine Learning",
      icon: Brain,
      color: "#7B61FF",
      skills: ["Scikit-learn", "TensorFlow", "PyTorch", "Pandas", "NumPy", "Keras"],
    },
    {
      title: "Generative AI",
      icon: Brain,
      color: "#00FFB3",
      skills: ["LLMs", "Prompt Engineering", "RAG", "LangChain", "Transformers", "FAISS", "BM25"],
    },
    {
      title: "Data Analytics",
      icon: Database,
      color: "#00E5FF",
      skills: ["Power BI", "Excel", "SQL", "Data Cleaning", "ETL", "Data Visualization"],
    },
    {
      title: "Web Development",
      icon: Globe,
      color: "#7B61FF",
      skills: ["MERN Stack", "Spring Boot", "Django", "ASP.NET Core", "REST APIs", "React Native"],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "#00FFB3",
      skills: ["AWS", "Git", "Docker", "MLOps", "LLMOps", "CI/CD"],
    },
    {
      title: "UI/UX",
      icon: Palette,
      color: "#00E5FF",
      skills: ["Figma", "Draw.io"],
    },
    {
      title: "Databases & Architecture",
      icon: Database,
      color: "#7B61FF",
      skills: ["PostgreSQL", "MongoDB", "Firebase", "Supabase", "Prisma", "EF Core", "CQRS"],
    },
  ];

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050816] to-[#0a0f2e]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7B61FF]/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-[#00FFB3] bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full backdrop-blur-md bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden">
                {/* Animated Gradient Background */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at top right, ${category.color}20, transparent)`,
                  }}
                ></motion.div>

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 rounded-xl mb-4 flex items-center justify-center backdrop-blur-md bg-white/10 border"
                    style={{ borderColor: category.color }}
                  >
                    <category.icon className="w-7 h-7" style={{ color: category.color }} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 text-sm backdrop-blur-md bg-white/10 rounded-full border border-white/20 text-white/80 hover:border-white/40 transition-all duration-200"
                        style={{
                          borderColor: `${category.color}40`,
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div
                className="absolute -inset-0.5 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 rounded-2xl -z-10"
                style={{ background: category.color }}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
