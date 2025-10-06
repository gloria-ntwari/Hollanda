import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import productWinnaz from "@/assets/product-winnaz.jpg";
import productWheeliez from "@/assets/product-wheeliez.jpg";

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
          className="text-center mb-16"
        >
          <p className="text-primary text-lg font-semibold mb-2">
            EXPLORER
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            A SELECTION OF OUR PRODUCTS
          </h2>
        </motion.div>

        {/* Product logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-12 mb-20"
        >
          <div className="text-6xl md:text-7xl font-black text-primary">
            WINNAZ
          </div>
          <div className="text-6xl md:text-7xl font-black text-primary" style={{
            textShadow: "3px 3px 0 hsl(var(--foreground))"
          }}>
            WHEELIEZ
          </div>
        </motion.div>

        {/* Winnaz Product */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-primary font-semibold mb-4">Our products</p>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              WINNAZ - THE <span className="text-primary">STAR</span> OF
              <br />
              EVERY PARTY!
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Golden, crunchy, and full of flavor. Winnaz is made from specially selected
              potatoes and crafted to deliver a perfect bite every time.
            </p>
            <h4 className="text-xl font-bold mb-4">FROM FIELD TO PACK</h4>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Each Winnaz crisp begins on a smallholder farm. Our agronomists work closely
              with growers to improve yields and quality. We source potatoes that meet
              strict standards, add slow, controlled frying, and finish each batch under
              rigorous quality checks, so every bag carries the care of the farm and the
              taste consumers love.
            </p>
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold group">
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
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              WHEELIEZ - THE <span className="text-primary">STAR</span> OF
              <br />
              EVERY PARTY!
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Golden, crunchy, and full of flavor. Winnaz is made from specially selected
              potatoes and crafted to deliver a perfect bite every time.
            </p>
            <h4 className="text-xl font-bold mb-4">FROM FIELD TO PACK</h4>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Each Winnaz crisp begins on a smallholder farm. Our agronomists work closely
              with growers to improve yields and quality. We source potatoes that meet
              strict standards, add slow, controlled frying, and finish each batch under
              rigorous quality checks, so every bag carries the care of the farm and the
              taste consumers love.
            </p>
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold group">
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
