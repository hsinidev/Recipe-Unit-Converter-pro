import React from 'react';
import Layout from './components/Layout';
import UnitConverterTool from './components/UnitConverterTool';
import SeoArticle from './components/SeoArticle';

const App: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-full">
        <header className="mb-12 text-center animate-fade-in-down">
          <h1 className="text-4xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-sky-400 tracking-tight drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]">
            Recipe Unit Converter
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-sky-100/80 max-w-3xl mx-auto leading-relaxed">
            Your friendly guide to perfect measurements. Convert any unit instantly and cook with confidence.
          </p>
        </header>
        
        <main className="w-full max-w-5xl flex flex-col gap-16 items-center">
          <UnitConverterTool />
          
          <div className="w-full">
            <SeoArticle />
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default App;