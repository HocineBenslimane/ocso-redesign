import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Search, 
  Menu, 
  X, 
  FileText, 
  Shield, 
  Users, 
  AlertTriangle,
  Clock,
  Mail,
  Facebook,
  Twitter,
  Youtube,
  ChevronRight,
  Star,
  Heart,
  Eye,
  UserCheck
} from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Input } from './components/ui/input';
import './App.css';

// Import images
import sheriffBuilding from './assets/sheriff_building.jpg';
import communityEngagement from './assets/community_engagement.jpg';
import communityOutreach from './assets/community_outreach.jpg';

const HomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "File a Report",
      description: "Report non-emergency incidents online quickly and securely.",
      link: "https://www.ocso.com/en-us/Services/File-a-Report"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Crime Prevention",
      description: "Learn about community safety programs and crime prevention tips.",
      link: "https://www.ocso.com/en-us/grant"
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Inmate Search",
      description: "Search current jail roster and inmate information.",
      link: "https://www.ocso.com/en-us/Services/Inmate-Search"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Records Request",
      description: "Request public records and official documents.",
      link: "https://www.ocso.com/en-us/Services/Records-Request"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Programs",
      description: "Discover engagement opportunities and community initiatives.",
      link: "https://www.ocso.com/en-us/Community/Community-Programs"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Fingerprinting",
      description: "Schedule appointments for fingerprinting services.",
      link: "https://www.ocso.com/en-us/Services/Fingerprinting"
    }
  ];

  const values = [
    {
      icon: <Shield className="w-12 h-12 text-secondary" />,
      title: "Reduce Crime",
      description: "Reduce crime, the fear of crime, and keep our residents and visitors safe"
    },
    {
      icon: <Heart className="w-12 h-12 text-secondary" />,
      title: "Trust & Transparency",
      description: "Work diligently to enhance trust through transparency and community engagement"
    },
    {
      icon: <Users className="w-12 h-12 text-secondary" />,
      title: "Community",
      description: "Demonstrate a strong commitment to the communities we serve and enhance quality of life"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground">
        {/* Top Bar */}
        <div className="bg-primary/90 py-2 text-sm">
          <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>NON-EMERGENCY: (407) 836-4357</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                <span>EMERGENCY: 9-1-1</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>RECORDS: (407) 254-7280</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Facebook className="w-4 h-4 hover:text-secondary cursor-pointer" onClick={() => window.open("https://www.facebook.com/OrangeCountySheriff", "_blank")}/>
              <Twitter className="w-4 h-4 hover:text-secondary cursor-pointer" onClick={() => window.open("https://twitter.com/OrangeCoSheriff", "_blank")}/>
              <Youtube className="w-4 h-4 hover:text-secondary cursor-pointer" onClick={() => window.open("https://www.youtube.com/user/OrangeCountySheriff", "_blank")}/>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                <Shield className="w-10 h-10 text-secondary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">ORANGE COUNTY</h1>
                <h2 className="text-xl">SHERIFF'S OFFICE</h2>
                <p className="text-sm opacity-90">SHERIFF JOHN W. MINA</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-4">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input 
                  placeholder="Search..." 
                  className="pl-10 w-64 bg-background text-foreground"
                />
              </div>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-primary/95 border-t border-primary-foreground/20">
          <div className="container mx-auto px-4">
            <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block`}>
              <ul className="flex flex-col md:flex-row md:space-x-8 py-4">
                <li><a href="https://www.ocso.com/en-us/" className="block py-2 hover:text-secondary transition-colors">Home</a></li>
                <li><a href="https://www.ocso.com/en-us/Office-of-the-Sheriff" className="block py-2 hover:text-secondary transition-colors">About Us</a></li>
                <li><a href="https://www.ocso.com/en-us/Services" className="block py-2 hover:text-secondary transition-colors">Services</a></li>
                <li><a href="https://www.ocso.com/en-us/Community" className="block py-2 hover:text-secondary transition-colors">Community</a></li>
                <li><a href="https://www.ocso.com/en-us/Crime-Information" className="block py-2 hover:text-secondary transition-colors">Crime Information</a></li>
                <li><a href="https://www.ocso.com/en-us/Resources" className="block py-2 hover:text-secondary transition-colors">Resources</a></li>
                <li><a href="https://www.ocso.com/en-us/Careers" className="block py-2 hover:text-secondary transition-colors">Careers</a></li>
                <li><a href="https://www.ocso.com/en-us/Contact" className="block py-2 hover:text-secondary transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${sheriffBuilding})` }}
        ></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Protecting Orange County with 
              <span className="text-secondary"> Excellence</span> and 
              <span className="text-secondary"> Integrity</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-2xl">
              The Orange County Sheriff's Office is committed to reducing crime, enhancing community trust, 
              and ensuring the safety of our residents and visitors through professional law enforcement 
              and community engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Emergency: Call 911
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8">
                <Phone className="w-5 h-5 mr-2" />
                Non-Emergency: (407) 836-4357
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Quick Access Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Access the most commonly requested services and information quickly and easily.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <a key={index} href={service.link} target="_blank" rel="noopener noreferrer" className="block">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-secondary/10 rounded-lg text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                        {service.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{service.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                    <div className="flex items-center mt-4 text-secondary group-hover:text-primary transition-colors">
                      <span className="text-sm font-medium">Learn More</span>
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission & Values</h2>
              <p className="text-lg text-muted-foreground mb-8">
                The Orange County Sheriff's Office is committed to excellence in law enforcement, 
                reducing crime and the fear of crime, ensuring the safety of our residents and visitors, 
                while enhancing trust through community engagement.
              </p>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={communityEngagement} 
                alt="Community Engagement" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Engagement */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src={communityOutreach} 
                alt="Community Outreach" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent rounded-lg"></div>
            </div>
            <div className="order-1 lg:order-2">
              <Badge className="mb-4 bg-secondary text-secondary-foreground">Community Focus</Badge>
              <h2 className="text-3xl font-bold mb-6">Building Stronger Communities Together</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We believe that effective law enforcement requires strong community partnerships. 
                Our officers work closely with residents, businesses, and community organizations 
                to address local concerns and build lasting relationships.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Community policing initiatives</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Youth engagement programs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Neighborhood watch coordination</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Public safety education</span>
                </div>
              </div>
              <Button className="mt-8 bg-secondary hover:bg-secondary/90">
                Learn About Our Programs
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Information */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-red-400" />
              <h3 className="text-2xl font-bold mb-2">EMERGENCY</h3>
              <p className="text-3xl font-bold">911</p>
              <p className="text-sm opacity-90 mt-2">For immediate assistance with crimes in progress</p>
            </div>
            <div>
              <Phone className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-2xl font-bold mb-2">NON-EMERGENCY</h3>
              <p className="text-2xl font-bold">(407) 836-4357</p>
              <p className="text-sm opacity-90 mt-2">For reporting suspicious activity and non-urgent matters</p>
            </div>
            <div>
              <MapPin className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-2xl font-bold mb-2">VISIT US</h3>
              <p className="text-lg font-semibold">2500 W. Colonial Drive</p>
              <p className="text-lg font-semibold">Orlando, FL 32804</p>
              <p className="text-sm opacity-90 mt-2">Monday - Friday, 8:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold">Orange County</h3>
                  <p className="text-sm text-muted-foreground">Sheriff's Office</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Committed to excellence in law enforcement and community service.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://www.ocso.com/en-us/Services/File-a-Report" className="text-muted-foreground hover:text-foreground">File a Report</a></li>
                <li><a href="https://www.ocso.com/en-us/Services/Records-Request" className="text-muted-foreground hover:text-foreground">Records Request</a></li>
                <li><a href="https://www.ocso.com/en-us/Services/Inmate-Search" className="text-muted-foreground hover:text-foreground">Inmate Search</a></li>
                <li><a href="https://www.ocso.com/en-us/Crime-Information/Sex-Offender-Registry" className="text-muted-foreground hover:text-foreground">Sex Offender Registry</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://www.ocso.com/en-us/Services/Fingerprinting" className="text-muted-foreground hover:text-foreground">Fingerprinting</a></li>
                <li><a href="https://www.ocso.com/en-us/Community/Community-Programs" className="text-muted-foreground hover:text-foreground">Community Programs</a></li>
                <li><a href="https://www.ocso.com/en-us/grant" className="text-muted-foreground hover:text-foreground">Crime Prevention</a></li>
                <li><a href="https://www.ocso.com/en-us/Public-Interest" className="text-muted-foreground hover:text-foreground">Public Safety</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>(407) 254-7000</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@ocso.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>2500 W. Colonial Drive<br />Orlando, FL 32804</span>
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" onClick={() => window.open("https://www.facebook.com/OrangeCountySheriff", "_blank")} />
                <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" onClick={() => window.open("https://twitter.com/OrangeCoSheriff", "_blank")} />
                <Youtube className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" onClick={() => window.open("https://www.youtube.com/user/OrangeCountySheriff", "_blank")} />
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Orange County Sheriff's Office. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;

