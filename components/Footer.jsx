import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B1220] text-slate-300 py-16 px-6 border-t border-slate-800">
      
      {/* TOP TIER: BRAND & TRUST ANCHOR */}
      <div className="max-w-7xl mx-auto border-b border-slate-800 pb-10 mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="text-2xl font-extrabold tracking-tighter text-white mb-2">CAPIVUE</div>
          <p className="text-sm text-slate-400 max-w-md">
            Requirement, commercial, and proposal intelligence infrastructure for complex enterprise revenue and delivery teams.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-mono text-slate-500">
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Microsoft Azure Central India</span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> PostgreSQL RLS</span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Zero-Retention Azure AI</span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> CSA STAR Level 1</span>
        </div>
      </div>

      {/* MIDDLE TIER: 5-COLUMN SITEMAP */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
        
        {/* Column 1: Platform */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Platform</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/platform" className="hover:text-white transition-colors">Platform Overview</Link></li>
            <li><Link href="/risk-xray" className="hover:text-white transition-colors">Risk X-Ray</Link></li>
            <li><Link href="/deal-room" className="hover:text-white transition-colors">Deal Room</Link></li>
            <li><Link href="/sprint-planner" className="hover:text-white transition-colors">Sprint Planner</Link></li>
            <li><Link href="/capability-grounding" className="hover:text-white transition-colors">Capability Grounding</Link></li>
            <li><Link href="/integrations" className="hover:text-white transition-colors">Enterprise Integrations</Link></li>
          </ul>
        </div>

        {/* Column 2: Core Solutions */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Core Solutions</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/solutions" className="hover:text-white transition-colors">Solutions Hub</Link></li>
            <li><Link href="/solutions/requirement-intelligence" className="hover:text-white transition-colors">Requirement Intelligence</Link></li>
            <li><Link href="/solutions/commercial-intelligence" className="hover:text-white transition-colors">Commercial & Delivery Intelligence</Link></li>
            <li><Link href="/solutions/proposal-intelligence" className="hover:text-white transition-colors">Proposal Intelligence</Link></li>
            <li><Link href="/solutions/bid-governance" className="hover:text-white transition-colors">Bid Governance</Link></li>
          </ul>
        </div>

        {/* Column 3: Industries & Roles */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Industries & Roles</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/solutions/it-services" className="hover:text-white transition-colors">IT Services & SIs</Link></li>
            <li><Link href="/solutions/managed-services" className="hover:text-white transition-colors">Managed Services (AMS)</Link></li>
            <li><Link href="/solutions/consulting" className="hover:text-white transition-colors">Management Consulting</Link></li>
            <li><Link href="/solutions/bfsi" className="hover:text-white transition-colors">BFSI</Link></li>
            <li className="pt-2"><Link href="/solutions/bid-managers" className="hover:text-white transition-colors text-slate-400">For Bid Directors</Link></li>
            <li><Link href="/solutions/cfo-deal-desk" className="hover:text-white transition-colors text-slate-400">For CFOs & Deal Desk</Link></li>
            <li><Link href="/solutions/solution-architects" className="hover:text-white transition-colors text-slate-400">For Solution Architects</Link></li>
            <li><Link href="/solutions/delivery-heads" className="hover:text-white transition-colors text-slate-400">For Delivery Heads</Link></li>
          </ul>
        </div>

        {/* Column 4: Security & Company */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Security & Company</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/security" className="hover:text-white transition-colors">Security & Trust Center</Link></li>
            <li><Link href="/pricing" className="hover:text-white transition-colors">Enterprise Pricing</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Capivue</Link></li>
            <li><Link href="/partners" className="hover:text-white transition-colors">Partner Ecosystem</Link></li>
            <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link href="/request-demo" className="hover:text-white transition-colors">Book an Enterprise Demo</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 5: Resources & Legal */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Resources & Legal</h3>
          <ul className="space-y-3 text-sm">
            {/* Note: Using /blog since you confirmed the folders are under /blog */}
            <li><Link href="/blog" className="hover:text-white transition-colors">Insights & Briefings</Link></li>
            <li><Link href="/faq" className="hover:text-white transition-colors">Enterprise FAQ</Link></li>
            {/* Note: Pointing directly to /privacy and /terms matching your actual folder structure */}
            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link href="/dpa" className="hover:text-white transition-colors">Data Processing Agreement (DPA)</Link></li>
          </ul>
        </div>

      </div>

      {/* BOTTOM TIER: LEGAL & SOVEREIGNTY BAR */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <div>
          © 2026 Capivue Solutions Pvt Ltd. All rights reserved.
        </div>
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 text-center md:text-left">
          <span>Registered in India (Hyderabad)</span>
          <span className="hidden md:inline">•</span>
          <span>Central India Data Residency (Pune)</span>
          <span className="hidden md:inline">•</span>
          <a href="mailto:contact@capivuetech.com" className="hover:text-slate-300 transition-colors">contact@capivuetech.com</a>
        </div>
      </div>
    </footer>
  );
}