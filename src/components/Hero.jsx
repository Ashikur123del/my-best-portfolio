import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import ashikImg from '../assets/image/Ashik.jpeg';
import cvFile from '../assets/image/Md_Ashik_Professional_FrontEnd_CV.docx';

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 px-4 sm:px-6 lg:px-8">
            {/* Animated Blobs */}
            <div className="absolute top-1/4 left-1/4 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-blue-600/20 rounded-full blur-[100px] sm:blur-[120px] animate-blob -z-10 pointer-events-none"></div>
            <div className="absolute top-1/2 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-cyan-500/10 rounded-full blur-[90px] sm:blur-[100px] animate-blob animation-delay-2000 -z-10 pointer-events-none"></div>
            <div className="absolute bottom-1/4 left-1/3 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-purple-600/15 rounded-full blur-[110px] sm:blur-[130px] animate-blob animation-delay-4000 -z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="z-10 text-left"
                >
                    <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-5 sm:mb-6">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 py-1 sm:py-1.5 px-3 sm:px-4 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-bold text-[11px] sm:text-xs uppercase tracking-[0.15em]"
                        >
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                            Available for Opportunities
                        </motion.span>

                        <span className="inline-flex items-center gap-1.5 py-1 sm:py-1.5 px-3 rounded-full bg-slate-800/80 border border-white/5 text-slate-400 text-[11px] sm:text-xs font-medium">
                            <FiMapPin className="text-cyan-400" /> Dhaka, Bangladesh
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-4 tracking-tight">
                        Hi, I&apos;m <span className="text-white block mt-1">MD. ASHIK KHAN</span>
                    </h1>

                    <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-gradient mb-5 sm:mb-6 tracking-tight">
                        Frontend Developer | React.js • Next.js • TypeScript
                    </h2>

                    <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-xl mb-7 sm:mb-9 font-normal leading-relaxed">
                        Professional Front-End Developer with experience building scalable web applications, enterprise ERPs, and high-performance UI systems using React.js, Next.js, Angular, and TypeScript. Passionate about clean architecture and role-based access control.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto">
                        <a href="#projects" className="btn-premium group flex items-center justify-center gap-3 text-sm sm:text-base py-3 px-6 text-center">
                            View Key Projects <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href={cvFile} download="Md_Ashik_Professional_FrontEnd_CV.docx" className="relative group bg-white/5 border border-white/10 hover:bg-white/10 px-6 py-3 rounded-full font-bold transition-all text-slate-300 hover:text-white flex items-center justify-center gap-3 text-sm sm:text-base text-center">
                            Download Resume <FiDownload className="text-cyan-400" />
                        </a>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                        <div className="flex gap-2.5 sm:gap-3">
                            {[
                                { icon: <FiGithub />, link: 'https://github.com/Ashikur123del', label: 'GitHub' },
                                { icon: <FiLinkedin />, link: 'https://www.linkedin.com/in/asik-khan-b82390249/', label: 'LinkedIn' },
                                { icon: <FiMail />, link: 'mailto:asikk2925@gmail.com', label: 'Email' },
                                { icon: <FiPhone />, link: 'tel:+8801317153621', label: 'Phone' },
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    title={social.label}
                                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-base sm:text-lg text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                        <div className="h-4 w-px bg-slate-800 hidden sm:block"></div>
                        <span className="text-xs text-slate-400 font-mono hidden sm:inline-block">asikk2925@gmail.com</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative flex justify-center lg:justify-end w-full"
                >
                    <div className="relative w-full max-w-[300px] xs:max-w-[360px] sm:max-w-[420px] lg:max-w-[460px] aspect-[4/5] group mx-auto lg:mx-0">
                        {/* Decorative Frames */}
                        <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-full h-full border border-cyan-500/30 rounded-[28px] sm:rounded-[40px] -z-10 group-hover:top-1 group-hover:right-1 transition-all duration-700"></div>
                        <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-full h-full border border-purple-600/30 rounded-[28px] sm:rounded-[40px] -z-10 group-hover:bottom-1 group-hover:left-1 transition-all duration-700"></div>

                        <div className="w-full h-full rounded-[28px] sm:rounded-[40px] overflow-hidden border-4 sm:border-[10px] border-slate-900 shadow-2xl relative">
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
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 p-4 sm:p-6 glass-effect rounded-2xl sm:rounded-3xl border border-white/20 shadow-2xl z-20"
                        >
                            <span className="text-3xl sm:text-5xl font-black text-cyan-400 block mb-0.5 sm:mb-1">1+</span>
                            <span className="text-[10px] sm:text-xs font-bold text-slate-300 uppercase tracking-widest leading-tight block">Year Of <br /> Experience</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
