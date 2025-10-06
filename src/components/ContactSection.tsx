import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Contact us</h2>
            <p className="text-muted-foreground mb-12">
              Hello enter your details if u wanna contact us or even other thoing stay
              Blessed
            </p>

            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <h3 className="font-bold">Email</h3>
                </div>
                <div className="space-y-1 ml-8">
                  <p className="text-muted-foreground">
                    bateteangeanadette@gmail.com
                  </p>
                  <p className="text-muted-foreground">
                    runbacompany@indo.org
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <h3 className="font-bold">Phone</h3>
                </div>
                <div className="space-y-1 ml-8">
                  <p className="text-muted-foreground">
                    bateteangeanadette@gmail.com
                  </p>
                  <p className="text-muted-foreground">
                    runbacompany@indo.org
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h3 className="font-bold">Mobile</h3>
                </div>
                <div className="space-y-1 ml-8">
                  <p className="text-muted-foreground">
                    bateteangeanadette@gmail.com
                  </p>
                  <p className="text-muted-foreground">
                    runbacompany@indo.org
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h3 className="font-bold">Office</h3>
                </div>
                <div className="space-y-1 ml-8">
                  <p className="text-muted-foreground">
                    bateteangeanadette@gmail.com
                  </p>
                  <p className="text-muted-foreground">
                    runbacompany@indo.org
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-card border rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Write a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      First Name*
                    </label>
                    <Input placeholder="Ange" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Last Name*
                    </label>
                    <Input placeholder="Ange" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email*
                  </label>
                  <Input type="email" placeholder="Ange" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message*
                  </label>
                  <Textarea
                    placeholder="Write down your message"
                    rows={5}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  Submit
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
