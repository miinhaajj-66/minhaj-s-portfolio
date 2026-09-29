import React, { useState, useEffect, useRef } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showAudioPopup, setShowAudioPopup] = useState(false);
  const videoRef = useRef(null);

  // Attempt to play on mount to catch if the browser blocks it
  useEffect(() => {
    if (!loading && videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true);
        }).catch(() => {
          setIsPlaying(false);
          setShowAudioPopup(true);
        });
      }
    }
  }, [loading]);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
        setShowAudioPopup(false);
      }
    }
  };

  // Smooth scrolling for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-black min-h-screen font-sans selection:bg-[#ff2a2a] selection:text-white">
      {/* Preloader blocks the UI until it finishes */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      <Navbar isPlaying={isPlaying} toggleVideo={toggleVideo} showAudioPopup={showAudioPopup} />
      
      <main>
        <Hero videoRef={videoRef} />
        <About />
        <Projects />
        <Services />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
