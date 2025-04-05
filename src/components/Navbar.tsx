
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-navy py-5' : 'bg-transparent py-5'
        }`}
    >
      <div className="container flex justify-between items-center">
        <a href="#" className="text-2xl font-space font-bold text-theme-white">
          <span className="text-theme-yellow">.</span>arzes
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-slate-light hover:text-theme-yellow transition-colors font-medium flex items-center gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-theme-yellow"></div> {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Resume Button - Desktop */}
        <a
          href="/cv.pdf"
          target="_blank" rel="noopener noreferrer"
          className="hidden md:inline-block btn btn-outline"
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-theme-yellow"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 overflow-y-hidden bg-navy-dark bg-opacity-98 z-40 flex flex-col items-center justify-center md:hidden transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
      >
        <div className='cursor-pointer absolute top-6 right-6' onClick={toggleMobileMenu}>
          <X size={24} />
        </div>
        <nav className="w-full px-12">
          <ul className="space-y-6 text-center">
            {navItems.map((item, index) => (
              <li key={item.name} className="py-2">
                <a
                  href={item.href}
                  className="text-xl text-slate-light hover:text-theme-yellow transition-colors font-medium"
                  onClick={toggleMobileMenu}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li className="pt-6">
              <a
                href="/cv.pdf"
                target="_blank" rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
