import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import member1 from "../assets/POTRAITS-4-20251020T183405Z-1-001/POTRAITS-4/Thijs Boer.jpg"
import member2 from "../assets/POTRAITS-4-20251020T183405Z-1-001/POTRAITS-4/Niyibizi Egide.jpg"
import member3 from "../assets/POTRAITS-4-20251020T183405Z-1-001/POTRAITS-4/Kwizera Dani.jpg"
import member4 from "../assets/POTRAITS-4-20251020T183405Z-1-001/POTRAITS-4/Umutoni Consolee.jpg"
import member5 from "../assets/POTRAITS-4-20251020T183405Z-1-001/POTRAITS-4/Uwimana Lambert.jpg"
import member6 from "../assets/POTRAITS-4-20251020T183405Z-1-001/POTRAITS-4/Vincent Nsabimana.jpg"
import member7 from "../assets/POTRAITS-4-20251020T183405Z-1-001/POTRAITS-4/Dusabimana Dyna.jpg"
import member8 from "../assets/POTRAITS-4-20251020T183405Z-1-001/POTRAITS-4/Mukanoheri Jacqueline.jpg"
import member9 from "../assets/POTRAITS-4-20251020T183405Z-1-001/POTRAITS-4/Mukamirwa Jaunisse.jpg"
import member10 from "../assets/POTRAITS-4-20251020T183405Z-1-001/POTRAITS-4/Ntirengana Elisa.jpg"
import member11 from "../assets/POTRAITS-4-20251020T183405Z-1-001/POTRAITS-4/Maombe Rusekimvange.jpg"
import member12 from "../assets/POTRAITS-4-20251020T183405Z-1-001/POTRAITS-4/Mukankuranga Gloriose.jpg"
import member13 from "../assets/POTRAITS-4-20251020T183405Z-1-001/POTRAITS-4/Iribagiza Providence.jpg"
import member14 from "../assets/POTRAITS-4-20251020T183405Z-1-001/POTRAITS-4/Muhire Jean Paul Parfait.jpg"
import member15 from "../assets/POTRAITS-4-20251020T183405Z-1-001/POTRAITS-4/Ndayisenga Joseph.jpg"
import member16 from "../assets/POTRAITS-4-20251020T183405Z-1-001/POTRAITS-4/Maniriho Tharcisse.jpg"
import member17 from "../assets/POTRAITS-4-20251020T183405Z-1-001/POTRAITS-4/Ntitenguha Philbert.jpg"
import member18 from "../assets/POTRAITS-4-20251020T183405Z-1-001/POTRAITS-4/Kamayires Mediatrice.jpg"
import member19 from "../assets/POTRAITS-4-20251020T183405Z-1-001/POTRAITS-4/Maniriho Olive.jpg"
import member20 from "../assets/POTRAITS-4-20251020T183405Z-1-001/POTRAITS-4/Fils Serugendo.jpg"
import member21 from "../assets/POTRAITS-4-20251020T183405Z-1-001/POTRAITS-4/Isimbi Patience.jpg"
import member22 from "../assets/POTRAITS-4-20251020T183405Z-1-001/POTRAITS-4/Mbabazo Rugwiro Serge.jpg"
import member23 from "../assets/POTRAITS-4-20251020T183405Z-1-001/POTRAITS-4/Turatsinze Didier.jpg"
import member24 from "../assets/POTRAITS-4-20251020T183405Z-1-001/POTRAITS-4/Uwurukundo Leonie.jpg"
import member25 from "../assets/POTRAITS-4-20251020T183405Z-1-001/POTRAITS-4/Ishimwe Samson.jpg"
import member26 from "../assets/POTRAITS-4-20251020T183405Z-1-001/POTRAITS-4/Niyoyigenera Joseph.jpg"
import member27 from "../assets/POTRAITS-4-20251020T183405Z-1-001/POTRAITS-4/Nshimyumuremyi Antoine.jpg"
import member28 from "../assets/POTRAITS-4-20251020T183405Z-1-001/POTRAITS-4/Liliane.jpg"
import member29 from "../assets/POTRAITS-4-20251020T183405Z-1-001/POTRAITS-4/Mukamana Uwanyiragira.jpg"

const TeamSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  const teamMembers = [
    {
      name: "Thijs Boer",
      role: "Founder/ CEO",
      image: member1
    },
    {
      name: "Niyibizi Egide",
      role: "Head of Production",
      image: member2
    },
    {
      name: "Kwizera Dani",
      role: "Operations Manager",
      image: member3
    },
    {
      name: "Umutoni Consolee",
      role: "Sales Manager",
      image: member4
    },
    {
      name: "Uwimana Lambert",
      role: "Store Manager",
      image: member5
    },
    {
      name: "Vincent Nsabimana",
      role: "Assistant Quality Manager",
      image: member6
    },
    {
      name: "Dusabimana Dyna",
      role: "Factory Operator Section A",
      image: member7
    },
    {
      name: "Mukanoheri Jacqueline",
      role: "Operator Section A",
      image: member8
    },
    {
      name: "Mukamirwa Jaunisse",
      role: "Team Leader Section B",
      image: member9
    },
    {
      name: "Ntirengana Elisa",
      role: "Operator Section A",
      image: member10
    },
    {
      name: "Maombe Rusekimvange",
      role: "Operator Section B",
      image: member11
    },
    {
      name: "Mukankuranga Gloriose",
      role: "Factory Operator Section C",
      image: member12
    },
    {
      name: "Iribagiza Providence",
      role: "Operator Section C",
      image: member13
    },
    {
      name: "Muhire Jean Paul Parfait",
      role: "Factory Operator Section D",
      image: member14
    },
    {
      name: "Ndayisenga Joseph",
      role: "Factory Operator Section D",
      image: member15
    },
    {
      name: "Maniriho Tharcisse",
      role: "Assistant Technician",
      image: member16
    },
    {
      name: "Ntitenguha Philbert",
      role: "Sourcing Manager",
      image: member17
    },
    {
      name: "Kamayires Mediatrice",
      role: "Cleaner",
      image: member18
    },
    {
      name: "Maniriho Olive",
      role: "Cleaner",
      image: member19
    },
    {
      name: "Fils Serugendo",
      role: "Marketing & Communication",
      image: member20
    },
    {
      name: "Isimbi Patience",
      role: "Book Keeper",
      image: member21
    },
    {
      name: "Mbabazo Rugwiro Serge",
      role: "Customer Service Agent",
      image: member22
    },
    {
      name: "Turatsinze Didier",
      role: "Store Manager",
      image: member23
    },
    {
      name: "Uwurukundo Leonie",
      role: "Sales Representative",
      image: member24
    },
    {
      name: "Ishimwe Samson",
      role: "Sales Representative",
      image: member25
    },
    {
      name: "Niyoyigenera Joseph",
      role: "Sales Representative",
      image: member26
    },
    {
      name: "Nshimyumuremyi Antoine",
      role: "Transport Coordinator",
      image: member27
    },
    {
      name: "Liliane",
      role: "Cleaner",
      image: member28
    },
    {
      name: "Mukamana Uwanyiragira",
      role: "Staff Cook",
      image: member29
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
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-[center_20%] group-hover:grayscale-0 transition-all duration-500"
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

      </div>
    </section>
  );
};

export default TeamSection;