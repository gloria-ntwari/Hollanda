import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import productWinnaz from "../assets/WhatsApp Image 2025-10-20 at 3.22.04 PM.jpeg";
import tsinda from "../assets/WhatsApp_Image_2025-10-20_at_1.32.40_PM-removebg-preview.png";
import productWheeliez from "../assets/WhatsApp_Image_2025-10-22_at_4.55.22_PM-removebg-preview.png";
import winnaz from "../assets/Mask group.png";
import wheeliez from "../assets/Clip path group.png";


const ProductsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="products" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-lg font-semibold mb-2 font-barlow">
            EXPLORE <span className=" text-black">A SELECTION OF OUR PRODUCTS</span>
          </p>
        </motion.div>

        {/* Product logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-28 mb-12 md:mb-16"
        >
          <div className="flex-shrink-0">
            <img
              src={winnaz}
              alt="Winnaz"
              className="h-20 md:h-24 lg:h-32 w-auto object-contain"
            />
          </div>
          <div className="flex-shrink-0">
            <img
              src={wheeliez}
              alt="Wheeliez"
              className="h-20 md:h-24 lg:h-28 w-auto object-contain"
            />
          </div>
          <div className="flex-shrink-0">
            <img
              src={tsinda}
              alt="Wheeliez"
              className="h-20 md:h-24 lg:h-28 w-auto object-contain"
            />
          </div>
        </motion.div>

        {/* Winnaz Product */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-primary font-semibold mb-4 font-barlow">Our products</p>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 font-barlow">
              WINNAZ - THE <span className="text-primary">STAR</span> OF
              <br />
              EVERY PARTY!
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed font-barlow">
              Golden, crunchy, and full of flavor. Winnaz is made from specially selected
              potatoes and crafted to deliver a perfect bite every time.
            </p>
            <h4 className="text-xl font-bold mb-4 font-barlow">FROM FIELD TO PACK</h4>
            <p className="text-muted-foreground mb-8 leading-relaxed font-barlow">
              Each Winnaz crisp begins on a smallholder farm. Our agronomists work closely
              with growers to improve yields and quality. We source potatoes that meet
              strict standards, add slow, controlled frying, and finish each batch under
              rigorous quality checks, so every bag carries the care of the farm and the
              taste consumers love.
            </p>
            <Button className="bg-secondary hover:bg-secondary/90 text-white font-semibold group font-barlow">
              Visit Our Product
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src={productWinnaz}
              alt="Winnaz Products"
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Wheeliez Product */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="order-2 lg:order-1"
          >
            <img
              src={productWheeliez}
              alt="Wheeliez Products"
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6 font-barlow">
              WHEELIEZ - THE <span className="text-primary">STAR</span> OF
              <br />
              EVERY PARTY!
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed font-barlow">
              Golden, crunchy, and full of flavor. Winnaz is made from specially selected
              potatoes and crafted to deliver a perfect bite every time.
            </p>
            <h4 className="text-xl font-bold mb-4 font-barlow">FROM FIELD TO PACK</h4>
            <p className="text-muted-foreground mb-8 leading-relaxed font-barlow">
              Each Winnaz crisp begins on a smallholder farm. Our agronomists work closely
              with growers to improve yields and quality. We source potatoes that meet
              strict standards, add slow, controlled frying, and finish each batch under
              rigorous quality checks, so every bag carries the care of the farm and the
              taste consumers love.
            </p>
            <Button className="bg-secondary hover:bg-secondary/90 text-white font-semibold group font-barlow">
              Visit Our Product
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
