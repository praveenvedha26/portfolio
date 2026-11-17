import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import TechnicalArsenal from './components/TechnicalArsenal';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [toast, setToast] = useState({ visible: false, message: '' });

  const showToast = (message) => {
    setToast({ visible: true, message });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 3500);
  };

  const hideToast = () => {
    setToast((prev) => ({ ...prev, visible: false }));
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] selection:bg-[#FF4522]/30 selection:text-white font-body relative overflow-x-hidden">
      {/* Floating Glassmorphic Navigation */}
      <Navbar />

      <main>
        {/* Layered Editorial Hero Section */}
        <Hero onOpenContact={() => {
          const el = document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} />

        {/* Selected Work Section (6 Projects + Morphing Full-View Modal) */}
        <ProjectsSection />

        {/* Dedicated Education & Background Section */}
        <EducationSection />

        {/* Technical Arsenal Section (4 Pillars Bento Grid - Java & SQL First) */}
        <TechnicalArsenal />

        {/* Contact & Footer Section */}
        <ContactSection onShowToast={showToast} />
      </main>

      {/* Sleek Minimal Footer */}
      <Footer />

      {/* Global Toast Notification */}
      <Toast
        visible={toast.visible}
        message={toast.message}
        onClose={hideToast}
      />
    </div>
  );
}
