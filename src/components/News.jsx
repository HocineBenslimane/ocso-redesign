import React from 'react';
import { Calendar, Clock, ArrowRight, Megaphone, Award, Users } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: 'OCSO Launches New Community Policing Initiative',
      excerpt: 'Sheriff announces expanded community engagement program to strengthen relationships between officers and residents.',
      date: '2024-01-15',
      category: 'Community',
      image: 'https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      id: 2,
      title: 'Drug Bust Results in Major Arrests',
      excerpt: 'Multi-agency operation leads to seizure of illegal substances and multiple arrests in ongoing investigation.',
      date: '2024-01-12',
      category: 'Operations',
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Officer Recognition Ceremony Honors Heroes',
      excerpt: 'Annual awards ceremony recognizes outstanding service and bravery of Orange County deputies.',
      date: '2024-01-10',
      category: 'Awards',
      image: 'https://images.pexels.com/photos/8112180/pexels-photo-8112180.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      title: 'New K-9 Units Join the Force',
      excerpt: 'Three new K-9 officers and their handlers complete training and are ready for duty.',
      date: '2024-01-08',
      category: 'Department',
      image: 'https://images.pexels.com/photos/7114755/pexels-photo-7114755.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const alerts = [
    {
      icon: Megaphone,
      title: 'Traffic Advisory',
      message: 'Road closure on I-4 eastbound due to accident investigation. Expect delays.',
      time: '2 hours ago',
      type: 'warning'
    },
    {
      icon: Users,
      title: 'Community Meeting',
      message: 'Town hall meeting scheduled for January 25th at 7 PM. All residents welcome.',
      time: '1 day ago',
      type: 'info'
    }
  ];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Community': 'bg-green-100 text-green-800',
      'Operations': 'bg-red-100 text-red-800',
      'Awards': 'bg-yellow-100 text-yellow-800',
      'Department': 'bg-blue-100 text-blue-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Megaphone className="w-8 h-8 text-blue-600" />
            <span className="text-blue-600 font-semibold text-lg">News & Updates</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Stay Informed
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get the latest news, updates, and important announcements from the 
            Orange County Sheriff's Office.
          </p>
        </div>

        {/* Alerts Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Current Alerts</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {alerts.map((alert, index) => (
              <Card key={index} className={`border-l-4 ${
                alert.type === 'warning' ? 'border-l-yellow-500 bg-yellow-50' : 'border-l-blue-500 bg-blue-50'
              }`}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-full ${
                      alert.type === 'warning' ? 'bg-yellow-100' : 'bg-blue-100'
                    }`}>
                      <alert.icon className={`w-5 h-5 ${
                        alert.type === 'warning' ? 'text-yellow-600' : 'text-blue-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{alert.title}</h4>
                      <p className="text-gray-700 text-sm mb-2">{alert.message}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        {alert.time}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            <Card className="hover-lift overflow-hidden shadow-lg">
              <div className="relative">
                <img 
                  src={newsItems[0].image} 
                  alt={newsItems[0].title}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                  Featured
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <Badge className={getCategoryColor(newsItems[0].category)}>
                    {newsItems[0].category}
                  </Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(newsItems[0].date)}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {newsItems[0].title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {newsItems[0].excerpt}
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Recent News */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Recent News</h3>
            <div className="space-y-6">
              {newsItems.slice(1).map((item) => (
                <Card key={item.id} className="hover-lift cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className={`${getCategoryColor(item.category)} text-xs`}>
                            {item.category}
                          </Badge>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                          {item.title}
                        </h4>
                        <div className="flex items-center text-xs text-gray-500">
                          <Calendar className="w-3 h-3 mr-1" />
                          {formatDate(item.date)}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Button variant="outline" className="w-full mt-6">
              View All News
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;