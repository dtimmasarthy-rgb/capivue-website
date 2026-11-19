"use client";
import { useState } from "react";
import Link from "next/link";

export default function BidManagers() {
  const [activeStage, setActiveStage] = useState(1);

  const stages = [
    {
      id: 1,
      title: "Requirement Triage",
      legacy: "40+ hours copying clauses from PDFs and multi-tab spreadsheets into Excel trackers.",
      capivue: "Instant multi-format extraction (PDF, Tesseract OCR, multi-sheet XLSX, DOCX, .eml/.msg) with automated risk scoring."
    },
    {
      id: 2,
      title: "Strategy Alignment",
      legacy: "Kickoff slide decks ignored while writers paste outdated boilerplate from old folders.",
      capivue: "Versioned Win Strategy Blueprint locks approved win themes and stakeholder talking points before drafting begins."
    },
    {
      id: 3,
      title: "SME Collaboration",
      legacy: "Endless email threads and status meetings to chase technical validations.",
      capivue: "Interactive Microsoft Teams Adaptive Cards push assigned requirements and [requires validation] flags directly to SMEs in chat."
    },
    {
      id: 4,
      title: "Multi-Document Packaging",
      legacy: "Late-night manual copy-pasting across Word proposals, Excel matrices, and decks.",
      capivue: "Multi-document workspace exports synchronized .docx, .pptx, .xlsx, and complete .zip Submission Packs in one click."
    }
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-800 font-sans selection:bg-[#1E40AF] selection:text-white">
      
      {/* SECTION 1: DARK OBSIDIAN HERO + LIVE TELEMETRY */}
      <section className="bg-[#090D16] pt-24 pb-20 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[#0EA5E9] text-xs font-bold uppercase tracking-wider mb-6">
              For Bid Directors & Capture Managers
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              Command 300-page pursuits without spreadsheet chaos or late-night SME chasing.
            </h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl">
              Bid leaders lose days copying clauses into fragile Excel matrices, aligning writers across disconnected folders, and chasing Subject Matter Experts over email hours before submission. Capivue unifies requirement triage, executive Win Strategy locks, Teams SME sign-offs, and multi-document packaging in one governed command center.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/request-demo" className="bg-[#1E40AF] text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-[#1E40AF]/30 text-center">
                Request Enterprise Demo
              </Link>
              <Link href="/solutions/cfo-deal-desk" className="bg-transparent border border-slate-600 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-slate-800 transition-all text-center">
                For CFOs & Deal Desk →
              </Link>
            </div>
            <div className="text-xs font-mono text-slate-500 tracking-wide uppercase">
              Multi-Format Intake & OCR • Locked Win Strategy Blueprint • Microsoft Teams Adaptive Cards
            </div>
          </div>

          {/* Right Visual: Pursuit Command Center Telemetry */}
          <div className="bg-[#0F1423] rounded-2xl border border-slate-700 shadow-2xl overflow-hidden relative">
            <div className="bg-slate-800/50 px-4 py-3 border-b border-slate-700 flex justify-between items-center">
              <div className="text-xs font-mono text-slate-300">Enterprise Core Transformation Tender</div>
              <div className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-emerald-900/40 text-emerald-400 border border-emerald-500/30">Bid Strength: 84/100</div>
            </div>
            
            <div className="p-6 md:p-8 space-y-3">
              <div className="bg-[#1A2235] border border-slate-700 rounded-lg p-4 flex gap-3 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] mt-1.5 shrink-0"></div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Requirement Triage · Risk X-Ray</div>
                  <p className="text-sm text-slate-300 leading-relaxed">26 Substantive Obligations Extracted (2 Critical, 22 Conditional, 2 Administrative) — 100% Traceable.</p>
                </div>
              </div>

              <div className="bg-[#1A2235] border border-slate-700 rounded-lg p-4 flex gap-3 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Strategy Governance · Win Strategy Blueprint v2</div>
                  <p className="text-sm text-slate-300 leading-relaxed">Approved & Locked by Capture Lead — 3 Win Themes & Stakeholder Map Enforced Across All Writers.</p>
                </div>
              </div>

              <div className="bg-[#1A2235] border border-slate-700 rounded-lg p-4 flex gap-3 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Active SME Validation · Microsoft Teams Bot</div>
                  <p className="text-sm text-slate-300 leading-relaxed">3 [requires validation] flags routed via Adaptive Cards — 2 Signed Off, 1 Awaiting Architect Input.</p>
                </div>
              </div>

              <div className="bg-[#1A2235] border border-slate-700 rounded-lg p-4 flex gap-3 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Multi-Document Submission Pack</div>
                  <p className="text-sm text-slate-300 leading-relaxed">Technical Proposal (.docx) · Compliance Matrix (.xlsx) · Executive Deck (.pptx) — Ready for .zip Export.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: THE BID MANAGEMENT BOTTLENECK */}
      <section className="py-20 px-6 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-bold text-red-500 uppercase tracking-wider mb-3">The Capture & Bid Bottleneck</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">
              Your team spends 70% of the bid window on administration—and only 30% on winning.
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              When managing complex RFPs, Statements of Work (SOWs), and multi-volume tenders under tight deadlines, three operational breakdowns threaten submission quality and compliance:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200">
              <div className="text-3xl font-mono font-bold text-slate-300 mb-4">01</div>
              <h3 className="text-lg font-bold text-[#0B1220] mb-3">Manual Requirement Triage & Version Drift</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Copying hundreds of clauses from PDFs, scanned annexures, and multi-tab spreadsheets into manual compliance matrices consumes days—and a single missed mandatory requirement triggers automatic disqualification.</p>
            </div>
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200">
              <div className="text-3xl font-mono font-bold text-slate-300 mb-4">02</div>
              <h3 className="text-lg font-bold text-[#0B1220] mb-3">Unaligned Writers & Rogue Boilerplate</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Without an enforced strategic blueprint, solution architects and technical writers draft sections in isolation—producing inconsistent messaging and unverified claims that fail executive evaluation criteria.</p>
            </div>
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200">
              <div className="text-3xl font-mono font-bold text-slate-300 mb-4">03</div>
              <h3 className="text-lg font-bold text-[#0B1220] mb-3">The Final-48-Hour SME & Formatting Scramble</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Chasing busy engineers over email for technical sign-offs and manually stitching Word documents, Excel pricing tables, and PowerPoint decks together creates avoidable errors right before the portal deadline.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OPERATIONAL TRANSFORMATION MATRIX */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">Operational Shift</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">Replace fragile trackers with one governed pursuit workflow.</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Tabs */}
          <div className="lg:w-1/3 flex flex-col gap-3 w-full">
            {stages.map((stage) => (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className={`text-left p-5 rounded-xl border transition-all duration-200 ${
                  activeStage === stage.id 
                    ? "bg-[#F8FAFC] border-[#1E40AF] shadow-sm ring-1 ring-[#1E40AF]/20" 
                    : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-3 mb-1">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${activeStage === stage.id ? "bg-[#1E40AF] text-white" : "bg-slate-200 text-slate-600"}`}>
                    0{stage.id}
                  </div>
                  <h3 className={`font-bold text-sm ${activeStage === stage.id ? "text-[#0B1220]" : "text-slate-600"}`}>{stage.title}</h3>
                </div>
              </button>
            ))}
          </div>

          {/* Content Panel */}
          <div className="lg:w-2/3 bg-white border border-slate-200 rounded-2xl p-8 md:p-10 w-full min-h-[260px] shadow-sm flex flex-col justify-center">
            <div className="mb-6">
              <span className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-2 block">Pursuit Stage 0{activeStage}</span>
              <h3 className="text-2xl font-bold text-[#0B1220] mb-4 leading-tight">
                {stages.find(s => s.id === activeStage)?.title}
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 border border-red-100 rounded-lg p-4">
                <div className="text-[10px] font-bold text-red-700 uppercase tracking-widest mb-2 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> Legacy Workflow
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">{stages.find(s => s.id === activeStage)?.legacy}</p>
              </div>
              <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4">
                <div className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest mb-2 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> With Capivue
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">{stages.find(s => s.id === activeStage)?.capivue}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FOUR CORE CONTROLS */}
      <section className="py-20 px-6 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">Built for Bid & Capture Leaders</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">Four core controls to command every pursuit.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200">
              <div className="text-xs font-bold text-[#0EA5E9] mb-2">01 · Universal Requirement & Template Intake</div>
              <h3 className="text-xl font-bold text-[#0B1220] mb-3">Ingest every tender file—including scanned schedules and customer templates.</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Upload primary requirement documents, scanned compliance certificates, and customer-mandated Word or Excel templates up to 50 MB. Capivue classifies document roles (Primary RFP, Annexure, Customer Template, Legal) and tracks 100% obligation coverage from Day 1.</p>
            </div>
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200">
              <div className="text-xs font-bold text-[#0EA5E9] mb-2">02 · Executive Win Strategy Approval Locks</div>
              <h3 className="text-xl font-bold text-[#0B1220] mb-3">Enforce strategic discipline before a single paragraph is written.</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Generate a section-by-section Win Strategy Blueprint mapped to buyer concerns across CIO, CISO, COO, and CFO personas. Once approved by leadership, the blueprint locks as the immutable source of truth governing AI drafting and SME reviews.</p>
            </div>
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200">
              <div className="text-xs font-bold text-[#0EA5E9] mb-2">03 · Frictionless SME Sign-Off via Microsoft Teams</div>
              <h3 className="text-xl font-bold text-[#0B1220] mb-3">Meet Subject Matter Experts where they already work.</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Assign sections or specific [requires validation] flags to practice leads and architects. Capivue’s Microsoft Teams integration delivers interactive Adaptive Cards so SMEs can submit technical responses directly in chat—automatically updating section status in real time.</p>
            </div>
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200">
              <div className="text-xs font-bold text-[#0EA5E9] mb-2">04 · Multi-Document Submission Pack Orchestration</div>
              <h3 className="text-xl font-bold text-[#0B1220] mb-3">Manage complex, multi-volume submissions in one place.</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Structure separate deliverables within a single pursuit—such as a Technical Proposal, Statement of Work, Compliance Matrix, and Executive Briefing Deck—and export the entire audited package as a single .zip archive.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: ENTERPRISE ECOSYSTEM & CLOSING BANNER */}
      <section className="py-16 px-6 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-lg font-bold text-[#0B1220] mb-4">Fits directly into your existing bid & capture stack.</h3>
          <p className="text-slate-600 text-sm max-w-3xl mx-auto">
            Ingest past wins from SharePoint & OneDrive • Collect SME approvals in Microsoft Teams • Sync opportunity stages with Salesforce • Govern access via Microsoft Entra ID (SSO).
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#090D16] text-center border-t border-slate-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            Run every complex bid on schedule—without the final-night fire drill.
          </h2>
          <p className="text-lg text-slate-400 mb-10">
            See how Capivue gives Bid Directors and Capture Managers end-to-end command from intake to submission.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/request-demo" className="bg-[#0EA5E9] text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-sky-400 transition-colors shadow-lg shadow-[#0EA5E9]/20">
              Book an Enterprise Demo
            </Link>
            <Link href="/solutions/cfo-deal-desk" className="bg-transparent border border-slate-600 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-slate-800 transition-colors">
              Explore For CFOs & Deal Desk →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}