import { motion } from 'framer-motion';
import { SiReact, SiAngular, SiJavascript, SiTypescript, SiTailwindcss, SiSass, SiFramer, SiVite } from 'react-icons/si';

const Skills = () => {
    const categories = [
        {
            title: 'Frontend Library',
            skills: [
                { name: 'React.js', icon: <SiReact className="text-[#61DAFB]" />, p: 95 },
                { name: 'Angular', icon: <SiAngular className="text-[#DD0031]" />, p: 85 },
            ]
        },
        {
            title: 'Styling & Motion',
            skills: [
                { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#38B2AC]" />, p: 98 },
                { name: 'Sass / SCSS', icon: <SiSass className="text-[#CC6699]" />, p: 90 },
                { name: 'Framer Motion', icon: <SiFramer className="text-white" />, p: 88 },
            ]
        },
        {
            title: 'Languages & Tools',
            skills: [
                { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" />, p: 92 },
                { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" />, p: 85 },
                { name: 'Vite / Tooling', icon: <SiVite className="text-[#646CFF]" />, p: 90 },
            ]
        }
    ];

    return (
        <section id="skills" className="py-32 bg-slate-950 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl font-black mb-6 tracking-tighter"
                  >
                    Tech <span className="text-gradient">Stack & Mastery</span>
                  </motion.h2>
                  <p className="text-slate-400 font-medium max-w-xl mx-auto">Modern tools I use to build scalable and high-performance user interfaces.</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-10">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="glass-card p-10 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 text-6xl font-black text-white/5 select-none tracking-tighter uppercase">{cat.title.split(' ')[0]}</div>
                            <h3 className="text-2xl font-bold mb-12 text-white/90 underline decoration-cyan-500/30 underline-offset-[12px] decoration-2">{cat.title}</h3>
                            
                            <div className="flex flex-col gap-10">
                                {cat.skills.map((skill, sIdx) => (
                                    <div key={sIdx} className="group flex flex-col gap-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className="text-3xl p-3 bg-slate-800/80 rounded-2xl group-hover:rotate-12 group-hover:scale-110 transition-transform shadow-xl border border-white/5">{skill.icon}</div>
                                                <span className="text-lg font-bold text-slate-300 group-hover:text-white transition-colors">{skill.name}</span>
                                            </div>
                                            <span className="text-sm font-black text-cyan-400/80">{skill.p}%</span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-800/50 rounded-full overflow-hidden border border-white/5">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.p}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, delay: 0.5 }}
                                                className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full relative"
                                            >
                                                <div className="absolute top-0 right-0 w-2 h-full bg-white animate-pulse"></div>
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
