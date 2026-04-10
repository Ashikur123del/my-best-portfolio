import { motion } from 'framer-motion';
import { FiSend, FiMail, FiMapPin } from 'react-icons/fi';

const Contact = () => {
    return (
        <section id="contact" className="py-32 bg-slate-950 px-6 relative overflow-hidden">
            <div className="absolute top-1/4 right-[5%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] animate-blob -z-10"></div>
            <div className="absolute bottom-1/4 left-[5%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] animate-blob animation-delay-2000 -z-10"></div>

            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-left"
                    >
                        <span className="text-cyan-400 font-bold uppercase tracking-[0.3em] text-sm mb-6 block underline decoration-cyan-500/50 underline-offset-8 decoration-4">Get In Touch</span>
                        <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight tracking-tighter uppercase underline decoration-cyan-500/30 underline-offset-[12px] decoration-4">Let&apos;s Build <span className="text-gradient">Something Rare</span> Together <span className="text-cyan-500">.</span></h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-lg font-medium">I&apos;m currently open to new opportunities and interesting freelance projects. Reach out if you want to collaborate.</p>

                        <div className="flex flex-col gap-8">
                            {[
                                { icon: <FiMail />, label: 'Email Me', value: 'ashikur760@gmail.com', link: 'mailto:ashikur760@gmail.com' },
                                { icon: <FiMapPin />, label: 'Location', value: 'Dhaka, Bangladesh', link: '#' },
                            ].map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.link}
                                    className="group flex items-center gap-6 p-6 glass-card border-slate-700/50 hover:bg-slate-900 transition-all duration-300 w-fit"
                                >
                                    <div className="w-14 h-14 bg-slate-800/80 rounded-2xl flex items-center justify-center text-2xl text-cyan-400 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-xl border border-white/5">{item.icon}</div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-slate-500 tracking-widest uppercase">{item.label}</span>
                                        <span className="text-xl font-bold text-white tracking-tight">{item.value}</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <form className="glass-card p-10 md:p-16 border-white/5 bg-slate-900/80 backdrop-blur-3xl shadow-2xl overflow-hidden relative">
                            {/* Form Header Accent */}
                            <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600"></div>
                            
                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                <div className="space-y-4">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Your Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Md. Ashik"
                                        className="w-full bg-slate-950/50 border border-slate-800 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all text-white placeholder:text-slate-700"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Your Email</label>
                                    <input
                                        type="email"
                                        placeholder="ashikur@example.com"
                                        className="w-full bg-slate-950/50 border border-slate-800 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all text-white placeholder:text-slate-700"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4 mb-10">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Your Project Detail</label>
                                <textarea
                                    placeholder="Tell me about your amazing vision..."
                                    rows="5"
                                    className="w-full bg-slate-950/50 border border-slate-800 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all text-white placeholder:text-slate-700 resize-none"
                                ></textarea>
                            </div>

                            <button className="btn-premium w-full group flex items-center justify-center gap-4 py-5 uppercase tracking-widest text-lg font-black bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 shadow-cyan-500/20 hover:shadow-cyan-500/40">
                                Send Message <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
