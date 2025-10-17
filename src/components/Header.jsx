const Header = () => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-[var(--primary-color)]/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex-shrink-0">
                    <a href="#home" className="font-orbitron text-2xl font-bold text-glow text-white">A.C.</a>
                </div>
                <nav className="hidden md:flex items-baseline space-x-4">
                    <a href="#about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-[var(--primary-color)] hover:text-glow transition-colors duration-300">01.ABOUT</a>
                    <a href="#projects" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-[var(--primary-color)] hover:text-glow transition-colors duration-300">02.PROJECTS</a>
                    <a href="#skills" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-[var(--primary-color)] hover:text-glow transition-colors duration-300">03.SKILLS</a>
                    <a href="#contact" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-[var(--primary-color)] hover:text-glow transition-colors duration-300">04.CONTACT</a>
                </nav>
            </div>
        </div>
    </header>
);
export default Header;