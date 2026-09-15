import { motion } from 'framer-motion';
import { FiAward, FiBookOpen, FiUsers, FiCalendar, FiCheckCircle } from 'react-icons/fi';

const Education = () => {
    const items = [
        {
            type: "Certification & Intensive Bootcamp",
            title: "AI-Powered Future-Ready Web Development",
            institution: "Programming Hero",
            period: "2025",
            highlight: "6-Month Full-Stack Specialization",
            icon: <FiAward className="text-cyan-400" />,
            badgeColor: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
            details: [
                "6-Month Intensive Professional Training covering full-stack MERN stack, Next.js 15, and modern architecture.",
                "Deep dive into RESTful API design, session authentication with BetterAuth & JWT, and role-based permissions.",
                "Real-world enterprise application building, MongoDB aggregation pipelines, and production deployment on Vercel."
            ]
        },
        {
            type: "Formal Education",
            title: "Higher Secondary Certificate (HSC)",
            institution: "Khujzipur Mozammel Haque Degree College",
            period: "2020 – 2021",
            highlight: "Academic Foundation",
            icon: <FiBookOpen className="text-purple-400" />,
            badgeColor: "bg-purple-500/10 border-purple-500/20 text-purple-400",
            details: [
                "Completed Higher Secondary Certificate curriculum with high discipline and analytical coursework.",
                "Developed early interests in computational problem solving, science, and information technology."
            ]
        },
        {
            type: "Leadership & Community",
            title: "Active Member",
            institution: "Bangladesh Scouts",
            period: "Community Service & Youth Leadership",
            highlight: "Leadership & Discipline",
            icon: <FiUsers className="text-emerald-400" />,
            badgeColor: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
            details: [
                "Fostered discipline, team collaboration, active communication, and civic volunteer leadership.",
                "Organized youth events, emergency readiness campaigns, and community support initiatives."
            ]
        }
    ];

    return (
        <section id="education" className="py-20 sm:py-28 lg:py-32 bg-slate-950 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Ambient Background Blur */}
            <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[130px] -z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 sm:mb-16">
                    <span className="text-cyan-400 font-bold uppercase tracking-[0.3em] text-xs sm:text-sm mb-3 block">
                        Academic & Training Journey
                    </span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 tracking-tighter"
                    >
                        Education, <span className="text-gradient">Certifications & Leadership</span>
                    </motion.h2>
                    <p className="text-slate-400 font-medium max-w-xl mx-auto text-sm sm:text-base">
                        Continuous learning, verified technical certifications, and foundational leadership experiences.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
                    {items.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            className="glass-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl relative overflow-hidden border border-slate-800 flex flex-col justify-between hover:border-cyan-500/40 hover:-translate-y-1.5 transition-all duration-300 group"
                        >
                            <div>
                                <div className="flex items-center justify-between gap-3 mb-5 sm:mb-6">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-slate-800/80 border border-white/10 flex items-center justify-center text-xl sm:text-2xl shadow-xl group-hover:rotate-6 transition-transform">
                                        {item.icon}
                                    </div>
                                    <span className={`px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold border ${item.badgeColor}`}>
                                        {item.highlight}
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
                                    <FiCalendar /> {item.period}
                                </div>

                                <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-cyan-400 transition-colors leading-snug mb-2">
                                    {item.title}
                                </h3>

                                <h4 className="text-xs sm:text-sm font-bold text-slate-300 mb-5 sm:mb-6">
                                    {item.institution}
                                </h4>

                                <ul className="space-y-2.5 sm:space-y-3 pt-4 border-t border-slate-800/80">
                                    {item.details.map((detail, dIdx) => (
                                        <li key={dIdx} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                                            <FiCheckCircle className="text-cyan-400 mt-1 flex-shrink-0" />
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-8 pt-4 border-t border-slate-800/50 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                                <span>{item.type}</span>
                                <span className="text-cyan-400/90 font-bold">Verified</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
