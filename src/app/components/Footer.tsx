import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050816] to-transparent">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#00E5FF]/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Tagline */}
          <motion.p
            className="text-2xl md:text-3xl font-semibold mb-4 bg-gradient-to-r from-[#00E5FF] via-[#7B61FF] to-[#00FFB3] bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0%', '100%', '0%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Building Intelligent Systems with Data, AI and Machine Learning
          </motion.p>

          {/* Copyright */}
          <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
            <span>© 2026 Sadu Sadushan. Made with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-4 h-4 text-[#00E5FF] fill-[#00E5FF]" />
            </motion.div>
            <span>and AI</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
