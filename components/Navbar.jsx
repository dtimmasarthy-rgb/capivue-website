"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseEnter = (menu) => setActiveMenu(menu);
  const handleMouseLeave = () => setActiveMenu(null);

  return (
    <nav className="border-b border-slate-200 bg-white/90 backdrop-blur-md sticky top-0 z-[100] relative">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-tighter text-[#1E40AF] z-50">
          CAPIVUE
        </Link>
        
        {/* Desktop Nav with Mega-Menu */}
        <div className="hidden lg:flex gap-8 text-sm font-medium text-slate-600 h-full items-center">
          
          {/* Platform Dropdown */}
          <div 
            className="h-full flex items-center cursor-pointer hover:text-[#1E40AF] transition-colors"
            onMouseEnter={() => handleMouseEnter("platform")}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/platform" className="flex items-center gap-1">
              Platform 
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </Link>
            
            {/* Platform Mega-Menu Panel */}
            {activeMenu === "platform" && (
              <div className="absolute top-[80px] left-0 w-full bg-white border-b border-slate-200 shadow-xl py-8 px-6 animate-in fade-in slide-in-from-top-2 duration-200 before:content-[''] before:absolute before:-top-5 before:left-0 before:w-full before:h-5">
                <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
                  <div className="col-span-8 grid grid-cols-2 gap-6">
                    <Link href="/platform/deal-room" className="group p-3 rounded-xl hover:bg-slate-50 transition-colors">
                      <div className="font-bold text-[#0B1220] mb-1 group-hover:text-[#1E40AF]">Deal Room</div>
                      <div className="text-xs text-slate-500">Interactive margin simulator, Goal-Seek pricing, and BAFO scenario sandbox.</div>
                    </Link>
                    <Link href="/platform/risk-xray" className="group p-3 rounded-xl hover:bg-slate-50 transition-colors">
                      <div className="font-bold text-[#0B1220] mb-1 group-hover:text-[#1E40AF]">Risk X-Ray</div>
                      <div className="text-xs text-slate-500">Automatically isolate toxic clauses, SLA penalties, and compliance risks.</div>
                    </Link>
                    <Link href="/platform/sprint-planner" className="group p-3 rounded-xl hover:bg-slate-50 transition-colors">
                      <div className="font-bold text-[#0B1220] mb-1 group-hover:text-[#1E40AF]">Sprint Planner</div>
                      <div className="text-xs text-slate-500">Convert requirements into Agile user stories and capacity-planned sprints.</div>
                    </Link>
                    <Link href="/platform/capability-grounding" className="group p-3 rounded-xl hover:bg-slate-50 transition-colors">
                      <div className="font-bold text-[#0B1220] mb-1 group-hover:text-[#1E40AF]">Capability Grounding</div>
                      <div className="text-xs text-slate-500">Upload past decks so the AI writes with your exact methodology.</div>
                    </Link>
                  </div>
                  <div className="col-span-4 bg-[#F8FAFC] p-6 rounded-xl border border-slate-200 flex flex-col justify-center">
                    <h4 className="font-bold text-[#0B1220] mb-2">The 5-Phase Lifecycle</h4>
                    <p className="text-xs text-slate-600 mb-4">Discover, Evaluate, Draft, Plan, and Deliver in one unified platform.</p>
                    <Link href="/platform" className="text-sm font-semibold text-[#1E40AF] hover:underline">See the full platform →</Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Solutions Dropdown */}
          <div 
            className="h-full flex items-center cursor-pointer hover:text-[#1E40AF] transition-colors"
            onMouseEnter={() => handleMouseEnter("solutions")}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/solutions" className="flex items-center gap-1">
              Solutions 
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </Link>

            {/* Solutions Mega-Menu Panel (UPDATED 4-PILLAR) */}
            {activeMenu === "solutions" && (
              <div className="absolute top-[80px] left-0 w-full bg-white border-b border-slate-200 shadow-xl py-8 px-6 animate-in fade-in slide-in-from-top-2 duration-200 before:content-[''] before:absolute before:-top-5 before:left-0 before:w-full before:h-5">
                <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
                  
                  {/* Core Engines (4 Pillars) */}
                  <div className="col-span-6">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Core Solutions</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <Link href="/solutions/requirement-intelligence" className="block group p-3 rounded-lg hover:bg-slate-50 transition-colors">
                        <div className="font-bold text-[#0B1220] group-hover:text-[#1E40AF] mb-1">Requirement Intelligence</div>
                        <div className="text-xs text-slate-500">Parse 300-page docs, isolate blockers, and generate Assumptions Registers.</div>
                      </Link>
                      <Link href="/solutions/commercial-intelligence" className="block group p-3 rounded-lg hover:bg-slate-50 transition-colors">
                        <div className="font-bold text-[#0B1220] group-hover:text-[#1E40AF] mb-1">Commercial & Delivery</div>
                        <div className="text-xs text-slate-500">Model blended onshore/offshore margins, peak FTEs, and Agile capacity.</div>
                      </Link>
                      <Link href="/solutions/proposal-intelligence" className="block group p-3 rounded-lg hover:bg-slate-50 transition-colors">
                        <div className="font-bold text-[#0B1220] group-hover:text-[#1E40AF] mb-1">Proposal Intelligence</div>
                        <div className="text-xs text-slate-500">Draft Win Strategy-locked, citation-backed submissions in Word, PPT, Excel.</div>
                      </Link>
                      <Link href="/solutions/bid-governance" className="block group p-3 rounded-lg hover:bg-slate-50 transition-colors">
                        <div className="font-bold text-[#0B1220] group-hover:text-[#1E40AF] mb-1">Bid Governance</div>
                        <div className="text-xs text-slate-500">Route SME approvals via MS Teams and sync Salesforce & SharePoint.</div>
                      </Link>
                    </div>
                  </div>

                  {/* By Industry & By Role */}
                  <div className="col-span-6 grid grid-cols-2 gap-8 border-l border-slate-100 pl-8">
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">By Industry</h4>
                      <div className="space-y-2">
                        <Link href="/solutions/it-services" className="block font-medium text-slate-700 hover:text-[#1E40AF]">IT Services & SIs</Link>
                        <Link href="/solutions/managed-services" className="block font-medium text-slate-700 hover:text-[#1E40AF]">Managed Services (AMS)</Link>
                        <Link href="/solutions/consulting" className="block font-medium text-slate-700 hover:text-[#1E40AF]">Management Consulting</Link>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">By Role</h4>
                      <div className="space-y-2">
                        <Link href="/solutions/bid-managers" className="block font-medium text-slate-700 hover:text-[#1E40AF]">Bid Directors</Link>
                        <Link href="/solutions/cfo-deal-desk" className="block font-medium text-slate-700 hover:text-[#1E40AF]">CFOs & Deal Desk</Link>
                        <Link href="/solutions/delivery-heads" className="block font-medium text-slate-700 hover:text-[#1E40AF]">VPs of Delivery</Link>
                        <Link href="/solutions/solution-architects" className="block font-medium text-slate-700 hover:text-[#1E40AF]">Architects of Delivery</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/security" className="hover:text-[#1E40AF] transition-colors">Security</Link>
          <Link href="/pricing" className="hover:text-[#1E40AF] transition-colors">Pricing</Link>
          
          {/* Resources Dropdown */}
          <div 
            className="h-full flex items-center cursor-pointer hover:text-[#1E40AF] transition-colors"
            onMouseEnter={() => handleMouseEnter("resources")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="flex items-center gap-1">Resources <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></span>

            {activeMenu === "resources" && (
              <div className="absolute top-[80px] left-0 w-full bg-white border-b border-slate-200 shadow-xl py-8 px-6 animate-in fade-in slide-in-from-top-2 duration-200 before:content-[''] before:absolute before:-top-5 before:left-0 before:w-full before:h-5">
                <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8">
                  <Link href="/blog" className="group">
                    <div className="font-bold text-[#0B1220] mb-1 group-hover:text-[#1E40AF]">Blog</div>
                    <div className="text-xs text-slate-500">Insights on bid strategy and AI.</div>
                  </Link>
                  <Link href="/case-studies" className="group">
                    <div className="font-bold text-[#0B1220] mb-1 group-hover:text-[#1E40AF]">Case Studies</div>
                    <div className="text-xs text-slate-500">How enterprises win with Capivue.</div>
                  </Link>
                  <Link href="/integrations" className="group">
                    <div className="font-bold text-[#0B1220] mb-1 group-hover:text-[#1E40AF]">Integrations</div>
                    <div className="text-xs text-slate-500">Microsoft, Salesforce, and more.</div>
                  </Link>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Right side */}
        <div className="flex items-center gap-4 z-50">
          <a href="https://app.capivuetech.com/login" className="hidden md:block text-sm font-medium text-slate-600 hover:text-[#1E40AF] transition-colors">
            Log in
          </a>
          <Link href="/request-demo" className="bg-[#1E40AF] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-900 transition-colors shadow-sm">
            Book a Demo
          </Link>
        </div>
      </div>
    </nav>
  );
}