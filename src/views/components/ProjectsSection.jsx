import FadeInSection from './FadeInSection';
import ProjectCard from './ProjectCard';
const ProjectsSection = () => {
    const projects = [
            {
                title: 'Momento Platform',
                description:
                'A full-stack event management platform built with CodeIgniter 4, MySQL, and React, enabling real-time coordination, invitations, and media sharing across collaborative teams.',
                tags: ['PHP', 'MySQL', 'React', 'jQuery'],
            },
            {
                title: 'SemStress',
                description:
                'A productivity and performance tracking web application for workshop operators, designed to automate daily reporting and provide real-time production insights.',
                tags: ['TypeScript', 'Node.js', 'Express', 'Bootstrap'],
            },
            {
                title: 'CryptoVault',
                description:
                'A lightweight password and key manager implementing SHA-256 and Vigenère cipher techniques, developed as part of a cryptography learning module.',
                tags: ['Python', 'Cryptography', 'SHA-256', 'Vigenère'],
            },
            {
                title: 'ShiFuMi Multiplayer',
                description:
                'A peer-to-peer multiplayer mobile game built in Kotlin using Android Studio, featuring direct connections without the need for a centralized database.',
                tags: ['Kotlin', 'P2P', 'Android Studio'],
            },
            {
                title: 'ctf-experience',
                description:
                'A capture the flag platform with many different and challenging exercices for beginners who aim to become references in the cybersecurity sector',
                tags: ['PHP', 'HTML', 'CSS'],
            },
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