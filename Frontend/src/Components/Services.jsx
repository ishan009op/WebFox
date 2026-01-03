import { motion } from "framer-motion";
import InfiniteServices from "./InfinteServices";

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

const Services = () => {
  return (
    <section
      id="services"
      className="relative w-full bg-gray-50 py-16 px-4 md:px-10 overflow-hidden"
    >
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Creative Services
        </h2>
        <p className="text-gray-600 mt-3">
          We help brands grow with powerful design & marketing solutions.
        </p>
      </div>

      {/* Horizontal Scrolling Container */}
      
        {/* Repeat services twice for infinite effect */}
    <InfiniteServices> {[...services, ...services].map((service, index) => (
  <motion.div
    key={index}
    className="bg-white rounded-3xl p-6 border border-gray-200 shadow-lg flex-shrink-0 w-72 relative overflow-hidden cursor-pointer"
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{
      y: -10,
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
      transition: { duration: 0.3 },
    }}
  >
    {/* Gradient accent bar */}
    <div className="absolute top-0 left-0 w-full h-1 bg-amber-400 rounded-t-xl" />

    <h3 className="text-xl font-bold text-gray-900 mb-2 mt-2">
      {service.title}
    </h3>
    <p className="text-gray-700 text-sm mb-4">{service.description}</p>

    <h4 className="text-sm font-semibold text-amber-500 mb-2">Features</h4>
    <ul className="list-disc list-inside text-gray-800 space-y-1 text-sm">
      {service.features.map((feature, i) => (
        <li key={i}>{feature}</li>
      ))}
    </ul>

    {/* Optional floating blurred circle for depth */}
    <motion.div
      className="absolute -top-6 -right-6 w-16 h-16 bg-amber-100/40 rounded-full blur-2xl"
      animate={{ y: [0, 6, 0], x: [0, 4, 0] }}
      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
  </motion.div>
))}
</InfiniteServices> 

    
    </section>
  );
};

export default Services;
