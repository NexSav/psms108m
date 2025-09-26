import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  PhoneIcon,
  EnvelopeIcon,
  HeartIcon,
  UserGroupIcon,
  InformationCircleIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

const ParentCoordinator = () => {
  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="section-padding bg-brand-secondary text-white pt-32 relative overflow-hidden">
        {/* Creative communication-themed elements */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-20 left-20 w-16 h-16 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white rounded-lg transform rotate-12"></div>
          <div className="absolute top-1/2 left-10 text-8xl font-display text-white/20">💬</div>
          <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
        </div>
        
        <div className="content-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="w-8 h-px bg-white/30"></div>
              <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-6 py-3 text-sm font-medium tracking-wider border border-white/20">
                Parent Coordinator Corner
              </span>
              <div className="w-8 h-px bg-white/30"></div>
            </div>
            <h1 className="text-display font-display mb-8 relative">
              Communication Corner
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <div className="w-2 h-2 bg-brand-accent rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-brand-accent rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-brand-accent rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </h1>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto">
              Making our school a place where families feel welcome, supported, and respected as partners in education
            </p>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="section-padding bg-white">
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-brand-accent font-medium mb-4 block tracking-wide">Welcome</span>
              <h2 className="text-display text-heading font-display mb-8">
                Partners in Education
              </h2>
            </div>
            
            <div className="bg-gray-50 p-12 rounded-2xl mb-16">
              <p className="text-lg text-body leading-relaxed mb-8">
                Our goal is to give you as parents the information and access you need to become active partners 
                in your child's education. The concept of parents as partners in education recognizes that you the 
                parents and the educators share responsibility for your child's learning and development.
              </p>
              <p className="text-body leading-relaxed">
                This is important because we know that when families are informed and involved, children do better 
                in school. Please continue to check back for parent/family opportunities.
              </p>
            </div>

            {/* Parent Coordinator Contact */}
            <div className="bg-brand-secondary/5 border border-brand-secondary/20 p-10 rounded-2xl mb-16">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-brand-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <UserGroupIcon className="w-8 h-8 text-brand-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-display text-heading mb-4">
                    Meet Your Parent Coordinator
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <HeartIcon className="w-5 h-5 text-brand-accent flex-shrink-0" />
                      <span className="text-lg font-semibold text-heading">Ms. Estrella Reyes</span>
                    </div>
                    <p className="text-body leading-relaxed">
                      My intention is to serve as a liaison for all your questions and concerns regarding your child's 
                      social, emotional, health and educational needs. I encourage families to reach out with any 
                      questions or to get involved in school activities.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="flex items-center space-x-3 text-brand-secondary">
                        <PhoneIcon className="w-5 h-5 flex-shrink-0" />
                        <span className="font-medium">(212) 860-5803</span>
                      </div>
                      <div className="flex items-center space-x-3 text-brand-secondary">
                        <PhoneIcon className="w-5 h-5 flex-shrink-0" />
                        <span className="font-medium">(862) 414-8911</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Resources */}
      <section className="section-padding bg-gray-50">
        <div className="content-container">
          <div className="text-center mb-16">
            <span className="text-brand-accent font-medium mb-4 block tracking-wide">Support Services</span>
            <h2 className="text-display text-heading font-display mb-6">
              How We Support Families
            </h2>
            <p className="text-lg text-body max-w-3xl mx-auto">
              Our Parent Coordinator provides comprehensive support to ensure all families feel welcomed and engaged in their child's education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: InformationCircleIcon,
                title: "Information & Access",
                description: "Providing families with the information and resources needed to support their child's education and development.",
                color: "brand-primary"
              },
              {
                icon: HeartIcon,
                title: "Social & Emotional Support",
                description: "Addressing concerns about your child's social, emotional, and health needs with care and understanding.",
                color: "brand-accent"
              },
              {
                icon: AcademicCapIcon,
                title: "Educational Guidance",
                description: "Supporting families in understanding academic programs, requirements, and opportunities for student success.",
                color: "brand-secondary"
              },
              {
                icon: UserGroupIcon,
                title: "Family Engagement",
                description: "Creating opportunities for families to be involved in school activities and their child's learning journey.",
                color: "brand-primary"
              },
              {
                icon: EnvelopeIcon,
                title: "Communication Support",
                description: "Facilitating communication between families and school staff to ensure everyone is informed and connected.",
                color: "brand-accent"
              },
              {
                icon: PhoneIcon,
                title: "Direct Access",
                description: "Available by phone or in person to address questions, concerns, and provide immediate assistance when needed.",
                color: "brand-secondary"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 border border-gray-100 hover:border-brand-accent/30 transition-all duration-300 hover:shadow-lg">
                <div className={`w-14 h-14 bg-${service.color}/10 rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className={`w-7 h-7 text-${service.color}`} />
                </div>
                <h3 className="text-xl font-display text-heading mb-4">{service.title}</h3>
                <p className="text-body leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-brand-primary text-white">
        <div className="content-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-display font-display mb-8">
              Get Connected Today
            </h2>
            <p className="text-xl leading-relaxed mb-12">
              Don't hesitate to reach out with any questions, concerns, or to learn about opportunities to get involved.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <PhoneIcon className="w-8 h-8 mx-auto mb-4" />
                <h3 className="text-xl font-display mb-4">Call Us</h3>
                <p className="mb-2">(212) 860-5803</p>
                <p>(862) 414-8911</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <EnvelopeIcon className="w-8 h-8 mx-auto mb-4" />
                <h3 className="text-xl font-display mb-4">Email Us</h3>
                <p>estrella.reyes@psms108.org</p>
              </div>
            </div>
            
            <button className="bg-white text-brand-primary font-medium px-8 py-4 hover:bg-gray-100 transition-all duration-300">
              Contact Parent Coordinator
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ParentCoordinator;
