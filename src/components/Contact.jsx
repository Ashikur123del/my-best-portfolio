import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMail, FiMapPin, FiPhone, FiLinkedin, FiGithub, FiCheckCircle } from 'react-icons/fi';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Construct mailto link
        const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        window.open(`mailto:asikk2925@gmail.com?subject=${subject}&body=${body}`, '_blank');
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    const contactMethods = [
        {
            icon: <FiMail />,
            label: 'Email',
            value: 'asikk2925@gmail.com',
            link: 'mailto:asikk2925@gmail.com'
        },
        {
            icon: <FiPhone />,
            label: 'Phone / WhatsApp',
            value: '+880 1317-153621',
            link: 'tel:+8801317153621'
        },
        {
            icon: <FiMapPin />,
            label: 'Location',
            value: 'Dhaka, Bangladesh',
            link: 'https://maps.google.com/?q=Dhaka,Bangladesh'
        },
        {
            icon: <FiLinkedin />,
            label: 'LinkedIn Profile',
            value: 'asik-khan-b82390249',
            link: 'https://www.linkedin.com/in/asik-khan-b82390249/'
        }
    ];

    return (
        <section id="contact" className="py-32 bg-slate-950 px-6 relative overflow-hidden">
            <div className="absolute top-1/4 right-[5%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] animate-blob -z-10 pointer-events-none"></div>
            <div className="absolute bottom-1/4 left-[5%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] animate-blob animation-delay-2000 -z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-left"
                    >
                        <span className="text-cyan-400 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
                            Direct Communication
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
                            Let&apos;s Build <span className="text-gradient">High-Impact Systems</span> Together
                        </h2>
                        <p className="text-slate-400 text-base leading-relaxed mb-10 max-w-lg">
                            I am open to full-time frontend roles, full-stack contracts, and impactful projects. Feel free to connect directly via email, phone, or LinkedIn.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {contactMethods.map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.link}
                                    target={item.link.startsWith('http') ? '_blank' : undefined}
                                    rel={item.link.startsWith('http') ? 'noreferrer' : undefined}
                                    className="group flex items-center gap-4 p-5 glass-card border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-300 rounded-2xl"
                                >
                                    <div className="w-12 h-12 bg-slate-800/80 rounded-xl flex items-center justify-center text-xl text-cyan-400 group-hover:scale-110 transition-transform shadow-lg border border-white/5">
                                        {item.icon}
                                    </div>
                                    <div className="flex flex-col min-w-0">
                                        <span className="text-[11px] font-bold text-slate-500 tracking-wider uppercase">
                                            {item.label}
                                        </span>
                                        <span className="text-sm font-bold text-slate-200 group-hover:text-cyan-300 transition-colors truncate">
                                            {item.value}
                                        </span>
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
                        <form
                            onSubmit={handleSubmit}
                            className="glass-card p-8 sm:p-12 border-white/5 bg-slate-900/90 backdrop-blur-3xl shadow-2xl rounded-3xl overflow-hidden relative"
                        >
                            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600"></div>

                            <h3 className="text-2xl font-black text-white mb-2">
                                Send a Message
                            </h3>
                            <p className="text-slate-400 text-xs mb-8">
                                Directly opens your preferred mail client configured to reach asikk2925@gmail.com
                            </p>

                            {submitted && (
                                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                                    <FiCheckCircle className="text-lg flex-shrink-0" />
                                    <span>Thank you! Your mail client has been opened. Looking forward to speaking with you!</span>
                                </div>
                            )}

                            <div className="space-y-5 mb-8">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">
                                        Your Full Name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="e.g. John Doe"
                                        className="w-full bg-slate-950/80 border border-slate-800 p-3.5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all text-white placeholder:text-slate-600 text-sm"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">
                                        Your Email Address
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="e.g. john@company.com"
                                        className="w-full bg-slate-950/80 border border-slate-800 p-3.5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all text-white placeholder:text-slate-600 text-sm"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">
                                        Project / Role Inquiry
                                    </label>
                                    <textarea
                                        required
                                        rows="4"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="Describe the role or project you'd like to collaborate on..."
                                        className="w-full bg-slate-950/80 border border-slate-800 p-3.5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all text-white placeholder:text-slate-600 text-sm resize-none"
                                    ></textarea>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="btn-premium w-full group flex items-center justify-center gap-3 py-4 uppercase tracking-widest text-sm font-black bg-gradient-to-r from-cyan-500 to-blue-600 shadow-cyan-500/20 hover:shadow-cyan-500/40"
                            >
                                Dispatch Message <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
