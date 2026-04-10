import { FiHeart, FiGithub, FiLinkedin, FiTwitter, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="py-20 bg-slate-950 border-t border-white/5 relative overflow-hidden px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-slate-500 font-medium">
                <div className="flex items-center gap-10">
                    <span className="text-2xl font-black text-white px-2">Ashik<span className="text-cyan-400">.</span></span>
                    <div className="h-6 w-px bg-slate-800"></div>
                    <div className="flex items-center gap-2">
                        Designed with <FiHeart className="text-red-500 fill-red-500 animate-pulse" /> by <span className="text-white font-bold">Md. Ashik</span>
                    </div>
                </div>

                <div className="flex gap-10">
                    {[
                        { icon: <FiGithub />, link: 'https://github.com/Ashikur123del' },
                        { icon: <FiLinkedin />, link: 'https://www.linkedin.com/in/asik-khan-b82390249/' },
                        { icon: <FiTwitter />, link: '#' },
                    ].map((item, idx) => (
                        <a
                            key={idx}
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-2xl hover:text-cyan-400 transition-colors"
                        >
                            {item.icon}
                        </a>
                    ))}
                    <button
                        onClick={scrollToTop}
                        className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-xl text-white/50 hover:text-white hover:bg-cyan-500 hover:border-cyan-400 transition-all ml-12"
                    >
                        <FiArrowUp />
                    </button>
                </div>

                <div className="text-sm font-bold uppercase tracking-[0.2em] opacity-40">
                  &copy; {new Date().getFullYear()} Md. Ashik. Built with React & Tailwind.
                </div>
            </div>
            
            {/* Visual Decoration */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]"></div>
        </footer>
    );
};

export default Footer;
