import { useIntersectionObserver } from '../Utils/InteractionObserver';
const FadeInSection = ({ children }) => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.15 });
    return (
        <div ref={ref} className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}>
            {children}
        </div>
    );
};

export default FadeInSection;