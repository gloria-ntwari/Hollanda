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
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-barlow">Contact us</h2>
            <p className="text-muted-foreground mb-12 font-barlow">
              Hello enter your details if u wanna contact us or even other thoing stay
              <br></br>
              Blessed
            </p>

            {/* Contact Information in 2x2 Grid Layout */}
            <div className="grid grid-cols-2 gap-8">
              {/* Email */}
              <div>
                <h3 className="font-bold font-barlow text-lg mb-4">Email</h3>
                <div className="space-y-1">
                  <p className="text-muted-foreground font-barlow">
                    bateteangeanadette@gmail.com
                  </p>
                  <p className="text-muted-foreground font-barlow">
                    runbacompany@indo.org
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div>
                <h3 className="font-bold font-barlow text-lg mb-4">Phone</h3>
                <div className="space-y-1">
                  <p className="text-muted-foreground font-barlow">
                    bateteangeanadette@gmail.com
                  </p>
                  <p className="text-muted-foreground font-barlow">
                    runbacompany@indo.org
                  </p>
                </div>
              </div>

              {/* Mobile */}
              <div>
                <h3 className="font-bold font-barlow text-lg mb-4">Mobile</h3>
                <div className="space-y-1">
                  <p className="text-muted-foreground font-barlow">
                    bateteangeanadette@gmail.com
                  </p>
                  <p className="text-muted-foreground font-barlow">
                    runbacompany@indo.org
                  </p>
                </div>
              </div>

              {/* Office */}
              <div>
                <h3 className="font-bold font-barlow text-lg mb-4">Office</h3>
                <div className="space-y-1">
                  <p className="text-muted-foreground font-barlow">
                    bateteangeanadette@gmail.com
                  </p>
                  <p className="text-muted-foreground font-barlow">
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
              <h3 className="text-2xl font-bold mb-6 font-barlow">Write a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 font-barlow">
                      First Name*
                    </label>
                    <Input placeholder="Ange" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 font-barlow">
                      Last Name*
                    </label>
                    <Input placeholder="Ange" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 font-barlow">
                    Email*
                  </label>
                  <Input type="email" placeholder="Ange" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 font-barlow">
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
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold font-barlow"
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
