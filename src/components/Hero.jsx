import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import ashikImg from '../assets/image/Ashik.jpeg';
import cvFile from '../assets/image/Md_Ashik_Professional_FrontEnd_CV.docx';

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6">
            {/* Animated Blobs */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-blob -z-10"></div>
            <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] animate-blob animation-delay-2000 -z-10"></div>
            <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[130px] animate-blob animation-delay-4000 -z-10"></div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="z-10 text-left"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block py-1.5 px-4 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-bold text-sm mb-8 uppercase tracking-[0.2em]"
                    >
                        Available for freelance
                    </motion.span>

                    <h1 className="text-6xl md:text-[5rem] font-black leading-[1.1] mb-8 tracking-tighter">
                        <span className="text-gradient">Front-End Web Developer</span>
                    </h1>

                    <p className="text-xl text-slate-400 max-w-xl mb-12 font-medium leading-relaxed">
                        I am <span className="text-white font-bold">Md. Ashik</span>, a result-driven Front-End Developer with 1 year of experience building pixel-perfect, high-performance web experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 mb-12">
                        <a href="#projects" className="btn-premium group flex items-center justify-center gap-3">
                            Explore Projects <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href={cvFile} download="Md_Ashik_FrontEnd_CV.docx" className="relative group bg-white/5 border border-white/10 hover:bg-white/10 px-8 py-3 rounded-full font-bold transition-all text-slate-300 hover:text-white flex items-center justify-center gap-3">
                            Download Resume <FiDownload />
                        </a>
                    </div>

                    <div className="flex items-center gap-8 mt-4">
                        <div className="flex gap-4">
                            {[
                                { icon: <FiGithub />, link: 'https://github.com/Ashikur123del' },
                                { icon: <FiLinkedin />, link: 'https://www.linkedin.com/in/asik-khan-b82390249/' },
                                { icon: <FiTwitter />, link: '#' },
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                        <div className="h-px flex-1 bg-slate-800"></div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative flex justify-center lg:justify-end"
                >
                    <div className="relative w-full max-w-[480px] aspect-[4/5] group">
                        {/* Decorative Frames */}
                        <div className="absolute -top-4 -right-4 w-full h-full border border-cyan-500/30 rounded-[40px] -z-10 group-hover:top-2 group-hover:right-2 transition-all duration-700"></div>
                        <div className="absolute -bottom-4 -left-4 w-full h-full border border-purple-600/30 rounded-[40px] -z-10 group-hover:bottom-2 group-hover:left-2 transition-all duration-700"></div>

                        <div className="w-full h-full rounded-[40px] overflow-hidden border-[12px] border-slate-900 shadow-2xl relative">
                            <img
                                src={ashikImg}
                                alt="Md. Ashik"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Md+Ashik&background=0EA5E9&color=fff&size=800'; }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                        </div>

                        {/* Floating Experience Tag */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -right-6 p-6 glass-effect rounded-3xl border border-white/20 shadow-2xl z-20"
                        >
                            <span className="text-5xl font-black text-cyan-400 block mb-1">1+</span>
                            <span className="text-sm font-bold text-slate-300 uppercase tracking-widest leading-tight">Year Of <br /> Experience</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
