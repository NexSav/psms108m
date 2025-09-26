import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  ArrowRightIcon,
  PlayIcon,
  UserIcon,
  DocumentTextIcon,
  CalendarIcon,
  PencilIcon,
  AcademicCapIcon,
  DeviceTabletIcon,
  GlobeAltIcon,
  ShareIcon
} from '@heroicons/react/24/outline';

const Home = () => {
  // track which animated sections are visible on scroll
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-animate]');
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInView) {
          setIsVisible(prev => ({ ...prev, [index]: true }));
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="bg-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/vidoes/home/ps 108.mp4" type="video/mp4" />
            <div className="absolute inset-0 bg-brand-primary"></div>
          </video>
          {/* Enhanced overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 h-screen flex items-center justify-center">
          <div className="content-container">
            <div className="max-w-5xl mx-auto text-center">
              {/* Badge */}
              <div className="mb-12">
                <span className="inline-block bg-black/30 backdrop-blur-sm border border-white/20 text-white px-8 py-3 text-sm font-medium tracking-wider">
                  Where Stories Come to Life
                </span>
              </div>

              {/* Main Heading */}
              <div className="mb-12">
                <h1 className="text-hero font-display text-white mb-8 leading-none tracking-tight">
                  PSMS 108
                </h1>
                <div className="flex items-center justify-center space-x-8 mb-10">
                  <div className="h-px bg-brand-accent w-24"></div>
                  <h2 className="text-display text-white/95 font-light tracking-wide whitespace-nowrap">
                    School of Authors
                  </h2>
                  <div className="h-px bg-brand-accent w-24"></div>
                </div>
              </div>

              {/* Tagline */}
              <div className="mb-20">
                <h3 className="text-title text-brand-accent font-display mb-8">
                  Creating A Community of Authors
                </h3>
                <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto font-body">
                  Where students use their skills and agency to create their own futures and strive for peace, 
                  justice, and dignity for all people. Serving East Harlem's 3K-8 community for over 30 years.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons - Bottom Right */}
        <div className="absolute bottom-12 right-12 z-20">
          <div className="flex flex-col gap-4">
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium px-8 py-4 hover:bg-white/20 transition-all duration-300 group">
              <PlayIcon className="inline-block mr-3 h-5 w-5" />
              Watch Our Story
            </button>
            <button className="bg-brand-accent text-brand-primary font-medium px-8 py-4 hover:bg-brand-accent/90 transition-all duration-300 group">
              Discover Our Programs
              <ArrowRightIcon className="inline-block ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Mobile Buttons - Bottom Center for small screens */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 block lg:hidden">
          <div className="flex flex-col gap-4 w-64">
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium px-6 py-3 hover:bg-white/20 transition-all duration-300 text-center">
              <PlayIcon className="inline-block mr-2 h-4 w-4" />
              Watch Our Story
            </button>
            <button className="bg-brand-accent text-brand-primary font-medium px-6 py-3 hover:bg-brand-accent/90 transition-all duration-300 text-center">
              Discover Our Programs
            </button>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="section-padding bg-brand-light relative overflow-hidden" data-animate>
        {/* Creative background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-40 h-40 border border-brand-accent rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 border border-brand-primary rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-brand-accent/10 rounded-full"></div>
        </div>
        
        <div className="content-container relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 mb-6">
              <div className="w-8 h-px bg-brand-accent"></div>
              <span className="text-brand-accent font-medium tracking-wide">Quick Access</span>
              <div className="w-8 h-px bg-brand-accent"></div>
            </div>
            <h2 className="text-display text-heading font-display mb-6">Everything You Need</h2>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-4 h-px bg-brand-accent/50"></div>
              <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
              <div className="w-4 h-px bg-brand-accent/50"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { title: "School Meals", href: "/school-meals", icon: UserIcon },
              { title: "Calendar", href: "/calendar", icon: CalendarIcon },
              { title: "NYC Schools Account", href: "https://mystudent.nyc", icon: DeviceTabletIcon, external: true },
              { title: "My Schools", href: "https://myschools.nyc", icon: DocumentTextIcon, external: true },
              { title: "NYCDOE Home Page", href: "https://schools.nyc.gov", icon: GlobeAltIcon, external: true },
              { title: "Social Media", href: "/social-media", icon: ShareIcon }
            ].map((item, index) => (
              <a 
                key={index} 
                href={item.href}
                target={item.external ? "_blank" : "_self"}
                rel={item.external ? "noopener noreferrer" : ""}
                className="group relative bg-white p-8 text-center hover:shadow-elegant transition-all duration-300 border border-gray-100 hover:border-brand-accent/30 hover:-translate-y-1"
              >
                <div className="relative">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-brand-accent/5 transition-all duration-300 border border-gray-100 group-hover:border-brand-accent/20">
                    <item.icon className="w-8 h-8 text-brand-text-muted group-hover:text-brand-accent transition-colors duration-300" />
                  </div>
                  <h3 className="text-sm font-medium text-heading group-hover:text-brand-primary transition-colors leading-tight">
                    {item.title}
                  </h3>
                </div>
                
                {/* Subtle accent line on hover */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-brand-accent group-hover:w-12 transition-all duration-300"></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white relative" data-animate>
        {/* Creative quote element */}
        <div className="absolute top-20 right-10 opacity-10 pointer-events-none">
          <div className="text-9xl font-display text-brand-accent">"</div>
        </div>
        
        <div className="content-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Left: Content */}
            <div>
              <span className="text-brand-accent font-medium mb-8 block tracking-wide">About Our School</span>
              
              <h2 className="text-display text-heading font-display mb-8 leading-tight">
                Over 30 Years Serving East Harlem
              </h2>
              
              <div className="space-y-6 mb-12">
                <p className="text-lg text-body">
                  The School of Authors has been part of the East Harlem community for over 30 years. 
                  At SOA we focus on the whole child, while providing a well-rounded education as part of the New York City Curriculum.
                </p>
                
                <p className="text-body">
                  We serve grades 3K through 8 and nurture all students' social and emotional growth through 
                  thoughtful consideration of each individual student's strengths and needs, engaging curriculum and high expectations for all.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="text-center p-8 bg-gradient-to-br from-brand-accent/5 to-brand-accent/10 border border-brand-accent/20">
                  <div className="text-4xl font-display text-brand-primary mb-2">3K-8</div>
                  <div className="text-sm text-muted uppercase tracking-wide">Grade Levels</div>
                  <div className="w-12 h-px bg-brand-accent mx-auto mt-4"></div>
                </div>
                <div className="text-center p-8 bg-gradient-to-br from-brand-primary/5 to-brand-primary/10 border border-brand-primary/20">
                  <div className="text-4xl font-display text-brand-primary mb-2">30+</div>
                  <div className="text-sm text-muted uppercase tracking-wide">Years of Excellence</div>
                  <div className="w-12 h-px bg-brand-primary mx-auto mt-4"></div>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-body">
                  <strong>We have open enrollment.</strong> Schedule a visit today to learn more about our community of authors.
                </p>
                <button className="btn-primary">
                  Schedule a Visit
                </button>
              </div>
            </div>

            {/* Right: Visual Elements */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-8 h-[600px]">
                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 h-48 p-8 flex flex-col justify-end border-l-4 border-brand-accent">
                    <h4 className="font-display text-heading mb-2">Creative Writing</h4>
                    <p className="text-sm text-muted">Award-winning programs</p>
                    <div className="mt-4 w-8 h-8 bg-brand-accent/20 rounded-full flex items-center justify-center">
                      <PencilIcon className="w-4 h-4 text-brand-accent" />
                    </div>
                  </div>
                  <div className="bg-brand-accent/5 h-32 p-6 flex items-center justify-center">
                    <div className="text-center">
                      <h4 className="font-display text-heading text-2xl mb-1">500+</h4>
                      <p className="text-xs text-muted uppercase tracking-wide">Stories Published</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-8 pt-16">
                  <div className="bg-brand-primary/5 h-32 p-6 flex items-center justify-center">
                    <div className="text-center">
                      <h4 className="font-display text-heading text-2xl mb-1">25</h4>
                      <p className="text-xs text-muted uppercase tracking-wide">Awards Won</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 h-48 p-8 flex flex-col justify-end border-l-4 border-brand-primary">
                    <h4 className="font-display text-heading mb-2">Excellence</h4>
                    <p className="text-sm text-muted">25 years of education</p>
                    <div className="mt-4 w-8 h-8 bg-brand-primary/20 rounded-full flex items-center justify-center">
                      <AcademicCapIcon className="w-4 h-4 text-brand-primary" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating accent element */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white shadow-lg rounded-full flex items-center justify-center z-10">
                <div className="w-8 h-8 bg-brand-accent rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="section-padding bg-gray-50 relative overflow-hidden" data-animate>
        {/* Creative geometric shapes */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-brand-primary transform rotate-45"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-brand-accent transform rotate-12"></div>
          <div className="absolute top-1/2 right-10 w-16 h-16 border-2 border-brand-secondary rounded-full"></div>
        </div>
        
        <div className="content-container relative z-10">
          <div className="text-center mb-20">
            <div className="relative">
              <span className="text-brand-accent font-medium mb-4 block tracking-wide">Academic Excellence</span>
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-brand-accent rounded-full animate-pulse"></div>
            </div>
            <h2 className="text-display text-heading font-display mb-6">Comprehensive Curriculum Framework</h2>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-16 h-px bg-brand-primary/30"></div>
              <div className="w-3 h-3 border-2 border-brand-accent rounded-full"></div>
              <div className="w-16 h-px bg-brand-primary/30"></div>
            </div>
            <p className="text-lg text-body max-w-3xl mx-auto">
              Students engage in collaborative teamwork exploring complex ideas in all content areas, 
              using proven curricula as frameworks for instruction.
            </p>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "English Language Arts",
                description: "Department of Early Childhood Education Units (PreK), iReady (K-5), Expeditionary Learning (3-8), Teachers College Reading and Writing Project.",
                highlight: "Core Curriculum"
              },
              {
                title: "Mathematics Program",
                description: "Building Blocks (PreK), iReady Math (K-8), and Engage NY (K-8) providing comprehensive mathematical foundation.",
                highlight: "Structured Learning"
              },
              {
                title: "Science & Social Studies",
                description: "Amplify Science (6-8) and Passport to Social Studies (K-8) with hands-on learning and critical thinking development.",
                highlight: "STEM Integration"
              }
            ].map((program, index) => (
              <div key={index} className="group bg-white p-10 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-brand-accent/30">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-2 h-16 bg-brand-accent"></div>
                  <span className="text-xs font-medium text-brand-accent bg-brand-accent/10 px-3 py-1">
                    {program.highlight}
                  </span>
                </div>
                <h3 className="text-xl font-display text-heading mb-6">{program.title}</h3>
                <p className="text-body leading-relaxed mb-8">{program.description}</p>
                <button className="inline-flex items-center text-brand-primary hover:text-brand-secondary font-medium group">
                  Learn More 
                  <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="section-padding bg-white relative overflow-hidden" data-animate>
        {/* Creative newspaper-style background elements */}
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-20 right-20 text-9xl font-display text-brand-primary transform rotate-12">📰</div>
          <div className="absolute bottom-40 left-10 w-32 h-32 border border-brand-accent transform -rotate-12"></div>
        </div>
        
        <div className="content-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* News & Announcements */}
            <div className="lg:col-span-2">
              <div className="mb-12 relative">
                <div className="inline-flex items-center space-x-3 mb-6">
                  <div className="w-12 h-px bg-brand-primary"></div>
                  <div className="w-3 h-3 bg-brand-primary rounded-full animate-pulse"></div>
                  <div className="w-12 h-px bg-brand-primary"></div>
                </div>
                <h2 className="text-display text-heading font-display relative">
                  Latest News & Announcements
                  <div className="absolute -bottom-1 left-0 w-20 h-px bg-brand-accent"></div>
                </h2>
              </div>

              <div className="space-y-12">
                {[
                  {
                    title: "Spring Literary Contest Results",
                    excerpt: "Congratulations to our talented young authors who swept the regional writing competition with outstanding creative works.",
                    date: "March 15, 2024",
                    category: "Awards",
                    featured: true
                  },
                  {
                    title: "Author Visit: Best-selling novelist Maria Rodriguez",
                    excerpt: "Join us for an inspiring workshop with acclaimed author Maria Rodriguez, discussing character development and storytelling techniques.",
                    date: "March 8, 2024",
                    category: "Events",
                    featured: false
                  },
                  {
                    title: "New Creative Writing Electives for Fall 2024",
                    excerpt: "Expanding our program with screenwriting, journalism, and digital storytelling courses to meet growing student interest.",
                    date: "February 28, 2024",
                    category: "Academics",
                    featured: false
                  }
                ].map((article, index) => (
                  <article key={index} className={`pb-8 last:border-b-0 ${article.featured ? 'bg-gray-50 p-8 border-l-4 border-brand-accent' : 'border-b border-gray-200'}`}>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-xs font-medium text-brand-accent bg-brand-accent/10 px-3 py-1">
                        {article.category}
                      </span>
                      <span className="text-sm text-muted">{article.date}</span>
                      {article.featured && (
                        <span className="text-xs font-medium text-white bg-brand-accent px-2 py-1">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-display text-heading mb-4 hover:text-brand-primary cursor-pointer transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-body leading-relaxed mb-6">{article.excerpt}</p>
                    <button className="inline-flex items-center text-brand-primary hover:text-brand-secondary font-medium group">
                      Read Full Article
                      <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </article>
                ))}
              </div>

              <div className="mt-12">
                <button className="btn-primary">
                  View All News & Announcements
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-12">
              
              {/* Upcoming Events */}
              <div className="bg-gray-50 p-8">
                <h3 className="text-xl font-display text-heading mb-8">Upcoming Events</h3>
                <div className="space-y-6">
                  {[
                    { date: "MAR\n22", title: "Poetry Slam Competition", time: "3:00 PM" },
                    { date: "MAR\n28", title: "Parent-Author Night", time: "7:00 PM" },
                    { date: "APR\n05", title: "Spring Literary Fair", time: "All Day" }
                  ].map((event, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-brand-primary text-white flex flex-col items-center justify-center text-xs font-medium">
                        {event.date.split('\n').map((line, i) => <div key={i}>{line}</div>)}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-heading">{event.title}</h4>
                        <p className="text-sm text-muted">{event.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Student Spotlight */}
              <div className="relative bg-gradient-to-br from-brand-accent/5 to-brand-accent/10 p-8 border-t-4 border-brand-accent overflow-hidden">
                {/* Creative star elements */}
                <div className="absolute top-2 right-2 text-brand-accent/30 text-2xl">⭐</div>
                <div className="absolute bottom-2 left-2 text-brand-accent/20 text-lg">✨</div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-display text-heading mb-6 flex items-center">
                    Student Spotlight
                    <div className="ml-3 w-2 h-2 bg-brand-accent rounded-full animate-ping"></div>
                  </h3>
                  <div className="text-center">
                    <div className="relative w-20 h-20 bg-gradient-to-br from-brand-accent to-brand-accent/80 text-white rounded-full mx-auto mb-6 flex items-center justify-center font-display text-xl shadow-lg">
                      SK
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-white/20 rounded-full animate-pulse"></div>
                    </div>
                    <h4 className="font-display text-heading mb-1 text-lg">Sarah Kim</h4>
                    <p className="text-sm text-brand-accent font-medium mb-4">Grade 7 • Featured Author</p>
                    <div className="relative bg-white/50 p-4 rounded">
                      <div className="absolute top-1 left-2 text-xs text-brand-accent/50">"</div>
                      <p className="text-sm text-body italic leading-relaxed">
                        Winner of the National Young Writers Award for her compelling short story 'The Time Keeper's Daughter.'
                      </p>
                      <div className="absolute bottom-1 right-2 text-xs text-brand-accent/50 transform rotate-180">"</div>
                    </div>
                    <div className="flex justify-center mt-4 space-x-2">
                      <div className="w-8 h-px bg-brand-accent/70"></div>
                      <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                      <div className="w-8 h-px bg-brand-accent/70"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative section-padding bg-brand-primary text-white overflow-hidden" data-animate>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white/20 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 right-10 w-16 h-16 border-2 border-brand-accent/30 rounded-full"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <div className="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-full mb-8">
              <div className="w-8 h-8 bg-brand-accent rounded-full"></div>
            </div>
            <h2 className="text-display font-display mb-8 text-white">Ready to Begin Your Story?</h2>
            <p className="text-xl leading-relaxed font-body text-white/90 max-w-3xl mx-auto">
              Join our community of young authors and discover your unique voice in our nurturing, creative environment where imagination becomes reality.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-brand-primary font-medium px-10 py-4 hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
              Schedule a Tour
            </button>
            <button className="border-2 border-white/40 text-white font-medium px-10 py-4 hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
              Apply for Admission
            </button>
          </div>
          
          {/* Additional info */}
              <div className="mt-12 pt-12 border-t border-white/20">
                <p className="text-sm text-white/70 font-medium">
                  Open enrollment available • Contact us at (212) 860-5803 to schedule a visit
                </p>
              </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Home;