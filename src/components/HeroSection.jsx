const HeroSection = () => (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center -mt-16">
        <h1 className="glitch font-orbitron text-4xl md:text-6xl lg:text-8xl" data-text="AZÁRIO COSSA">AZÁRIO COSSA</h1>
        <p className="mt-4 text-lg md:text-2xl text-[var(--primary-color)] text-glow">Cybernetic Solutions Architect & Digital Alchemist</p>
        <p className="mt-2 max-w-2xl text-base md:text-lg">Forging the future with elegant code and resilient systems. I build, I break, I innovate.</p>
        <a href="#projects" className="mt-8 px-8 py-3 border border-[var(--primary-color)] text-[var(--primary-color)] rounded-md transition-all duration-300 hover:bg-[var(--primary-color)] hover:text-[var(--secondary-color)] hover:shadow-[0_0_20px_var(--glow-color)]">
            [ VIEW MY WORK ]
        </a>
    </section>
);
export default HeroSection;