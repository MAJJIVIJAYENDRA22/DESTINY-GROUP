
import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import { Check } from 'lucide-react';

const residentialServices = [
  {
    title: "Modular Kitchens",
    description: "Custom kitchen solutions that combine functionality with aesthetic appeal.",
    image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Living Room Design",
    description: "Create inviting living spaces that reflect your personality and lifestyle.",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Bedroom Interiors",
    description: "Transform your bedroom into a cozy, rejuvenating sanctuary.",
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "False Ceiling & Lighting",
    description: "Enhance your interiors with custom ceiling designs and strategic lighting solutions.",
    image: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Custom Furniture",
    description: "Unique, handcrafted furniture pieces designed specifically for your space.",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
];

const commercialServices = [
  {
    title: "Office Interiors",
    description: "Create productive workspaces that inspire and motivate.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Retail/Store Design",
    description: "Design retail spaces that enhance customer experience and boost sales.",
    image: "https://images.unsplash.com/photo-1604176424472-9e9989f14808?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Renovation & Remodeling",
    description: "Breathe new life into existing commercial spaces with expert renovation services.",
    image: "https://images.unsplash.com/photo-1525896650794-60ad4ec40d0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "2D/3D Design Planning",
    description: "Comprehensive spatial planning with detailed 2D layouts and 3D visualizations.",
    image: "https://images.unsplash.com/photo-1545670723-196ed0954986?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
];

const Services = () => {
  return (
    <>
      <PageHero 
        title="Our Services" 
        subtitle="Comprehensive design solutions tailored to your unique needs" 
        background="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
      />
      
      {/* Service Process */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Design Process</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              A systematic approach that ensures exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We begin with a comprehensive consultation to understand your vision, requirements, and budget."
              },
              {
                step: "02",
                title: "Design Development",
                description: "Our team creates detailed designs including layouts, material selections, and 3D visualizations."
              },
              {
                step: "03",
                title: "Implementation",
                description: "We manage the entire execution process, ensuring quality and attention to detail at every step."
              }
            ].map((process, index) => (
              <div key={index} className="bg-white p-8 rounded-md shadow-md">
                <div className="text-4xl font-serif text-destiny-gold mb-4 opacity-50">
                  {process.step}
                </div>
                <h3 className="text-xl font-serif font-medium mb-3 text-destiny-darkBrown">
                  {process.title}
                </h3>
                <p className="text-destiny-darkGray">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Residential Services */}
      <section className="py-20 bg-destiny-beige/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Residential Interiors</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Transform your home into a space that truly reflects your personality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {residentialServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-md overflow-hidden shadow-md group hover:shadow-lg transition-shadow"
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-medium mb-3 text-destiny-darkBrown">
                    {service.title}
                  </h3>
                  <p className="text-destiny-darkGray mb-6">
                    {service.description}
                  </p>
                  <Link 
                    to="/contact" 
                    className="text-destiny-gold hover:text-destiny-brown inline-flex items-center font-medium"
                  >
                    Inquire Now <Check size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Commercial Services */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Commercial Interiors</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Create impactful commercial spaces that enhance your brand and business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commercialServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-md overflow-hidden shadow-md group hover:shadow-lg transition-shadow flex flex-col md:flex-row"
              >
                <div className="relative overflow-hidden md:w-2/5">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 md:w-3/5">
                  <h3 className="text-xl font-serif font-medium mb-3 text-destiny-darkBrown">
                    {service.title}
                  </h3>
                  <p className="text-destiny-darkGray mb-6">
                    {service.description}
                  </p>
                  <Link 
                    to="/contact" 
                    className="text-destiny-gold hover:text-destiny-brown inline-flex items-center font-medium"
                  >
                    Inquire Now <Check size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1603202662737-c09cb835ff17?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')" }}>
        <div className="container-custom">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Contact us today to schedule a consultation and take the first step towards your dream space.
            </p>
            <Link to="/contact" className="btn-primary">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
