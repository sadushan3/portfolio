import { motion } from 'motion/react';
import { Download, Linkedin, Github, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';
import profileImage from '../../imports/image.png';
import cvFile from '../../imports/Updated_CV.pdf';
import { NeuralNetworkCanvas } from './NeuralNetworkCanvas';

export function HeroSection() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval1 = setInterval(() => {
      setCount1((prev) => {
        if (prev >= 6) {
          clearInterval(interval1);
          return 6;
        }
        return prev + 1;
      });
    }, duration / steps);

    const interval2 = setInterval(() => {
      setCount2((prev) => {
        if (prev >= 20) {
          clearInterval(interval2);
          return 20;
        }
        return prev + 1;
      });
    }, duration / steps);

    const interval3 = setInterval(() => {
      setCount3((prev) => {
        if (prev >= 10) {
          clearInterval(interval3);
          return 10;
        }
        return prev + 1;
      });
    }, duration / steps);

    const interval4 = setInterval(() => {
      setCount4((prev) => {
        if (prev >= 4) {
          clearInterval(interval4);
          return 4;
        }
        return prev + 1;
      });
    }, duration / steps);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
    };
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'Sadurshan_CV.pdf';
    link.click();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050816] via-[#0a0f2e] to-[#050816]">
        {/* Aurora Gradient */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00E5FF]/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7B61FF]/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#00FFB3]/10 rounded-full blur-[120px] animate-pulse delay-500"></div>
      </div>

      {/* Neural Network Canvas */}
      <div className="absolute inset-0 opacity-60">
        <NeuralNetworkCanvas nodeCount={70} interactive={true} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
              <span className="text-[#00E5FF] text-sm tracking-wider uppercase">Welcome to my portfolio</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-[#00E5FF] to-[#7B61FF] bg-clip-text text-transparent"
            >
              SADU SADUSHAN
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-white/80 mb-6"
            >
              Machine Learning Engineer | Data Scientist | AI Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-white/60 text-lg mb-8 leading-relaxed max-w-2xl"
            >
              Aspiring Machine Learning Engineer passionate about applying Data Science and Artificial Intelligence to solve real-world problems. Skilled in Python, Machine Learning, Deep Learning, Data Analysis, SQL, REST APIs, Git, Generative AI, LLMs, Prompt Engineering, and Retrieval-Augmented Generation (RAG). Experienced with Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch, and AWS Cloud Services. Continuously learning MLOps, LLMOps, and Agentic AI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Button
                onClick={handleDownloadCV}
                className="bg-gradient-to-r from-[#00E5FF] to-[#7B61FF] hover:opacity-90 text-white px-8 py-6 text-lg group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <Download className="mr-2 h-5 w-5 relative z-10" />
                <span className="relative z-10">Download CV</span>
              </Button>

              <a href="#contact">
                <Button
                  variant="outline"
                  className="border-[#00E5FF] text-[#00E5FF] hover:bg-[#00E5FF]/10 px-8 py-6 text-lg backdrop-blur-sm"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Button>
              </a>

              <a href="https://www.linkedin.com/in/selvakumar-sadurshan-9a9524238/?skipRedirect=true" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 px-6 py-6 backdrop-blur-sm"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>

              <a href="https://github.com/sadushan3" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 px-6 py-6 backdrop-blur-sm"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </a>
            </motion.div>

            {/* Animated Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              <div className="backdrop-blur-md bg-white/5 p-4 rounded-xl border border-white/10 hover:border-[#00E5FF]/50 transition-all duration-300">
                <div className="text-4xl font-bold text-[#00E5FF] mb-1">{count1}+</div>
                <div className="text-white/60 text-sm">Projects Completed</div>
              </div>

              <div className="backdrop-blur-md bg-white/5 p-4 rounded-xl border border-white/10 hover:border-[#7B61FF]/50 transition-all duration-300">
                <div className="text-4xl font-bold text-[#7B61FF] mb-1">{count2}+</div>
                <div className="text-white/60 text-sm">Technologies</div>
              </div>

              <div className="backdrop-blur-md bg-white/5 p-4 rounded-xl border border-white/10 hover:border-[#00FFB3]/50 transition-all duration-300">
                <div className="text-4xl font-bold text-[#00FFB3] mb-1">{count3}+</div>
                <div className="text-white/60 text-sm">AI Technologies</div>
              </div>

              <div className="backdrop-blur-md bg-white/5 p-4 rounded-xl border border-white/10 hover:border-[#00E5FF]/50 transition-all duration-300">
                <div className="text-4xl font-bold text-[#00E5FF] mb-1">{count4}+</div>
                <div className="text-white/60 text-sm">Years Learning</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00E5FF] via-[#7B61FF] to-[#00FFB3] rounded-full opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-300"></div>

              {/* Image Container */}
              <div className="relative backdrop-blur-md bg-white/5 p-4 rounded-full border-2 border-white/10 overflow-hidden">
                <img
                  src={profileImage}
                  alt="Sadu Sadushan"
                  className="w-full h-auto rounded-full object-cover"
                />
              </div>

              {/* Floating Ring Animation */}
              <motion.div
                className="absolute inset-0 border-2 border-[#00E5FF]/30 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-[#00E5FF] rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
