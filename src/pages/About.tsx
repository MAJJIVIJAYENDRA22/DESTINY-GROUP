
import React from 'react';
import PageHero from '@/components/PageHero';
import { CheckCircle } from 'lucide-react';

const teamMembers = [
  {
    name: "SHAIK SHAKEEL AHAMED ",
    role: "Founder & Creative Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "With over 7 years of experience, Emily founded DESTINYGROUP with a vision to create spaces that inspire.",
  },
  {
    name: " RANI ",
    role: " Architecture and Interior Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "She specialized in creating functional yet beautiful spaces that perfectly balance form and function.",
  },
  {
    name: " MEGHANA ",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "She ensures every project is delivered on time and within budget without compromising on quality.",
  },
  {
    name: " VIJAYENDRA ",
    role: " cheif operating officer(COO)",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "Manages business operations, ensuring efficiency and profitability in interior design services.",
  },
];

const About = () => {
  return (
    <>
      <PageHero 
        title="About Us" 
        subtitle="Discover our journey, mission, and the passionate Team behind DESTINY GROUP" 
        background="https://images.unsplash.com/photo-1616593969747-4797dc75033e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
      />
      
      {/* Our Story */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="mb-6 text-destiny-darkGray">
                Founded in 2018, DESTINY GROUP began with a simple vision: to create spaces that reflect 
                the unique personalities and needs of our clients. What started as a small studio has 
                grown into a full-service interior design firm with a reputation for excellence.
              </p>
              <p className="mb-6 text-destiny-darkGray">
                Over the years, we've had the privilege of transforming hundreds of residential and 
                commercial spaces across the country. Each project has contributed to our growth and 
                reinforced our commitment to creating designs that are not only beautiful but also functional.
              </p>
              <p className="text-destiny-darkGray">
                Today, DESTINYGROUP is recognized as a leader in the interior design industry, known for our 
                creative approach, attention to detail, and dedication to client satisfaction.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Our studio" 
                className="rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-20 bg-destiny-beige/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-md shadow-md">
              <h3 className="text-2xl font-serif mb-6 text-destiny-darkBrown">Our Mission</h3>
              <p className="text-destiny-darkGray">
                To create thoughtfully designed spaces that enhance the quality of life for our clients. 
                We believe in the power of design to transform not just spaces, but the experiences and 
                emotions they evoke. By combining creativity with functionality, we strive to deliver 
                interiors that exceed expectations and stand the test of time.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-md shadow-md">
              <h3 className="text-2xl font-serif mb-6 text-destiny-darkBrown">Our Vision</h3>
              <p className="text-destiny-darkGray">
                To be the most trusted and sought-after interior design firm, recognized for our innovative 
                designs, exceptional service, and positive impact on the spaces we create. We aim to set 
                new standards in the design industry through our commitment to sustainability, craftsmanship, 
                and client-centered approach.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Excellence",
                description: "We strive for excellence in every aspect of our work, from concept to completion."
              },
              {
                title: "Integrity",
                description: "We operate with honesty, transparency, and a strong ethical foundation."
              },
              {
                title: "Innovation",
                description: "We embrace creativity and continuously explore new ideas and approaches."
              },
              {
                title: "Client Focus",
                description: "We prioritize our clients' needs and satisfaction above all else."
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-block p-3 bg-destiny-gold/10 rounded-full mb-6">
                  <CheckCircle className="text-destiny-gold" size={32} />
                </div>
                <h3 className="text-xl font-serif font-medium mb-3 text-destiny-darkBrown">
                  {value.title}
                </h3>
                <p className="text-destiny-darkGray">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-20 bg-destiny-lightGray">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              The talented professionals behind our exceptional designs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-md overflow-hidden shadow-md group">
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-medium text-destiny-darkBrown">
                    {member.name}
                  </h3>
                  <p className="text-destiny-gold mb-3">{member.role}</p>
                  <p className="text-destiny-darkGray text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
