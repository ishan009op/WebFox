import React from "react";
import { motion } from "framer-motion";

/* =========================
   Animation Variants
========================= */
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

/* =========================
   Services Data
========================= */
const services = [
  {
    title: "Graphic Design & Visual Branding",
    description:
      "We design visuals that make brands look professional & trustworthy.",
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
    description:
      "We manage your social presence so you can focus on business.",
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
    description:
      "We help you reach the right audience with paid campaigns.",
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
    description:
      "Offline & on-ground marketing execution with real experience.",
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
    description:
      "Complete marketing & communication handled under one roof.",
    features: [
      "Client Coordination & Requirement Handling",
      "Campaign Planning & Execution",
      "Brand Communication Management",
      "Monthly Performance Review",
      "Long-term Growth Strategy",
    ],
  },
];

/* =========================
   Component
========================= */
const Services = () => {
  return (
    <section id="services" className=" scroll-mt-28 w-full bg-slate-950 py-16 px-4 md:px-10">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <motion.h2 
        variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
        className="text-3xl md:text-4xl font-bold text-white">
          Our Creative Services
        </motion.h2>
        <motion.p
        variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
        className="text-slate-400 mt-3">
          We help brands grow with powerful design & marketing solutions.
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            whileHover={{
              y: -8,
              scale: 1.03,
              transition: { duration: 0.3 },
            }}
            className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200 hover:border-amber-500 transition"
          >
            <h3 className="text-xl font-semibold text-[#0F172A] mb-2">
              {service.title}
            </h3>

            <p className="text-[#334155] text-sm mb-4">
              {service.description}
            </p>

            <h4 className="text-sm font-semibold text-amber-500 mb-2">
              Features
            </h4>

            <ul className="space-y-2 text-sm text-[#0F172A] list-disc list-inside">
              {service.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
