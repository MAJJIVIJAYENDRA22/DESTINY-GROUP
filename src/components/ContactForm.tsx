
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulating form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);
      
      toast({
        title: "Message Sent!",
        description: "We'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-destiny-darkGray mb-2">Your Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-destiny-gray/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-destiny-gold/50"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-destiny-darkGray mb-2">Email Address *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-destiny-gray/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-destiny-gold/50"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-destiny-darkGray mb-2">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-destiny-gray/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-destiny-gold/50"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-destiny-darkGray mb-2">Subject *</label>
          <select
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-destiny-gray/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-destiny-gold/50 bg-white"
          >
            <option value="">Select a subject</option>
            <option value="Residential Design">Residential Design</option>
            <option value="Commercial Design">Commercial Design</option>
            <option value="Consultation">Consultation</option>
            <option value="Pricing">Pricing</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-destiny-darkGray mb-2">Your Message *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-destiny-gray/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-destiny-gold/50 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full md:w-auto flex items-center justify-center"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;
