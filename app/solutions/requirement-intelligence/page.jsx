"use client";
import { useState } from "react";
import Link from "next/link";

export default function RequirementIntelligence() {
  const [activeEngine, setActiveEngine] = useState(1);
  const [activeRisk, setActiveRisk] = useState(1);

  const engines = [
    {
      id: 1,
      title: "Multi-Format Intake & Structural Normalization",
      headline: "Reads every page, table, scanned certificate, and workbook tab.",
      copy: "Ingest .pdf tenders, scanned annexures (processed automatically via Tesseract OCR), multi-sheet .xlsx compliance schedules, .docx SOWs, capability decks, and .eml/.msg correspondence up to 50 MB per file. Capivue separates substantive technical obligations from administrative boilerplate with 100% clause traceability."
    },
    {
      id: 2,
      title: "Dual-Sided Compliance & 8-Dimension Risk Audit",
      headline: "Cross-examines buyer demands against your verified Bidder Profile.",
      copy: "Capivue evaluates both sides of the pursuit simultaneously—auditing every extracted obligation against your company’s ISO/SOC 2 certifications, regulatory posture, and prior delivery scale to compute an objective 0–100 Bid Strength Score and classify requirements into Yes, Yes with Conditions, No, or Administrative."
    },
    {
      id: 3,
      title: "Bottom-Up Effort, Margin & Sprint Synthesis",
      headline: "Converts technical complexity into CFO-grade pricing and sprint capacity.",
      copy: "Every scoped requirement maps to base development person-days, automatically layering 15% QA and 10% Governance/PM overhead, computing peak role headcount via max(FTE) across Delivery phases, and applying onshore/offshore blended rate cards (USD, INR, EUR, GBP, AUD) with configurable contingency buffers."
    }
  ];

  const risks = [
    { id: 1, name: "Legal & Regulatory", audits: "State procurement mandates, RBI Cybersecurity Directions, DPDP Act localization rules, PCI-DSS 4.0 compliance, and automatic bid-disqualification triggers.", mitigation: "Flags mandatory regulatory clauses and maps required compliance evidence from your Bidder Profile." },
    { id: 2, name: "Eligibility & Qualification", audits: "Mandatory corporate certifications, minimum turnover rules, and prior comparable-scale deployment thresholds.", mitigation: "Prevents wasted bid investment by surfacing hard disqualifiers on Day 1." },
    { id: 3, name: "Functional Scope", audits: "Ambiguous module definitions, unstated workflow edge cases, and custom engineering gaps.", mitigation: "Isolates scope grey areas and drafts clarifying pre-bid questions for the buyer." },
    { id: 4, name: "Integration & Legacy Surface", audits: "Undocumented external APIs, legacy database migrations, and third-party connector dependencies.", mitigation: "Converts integration unknowns into explicit contractual assumptions and contingency buffers." },
    { id: 5, name: "Technical & Architecture", audits: "High-availability uptime SLAs, peak concurrency loads, disaster recovery RPO/RTO, and sovereign hosting mandates.", mitigation: "Aligns technical responses with verified FSI/enterprise reference architectures." },
    { id: 6, name: "Delivery & Timeline", audits: "Compressed go-live windows, parallel UAT bottlenecks, and critical-path migration dependencies.", mitigation: "Validates schedule feasibility directly against your Sprint Planner capacity (Peak FTEs × 5 Days × Sprint Weeks)." },
    { id: 7, name: "Support & Operations", audits: "Post-go-live Hypercare obligations, 24/7 L1/L2/L3 support windows, and operational SLA penalty exposure.", mitigation: "Separates steady-state run staffing from core build effort in your commercial model." },
    { id: 8, name: "Commercial & Financial", audits: "Fixed-price scope creep exposure, milestone payment delays, and unpriced change-request liabilities.", mitigation: "Generates low-to-high TCV bands backed by a configurable risk contingency floor (default 20%)." }
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen text-slate-800 font-sans selection:bg-[#1E40AF] selection:text-white">
      
      {/* 1. DARK-MODE FORENSIC HERO */}
      <section className="bg-[#090D16] pt-24 pb-20 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[#0EA5E9] text-xs font-bold uppercase tracking-wider mb-6">
              Requirement, Risk & Commercial Intelligence
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              Parse 300-page requirement documents. Isolate deal-breakers. Price the delivery.
            </h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl">
              Pre-sales, Legal, and Deal Desk teams lose 40+ hours manually dissecting dense RFPs, Statements of Work (SOWs), and multi-tab Excel schedules—still missing disqualifying clauses buried on page 147. Capivue transforms unstructured buyer documents into an audited risk register, a deduplicated contractual assumptions log, and a bottom-up commercial model in under an hour.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/request-demo" className="bg-[#1E40AF] text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-[#1E40AF]/30 text-center">
                Book an Enterprise Demo
              </Link>
              <Link href="/solutions/ai-agents" className="bg-transparent border border-slate-600 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-slate-800 transition-all text-center">
                Explore AI Agents →
              </Link>
            </div>
            <div className="text-xs font-mono text-slate-500 tracking-wide">
              Tesseract OCR + Multi-Sheet XLSX • 8-Dimension Risk Audit • Phased FTE & TCV Engine
            </div>
          </div>

          {/* Right Visual: Live Requirement Telemetry Card */}
          <div className="bg-[#0F1423] rounded-2xl border border-slate-700 shadow-2xl overflow-hidden relative">
            {/* Top bar */}
            <div className="bg-slate-800/50 px-4 py-3 border-b border-slate-700 flex items-center justify-between">
              <div className="text-xs font-mono text-slate-300">REQ-015 · Technical Annexure p.84</div>
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            </div>
            
            <div className="p-6 md:p-8 space-y-6">
              {/* Source Clause */}
              <div className="bg-[#1A2235] border border-slate-700 rounded-lg p-4 relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#0EA5E9] rounded-l-lg"></div>
                <p className="text-sm text-slate-300 font-serif italic leading-relaxed pl-2">
                  "Vendor shall migrate 12 years of legacy records from existing state database prior to Phase 1 Go-Live with zero downtime."
                </p>
              </div>

              {/* Decomposition Output */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#1A2235] border border-slate-700 rounded-lg p-4">
                  <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Compliance Verdict</div>
                  <div className="inline-flex items-center gap-1.5 text-amber-400 text-sm font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Yes with Conditions
                  </div>
                </div>
                <div className="bg-[#1A2235] border border-slate-700 rounded-lg p-4">
                  <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Risk Dimension</div>
                  <div className="text-red-400 text-sm font-semibold">Integration Surface · High</div>
                </div>
              </div>

              <div className="bg-[#1A2235] border border-slate-700 rounded-lg p-4">
                <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Derived Effort</div>
                <div className="text-white text-lg font-mono">
                  21 Person-Days <span className="text-xs text-slate-400 font-sans ml-2">(+15% QA · +10% PM)</span>
                </div>
              </div>

              <div className="bg-[#1A2235] border border-slate-700 rounded-lg p-4">
                <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Auto-Generated Assumption</div>
                <p className="text-sm text-slate-300 leading-snug">
                  Assumes Client provides validated legacy database schema and cleansed data dump prior to Sprint 3.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. THE THREE-STAGE ANALYTICAL PIPELINE */}
      <section className="py-20 px-6 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">The Capivue Mechanism</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">From unstructured buyer documents to an audited Go/No-Go decision.</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Every requirement document uploaded into Capivue passes through three deterministic and AI-governed analytical engines.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-1/3 flex flex-col gap-3 w-full">
              {engines.map((engine) => (
                <button
                  key={engine.id}
                  onClick={() => setActiveEngine(engine.id)}
                  className={`text-left p-5 rounded-xl border transition-all duration-200 ${
                    activeEngine === engine.id 
                      ? "bg-[#F8FAFC] border-[#1E40AF] shadow-sm ring-1 ring-[#1E40AF]/20" 
                      : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-1">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${activeEngine === engine.id ? "bg-[#1E40AF] text-white" : "bg-slate-200 text-slate-600"}`}>
                      0{engine.id}
                    </div>
                    <h3 className={`font-bold text-sm ${activeEngine === engine.id ? "text-[#0B1220]" : "text-slate-600"}`}>{engine.title.split('&')[0]}</h3>
                  </div>
                </button>
              ))}
            </div>

            <div className="lg:w-2/3 bg-[#FAFAFA] border border-slate-200 rounded-2xl p-8 md:p-10 w-full min-h-[260px] flex flex-col justify-center">
              <div>
                <span className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-2 block">Engine 0{activeEngine}</span>
                <h3 className="text-2xl font-bold text-[#0B1220] mb-3 leading-tight">
                  {engines.find(e => e.id === activeEngine)?.headline}
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  {engines.find(e => e.id === activeEngine)?.copy}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE 8-DIMENSION RISK X-RAY MATRIX */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">Forensic Risk Taxonomy</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">Every clause audited across eight enterprise risk dimensions.</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Human reviewers skim for keywords. Capivue systematically evaluates every obligation across legal, technical, operational, and commercial exposure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {risks.map((risk) => (
            <button
              key={risk.id}
              onClick={() => setActiveRisk(risk.id)}
              className={`p-4 text-left rounded-xl border transition-all text-sm font-semibold ${
                activeRisk === risk.id 
                  ? "bg-[#0B1220] border-[#0B1220] text-white shadow-lg" 
                  : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              0{risk.id} · {risk.name}
            </button>
          ))}
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-10 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">What Capivue Audits</div>
              <p className="text-slate-700 leading-relaxed text-lg">
                {risks.find(r => r.id === activeRisk)?.audits}
              </p>
            </div>
            <div className="border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-8">
              <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-widest mb-3">Automated Mitigation Output</div>
              <p className="text-[#0B1220] font-medium leading-relaxed text-lg">
                {risks.find(r => r.id === activeRisk)?.mitigation}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE MARGIN SHIELD */}
      <section className="py-20 px-6 bg-[#0B1220] text-white border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Assumptions Register */}
            <div>
              <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">Contractual Defense</div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 leading-tight">
                Turn hidden risks into enforceable bid conditions.
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Flagging a risk means nothing if it never reaches your commercial terms. Capivue automatically consolidates overlapping technical, legal, and operational dependencies into a Deduplicated Assumptions Register—mapped directly to source requirement IDs—ready to embed into your proposal and Statement of Work.
              </p>
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                <p className="text-sm font-medium text-slate-300 flex items-start gap-3">
                  <span className="text-amber-400 shrink-0 mt-0.5">⚡</span>
                  Eliminates unpriced change-request exposure on fixed-price IT Services, Consulting, and Managed Services contracts.
                </p>
              </div>
            </div>

            {/* Right Column: 5-Tab CFO Audit Workbook */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">The 5-Tab CFO Audit Workbook</h3>
                  <p className="text-xs text-slate-400 font-mono mt-1">COMMERCIAL_EXPORT.xlsx</p>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#0EA5E9] font-mono text-xs mt-1">T1</span>
                  <div>
                    <strong className="text-white text-sm block">Executive Summary</strong>
                    <span className="text-slate-400 text-sm">Go/No-Go verdict, total effort in person-days, and low/high TCV cost bands.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0EA5E9] font-mono text-xs mt-1">T2</span>
                  <div>
                    <strong className="text-white text-sm block">Commercial Breakdown</strong>
                    <span className="text-slate-400 text-sm">Phase-by-phase effort, weekly burn rates, and cost ranges across Discovery through Hypercare.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0EA5E9] font-mono text-xs mt-1">T3</span>
                  <div>
                    <strong className="text-white text-sm block">Top Risks Register</strong>
                    <span className="text-slate-400 text-sm">Ranked risks paired with actionable mitigation strategies.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0EA5E9] font-mono text-xs mt-1">T4</span>
                  <div>
                    <strong className="text-white text-sm block">Deduplicated Assumptions</strong>
                    <span className="text-slate-400 text-sm">Consolidated contractual assumptions linked to requirement IDs.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0EA5E9] font-mono text-xs mt-1">T5</span>
                  <div>
                    <strong className="text-white text-sm block">Requirements & Costing Matrix</strong>
                    <span className="text-slate-400 text-sm">Line-by-line audit of every extracted clause with complexity, confidence score, and blended rate costing.</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CLOSING CTA */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-6">
          Stop spending 40 hours parsing requirement documents by hand.
        </h2>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          Upload your next RFP, SOW, or technical specification and get an audited risk register and commercial model in under an hour.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/request-demo" className="bg-[#1E40AF] text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-blue-900 transition-all shadow-md shadow-[#1E40AF]/20">
            Book an Enterprise Demo
          </Link>
          <Link href="/solutions/ai-agents" className="bg-white text-slate-900 border border-slate-300 px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-slate-50 transition-all shadow-sm">
            Explore AI Agents & Orchestration →
          </Link>
        </div>
      </section>

    </div>
  );
}