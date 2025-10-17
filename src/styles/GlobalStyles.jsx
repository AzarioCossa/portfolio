const GlobalStyles = () => (
    <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Share+Tech+Mono&display=swap');
        
        :root {
            --primary-color: #00f6ff;
            --secondary-color: #0d1a26;
            --background-color: #0a0a1a;
            --glow-color: rgba(0, 246, 255, 0.7);
        }

        body {
            background-color: var(--background-color);
            color: #e0e0e0;
            font-family: 'Share Tech Mono', monospace;
            overflow-x: hidden;
            scroll-behavior: smooth;
        }

        .font-orbitron {
            font-family: 'Orbitron', sans-serif;
        }

        .text-glow {
            text-shadow: 0 0 5px var(--glow-color), 0 0 10px var(--glow-color), 0 0 15px var(--glow-color);
        }

        .card-glow {
            position: relative;
            background-color: rgba(13, 26, 38, 0.8);
            border: 1px solid var(--primary-color);
            transition: all 0.3s ease-in-out;
        }

        .card-glow:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 0.5rem;
            padding: 2px;
            background: linear-gradient(45deg, var(--primary-color), #00ff87);
            -webkit-mask: 
                linear-gradient(#fff 0 0) content-box, 
                linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
        }

        .card-glow:hover:before {
            opacity: 1;
        }
        
        .card-glow:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 246, 255, 0.1);
        }

        .glitch {
            position: relative;
            font-size: 5rem;
            font-weight: 700;
            color: white;
            letter-spacing: 0.1em;
            animation: glitch-skew 1s infinite linear alternate-reverse;
        }

        .glitch::before {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            left: 2px;
            text-shadow: -2px 0 #ff00c1;
            clip: rect(44px, 450px, 56px, 0);
            animation: glitch-anim 5s infinite linear alternate-reverse;
        }

        .glitch::after {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            left: -2px;
            text-shadow: -2px 0 #00f6ff, 2px 2px #ff00c1;
            animation: glitch-anim2 1s infinite linear alternate-reverse;
        }

        @keyframes glitch-anim {
            0% { clip: rect(12px, 9999px, 98px, 0); transform: skew(0.4deg); }
            100% { clip: rect(93px, 9999px, 7px, 0); transform: skew(0.5deg); }
        }

        @keyframes glitch-anim2 {
            0% { clip: rect(79px, 9999px, 81px, 0); transform: skew(0.2deg); }
            100% { clip: rect(32px, 9999px, 74px, 0); transform: skew(0.6deg); }
        }

        @keyframes glitch-skew {
            0% { transform: skew(1deg); }
            100% { transform: skew(-1deg); }
        }

        .scanline {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background: repeating-linear-gradient(
                0deg,
                rgba(0, 0, 0, 0) 0px,
                rgba(0, 0, 0, 0) 2px,
                rgba(0, 246, 255, 0.05) 3px,
                rgba(0, 246, 255, 0.05) 4px
            );
            pointer-events: none;
        }
        
        .fade-in-section {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .fade-in-section.is-visible {
            opacity: 1;
            transform: translateY(0);
        }
    `}</style>
);

export default GlobalStyles;