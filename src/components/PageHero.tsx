
import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  background?: string;
}

const PageHero = ({ title, subtitle, background = '/images/hero-bg.jpg' }: PageHeroProps) => {
  return (
    <div 
      className="relative h-[40vh] min-h-[320px] flex items-center justify-center bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})` }}
    >
      <div className="text-center text-white z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4 animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4 animate-fade-in">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHero;
