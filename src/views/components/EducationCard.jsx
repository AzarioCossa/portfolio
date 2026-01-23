const EducationCard = ({ degree, institution, location, period }) => (
    <div className="card-glow rounded-lg p-6 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <i className="fas fa-graduation-cap text-6xl text-[var(--primary-color)]"></i>
        </div>
        <div className="relative z-10">
            <span className="text-sm font-mono text-[var(--primary-color)] mb-2 block">{period}</span>
            <h3 className="text-xl font-orbitron font-bold text-white mb-1">{degree}</h3>
            <p className="text-lg text-gray-300 mb-1">{institution}</p>
            <p className="text-sm text-gray-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--primary-color)]"></span>
                {location}
            </p>
        </div>
    </div>
);

export default EducationCard;
