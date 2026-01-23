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
                    <p className="mb-4"> Hello! I'm Azário, a software developer and systems architect passionate about creating efficient, secure, and scalable applications. My journey started with a deep curiosity for how systems communicate — from network protocols to backend infrastructures — and evolved into a mission to build solutions that make technology seamless and powerful.</p>
                    <p className="mb-4">I specialize in backend development, API design, and database architecture, using technologies like Java, Rust, Python, and Node.js. I enjoy transforming complex technical challenges into clean, maintainable solutions, with a strong focus on performance and reliability.</p>
                    <p> When I'm not building or optimizing systems, you'll find me exploring cryptography, experimenting with new frameworks, or developing tools that simplify everyday digital workflows.</p>

                </div>
            </div>
        </FadeInSection>
    </section>
);

export default AboutSection;