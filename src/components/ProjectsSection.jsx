import FadeInSection from './FadeInSection';
import ProjectCard from './ProjectCard';
const ProjectsSection = () => {
    const projects = [
        { title: 'Project Sentient AI', description: 'A decentralized neural network for predictive analytics, built on a custom blockchain protocol to ensure data integrity and user privacy.', tags: ['TensorFlow', 'Rust', 'Substrate'] },
        { title: 'Quantum Ledger', description: 'An experimental quantum-resistant ledger system for securing high-value digital assets against future cryptographic threats.', tags: ['Go', 'Post-Quantum Crypto', 'gRPC'] },
        { title: 'Project Chimera', description: 'A dynamic, self-healing infrastructure-as-code deployment pipeline for mission-critical cloud services on AWS and Azure.', tags: ['Kubernetes', 'Terraform', 'Prometheus'] },
    ];

    return (
        <section id="projects" className="py-20">
            <FadeInSection>
                <h2 className="text-4xl font-orbitron font-bold text-center mb-12 text-glow">02. Selected Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => <ProjectCard key={index} {...project} />)}
                </div>
            </FadeInSection>
        </section>
    );
};

export default ProjectsSection;