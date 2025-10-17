const ProjectCard = ({ title, description, tags }) => (
    <div className="card-glow rounded-lg p-6">
        <h3 className="text-xl font-orbitron font-bold text-[var(--primary-color)] mb-2">{title}</h3>
        <p className="text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 text-xs">
            {tags.map((tag, index) => (
                <span key={index} className="bg-[var(--primary-color)]/20 text-[var(--primary-color)] px-2 py-1 rounded">{tag}</span>
            ))}
        </div>
    </div>
);
export default ProjectCard;