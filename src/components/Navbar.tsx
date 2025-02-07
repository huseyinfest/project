import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Brain, BookOpen, Boxes, HelpCircle, User } from 'lucide-react';
import AuthModal from './AuthModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const navLinks = [
    { title: "Portfolio", href: "/", icon: Brain },
    { title: "Blog", href: "/blog", icon: BookOpen },
    { title: "Projects", href: "/projects", icon: Boxes },
    { title: "Q&A", href: "/qa", icon: HelpCircle },
  ];

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-purple-500" />
              <span className="text-white font-bold text-xl">AI Portfolio</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.title}
                    to={link.href}
                    className="text-gray-300 hover:text-white flex items-center space-x-1 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{link.title}</span>
                  </Link>
                );
              })}
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="flex items-center space-x-1 px-4 py-2 rounded-full bg-purple-500 text-white hover:bg-purple-600 transition-colors"
              >
                <User className="w-4 h-4" />
                <span>Giriş Yap</span>
              </button>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="flex items-center space-x-1 px-3 py-1 rounded-full bg-purple-500 text-white hover:bg-purple-600 transition-colors"
              >
                <User className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/50 backdrop-blur-sm">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.title}
                    to={link.href}
                    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{link.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
}

export default Navbar;