import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiCalendar,
  FiCheckCircle,
  FiMapPin,
  FiLayers,
} from "react-icons/fi";

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "LeadSkill Technology Ltd",
      period: "Jan 2026 – Present",
      location: "Savar, Dhaka, Bangladesh",
      featuredProject:
        "MentorshipERP — Enterprise Educational Management System",
      description: [
        "Engineered an enterprise-grade ERP system automating student enrollment, live attendance tracking, exam administration, and teacher workflows.",
        "Integrated complex multi-role REST APIs from a Java backend to deliver real-time data sync and live reporting dashboards for institutional users.",
        "Designed responsive, modular Angular components that streamlined administrative management and reduced manual documentation by 40%.",
        "Designed and developed responsive, user-friendly interfaces using React.js, Angular, Next.js, and Tailwind CSS.",
        "Translated Figma UI/UX designs into clean, reusable Angular and React components, maintaining high design consistency.",
        "Improved layout structure, visual hierarchy, cross-browser compatibility, and mobile responsiveness across all devices.",
      ],
      techStack: [
        "Angular",
        "TypeScript",
        "REST API (Java Backend)",
        "Tailwind CSS",
        "React.js",
        "Next.js",
      ],
    },
    {
      title: "Junior Frontend Developer",
      company: "Tutorian-bd",
      period: "Jul 2025 – Dec 2025",
      location: "Savar, Dhaka, Bangladesh",
      featuredProject: "Learning Management System (LMS)",
      description: [
        "Developed and maintained a responsive Learning Management System (LMS) for online education and exam preparation.",
        "Built modular UI components for course enrollment and student dashboards, integrating REST APIs for dynamic content.",
        "Optimized frontend performance, delivering a seamless interactive experience across desktop, tablet, and mobile screens.",
      ],
      techStack: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "REST APIs",
        "JavaScript",
        "Framer Motion",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 sm:py-28 lg:py-32 bg-slate-950 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-24">
          <span className="text-cyan-400 font-bold uppercase tracking-[0.3em] text-xs sm:text-sm mb-3 block">
            Career Timeline
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 tracking-tighter"
          >
            Professional{" "}
            <span className="text-gradient">Experience & Journey</span>
          </motion.h2>
          <p className="text-slate-400 font-medium max-w-xl mx-auto text-sm sm:text-base">
            My professional growth and key milestones in the software industry.
          </p>
        </div>

        <div className="relative">
          {/* Glowing Timeline Path */}
          <div className="hidden lg:block absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-slate-800 via-cyan-500/50 to-transparent"></div>

          <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative grid lg:grid-cols-[1fr_3fr] gap-8 lg:gap-16"
              >
                {/* Left Side (Company & Period) */}
                <div className="lg:text-right flex flex-col gap-2.5 sm:gap-3">
                  <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
                    {exp.company}
                  </h3>
                  <div className="flex items-center lg:justify-end gap-2 text-cyan-400 font-bold tracking-wider text-xs bg-cyan-500/10 px-3.5 py-1.5 rounded-full w-fit lg:ml-auto border border-cyan-500/20">
                    <FiCalendar /> {exp.period}
                  </div>
                  <div className="flex items-center lg:justify-end gap-2 text-slate-400 text-xs font-medium lg:ml-auto">
                    <FiMapPin className="text-cyan-400" /> {exp.location}
                  </div>
                  <div className="hidden lg:block absolute left-[25%] -translate-x-1/2 w-7 h-7 rounded-full border-4 border-slate-950 bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.6)]"></div>
                </div>

                {/* Right Side (Details Card) */}
                <div className="glass-card p-6 sm:p-8 lg:p-10 relative overflow-hidden group rounded-2xl sm:rounded-3xl border border-slate-800 hover:border-cyan-500/30">
                  <div className="absolute top-0 right-0 p-8 text-6xl sm:text-8xl font-black text-white/[0.03] select-none tracking-tighter uppercase pointer-events-none">
                    {exp.title.split(" ")[0]}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-slate-800/80 border border-white/10 flex items-center justify-center text-xl sm:text-2xl text-cyan-400 shadow-xl flex-shrink-0 group-hover:rotate-6 transition-transform">
                        <FiBriefcase />
                      </div>
                      <div>
                        <h4 className="text-xl sm:text-2xl font-extrabold text-white leading-tight uppercase tracking-tight">
                          {exp.title}
                        </h4>
                        <span className="text-cyan-400 text-xs sm:text-sm font-semibold block mt-0.5">
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    {exp.featuredProject && (
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold w-fit">
                        <FiLayers /> {exp.featuredProject}
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 sm:space-y-4 mb-8">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed items-start group/li"
                      >
                        <FiCheckCircle className="text-emerald-400 mt-1 flex-shrink-0 group-hover/li:scale-125 transition-transform" />
                        <span className="group-hover/li:text-slate-300 transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 p-4 sm:p-5 bg-slate-950/60 border border-white/5 rounded-2xl group-hover:border-cyan-500/20 transition-colors">
                    {exp.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 bg-slate-800/80 text-slate-300 rounded-lg text-[11px] font-bold uppercase tracking-wider hover:bg-cyan-500 hover:text-slate-950 transition-all cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
