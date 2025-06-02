
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Homeowner',
    text: 'DESTINYGROUP transformed our house into a stunning home that perfectly captures our style. The attention to detail and quality of work exceeded our expectations.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Robert Chen',
    role: 'Business Owner',
    text: 'Our office redesign by DESTINYGROUP has completely changed the way our team works. The space is now functional, beautiful, and truly represents our brand.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amelia Parker',
    role: 'Property Developer',
    text: 'Working with DESTINYGROUP has been a pleasure. Their team is professional, creative, and delivered our project on time and within budget.',
    rating: 5,
  },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (autoplay) {
      interval = setInterval(() => {
        setCurrent(prev => (prev + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [autoplay]);

  const next = () => {
    setAutoplay(false);
    setCurrent(prev => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setAutoplay(false);
    setCurrent(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative max-w-3xl mx-auto px-4">
      {testimonials.map((testimonial, index) => (
        <div
          key={testimonial.id}
          className={`transition-all duration-500 ease-in-out absolute w-full ${
            index === current ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
          }`}
          style={{ display: index === current ? 'block' : 'none' }}
        >
          <div className="bg-destiny-lightGray p-8 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="text-destiny-gold fill-destiny-gold" size={20} />
              ))}
            </div>
            <p className="text-destiny-darkGray italic mb-6">{testimonial.text}</p>
            <div>
              <h4 className="font-serif font-medium text-destiny-darkBrown">{testimonial.name}</h4>
              <p className="text-sm text-destiny-brown">{testimonial.role}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="flex justify-center mt-12">
        <button
          onClick={prev}
          className="mx-1 p-2 rounded-full bg-destiny-beige text-destiny-darkBrown hover:bg-destiny-gold hover:text-white transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setAutoplay(false);
              setCurrent(index);
            }}
            className={`mx-1 w-3 h-3 rounded-full ${
              current === index ? 'bg-destiny-gold' : 'bg-destiny-beige'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
        <button
          onClick={next}
          className="mx-1 p-2 rounded-full bg-destiny-beige text-destiny-darkBrown hover:bg-destiny-gold hover:text-white transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
