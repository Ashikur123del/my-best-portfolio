import { motion } from 'framer-motion';
import { FiTarget, FiBox, FiLayers } from 'react-icons/fi';

const About = () => {
    const stats = [
        { label: 'Key Projects Delivered', value: '15+', icon: <FiBox className="text-cyan-400" /> },
        { label: 'Enterprise Experience', value: 'ERP/LMS', icon: <FiTarget className="text-purple-500" /> },
        { label: 'Frontend & Stack Mastery', value: 'React/Next', icon: <FiLayers className="text-emerald-500" /> },
    ];

    return (
        <section id="about" className="py-20 sm:py-28 lg:py-32 bg-slate-950/50 relative overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-8 sm:gap-10"
                >
                    <div>
                        <span className="text-cyan-400 font-bold uppercase tracking-[0.3em] text-xs sm:text-sm mb-3 sm:mb-4 block underline decoration-cyan-500/50 underline-offset-8 decoration-4">About Me</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-5 sm:mb-6 leading-tight">
                            Building Scalable Web Apps With <span className="text-gradient">Precision & Clean Architecture</span>
                        </h2>
                        <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed mb-5 font-normal">
                            I am a Front-End Developer with professional experience building scalable web applications using <strong className="text-cyan-400">React.js, Next.js, Angular, and TypeScript</strong>. Skilled in developing reusable UI components, integrating REST APIs, optimizing frontend performance, and delivering responsive interfaces.
                        </p>
                        <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                            Passionate about clean architecture, role-based access control (RBAC), and modern full-stack development with Node.js, Express, MongoDB, and Zustand. Whether translating complex Figma designs or connecting enterprise Java/Node REST APIs, I emphasize code maintainability, visual hierarchy, and cross-browser consistency.
                        </p>
                        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 border-l-4 border-l-cyan-500 text-slate-300 text-xs sm:text-sm leading-relaxed italic">
                            &ldquo;Innovation isn&apos;t just about code &mdash; it&apos;s about engineering intuitive, role-protected, and lightning-fast digital solutions.&rdquo;
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + idx * 0.1 }}
                                className="glass-card p-5 sm:p-6 border-slate-700/50 group hover:-translate-y-2 transition-all duration-300 rounded-2xl"
                            >
                                <div className="p-2.5 sm:p-3 bg-slate-800/80 rounded-xl sm:rounded-2xl w-fit mb-3 sm:mb-4 group-hover:scale-110 transition-transform">{stat.icon}</div>
                                <div className="text-2xl sm:text-3xl font-black text-white mb-1 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">{stat.value}</div>
                                <div className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center lg:justify-end order-first lg:order-last w-full"
                >
                    <div className="relative group perspective w-full max-w-[360px] sm:max-w-md bg-slate-900 overflow-hidden rounded-3xl sm:rounded-[2.5rem] border border-white/10 shadow-2xl p-6 sm:p-8 transition-all duration-700 hover:rotate-1 mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-600/10 opacity-40 group-hover:opacity-100 transition-opacity"></div>
                        
                        <div className="relative z-10 flex flex-col justify-between h-full gap-8">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col">
                                    <span className="text-5xl font-black text-cyan-400/30 select-none tracking-tighter">ASHIK</span>
                                    <span className="text-xl font-bold text-white tracking-wide mt-1">MD. ASHIK KHAN</span>
                                    <span className="text-xs text-cyan-400 font-semibold tracking-wider uppercase">Frontend Specialist</span>
                                </div>
                                <div className="px-3 py-1.5 bg-cyan-500/10 rounded-full text-cyan-400 font-bold border border-cyan-500/30 uppercase text-xs">
                                    LeadSkill IT
                                </div>
                            </div>

                            <div className="space-y-4">
                                <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs font-bold tracking-widest text-slate-300 inline-block">
                                    CORE PHILOSOPHY
                                </span>
                                <h3 className="text-2xl font-black text-white leading-snug">
                                    Role-Based Workflows, Clean State Management & High-Velocity UI
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Specialized in React, Next.js 15, Angular, TypeScript, Zustand, and full-stack MERN integrations with secure RBAC and dynamic APIs.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800">
                                <div>
                                    <span className="text-xs text-slate-500 uppercase tracking-wider block">Location</span>
                                    <span className="text-sm font-bold text-slate-200">Dhaka, Bangladesh</span>
                                </div>
                                <div>
                                    <span className="text-xs text-slate-500 uppercase tracking-wider block">Training</span>
                                    <span className="text-sm font-bold text-slate-200">Programming Hero</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
