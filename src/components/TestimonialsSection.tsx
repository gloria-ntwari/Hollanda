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
  const [currentIndex, setCurrentIndex] = useState(1); // middle one active

  const testimonials = [
    { name: "John Doe", role: "Entrepreneur", text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit. Dolor aliquam neque laudantium fuga minus dignissimos id fugiat enim, non, assumenda, aliquid dicta officia beatae", image: client1 },
    { name: "John Doe", role: "Entrepreneur", text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit. Dolor aliquam neque laudantium fuga minus dignissimos id fugiat enim, non, assumenda, aliquid dicta officia beatae", image: client2 },
    { name: "John Doe", role: "Entrepreneur", text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit. Dolor aliquam neque laudantium fuga minus dignissimos id fugiat enim, non, assumenda, aliquid dicta officia beatae", image: client3 },
    { name: "Jane Smith", role: "Business Owner", text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit. Dolor aliquam neque laudantium fuga minus dignissimos id fugiat enim, non, assumenda, aliquid dicta officia beatae", image: client4 },
    { name: "Mike Johnson", role: "CEO", text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit. Dolor aliquam neque laudantium fuga minus dignissimos id fugiat enim, non, assumenda, aliquid dicta officia beatae", image: client3 },
    { name: "Sarah Wilson", role: "Founder", text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit. Dolor aliquam neque laudantium fuga minus dignissimos id fugiat enim, non, assumenda, aliquid dicta officia beatae", image: client2 },
  ];


  const scroll = (direction: "left" | "right") => {
    if (direction === "left" && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else if (direction === "right" && currentIndex < testimonials.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };


  const getCurrentTestimonials = () => {
    const start = Math.max(0, currentIndex - 1);
    const end = Math.min(testimonials.length, start + 3);
    return testimonials.slice(start, end);
  };

  // Keep the dots logic the same (total visible positions)
  const totalDots = testimonials.length;

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 justify-start"
        >
          <p className="text-primary font-semibold mb-2 font-barlow">
            What our clients say about us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-barlow">
            Testimonials
          </h2>
        </motion.div>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center transition-all duration-300 ${currentIndex === 0
              ? "text-gray-300 cursor-not-allowed"
              : "text-gray-600 hover:text-primary cursor-pointer"
              }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            disabled={currentIndex === testimonials.length - 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center transition-all duration-300 ${currentIndex === testimonials.length - 1
              ? "text-gray-300 cursor-not-allowed"
              : "text-gray-600 hover:text-primary cursor-pointer"
              }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonials - No sliding animations */}
<div className="px-4 md:px-12">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
    {getCurrentTestimonials().map((testimonial, index) => (
      <div
        key={`${testimonial.name}-${index}`}
        className={`text-center relative ${
          index === 1 ? "scale-110 z-20 transform" : "scale-100 z-5"
        }`}
        style={{
          filter:
            index === 1
              ? "blur(0px) brightness(1)"
              : " brightness(0.7)",
        }}
      >
        {/* Profile */}
        <div className="flex items-center justify-center mb-6">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className={`w-12 h-12 rounded-full object-cover mr-4 transition-all duration-500`}
          />
          <div className="text-left">
            <h3
              className={`font-bold text-base font-barlow transition-all duration-500 ${
                index === 1 ? "text-black" : "text-black"
              }`}
            >
              {testimonial.name}
            </h3>
            <p
              className={`text-sm font-barlow transition-all duration-500 ${
                index === 1 ? "text-black" : "text-black"
              }`}
            >
              {testimonial.role}
            </p>
          </div>
        </div>

        {/* Text */}
        <p
          className={`text-sm md:text-base max-w-xs mx-auto leading-relaxed font-barlow transition-all duration-500 ${
            index === 1 ? "text-black" : "text-gray-500"
          }`}
        >
          {testimonial.text}
        </p>

        {index === 1 && (
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-2xl" />
        )}
      </div>
    ))}
  </div>
</div>


          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalDots }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                  ? "bg-black scale-125"
                  : "bg-gray-400 hover:bg-gray-500"
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
