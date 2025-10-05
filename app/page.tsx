"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  FileText, 
  Globe,
  MessageCircle,
  Menu,
  X,
  ArrowRight,
  Shield,
  Zap,
  Heart,
  User,
  Camera,
  CreditCard,
  Plane,
  Building,
  FileCheck,
  Download,
  Search,
  IdCard,
  Car,
  Heart as HeartIcon,
  Newspaper,
  CreditCard as CardIcon
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  const whatsappMessage = "Hi! I'm interested in your passport services. Can you help me?";
  const whatsappUrl2 = `https://wa.me/919310469634?text=${encodeURIComponent(whatsappMessage)}`;

  const services = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "New Passport Application",
      description: "Complete assistance for first-time passport applications with document verification and form filling.",
      features: ["Document verification", "Form assistance", "Photo guidance", "Status tracking"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center&auto=format"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Passport Renewal",
      description: "Quick and hassle-free passport renewal services for expired or expiring passports.",
      features: ["Express processing", "Document collection", "Status updates", "Delivery assistance"],
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop&crop=center&auto=format"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Lost/Stolen Passport",
      description: "Emergency assistance for lost or stolen passport replacement with police report guidance.",
      features: ["Police report help", "Emergency processing", "Documentation support", "Priority handling"],
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop&crop=center&auto=format"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Tatkal Passport",
      description: "Express passport services for urgent travel requirements with same-day processing.",
      features: ["Same-day processing", "Urgent documentation", "Express delivery", "24/7 support"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center&auto=format"
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Passport Photo Service",
      description: "Professional passport photo services meeting all government specifications and requirements.",
      features: ["Government approved", "Digital & print", "Multiple copies", "Same day service"],
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop&crop=center&auto=format"
    },
    {
      icon: <FileCheck className="h-8 w-8" />,
      title: "Document Verification",
      description: "Comprehensive document verification and authentication services for passport applications.",
      features: ["Birth certificate", "Address proof", "Identity verification", "Notarization"],
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop&crop=center&auto=format"
    },
    {
      icon: <Plane className="h-8 w-8" />,
      title: "Visa Assistance",
      description: "Complete visa application support for various countries with documentation and guidance.",
      features: ["Multiple countries", "Document preparation", "Application filing", "Interview guidance"],
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop&crop=center&auto=format"
    },
    {
      icon: <User className="h-8 w-8" />,
      title: "Name Change in Passport",
      description: "Professional assistance for name changes in passport due to marriage, divorce, or other reasons.",
      features: ["Marriage certificate", "Divorce decree", "Legal documentation", "Fast processing"],
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop&crop=center&auto=format"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Address Change in Passport",
      description: "Quick and easy address change services in your existing passport with proper documentation.",
      features: ["Address proof", "Form assistance", "Verification support", "Express service"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop&crop=center&auto=format"
    },
    {
      icon: <Download className="h-8 w-8" />,
      title: "Passport Status Tracking",
      description: "Real-time passport application status tracking and regular updates on your application progress.",
      features: ["Real-time updates", "SMS notifications", "Email alerts", "24/7 tracking"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format"
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Fee Payment Assistance",
      description: "Complete assistance with passport fee payments and government charges for all services.",
      features: ["Online payment", "Fee calculation", "Receipt generation", "Payment tracking"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center&auto=format"
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Passport Information Services",
      description: "Comprehensive information and guidance about passport rules, regulations, and procedures.",
      features: ["Rule clarification", "Process guidance", "FAQ support", "Expert consultation"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center&auto=format"
    },
    {
      icon: <IdCard className="h-8 w-8" />,
      title: "PAN Card Services",
      description: "Complete PAN card application, correction, and reprint services with fast processing.",
      features: ["New PAN application", "PAN correction", "PAN reprint", "Status tracking"],
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop&crop=center&auto=format"
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Driving License Services",
      description: "Professional assistance for driving license applications, renewals, and related services.",
      features: ["New license", "License renewal", "Duplicate license", "Address change"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center&auto=format"
    },
    {
      icon: <HeartIcon className="h-8 w-8" />,
      title: "Marriage Certification",
      description: "Complete marriage certificate services including registration and documentation support.",
      features: ["Marriage registration", "Certificate issuance", "Documentation help", "Legal support"],
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop&crop=center&auto=format"
    },
    {
      icon: <Newspaper className="h-8 w-8" />,
      title: "Newspaper Advertisement",
      description: "Professional newspaper advertisement services for name change, lost documents, and legal notices.",
      features: ["Name change ads", "Lost document ads", "Legal notices", "Multiple newspapers"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center&auto=format"
    },
    {
      icon: <CardIcon className="h-8 w-8" />,
      title: "Online Aadhar Services",
      description: "Complete Aadhar card services including enrollment, updates, and corrections.",
      features: ["Aadhar enrollment", "Address update", "Name correction", "Biometric update"],
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop&crop=center&auto=format"
    }
  ];

  const testimonials = [
    {
      name: "Shivam",
      location: "Ghaziabad",
      rating: 5,
      text: "Excellent service! Got my passport renewed in just 3 days. The team was very professional and helpful.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Ashutosh",
      location: "Delhi",
      rating: 5,
      text: "Best passport consultant in Ghaziabad. They helped me with all the documentation and made the process so easy.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Ashish",
      location: "Noida",
      rating: 5,
      text: "Highly recommended! The staff is knowledgeable and the service is fast. Got my new passport without any hassle.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Pankaj",
      location: "Ghaziabad",
      rating: 5,
      text: "Sanjay ji helped me with my name change after marriage. The process was smooth and completed quickly.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Varun",
      location: "Meerut",
      rating: 5,
      text: "Professional service for tatkal passport. Got it done in record time. Thank you Sanjay sir!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Vamshi",
      location: "Ghaziabad",
      rating: 5,
      text: "Lost my passport and was worried. Sanjay ji helped me get a new one quickly. Great service!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const stats = [
    { number: "5000+", label: "Happy Customers" },
    { number: "15+", label: "Years Experience" },
    { number: "99%", label: "Success Rate" },
    { number: "24/7", label: "Customer Support" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-blue-600">
                  <span className="hidden sm:inline">Online passport service consultant</span>
                  <span className="sm:hidden">Passport Consultant</span>
                </h1>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {[
                  { id: "home", label: "Home" },
                  { id: "services", label: "Services" },
                  { id: "about", label: "About" },
                  { id: "contact", label: "Contact" }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {[
                { id: "home", label: "Home" },
                { id: "services", label: "Services" },
                { id: "about", label: "About" },
                { id: "contact", label: "Contact" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&h=1080&fit=crop&crop=center')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1
        }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Online Passport Service Consultant
              <span className="block text-blue-200">in Ghaziabad</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Expert consultation for passport applications, renewals, and documentation. 
              Fast, reliable, and hassle-free services in Shastri Nagar, Ghaziabad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3"
                onClick={() => window.open(whatsappUrl2, '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Get Started on WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-blue-600 hover:bg-white hover:text-blue-600 text-lg px-8 py-3"
                onClick={() => scrollToSection("services")}
              >
                View Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Comprehensive Document Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete passport and document solutions tailored to meet all your official documentation needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://via.placeholder.com/400x300/3b82f6/ffffff?text=${encodeURIComponent(service.title)}`;
                    }}
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <CardHeader className="text-center p-4 pt-0">
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
          </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Online passport service consultant
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With over 15 years of experience in passport and document services, <strong>Sanjay Singh</strong> is the leading 
                document consultant in Ghaziabad. Our team of experts provides comprehensive 
                assistance for all your official documentation needs.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Located in the heart of Shastri Nagar, Ghaziabad, we serve customers from 
                across the National Capital Region with professional, reliable, and fast 
                document services. <strong>Sanjay Singh</strong> personally ensures every customer gets the best service.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Award className="h-8 w-8 text-blue-600 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert Team</h3>
                    <p className="text-gray-600 text-sm">Led by Sanjay Singh</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-8 w-8 text-blue-600 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">5000+ Customers</h3>
                    <p className="text-gray-600 text-sm">Satisfied clients</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Zap className="h-8 w-8 text-blue-600 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Fast Processing</h3>
                    <p className="text-gray-600 text-sm">Quick turnaround</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Heart className="h-8 w-8 text-blue-600 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Trusted Service</h3>
                    <p className="text-gray-600 text-sm">Reliable & secure</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <User className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Meet Sanjay Singh</h3>
                  <p className="text-blue-200">Owner & Lead Consultant</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-300 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">15+ Years Experience</h4>
                      <p className="text-blue-100 text-sm">Expert in all document services</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-300 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Personal Attention</h4>
                      <p className="text-blue-100 text-sm">Every case handled personally</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-300 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">24/7 Support</h4>
                      <p className="text-blue-100 text-sm">Always available for your needs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-300 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Success Guarantee</h4>
                      <p className="text-blue-100 text-sm">99% success rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say About Us
            </h2>
            <p className="text-xl text-gray-600">
              Don&apos;t just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="w-15 h-15 rounded-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://via.placeholder.com/60x60/3b82f6/ffffff?text=${testimonial.name.charAt(0)}`;
                      }}
                    />
                    <div className="flex-1">
                      <div className="flex items-center mb-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">&ldquo;{testimonial.text}&rdquo;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch 
            </h2>
            <p className="text-xl text-gray-600">
              Ready to get your documents? Contact us today for expert assistance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                      <User className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Owner</h4>
                    <p className="text-gray-600">Sanjay Singh</p>
                    <p className="text-sm text-gray-500">Lead Document Consultant</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                      <Phone className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Phone Numbers</h4>
                    <p className="text-gray-600">+91 9310469634</p>
                    <p className="text-gray-600">0120-4152845</p>
                    <p className="text-sm text-gray-500">Available 9 AM - 11 PM, Monday to Sunday</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">
                      SC 125 Ground Floor<br />
                      Shastri Nagar<br />
                      Ghaziabad, Uttar Pradesh
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                      <Clock className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Business Hours</h4>
                    <p className="text-gray-600">
                      Monday - Sunday: 9:00 AM - 11:00 PM<br />
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Find Us on Map</CardTitle>
                  <CardDescription>
                    Visit our office in Shastri Nagar, Ghaziabad
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="w-full h-80">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.1234567890!2d77.4538!3d28.6692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQwJzA5LjEiTiA3N8KwMjcnMTMuNyJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Online passport service consultant Location"
                    ></iframe>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-center space-x-4">
                      <Button 
                        className="bg-green-600 hover:bg-green-700 text-white"
                        onClick={() => window.open(whatsappUrl2, '_blank')}
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        WhatsApp Us
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => window.open('https://maps.google.com/?q=SC+125+Ground+Floor+Shastri+Nagar+Ghaziabad', '_blank')}
                      >
                        <MapPin className="mr-2 h-4 w-4" />
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Online passport service consultant</h3>
              <p className="text-gray-300 mb-4">
                Professional passport and document services in Ghaziabad. Your trusted partner for all official documentation needs.
                <br />
                <strong>Owner: Sanjay Singh</strong>
              </p>
              <div className="flex space-x-4">
                <Button 
                  size="sm" 
                  className="bg-green-600 hover:bg-green-700"
                  onClick={() => window.open(whatsappUrl2, '_blank')}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Passport Services</li>
                <li>PAN Card Services</li>
                <li>Driving License</li>
                <li>Marriage Certification</li>
                <li>Newspaper Advertisement</li>
                <li>Online Aadhar Services</li>
                <li>Visa Assistance</li>
                <li>Document Verification</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  Sanjay Singh (Owner)
                </p>
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +91 9310469634
                </p>
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  0120-4152845
                </p>
                <p className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 mt-1" />
                  SC 125 Ground Floor<br />
                  Shastri Nagar, Ghaziabad
                </p>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Online passport service consultant. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Professional passport and document services in Ghaziabad, Shastri Nagar
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={() => window.open(whatsappUrl2, '_blank')}
        >
          <MessageCircle className="h-6 w-6 mr-2" />
          WhatsApp
        </Button>
      </div>
    </div>
  );
}
