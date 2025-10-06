import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Phone } from "lucide-react";

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
      <div
        className="py-20"
        style={{
          background: "var(--gradient-dark)",
        }}
      >
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              SIGN UP TO FOLLOW
            </h2>
            <p className="text-2xl md:text-3xl mb-8">
              <span className="text-secondary">HOLLANDA</span>{" "}
              <span className="text-white">PROJECTS, FUNDING AND</span>
              <br />
              <span className="text-white">CAREER </span>
              <span className="text-secondary">OPPORTUNITIES</span>
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="max-w-md mx-auto"
            >
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="mb-4"
                  required
                />
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  Sign Up
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer Content */}
      <div
        className="py-12"
        style={{
          background: "var(--gradient-dark)",
        }}
      >
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">
                    H
                  </span>
                </div>
                <span className="text-xl font-bold text-white">Hollanda</span>
              </div>
              <div className="text-white/80 space-y-2 mb-6">
                <p className="font-semibold">Hollanda FairFoods LTD</p>
                <p>Warehouse: KG 173 st, Kigali-</p>
                <p>Rwanda</p>
                <p>Opposite Grand Legacy</p>
                <p>Hotel Main office: KG 622 st,</p>
                <p>House3, Factory: Musanze</p>
                <p>Gyanika Road</p>
                <p>Tel: +250780050540</p>
                <p>Email: customerservice@hollandafairfoods.com</p>
              </div>
            </motion.div>

            {/* Quick Links & Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex flex-wrap gap-6 mb-8 text-white">
                <a href="#home" className="hover:text-primary transition-colors">
                  Home
                </a>
                <a href="#about" className="hover:text-primary transition-colors">
                  About
                </a>
                <a href="#products" className="hover:text-primary transition-colors">
                  Products
                </a>
                <a href="#blogs" className="hover:text-primary transition-colors">
                  Blogs
                </a>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact us
                </a>
              </div>
              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all">
                  <Phone className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all">
                  <Instagram className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all">
                  <Twitter className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all">
                  <Linkedin className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all">
                  <Youtube className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
              <p>©2025 Copyrwrites</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of services
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy policy
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
