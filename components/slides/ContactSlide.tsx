import React from "react";
import { Mail, Globe } from "lucide-react";

const ContactSlide: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
    <h2 className="text-3xl md:text-4xl font-bold text-white">Let's Defend &amp; Launch Together</h2>
    <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
      Thank you for your time. We're eager to answer questions and explore partnership.
    </p>

    <div className="space-y-4">
      <p className="flex items-center justify-center text-gray-300 text-lg">
        <Mail className="h-5 w-5 mr-2 text-primary" /> jack@thestardrive.com
      </p>
      <p className="flex items-center justify-center text-gray-300 text-lg">
        <Globe className="h-5 w-5 mr-2 text-primary" /> thestardrive.com
      </p>
    </div>
  </div>
);

export default ContactSlide; 