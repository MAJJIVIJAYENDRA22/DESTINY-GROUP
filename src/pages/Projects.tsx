
import React, { useState } from 'react';
import PageHero from '@/components/PageHero';
import { GridIcon, LayoutList, ArrowRight } from 'lucide-react';

// Define project categories
const categories = ['All', 'Residential', 'Commercial', 'Office', 'Kitchen', 'Bedroom'];

// Project data
const projects = [
  {
    id: 1,
    title: 'Modern Apartment Redesign',
    category: 'Residential',
    location: 'Downtown Metropolis',
    year: '2023',
    description: 'Complete redesign of a 2000 sqft apartment with a modern minimalist aesthetic.',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ]
  },
  {
    id: 2,
    title: 'Executive Office Suite',
    category: 'Office',
    location: 'Business District',
    year: '2022',
    description: 'A luxurious executive office designed for productivity and impression.',
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ]
  },
  {
    id: 3,
    title: 'Luxury Villa Interior',
    category: 'Residential',
    location: 'Suburban Heights',
    year: '2023',
    description: 'Complete interior design for a 5-bedroom luxury villa with custom furniture.',
    images: [
      'https://images.unsplash.com/photo-1600607687644-c7f34b5e309f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ]
  },
  {
    id: 4,
    title: 'Boutique Retail Store',
    category: 'Commercial',
    location: 'Fashion District',
    year: '2022',
    description: 'A stylish retail space designed to enhance the shopping experience and showcase products.',
    images: [
      'https://images.unsplash.com/photo-1604176424https://unsplash.com/photos/3d-render-of-man-fashion-shop-MGJACXj89tE472-9e9989f14808?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ]
  },
  {
    id: 5,
    title: 'Contemporary Kitchen Remodeling',
    category: 'Kitchen',
    location: 'Urban Residences',
    year: '2023',
    description: 'A complete kitchen renovation featuring modern appliances and smart storage solutions.',
    images: [
      'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ]
  },
  {
    id: 6,
    title: 'Master Bedroom Suite',
    category: 'Bedroom',
    location: 'Luxury Condominiums',
    year: '2022',
    description: 'A serene master bedroom suite designed for comfort and relaxation.',
    images: [
      'https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ]
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [projectExpanded, setProjectExpanded] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const toggleProjectExpand = (projectId: number) => {
    setProjectExpanded(projectExpanded === projectId ? null : projectId);
  };

  return (
    <>
      <PageHero 
        title="Our Projects" 
        subtitle="Explore our portfolio of beautifully designed spaces" 
        background="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
      />
      
      <section className="py-20">
        <div className="container-custom">
          {/* Filters and View Toggles */}
          <div className="flex flex-wrap items-center justify-between mb-12">
            <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    activeCategory === category 
                      ? 'bg-destiny-gold text-white' 
                      : 'bg-destiny-lightGray text-destiny-darkGray hover:bg-destiny-beige'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md ${
                  viewMode === 'grid' ? 'bg-destiny-gold text-white' : 'bg-destiny-lightGray'
                }`}
                aria-label="Grid view"
              >
                <GridIcon size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md ${
                  viewMode === 'list' ? 'bg-destiny-gold text-white' : 'bg-destiny-lightGray'
                }`}
                aria-label="List view"
              >
                <LayoutList size={20} />
              </button>
            </div>
          </div>
          
          {/* Projects Display */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map(project => (
                <div 
                  key={project.id} 
                  className="bg-white rounded-md overflow-hidden shadow-md group hover:shadow-lg transition-shadow"
                >
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={project.images[0]} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-serif font-medium text-destiny-darkBrown">
                        {project.title}
                      </h3>
                      <span className="bg-destiny-beige text-destiny-brown text-xs px-2 py-1 rounded">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-destiny-gray text-sm mb-4">
                      {project.location} • {project.year}
                    </p>
                    <p className="text-destiny-darkGray mb-6 line-clamp-2">
                      {project.description}
                    </p>
                    <button
                      onClick={() => toggleProjectExpand(project.id)}
                      className="text-destiny-gold hover:text-destiny-brown inline-flex items-center font-medium"
                    >
                      View Details <ArrowRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-8">
              {filteredProjects.map(project => (
                <div 
                  key={project.id} 
                  className="bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="relative overflow-hidden md:w-2/5 h-64 md:h-auto">
                      <img 
                        src={project.images[0]} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-serif font-medium text-destiny-darkBrown">
                          {project.title}
                        </h3>
                        <span className="bg-destiny-beige text-destiny-brown text-xs px-2 py-1 rounded">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-destiny-gray text-sm mb-4">
                        {project.location} • {project.year}
                      </p>
                      <p className="text-destiny-darkGray mb-6">
                        {project.description}
                      </p>
                      <button
                        onClick={() => toggleProjectExpand(project.id)}
                        className="text-destiny-gold hover:text-destiny-brown inline-flex items-center font-medium"
                      >
                        View Details <ArrowRight size={16} className="ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Project Modal/Expanded View */}
          {projectExpanded !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
              <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                {projects.filter(p => p.id === projectExpanded).map(project => (
                  <div key={project.id} className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-2xl font-serif font-medium text-destiny-darkBrown">
                        {project.title}
                      </h3>
                      <button
                        onClick={() => setProjectExpanded(null)}
                        className="text-destiny-darkGray hover:text-destiny-brown"
                      >
                        ✕
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {project.images.map((image, index) => (
                        <img 
                          key={index} 
                          src={image} 
                          alt={`${project.title} - Image ${index + 1}`}
                          className="w-full h-64 object-cover rounded"
                        />
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div>
                        <h4 className="font-medium text-destiny-brown">Category</h4>
                        <p>{project.category}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-destiny-brown">Location</h4>
                        <p>{project.location}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-destiny-brown">Year</h4>
                        <p>{project.year}</p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-medium text-destiny-brown mb-2">Project Description</h4>
                      <p className="text-destiny-darkGray">{project.description}</p>
                    </div>
                    
                    <button 
                      className="btn-primary"
                      onClick={() => setProjectExpanded(null)}
                    >
                      Close
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Projects;
