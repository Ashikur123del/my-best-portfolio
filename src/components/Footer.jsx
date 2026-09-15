import { FiHeart, FiGithub, FiLinkedin, FiMail, FiPhone, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="py-20 bg-slate-950 border-t border-white/5 relative overflow-hidden px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-slate-400 font-medium">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
                    <span className="text-2xl font-black text-white">
                        MD. ASHIK KHAN<span className="text-cyan-400">.</span>
                    </span>
                    <div className="hidden sm:block h-5 w-px bg-slate-800"></div>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                        Crafted with <FiHeart className="text-red-500 fill-red-500 animate-pulse" /> for high performance
                    </div>
                </div>

                <div className="flex items-center gap-5">
                    {[
                        { icon: <FiGithub />, link: 'https://github.com/Ashikur123del', label: 'GitHub' },
                        { icon: <FiLinkedin />, link: 'https://www.linkedin.com/in/asik-khan-b82390249/', label: 'LinkedIn' },
                        { icon: <FiMail />, link: 'mailto:asikk2925@gmail.com', label: 'Email' },
                        { icon: <FiPhone />, link: 'tel:+8801317153621', label: 'Phone' },
                    ].map((item, idx) => (
                        <a
                            key={idx}
                            href={item.link}
                            target={item.link.startsWith('http') ? '_blank' : undefined}
                            rel={item.link.startsWith('http') ? 'noreferrer' : undefined}
                            title={item.label}
                            className="w-10 h-10 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-lg text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                        >
                            {item.icon}
                        </a>
                    ))}
                    <button
                        onClick={scrollToTop}
                        title="Scroll to Top"
                        className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/20 rounded-xl flex items-center justify-center text-lg text-cyan-400 hover:text-white hover:bg-cyan-500 transition-all ml-4"
                    >
                        <FiArrowUp />
                    </button>
                </div>

                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400 text-center md:text-right">
                    &copy; {new Date().getFullYear()} MD. ASHIK KHAN. Frontend Developer.
                </div>
            </div>
            
            {/* Visual Decoration */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none"></div>
        </footer>
    );
};

export default Footer;
