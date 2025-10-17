import FadeInSection from './FadeInSection';
const SkillsSection = () => (
    <section id="skills" className="py-20">
        <FadeInSection>
            <h2 className="text-4xl font-orbitron font-bold text-center mb-12 text-glow">03. Core Matrix</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                    <h3 className="text-lg font-orbitron text-[var(--primary-color)]">Languages</h3>
                    <p>Python</p><p>Go</p><p>Rust</p><p>TypeScript</p>
                </div>
                <div className="space-y-2">
                    <h3 className="text-lg font-orbitron text-[var(--primary-color)]">Platforms</h3>
                    <p>AWS</p><p>Google Cloud</p><p>Kubernetes</p><p>Docker</p>
                </div>
                <div className="space-y-2">
                    <h3 className="text-lg font-orbitron text-[var(--primary-color)]">Databases</h3>
                    <p>PostgreSQL</p><p>ScyllaDB</p><p>TiDB</p><p>Redis</p>
                </div>
                <div className="space-y-2">
                    <h3 className="text-lg font-orbitron text-[var(--primary-color)]">Concepts</h3>
                    <p>Distributed Systems</p><p>Microservices</p><p>Cryptography</p><p>Machine Learning</p>
                </div>
            </div>
        </FadeInSection>
    </section>
);

export default SkillsSection;