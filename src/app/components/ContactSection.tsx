import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useState } from 'react';
import { NeuralNetworkCanvas } from './NeuralNetworkCanvas';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (could integrate with email service)
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "0767803584",
      href: "tel:0767803584",
      color: "#00E5FF",
    },
    {
      icon: Mail,
      label: "Email",
      value: "sadushansadu33@gmail.com",
      href: "mailto:sadushansadu33@gmail.com",
      color: "#7B61FF",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "selvakumar-sadurshan",
      href: "https://www.linkedin.com/in/selvakumar-sadurshan-9a9524238/?skipRedirect=true",
      color: "#00FFB3",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "sadushan3",
      href: "https://github.com/sadushan3",
      color: "#00E5FF",
    },
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f2e] to-[#050816]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00E5FF]/5 rounded-full blur-[150px]"></div>
      </div>
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <NeuralNetworkCanvas nodeCount={40} interactive={false} />
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
            Get In Touch
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Let's discuss your next AI project or collaboration opportunity
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="group flex items-center gap-4 p-6 backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300"
                >
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center backdrop-blur-md bg-white/10 border group-hover:scale-110 transition-transform duration-300"
                    style={{ borderColor: info.color }}
                  >
                    <info.icon className="w-6 h-6" style={{ color: info.color }} />
                  </div>

                  {/* Info */}
                  <div>
                    <p className="text-white/60 text-sm mb-1">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>

                  {/* Glow */}
                  <div
                    className="absolute -inset-0.5 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 rounded-2xl -z-10"
                    style={{ background: info.color }}
                  ></div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-white/80 text-sm mb-2 block">Name</label>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-[#00E5FF] backdrop-blur-md"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="text-white/80 text-sm mb-2 block">Email</label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-[#00E5FF] backdrop-blur-md"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="text-white/80 text-sm mb-2 block">Message</label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-[#00E5FF] backdrop-blur-md min-h-[150px]"
                    placeholder="Your message..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#00E5FF] to-[#7B61FF] hover:opacity-90 text-white py-6 text-lg group relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  <Send className="mr-2 h-5 w-5 relative z-10" />
                  <span className="relative z-10">Send Message</span>
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
