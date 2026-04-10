import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiCheckCircle } from 'react-icons/fi';

const Experience = () => {
    const experiences = [
        {
            title: "Front-End Developer",
            company: "Tech Innovations Co.",
            period: "2023 - Present",
            description: [
                "Developed scalable and responsive web applications from scratch using React.js and Angular.",
                "Seamlessly integrated REST APIs with the frontend to manage complex state and dynamic UI rendering.",
                "Implemented modern styling architectures using Tailwind CSS, Bootstrap, and SCSS for diverse project needs.",
                "Consistently delivered high-quality, pixel-perfect user interfaces adhering to best practices and performance optimization."
            ],
            techStack: ["React", "Angular", "Tailwind CSS", "SCSS", "REST API"]
        }
    ];

    return (
        <section id="experience" className="py-32 bg-slate-950 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-32">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl font-black mb-6 tracking-tighter"
                  >
                    Professional <span className="text-gradient">Experience & Journey</span>
                  </motion.h2>
                  <p className="text-slate-400 font-medium max-w-xl mx-auto">My professional growth and key milestones in the software industry.</p>
                </div>

                <div className="relative">
                    {/* Glowing Timeline Path */}
                    <div className="hidden lg:block absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-slate-800 via-cyan-500/50 to-transparent"></div>

                    <div className="flex flex-col gap-24">
                        {experiences.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.2 }}
                                className="relative grid lg:grid-cols-[1fr_3fr] gap-16"
                            >
                                {/* Left Side (Company & Period) */}
                                <div className="lg:text-right flex flex-col gap-4">
                                    <h3 className="text-3xl font-black text-white group-hover:text-cyan-400 transition-colors uppercase tracking-tight">{exp.company}</h3>
                                    <div className="flex items-center lg:justify-end gap-3 text-cyan-500 font-bold tracking-widest text-sm bg-cyan-500/10 px-4 py-2 rounded-full w-fit lg:ml-auto border border-cyan-500/20">
                                        <FiCalendar /> {exp.period}
                                    </div>
                                    <div className="hidden lg:block absolute left-[25%] -translate-x-1/2 w-8 h-8 rounded-full border-4 border-slate-950 bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.6)]"></div>
                                </div>

                                {/* Right Side (Details Card) */}
                                <div className="glass-card p-12 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-10 text-8xl font-black text-white/5 select-none tracking-tighter transition-transform group-hover:scale-125 group-hover:rotate-6 uppercase">{exp.title.split(' ')[0]}</div>
                                    <div className="flex items-center gap-6 mb-10">
                                        <div className="w-16 h-16 rounded-2xl bg-slate-800/80 border border-white/10 flex items-center justify-center text-3xl text-cyan-400 shadow-xl group-hover:rotate-6 transition-transform"><FiBriefcase /></div>
                                        <h4 className="text-3xl font-extrabold text-white leading-tight uppercase tracking-tight underline decoration-cyan-500/30 underline-offset-[12px] decoration-4">{exp.title}</h4>
                                    </div>

                                    <ul className="space-y-6 mb-12">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="flex gap-5 text-slate-400 text-lg leading-relaxed items-start group/li">
                                                <FiCheckCircle className="text-emerald-500 mt-1.5 flex-shrink-0 group-hover/li:scale-125 transition-transform" />
                                                <span className="group-hover/li:text-slate-300 transition-colors">{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-3 p-6 bg-slate-950/40 border border-white/5 rounded-3xl group-hover:border-cyan-500/20 transition-colors">
                                        {exp.techStack.map((tech, tIdx) => (
                                            <span key={tIdx} className="px-4 py-1.5 bg-slate-800 text-slate-300 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-cyan-500 hover:text-white transition-all cursor-default">{tech}</span>
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
