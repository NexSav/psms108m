import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  ArrowRightIcon,
  HeartIcon,
  AcademicCapIcon,
  UsersIcon
} from '@heroicons/react/24/outline';

const About = () => {
  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="section-padding bg-brand-primary text-white pt-32 relative overflow-hidden">
        {/* Creative animated elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 border border-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full animate-bounce" style={{animationDuration: '3s'}}></div>
          <div className="absolute top-1/2 right-10 text-9xl font-display text-white/5 animate-pulse">A</div>
        </div>
        
        <div className="content-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative mb-8">
              <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-6 py-3 text-sm font-medium tracking-wider border border-white/20">
                About PS/MS 108
              </span>
              <div className="absolute -top-2 -right-2 w-4 h-4 border-2 border-brand-accent rounded-full animate-ping"></div>
            </div>
            <h1 className="text-display font-display mb-8 relative">
              <span className="relative">
                School of Authors
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-brand-accent/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"></div>
              </span>
            </h1>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto">
              Creating a community of authors who use their skills and agency to create their own futures
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-brand-accent font-medium mb-4 block tracking-wide">Our Mission</span>
              <h2 className="text-display text-heading font-display mb-8">
                Building Community Through Education
              </h2>
            </div>
            
            <div className="relative bg-gray-50 p-12 rounded-2xl mb-16 overflow-hidden">
              {/* Creative quote marks */}
              <div className="absolute top-4 left-8 text-6xl font-display text-brand-accent/20">"</div>
              <div className="absolute bottom-4 right-8 text-6xl font-display text-brand-accent/20 transform rotate-180">"</div>
              
              <div className="relative z-10">
                <p className="text-lg text-body leading-relaxed text-center italic">
                  "Our mission is to create a community of authors who use their skills and agency to create their own futures 
                  and who strive for peace, justice, and dignity for all people. At the School of Authors, we will nurture all 
                  students' social and emotional growth and ensure their success through thoughtful consideration of each individual 
                  student's strengths and needs, an engaging curriculum and high expectations for all."
                </p>
              </div>
              
              {/* Subtle decorative elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-brand-accent/30 rounded-full"></div>
            </div>

            {/* Values Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-8 border border-gray-100 hover:border-brand-accent/30 transition-all duration-300">
                <div className="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <HeartIcon className="w-8 h-8 text-brand-accent" />
                </div>
                <h3 className="text-xl font-display text-heading mb-4">Whole Child Focus</h3>
                <p className="text-body">
                  We focus on nurturing students' social, emotional, and academic growth through individualized attention.
                </p>
              </div>
              
              <div className="text-center p-8 border border-gray-100 hover:border-brand-accent/30 transition-all duration-300">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <AcademicCapIcon className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-display text-heading mb-4">High Expectations</h3>
                <p className="text-body">
                  We maintain high expectations for all students while providing the support they need to succeed.
                </p>
              </div>
              
              <div className="text-center p-8 border border-gray-100 hover:border-brand-accent/30 transition-all duration-300">
                <div className="w-16 h-16 bg-brand-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <UsersIcon className="w-8 h-8 text-brand-secondary" />
                </div>
                <h3 className="text-xl font-display text-heading mb-4">Community Partnership</h3>
                <p className="text-body">
                  Serving the East Harlem community for over 30 years as partners in education and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School History */}
      <section className="section-padding bg-gray-50">
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-accent font-medium mb-6 block tracking-wide">Our History</span>
              <h2 className="text-display text-heading font-display mb-8">
                30+ Years in East Harlem
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-body">
                  The School of Authors (SOA) has been part of the East Harlem community for over 30 years. 
                  We serve grades 3K through 8, providing a comprehensive educational experience.
                </p>
                <p className="text-body">
                  Located at 1615 Madison Avenue, we focus on the whole child while providing a well-rounded 
                  education as part of the New York City Curriculum. Our approach combines rigorous academics 
                  with social-emotional learning and enrichment in physical education, technology, and the arts.
                </p>
                <p className="text-body">
                  We have open enrollment and welcome families to schedule visits to learn more about 
                  our community of authors and the opportunities we provide for student growth and success.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white p-8 border-l-4 border-brand-accent">
                <h4 className="font-display text-heading text-xl mb-3">Grades Served</h4>
                <p className="text-body">3K through 8th grade</p>
              </div>
              <div className="bg-white p-8 border-l-4 border-brand-primary">
                <h4 className="font-display text-heading text-xl mb-3">Enrollment</h4>
                <p className="text-body">Open enrollment available</p>
              </div>
              <div className="bg-white p-8 border-l-4 border-brand-secondary">
                <h4 className="font-display text-heading text-xl mb-3">Contact</h4>
                <p className="text-body">
                  1615 Madison Avenue, New York, NY 10029<br />
                  Phone: (212) 860-5803<br />
                  Fax: (212) 860-6095
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-brand-primary text-white">
        <div className="content-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-display font-display mb-8">
              Join Our Community of Authors
            </h2>
            <p className="text-xl leading-relaxed mb-12">
              Discover how PS/MS 108 can help your child develop their unique voice and create their own future.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-brand-primary font-medium px-8 py-4 hover:bg-gray-100 transition-all duration-300">
                Schedule a Visit
              </button>
              <button className="border-2 border-white/40 text-white font-medium px-8 py-4 hover:bg-white/10 transition-all duration-300 group">
                Contact Us
                <ArrowRightIcon className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
