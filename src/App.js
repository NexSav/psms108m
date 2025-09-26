import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ParentCoordinator from './pages/ParentCoordinator';

// Placeholder components for other routes
const AcademicsPage = () => (
  <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-brand-primary mb-4">Academics</h1>
      <p className="text-brand-neutral">Curriculum, assessments, and academic resources coming soon...</p>
    </div>
  </div>
);

const FacultyPage = () => (
  <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-brand-primary mb-4">Faculty & Staff</h1>
      <p className="text-brand-neutral">Meet our dedicated educators and support staff...</p>
    </div>
  </div>
);

const GalleryPage = () => (
  <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-brand-primary mb-4">Gallery</h1>
      <p className="text-brand-neutral">Photos, student artwork, and virtual tours coming soon...</p>
    </div>
  </div>
);

const AlumniPage = () => (
  <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-brand-primary mb-4">Alumni</h1>
      <p className="text-brand-neutral">Success stories and alumni connections coming soon...</p>
    </div>
  </div>
);

// Removed unused PCCornerPage placeholder (was causing eslint no-unused-vars warning)

const LearningResourcesPage = () => (
  <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-brand-primary mb-4">Learning Resources</h1>
      <p className="text-brand-neutral">Online resources, library services, and study materials...</p>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-brand-primary mb-4">Contact Us</h1>
      <p className="text-brand-neutral">Get in touch with PS/MS 108 School of Authors...</p>
      <div className="mt-8 text-left max-w-md mx-auto">
        <p className="mb-2"><strong>Address:</strong> 1615 Madison Avenue, New York, NY 10029</p>
        <p className="mb-2"><strong>Phone:</strong> (212) 860-5803</p>
        <p className="mb-2"><strong>Fax:</strong> (212) 860-6095</p>
        <p className="mb-4"><strong>Parent Coordinator:</strong> Ms. Estrella Reyes</p>
        <p className="text-brand-accent"><strong>Open enrollment available - Schedule a visit today!</strong></p>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/faculty" element={<FacultyPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/alumni" element={<AlumniPage />} />
          <Route path="/pc-corner" element={<ParentCoordinator />} />
          <Route path="/learning-resources" element={<LearningResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Additional routes for About page content */}
          <Route path="/our-story" element={<About />} />
          <Route path="/mission-vision" element={<About />} />
          <Route path="/principals-message" element={<About />} />
          
          {/* Parent Coordinator routes */}
          <Route path="/parent-coordinator" element={<ParentCoordinator />} />
          <Route path="/parent-workshops" element={<ParentCoordinator />} />
          <Route path="/volunteer" element={<ParentCoordinator />} />
          <Route path="/pta" element={<ParentCoordinator />} />
          <Route path="/family-resources" element={<ParentCoordinator />} />
          
          {/* Catch-all route for any undefined paths */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
