import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
    activeSection: string;
}

export const Header = ({ activeSection }: HeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'About', href: '#about', icon: '◉' },
        { name: 'Project', href: '#project', icon: '⊞' },
        { name: 'Contact', href: '#contact', icon: '✉' },
    ];

    return (
        <>
            <header className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="text-xl font-bold tracking-wider">RodriPavon</div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`flex items-center gap-2 transition ${activeSection === link.href.substring(1)
                                            ? 'text-blue-400'
                                            : 'hover:text-blue-400'
                                        }`}
                                >
                                    <span className={activeSection === link.href.substring(1) ? "text-blue-400" : "text-gray-500"}>
                                        {link.icon}
                                    </span>
                                    {link.name}
                                </a>
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-gray-300 hover:text-white"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900 border-b border-gray-800 p-4">
                        <nav className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`flex items-center gap-2 py-2 transition ${activeSection === link.href.substring(1)
                                            ? 'text-blue-400'
                                            : 'text-gray-300 hover:text-blue-400'
                                        }`}
                                >
                                    <span className={activeSection === link.href.substring(1) ? "text-blue-400" : "text-gray-500"}>
                                        {link.icon}
                                    </span>
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                    </div>
                )}
            </header>
        </>

    )
}   