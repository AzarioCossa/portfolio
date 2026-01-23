import FadeInSection from './FadeInSection';
const SkillsSection = () => (
    <section id="skills" className="py-20">
        <FadeInSection>
            <h2 className="text-4xl font-orbitron font-bold text-center mb-12 text-glow">05. Core Matrix</h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-center">
                <div className="space-y-2">
                    <h3 className="text-lg font-orbitron text-[var(--primary-color)]">Languages</h3>
                    <p>Python</p><p>Java</p><p>Rust</p><p>C/C++</p><p>PHP</p><p>TypeScript</p><p>JavaScript</p>
                </div>
                <div className="space-y-2">
                    <h3 className="text-lg font-orbitron text-[var(--primary-color)]">Platforms</h3>
                    <p>AWX</p><p>Docker</p><p>Linux</p><p>Windows</p>
                </div>
                <div className="space-y-2">
                    <h3 className="text-lg font-orbitron text-[var(--primary-color)]">Databases</h3>
                    <p>PostgreSQL</p><p>MySQL</p><p>NoSQL</p><p>Redis</p><p>Cassandra</p><p>Turso (SQLite Edge)</p>
                </div>
                <div className="space-y-2">
                    <h3 className="text-lg font-orbitron text-[var(--primary-color)]">Frameworks & Tools</h3>
                    <p>Node.js / Express.js</p>
                    <p>CodeIgniter 4</p>
                    <p>React</p>
                    <p>Bootstrap</p>
                    <p>Sass</p>
                    <p>Drizzle ORM</p>
                </div>
                <div className="space-y-2">
                    <h3 className="text-lg font-orbitron text-[var(--primary-color)]">Concepts</h3>
                    <p>Distributed Systems</p>
                    <p>Microservices</p>
                    <p>Cryptography</p>
                    <p>Machine Learning</p>
                    <p>System Architecture</p>
                    <p>Networking (IPv4 / IPv6 / SSH / DNS / DHCP / iptables)</p>
                </div>
                <div className="space-y-2">
                    <h3 className="text-lg font-orbitron text-[var(--primary-color)]">Security</h3>
                    <p>Iptables</p>
                    <p>Wireshark</p>
                    <p>John The Ripper</p>
                    <p>Metasploit</p>
                </div>
            </div>
        </FadeInSection>
    </section>
);

export default SkillsSection;