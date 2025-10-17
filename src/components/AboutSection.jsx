import FadeInSection from './FadeInSection';
const AboutSection = () => (
    <section id="about" className="py-20">
        <FadeInSection>
            <h2 className="text-4xl font-orbitron font-bold text-center mb-12 text-glow">01. About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
                <div className="md:col-span-1 flex justify-center">
                    <div className="w-64 h-64 rounded-full border-2 border-[var(--primary-color)] p-2 relative overflow-hidden group">
                        <img src="https://placehold.co/256x256/0a0a1a/00f6ff?text=AC" alt="Azário Cossa" className="rounded-full w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-center p-4">SYSTEM_STATUS:<br/><span className="text-[var(--primary-color)]">ONLINE</span></span>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-2">
                    <p className="mb-4">Hello! I'm Alex, a systems architect with a passion for building robust, scalable, and secure digital infrastructures. My journey began in the early days of decentralized networks, and since then, I've been on a relentless quest to push the boundaries of what's possible in the digital realm.</p>
                    <p className="mb-4">My core philosophy is that technology should be a seamless extension of human capability. I specialize in cloud-native architectures, AI integration, and blockchain technologies, transforming complex problems into elegant, efficient solutions.</p>
                    <p>When I'm not architecting the future, you can find me exploring cryptographic theories or contributing to open-source quantum computing projects.</p>
                </div>
            </div>
        </FadeInSection>
    </section>
);

export default AboutSection;