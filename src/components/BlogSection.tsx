import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import blogImage from "@/assets/blog-placeholder.jpg";
import { Button } from "@/components/ui/button";

const BlogSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const blogPosts = [
    {
      date: "10th October 2025",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: blogImage,
    },
    {
      date: "10th October 2025",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: blogImage,
    },
    {
      date: "10th October 2025",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: blogImage,
    },
  ];

  return (
    <section id="blogs" className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-primary font-semibold mb-2">Our Blog</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Latest News</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-video">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <button className="text-primary font-semibold flex items-center group-hover:gap-2 transition-all">
                Read More...
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.article>
          ))}
        </div>

        <div className="flex justify-center gap-2">
          <Button variant="outline" size="sm">1</Button>
          <Button variant="outline" size="sm">2</Button>
          <Button variant="outline" size="sm">Next</Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
