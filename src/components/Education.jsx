import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // ✅ Updated education details
  const education = [
    {
      institution: "University of Europe for Applied Sciences (UE)",
      degree: "B.Sc. Software Engineering",
      location: "Berlin, Germany",
      period: "2024 – Present (Expected 2027)",
    },
  ];

  // ✅ Updated highlights
  const highlights = [
    "Fraud Analyst (Working Student) at Ratepay  analyzing 10,000+ transactions weekly with Python & SQL",
    "Improved fraud detection accuracy by 30% and reduced false positives by 15%",
    "Built full-stack projects with React + Vite, Node.js/Express, PostgreSQL, and OpenAI APIs",
  ];

  const certifications = [
    "AWS Cloud Practitioner",
    "IBM AI Engineering Professional Certificate",
    "Applied Machine Learning in Python",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
  };

  return (
    <section id="education" className="section-padding bg-primary">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <h4 className="font-mono text-sm text-muted mb-2">BACKGROUND</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & Highlights
          </h2>
          <div className="w-16 h-[2px] bg-light opacity-50"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Education */}
          <motion.div
            className="md:col-span-2"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-xl font-medium mb-6 flex items-center">
              <div className="w-4 h-4 border border-light mr-3"></div>
              Education
            </h3>

            <div className="space-y-8">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  className="border-l-2 border-muted border-opacity-30 pl-6 relative"
                  variants={itemVariants}
                >
                  <div className="absolute w-3 h-3 bg-primary border border-light rounded-full -left-[7px] top-1"></div>

                  <h4 className="text-lg font-medium mb-1">{edu.institution}</h4>

                  <p className="text-muted mb-1">
                    {edu.degree}
                    {edu.location ? ` — ${edu.location}` : ""}
                  </p>

                  {edu.period && (
                    <p className="text-sm font-mono text-light opacity-70">
                      {edu.period}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Certifications under Education (cleaner + more believable than random achievements) */}
            <motion.div
              className="mt-10 p-5 border border-muted border-opacity-20 bg-secondary bg-opacity-30"
              variants={itemVariants}
            >
              <h4 className="text-sm font-medium mb-3">Certifications</h4>
              <ul className="space-y-2">
                {certifications.map((c, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-light mt-1 mr-2 opacity-60">⁕</span>
                    <span className="text-muted text-sm">{c}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-xl font-medium mb-6 flex items-center">
              <div className="w-4 h-4 border border-light mr-3"></div>
              Highlights
            </h3>

            <ul className="space-y-4">
              {highlights.map((h, i) => (
                <motion.li
                  key={i}
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <span className="text-light mt-1 mr-2 opacity-60">⁕</span>
                  <span>{h}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="mt-8 p-4 border border-muted border-opacity-20 bg-secondary bg-opacity-30"
              variants={itemVariants}
            >
              <h4 className="text-sm font-medium mb-2">Focus</h4>
              <p className="text-muted text-sm">
                Building scalable web apps and applying ML/NLP with strong
                foundations in data structures, cloud, and automation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
