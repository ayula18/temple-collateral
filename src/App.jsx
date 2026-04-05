import React from 'react';
import Section1Hero from './components/Section1Hero';
import Section2Opportunity from './components/Section2Opportunity';
import Section3CoreAI from './components/Section3CoreAI';
import Section4Pipeline from './components/Section4Pipeline';
import Section5Dataset from './components/Section5Dataset';
import Section6Safety from './components/Section6Safety';
import Section7WhyMe from './components/Section7WhyMe';
import Section8Closing from './components/Section8Closing';

function App() {
  return (
    <div className="w-full min-h-screen font-sans bg-bg-dark text-text-body overflow-x-hidden">
      <Section1Hero />
      <Section2Opportunity />
      <Section3CoreAI />
      <Section4Pipeline />
      <Section5Dataset />
      <Section6Safety />
      <Section7WhyMe />
      <Section8Closing />
    </div>
  );
}

export default App;
