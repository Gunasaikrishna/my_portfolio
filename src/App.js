import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer'; 
import Home from './components/Home';
import './index.css';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Technologies from './components/Technologies';

const TABS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About me' },
  { id: 'projects', label: 'Projects' },
  { id: 'tech', label: 'Technologies' },


];

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="bg-[#0A0F1C] min-h-screen flex flex-col justify-between">
      <Header 
        tabs={TABS} 
        activeTab={activeTab} 
        onTabClick={setActiveTab} 
      />

<main className="pt-40 p-6 text-white flex-grow">
  {activeTab === 'home' && <Home />}
  {activeTab === 'about' && <AboutMe />}
  {activeTab === 'projects' && <Projects />}
  {activeTab === 'tech' && <Technologies />}
  {activeTab !== 'home' && activeTab !== 'about' && activeTab !=='projects'  && activeTab !=='tech'  &&(
    <p>This is the {activeTab} section content.</p>
  )}
</main>

      <Footer 
         tabs={TABS} 
         activeTab={activeTab} 
         onTabClick={setActiveTab}  /> {/* ✅ Place Footer at the bottom */}
    </div>
  );
}

export default App;
