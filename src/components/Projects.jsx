import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
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
            title: "Mentor ERP",
            desc: "A live, full-featured ERP dashboard for managing school resources, students, and staff. Built the complex frontend interfaces and integrated with a Java backend.",
            img: img3,
            tags: ["React/Angular", "Tailwind", "REST Integration"],
            live: "https://mentorerp.com/",
            code: "https://github.com/Ashikur123del/schoolmaneg"
        },
        {
            title: "Leadskill IT",
            desc: "A modern corporate website and dashboard for an IT firm, emphasizing responsive design and fast load times.",
            img: img4,
            tags: ["React", "JSX", "Tailwind", "Framer Motion"],
            live: "https://leadskill-it.vercel.app/",
            code: "https://github.com/Ashikur123del/madrasah"
        }
    ];

    return (
        <section id="projects" className="py-32 bg-slate-950/50 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
                    <div className="max-w-2xl text-left">
                        <span className="text-cyan-400 font-bold uppercase tracking-[0.3em] text-sm mb-4 block underline decoration-cyan-500/50 underline-offset-8 decoration-4">The Portfolio</span>
                        <h2 className="text-5xl font-black mb-6 tracking-tighter">Handpicked <span className="text-gradient">Projects & Works</span></h2>
                        <p className="text-slate-400 text-lg leading-relaxed">Each project is a unique challenge, solved with clean code and innovative design principles. Here are my favorite works.</p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="group relative h-[450px] w-full rounded-[3.5rem] bg-slate-900 overflow-hidden border border-white/5 transition-all duration-700 hover:border-cyan-500/50 hover:shadow-[0_20px_80px_rgba(6,182,212,0.1)]"
                        >
                            {/* Card Media */}
                            <div className="absolute inset-0">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out opacity-60 group-hover:opacity-30"
                                    onError={(e) => { e.target.src = 'https://placehold.co/1080x1350/slate/white?text=Project+View'; }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent group-hover:via-slate-950/80 transition-all duration-500"></div>
                            </div>

                            {/* Icons and Navigation Overlays */}
                            <div className="absolute top-10 right-10 flex gap-4 h-fit opacity-0 group-hover:opacity-100 translate-y-[-20px] group-hover:translate-y-0 transition-all duration-500 z-50">
                                <a href={project.live} target="_blank" rel="noreferrer" title="Live Site" className="w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white text-2xl hover:bg-cyan-500 hover:border-cyan-400 transition-all duration-300">
                                    <FiExternalLink />
                                </a>
                                <a href={project.code} target="_blank" rel="noreferrer" title="Source Code" className="w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white text-2xl hover:bg-cyan-500 hover:border-cyan-400 transition-all duration-300">
                                    <FiGithub />
                                </a>
                            </div>

                            {/* Content Overlays */}
                            <div className="absolute bottom-10 left-10 right-10 z-20">
                                <div className="mb-6 flex flex-wrap gap-2 translate-y-[20px] group-hover:translate-y-0 transition-transform duration-500">
                                    {project.tags.map((tag, tIdx) => (
                                        <span key={tIdx} className="px-4 py-1 bg-white/10 border border-white/10 rounded-full text-xs font-black tracking-widest text-white/70 uppercase group-hover:text-cyan-300 group-hover:border-cyan-500/30 transition-colors">{tag}</span>
                                    ))}
                                </div>
                                <h3 className="text-4xl font-extrabold text-white mb-4 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">{project.title}</h3>
                                <p className="text-slate-400 text-lg line-clamp-2 max-w-lg mb-0 group-hover:mb-10 opacity-0 group-hover:opacity-100 translate-y-[40px] group-hover:translate-y-0 transition-all duration-500">{project.desc}</p>
                            </div>

                            {/* Visual Accents */}
                            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
