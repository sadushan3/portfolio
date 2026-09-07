import { motion } from 'motion/react';
import { Rocket, ChevronRight, Github, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Anomaly & Health Monitoring for Turbofan Engines",
      description: "Explainable predictive-maintenance framework built on NASA C-MAPSS turbofan data",
      features: [
        "NASA C-MAPSS Dataset",
        "LSTM Digital Twin",
        "Isolation Forest",
        "LSTM Autoencoder",
        "Explainable AI",
        "Root Cause Analysis",
        "GMM",
        "K-Means",
        "Root Cause Analysis",
        "Anomaly Visualisation",
      ],
      gradient: "from-[#00E5FF] to-[#7B61FF]",
      color: "#00E5FF",
      githubUrl: "https://github.com/search?q=user%3Asadushan3+turbofan&type=repositories",
    },
    {
      title: "Hybrid RAG Assistant",
      description: "Grounded document assistant with retrieval evaluation, page-level citations, and refusal control",
      features: [
        "FastAPI",
        "FAISS",
        "BM25",
        "MiniLM Embeddings",
        "Cross-Encoder Reranking",
        "FastAPI + React",
        "Hit@1 1.00 / MRR 1.00",
      ],
      gradient: "from-[#7B61FF] to-[#00FFB3]",
      color: "#7B61FF",
      githubUrl: "https://github.com/search?q=user%3Asadushan3+hybrid-rag-assistant&type=repositories",
    },
    {
      title: "Climate Policy Analysis Agent",
      description: "Multi-document NLP system for semantic comparison, structured extraction, and grounded summaries",
      features: [
        "NLP",
        "Hungarian Matching",
        "Zero-Shot Classification",
        "Confidence Scoring",
        "Map-Reduce Summarization",
        "Precision / Recall / F1",
        "Docker Compose + CI/CD",
      ],
      gradient: "from-[#00FFB3] to-[#00E5FF]",
      color: "#00FFB3",
      githubUrl: "https://github.com/search?q=user%3Asadushan3+Climate_Policy_Analysis_Agent&type=repositories",
    },
    {
      title: "IoT Parking System",
      description: "ML pipeline for occupancy analysis, forecasting, anomaly detection, and TinyML edge inference",
      features: [
        "Temporal Trend Modeling",
        "TinyML",
        "TensorFlow Lite",
        "Status Classification",
        "Regression Forecasting",
        "Node.js + React",
      ],
      gradient: "from-[#00E5FF] to-[#7B61FF]",
      color: "#00E5FF",
      githubUrl: "https://github.com/search?q=user%3Asadushan3+IOT_Parking_System&type=repositories",
    },
    {
      title: "Workshop Management",
      description: "Full-stack vehicle service management system for job cards, invoicing, and workflow operations",
      features: [
        "Next.js 15",
        "TypeScript",
        "PostgreSQL + Prisma",
        "Auth.js",
        "Layered Architecture",
        "330+ Tests + Playwright",
        "Audit Trails",
      ],
      gradient: "from-[#7B61FF] to-[#00FFB3]",
      color: "#7B61FF",
      githubUrl: "https://github.com/search?q=user%3Asadushan3+Workshop+Management&type=repositories",
    },
    {
      title: "BusTiker - Bus Seat Reservation System",
      description: "Concurrency-safe Jakarta EE booking platform rebuilt with a strict layered architecture",
      features: [
        "Jakarta EE",
        "Concurrency-Safe Reservations",
        "SQL Injection Remediation",
        "IDOR / CSRF / XSS Fixes",
        "Servlet -> Service -> DAO",
        "HikariCP",
      ],
      gradient: "from-[#00FFB3] to-[#00E5FF]",
      color: "#00FFB3",
      githubUrl: "https://github.com/search?q=user%3Asadushan3+BusTiker&type=repositories",
    },
    {
      title: "AppointFlow",
      description: "Multi-tenant appointment SaaS platform built with Clean Architecture and CQRS",
      features: [
        "ASP.NET Core",
        "Clean Architecture",
        "CQRS",
        "EF Core Global Filters",
        "Tenant Data Isolation",
        "Optimistic Concurrency",
        "Double-Booking Prevention",
      ],
      gradient: "from-[#7B61FF] to-[#00FFB3]",
      color: "#7B61FF",
      githubUrl: "https://github.com/search?q=user%3Asadushan3+AppointFlow&type=repositories",
    },
  ];

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f2e] to-[#050816]">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00FFB3]/10 rounded-full blur-[120px]"></div>
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
            Featured AI & Software Projects
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Machine learning systems, grounded AI applications, and production-ready software
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden">
                {/* Parallax Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                ></motion.div>

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: `linear-gradient(90deg, ${project.color}, transparent)`,
                    padding: '2px',
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'exclude',
                    WebkitMaskComposite: 'xor',
                  }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center backdrop-blur-md bg-white/10 border"
                    style={{ borderColor: project.color }}
                  >
                    <Rocket className="w-8 h-8" style={{ color: project.color }} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>

                  {/* Description */}
                  <p className="text-white/60 mb-6">{project.description}</p>

                  {/* Features */}
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-white/80 mb-3">Key Features:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + i * 0.05 }}
                          className="flex items-center gap-1 text-white/70"
                        >
                          <ChevronRight className="w-3 h-3 flex-shrink-0" style={{ color: project.color }} />
                          <span className="text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/10"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="h-4 w-4" style={{ color: project.color }} />
                      View on GitHub
                      <ExternalLink className="h-3.5 w-3.5 text-white/60" />
                    </a>
                  )}
                </div>
              </div>

              {/* Glow Effect */}
              <motion.div
                className="absolute -inset-1 opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500 rounded-2xl -z-10"
                style={{ background: project.color }}
                animate={{
                  scale: hoveredIndex === index ? 1.05 : 1,
                }}
                transition={{ duration: 0.5 }}
              ></motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
