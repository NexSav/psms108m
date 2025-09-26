import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Bars3Icon, 
  XMarkIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 80);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHome]);

  const navItems = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'Academics',
      href: '/academics',
      dropdown: [
        { name: 'Curriculum Overview', href: '/curriculum' },
        { name: 'Grade Requirements', href: '/grade-requirements' },
        { name: 'Assessment & Testing', href: '/assessment' },
        { name: 'Academic Calendar', href: '/academic-calendar' },
        { name: 'Report Cards', href: '/report-cards' },
      ]
    },
    {
      name: 'Faculty',
      href: '/faculty',
      dropdown: [
        { name: 'Administration', href: '/administration' },
        { name: 'Teaching Staff', href: '/teaching-staff' },
        { name: 'Support Staff', href: '/support-staff' },
        { name: "Principal's Message", href: '/principals-message' },
      ]
    },
    {
      name: 'Gallery',
      href: '/gallery',
      dropdown: [
        { name: 'Photo Gallery', href: '/photo-gallery' },
        { name: 'Student Artwork', href: '/student-artwork' },
        { name: 'School Events', href: '/school-events' },
        { name: 'Virtual Tour', href: '/virtual-tour' },
      ]
    },
    {
      name: 'Alumni',
      href: '/alumni',
      dropdown: [
        { name: 'Alumni Success Stories', href: '/alumni-stories' },
        { name: 'Alumni Newsletter', href: '/alumni-newsletter' },
        { name: 'Stay Connected', href: '/alumni-connect' },
      ]
    },
    {
      name: 'PC Corner',
      href: '/pc-corner',
      dropdown: [
        { name: 'Parent Coordinator Info', href: '/parent-coordinator' },
        { name: 'Parent Workshops', href: '/parent-workshops' },
        { name: 'Volunteer Opportunities', href: '/volunteer' },
        { name: 'PTA Information', href: '/pta' },
        { name: 'Family Resources', href: '/family-resources' },
      ]
    },
    {
      name: 'Learning Resources',
      href: '/learning-resources',
      dropdown: [
        { name: 'Online Resources', href: '/online-resources' },
        { name: 'Library Services', href: '/library' },
        { name: 'Study Materials', href: '/study-materials' },
        { name: 'Educational Apps', href: '/educational-apps' },
      ]
    },
  ];

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav     className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-white/20' 
        : 'bg-black/10 backdrop-blur-md border-b border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col group">
            <span className={`text-2xl font-display font-semibold tracking-tight transition-all duration-300 ${
              isScrolled ? 'text-brand-primary' : 'text-white drop-shadow-lg'
            }`}>
              PSMS 108
            </span>
            <span className={`text-sm font-medium tracking-wide transition-all duration-300 ${
              isScrolled ? 'text-brand-text-muted' : 'text-white/90 drop-shadow-md'
            }`}>
              School of Authors
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.dropdown ? (
                  <div>
                    <button
                      className={`flex items-center py-2 text-sm font-medium transition-all duration-300 ${
                        isScrolled 
                          ? 'text-brand-text-secondary hover:text-brand-primary' 
                          : 'text-white/95 hover:text-white drop-shadow-sm'
                      }`}
                      onMouseEnter={() => setActiveDropdown(index)}
                    >
                      {item.name}
                      <ChevronDownIcon className="ml-1 h-3 w-3" />
                    </button>
                    {activeDropdown === index && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-64 bg-white shadow-2xl border border-gray-200 rounded-xl py-4 z-50 transform opacity-100 scale-100 transition-all duration-200"
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="px-3">
                          <div className="text-xs font-semibold text-brand-accent uppercase tracking-wider mb-3 px-3">
                            {item.name}
                          </div>
                          {item.dropdown.map((dropdownItem, dropdownIndex) => (
                            <Link
                              key={dropdownIndex}
                              to={dropdownItem.href}
                              className="block px-4 py-3 text-sm font-medium text-brand-text-primary hover:text-brand-primary hover:bg-brand-primary/8 transition-all duration-200 rounded-lg group relative overflow-hidden"
                            >
                              <div className="absolute left-0 top-0 bottom-0 w-0 bg-brand-accent group-hover:w-1 transition-all duration-200"></div>
                              <span className="relative z-10">{dropdownItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`py-2 text-sm font-medium transition-all duration-300 ${
                      isScrolled 
                        ? 'text-brand-text-secondary hover:text-brand-primary' 
                        : 'text-white/95 hover:text-white drop-shadow-sm'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* CTA Button */}
            <div className="ml-8">
              <Link 
                to="/contact" 
                className={`inline-flex items-center px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-brand-primary text-white hover:bg-brand-secondary shadow-lg' 
                    : 'bg-white/95 text-brand-primary hover:bg-white shadow-lg backdrop-blur-sm'
                }`}
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isScrolled 
                  ? 'text-brand-primary hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10 drop-shadow-lg'
              }`}
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-xl border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => handleDropdownToggle(index)}
                      className="w-full flex items-center justify-between px-3 py-3 text-sm font-medium text-brand-text-secondary hover:text-brand-primary transition-all duration-200"
                    >
                      {item.name}
                      <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === index ? 'rotate-180' : ''
                      }`} />
                    </button>
                    {activeDropdown === index && (
                      <div className="ml-4 space-y-1">
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <Link
                            key={dropdownIndex}
                            to={dropdownItem.href}
                            className="block px-3 py-2.5 text-sm text-brand-text-muted hover:text-brand-primary transition-all duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="block px-3 py-3 text-sm font-medium text-brand-text-secondary hover:text-brand-primary transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4 mt-4 border-t border-gray-200">
              <Link 
                to="/contact" 
                className="block w-full text-center bg-brand-primary text-white font-medium px-6 py-3 transition-all duration-300 hover:bg-brand-secondary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;