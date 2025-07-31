import React from 'react';
import { Shield, Phone, MapPin, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    'File a Report',
    'Request Records',
    'Inmate Search',
    'Sex Offender Registry',
    'Concealed Permits',
    'Community Programs'
  ];

  const departments = [
    'Patrol Division',
    'Criminal Investigations',
    'Traffic Division',
    'Corrections',
    'Communications',
    'Community Relations'
  ];

  const resources = [
    'Crime Prevention',
    'Safety Tips',
    'Emergency Preparedness',
    'Neighborhood Watch',
    'Youth Programs',
    'Senior Services'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Logo & Contact */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="w-10 h-10 text-yellow-400" />
              <div>
                <h3 className="text-lg font-bold">Orange County</h3>
                <p className="text-sm text-gray-300">Sheriff's Office</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Protecting and serving Orange County with integrity, 
              professionalism, and dedication since 1875.
            </p>
            
            {/* Emergency Contact */}
            <div className="bg-red-600 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6" />
                <div>
                  <div className="font-bold text-lg">Emergency: 911</div>
                  <div className="text-sm opacity-90">24/7 Emergency Response</div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="text-lg font-bold mb-6">Departments</h4>
            <ul className="space-y-3">
              {departments.map((dept, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {dept}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Bar */}
      <div className="bg-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Phone className="w-5 h-5 text-yellow-400" />
              <div>
                <div className="font-semibold">Non-Emergency</div>
                <div className="text-sm text-gray-300">(407) 254-7000</div>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <MapPin className="w-5 h-5 text-yellow-400" />
              <div>
                <div className="font-semibold">Main Office</div>
                <div className="text-sm text-gray-300">2500 W Colonial Dr, Orlando, FL</div>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Mail className="w-5 h-5 text-yellow-400" />
              <div>
                <div className="font-semibold">Email Us</div>
                <div className="text-sm text-gray-300">info@ocso.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2024 Orange County Sheriff's Office. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;