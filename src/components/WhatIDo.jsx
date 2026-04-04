import { motion } from 'framer-motion';
import { FaLaptopCode, FaRocket, FaUserCheck, FaLayerGroup } from 'react-icons/fa';

const WhatIDo = () => {
    const services = [
        {
            title: "Modern UI Architecture",
            desc: "I build robust, scalable frontend architectures using React.js and Angular, ensuring code is modular, reusable, and easy to maintain throughout the project lifecycle.",
            icon: <FaLayerGroup />,
            color: "primary"
        },
        {
            title: "Pixel-Perfect Designs",
            desc: "Using Tailwind CSS, Bootstrap, and SCSS, I magically transform Figma or XD designs into responsive, beautiful web pages that look stunning on any device.",
            icon: <FaLaptopCode />,
            color: "secondary"
        },
        {
            title: "Seamless API Integration",
            desc: "I bridge the gap between frontend and backend by elegantly consuming REST APIs, securely managing data fetching, and handling complex application states.",
            icon: <FaRocket />,
            color: "emerald-500"
        },
        {
            title: "Performance & UX Focused",
            desc: "A great app isn't just about looks. I optimize load times, ensure accessibility (A11y), and integrate micro-animations for an unforgettable user experience.",
            icon: <FaUserCheck />,
            color: "purple-500"
        }
    ];

    return (
        <section id="what-i-do" className="py-24 bg-base-100 relative overflow-hidden">
            <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-base-content mb-6 tracking-tight">
                        What I Bring To The Table <span className="text-primary inline-block">🚀</span>
                    </h2>
                    <p className="text-lg text-base-content/70 max-w-2xl mx-auto mb-6">
                        Beyond just writing code, I focus on engineering seamless experiences. Here&apos;s how I add value to your company and your users.
                    </p>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full shadow-lg"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            className="group relative"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 via-base-100 to-secondary/20 rounded-3xl blur-md opacity-0 group-hover:opacity-100 transition duration-700"></div>

                            <div className="relative bg-base-100/90 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-base-200 hover:border-primary/30 transition-all duration-500 h-full flex flex-col md:flex-row gap-8 items-start">
                                <div className={`flex-shrink-0 w-20 h-20 rounded-2xl bg-base-200 flex items-center justify-center text-4xl text-${service.color} shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 border border-base-300`}>
                                    {service.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-base-content mb-4 tracking-wide group-hover:text-primary transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-base-content/75 text-lg leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatIDo;
