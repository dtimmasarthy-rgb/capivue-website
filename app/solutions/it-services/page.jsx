"use client";
import { useState } from "react";
import Link from "next/link";

export default function ITServices() {
  const [activeStage, setActiveStage] = useState(1);

  const stages = [
    {
      id: 1,
      title: "Forensic Requirement & Annexure Auditing",
      headline: "100% obligation extraction across PDFs, scanned annexures, and Excel schedules.",
      copy: "Ingest multi-hundred-page requirement documents, scanned compliance certificates (via Tesseract OCR), and multi-sheet workbooks. Capivue cross-examines every clause against your verified Bidder Profile across 8 risk dimensions—isolating deal-breakers and auto-generating a Deduplicated Assumptions Register to protect fixed-price scope."
    },
    {
      id: 2,
      title: "Six-Phase SI Delivery & Peak FTE Modeling",
      headline: "Bottom-up costing across Discovery, Build, SIT, UAT, Go-Live, and Hypercare.",
      copy: "Map requirement effort directly across standard SI delivery stages. Capivue computes peak role headcount (Solution Architect, Senior Developer, Developer, QA Engineer, Business Analyst, Project Manager) using max(FTE) logic so resources are never double-counted across sequential waves."
    },
    {
      id: 3,
      title: "Onshore / Offshore Blended Rate Cards & Governance Overheads",
      headline: "Defensible Total Contract Value (TCV) bands in five currencies.",
      copy: "Apply your target delivery ratio (such as 30% Onshore / 70% Offshore) across an 8-hour workday in USD, INR, EUR, GBP, or AUD. Capivue automatically layers 15% QA and 10% PM Governance overhead onto base development effort, plus a configurable Contingency Buffer (default 20%)."
    },
    {
      id: 4,
      title: "Capacity-Constrained Agile Sprint Planning",
      headline: "Every proposed go-live date validated against real engineering capacity.",
      copy: "Convert estimated person-days into 1–6 week Agile sprints (Peak FTEs × 5 Days × Sprint Weeks), ensuring Sales never signs a fixed delivery date that Delivery Heads cannot execute—and exporting both a Sprint Delivery Workbook (.xlsx) and Delivery Design Document (.docx)."
    }
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-800 font-sans selection:bg-[#1E40AF] selection:text-white">
      
      {/* SECTION 1: EXECUTIVE HERO + LIVE SI TELEMETRY */}
      <section className="pt-24 pb-20 px-6 max-w-7xl mx-auto border-b border-slate-200">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1E40AF] text-xs font-bold uppercase tracking-wider mb-6">
              For IT Services & System Integrators
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B1220] mb-6 leading-[1.1]">
              Win complex turnkey bids without inheriting unpriced delivery risk.
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
              Enterprise system integration pursuits span hundreds of pages of functional specifications, legacy migration annexures, and multi-tab commercial schedules. Capivue audits every mandatory clause, models onshore/offshore blended margins across all six SI delivery phases, and generates a capacity-validated sprint plan before you submit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/request-demo" className="bg-[#1E40AF] text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-blue-900 transition-all shadow-md shadow-[#1E40AF]/20 text-center">
                Request Enterprise Demo
              </Link>
              <Link href="/solutions/managed-services" className="bg-white text-slate-900 border border-slate-300 px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-slate-50 transition-all shadow-sm text-center">
                Explore Managed Services (AMS) →
              </Link>
            </div>
          </div>

          {/* Right Visual: Live SI Pursuit Telemetry */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
              <div className="text-sm font-bold text-[#0B1220]">Turnkey SI Pursuit · Live Model</div>
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-4">
                <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">Scope Extracted</div>
                <div className="text-slate-900 font-semibold text-sm">26 Substantive Obligations <span className="text-emerald-600 font-normal">(100% Traceability)</span></div>
              </div>
              <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-4">
                <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">Delivery Horizon</div>
                <div className="text-slate-900 font-semibold text-sm">29 Weeks across Discovery → Build → SIT → UAT → Go-Live → Hypercare</div>
              </div>
              <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-4">
                <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">Peak Staffing Pod</div>
                <div className="text-slate-900 font-semibold text-sm">8.0 FTEs <span className="text-slate-500 font-normal">(30% Onshore / 70% Offshore · 15% QA · 10% PM)</span></div>
              </div>
              <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-4">
                <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">Sprint Cadence</div>
                <div className="text-slate-900 font-semibold text-sm">15 Two-Week Sprints <span className="text-slate-500 font-normal">(80 Person-Days / Sprint)</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SI OPERATIONAL BOTTLENECK */}
      <section className="py-20 px-6 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-bold text-red-500 uppercase tracking-wider mb-3">The SI Operational Bottleneck</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">
              One missed mandatory clause disqualifies the bid.<br className="hidden md:block" /> One underestimated integration destroys the margin.
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              When pre-sales, architecture, and delivery teams collaborate across disconnected spreadsheets under tight tender deadlines, four recurring failures erode win rates and profitability:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold mb-6">1</div>
              <h3 className="text-xl font-bold text-[#0B1220] mb-3">Hidden Disqualification & Regulatory Triggers</h3>
              <p className="text-slate-600 text-sm leading-relaxed">State-specific procurement rules, mandatory ISO/SOC 2 certifications, data localization mandates (DPDP, RBI, PCI-DSS), and strict bid-rejection clauses hide deep inside technical annexures. Missing a single administrative or eligibility obligation voids months of capture effort.</p>
            </div>
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold mb-6">2</div>
              <h3 className="text-xl font-bold text-[#0B1220] mb-3">Unscoped Legacy Migration & Integration Surfaces</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Fixed-price SI contracts frequently bleed margin when undocumented third-party APIs or dirty legacy databases are discovered after contract award without explicit contractual assumptions.</p>
            </div>
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold mb-6">3</div>
              <h3 className="text-xl font-bold text-[#0B1220] mb-3">Inflated or Double-Counted FTE Staffing</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Manual Excel estimators routinely sum headcount across overlapping phases instead of computing peak pod utilization—either pricing your bid out of contention or understaffing critical UAT and cutover windows.</p>
            </div>
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold mb-6">4</div>
              <h3 className="text-xl font-bold text-[#0B1220] mb-3">Disconnected Technical & Commercial Artifacts</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Proposal writers draft architectural narratives in Word while Deal Desk models pricing in Excel and Delivery sketches timelines in PowerPoint—creating fatal inconsistencies across submission volumes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW CAPIVUE POWERS END-TO-END SI EXECUTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">The Capivue Architecture for SIs</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">Four governed engines built for complex systems integration.</h2>
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
                  <h3 className={`font-bold text-sm ${activeStage === stage.id ? "text-[#0B1220]" : "text-slate-600"}`}>{stage.title.split('&')[0]}</h3>
                </div>
              </button>
            ))}
          </div>

          {/* Content Panel */}
          <div className="lg:w-2/3 bg-[#FAFAFA] border border-slate-200 rounded-2xl p-8 md:p-10 w-full min-h-[260px] flex flex-col justify-center">
            <div>
              <span className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-2 block">Engine 0{activeStage}</span>
              <h3 className="text-2xl font-bold text-[#0B1220] mb-3 leading-tight">
                {stages.find(e => e.id === activeStage)?.headline}
              </h3>
              <p className="text-slate-600 leading-relaxed text-base">
                {stages.find(e => e.id === activeStage)?.copy}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: REPRESENTATIVE SI BENCHMARK */}
      <section className="py-20 px-6 bg-[#0B1220] text-white border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">Industry Benchmark</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">From raw requirement ingestion to a 260-page submission pack in under 45 minutes.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col">
              <div className="text-4xl font-mono font-bold text-[#0EA5E9] mb-4">&gt; 90%</div>
              <h3 className="text-lg font-bold mb-2">Reduction in Triage & Estimation Time</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Compressed requirement extraction, risk auditing, and first-draft generation from ~120 manual person-hours down to under 45 minutes.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col">
              <div className="text-4xl font-mono font-bold text-[#0EA5E9] mb-4">525</div>
              <h3 className="text-lg font-bold mb-2">Person-Days Modeled Across 15 Sprints</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Mapped 26 complex functional, regulatory, and migration requirements into an 8.0-FTE cross-functional pod over 29 weeks.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col">
              <div className="text-4xl font-mono font-bold text-[#0EA5E9] mb-4">4</div>
              <h3 className="text-lg font-bold mb-2">Synchronized Submission Artifacts</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Exported a cited Technical Proposal (.docx), a 5-tab CFO Commercial & Risk Workbook (.xlsx), a Delivery Design Plan (.docx), and an Executive Briefing Deck (.pptx).</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: ENTERPRISE STACK INTEGRATION STRIP */}
      <section className="py-16 px-6 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-xl font-bold text-[#0B1220] mb-4">Fits directly into your SI pre-sales and delivery ecosystem.</h3>
          <p className="text-slate-600 text-sm max-w-3xl mx-auto">
            Ingest past reference architectures from SharePoint & OneDrive, route technical validation cards to Practice Architects in Microsoft Teams, sync pipeline stages with Salesforce, and enforce Microsoft Entra ID (SSO) with Central India Azure data residency.
          </p>
        </div>
      </section>

      {/* SECTION 6: CLOSING CONVERSION BANNER */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-6">
          Stop pricing complex SI bids on fragile spreadsheets.
        </h2>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          See how Capivue turns your next multi-hundred-page requirement document into an audited commercial model, sprint plan, and grounded proposal.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/request-demo" className="bg-[#1E40AF] text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-blue-900 transition-all shadow-md shadow-[#1E40AF]/20">
            Book an Enterprise Demo
          </Link>
          <Link href="/solutions/managed-services" className="bg-white text-slate-900 border border-slate-300 px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-slate-50 transition-all shadow-sm">
            Explore Managed Services (AMS) →
          </Link>
        </div>
      </section>

    </div>
  );
}