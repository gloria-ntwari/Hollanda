import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import navImage from "../assets/Adobe Express - file 1.png"
import { Facebook, Instagram, Twitter, Linkedin, Youtube, MessageCircle } from "lucide-react";

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter submission
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Newsletter Section */}
      <div className="bg-white py-14">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-4xl font-bold text-black mb-[-50px]">
              SIGN UP TO FOLLOW
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="bg-black py-14">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-start mb-16">
            {/* Left Side - Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-3xl md:text-4xl font-bold mt-[-40px] leading-snug">
  <span className="text-secondary">HOLLANDA</span>{" "}
  <span className="text-white">
    PROJECTS, FUNDING AND CAREER{" "}
  </span>
  <span className="text-primary">OPPORTUNITIES</span>
</p>
            </motion.div>

            {/* Right Side - Newsletter Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-end mt-8"
            >
              <form onSubmit={handleNewsletterSubmit} className="w-full max-w-sm h-20">
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="mb-4 border-gray-200 focus:border-primary"
                    required
                  />
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg"
                  >
                    Sign Up
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-16">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center space-x-3 mb-8">
                <img
                  src={navImage}
                  alt="logo"
                  className="h-10 md:h-14 lg:h-18 w-auto object-contain"
                />
              </div>

              <div className="text-white/80 space-y-1 text-sm leading-relaxed">
                <p className="font-semibold text-white">Hollanda FairFoods LTD</p>
                <p>Warehouse: KG 173 st, Kigali-</p>
                <p>Remera</p>
                <p>Opposite Grand Legacy</p>
                <p>Hotel Main office: KG 622 st,</p>
                <p>House3, Factory: Musanze</p>
                <p>Gyanika Road</p>
                <p className="pt-2">Tel: +250780050540</p>
                <p>Email: customerservice@holland</p>
                <p>afairfoods.com</p>
              </div>
            </motion.div>

            {/* Navigation & Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col justify-center mt-8"
            >
              {/* Navigation Links */}
              <div className="flex flex-wrap gap-8 mb-6 text-white/80 justify-end">
                <a href="#home" className="hover:text-white transition-colors text-sm">
                  Home
                </a>
                <a href="#about" className="hover:text-white transition-colors text-sm">
                  About
                </a>
                <a href="#products" className="hover:text-white transition-colors text-sm">
                  Products
                </a>
                <a href="#blogs" className="hover:text-white transition-colors text-sm">
                  Blogs
                </a>
                <a href="#contact" className="hover:text-white transition-colors text-sm">
                  Contact us
                </a>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-4 justify-end">
                <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all">
                  <MessageCircle className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all">
                  <Instagram className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all">
                  <Twitter className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all">
                  <Linkedin className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all">
                  <Youtube className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-primary py-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white text-sm">
            <p>©2025 Copyr-rightsd</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white/80 transition-colors">
                Terms of services
              </a>
              <a href="#" className="hover:text-white/80 transition-colors">
                Privacy policy
              </a>
              <a href="#" className="hover:text-white/80 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;