import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Target } from "lucide-react";
import aboutImage from "@/assets/Rectangle 3.png";

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        {/* Image */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <img
            src={aboutImage}
            alt="Our Community"
            className="w-full h-[400px] object-cover rounded-3xl shadow-xl"
          />
        </motion.div>

        {/* About Content */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About us
            </h2>
            <p className="text-primary text-lg font-semibold mb-6">
              Stronger communities
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl">
              Founded in 2014 by This Boer, Hollanda FairFoods crafts premium snacks while
              investing in Rwanda's potato value chain. We blend Dutch potato varieties with
              local produce to create delicious crisps that generate income and opportunities.
            </p>
          </motion.div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <Target className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-primary-foreground/90 leading-relaxed">
                  We aim to be Rwanda's best employer, supporting our team's growth while empowering
                  potato farmers to improve their businesses. Our goal is to add value to the potato
                  industry by delivering high-quality, affordable snacks to the region.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-primary-foreground/90 leading-relaxed">
                  We aim to be Rwanda's best employer, supporting our team's growth while empowering
                  potato farmers to improve their businesses. Our goal is to add value to the potato
                  industry by delivering high-quality, affordable snacks to the region.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
