import { motion } from 'framer-motion';
import { FiTarget, FiBox, FiLayers } from 'react-icons/fi';

const About = () => {
    const stats = [
        { label: 'Projects Completed', value: '15+', icon: <FiBox className="text-cyan-400" /> },
        { label: 'Satisfied Clients', value: '10+', icon: <FiTarget className="text-purple-500" /> },
        { label: 'Core Skills', value: '12+', icon: <FiLayers className="text-emerald-500" /> },
    ];

    return (
        <section id="about" className="py-32 bg-slate-950/50 relative overflow-hidden px-6">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-12"
                >
                    <div>
                        <span className="text-cyan-400 font-bold uppercase tracking-[0.3em] text-sm mb-4 block underline decoration-cyan-500/50 underline-offset-8 decoration-4">The Developer</span>
                        <h2 className="text-5xl font-black mb-8 leading-tight">I bridge the gap between design and development <span className="text-cyan-500">.</span></h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
                            With a passion for building professional, scalable, and highly performant front-end systems, I focus on crafting experiences that are both beautiful and technically robust.
                        </p>
                        <p className="text-slate-500 text-lg leading-relaxed italic max-w-lg">
                            &ldquo;Innovation isn&apos;t just about code &mdash; it&apos;s about making complex problems feel simple for the end user.&rdquo;
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + idx * 0.1 }}
                                className="glass-card p-6 border-slate-700/50 group hover:-translate-y-2 transition-all duration-300"
                            >
                                <div className="p-3 bg-slate-800/80 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform">{stat.icon}</div>
                                <div className="text-4xl font-black text-white mb-1 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">{stat.value}</div>
                                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center lg:justify-end order-first lg:order-last"
                >
                    <div className="relative group perspective w-full max-w-md aspect-square bg-slate-900 overflow-hidden rounded-[3rem] border border-white/5 shadow-2xl transition-all duration-700 hover:rotate-3">
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-600/10 opacity-40 group-hover:opacity-100 transition-opacity"></div>
                        
                        <div className="p-12 h-full flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col">
                                    <span className="text-6xl font-black text-cyan-400 opacity-20 select-none tracking-tighter">ASHIK</span>
                                    <span className="text-6xl font-black text-slate-700 opacity-10 select-none ml-10 -mt-8 tracking-tighter">CORE</span>
                                </div>
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white/40 font-bold border border-white/10 uppercase text-xs">2024</div>
                            </div>

                            <div className="space-y-4">
                                <span className="p-2 border border-slate-700 rounded-full text-xs font-bold tracking-widest text-slate-500 block w-fit">CORE MISSIONS</span>
                                <h3 className="text-3xl font-black text-white leading-tight uppercase tracking-tight">Scalable Systems & <br /> Pixel Perfection</h3>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
