import { motion } from 'framer-motion';
import { FaBriefcase, FaCheckCircle, FaLaptopCode } from 'react-icons/fa';

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
        <section id="experience" className="py-24 bg-base-200/30 overflow-hidden relative">
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 translate-y-[-50%]"></div>
            <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-base-content mb-4 tracking-tight">
                        Professional Experience <span className="text-primary inline-block animate-bounce">💼</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full shadow-lg"></div>
                </motion.div>

                <div className="relative">
                    {/* Glowing Timeline Line */}
                    <div className="hidden md:block absolute left-[3%] sm:left-[5%] md:left-1/4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/80 via-secondary/50 to-transparent rounded-full shadow-[0_0_15px_rgba(0,163,137,0.5)]"></div>

                    <div className="space-y-16">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center">

                                {/* Static Mobile/Desktop Date Side */}
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className="md:w-1/4 flex flex-col md:text-right pr-0 md:pr-12 mb-6 md:mb-0 relative z-10"
                                >
                                    <h3 className="text-2xl font-black text-base-content tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">{exp.company}</h3>
                                    <div className="inline-flex items-center md:justify-end gap-2 text-primary font-bold mt-2">
                                        <FaBriefcase className="text-lg" />
                                        <span className="bg-primary/10 px-4 py-1 rounded-full shadow-sm border border-primary/20">{exp.period}</span>
                                    </div>
                                </motion.div>

                                {/* Center Icon */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 200, delay: index * 0.3 }}
                                    className="hidden md:flex absolute left-1/4 -translate-x-1/2 w-14 h-14 bg-base-100 border-4 border-primary rounded-full items-center justify-center shadow-[0_0_20px_rgba(0,163,137,0.6)] z-20"
                                >
                                    <FaLaptopCode className="text-2xl text-primary" />
                                </motion.div>

                                {/* Content Side */}
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.4 }}
                                    className="md:w-3/4 md:pl-16 relative"
                                >
                                    <div className="relative group perspective">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-3xl blur-md opacity-20 group-hover:opacity-60 transition duration-700"></div>
                                        <div className="relative bg-base-100/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-base-200/50 hover:border-primary/50 transition-colors duration-500">

                                            <h4 className="text-3xl font-extrabold text-base-content mb-6 drop-shadow-sm">{exp.title}</h4>

                                            <ul className="space-y-4 mb-8">
                                                {exp.description.map((item, i) => (
                                                    <li key={i} className="flex gap-4 items-start text-base-content/80 text-lg leading-relaxed hover:text-base-content transition-colors duration-300">
                                                        <FaCheckCircle className="text-secondary mt-1.5 flex-shrink-0 shadow-sm rounded-full" />
                                                        <span className="flex-1">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="pt-6 border-t border-base-200 flex flex-wrap gap-3">
                                                {exp.techStack.map((tech, tIdx) => (
                                                    <span key={tIdx} className="px-4 py-1.5 bg-gradient-to-br from-base-200 to-base-300 text-base-content/90 text-sm font-bold rounded-full shadow-inner border border-base-300/50 hover:scale-105 hover:border-primary/40 hover:text-primary transition-all duration-300 cursor-default">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
