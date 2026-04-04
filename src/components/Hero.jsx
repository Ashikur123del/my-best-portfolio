import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload, FaReact, FaAngular, FaBootstrap, FaJs } from 'react-icons/fa';
import { SiTailwindcss, SiSass } from 'react-icons/si';
import cvFile from '../assets/image/Md_Ashik_Professional_FrontEnd_CV.docx';
const Hero = () => {
    // Floating and rotating animation configuration
    const floatingAnimation = (duration, yOffset) => ({
        y: [0, yOffset, 0],
        rotate: [0, 360],
        transition: {
            y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            },
            rotate: {
                duration: duration,
                repeat: Infinity,
                ease: "linear"
            }
        }
    });

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 pt-20">
            <div className="absolute inset-0 z-0 opacity-30">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-40 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            {/* Smart Animated Background Icons */}
            <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
                <motion.div animate={floatingAnimation(12, -25)} className="absolute top-[20%] left-[10%] text-primary/70 text-5xl md:text-7xl filter drop-shadow-lg">
                    <FaReact />
                </motion.div>
                <motion.div animate={floatingAnimation(18, -20)} className="absolute top-[30%] right-[15%] text-red-500/60 text-4xl md:text-6xl filter drop-shadow-lg">
                    <FaAngular />
                </motion.div>
                <motion.div animate={floatingAnimation(15, -30)} className="absolute bottom-[20%] left-[20%] text-emerald-500/60 text-4xl md:text-6xl filter drop-shadow-lg">
                    <SiTailwindcss />
                </motion.div>
                <motion.div animate={floatingAnimation(20, -15)} className="absolute bottom-[30%] right-[20%] text-yellow-500/70 text-5xl md:text-7xl filter drop-shadow-lg">
                    <FaJs />
                </motion.div>
                <motion.div animate={floatingAnimation(16, -20)} className="absolute top-[50%] left-[5%] text-purple-500/50 text-4xl md:text-5xl filter drop-shadow-lg">
                    <FaBootstrap />
                </motion.div>
                <motion.div animate={floatingAnimation(25, -30)} className="absolute top-[15%] right-[35%] text-pink-500/50 text-5xl md:text-6xl filter drop-shadow-lg">
                    <SiSass />
                </motion.div>
            </div>

            <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold tracking-wide text-sm mb-6 border border-primary/20">
                        Available for new opportunities
                    </span>
                    <h1 className="text-6xl md:text-8xl font-black mb-6 text-base-content tracking-tight">
                        Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Md. Ashik</span>
                    </h1>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-xl md:text-3xl font-light mb-10 text-base-content/80 max-w-2xl mx-auto leading-relaxed"
                >
                    Crafting high-performance, pixel-perfect UIs with <span className="font-semibold text-primary">React</span>, <span className="font-semibold text-secondary">Angular</span>, and <span className="font-semibold text-emerald-500">Tailwind</span>.
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row justify-center items-center gap-4"
                >
                    <a href="#projects" className="btn btn-primary rounded-full px-8 py-4 h-auto text-lg font-bold shadow-lg shadow-primary/30 hover:scale-105 transition-transform">
                        View My Work <FaArrowRight className="ml-2" />
                    </a>
                    <a href={cvFile} download="Md_Ashik_FrontEnd_CV.docx" className="btn btn-outline btn-secondary rounded-full px-8 py-4 h-auto text-lg font-bold hover:scale-105 transition-transform bg-base-100/50 backdrop-blur-sm">
                        Download CV <FaDownload className="ml-2" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
