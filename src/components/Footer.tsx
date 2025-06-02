
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, Clock, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-destiny-darkBrown text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-serif mb-6 text-destiny-gold">DESTINY GROUP</h3>
            <p className="mb-6 text-destiny-lightGray">
              Premium interior design solutions for Homes and Businesses, focusing on creativity, quality, 
              and client satisfaction.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/destinygroup_vizag/?hl=en" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-destiny-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/share/1BhVuHTPzW/?mibextid=wwXIfr" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-destiny-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.linkedin.com/in/destiny-group/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-destiny-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif mb-6 text-destiny-gold">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Services', 'Projects', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(' ', '-')}`} 
                    className="flex items-center hover:text-destiny-gold transition-colors"
                  >
                    <ArrowRight size={14} className="mr-2" />
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-serif mb-6 text-destiny-gold">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Residential Interiors', 
                'Commercial Interiors', 
                'Modular Kitchens',
                'Custom Furniture',
                'Renovation & Remodeling'
              ].map((item) => (
                <li key={item}>
                  <Link 
                    to="/services" 
                    className="flex items-center hover:text-destiny-gold transition-colors"
                  >
                    <ArrowRight size={14} className="mr-2" />
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif mb-6 text-destiny-gold">Contact Us</h3>
            <div className="space-y-4">
              <p className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0 text-destiny-gold" />
                <span>2nd Floor, BK Towers, 49-34-1/59, Akkayyapalem Main Rd, Port Stadium Area, Akkayyapalem, Visakhapatnam, Andhra Pradesh 530016</span>
              </p>
              <p className="flex items-center">
                <Phone size={20} className="mr-3 flex-shrink-0 text-destiny-gold" />
                <a href="tel:+1234567890" className="hover:text-destiny-gold transition-colors">+91 9959698786  </a>
              </p>
              <p className="flex items-center">
                <Mail size={20} className="mr-3 flex-shrink-0 text-destiny-gold" />
                <a href="mailto:info@destinygroup.com" className="hover:text-destiny-gold transition-colors">destiny.civilworks@gmail.com</a>
              </p>
              <p className="flex items-center">
                <Clock size={20} className="mr-3 flex-shrink-0 text-destiny-gold" />
                <span>Mon-Sat: 9am - 5pm<span>
                  <p>
                    Sun: Holiday
                  </p>
                </span>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-sm text-destiny-lightGray">
          <p>&copy; {new Date().getFullYear()} DESTINYGROUP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
