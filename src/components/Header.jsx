import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //  ONLY for mobile menu: lock background scroll while menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // If user resizes to desktop while menu is open, close it automatically
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)"); // Tailwind md
    const onChange = (e) => {
      if (e.matches) setMobileMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const navItems = [
    "Home",
    "Projects",
    "Skills",
    "Education",
    "Experience",
    "Contact",
  ];

  const headerVariants = {
    initial: { y: -100 },
    animate: {
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 + 0.2, duration: 0.4 },
    }),
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-0 ${
          scrolled ? "glassmorphism-no-border py-3" : "bg-transparent py-6"
        }`}
        variants={headerVariants}
        initial="initial"
        animate="animate"
        style={{
          borderWidth: 0,
          borderStyle: "none",
        }}
      >
        <div className="container-custom flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <div className="w-[2px] h-6 bg-light mr-2"></div>
            <span className="font-mono text-lg tracking-wider">SO</span>
          </motion.div>

          {/* Desktop Navigation  */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item, i) => (
                <motion.li
                  key={item}
                  custom={i}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-medium hover:text-light transition-colors duration-300"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Button (moved OUTSIDE header so it stays above overlay) */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="md:hidden text-light p-1 fixed top-6 right-6 z-[3000]"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <div className="relative w-6 h-6">
          <motion.div
            className="absolute left-0 top-1/2 w-full h-px bg-light"
            style={{ transformOrigin: "center" }}
            animate={
              mobileMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }
            }
            transition={{ duration: 0.25 }}
          />
          <motion.div
            className="absolute left-0 top-1/2 w-full h-px bg-light"
            animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.div
            className="absolute left-0 top-1/2 w-full h-px bg-light"
            style={{ transformOrigin: "center" }}
            animate={
              mobileMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }
            }
            transition={{ duration: 0.25 }}
          />
        </div>
      </motion.button>

      {/* Mobile Menu - Outside header */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[1000] md:hidden"
            style={{
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-secondary/80"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/*  menu styling */}
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 left-0 w-full bg-secondary py-4 px-6 glassmorphism-no-border"
              style={{ borderWidth: 0 }}
            >
              <ul className="flex flex-col space-y-4 pt-16">
                {navItems.map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-sm font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
