import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(1); // Start with middle testimonial focused

  const testimonials = [
    {
      name: "John Doe",
      role: "Entrepreneur",
      text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit. Dolor aliquam neque fuga minus dignissimos id fugiat enim",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "John Doe",
      role: "Entrepreneur",
      text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit. Dolor aliquam neque laudantium fuga minus dignissimos id fugiat enim, non, assumenda, aliquid dicta officia beatae",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "John Doe",
      role: "Entrepreneur",
      text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit. Dolor aliquam neque la udantium fuga minus dignissim",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "John Doe",
      role: "Entrepreneur",
      text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit. Dolor aliquam neque la udantium fuga minus dignissim",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face"
    }
  ];

  // Calculate which testimonial is in the center based on scroll position
  useEffect(() => {
    const updateCenterTestimonial = () => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const containerRect = container.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;

        const testimonialElements = container.children;
        let centerIndex = 0;
        let minDistance = Infinity;

        for (let i = 0; i < testimonialElements.length; i++) {
          const element = testimonialElements[i] as HTMLElement;
          const elementRect = element.getBoundingClientRect();
          const elementCenter = elementRect.left + elementRect.width / 2;
          const distance = Math.abs(elementCenter - containerCenter);

          if (distance < minDistance) {
            minDistance = distance;
            centerIndex = i;
          }
        }

        setCurrentIndex(centerIndex);
      }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', updateCenterTestimonial);
      updateCenterTestimonial(); // Initial calculation

      return () => scrollContainer.removeEventListener('scroll', updateCenterTestimonial);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const testimonialWidth = 350;
      const scrollAmount = testimonialWidth;
      const newScrollLeft = direction === 'left'
        ? scrollRef.current.scrollLeft - scrollAmount
        : scrollRef.current.scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const getTestimonialStyle = (index: number) => {
    const isCenterTestimonial = index === currentIndex;
    const distance = Math.abs(index - currentIndex);

    if (isCenterTestimonial) {
      return {
        transform: 'scale(1.05)',
        opacity: 1,
        zIndex: 10,
        filter: 'blur(0px)'
      };
    } else if (distance === 1) {
      return {
        transform: 'scale(0.95)',
        opacity: 0.6,
        zIndex: 5,
        filter: 'blur(0.5px)'
      };
    } else {
      return {
        transform: 'scale(0.9)',
        opacity: 0.4,
        zIndex: 1,
        filter: 'blur(1px)'
      };
    }
  };

  return (
    <section className="section-padding bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold mb-2 text-lg">
            What our customers say about us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Testimonials</h2>
        </motion.div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
          >
            <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors" />
          </button>

          {/* Testimonials Scroll Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto pb-8 px-16 [&::-webkit-scrollbar]:hidden gap-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-shrink-0 w-80 text-center transition-all duration-700 ease-out"
                style={getTestimonialStyle(index)}
              >
                {/* Profile Section - Exactly like screenshot */}
                <div className="flex items-center mb-6 text-center justify-center ">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div className="text-left">
                    <h3 className="font-bold text-gray-900 text-base">{testimonial.name}</h3>
                    <p className="text-primary text-sm">{testimonial.role}</p>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed  text-center">
                  {testimonial.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (scrollRef.current) {
                    const testimonialWidth = 320;
                    scrollRef.current.scrollTo({
                      left: index * testimonialWidth - testimonialWidth,
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === index
                  ? "bg-primary w-6"
                  : "bg-gray-300"
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