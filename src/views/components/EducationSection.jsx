import FadeInSection from './FadeInSection';
import EducationCard from './EducationCard';

const EducationSection = () => {
    const education = [
        {
            period: '2023-2026',
            degree: 'BUT Informatique (Bsc Computer Science)',
            institution: 'Limoges University',
            location: 'Limoges, France'
        },
        {
            period: '2022-2023',
            degree: 'Computer Engineering (1st year)',
            institution: 'Eduardo Mondlane University',
            location: 'Maputo, Mozambique'
        },
        {
            period: '2017-2021',
            degree: 'High School Diploma',
            institution: 'Birlik International School',
            location: 'Maputo, Mozambique'
        }
    ];

    return (
        <section id="education" className="py-20">
            <FadeInSection>
                <h2 className="text-4xl font-orbitron font-bold text-center mb-12 text-glow">04. Academic Background</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {education.map((item, index) => (
                        <EducationCard key={index} {...item} />
                    ))}
                </div>
            </FadeInSection>
        </section>
    );
};

export default EducationSection;
