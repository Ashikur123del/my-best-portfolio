import { motion } from 'framer-motion';
import { FaReact, FaAngular, FaBootstrap, FaServer } from 'react-icons/fa';
import { SiTailwindcss, SiSass, SiTypescript } from 'react-icons/si';
import ashikImg from '../assets/image/Ashik.jpeg';

const About = () => {
    return (
        <section id="about" className="py-24 bg-base-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-base-content mb-4">About Me <span className="text-primary">🎯</span></h2>
                    <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:w-1/3 w-full max-w-sm"
                    >
                        <div className="relative group perspective">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-3xl blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                            <img
                                src={ashikImg}
                                alt="Md. Ashik"
                                className="relative rounded-3xl shadow-2xl object-cover w-full h-auto aspect-square border-4 border-base-100 transform transition duration-500 hover:scale-[1.02]"
                                onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Md+Ashik&background=00A389&color=fff&size=512'; }}
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="md:w-2/3 space-y-6"
                    >
                        <div className="p-6 bg-base-200/50 rounded-2xl border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                            <p className="text-xl leading-relaxed text-base-content/80">
                                I&apos;m a dedicated <strong className="text-primary">Front-End Developer</strong> with <strong className="text-primary">1 Year</strong> of professional experience, specializing in building modern, scalable, and highly responsive web applications. My focus is on delivering exceptional user experiences through clean, performant code.
                            </p>
                        </div>

                        <ul className="space-y-4 text-lg text-base-content/70">
                            <li className="flex items-start">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 mt-1">
                                    ✨
                                </span>
                                <span><strong>Specialization:</strong> React.js, Angular, TypeScript, and creating robust, responsive applications using Tailwind CSS and Bootstrap.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mr-4 mt-1">
                                    🚀
                                </span>
                                <span><strong>Goal:</strong> To solve UI/UX challenges, master modern frontend architectures, and build performant applications using SCSS and modern JS.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 mr-4 mt-1">
                                    🔌
                                </span>
                                <span><strong>Impact:</strong> Seamless integration of <strong>REST APIs</strong> to create dynamic and interactive data-driven user experiences.</span>
                            </li>
                        </ul>

                        <div className="pt-8 border-t border-base-300">
                            <h3 className="font-bold text-2xl mb-4">Core Technologies</h3>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    { name: 'React', icon: <FaReact /> },
                                    { name: 'Angular', icon: <FaAngular /> },
                                    { name: 'TypeScript', icon: <SiTypescript className="text-secondary" /> },
                                    { name: 'TailwindCSS', icon: <SiTailwindcss /> },
                                    { name: 'Bootstrap', icon: <FaBootstrap /> },
                                    { name: 'SCSS', icon: <SiSass /> },
                                    { name: 'REST API', icon: <FaServer /> },
                                ].map((tech) => (
                                    <span key={tech.name} className="flex items-center gap-2 px-4 py-2 bg-base-200 rounded-full text-sm font-semibold text-base-content shadow-sm border border-base-300 hover:border-primary transition-colors cursor-default">
                                        {tech.icon} {tech.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
