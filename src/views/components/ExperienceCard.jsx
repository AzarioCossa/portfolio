const ExperienceCard = ({ role, company, date, description, tags }) => (
    <div className="card-glow rounded-lg p-6 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <div>
                <h3 className="text-xl font-orbitron font-bold text-[var(--primary-color)]">{role}</h3>
                <p className="text-lg text-gray-300">{company}</p>
            </div>
            <span className="text-sm text-[var(--primary-color)] font-mono border border-[var(--primary-color)] px-3 py-1 rounded mt-2 md:mt-0">
                {date}
            </span>
        </div>
        <p className="text-sm mb-4 text-gray-400 leading-relaxed">{description}</p>
        {tags && (
            <div className="flex flex-wrap gap-2 text-xs">
                {tags.map((tag, index) => (
                    <span key={index} className="bg-[var(--primary-color)]/10 text-[var(--primary-color)] px-2 py-1 rounded border border-[var(--primary-color)]/20">
                        {tag}
                    </span>
                ))}
            </div>
        )}
    </div>
);

export default ExperienceCard;
