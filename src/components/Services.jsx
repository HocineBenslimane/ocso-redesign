import React from 'react';
import { 
  Shield, 
  Car, 
  Users, 
  Search, 
  AlertTriangle, 
  FileText, 
  Phone, 
  MapPin,
  Clock,
  UserCheck
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Car,
      title: 'Patrol Services',
      description: 'Round-the-clock patrol coverage across Orange County with rapid response times.',
      features: ['24/7 Coverage', 'Community Policing', 'Traffic Enforcement'],
      color: 'bg-blue-500'
    },
    {
      icon: Search,
      title: 'Criminal Investigations',
      description: 'Professional detective services for all types of criminal cases.',
      features: ['Homicide Division', 'Fraud Investigation', 'Digital Forensics'],
      color: 'bg-purple-500'
    },
    {
      icon: AlertTriangle,
      title: 'Emergency Response',
      description: 'Specialized units for emergency situations and crisis management.',
      features: ['SWAT Team', 'Crisis Negotiation', 'Hazmat Response'],
      color: 'bg-red-500'
    },
    {
      icon: Users,
      title: 'Community Programs',
      description: 'Building stronger communities through engagement and education.',
      features: ['Youth Programs', 'Neighborhood Watch', 'Safety Education'],
      color: 'bg-green-500'
    },
    {
      icon: FileText,
      title: 'Records & Reports',
      description: 'Access police reports, background checks, and official documents.',
      features: ['Police Reports', 'Background Checks', 'Court Documents'],
      color: 'bg-orange-500'
    },
    {
      icon: UserCheck,
      title: 'Corrections',
      description: 'Professional jail operations and inmate management services.',
      features: ['Jail Operations', 'Inmate Programs', 'Court Transport'],
      color: 'bg-indigo-500'
    }
  ];

  const quickActions = [
    { icon: Phone, title: 'File a Report', description: 'Report non-emergency incidents online' },
    { icon: MapPin, title: 'Find a Station', description: 'Locate your nearest sheriff station' },
    { icon: Clock, title: 'Jail Information', description: 'Inmate search and visiting hours' },
    { icon: FileText, title: 'Get Records', description: 'Request police reports and documents' }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-blue-600" />
            <span className="text-blue-600 font-semibold text-lg">Our Services</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Law Enforcement
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From patrol services to specialized investigations, we provide complete 
            law enforcement coverage for Orange County residents.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover-lift border-0 shadow-lg bg-white">
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Quick Actions
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                variant="ghost"
                className="h-auto p-6 flex flex-col items-center text-center hover:bg-blue-50 hover:text-blue-700 transition-all group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-200 transition-colors">
                  <action.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-1">{action.title}</h4>
                <p className="text-sm text-gray-500">{action.description}</p>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;