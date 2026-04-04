import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaGem, FaWrench } from 'react-icons/fa';

const SkillBar = ({ name, percentage, color }) => (
    <div className="mb-6">
        <div className="flex justify-between mb-2">
            <span className="font-bold text-base-content/80">{name}</span>
            <span className="text-sm font-semibold opacity-70">{percentage}%</span>
        </div>
        <div className="h-2.5 w-full bg-base-300 rounded-full overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className={`h-full rounded-full bg-${color}`}
            />
        </div>
    </div>
);

const Skills = () => {
    const skillCategories = [
        {
            title: "Core Development",
            icon: <FaCode className="text-primary" />,
            color: "primary",
            skills: [
                { name: "HTML5 & Semantics", p: 98 },
                { name: "Tailwind, Bootstrap & SCSS", p: 95 },
                { name: "JavaScript & TypeScript", p: 90 },
            ]
        },
        {
            title: "Frameworks & APIs",
            icon: <FaGem className="text-secondary" />,
            color: "secondary",
            skills: [
                { name: "React.js", p: 90 },
                { name: "Angular", p: 85 },
                { name: "REST API Integration", p: 95 },
            ]
        },
        {
            title: "Tooling & DevOps",
            icon: <FaWrench className="text-emerald-500" />,
            color: "emerald-500", // Will use a custom arbitrary class or safe color
            skills: [
                { name: "Git / GitHub", p: 95 },
                { name: "VS Code / Vite", p: 85 },
                { name: "Redux / State Management", p: 80 },
            ]
        }
    ];

    return (
        <section id="skills" className="py-24 bg-base-200/40 relative overflow-hidden">
            <div className="absolute -top-40 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-base-content mb-4 tracking-tight">Technical Skills <span className="text-primary animate-pulse inline-block">💡</span></h2>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full shadow-lg"></div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 text-left">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            className="relative group cursor-default"
                        >
                            <div className={`absolute -inset-0.5 bg-gradient-to-br from-${category.color}/30 to-base-300 rounded-3xl blur-md opacity-0 group-hover:opacity-100 transition duration-500`}></div>
                            <div className={`relative bg-base-100/90 backdrop-blur-xl p-10 rounded-3xl shadow-xl border-t-4 border-${category.color} hover:border-${category.color}/80 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] transition-all duration-500 h-full`}>
                                <h3 className="text-2xl font-black flex items-center gap-4 mb-10 text-base-content tracking-wide">
                                    <span className="p-4 bg-base-200/80 rounded-2xl shadow-inner border border-base-300/50">{category.icon}</span>
                                    {category.title}
                                </h3>

                                <div className="space-y-8">
                                    {category.skills.map((skill, sIdx) => (
                                        <SkillBar
                                            key={sIdx}
                                            name={skill.name}
                                            percentage={skill.p}
                                            color={category.color}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
