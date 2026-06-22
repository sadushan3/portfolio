import { motion } from 'motion/react';
import { NeuralNetworkCanvas } from './NeuralNetworkCanvas';
import { Brain, Cpu, Zap, Network } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Deep Learning',
    desc: 'Multi-layer neural architectures for complex pattern recognition',
    color: '#00E5FF',
  },
  {
    icon: Cpu,
    title: 'Model Training',
    desc: 'Optimized gradient descent across distributed compute nodes',
    color: '#7B61FF',
  },
  {
    icon: Zap,
    title: 'Real-time Inference',
    desc: 'Low-latency predictions at scale with TensorRT & ONNX',
    color: '#00FFB3',
  },
  {
    icon: Network,
    title: 'LLM & RAG Systems',
    desc: 'Building intelligent agents with retrieval-augmented generation',
    color: '#FF6B9D',
  },
];

export function NeuralNetworkSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f2e] via-[#050816] to-[#0a0f2e]" />

      {/* Full-bleed canvas layer */}
      <div className="absolute inset-0 opacity-40">
        <NeuralNetworkCanvas nodeCount={90} interactive={true} />
      </div>

      {/* Radial vignette so content pops */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,transparent_30%,#050816_100%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-[#00E5FF] text-sm tracking-widest uppercase mb-4 block">
            Under the Hood
          </span>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-[#00E5FF] to-[#7B61FF] bg-clip-text text-transparent mb-6">
            Neural Architecture
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Every project is a new network — nodes of data, edges of insight, signals of intelligence.
          </p>
        </motion.div>

        {/* Central visualization card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-4xl h-80 mb-20 rounded-3xl overflow-hidden border border-white/10"
          style={{ boxShadow: '0 0 80px rgba(0,229,255,0.12), 0 0 40px rgba(123,97,255,0.1)' }}
        >
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
          <NeuralNetworkCanvas nodeCount={55} interactive={true} className="absolute inset-0" />

          {/* Layer labels */}
          <div className="absolute inset-0 flex items-end justify-between px-8 pb-6 pointer-events-none">
            {['Input Layer', 'Hidden Layer 1', 'Hidden Layer 2', 'Hidden Layer 3', 'Output Layer'].map((label, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="text-center"
              >
                <div
                  className="text-xs font-semibold tracking-wider px-2 py-1 rounded-md"
                  style={{
                    color: ['#00E5FF', '#7B61FF', '#00FFB3', '#7B61FF', '#FF6B9D'][i],
                    background: `${['#00E5FF', '#7B61FF', '#00FFB3', '#7B61FF', '#FF6B9D'][i]}18`,
                    border: `1px solid ${['#00E5FF', '#7B61FF', '#00FFB3', '#7B61FF', '#FF6B9D'][i]}40`,
                  }}
                >
                  {label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Top badge */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2">
            <motion.div
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="text-xs text-[#00E5FF] tracking-widest uppercase px-4 py-1.5 rounded-full border border-[#00E5FF]/30 bg-[#00E5FF]/10 backdrop-blur-md"
            >
              Live Neural Simulation
            </motion.div>
          </div>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative rounded-2xl p-6 border border-white/10 backdrop-blur-md bg-white/5 overflow-hidden cursor-default"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"
                style={{ background: `${f.color}18` }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(to right, transparent, ${f.color}, transparent)` }}
              />

              <div className="relative">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${f.color}20`, border: `1px solid ${f.color}40` }}
                >
                  <f.icon className="w-5 h-5" style={{ color: f.color }} />
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{f.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
