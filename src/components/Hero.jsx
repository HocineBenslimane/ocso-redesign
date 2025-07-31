import React from 'react';
import { Shield, Phone, AlertTriangle, Users, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Hero = () => {
  const stats = [
    { icon: Users, label: 'Officers Serving', value: '2,800+' },
    { icon: Shield, label: 'Years of Service', value: '150+' },
    { icon: Award, label: 'Communities Protected', value: '13' },
    { icon: Clock, label: 'Response Time', value: '<8 min' }
  ];

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Hero Background */}
      <div className="hero-gradient min-h-[80vh] flex items-center relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-white">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-16 h-16 text-yellow-400" />
                <div className="badge-shine px-4 py-2 rounded-full text-blue-900 font-semibold text-sm">
                  Protecting & Serving Since 1875
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-shadow leading-tight">
                Protecting Our
                <span className="block text-yellow-400">Community</span>
              </h1>
              
              <p className="text-xl mb-8 text-blue-100 leading-relaxed max-w-lg">
                The Orange County Sheriff's Office is committed to providing professional, 
                compassionate law enforcement services to keep our communities safe.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency: 911
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold glass-effect"
                >
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Report Non-Emergency
                </Button>
              </div>
            </div>

            {/* Hero Image/Stats */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  By the Numbers
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                        <stat.icon className="w-8 h-8 text-blue-900" />
                      </div>
                      <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-blue-100 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="w-full h-20 fill-slate-50">
            <path d="M0,120 L1200,120 L1200,60 C1000,20 800,80 600,60 C400,40 200,100 0,60 Z" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;