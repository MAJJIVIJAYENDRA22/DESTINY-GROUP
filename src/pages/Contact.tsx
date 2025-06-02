
import React from 'react';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <PageHero 
        title="Contact Us" 
        subtitle="We'd love to hear from you" 
        background="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
      />
      
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="section-title">Get In Touch</h2>
              <p className="text-xl text-destiny-darkGray mb-8">
                Have a question or want to discuss your project? Fill out the form below and we'll get back to you shortly.
              </p>
              
              <ContactForm />
            </div>
            
            <div className="bg-destiny-beige/30 p-8 rounded-md">
              <h3 className="text-2xl font-serif mb-6 text-destiny-darkBrown">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="text-destiny-gold mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-destiny-darkBrown mb-1">Phone</h4>
                    <p className="text-destiny-darkGray">
                      <a href="tel:+1234567890" className="hover:text-destiny-gold transition-colors">
                        +91 9959698786
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-destiny-gold mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-destiny-darkBrown mb-1">Email</h4>
                    <p className="text-destiny-darkGray">
                      <a href="mailto:info@destinygroup.com" className="hover:text-destiny-gold transition-colors">
                        destiny.civilworks@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-destiny-gold mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-destiny-darkBrown mb-1">Office Address</h4>
                    <p className="text-destiny-darkGray">
                      2nd Floor, BK Towers, 49-34-1/59, <br />
                      Main Rd, Port Stadium Area, Akkayyapalem,<br />
                      Visakhapatnam,Andhra Pradesh<br />
                      (530016)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-destiny-gold mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-destiny-darkBrown mb-1">Working Hours</h4>
                    <p className="text-destiny-darkGray">
                      Monday - Friday: 9am - 5pm<br />
                      Sunday: Holiday 
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-destiny-darkBrown mb-2">Follow Us</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.instagram.com/destinygroup_vizag/?hl=en" 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-destiny-gold hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a 
                    href="https://www.facebook.com/share/1BhVuHTPzW/?mibextid=wwXIfr" 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-destiny-gold hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/destiny-group/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-destiny-gold hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Google Maps */}
      <section className="py-0">
        <div className="w-full h-screen">
          <iframe
            title="DESTINYGROUP Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1152.4649848780277!2d83.30045350266302!3d17.740105000253184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39436f3166bcc5%3A0xd91f7c55a02239db!2sDestiny%20Group%20(%20Constructions%20and%20Interiors)!5e0!3m2!1sen!2sin!4v1747736295154!5m2!1sen!2sin"
            style={{ border: 0 }}
            width="1520" 
            height="710"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
};

export default Contact;
