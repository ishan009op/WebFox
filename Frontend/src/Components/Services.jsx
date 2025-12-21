import React from 'react'

const Services = () => {
  return (
    <>
    
   <section className="w-full bg-slate-950 text-white py-16 px-4 md:px-10">
 
  <div className="text-center max-w-2xl mx-auto mb-12">
    <h2 className="text-3xl md:text-4xl font-bold">
      Our Creative Services
    </h2>
    <p className="text-slate-400 mt-3">
      We help brands grow with powerful design & marketing solutions.
    </p>
  </div>

  {/* Services Grid */}
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    
    {/* Graphics desgin */}
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-amber-500 transition">
      <h3 className="text-xl font-semibold mb-2">
        Graphic Design & Visual Branding
      </h3>

      <p className="text-slate-400 text-sm mb-4">
        We design visuals that make brands look professional & trustworthy.
      </p>

      <h4 className="text-sm font-semibold text-amber-400 mb-2">
        Features
      </h4>

      <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
        <li>Social Media Post Design</li>
        <li>Catalogue Design</li>
        <li>Flyer & Poster Design</li>
        <li>Brochure Design</li>
        <li>Menu Card Design</li>
        <li>Banner & Hoarding Design</li>
        <li>Business Card & Stationery</li>
        <li>Brand Identity Design</li>
      </ul>
    </div>

{/* content creation */}

    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-amber-500 transition">
      <h3 className="text-xl font-semibold mb-2">
        Content Creation
      </h3>

      <p className="text-slate-400 text-sm mb-4">
       We create content that connects with your audience.
      </p>

      <h4 className="text-sm font-semibold text-amber-400 mb-2">
        Features
      </h4>

      <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
        <li>Social Media Content Creatives</li>
        <li>Marketing Captions & Copywriting</li>
        <li>Promotional Visual Content</li>
        <li>Reels / Post Content Planning</li>
        <li>Brand Messaging & Tone Setup</li>
        
      </ul>
    </div>
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-amber-500 transition">
      <h3 className="text-xl font-semibold mb-2">
        Social Media Management

      </h3>

      <p className="text-slate-400 text-sm mb-4">
        We manage your social presence so you can focus on business.
      </p>

      <h4 className="text-sm font-semibold text-amber-400 mb-2">
        Features
      </h4>

      <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
       <li> Account Setup & Optimization</li>

<li>Monthly Content Calendar</li>

<li>Post Scheduling & Publishing</li>

<li>Audience Engagement (Comments / DM strategy)</li>

<li>Performance Tracking & Reporting</li>
      </ul>
    </div>
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-amber-500 transition">
      <h3 className="text-xl font-semibold mb-2">
        Paid Marketing & Ads Management
      </h3>

      <p className="text-slate-400 text-sm mb-4">
        We help you reach the right audience with paid campaigns
      </p>

      <h4 className="text-sm font-semibold text-amber-400 mb-2">
        Features
      </h4>

      <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
        <li>Facebook & Instagram Ads</li>
        <li>Google Ads (Search / Display – Basic)</li>
        <li>Campaign Strategy & Setup</li>
        <li>Creative Ad Design & Copy</li>
        <li>Budget Planning & Performance Review</li>
       
      </ul>
    </div>

    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-amber-500 transition">
      <h3 className="text-xl font-semibold mb-2">
        ATL & BTL Marketing Activities
      </h3>

      <p className="text-slate-400 text-sm mb-4">
        Offline & on-ground marketing execution with real experience
      </p>

      <h4 className="text-sm font-semibold text-amber-400 mb-2">
        Features
      </h4>

      <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
        <li>BTL Activities (Promotions, Branding, Sampling)</li>
        <li>ATL Campaign Planning</li>
        <li>Shop Branding & Visibility Activities</li>
        <li>Market Research & Field Execution</li>
        <li>Promotional Strategy & Reporting</li>
        
      </ul>
    </div>  

    
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-amber-500 transition">
      <h3 className="text-xl font-semibold mb-2">
        Account & Brand Management
      </h3>

      <p className="text-slate-400 text-sm mb-4">
        Complete marketing & communication handled under one roof.
      </p>

      <h4 className="text-sm font-semibold text-amber-400 mb-2">
        Features
      </h4>

      <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
      <li> Client Coordination & Requirement Handling</li>

<li>Campaign Planning & Execution</li>

<li>Brand Communication Management</li>

<li>Monthly Performance Review</li>

<li>Long-term Growth Strategy</li>
      </ul>
    </div>

    
  </div>
</section>

   
    </>
  )
}

export default Services