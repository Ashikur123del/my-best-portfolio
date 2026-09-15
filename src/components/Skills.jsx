import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    SiReact,
    SiNextdotjs,
    SiAngular,
    SiTypescript,
    SiJavascript,
    SiTailwindcss,
    SiSass,
    SiFramer,
    SiRedux,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiPrisma,
    SiGit,
    SiGithub,
    SiPostman,
    SiVercel,
    SiNetlify,
    SiBootstrap,
    SiGithubcopilot
} from 'react-icons/si';
import { FiShield, FiCpu, FiTerminal, FiLayers } from 'react-icons/fi';

const Skills = () => {
    const [activeTab, setActiveTab] = useState('all');

    const skillCategories = [
        {
            id: 'frontend',
            title: 'Frontend & State',
            icon: <SiReact className="text-[#61DAFB]" />,
            description: 'Core web technologies for crafting responsive, interactive client-side experiences.',
            skills: [
                { name: 'React.js', level: 'Advanced', icon: <SiReact className="text-[#61DAFB]" />, highlight: 'Expert' },
                { name: 'Next.js 15', level: 'Advanced', icon: <SiNextdotjs className="text-white" />, highlight: 'SSR / App Router' },
                { name: 'Angular', level: 'Intermediate', icon: <SiAngular className="text-[#DD0031]" />, highlight: 'Enterprise ERP' },
                { name: 'TypeScript', level: 'Advanced', icon: <SiTypescript className="text-[#3178C6]" />, highlight: 'Type Safety' },
                { name: 'JavaScript (ES6+)', level: 'Advanced', icon: <SiJavascript className="text-[#F7DF1E]" />, highlight: 'Modern Core' },
                { name: 'Zustand', level: 'Advanced', icon: <FiLayers className="text-[#888]" />, highlight: 'Global State' },
                { name: 'Redux / Toolkit', level: 'Intermediate', icon: <SiRedux className="text-[#764ABC]" />, highlight: 'State Flow' },
            ]
        },
        {
            id: 'styling',
            title: 'Styling & UI Systems',
            icon: <SiTailwindcss className="text-[#38B2AC]" />,
            description: 'Modern CSS frameworks, motion design, and UI component libraries.',
            skills: [
                { name: 'Tailwind CSS', level: 'Advanced', icon: <SiTailwindcss className="text-[#38B2AC]" />, highlight: 'Utility First' },
                { name: 'Framer Motion', level: 'Advanced', icon: <SiFramer className="text-pink-500" />, highlight: 'Fluid Animations' },
                { name: 'Sass / SCSS', level: 'Advanced', icon: <SiSass className="text-[#CC6699]" />, highlight: 'Modular CSS' },
                { name: 'DaisyUI / HeroUI', level: 'Advanced', icon: <FiLayers className="text-emerald-400" />, highlight: 'Components' },
                { name: 'Shadcn & Material UI', level: 'Intermediate', icon: <FiLayers className="text-cyan-400" />, highlight: 'Modern UI Kit' },
                { name: 'Bootstrap', level: 'Intermediate', icon: <SiBootstrap className="text-[#7952B3]" />, highlight: 'Grid Systems' },
                { name: 'Recharts', level: 'Intermediate', icon: <FiCpu className="text-blue-400" />, highlight: 'Data Analytics' },
            ]
        },
        {
            id: 'backend',
            title: 'Backend, DB & Security',
            icon: <SiNodedotjs className="text-[#339933]" />,
            description: 'Server architectures, database modelling, REST APIs, and authentication.',
            skills: [
                { name: 'Node.js & Express', level: 'Intermediate', icon: <SiNodedotjs className="text-[#339933]" />, highlight: 'RESTful APIs' },
                { name: 'MongoDB & Mongoose', level: 'Intermediate', icon: <SiMongodb className="text-[#47A248]" />, highlight: 'Aggregation / Search' },
                { name: 'PostgreSQL & Prisma', level: 'Intermediate', icon: <SiPostgresql className="text-[#4169E1]" />, highlight: 'Relational DB' },
                { name: 'BetterAuth & JWT', level: 'Advanced', icon: <FiShield className="text-amber-400" />, highlight: 'Session Auth' },
                { name: 'Role-Based Auth (RBAC)', level: 'Advanced', icon: <FiShield className="text-emerald-400" />, highlight: 'Access Control' },
                { name: 'Stripe Gateway', level: 'Intermediate', icon: <FiTerminal className="text-indigo-400" />, highlight: 'E-Commerce Pay' },
            ]
        },
        {
            id: 'tools',
            title: 'DevOps, Tools & AI Stack',
            icon: <SiGithubcopilot className="text-purple-400" />,
            description: 'Development environment, version control, modern deployment, and AI-accelerated tooling.',
            skills: [
                { name: 'Git & GitHub', level: 'Advanced', icon: <SiGit className="text-[#F05032]" />, highlight: 'Collaboration' },
                { name: 'Postman', level: 'Advanced', icon: <SiPostman className="text-[#FF6C37]" />, highlight: 'API Testing' },
                { name: 'Vercel & Netlify', level: 'Advanced', icon: <SiVercel className="text-white" />, highlight: 'Edge Deployments' },
                { name: 'GitHub Copilot & Cursor', level: 'Advanced', icon: <SiGithubcopilot className="text-purple-400" />, highlight: 'AI Dev' },
                { name: 'Claude Code & ChatGPT', level: 'Advanced', icon: <FiCpu className="text-cyan-400" />, highlight: 'Prompt Eng.' },
                { name: 'Web Speech API', level: 'Intermediate', icon: <FiTerminal className="text-yellow-400" />, highlight: 'Speech Integration' },
            ]
        }
    ];

    const filterOptions = [
        { label: 'All Domains', value: 'all' },
        { label: 'Frontend & State', value: 'frontend' },
        { label: 'Styling & UI', value: 'styling' },
        { label: 'Backend & DB', value: 'backend' },
        { label: 'DevOps & AI Tools', value: 'tools' },
    ];

    const displayedCategories = activeTab === 'all' 
        ? skillCategories 
        : skillCategories.filter(cat => cat.id === activeTab);

    return (
        <section id="skills" className="py-20 sm:py-28 lg:py-32 bg-slate-950 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/5 rounded-full blur-[140px] -z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 sm:mb-16">
                    <span className="text-cyan-400 font-bold uppercase tracking-[0.3em] text-xs sm:text-sm mb-3 block">
                        Technical Expertise
                    </span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 tracking-tighter"
                    >
                        Technical <span className="text-gradient">Skills & Modern Stack</span>
                    </motion.h2>
                    <p className="text-slate-400 font-medium max-w-2xl mx-auto text-sm sm:text-base">
                        Battle-tested technologies I utilize across enterprise ERPs, SaaS applications, and modern full-stack platforms.
                    </p>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-10">
                        {filterOptions.map((tab) => (
                            <button
                                key={tab.value}
                                onClick={() => setActiveTab(tab.value)}
                                className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-bold transition-all duration-300 ${
                                    activeTab === tab.value
                                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-105'
                                        : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/5'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                    <AnimatePresence mode="popLayout">
                        {displayedCategories.map((cat) => (
                            <motion.div
                                key={cat.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                className="glass-card p-5 sm:p-8 lg:p-10 relative overflow-hidden border border-slate-800/80 hover:border-cyan-500/30 group rounded-2xl sm:rounded-3xl"
                            >
                                <div className="flex items-center justify-between gap-3 mb-4">
                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-slate-800/90 border border-white/10 flex items-center justify-center text-xl sm:text-2xl shadow-lg group-hover:scale-110 transition-transform">
                                            {cat.icon}
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                                            {cat.title}
                                        </h3>
                                    </div>
                                    <span className="text-[10px] sm:text-xs font-bold text-cyan-400/80 uppercase tracking-widest px-2.5 sm:px-3 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/20">
                                        {cat.skills.length} Tech
                                    </span>
                                </div>
                                <p className="text-slate-400 text-xs sm:text-sm mb-6 sm:mb-8 leading-relaxed">
                                    {cat.description}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                                    {cat.skills.map((skill, sIdx) => (
                                        <div
                                            key={sIdx}
                                            className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-950/60 border border-white/5 hover:border-cyan-500/30 hover:bg-slate-900/80 transition-all duration-200 flex items-center justify-between group/skill"
                                        >
                                            <div className="flex items-center gap-2.5 sm:gap-3">
                                                <div className="text-xl sm:text-2xl group-hover/skill:scale-110 transition-transform">
                                                    {skill.icon}
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-xs sm:text-sm font-bold text-slate-200 group-hover/skill:text-white">
                                                        {skill.name}
                                                    </span>
                                                    <span className="text-[9px] sm:text-[10px] font-semibold text-cyan-400/90 uppercase tracking-wider">
                                                        {skill.highlight}
                                                    </span>
                                                </div>
                                            </div>
                                            <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-400 border border-white/5">
                                                {skill.level}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Soft Skills Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-8 sm:mt-12 p-6 sm:p-8 glass-card border border-white/5 rounded-2xl sm:rounded-3xl flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6"
                >
                    <div className="text-center md:text-left">
                        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-1">
                            Collaborative & Analytical Strengths
                        </span>
                        <h4 className="text-lg sm:text-xl font-extrabold text-white">
                            Soft Skills & Professional Work Ethic
                        </h4>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-end">
                        {['Problem Solving', 'Clear Communication', 'Git Flow & Teamwork', 'Clean Architecture', 'Role-Based Security', 'Agile Delivery'].map((item, i) => (
                            <span
                                key={i}
                                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-slate-900 border border-white/10 text-slate-300 text-[11px] sm:text-xs font-bold hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
