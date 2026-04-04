import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-base-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-base-content mb-4">Get In Touch <span className="text-primary">👋</span></h2>
                    <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-base-content/70">Have a question or want to work together? Leave your details and I&apos;ll get back to you.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <form className="bg-base-100/50 backdrop-blur-md shadow-2xl rounded-3xl p-8 md:p-12 border border-base-200">
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="form-control">
                                <label className="label"><span className="label-text font-semibold">Your Name</span></label>
                                <input type="text" placeholder="John Doe" className="input input-bordered input-primary w-full bg-base-100 focus:bg-white transition-colors" required />
                            </div>
                            <div className="form-control">
                                <label className="label"><span className="label-text font-semibold">Your Email</span></label>
                                <input type="email" placeholder="john@example.com" className="input input-bordered input-primary w-full bg-base-100 focus:bg-white transition-colors" required />
                            </div>
                        </div>

                        <div className="form-control mb-8">
                            <label className="label"><span className="label-text font-semibold">Your Message</span></label>
                            <textarea placeholder="Tell me about your project..." className="textarea textarea-bordered textarea-primary h-32 w-full bg-base-100 focus:bg-white transition-colors text-base" required></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary w-full rounded-2xl h-14 text-lg font-bold shadow-lg shadow-primary/30 hover:-translate-y-1 transition-transform group">
                            Send Message <FaPaperPlane className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </form>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex justify-center space-x-8 mt-16"
                >
                    {[
                        { icon: <FaGithub />, link: "https://github.com/Ashikur123del" },
                        { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/asik-khan-b82390249/" },
                        { icon: <FaTwitter />, link: "#" }
                    ].map((social, idx) => (
                        <a
                            key={idx}
                            href={social.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-4xl text-base-content/50 hover:text-primary transform hover:-translate-y-2 hover:scale-110 transition-all duration-300 drop-shadow-md hover:drop-shadow-xl"
                        >
                            {social.icon}
                        </a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
