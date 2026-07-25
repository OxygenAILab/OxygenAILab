import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WelcomeOverlay from '@/components/WelcomeOverlay';
import Home from '@/pages/Home';
import Projects from '@/pages/Projects';

export default function App() {
  return (
    <HashRouter>
      <WelcomeOverlay />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}
