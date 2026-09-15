import { motion } from 'framer-motion';
import { FiLayout, FiMaximize, FiCpu, FiUsers } from 'react-icons/fi';

const WhatIDo = () => {
    const services = [
        {
            title: "Modern Frontend Engineering",
            desc: "Architecting modular, highly maintainable frontend systems with React.js, Next.js 15, Angular, and TypeScript. Turning complex Figma designs into pixel-perfect responsive layouts.",
            icon: <FiCpu />,
            color: "text-cyan-400",
            bg: "bg-cyan-500/10",
            border: "border-cyan-500/20"
        },
        {
            title: "RBAC & Centralized State",
            desc: "Implementing Role-Based Access Control (Super-Admin, Vendor, Customer) with Zustand, Redux, Better Auth, and JWT with strict owner-only permissions and role-protected routes.",
            icon: <FiUsers />,
            color: "text-blue-500",
            bg: "bg-blue-600/10",
            border: "border-blue-600/20"
        },
        {
            title: "REST APIs & Full-Stack Sync",
            desc: "Integrating multi-role REST APIs from Java and Node/Express backends. Building MongoDB aggregation pipelines, dynamic pricing calculations, Stripe payments, and regex search.",
            icon: <FiMaximize />,
            color: "text-emerald-500",
            bg: "bg-emerald-500/10",
            border: "border-emerald-500/20"
        },
        {
            title: "Analytical UI & Performance",
            desc: "Building intuitive analytics dashboards with Recharts, micro-interactions with Framer Motion, and Tailwind CSS systems optimized for fast rendering across all screen sizes.",
            icon: <FiLayout />,
            color: "text-purple-500",
            bg: "bg-purple-600/10",
            border: "border-purple-600/20"
        }
    ];

    return (
        <section id="what-i-do" className="py-20 sm:py-28 lg:py-32 bg-slate-950/50 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                  <span className="text-cyan-400 font-bold uppercase tracking-[0.3em] text-xs sm:text-sm mb-3 block">
                    Core Capabilities
                  </span>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 tracking-tighter"
                  >
                    What I Bring <span className="text-gradient">To The Table</span>
                  </motion.h2>
                  <p className="text-slate-400 font-medium max-w-xl mx-auto text-sm sm:text-base">Beyond writing code, I focus on engineering seamless digital experiences.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30, scale: 0.98 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group p-6 sm:p-8 lg:p-10 glass-card relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-800 hover:border-cyan-500/30"
                        >
                            <div className="absolute top-6 right-6 p-4 text-6xl sm:text-8xl font-black text-white/[0.03] select-none tracking-tighter uppercase transition-transform group-hover:scale-110 pointer-events-none">{service.title.split(' ')[0]}</div>

                            <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-start sm:items-center relative z-10">
                                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl ${service.bg} ${service.border} border flex items-center justify-center text-2xl sm:text-3xl ${service.color} shadow-xl flex-shrink-0 transition-transform group-hover:rotate-6 group-hover:scale-105`}>
                                    {service.icon}
                                </div>
                                <div className="flex-1 text-left">
                                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2.5 sm:mb-3 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">{service.title}</h3>
                                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{service.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatIDo;
