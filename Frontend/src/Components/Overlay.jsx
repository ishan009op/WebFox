import React, { useState } from 'react';
import { Menu, X, ArrowRight, CheckCircle, Palette, TrendingUp, MessageSquare, Target, Users, Briefcase } from 'lucide-react';

export default function BrandCraftWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      icon: <Palette className="w-8 h-8" />,
      title: "Graphic Design & Visual Branding",
      tagline: "We design visuals that make brands look professional & trustworthy",
      items: [
        "Social Media Post Design (Instagram, Facebook, LinkedIn)",
        "Catalogue Design (Product / Corporate / Retail)",
        "Flyer & Poster Design",
        "Brochure Design (Digital & Print)",
        "Menu Card Design (Restaurant / Cafe / Hotel)",
        "Banner, Standee & Hoarding Design",
        "Business Card & Stationery Design",
        "Brand Identity Design (Logo, Color Palette, Fonts)"
      ],
      bestFor: "Shops, startups, restaurants, manufacturers, service businesses"
    },
    {
      id: 2,
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Content Creation",
      tagline: "We create content that connects with your audience",
      items: [
        "Social Media Content Creatives",
        "Marketing Captions & Copywriting",
        "Promotional Visual Content",
        "Reels / Post Content Planning",
        "Brand Messaging & Tone Setup"
      ],
      bestFor: "Businesses looking to strengthen their brand voice"
    },
    {
      id: 3,
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Social Media Management",
      tagline: "We manage your social presence so you can focus on business",
      items: [
        "Account Setup & Optimization",
        "Monthly Content Calendar",
        "Post Scheduling & Publishing",
        "Audience Engagement (Comments / DM strategy)",
        "Performance Tracking & Reporting"
      ],
      bestFor: "Busy entrepreneurs who need consistent online presence"
    },
    {
      id: 4,
      icon: <Target className="w-8 h-8" />,
      title: "Paid Marketing & Ads Management",
      tagline: "We help you reach the right audience with paid campaigns",
      items: [
        "Facebook & Instagram Ads",
        "Google Ads (Search / Display – Basic)",
        "Campaign Strategy & Setup",
        "Creative Ad Design & Copy",
        "Budget Planning & Performance Review"
      ],
      bestFor: "Businesses ready to scale with targeted advertising"
    },
    {
      id: 5,
      icon: <Users className="w-8 h-8" />,
      title: "ATL & BTL Marketing Activities",
      tagline: "Offline & on-ground marketing execution with real experience",
      items: [
        "BTL Activities (Promotions, Branding, Sampling)",
        "ATL Campaign Planning",
        "Shop Branding & Visibility Activities",
        "Market Research & Field Execution",
        "Promotional Strategy & Reporting"
      ],
      bestFor: "Brands needing physical market presence and activation"
    },
    {
      id: 6,
      icon: <Briefcase className="w-8 h-8" />,
      title: "Account & Brand Management",
      tagline: "Complete marketing & communication handled under one roof",
      items: [
        "Client Coordination & Requirement Handling",
        "Campaign Planning & Execution",
        "Brand Communication Management",
        "Monthly Performance Review",
        "Long-term Growth Strategy"
      ],
      bestFor: "Growing businesses needing a dedicated marketing partner"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold">
                <span className="text-amber-500">Brand</span>Craft
              </div>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="hover:text-amber-500 transition">Services</a>
              <a href="#why-us" className="hover:text-amber-500 transition">Why Us</a>
              <a href="#contact" className="hover:text-amber-500 transition">Contact</a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800 px-4 py-4 space-y-3">
            <a href="#services" className="block hover:text-amber-500">Services</a>
            <a href="#why-us" className="block hover:text-amber-500">Why Us</a>
            <a href="#contact" className="block hover:text-amber-500">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Creative Design & Marketing Solutions for Growing Businesses
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              From visual branding to digital & on-ground marketing — we help brands stand out and grow
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center bg-amber-500 text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-400 transition shadow-lg hover:shadow-xl"
            >
              Get a Free Consultation
              <ArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              What We Do at BrandCraft
            </h2>
            <p className="text-xl text-slate-600">
              We combine creativity, strategy, and execution to build strong brands
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200 hover:border-amber-500 transition cursor-pointer shadow-sm hover:shadow-lg"
                onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              >
                <div className="text-amber-500 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-4">
                  {service.tagline}
                </p>
                <button className="text-amber-500 font-semibold flex items-center hover:text-amber-600">
                  {activeService === service.id ? 'Hide Details' : 'View Details'}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>

                {activeService === service.id && (
                  <div className="mt-6 pt-6 border-t border-slate-300">
                    <ul className="space-y-2 mb-4">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                      <p className="text-sm text-slate-700">
                        <span className="font-semibold">Best for:</span> {service.bestFor}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose BrandCraft?</h2>
            <p className="text-xl text-slate-300">
              Real experience. Real results. Real partnership.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-amber-500 mb-4">7+</div>
              <h3 className="text-xl font-bold mb-2">Years of Experience</h3>
              <p className="text-slate-400">Real-world sales & marketing experience across industries</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-amber-500 mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Point of Contact</h3>
              <p className="text-slate-400">Complete design & marketing under one roof</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-amber-500 mb-4">100%</div>
              <h3 className="text-xl font-bold mb-2">Transparency</h3>
              <p className="text-slate-400">Clear pricing & realistic timelines, no surprises</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-amber-500 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Ready to Build Your Brand?
          </h2>
          <p className="text-xl text-slate-800 mb-8">
            Let's discuss how BrandCraft can help grow your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:hello@brandcraft.com" 
              className="bg-slate-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-800 transition shadow-lg"
            >
              Email Us
            </a>
            <a 
              href="tel:+919876543210" 
              className="bg-white text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-100 transition shadow-lg"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-amber-500">Brand</span>Craft
              </h3>
              <p className="text-slate-400">
                Creative design & marketing solutions for growing businesses
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#services" className="block text-slate-400 hover:text-amber-500">Services</a>
                <a href="#why-us" className="block text-slate-400 hover:text-amber-500">Why Us</a>
                <a href="#contact" className="block text-slate-400 hover:text-amber-500">Contact</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-slate-400">
                <p>Email: hello@brandcraft.com</p>
                <p>Phone: +91 98765 43210</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p className="mb-2">
              © 2025 BrandCraft. All rights reserved.
            </p>
            <p className="text-sm">
              7+ years of real-world sales & marketing experience | One-point contact for design & marketing | Transparent pricing & clear timelines
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}