import { useState, useEffect, useRef } from "react";

const services = [
  {
    title: "Graphic Design & Visual Branding",
    description: "We design visuals that make brands look professional & trustworthy.",
    features: [
      "Social Media Post Design",
      "Catalogue Design",
      "Flyer & Poster Design",
      "Brochure Design",
      "Menu Card Design",
      "Banner & Hoarding Design",
      "Business Card & Stationery",
      "Brand Identity Design",
    ],
  },
  {
    title: "Content Creation",
    description: "We create content that connects with your audience.",
    features: [
      "Social Media Content Creatives",
      "Marketing Captions & Copywriting",
      "Promotional Visual Content",
      "Reels / Post Content Planning",
      "Brand Messaging & Tone Setup",
    ],
  },
  {
    title: "Social Media Management",
    description: "We manage your social presence so you can focus on business.",
    features: [
      "Account Setup & Optimization",
      "Monthly Content Calendar",
      "Post Scheduling & Publishing",
      "Audience Engagement (Comments / DMs)",
      "Performance Tracking & Reporting",
    ],
  },
  {
    title: "Paid Marketing & Ads Management",
    description: "We help you reach the right audience with paid campaigns.",
    features: [
      "Facebook & Instagram Ads",
      "Google Ads (Search / Display – Basic)",
      "Campaign Strategy & Setup",
      "Creative Ad Design & Copy",
      "Budget Planning & Performance Review",
    ],
  },
  {
    title: "ATL & BTL Marketing Activities",
    description: "Offline & on-ground marketing execution with real experience.",
    features: [
      "BTL Activities (Promotions, Branding, Sampling)",
      "ATL Campaign Planning",
      "Shop Branding & Visibility Activities",
      "Market Research & Field Execution",
      "Promotional Strategy & Reporting",
    ],
  },
  {
    title: "Account & Brand Management",
    description: "Complete marketing & communication handled under one roof.",
    features: [
      "Client Coordination & Requirement Handling",
      "Campaign Planning & Execution",
      "Brand Communication Management",
      "Monthly Performance Review",
      "Long-term Growth Strategy",
    ],
  },
];

const CARD_WIDTH = 400; // width of card including margin
const SPEED = 15; // px per second

const Services = () => {
  const containerRef = useRef();
  const [offsetX, setOffsetX] = useState(0);
  const [paused, setPaused] = useState(false);
  const totalWidth = services.length * CARD_WIDTH;
  const [activeDot, setActiveDot] = useState(0);

  // Auto-scroll loop
  useEffect(() => {
    let frameId;
    let lastTime = performance.now();

    const step = (time) => {
      if (!paused) {
        const delta = time - lastTime;
        setOffsetX((prev) => {
          let next = prev + (SPEED * delta) / 1000;
          if (next >= totalWidth) next -= totalWidth; // seamless loop
          setActiveDot(Math.floor(next / CARD_WIDTH) % services.length);
          return next;
        });
      }
      lastTime = time;
      frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [paused, totalWidth]);

  const infiniteServices = [...services, ...services, ...services];

  const scrollToCard = (index) => {
    setOffsetX(index * CARD_WIDTH);
  };

  return (
    <section className="relative w-full py-16 px-4 md:px-10 bg-gray-50 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
        Our Services
      </h2>

      <div
        className="overflow-hidden cursor-grab"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="flex gap-6"
          style={{ transform: `translateX(${-offsetX}px)` }}
          ref={containerRef}
          onMouseDown={() => setPaused(true)}
          onMouseUp={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          {infiniteServices.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg flex-shrink-0 w-96 cursor-pointer relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-amber-400 rounded-t-xl" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-2">{service.title}</h3>
              <p className="text-gray-700 text-sm mb-4">{service.description}</p>
              <ul className="list-disc list-inside text-gray-800 space-y-1 text-sm">
                {service.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {services.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full transition-colors duration-300 cursor-pointer ${
              activeDot === idx ? "bg-amber-400" : "bg-gray-300"
            }`}
            onClick={() => scrollToCard(idx)}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
