import FadeInSection from './FadeInSection';

const SoftSkillsSection = () => {
    const softSkills = [
        "Project Management",
        "Open and Effective Communication",
        "Intuitive and Analytical Thinking",
        "Self-awareness",
        "Critical Thinking",
        "Willingness to Learn"
    ];

    return (
        <section id="soft-skills" className="py-20">
            <FadeInSection>
                <h2 className="text-4xl font-orbitron font-bold text-center mb-12 text-glow">06. External Core</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {softSkills.map((skill, index) => (
                        <div key={index} className="card-glow rounded-lg p-6 text-center hover:bg-[var(--primary-color)]/10 transition-colors duration-300">
                            <p className="text-lg font-orbitron text-gray-300">{skill}</p>
                        </div>
                    ))}
                </div>
            </FadeInSection>
        </section>
    );
};

export default SoftSkillsSection;
