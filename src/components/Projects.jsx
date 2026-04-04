import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

import img1 from '../assets/image/img1.jpg';
import img2 from '../assets/image/img2.jpg';
import img3 from '../assets/image/img3.jpg';
import img4 from '../assets/image/img4.webp';

const Projects = () => {
    const projects = [
        {
            title: "Tutorian (E-Learning)",
            desc: "A fully responsive e-learning platform with comprehensive front-end UI for students and instructors.",
            img: img1,
            tags: ["React", "JSX", "Tailwind", "Framer Motion"],
            live: "https://tutorian-gray.vercel.app/",
            code: "https://github.com/Ashikur123del/lmslandingpage"
        },
        {
            title: "React E-Commerce",
            desc: "A feature-rich e-commerce platform with dynamic product listings, cart management, and seamless UI.",
            img: img2,
            tags: ["React", "JSX", "Tailwind"],
            live: "https://react-eecommerce-projects.vercel.app/",
            code: "https://github.com/Ashikur123del/doctorapont"
        },
        {
            title: "Mentor ERP (School Management)",
            desc: "A live, full-featured ERP dashboard for managing school resources, students, and staff. Built the complex frontend interfaces and integrated seamlessly with a Java backend architecture.",
            img: img3,
            tags: ["React/Angular", "Tailwind", "Java Backend Integration"],
            live: "https://mentorerp.com/",
            code: "https://github.com/Ashikur123del/schoolmaneg"
        },
        {
            title: "Leadskill IT",
            desc: "A modern corporate website and dashboard for an IT firm, emphasizing responsive design and fast load times.",
            img: img4,
            tags: ["React", "JSX", "Tailwind", "Framer Motion"],
            live: "https://leadskill-it.vercel.app/", // Using public vercel app link instead of internal dashboard
            code: "https://github.com/Ashikur123del/madrasah"
        }
    ];

    return (
        <section id="projects" className="py-24 bg-base-100 relative">
            <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-base-content mb-4 tracking-tight">Featured Projects <span className="text-secondary inline-block animate-pulse">✨</span></h2>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full shadow-lg"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            className="group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_30px_60px_rgba(0,163,137,0.15)] transition-all duration-700 flex flex-col bg-base-100"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-tr from-primary/30 to-secondary/30 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>

                            <div className="relative z-10 flex flex-col h-full bg-base-100/90 backdrop-blur-sm m-[1px] rounded-[23px] overflow-hidden">
                                <div className="relative overflow-hidden aspect-[16/9] border-b border-base-200/50">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 z-10 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform transition-transform duration-[1.5s] group-hover:scale-110"
                                        onError={(e) => { e.target.src = 'https://placehold.co/600x400/eeeeee/999999?text=Project+Image'; }}
                                    />
                                    <h3 className="absolute bottom-6 left-6 text-white text-3xl font-black z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 drop-shadow-md">
                                        {project.title}
                                    </h3>
                                </div>

                                <div className="p-8 flex-1 flex flex-col relative bg-base-100">
                                    <h3 className="text-2xl font-bold mb-4 text-base-content group-hover:text-primary transition-colors duration-300 block md:hidden">{project.title}</h3>
                                    <p className="text-base-content/80 mb-8 flex-1 leading-relaxed text-lg">{project.desc}</p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map((tag, tIdx) => (
                                            <span key={tIdx} className="px-4 py-1.5 bg-base-200 text-base-content/90 font-bold text-xs rounded-full shadow-sm border border-base-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4 mt-auto">
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex-1 btn btn-primary border-none bg-gradient-to-r from-primary to-emerald-500 text-white rounded-xl gap-2 shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-1 transition-all"
                                        >
                                            <FaExternalLinkAlt /> Live Demo
                                        </a>
                                        <a
                                            href={project.code}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex-1 btn btn-outline border-2 rounded-xl gap-2 hover:bg-base-200 hover:-translate-y-1 transition-all text-base-content"
                                        >
                                            <FaGithub className="text-lg" /> View Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
