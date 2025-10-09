import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import client1 from "../assets/Rectangle 326.png";
import client2 from "../assets/Rectangle 326 (1).png";
import client3 from "../assets/Rectangle 326 (2).png";
import client4 from "../assets/Rectangle 326 (3).png";

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const testimonials = [
    {
      name: "John Doe",
      role: "Entrepreneur",
      text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit. Dolor aliquam neque laudantium fuga minus dignissimos id fugiat enim, non, assumenda, aliquid dicta officia beatae",
      image: client1
    },
    {
      name: "John Doe",
      role: "Entrepreneur",
      text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit. Dolor aliquam neque laudantium fuga minus dignissimos id fugiat enim, non, assumenda, aliquid dicta officia beatae",
      image: client2
    },
    {
      name: "John Doe",
      role: "Entrepreneur",
      text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit. Dolor aliquam neque laudantium fuga minus dignissimos id fugiat enim, non, assumenda, aliquid dicta officia beatae",
      image: client3
    },
    {
      name: "Jane Smith",
      role: "Business Owner",
      text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit. Dolor aliquam neque laudantium fuga minus dignissimos id fugiat enim, non, assumenda, aliquid dicta officia beatae",
      image: client4
    },
    {
      name: "Mike Johnson",
      role: "CEO",
      text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit. Dolor aliquam neque laudantium fuga minus dignissimos id fugiat enim, non, assumenda, aliquid dicta officia beatae",
      image: client3
    },
    {
      name: "Sarah Wilson",
      role: "Founder",
      text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit. Dolor aliquam neque laudantium fuga minus dignissimos id fugiat enim, non, assumenda, aliquid dicta officia beatae",
      image: client2
    }
  ];

  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const scroll = (direction: 'left' | 'right') => {
    if (direction === 'left' && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else if (direction === 'right' && currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getCurrentTestimonials = () => {
    const startIndex = currentPage * testimonialsPerPage;
    return testimonials.slice(startIndex, startIndex + testimonialsPerPage);
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <p className="text-primary font-semibold mb-2 font-barlow">What our clients say about us</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-barlow">Testimonials</h2>
        </motion.div>

        <div className="relative">
          {/* Left Navigation Arrow */}
          <button
            onClick={() => scroll('left')}
            disabled={currentPage === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center transition-all duration-300 ${currentPage === 0
              ? 'text-gray-300 cursor-not-allowed'
              : 'text-gray-600 hover:text-primary cursor-pointer'
              }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={() => scroll('right')}
            disabled={currentPage === totalPages - 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center transition-all duration-300 ${currentPage === totalPages - 1
              ? 'text-gray-300 cursor-not-allowed'
              : 'text-gray-600 hover:text-primary cursor-pointer'
              }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* 3-Column Grid Layout with Animation */}
          <div className="px-4 md:px-12">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12"
            >
              {getCurrentTestimonials().map((testimonial, index) => (
                <motion.div
                  key={`${currentPage}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  {/* Profile Section */}
                  <div className="flex items-center justify-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div className="text-left">
                      <h3 className="font-bold text-gray-900 text-base font-barlow">{testimonial.name}</h3>
                      <p className="text-primary text-sm font-barlow">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground leading-relaxed text-center font-barlow">
                    {testimonial.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dynamic Dots Indicator */}
          <div className="flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentPage
                  ? 'w-6 bg-primary'
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;