"use client";
import { useState } from "react";
import Link from "next/link";

export default function Solutions() {
  const [activeTab, setActiveTab] = useState("function");

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-800 font-sans selection:bg-[#1E40AF] selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="pt-24 pb-16 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1E40AF] text-xs font-semibold uppercase tracking-wider mb-6">
          Enterprise Revenue & Delivery Solutions
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B1220] mb-6 max-w-4xl mx-auto leading-[1.1]">
          Purpose-built intelligence for complex requirement documents.
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Whether you are responding to a 300-page public tender, scoping a fixed-price Statement of Work (SOW), or auditing a technical specification, Capivue turns unstructured buyer obligations into audited risk registers, margin-protected commercial models, and evidence-backed submissions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/request-demo" className="bg-[#1E40AF] text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-blue-900 transition-all shadow-md shadow-[#1E40AF]/20">
            Request Enterprise Demo
          </Link>
          <Link href="/platform" className="bg-white text-slate-900 border border-slate-200 px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-slate-50 transition-all shadow-sm">
            Explore Platform Lifecycle →
          </Link>
        </div>
      </section>

      {/* 2. SCOPE STRIP */}
      <section className="border-y border-slate-200 bg-white py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">Supported Artifacts</p>
            <div className="flex flex-wrap justify-center gap-2">
              {["RFPs & Tenders", "SOWs", "BRDs", "Security Questionnaires", "Multi-Sheet Excel Annexures"].map((doc, i) => (
                <span key={i} className="px-3 py-1.5 bg-[#F8FAFC] border border-slate-200 rounded-full text-xs font-medium text-slate-600">
                  {doc}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SOLUTIONS (ALTERNATING CHAPTERS) */}
      <section className="py-20 px-6 max-w-6xl mx-auto space-y-12">
        
        {/* Chapter 01: Requirement Intelligence */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col lg:flex-row">
          <div className="p-8 md:p-12 lg:w-1/2 flex flex-col justify-center">
            <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">01 · Requirement Intelligence</div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#0B1220] mb-4">
              Audit every obligation and surface deal-breakers before you commit.
            </h2>
            <p className="text-slate-600 mb-6 text-sm md:text-base leading-relaxed">
              Ingest dense PDFs, scanned schedules (via Tesseract OCR), multi-tab Excel workbooks, and tender emails. Capivue isolates every substantive and administrative clause, scores bid readiness across 8 risk dimensions, and auto-generates a Deduplicated Assumptions Register to protect fixed-price bids.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <span className="text-[#1E40AF] mt-0.5">✓</span> 
                <span>Multi-format intake & OCR across scanned annexures and multi-sheet spreadsheets</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <span className="text-[#1E40AF] mt-0.5">✓</span> 
                <span>Dual-sided compliance cross-check against your verified Bidder Profile (0–100 Bid Strength Score)</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <span className="text-[#1E40AF] mt-0.5">✓</span> 
                <span>Deduplicated contractual assumptions mapped directly to source requirement IDs</span>
              </li>
            </ul>
            <Link href="/solutions/requirement-intelligence" className="text-[#1E40AF] font-semibold hover:underline text-sm inline-flex items-center gap-1">
              Explore Requirement Intelligence <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          
          <div className="bg-[#F8FAFC] lg:w-1/2 p-8 md:p-12 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-slate-200">
            <div className="w-full max-w-md bg-white rounded-xl border border-slate-200 p-6 shadow-xl">
              <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
                <div className="text-[#0B1220] font-bold text-sm">Risk X-Ray</div>
                <div className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded">Score: 84/100</div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm border-b border-slate-50 pb-2">
                  <span className="text-slate-600">Legal & Regulatory</span>
                  <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">Passed</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-slate-50 pb-2">
                  <span className="text-slate-600">Eligibility & Quals</span>
                  <span className="text-amber-600 font-bold bg-amber-50 px-2 py-0.5 rounded">Conditioned</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-600">Legacy Integration Surface</span>
                  <span className="text-red-600 font-bold bg-red-50 px-2 py-0.5 rounded">High Risk</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chapter 02: Commercial & Delivery Intelligence */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col lg:flex-row-reverse">
          <div className="p-8 md:p-12 lg:w-1/2 flex flex-col justify-center">
            <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">02 · Commercial & Delivery Intelligence</div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#0B1220] mb-4">
              Price complex deliveries with CFO precision—and validate sprint capacity.
            </h2>
            <p className="text-slate-600 mb-6 text-sm md:text-base leading-relaxed">
              Stop separating commercial pricing from engineering reality. Capivue translates requirement effort into phased FTE allocations (max(FTE) across Discovery through Hypercare), applies custom onshore/offshore blended rate cards, layers 15% QA and 10% PM overheads, and synchronizes directly with your Sprint Planner.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <span className="text-[#1E40AF] mt-0.5">✓</span> 
                <span>Zero double-counted staffing with multi-currency rate cards (USD, INR, EUR, GBP, AUD)</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <span className="text-[#1E40AF] mt-0.5">✓</span> 
                <span>Configurable contingency buffers (default 20%) generating low-to-high TCV bands</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <span className="text-[#1E40AF] mt-0.5">✓</span> 
                <span>Deterministic sprint capacity validation (Peak FTEs × 5 Days × Sprint Weeks)</span>
              </li>
            </ul>
            <Link href="/solutions/commercial-intelligence" className="text-[#1E40AF] font-semibold hover:underline text-sm inline-flex items-center gap-1">
              Explore Commercial & Delivery Intelligence <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          
          <div className="bg-[#F8FAFC] lg:w-1/2 p-8 md:p-12 flex items-center justify-center border-t lg:border-t-0 lg:border-r border-slate-200">
            <div className="w-full max-w-md bg-white rounded-xl border border-slate-200 p-6 shadow-xl">
              <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
                <div className="text-[#0B1220] font-bold text-sm">Deal Room & Sprint Sync</div>
                <div className="bg-blue-100 text-[#1E40AF] text-xs font-bold px-2.5 py-1 rounded">Projected</div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm border-b border-slate-50 pb-2">
                  <span className="text-slate-600">Derived Team</span>
                  <span className="text-slate-900 font-bold font-mono">8.0 Peak FTEs</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-slate-50 pb-2">
                  <span className="text-slate-600">Delivery Mix</span>
                  <span className="text-slate-900 font-bold">30% Onshore / 70% Offshore</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-slate-50 pb-2">
                  <span className="text-slate-600">Sprint Cadence</span>
                  <span className="text-slate-900 font-bold">15 Two-Week Sprints</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-600">Export Ready</span>
                  <span className="text-emerald-600 font-bold">5-Tab CFO Workbook (.xlsx)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chapter 03: Proposal Intelligence */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col lg:flex-row">
          <div className="p-8 md:p-12 lg:w-1/2 flex flex-col justify-center">
            <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">03 · Proposal Intelligence</div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#0B1220] mb-4">
              Move from raw strategy to a controlled, evidence-backed blueprint.
            </h2>
            <p className="text-slate-600 mb-6 text-sm md:text-base leading-relaxed">
              Stop drafting disconnected sections in silos. Capivue locks every writer to an executive-approved Win Strategy Blueprint and synthesizes multi-document narratives directly from your verified Knowledge Repository—enforcing inline source citations and flagging missing proof before submission.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <span className="text-[#1E40AF] mt-0.5">✓</span> 
                <span>Versioned, executive-approved Win Strategy Blueprint locking win themes across all sections</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <span className="text-[#1E40AF] mt-0.5">✓</span> 
                <span>Strict RAG + Bidder Profile grounding with [requires validation] anti-hallucination flags</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <span className="text-[#1E40AF] mt-0.5">✓</span> 
                <span>Multi-document authoring exporting branded .docx, .pptx, and .xlsx submission packs</span>
              </li>
            </ul>
            <Link href="/solutions/proposal-intelligence" className="text-[#1E40AF] font-semibold hover:underline text-sm inline-flex items-center gap-1">
              Explore Proposal Intelligence <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          
          <div className="bg-[#0B1220] lg:w-1/2 p-8 md:p-12 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-slate-800">
            <div className="w-full max-w-md bg-slate-900 rounded-xl border border-slate-700 p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <div className="text-slate-300 font-mono text-xs">WIN_STRATEGY_BLUEPRINT · APPROVED</div>
              </div>
              <div className="space-y-3">
                <div className="h-8 bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 rounded flex items-center px-3">
                  <span className="text-[10px] text-[#0EA5E9] font-mono">[Citation: FSI_Core_Migration_CaseStudy.pdf] — Verified</span>
                </div>
                <div className="h-8 bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 rounded flex items-center px-3">
                  <span className="text-[10px] text-[#0EA5E9] font-mono">[Profile: ISO 27001 & DPDP Compliance] — Verified</span>
                </div>
                <div className="h-8 bg-amber-900/20 border border-amber-500/30 rounded flex items-center px-3 w-11/12">
                  <span className="text-[10px] text-amber-400 font-mono">[requires validation: State Portal Architect CV] — Flagged for SME</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chapter 04: Bid Governance & Orchestration */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col lg:flex-row-reverse">
          <div className="p-8 md:p-12 lg:w-1/2 flex flex-col justify-center">
            <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">04 · Bid Governance & Orchestration</div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#0B1220] mb-4">
              Eliminate approval bottlenecks across SMEs, Deal Desk, and Leadership.
            </h2>
            <p className="text-slate-600 mb-6 text-sm md:text-base leading-relaxed">
              Complex pursuits stall in scattered email threads and stale trackers. Capivue enforces executive approval gates, routes targeted technical sign-offs directly into Microsoft Teams via interactive Adaptive Cards, and synchronizes bid milestones across Salesforce, SharePoint, and OneDrive.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <span className="text-[#1E40AF] mt-0.5">✓</span> 
                <span>Interactive Microsoft Teams Adaptive Cards for instant SME requirement validation</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <span className="text-[#1E40AF] mt-0.5">✓</span> 
                <span>Bidirectional sync across Salesforce, SharePoint, OneDrive, and Custom REST / Webhooks</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <span className="text-[#1E40AF] mt-0.5">✓</span> 
                <span>Asynchronous background processing built for 300-page requirement documents</span>
              </li>
            </ul>
            <Link href="/solutions/bid-governance" className="text-[#1E40AF] font-semibold hover:underline text-sm inline-flex items-center gap-1">
              Explore Bid Governance & Orchestration <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          
          <div className="bg-[#F8FAFC] lg:w-1/2 p-8 md:p-12 flex items-center justify-center border-t lg:border-t-0 lg:border-r border-slate-200">
            <div className="w-full max-w-md bg-white rounded-xl border border-slate-200 p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-4">
                <div className="w-8 h-8 rounded-md bg-[#6264A7] flex items-center justify-center text-white text-sm font-bold">T</div>
                <div className="text-sm font-bold text-[#0B1220]">Microsoft Teams · Capivue Bot</div>
              </div>
              <div className="bg-[#F8FAFC] border border-slate-200 rounded-lg p-5">
                <h4 className="font-bold text-sm mb-1 text-[#0B1220]">Requirement Assigned: REQ-015</h4>
                <p className="text-xs text-slate-500 mb-4">Legacy Data Migration Strategy · Owner: Lead Solution Architect</p>
                <div className="flex gap-2">
                  <button className="bg-[#6264A7] text-white text-xs px-4 py-2 rounded font-medium shadow-sm">Submit Technical Response</button>
                  <button className="bg-white border border-slate-300 text-slate-700 text-xs px-4 py-2 rounded font-medium shadow-sm">Flag Assumption</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* 4. INTERACTIVE SOLUTIONS SWITCHER */}
      <section className="py-20 px-6 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0B1220] mb-6">Tailored to Your Function & Industry</h2>
            <div className="inline-flex bg-[#F8FAFC] p-1.5 rounded-lg border border-slate-200 shadow-sm">
              <button 
                onClick={() => setActiveTab("function")}
                className={`px-6 py-2.5 rounded-md text-sm font-semibold transition-all ${activeTab === "function" ? "bg-white text-[#1E40AF] shadow-sm ring-1 ring-slate-200/50" : "text-slate-500 hover:text-slate-800"}`}
              >
                By Revenue & Delivery Function
              </button>
              <button 
                onClick={() => setActiveTab("industry")}
                className={`px-6 py-2.5 rounded-md text-sm font-semibold transition-all ${activeTab === "industry" ? "bg-white text-[#1E40AF] shadow-sm ring-1 ring-slate-200/50" : "text-slate-500 hover:text-slate-800"}`}
              >
                By Industry Vertical
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {activeTab === "function" ? (
              <>
                <Link href="/solutions/bid-managers" className="p-6 bg-[#F8FAFC] rounded-xl border border-slate-200 hover:border-[#1E40AF]/40 hover:shadow-md transition-all block group">
                  <h3 className="font-bold text-[#0B1220] group-hover:text-[#1E40AF] mb-2 transition-colors">Bid & Capture Managers</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">Compress requirement triage from weeks to hours, enforce Win Strategy locks, and track multi-document readiness.</p>
                </Link>
                <Link href="/solutions/cfo-deal-desk" className="p-6 bg-[#F8FAFC] rounded-xl border border-slate-200 hover:border-[#1E40AF]/40 hover:shadow-md transition-all block group">
                  <h3 className="font-bold text-[#0B1220] group-hover:text-[#1E40AF] mb-2 transition-colors">CFO & Deal Desk</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">Protect fixed-price margins with governed blended rate cards, overhead layering, and deduplicated contractual assumptions.</p>
                </Link>
                <Link href="/solutions/capability-grounding" className="p-6 bg-[#F8FAFC] rounded-xl border border-slate-200 hover:border-[#1E40AF]/40 hover:shadow-md transition-all block group">
                  <h3 className="font-bold text-[#0B1220] group-hover:text-[#1E40AF] mb-2 transition-colors">Solution Architects</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">Ground technical designs in verified reference architectures and map complex integration surfaces accurately.</p>
                </Link>
                <Link href="/solutions/delivery-heads" className="p-6 bg-[#F8FAFC] rounded-xl border border-slate-200 hover:border-[#1E40AF]/40 hover:shadow-md transition-all block group">
                  <h3 className="font-bold text-[#0B1220] group-hover:text-[#1E40AF] mb-2 transition-colors">Delivery & PMO Heads</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">Validate proposed go-live dates against deterministic sprint capacity before Sales signs.</p>
                </Link>
              </>
            ) : (
              <>
                <Link href="/solutions/it-services" className="p-6 bg-[#F8FAFC] rounded-xl border border-slate-200 hover:border-[#1E40AF]/40 hover:shadow-md transition-all block group">
                  <h3 className="font-bold text-[#0B1220] group-hover:text-[#1E40AF] mb-2 transition-colors">IT Services & System Integrators</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">Convert 300-page turnkey requirement docs into phased FTE allocations and 2-week sprint roadmaps.</p>
                </Link>
                <Link href="/solutions/managed-services" className="p-6 bg-[#F8FAFC] rounded-xl border border-slate-200 hover:border-[#1E40AF]/40 hover:shadow-md transition-all block group">
                  <h3 className="font-bold text-[#0B1220] group-hover:text-[#1E40AF] mb-2 transition-colors">Managed Services & AMS</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">Separate transition waves from steady-state run obligations and isolate 24/7 SLA penalty exposure.</p>
                </Link>
                <Link href="/solutions/consulting" className="p-6 bg-[#F8FAFC] rounded-xl border border-slate-200 hover:border-[#1E40AF]/40 hover:shadow-md transition-all block group">
                  <h3 className="font-bold text-[#0B1220] group-hover:text-[#1E40AF] mb-2 transition-colors">Management & Strategy Consulting</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">Align partner win themes, commercial contingencies, and executive briefing decks in one governed workspace.</p>
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      {/* 5. CLOSING BANNER */}
      <section className="bg-[#0B1220] py-24 px-6 text-center border-t border-slate-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            Turn every requirement document into a decisive competitive advantage.
          </h2>
          <p className="text-lg text-slate-400 mb-10">
            See how Capivue unifies requirement auditing, commercial modeling, and grounded proposal authoring for your team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/request-demo" className="bg-[#0EA5E9] text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-sky-400 transition-colors shadow-lg shadow-[#0EA5E9]/20">
              Book an Enterprise Demo
            </Link>
            <Link href="/security" className="bg-transparent border border-slate-600 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-slate-800 transition-colors">
              Visit the Trust Center →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}