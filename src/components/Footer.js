import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'About PSMS 108',
      links: [
        { name: 'Our Story', href: '/our-story' },
        { name: 'Mission & Vision', href: '/mission-vision' },
        { name: 'Faculty & Staff', href: '/faculty-staff' },
        { name: 'School Policies', href: '/school-policies' },
        { name: 'Career Opportunities', href: '/careers' },
      ]
    },
    {
      title: 'Academic Programs',
      links: [
        { name: 'Creative Writing', href: '/creative-writing' },
        { name: 'Author Workshops', href: '/author-workshops' },
        { name: 'Literary Magazine', href: '/literary-magazine' },
        { name: 'Young Authors Academy', href: '/young-authors' },
        { name: 'Reading Club', href: '/reading-club' },
      ]
    },
    {
      title: 'Student Life',
      links: [
        { name: 'Student Resources', href: '/student-resources' },
        { name: 'Clubs & Activities', href: '/clubs-activities' },
        { name: 'Student Council', href: '/student-council' },
        { name: 'Awards & Recognition', href: '/awards' },
        { name: 'School Events', href: '/events' },
      ]
    },
    {
      title: 'Quick Links',
      links: [
        { name: 'Apply Now', href: '/apply' },
        { name: 'Parent Portal', href: '/parent-portal' },
        { name: 'Academic Calendar', href: '/academic-calendar' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'School Tours', href: '/school-tours' },
      ]
    }
  ];

  return (
    <footer className="bg-brand-primary text-white relative overflow-hidden">
      {/* Creative footer background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-lg transform rotate-12"></div>
        <div className="absolute top-1/2 right-1/4 text-8xl font-display text-white/10">📚</div>
      </div>
      
      {/* Main Footer Content */}
      <div className="content-container section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* School Info - Left Side */}
          <div className="lg:col-span-4">
            <div className="mb-8">
              <h3 className="text-3xl font-display text-white mb-2">PSMS 108</h3>
              <p className="text-lg text-white/80 font-medium">School of Authors</p>
            </div>
            
            <p className="text-white/70 mb-12 leading-relaxed font-body">
              Nurturing young minds and fostering creativity through exceptional education 
              and innovative writing programs. Building tomorrow's authors, one story at a time.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-12">
              <div className="text-white/80">
                <p>1615 Madison Avenue</p>
                <p>New York, NY 10029</p>
              </div>
              
              <div className="text-white/80">
                <span>(212) 860-5803</span>
              </div>
              
              <div className="text-white/80">
                <span>Fax: (212) 860-6095</span>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-display mb-6 text-white">Connect With Us</h4>
              <div className="flex space-x-4">
                {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => { /* placeholder for real link action */ }}
                    className="w-12 h-12 bg-white/10 hover:bg-brand-accent flex items-center justify-center transition-all duration-300 text-sm font-medium"
                    aria-label={social}
                  >
                    {social.charAt(0)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Links - Right Side */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {footerSections.map((section, index) => (
                <div key={index}>
                  <h4 className="text-lg font-display mb-8 text-white relative">
                    {section.title}
                    <div className="absolute -bottom-2 left-0 w-8 h-px bg-brand-accent"></div>
                  </h4>
                  <ul className="space-y-4">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          to={link.href}
                          className="text-white/70 hover:text-brand-accent transition-colors duration-300 text-sm block"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Educational Stats Section */}
      <div className="border-t border-white/20">
        <div className="content-container py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { number: "500+", label: "Students" },
              { number: "50+", label: "Faculty" },
              { number: "1000+", label: "Stories Published" },
              { number: "25", label: "Years of Excellence" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl font-display text-white mb-2">{stat.number}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <div className="content-container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/60">
              © {currentYear} PSMS 108 School of Authors. All rights reserved.
            </div>
            <div className="flex space-x-8 text-sm">
              <Link to="/privacy" className="text-white/60 hover:text-brand-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/60 hover:text-brand-accent transition-colors">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="text-white/60 hover:text-brand-accent transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;