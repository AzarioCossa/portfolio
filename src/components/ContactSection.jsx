import FadeInSection from './FadeInSection';
const ContactSection = () => (
    <section id="contact" className="py-20">
        <FadeInSection>
            <h2 className="text-4xl font-orbitron font-bold text-center mb-4 text-glow">04. Establish Connection</h2>
            <p className="text-center max-w-xl mx-auto mb-12">I am currently available for new projects and collaborations. Send a signal, and I'll respond.</p>
            <div className="max-w-lg mx-auto">
                <form action="#" method="POST" className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[var(--primary-color)]">_callsign:</label>
                        <input type="text" name="name" id="name" required className="mt-1 block w-full bg-[var(--secondary-color)] border border-[var(--primary-color)]/50 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[var(--primary-color)]">_network_address:</label>
                        <input type="email" name="email" id="email" required className="mt-1 block w-full bg-[var(--secondary-color)] border border-[var(--primary-color)]/50 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-[var(--primary-color)]">_message_payload:</label>
                        <textarea name="message" id="message" rows="4" required className="mt-1 block w-full bg-[var(--secondary-color)] border border-[var(--primary-color)]/50 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="w-full md:w-auto px-10 py-3 border border-[var(--primary-color)] text-[var(--primary-color)] rounded-md transition-all duration-300 hover:bg-[var(--primary-color)] hover:text-[var(--secondary-color)] hover:shadow-[0_0_20px_var(--glow-color)]">
                            [ TRANSMIT ]
                        </button>
                    </div>
                </form>
            </div>
        </FadeInSection>
    </section>
);

export default ContactSection;