import { motion } from 'framer-motion';
import { FiLayout, FiMaximize, FiCpu, FiUsers } from 'react-icons/fi';

const WhatIDo = () => {
    const services = [
        {
            title: "Modern UI Architecture",
            desc: "I build robust, scalable frontend architectures using React.js and Angular, ensuring code is modular, reusable, and easy to maintain throughout the project lifecycle.",
            icon: <FiCpu />,
            color: "text-cyan-400",
            bg: "bg-cyan-500/10",
            border: "border-cyan-500/20"
        },
        {
            title: "Pixel-Perfect Designs",
            desc: "Using Tailwind CSS, Bootstrap, and SCSS, I magically transform Figma or XD designs into responsive, beautiful web pages that look stunning on any device.",
            icon: <FiLayout />,
            color: "text-blue-500",
            bg: "bg-blue-600/10",
            border: "border-blue-600/20"
        },
        {
            title: "Seamless API Integration",
            desc: "I bridge the gap between frontend and backend by elegantly consuming REST APIs, securely managing data fetching, and handling complex application states.",
            icon: <FiMaximize />,
            color: "text-emerald-500",
            bg: "bg-emerald-500/10",
            border: "border-emerald-500/20"
        },
        {
            title: "Performance & UX Focused",
            desc: "A great app isn't just about looks. I optimize load times, ensure accessibility (A11y), and integrate micro-animations for an unforgettable user experience.",
            icon: <FiUsers />,
            color: "text-purple-500",
            bg: "bg-purple-600/10",
            border: "border-purple-600/20"
        }
    ];

    return (
        <section id="what-i-do" className="py-32 bg-slate-950/50 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-32">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl font-black mb-6 tracking-tighter"
                  >
                    What I Bring <span className="text-gradient">To The Table</span>
                  </motion.h2>
                  <p className="text-slate-400 font-medium max-w-xl mx-auto">Beyond writing code, I focus on engineering seamless digital experiences.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            className="group p-12 glass-card relative overflow-hidden"
                        >
                            <div className={`absolute top-10 right-10 p-10 text-9xl font-black text-white/5 select-none tracking-tighter uppercase transition-transform group-hover:scale-110 group-hover:-rotate-3`}>{service.title.split(' ')[0]}</div>

                            <div className="flex flex-col lg:flex-row gap-10 items-start md:items-center relative z-10">
                                <div className={`w-24 h-24 rounded-[2rem] ${service.bg} ${service.border} border flex items-center justify-center text-4xl ${service.color} shadow-2xl transition-transform group-hover:rotate-6 group-hover:scale-110`}>
                                    {service.icon}
                                </div>
                                <div className="flex-1 text-left">
                                    <h3 className="text-3xl font-extrabold text-white mb-6 group-hover:text-cyan-400 pb-2 transition-colors uppercase tracking-tight">{service.title}</h3>
                                    <p className="text-slate-400 text-lg leading-relaxed max-w-lg">{service.desc}</p>
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
