
import React from 'react';
import { ArrowRight, Brush, Palette, Sofa, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import TestimonialCarousel from '@/components/TestimonialCarousel';

const featuredProjects = [
  {
    id: 1,
    title: 'Modern Apartment',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Office Space',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Luxury Villa',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

const services = [
  {
    icon: <Sofa size={48} className="text-destiny-gold mb-4" />,
    title: 'Residential Design',
    description: 'Transform your living spaces with our premium residential interior design services.',
  },
  {
    icon: <Palette size={48} className="text-destiny-gold mb-4" />,
    title: 'Commercial Design',
    description: 'Create impactful commercial spaces that enhance your brand and productivity.',
  },
  {
    icon: <Brush size={48} className="text-destiny-gold mb-4" />,
    title: 'Custom Furniture',
    description: 'Unique, handcrafted furniture pieces designed specifically for your space.',
  }
];

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium mb-6 tracking-wide animate-fade-in">
            Designs that Define You
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-8 animate-fade-in">
            Creating extraordinary spaces that reflect your unique style and personality.
          </p>
          <div className="space-x-4 animate-fade-in">
            <Link to="/contact" className="btn-primary">
              Book a Free Consultation
            </Link>
            <Link to="/projects" className="text-white border border-white hover:bg-white/10 px-6 py-3 rounded-sm transition-all duration-300">
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-destiny-beige/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              We offer comprehensive design solutions tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-md shadow-md hover:shadow-lg transition-shadow text-center"
              >
                {service.icon}
                <h3 className="text-xl font-serif font-medium mb-3 text-destiny-darkBrown">
                  {service.title}
                </h3>
                <p className="text-destiny-darkGray mb-6">
                  {service.description}
                </p>
                <Link 
                  to="/services" 
                  className="text-destiny-gold hover:text-destiny-brown inline-flex items-center font-medium"
                >
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About/Why Us Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Why Choose DESTINYGROUP</h2>
              <p className="mb-8 text-destiny-darkGray">
                With over a decade of experience, our team of passionate designers and craftsmen 
                are committed to delivering exceptional spaces that exceed your expectations.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4 bg-destiny-gold rounded-full p-2">
                    <Award className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-medium mb-1 text-destiny-darkBrown">
                      Award-Winning Designs
                    </h3>
                    <p className="text-destiny-darkGray">
                      Our designs have been recognized for their innovation and excellence.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 bg-destiny-gold rounded-full p-2">
                    <Brush className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-medium mb-1 text-destiny-darkBrown">
                      Personalized Approach
                    </h3>
                    <p className="text-destiny-darkGray">
                      We tailor our designs to reflect your unique style and requirements.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 bg-destiny-gold rounded-full p-2">
                    <Palette className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-medium mb-1 text-destiny-darkBrown">
                      End-to-End Service
                    </h3>
                    <p className="text-destiny-darkGray">
                      From concept to completion, we manage every aspect of your project.
                    </p>
                  </div>
                </div>
              </div>
              
              <Link to="/about" className="btn-primary mt-8 inline-block">
                Learn More About Us
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1616137466211-f939a420be84?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Interior designer at work" 
                className="rounded-md shadow-lg"
              />
              <div className="absolute -bottom-8 -right-8 bg-destiny-gold text-white p-6 rounded-md hidden md:block">
                <p className="text-3xl font-serif">7+</p>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-destiny-lightGray">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Explore our portfolio of beautifully designed spaces
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map(project => (
              <div key={project.id} className="group relative overflow-hidden rounded-md shadow-md">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-destiny-gold font-medium">{project.category}</p>
                  <h3 className="text-white text-xl font-serif">{project.title}</h3>
                  <Link 
                    to={`/projects`} 
                    className="mt-4 text-white bg-destiny-gold/80 hover:bg-destiny-gold px-4 py-2 rounded-sm inline-flex items-center text-sm"
                  >
                    View Project <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/projects" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Client satisfaction is our highest priority
            </p>
          </div>
          
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')" }}>
        <div className="container-custom">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Book a free consultation with our expert designers and start your journey to a beautiful space.
            </p>
            <Link to="/contact" className="btn-primary">
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
