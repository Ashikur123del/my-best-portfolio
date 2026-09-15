import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiServer,
  FiCheck,
  FiLayers,
} from "react-icons/fi";
import img1 from "../assets/image/img1.jpg";
import img2 from "../assets/image/img2.jpg";
import img3 from "../assets/image/img3.jpg";
import img4 from "../assets/image/img4.webp";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Promptify",
      subtitle: "AI Prompt Sharing & Marketplace Platform",
      category: "fullstack",
      desc: "Architected an AI prompt marketplace featuring role-based access control (Users, Creators, Admins) for prompt creation, purchasing, and community moderation.",
      points: [
        "Integrated Stripe payment gateway to unlock premium prompt details with bookmarking and clipboard tracking.",
        "Built analytical admin dashboards with Recharts, prompt approval workflows, and MongoDB aggregation pipelines.",
        "Implemented Better Auth and JWT session-persistent authentication with protected route guards.",
      ],
      img: img4,
      tags: [
        "Next.js 15",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Framer Motion",
        "BetterAuth",
        "Stripe",
      ],
      live: "https://promet-veres-system.vercel.app",
      clientCode: "https://github.com/Ashikur123del/Promet-Veres-system.git",
      serverCode: "https://github.com/Ashikur123del/Prompt-Veres-Server.git",
      featured: true,
      badge: "AI & Stripe Monetization",
    },
    {
      title: "SportNest",
      subtitle: "Sports Facility & Turf Booking Platform",
      category: "fullstack",
      desc: "Full-stack reservation portal allowing sports enthusiasts to explore turfs, manage custom time slots, and book sports facilities seamlessly with dynamic pricing.",
      points: [
        "Session-persistent authentication with Better Auth & JWT with role-protected routes and owner-only management permissions.",
        "Developed RESTful APIs supporting MongoDB $regex facility search, $in sport category filtering, and dynamic hourly pricing.",
        "Real-time slot availability checks and interactive booking management UI.",
      ],
      img: img1,
      tags: [
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Framer Motion",
        "BetterAuth",
        "JWT",
      ],
      live: "https://sport-bookings-client.vercel.app",
      clientCode: "https://github.com/Ashikur123del/Sport-bookings-Client.git",
      serverCode: "https://github.com/Ashikur123del/Sport-Bookings-server.git",
      featured: true,
      badge: "Full-Stack Reservation",
    },
    {
      title: "Multi-Vendor Grocery",
      subtitle: "Scalable SaaS E-Commerce Platform",
      category: "ecommerce",
      desc: "A scalable multi-vendor SaaS e-commerce web application utilizing Zustand for centralized global state management and high-volume product interactions.",
      points: [
        "Engineered 3 role-based dashboards (Super-Admin, Vendor, Customer) with tailored access controls, order management, and cart operations.",
        "Created advanced product filtering, instant category navigation, and responsive shopping UI optimized for high-traffic scalability.",
        "Real-time cart sync, discount coupons, and multi-vendor product listings.",
      ],
      img: img2,
      tags: [
        "React.js",
        "Zustand",
        "Sass",
        "React Router",
        "Tailwind CSS",
        "Vercel",
      ],
      live: "https://grocery-ecommerce-project-eight.vercel.app",
      clientCode:
        "https://github.com/Ashikur123del/Grocery-ecommerce-project.git",
      serverCode: "https://github.com/Ashikur123del",
      featured: true,
      badge: "3-Role SaaS Dashboards",
    },
    {
      title: "MentorshipERP",
      subtitle: "Enterprise Educational Management System",
      category: "enterprise",
      desc: "Enterprise-grade ERP system automating student enrollment, live attendance tracking, exam administration, and teacher workflows for institutional clients.",
      points: [
        "Integrated complex multi-role REST APIs from a Java backend to deliver real-time data sync and live reporting dashboards.",
        "Designed responsive, modular Angular components that streamlined administrative management and reduced manual documentation by 40%.",
        "Built role-protected administrative portals adhering to strict enterprise security standards.",
      ],
      img: img3,
      tags: [
        "Angular",
        "TypeScript",
        "REST API (Java)",
        "Tailwind CSS",
        "Enterprise Architecture",
      ],
      live: "https://mentorerp.com/mentorerp/login",
      clientCode: "https://github.com/Ashikur123del",
      serverCode: null,
      featured: true,
      badge: "Enterprise Production (Java Backend)",
    },
    {
      title: "Tutorian LMS",
      subtitle: "Online Education & Exam Preparation",
      category: "enterprise",
      desc: "A responsive Learning Management System (LMS) for online education, video courses, and student exam assessments.",
      points: [
        "Built modular UI components for course enrollment and student dashboards, integrating REST APIs for dynamic content.",
        "Optimized frontend performance, delivering a seamless interactive experience across desktop, tablet, and mobile screens.",
      ],
      img: img1,
      tags: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "REST APIs",
        "Framer Motion",
      ],
      live: "https://tutorian-gray.vercel.app/",
      clientCode: "https://github.com/Ashikur123del/lmslandingpage",
      serverCode: null,
      featured: false,
      badge: "EdTech Platform",
    },
  ];

  const filterCategories = [
    { label: "All Works", value: "all" },
    { label: "Full-Stack & Next.js", value: "fullstack" },
    { label: "SaaS & E-Commerce", value: "ecommerce" },
    { label: "Enterprise Systems", value: "enterprise" },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="py-20 sm:py-28 lg:py-32 bg-slate-950/50 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Ambient Background Light */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[130px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 gap-6 sm:gap-8">
          <div className="max-w-2xl text-left">
            <span className="text-cyan-400 font-bold uppercase tracking-[0.3em] text-xs sm:text-sm mb-3 block">
              Key Projects & Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter mb-3 sm:mb-4">
              Featured{" "}
              <span className="text-gradient">Engineering Projects</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Showcasing role-based full-stack architectures, enterprise ERP
              components, and high-performance frontend interfaces from my
              resume.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {filterCategories.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value)}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold transition-all duration-300 ${
                  filter === tab.value
                    ? "bg-cyan-500 text-slate-950 font-black shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                    : "bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative rounded-2xl sm:rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_15px_60px_rgba(6,182,212,0.12)] overflow-hidden flex flex-col justify-between"
              >
                {/* Top Media Preview with Overlay */}
                <div className="relative h-48 sm:h-60 w-full overflow-hidden bg-slate-950 border-b border-slate-800/80">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-40"
                    onError={(e) => {
                      e.target.src =
                        "https://placehold.co/1200x630/0f172a/cyan?text=" +
                        encodeURIComponent(project.title);
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between gap-2 z-10">
                    <span className="px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-black tracking-wide bg-cyan-500/90 text-slate-950 uppercase shadow-md">
                      {project.badge}
                    </span>
                    <div className="flex gap-1.5 sm:gap-2">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          title="Live Preview"
                          className="w-8 h-8 sm:w-9 sm:h-9 bg-slate-900/90 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white text-xs sm:text-sm hover:bg-cyan-500 hover:text-slate-950 transition-colors"
                        >
                          <FiExternalLink />
                        </a>
                      )}
                      {project.clientCode && (
                        <a
                          href={project.clientCode}
                          target="_blank"
                          rel="noreferrer"
                          title="Client Code"
                          className="w-8 h-8 sm:w-9 sm:h-9 bg-slate-900/90 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white text-xs sm:text-sm hover:bg-cyan-500 hover:text-slate-950 transition-colors"
                        >
                          <FiGithub />
                        </a>
                      )}
                      {project.serverCode && (
                        <a
                          href={project.serverCode}
                          target="_blank"
                          rel="noreferrer"
                          title="Backend Server Code"
                          className="w-8 h-8 sm:w-9 sm:h-9 bg-slate-900/90 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white text-xs sm:text-sm hover:bg-cyan-500 hover:text-slate-950 transition-colors"
                        >
                          <FiServer />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Project Subtitle Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6">
                    <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-cyan-400 transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <span className="text-[11px] sm:text-xs text-slate-300 font-semibold tracking-wide">
                      {project.subtitle}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                      {project.desc}
                    </p>

                    {/* Key Bullet Achievements from Resume */}
                    <ul className="space-y-2 mb-5 sm:mb-6">
                      {project.points.map((pt, pIdx) => (
                        <li
                          key={pIdx}
                          className="flex items-start gap-2.5 text-xs text-slate-400 leading-relaxed"
                        >
                          <FiCheck className="text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Tags & CTAs */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 pt-3 sm:pt-4 border-t border-slate-800/80 mb-5 sm:mb-6">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-slate-950 border border-slate-800 rounded-lg text-[10px] sm:text-[11px] font-bold text-slate-300 group-hover:border-cyan-500/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 min-w-[120px] text-center py-2 sm:py-2.5 px-3 sm:px-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold text-xs hover:bg-cyan-500 hover:text-slate-950 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          Live Demo <FiExternalLink />
                        </a>
                      )}
                      {project.clientCode && (
                        <a
                          href={project.clientCode}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 min-w-[100px] text-center py-2 sm:py-2.5 px-3 sm:px-4 rounded-xl bg-slate-800/80 border border-white/10 text-slate-300 font-bold text-xs hover:bg-slate-700 hover:text-white transition-all flex items-center justify-center gap-2"
                        >
                          <FiGithub /> Repo
                        </a>
                      )}
                      {project.serverCode && (
                        <a
                          href={project.serverCode}
                          target="_blank"
                          rel="noreferrer"
                          title="Server Repo"
                          className="py-2 sm:py-2.5 px-3 sm:px-4 rounded-xl bg-slate-800/80 border border-white/10 text-slate-300 font-bold text-xs hover:bg-slate-700 hover:text-white transition-all flex items-center justify-center gap-2"
                        >
                          <FiServer /> API
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
