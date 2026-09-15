import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-3' : 'py-5 sm:py-7'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className={`relative px-4 sm:px-8 py-2.5 sm:py-3 rounded-2xl flex items-center justify-between transition-all duration-500 glass-effect border-opacity-20 ${scrolled ? 'shadow-lg bg-slate-900/80 backdrop-blur-xl border-white/10' : 'border-transparent shadow-none bg-transparent'}`}>
                    <a href="#" className="flex-shrink-0 group flex items-center gap-2.5 sm:gap-3">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-black text-lg sm:text-xl shadow-lg ring-4 ring-cyan-500/10 group-hover:scale-110 transition-transform">AK</div>
                        <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">Ashik Khan<span className="text-cyan-400">.</span></span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-xs xl:text-sm font-semibold text-slate-300 hover:text-white transition-colors relative group py-2"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                        <a href="#contact" className="btn-premium py-2 text-xs xl:text-sm px-5 xl:px-6">Hire Me</a>
                    </div>

                    {/* Mobile Menu Icon */}
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="lg:hidden text-white/80 hover:text-white p-2 focus:outline-none"
                        aria-label="Toggle Navigation Menu"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between items-end overflow-hidden group">
                           <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
                           <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0 translate-x-4' : 'w-4'}`}></span>
                           <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'}`}></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -15, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -15, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-4 right-4 mt-3 p-6 glass-effect bg-slate-900/95 backdrop-blur-2xl rounded-2xl lg:hidden z-50 border border-white/10 shadow-2xl"
                    >
                        <div className="flex flex-col gap-3 text-center">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-base font-semibold text-slate-200 hover:text-cyan-400 hover:bg-white/5 rounded-xl transition-all py-2.5"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a 
                                href="#contact" 
                                onClick={() => setIsOpen(false)}
                                className="btn-premium py-3 text-sm mt-2 w-full text-center block font-bold"
                            >
                                Hire Me
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
