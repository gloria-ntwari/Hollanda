import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [pageIndex, setPageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    { name: "Mugisha Samuella", role: "Certified winnaz lover", text: "winnaz are made from fresh potatoes grown on the volcanic soils ofRwanda's Northern Region. We work closely together with Rwandan smallholder" },
    { name: "Kwizera David", role: "Food Enthusiast", text: "Between meetings and errands, Winnaz Chips keep me fueled throughout the day. They're not just a  snack—they're my little pick-me-up when I need it most." },
    { name: "Ishimwe Andy", role: "Winnaz consumer", text: "Winnaz Chips are my secret weapon for hosting! Whenever I bring them out, my guests can't stop talking about how tasty they are. They're always a crowd-pleaser." },
    { name: "Gisubizo James", role: "Winnaz Customer", text: "As someone who cares about eating natural foods, Winnaz Chips are a lifesaver! They're made from real ingredients and still taste amazing." },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pageSize = isMobile ? 1 : 3;
  const totalPages = Math.ceil(testimonials.length / pageSize);

  // Ensure pageIndex stays within bounds when screen size changes
  useEffect(() => {
    setPageIndex((prev) => Math.min(prev, Math.max(0, totalPages - 1)));
  }, [totalPages]);

  const scroll = (direction: "left" | "right") => {
    if (direction === "left" && pageIndex > 0) {
      setPageIndex((prev) => prev - 1);
    } else if (direction === "right" && pageIndex < totalPages - 1) {
      setPageIndex((prev) => prev + 1);
    }
  };

  const getCurrentTestimonials = () => {
    const start = pageIndex * pageSize;
    const end = Math.min(testimonials.length, start + pageSize);
    return testimonials.slice(start, end);
  };

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
            disabled={pageIndex === 0}
            className={`absolute ${isMobile ? "left-2 top-1/2 -translate-y-1/2" : "left-0 top-1/2 -translate-y-1/2"
              } z-10 w-10 h-10 flex items-center justify-center transition-all duration-300 ${pageIndex === 0
                ? "text-gray-300 cursor-not-allowed"
                : "text-gray-600 hover:text-primary cursor-pointer"
              }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            disabled={pageIndex === totalPages - 1}
            className={`absolute ${isMobile ? "right-2 top-1/2 -translate-y-1/2" : "right-0 top-1/2 -translate-y-1/2"
              } z-10 w-10 h-10 flex items-center justify-center transition-all duration-300 ${pageIndex === totalPages - 1
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
                  {/* Profile Info */}
                  <div className="flex flex-col items-center justify-center mb-6">
                    <h3 className="font-bold text-base font-barlow text-black">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm font-barlow text-black">
                      {testimonial.role}
                    </p>
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

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setPageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === pageIndex
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
