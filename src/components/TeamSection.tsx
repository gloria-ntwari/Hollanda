import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import client1 from "../assets/Rectangle 326.png";
import client2 from "../assets/Rectangle 326 (1).png";
import client3 from "../assets/Rectangle 326 (2).png";
import client4 from "../assets/Rectangle 326 (3).png";
import client5 from "../assets/Rectangle 326 (4).png";



const TeamSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  const teamMembers = [
    {
      name: "Smith Johnson",
      role: "Director",
      image: client1
    },
    {
      name: "John Doe",
      role: "CEO",
      image: client2
    },
    {
      name: "Harry Bails",
      role: "Manager",
      image: client3
    },
    {
      name: "Sarah Wilson",
      role: "Operations Lead",
      image: client4
    },
    {
      name: "Michael Chen",
      role: "Head of Production",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Emma Davis",
      role: "Quality Assurance",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "David Brown",
      role: "Supply Chain",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Lisa Anderson",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face"
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="section-padding bg-muted/30 overflow-hidden">
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

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-2 mb-6">
          <button
            onClick={() => scroll('left')}
            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300 group"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300 group"
          >
            <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors" />
          </button>
        </div>

        {/* Scrollable Team Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex-shrink-0 group cursor-pointer"
            >
              <div className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 overflow-hidden w-72">
                {/* Image Container with Orange Accent */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover  group-hover:grayscale-0 transition-all duration-500"
                  />
                  {/* Orange Accent Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-primary "></div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold text-sm uppercase tracking-wide">
                    {member.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-6">
          <div className="flex gap-2">
            {Array.from({ length: Math.ceil(teamMembers.length / 3) }).map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300 hover:bg-primary transition-colors cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>


    </section>
  );
};

export default TeamSection;
