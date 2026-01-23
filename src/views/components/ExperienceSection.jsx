import FadeInSection from './FadeInSection';
import ExperienceCard from './ExperienceCard';

const ExperienceSection = () => {
    const experiences = [
        {
            role: 'Full Stack Developer (Upcoming Internship)',
            company: 'France Travail | Limoges, France',
            date: 'February 2026 – June 2026',
            description: "Development of a multimedia messaging system attached to the internal and external event management system of the company, designed to assist the Human Resources department in communication and event management and its guests. Implementation of modern tools (git, CI/CD format, Docker) in the development environment of the Information System department of the regional direction.",
            tags: ['CI/CD', 'Docker', 'Git', 'Full Stack']
        },
        {
            role: 'Full Stack Developer',
            company: 'France Travail | Limoges, France',
            date: 'April 2025 – June 2025',
            description: "Development of a system designed to assist the Human Resources department in the creation and management of all types of events, while providing essential statistics on these events. Reduction of operational costs through the internalization of a centralized event management solution.",
            tags: ['Full Stack', 'Event Management']
        }
    ];

    return (
        <section id="experience" className="py-20">
            <FadeInSection>
                <h2 className="text-4xl font-orbitron font-bold text-center mb-12 text-glow">03. Professional Experience</h2>
                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} {...exp} />
                    ))}
                </div>
            </FadeInSection>
        </section>
    );
};

export default ExperienceSection;
