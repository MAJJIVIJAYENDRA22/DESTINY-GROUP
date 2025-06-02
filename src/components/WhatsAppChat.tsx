
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppChat = () => {
  // This would be your WhatsApp business number
  const whatsappNumber = "+91 99596 98786";
  const whatsappUrl = `https://wa.me/${+919959698786}?text=Hello%2C%20I'm%20interested%20in%20your%20interior%20design%20services.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors duration-300"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppChat;
