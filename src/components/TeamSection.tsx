import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { User } from "lucide-react";

const TeamSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    { name: "Ange Nadette BATETE", role: "Ceo & Founder" },
    { name: "Ange Nadette BATETE", role: "Ceo & Founder" },
    { name: "Ange Nadette BATETE", role: "Ceo & Founder" },
    { name: "Ange Nadette BATETE", role: "Ceo & Founder" },
    { name: "Ange Nadette BATETE", role: "Ceo & Founder" },
    { name: "Ange Nadette BATETE", role: "Ceo & Founder" },
    { name: "Ange Nadette BATETE", role: "Ceo & Founder" },
    { name: "Ange Nadette BATETE", role: "Ceo & Founder" },
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet our team
          </h2>
          <p className="text-primary text-lg font-semibold mb-4">
            Stronger communities
          </p>
          <p className="text-muted-foreground max-w-3xl">
            Founded in 2014 by This Boer, Hollanda FairFoods crafts premium snacks while
            investing in Rwanda's potato value chain.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square bg-muted">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                  <User className="w-16 h-16 text-muted-foreground/40" />
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300" />
              </div>
              <h3 className="font-semibold text-sm mb-1 text-center">
                {member.name}
              </h3>
              <p className="text-xs text-muted-foreground text-center">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
