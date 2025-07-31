import React from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  AlertTriangle, 
  Shield,
  Car,
  Users
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const emergencyContacts = [
    {
      icon: AlertTriangle,
      title: 'Emergency',
      number: '911',
      description: 'Life-threatening emergencies',
      color: 'bg-red-500'
    },
    {
      icon: Phone,
      title: 'Non-Emergency',
      number: '(407) 254-7000',
      description: 'General inquiries and reports',
      color: 'bg-blue-500'
    },
    {
      icon: Car,
      title: 'Traffic Division',
      number: '(407) 254-7170',
      description: 'Traffic incidents and citations',
      color: 'bg-orange-500'
    },
    {
      icon: Users,
      title: 'Community Relations',
      number: '(407) 254-7160',
      description: 'Community programs and events',
      color: 'bg-green-500'
    }
  ];

  const locations = [
    {
      name: 'Main Headquarters',
      address: '2500 W Colonial Dr, Orlando, FL 32804',
      phone: '(407) 254-7000',
      hours: '24/7'
    },
    {
      name: 'East District',
      address: '2320 Technology Pkwy, Orlando, FL 32826',
      phone: '(407) 254-7200',
      hours: '24/7'
    },
    {
      name: 'West District',
      address: '618 E Altamonte Dr, Altamonte Springs, FL 32701',
      phone: '(407) 254-7300',
      hours: '24/7'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Phone className="w-8 h-8 text-blue-600" />
            <span className="text-blue-600 font-semibold text-lg">Contact Us</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to serve you 24/7. Contact us for emergencies, 
            non-emergency assistance, or general inquiries.
          </p>
        </div>

        {/* Emergency Contacts */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {emergencyContacts.map((contact, index) => (
            <Card key={index} className="hover-lift text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className={`w-16 h-16 ${contact.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{contact.title}</h3>
                <div className="text-2xl font-bold text-blue-600 mb-2">{contact.number}</div>
                <p className="text-sm text-gray-600">{contact.description}</p>
                <Button 
                  className={`mt-4 w-full ${contact.color} hover:opacity-90`}
                  onClick={() => window.open(`tel:${contact.number.replace(/[^\d]/g, '')}`)}
                >
                  Call Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <Mail className="w-6 h-6 text-blue-600" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <Input placeholder="Enter your first name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <Input placeholder="Enter your last name" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <Input type="email" placeholder="Enter your email" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <Input type="tel" placeholder="Enter your phone number" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <Input placeholder="What is this regarding?" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Please provide details about your inquiry..."
                  rows={5}
                />
              </div>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700 py-3">
                Send Message
              </Button>
              
              <p className="text-sm text-gray-500 text-center">
                For emergencies, please call 911 immediately.
              </p>
            </CardContent>
          </Card>

          {/* Locations & Hours */}
          <div className="space-y-8">
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  Our Locations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {locations.map((location, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
                    <h4 className="font-semibold text-gray-900 mb-2">{location.name}</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 mt-0.5 text-gray-400" />
                        <span>{location.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span>{location.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span>{location.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-blue-600" />
                  Quick Links
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  'File a Police Report',
                  'Request Records',
                  'Inmate Information',
                  'Sex Offender Registry',
                  'Concealed Weapon Permits',
                  'Community Programs'
                ].map((link, index) => (
                  <Button 
                    key={index}
                    variant="ghost" 
                    className="w-full justify-start text-left hover:bg-blue-50 hover:text-blue-700"
                  >
                    {link}
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;