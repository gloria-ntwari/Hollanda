import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import navImage from "../assets/Adobe Express - file 1.png"

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Blogs", href: "#blogs" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-5"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 ">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <div className="items-center justify-center">
              <img
                src={navImage}
                alt="logo"
                className="h-10 md:h-14 lg:h-18 w-auto object-contain"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-primary transition-colors duration-300 font-barlow font-medium text-primary"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button - Always closes menu when X is shown */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={() => {
              if (isMobileMenuOpen) {
                // Always close menu when X is clicked
                setIsMobileMenuOpen(false);
              } else {
                // Open menu when hamburger is clicked
                setIsMobileMenuOpen(true);
              }
            }}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu - Always Full Orange Background */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-[9999] animate-fade-in">
            {/* Full Screen Menu Content - Always Solid Orange (like image 2) */}
            <div className="fixed inset-0 bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 overflow-hidden min-h-screen w-full">
              {/* Close Button - Always works */}
              <div className="absolute top-6 right-6 z-20">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-orange-100 hover:bg-white/10 rounded-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="h-8 w-8" />
                </Button>
              </div>

              {/* Menu Items - Centered like in image 2 */}
              <div className="flex flex-col items-center justify-center min-h-screen px-8 relative z-10">
                <div className="flex flex-col space-y-12 text-center w-full max-w-sm">
                  {navLinks.map((link, index) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-white hover:text-orange-100 transition-all duration-300 font-barlow font-semibold text-3xl py-4 hover:scale-105 active:scale-95"
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        animation: 'slideInFromRight 0.5s ease-out forwards',
                        opacity: 0
                      }}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Multiple background layers to ensure complete coverage */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 -z-10"></div>
              <div className="absolute inset-0 bg-orange-500 -z-20"></div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
