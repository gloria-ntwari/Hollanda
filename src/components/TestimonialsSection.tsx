import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useRef, useEffect } from "react";
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

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    { name: "Niyibizi Egide", role: "Head of Production", text: "Winnaz is a source of employment for over 60 people directly and over 450 indirectly. This gives hope that agriculture combined with industry can transform the economy of our regions.", image: client1 },
    { name: "Uwanyirigira Clarisse", role: " Head of economic development in Musanze district", text: "Hollanda Fairfoods is a company that has made a difference in the lives of its people and has built a new image of how agriculture can develop the country.", image: client2 },
    { name: "Nzabarinda Isaac", role: "Farmer", text: "Before, we used to grow potatoes and harvest them, but we had no market. Now we are at peace because we trust that Winnaz will buy our produce. Since they started buying our potatoes, we have been able to build good houses, pay for our children's education, and our women have even started organizing themselves into savings cooperatives.", image: client3 },
    { name: "Uwimana Claudine", role: "Farmer", text: "Winnaz has made farmers feel valued. Now that we are trained on how to farm properly, we get good seeds, and the money we earn allows us to live well. Now, agriculture is not a job for the unemployed; it is a job, it is a source of development.", image: client4 },
  ];

  // Detect small screens
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (direction === "left" && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else if (direction === "right" && currentIndex < testimonials.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const getCurrentTestimonials = () => {
    if (isMobile) {
      return [testimonials[currentIndex]];
    } else {
      const start = Math.max(0, currentIndex - 1);
      const end = Math.min(testimonials.length, start + 3);
      return testimonials.slice(start, end);
    }
  };

  const totalDots = testimonials.length;

  return (
    <section className="section-padding bg-background">
      <div className="container-custom relative">
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
            className={`absolute ${isMobile ? "left-2 top-1/2 -translate-y-1/2" : "left-0 top-1/2 -translate-y-1/2"
              } z-10 w-10 h-10 flex items-center justify-center transition-all duration-300 ${currentIndex === 0
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
            className={`absolute ${isMobile ? "right-2 top-1/2 -translate-y-1/2" : "right-0 top-1/2 -translate-y-1/2"
              } z-10 w-10 h-10 flex items-center justify-center transition-all duration-300 ${currentIndex === testimonials.length - 1
                ? "text-gray-300 cursor-not-allowed"
                : "text-gray-600 hover:text-primary cursor-pointer"
              }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonials */}
          <div className="px-4 md:px-12">
            <div
              className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-3"
                } gap-6 md:gap-8 mb-12`}
            >
              {getCurrentTestimonials().map((testimonial, index) => (
                <div
                  key={`${testimonial.name}-${index}`}
                  className={`text-center relative ${!isMobile && index === 1 ? "scale-110 z-20 transform" : "scale-100 z-5"
                    }`}
                  style={{
                    filter:
                      !isMobile && index === 1
                        ? "blur(0px) brightness(1)"
                        : "brightness(0.7)",
                  }}
                >
                  {/* Profile */}
                  <div className="flex items-center justify-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4 transition-all duration-500"
                    />
                    <div className="text-left">
                      <h3 className="font-bold text-base font-barlow text-black">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm font-barlow text-black">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Text */}
                  <p
                    className={`text-sm md:text-base max-w-xs mx-auto leading-relaxed font-barlow transition-all duration-500 ${!isMobile && index === 1 ? "text-black" : "text-gray-600"
                      }`}
                  >
                    {testimonial.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Dots remain same */}
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
