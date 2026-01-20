import { useState } from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(0);

  const experience = [
    {
      company: "Ratepay",
      role: "Fraud Analyst (Working Student)",
      location: "Berlin, Germany",
      period: "2024 – Present",
      summary:
        "Fraud screening and transaction risk analysis using internal tools and Python/SQL to prevent fraud, reduce risk exposure, and improve decision accuracy.",
      impact: [
        "Processed & analyzed 10,000+ transactions/week using Python + SQL",
        "Raised fraud detection accuracy by 30% through rule optimization + trend analysis",
        "Reduced false positives by 15% (better precision, less blocking legit customers)",
        "Improved partner response turnaround by ~20% by streamlining review workflows",
      ],
      whatIDo: [
        "Turn raw transaction signals into decisions: investigate → confirm → document",
        "Spot fraud trends early (repeat patterns, anomalies, suspicious behavior clusters)",
        "Communicate decisions clearly to partners and internal stakeholders",
      ],
      skills: ["Python", "SQL", "Fraud Analytics", "Pattern Detection", "Reporting", "Communication"],
    },

    {
      company: "Tesla",
      role: "Production Associate",
      location: "Germany",
      period: "2023 – 2024",
      summary:
        "Fast-paced execution under pressure. I worked in a high-output environment where quality, speed, and discipline are non-negotiable.",
      impact: [
        "Improved operational efficiency by 20% by reducing bottlenecks and rework",
        "Contributed to 15% downtime reduction through daily problem-solving",
      ],
      whatIDo: [
        "Worked in a process-heavy system: speed + accuracy + consistency",
        "Helped identify breakdown points and improved daily flow",
        "Delivered reliable output under tight constraints and quality checks",
      ],
      skills: ["Process Optimization", "Quality Control", "Execution", "Teamwork", "Operations"],
    },

    {
      company: "Good Will Prints",
      role: "Front-End Development Intern",
      location: "",
      period: "2020 – 2021",
      summary:
        "Frontend development internship where I shipped responsive UI and supported backend integration — focused on usability, layout, and clean delivery.",
      impact: [
        "Built responsive pages with HTML/CSS/JS and integrated Django templates",
        "Boosted engagement by 25% through improved UI structure + responsiveness",
      ],
      whatIDo: [
        "Delivered production-ready UI updates (mobile-first, clean layout)",
        "Converted requirements into usable screens fast",
      ],
      skills: ["HTML", "CSS", "JavaScript", "Django", "Responsive UI"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  };

  const active = experience[activeExperience];

  return (
    <section id="experience" className="section-padding bg-primary">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-8 md:mb-12"
        >
          <h4 className="font-mono text-sm text-muted mb-2">CAREER</h4>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-16 h-[2px] bg-light opacity-50"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
          {/* Selector - mobile */}
          <motion.div
            className="md:hidden w-full mb-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs text-muted">SELECT ROLE</p>
              <div className="text-xs text-muted">
                {activeExperience + 1}/{experience.length}
              </div>
            </div>

            <div className="flex overflow-x-auto pb-3 scrollbar-hide snap-x snap-mandatory">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`snap-start flex-shrink-0 w-[75%] mr-3 p-4 cursor-pointer transition-all duration-300 ${
                    activeExperience === index
                      ? "bg-secondary bg-opacity-50 border border-light border-opacity-20"
                      : "bg-secondary bg-opacity-10 border border-muted border-opacity-10"
                  }`}
                  onClick={() => setActiveExperience(index)}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3
                    className={`font-medium text-sm mb-1 ${
                      activeExperience === index ? "text-light" : "text-muted"
                    }`}
                  >
                    {job.company}
                  </h3>
                  <p className="text-xs text-muted line-clamp-1">{job.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Selector - desktop */}
          <motion.div
            className="hidden md:block md:col-span-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experience.map((job, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`border-l border-muted ${
                  activeExperience === index
                    ? "border-opacity-100"
                    : "border-opacity-20"
                } p-4 cursor-pointer transition-all duration-300 ${
                  activeExperience === index ? "bg-secondary bg-opacity-30" : ""
                }`}
                onClick={() => setActiveExperience(index)}
                whileHover={{
                  backgroundColor: "rgba(26, 26, 26, 0.3)",
                  transition: { duration: 0.2 },
                }}
              >
                <h3
                  className={`font-medium text-sm mb-1 ${
                    activeExperience === index ? "text-light" : "text-muted"
                  }`}
                >
                  {job.company}
                </h3>
                <p className="text-xs text-muted line-clamp-1">{job.role}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Details */}
          <motion.div
            className="col-span-1 md:col-span-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={activeExperience}
            transition={{ duration: 0.45 }}
          >
            <motion.div
              className="bg-secondary bg-opacity-20 p-4 md:p-6 border border-muted border-opacity-10"
              initial={{ y: 16 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">
                    {active.role}
                  </h3>
                  <p className="text-sm text-muted">
                    {active.company}
                    {active.location ? ` — ${active.location}` : ""}
                  </p>
                </div>

                <p className="text-xs md:text-sm font-mono text-light opacity-70 whitespace-nowrap">
                  {active.period}
                </p>
              </div>

              {/* Summary */}
              <p className="text-sm md:text-base text-muted mb-5 leading-relaxed">
                {active.summary}
              </p>

              {/* IMPACT */}
              <div className="mb-5">
                <h4 className="text-xs md:text-sm font-mono text-light mb-3">
                  RESULTS / IMPACT
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {active.impact.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-light opacity-50 mt-1">→</span>
                      <span className="text-xs md:text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* WHAT I DID */}
              <div className="mb-5">
                <h4 className="text-xs md:text-sm font-mono text-light mb-3">
                  WHAT I OWNED
                </h4>
                <ul className="space-y-2">
                  {active.whatIDo.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-light opacity-50 mt-1">→</span>
                      <span className="text-xs md:text-sm text-muted">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SKILLS */}
              <div>
                <h4 className="text-xs md:text-sm font-mono text-light mb-3">
                  SKILLS / TOOLS
                </h4>
                <div className="flex flex-wrap gap-2">
                  {active.skills.map((s, i) => (
                    <span
                      key={i}
                      className="text-xs py-1 px-2 md:px-3 bg-primary border border-muted border-opacity-20 rounded-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
