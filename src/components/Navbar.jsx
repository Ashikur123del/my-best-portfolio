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
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className={`relative px-8 py-3 rounded-2xl flex items-center justify-between transition-all duration-500 glass-effect border-opacity-20 ${scrolled ? 'mx-0 sm:mx-10 rounded-3xl' : 'mx-0 sm:mx-0 border-transparent shadow-none bg-transparent'}`}>
                    <a href="#" className="flex-shrink-0 group flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg ring-4 ring-cyan-500/10 group-hover:scale-110 transition-transform">A</div>
                        <span className="text-2xl font-extrabold text-white tracking-tight hidden sm:block">Ashik<span className="text-cyan-400">.</span></span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-semibold text-slate-400 hover:text-white transition-colors relative group py-2"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                        <a href="#contact" className="btn-premium py-2 text-sm px-6">Hire Me</a>
                    </div>

                    {/* Mobile Menu Icon */}
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white/70 hover:text-white p-2">
                        <div className="w-7 h-5 flex flex-col justify-between items-end overflow-hidden group">
                           <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-7 rotate-45 translate-y-2' : 'w-7'}`}></span>
                           <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0 translate-x-5' : 'w-5'}`}></span>
                           <span className={`h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-7 -rotate-45 -translate-y-2' : 'w-3 group-hover:w-7'}`}></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="absolute top-full left-6 right-6 mt-4 p-6 glass-effect rounded-3xl md:hidden z-50 border border-white/10"
                    >
                        <div className="flex flex-col gap-5 text-center">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-semibold text-slate-300 hover:text-white transition-colors py-2 border-b border-white/5"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
