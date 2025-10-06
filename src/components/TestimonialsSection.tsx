import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { ChevronLeft, ChevronRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "John Doe",
      role: "Entrepreneur",
      text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit. Dolor maiores expedita deserunt ipsum quo dignissim error voluptates odio laoreet, ullam consequat diam officia faucibus quae id et",
    },
    {
      name: "John Doe",
      role: "Entrepreneur",
      text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit. Dolor maiores expedita deserunt ipsum quo dignissim error voluptates odio laoreet, assumenda, ullam dicta officia faucibus quae id et",
    },
    {
      name: "John Doe",
      role: "Entrepreneur",
      text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit. Dolor maiores expedita deserunt ipsum quo dignissim error voluptates consequat odio laoreet, assumenda, ullam huya magna diospecio yt",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold mb-2">
            What our customers say about us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">Testimonials</h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Testimonials Carousel */}
          <div className="overflow-hidden px-12">
            <motion.div
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex"
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-card border rounded-3xl p-8 shadow-lg"
                  >
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
                        <User className="w-10 h-10 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-1">{testimonial.name}</h3>
                      <p className="text-primary font-semibold mb-4">
                        {testimonial.role}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {testimonial.text}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30"
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
