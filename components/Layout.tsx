import React, { useState, useCallback } from 'react';
import Modal from './Modal';

type ModalType = 'About' | 'Contact' | 'Guide' | 'Privacy' | 'Terms' | 'DMCA' | null;

const MODAL_CONTENT: Record<NonNullable<ModalType>, { title: string; content: React.ReactNode }> = {
    About: { 
        title: 'About Us', 
        content: (
            <div className="space-y-4">
                <p>Welcome to the Recipe Unit Converter, a project passionately crafted by <strong>HSINI MOHAMED</strong>. Our mission is to simplify the culinary experience for chefs, bakers, and home cooks worldwide.</p>
                <p>We believe that accuracy is the secret ingredient in every great recipe. Whether you are scaling up a recipe for a party or trying out a new dish from a different country, our tool bridges the gap between measurement systems.</p>
                <p>Visit our main hub at <a href="https://doodax.com" target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">doodax.com</a>.</p>
            </div>
        )
    },
    Contact: { 
        title: 'Contact Us', 
        content: (
            <div className="space-y-4">
                <p>We love hearing from our users! If you have suggestions, found a bug, or just want to say hello, please don't hesitate to reach out.</p>
                <p><strong>Email:</strong> <a href="mailto:hsini.web@gmail.com" className="text-sky-400 hover:underline">hsini.web@gmail.com</a></p>
                <p><strong>Website:</strong> <a href="https://doodax.com" target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">doodax.com</a></p>
                <p className="text-sm text-gray-400 mt-4">We aim to respond to all inquiries within 24-48 hours.</p>
            </div>
        ) 
    },
    Guide: { 
        title: 'User Guide', 
        content: (
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">How to Convert Units</h3>
                <ol className="list-decimal list-inside space-y-2 ml-2">
                    <li>Enter the quantity you want to convert in the "Amount" field.</li>
                    <li>Select the unit you currently have from the "From" dropdown menu.</li>
                    <li>Select the unit you want to convert to from the "To" dropdown menu.</li>
                </ol>
                <p className="italic text-gray-400 border-l-4 border-sky-500 pl-4 mt-4">
                    <strong>Note:</strong> To ensure scientific accuracy, this tool only allows conversions within the same category (Mass to Mass, or Volume to Volume). You cannot convert grams (weight) directly to cups (volume) without specific density data for that ingredient.
                </p>
            </div>
        ) 
    },
    Privacy: { 
        title: 'Privacy Policy', 
        content: (
            <div className="space-y-4">
                <p><strong>Last Updated: October 2023</strong></p>
                <p>At Recipe Unit Converter, accessible from doodax.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Recipe Unit Converter and how we use it.</p>
                <h4 className="font-bold text-white">Local Processing</h4>
                <p>This application functions entirely client-side. When you enter data for conversion, that data is processed locally within your browser. We do not transmit your input data to any external server.</p>
                <h4 className="font-bold text-white">Cookies</h4>
                <p>We may use standard cookies to enhance user experience and analyze website traffic to improve our services.</p>
                <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <a href="mailto:hsini.web@gmail.com" className="text-sky-400">hsini.web@gmail.com</a>.</p>
            </div>
        ) 
    },
    Terms: { 
        title: 'Terms of Service', 
        content: (
            <div className="space-y-4">
                <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Recipe Unit Converter if you do not agree to take all of the terms and conditions stated on this page.</p>
                <h4 className="font-bold text-white">Disclaimer</h4>
                <p>The materials on Recipe Unit Converter's website are provided on an 'as is' basis. Recipe Unit Converter makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                <h4 className="font-bold text-white">Limitations</h4>
                <p>In no event shall Recipe Unit Converter or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Recipe Unit Converter's website.</p>
            </div>
        ) 
    },
    DMCA: { 
        title: 'DMCA Policy', 
        content: (
            <div className="space-y-4">
                <p>Recipe Unit Converter respects the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the Service infringes the copyright or other intellectual property infringement of any person.</p>
                <p>If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement that is taking place through the Service, you must submit your notice in writing to the attention of "Copyright Infringement" via email to <a href="mailto:hsini.web@gmail.com" className="text-sky-400">hsini.web@gmail.com</a>.</p>
                <p>You may be held accountable for damages (including costs and attorneys' fees) for misrepresenting that any Content is infringing your copyright.</p>
            </div>
        ) 
    },
};

const AnimatedBackground: React.FC = () => (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0B0F19]">
        {/* Deep space gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a2342] via-[#0B0F19] to-black opacity-80"></div>
        
        {/* CSS Stars and Nebulas */}
        <style>
        {`
            @keyframes float {
                0% { transform: translate(0px, 0px); }
                50% { transform: translate(-20px, 20px); }
                100% { transform: translate(0px, 0px); }
            }
            @keyframes drift {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            @keyframes twinkle {
                0%, 100% { opacity: 0.3; transform: scale(0.8); }
                50% { opacity: 1; transform: scale(1.2); }
            }
            .star {
                position: absolute;
                background: white;
                border-radius: 50%;
                animation: twinkle var(--duration) ease-in-out infinite;
            }
            .nebula-blob {
                position: absolute;
                border-radius: 50%;
                filter: blur(80px);
                opacity: 0.4;
                animation: float 20s ease-in-out infinite;
            }
        `}
        </style>

        {/* Nebula Layers */}
        <div className="nebula-blob w-[500px] h-[500px] bg-purple-600/30 top-[-10%] left-[-10%]"></div>
        <div className="nebula-blob w-[600px] h-[600px] bg-blue-600/20 bottom-[-10%] right-[-10%] animation-delay-2000"></div>
        <div className="nebula-blob w-[400px] h-[400px] bg-pink-500/20 top-[40%] left-[60%] animation-delay-4000"></div>

        {/* Stars */}
        <div className="absolute inset-0">
            {Array.from({ length: 50 }).map((_, i) => (
                <div 
                    key={i} 
                    className="star"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 3 + 1}px`,
                        height: `${Math.random() * 3 + 1}px`,
                        '--duration': `${Math.random() * 3 + 2}s`
                    } as React.CSSProperties}
                />
            ))}
        </div>
    </div>
);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [activeModal, setActiveModal] = useState<ModalType>(null);
    const openModal = useCallback((modal: NonNullable<ModalType>) => setActiveModal(modal), []);
    const closeModal = useCallback(() => setActiveModal(null), []);

    const footerLinks: ModalType[] = ['Privacy', 'Terms', 'DMCA'];
    const navLinks: ModalType[] = ['About', 'Contact', 'Guide'];

    return (
        <div className="relative min-h-screen text-gray-200 flex flex-col font-inter">
            <AnimatedBackground />
            
            <header className="w-full py-4 px-6 backdrop-blur-md border-b border-white/5 sticky top-0 z-40 bg-black/20">
                <nav className="max-w-7xl mx-auto flex justify-end gap-6 text-sm font-medium">
                    {navLinks.map(link => (
                        <button 
                            key={link} 
                            onClick={() => openModal(link)} 
                            className="text-gray-300 hover:text-sky-400 transition-colors uppercase tracking-wider text-xs font-bold"
                        >
                            {link}
                        </button>
                    ))}
                </nav>
            </header>

            <main className="flex-grow relative z-10">
                {children}
            </main>

            <footer className="w-full bg-black/40 backdrop-blur-xl border-t border-white/5 py-8 mt-12">
                <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4">
                    <div className="flex gap-6 text-xs text-gray-400 uppercase tracking-widest">
                        {footerLinks.map(link => (
                            <button 
                                key={link} 
                                onClick={() => openModal(link)} 
                                className="hover:text-white transition-colors"
                            >
                                {MODAL_CONTENT[link].title}
                            </button>
                        ))}
                    </div>
                    
                    <div className="text-center space-y-2">
                        <p className="text-sm text-gray-400">
                            Powered by <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="font-bold text-sky-400 hover:text-sky-300 hover:underline">HSINI MOHAMED</a>
                        </p>
                        <p className="text-xs text-gray-500">
                            &copy; {new Date().getFullYear()} <a href="https://doodax.com" target="_blank" rel="noreferrer" className="hover:text-gray-300 transition-colors">doodax.com</a>. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>

            {activeModal && (
                <Modal title={MODAL_CONTENT[activeModal].title} onClose={closeModal}>
                    {MODAL_CONTENT[activeModal].content}
                </Modal>
            )}
        </div>
    );
};

export default Layout;