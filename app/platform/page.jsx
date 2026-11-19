import Link from "next/link";

export default function Platform() {
  const phases = [
    {
      step: "01",
      title: "Discover",
      subtitle: "Universal Intake & Extraction",
      desc: "Upload PDFs, scanned annexures (auto-processed via Tesseract OCR), multi-sheet Excel schedules, Word templates, and .eml/.msg tender emails. Capivue classifies document roles and extracts every substantive and administrative obligation with page-level traceability.",
      artifact: "Normalized Requirements Ledger",
      icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
    },
    {
      step: "02",
      title: "Qualify",
      subtitle: "Risk X-Ray & Bid Win Assessment",
      desc: "Before committing weeks of pre-sales effort, Capivue cross-examines every requirement against your structured Bidder Profile across 8 risk dimensions. Surface disqualifying clauses and auto-generate a Deduplicated Assumptions Register to shield fixed-price margins.",
      artifact: "0–100 Bid Strength Score & Assumptions Register",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      step: "03",
      title: "Strategize",
      subtitle: "Win Strategy Blueprint",
      desc: "Transform risk and capability insights into a governed Win Strategy Blueprint. Define your executive narrative arc, map buyer concerns across CIO, CISO, COO, and CFO personas, and approve section-by-section drafting instructions.",
      artifact: "Executive-Approved Win Strategy Blueprint",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      step: "04",
      title: "Build",
      subtitle: "Grounded Drafting & Modeling",
      desc: "While Capivue drafts rich-text sections grounded in your Knowledge Repository, the Deal Room computes phased FTE allocations, onshore/offshore blended rates, and 20% contingency buffers—synchronizing directly with the Sprint Planner.",
      artifact: "Cited Proposal Sections & 5-Tab Commercial Model",
      icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
    },
    {
      step: "05",
      title: "Submit",
      subtitle: "Multi-Document Submission Pack",
      desc: "Route final section reviews to Subject Matter Experts via Microsoft Teams Adaptive Cards, manage multiple submission documents per pursuit, and export a complete, audit-ready .zip submission package.",
      artifact: "Complete Submission Pack (.docx, .pptx, .xlsx, .zip)",
      icon: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
    }
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      
      {/* 1. DARK-MODE ARCHITECTURAL HERO */}
      <section className="bg-[#0B1220] pt-24 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#0EA5E9 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[#0EA5E9] text-xs font-semibold uppercase tracking-wider mb-6">
              Platform Architecture
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              One governed operating system for complex enterprise bids.
            </h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Most AI tools stop at drafting isolated paragraphs. Capivue orchestrates the entire revenue pursuit—connecting multi-format intake, 8-dimension compliance auditing, commercial margin modeling, and capacity-planned Agile delivery in a single system of record.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/request-demo" className="bg-[#0EA5E9] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-sky-400 transition-all shadow-lg shadow-[#0EA5E9]/20 text-center">
                Book Enterprise Demo
              </Link>
              <Link href="/security" className="bg-transparent border border-slate-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-slate-800 transition-all text-center">
                Explore Security Architecture
              </Link>
            </div>
          </div>

          {/* Architecture Node Diagram */}
          <div className="relative">
            <div className="bg-[#1E293B] rounded-2xl border border-slate-700 p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="text-center">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 block">Inputs</span>
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded border border-slate-600">PDF/OCR</span>
                    <span className="bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded border border-slate-600">XLSX</span>
                    <span className="bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded border border-slate-600">SharePoint</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <svg className="w-6 h-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                </div>
                <div className="bg-[#0B1220] border border-[#0EA5E9]/30 rounded-xl p-4 text-center">
                  <span className="text-[#0EA5E9] font-bold text-sm">Capivue Core Engine</span>
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    <span className="text-xs text-slate-400 bg-slate-800/50 py-1 rounded">Risk X-Ray</span>
                    <span className="text-xs text-slate-400 bg-slate-800/50 py-1 rounded">Deal Room</span>
                    <span className="text-xs text-slate-400 bg-slate-800/50 py-1 rounded">Sprint Planner</span>
                    <span className="text-xs text-slate-400 bg-slate-800/50 py-1 rounded">Proposal Studio</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <svg className="w-6 h-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                </div>
                <div className="text-center">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 block">Outputs</span>
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs px-3 py-1 rounded">Submission Pack</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE 5-PHASE LIFECYCLE (STICKY SPLIT) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">End-to-End Workflow</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">
            Five governed phases. Zero disconnected spreadsheets.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Sticky Left Column */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="sticky top-32 bg-[#0B1220] rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
              <div className="bg-[#1E293B] px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-400/80"></div>
              </div>
              <div className="p-8">
                <div className="text-[#0EA5E9] font-mono text-sm mb-4">// Live Pipeline Preview</div>
                <div className="space-y-4">
                  {phases.map((p, i) => (
                    <div key={i} className="flex items-center gap-3 opacity-60">
                      <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-400 border border-slate-700">{p.step}</div>
                      <div className="flex-1 h-2 bg-slate-800 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Scrolling Right Column */}
          <div className="lg:col-span-7 space-y-8">
            {phases.map((phase, i) => (
              <div key={i} className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <svg className="w-7 h-7 text-[#1E40AF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={phase.icon} />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phase {phase.step}</div>
                    <h3 className="text-2xl font-bold text-[#0B1220]">{phase.title}</h3>
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-[#1E40AF] mb-3">{phase.subtitle}</h4>
                <p className="text-slate-600 leading-relaxed mb-6">{phase.desc}</p>
                
                <div className="bg-[#F8FAFC] p-4 rounded-lg border border-slate-200 inline-block">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Key Artifact Generated</span>
                  <span className="text-sm font-semibold text-[#0B1220]">{phase.artifact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DEEP-DIVE MODULE NAVIGATION GRID (BENTO LAYOUT) */}
      <section className="py-24 px-6 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">
              Explore the Core Engines
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Dive into the individual modules that power the Capivue lifecycle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Tile 1: Deal Room */}
            <Link href="/platform/deal-room" className="group bg-[#F8FAFC] rounded-2xl border border-slate-200 p-8 hover:shadow-md transition-shadow flex flex-col justify-between min-h-[300px]">
              <div>
                <h3 className="text-2xl font-bold text-[#0B1220] mb-2 group-hover:text-[#1E40AF]">Deal Room</h3>
                <p className="text-slate-600 mb-6 text-sm">Interactive margin simulator and Goal-Seek pricing engine.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="text-xs text-slate-500 mb-2">Onshore / Offshore Mix</div>
                <div className="w-full bg-slate-100 h-2 rounded-full mb-2"><div className="bg-[#0EA5E9] h-2 rounded-full w-[30%]"></div></div>
                <div className="flex justify-between text-xs font-medium text-slate-700">
                  <span>30% Onshore</span>
                  <span>70% Offshore</span>
                </div>
              </div>
            </Link>

            {/* Tile 2: Risk X-Ray */}
            <Link href="/platform/risk-xray" className="group bg-[#F8FAFC] rounded-2xl border border-slate-200 p-8 hover:shadow-md transition-shadow flex flex-col justify-between min-h-[300px]">
              <div>
                <h3 className="text-2xl font-bold text-[#0B1220] mb-2 group-hover:text-[#1E40AF]">Risk X-Ray</h3>
                <p className="text-slate-600 mb-6 text-sm">8-dimension compliance auditing and deal-breaker extraction.</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full border-4 border-[#0EA5E9] flex items-center justify-center">
                  <span className="text-xl font-extrabold text-[#0B1220]">84<span className="text-xs text-slate-500">/100</span></span>
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0B1220]">Bid Strength Score</div>
                  <div className="text-xs text-slate-500">Go / No-Go Ready</div>
                </div>
              </div>
            </Link>

            {/* Tile 3: Sprint Planner */}
            <Link href="/platform/sprint-planner" className="group bg-[#F8FAFC] rounded-2xl border border-slate-200 p-8 hover:shadow-md transition-shadow flex flex-col justify-between min-h-[300px]">
              <div>
                <h3 className="text-2xl font-bold text-[#0B1220] mb-2 group-hover:text-[#1E40AF]">Sprint Planner</h3>
                <p className="text-slate-600 mb-6 text-sm">Capacity-planned Agile roadmaps synchronized with commercials.</p>
              </div>
              <div className="flex items-end gap-1 h-16">
                {[40, 60, 80, 100, 90, 70, 50].map((h, i) => (
                  <div key={i} className="flex-1 bg-[#1E40AF]/20 rounded-t-sm relative group-hover:bg-[#1E40AF]/40 transition-colors" style={{ height: `${h}%` }}>
                  </div>
                ))}
              </div>
              <div className="text-xs text-slate-500 mt-2 text-center">8.0 FTEs · 80 Days/Sprint</div>
            </Link>

            {/* Tile 4: Capability Grounding */}
            <Link href="/platform/capability-grounding" className="group bg-[#F8FAFC] rounded-2xl border border-slate-200 p-8 hover:shadow-md transition-shadow flex flex-col justify-between min-h-[300px]">
              <div>
                <h3 className="text-2xl font-bold text-[#0B1220] mb-2 group-hover:text-[#1E40AF]">Capability Grounding</h3>
                <p className="text-slate-600 mb-6 text-sm">Strict evidence traceability with zero hallucinations.</p>
              </div>
              <div className="bg-[#0B1220] p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="text-[10px] text-slate-400 font-mono">SOURCE_FOUND.PDF</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span className="text-[10px] text-amber-400 font-mono">[requires validation]</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. CLOSING BANNER */}
      <section className="bg-[#0F172A] py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            See all five phases working together on your own RFP.
          </h2>
          <p className="text-lg text-slate-400 mb-10">
            Experience how Capivue takes a complex tender from raw upload to a CFO-approved Submission Pack.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/request-demo" className="bg-[#0EA5E9] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-sky-400 transition-colors">
              Book an Enterprise Demo
            </Link>
            <Link href="/pricing" className="bg-transparent border border-slate-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-slate-800 transition-colors">
              Start Free Pilot
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}