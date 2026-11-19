"use client";
import { useState } from "react";
import Link from "next/link";

export default function ManagedServices() {
  const [activeWave, setActiveWave] = useState(1);

  const waves = [
    {
      id: 1,
      title: "Wave 01 · Knowledge Transfer & Shadowing",
      timeframe: "Weeks 1–6",
      focus: "System handover, runbook audit, environment access verification, and ITSM tooling onboarding.",
      staffing: "Transition Lead, Solution Architect, and L2/L3 Shadow Pods modeled via peak max(FTE) logic without inflating downstream run headcount.",
      guardrail: "Flags missing legacy documentation and third-party handover delays as explicit contractual assumptions in your proposal."
    },
    {
      id: 2,
      title: "Wave 02 · Post-Go-Live Hypercare Stabilization",
      timeframe: "Weeks 7–10",
      focus: "Elevated incident response, defect triage, batch job monitoring, and SLA burn-in period.",
      staffing: "Peak stabilization pod (30% Onshore / 70% Offshore blended rate card) plus 15% QA and 10% Governance/PM overhead.",
      guardrail: "Isolates Hypercare staffing from steady-state support rates so peak stabilization costs are never absorbed for free."
    },
    {
      id: 3,
      title: "Wave 03 · Steady-State Run & SLA Operations",
      timeframe: "Months 3–36+",
      focus: "24/7 L1/L2/L3 ticket resolution, preventive maintenance, minor enhancements, and monthly SLA compliance reporting.",
      staffing: "Optimized offshore-heavy delivery pod across USD, INR, EUR, GBP, or AUD with a configurable 20% Contingency Buffer.",
      guardrail: "Cross-checks uptime guarantees (99.9%+) and penalty caps directly against your verified Bidder Profile."
    }
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-800 font-sans selection:bg-[#1E40AF] selection:text-white">
      
      {/* SECTION 1: DARK OBSIDIAN HERO + LIVE AMS TELEMETRY */}
      <section className="bg-[#090D16] pt-24 pb-20 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[#0EA5E9] text-xs font-bold uppercase tracking-wider mb-6">
              For Managed Services & AMS
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              Protect multi-year AMS margins from day one.
            </h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl">
              Annuity and Managed Services requirement documents hide razor-thin margin traps inside transition schedules and SLA annexures. Capivue separates Hypercare and steady-state support from core build effort, flags aggressive 24/7 SLA penalty clauses, and locks in protective operational assumptions before you price the deal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/request-demo" className="bg-[#1E40AF] text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-[#1E40AF]/30 text-center">
                Request Enterprise Demo
              </Link>
              <Link href="/solutions/consulting" className="bg-transparent border border-slate-600 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-slate-800 transition-all text-center">
                Explore Consulting Firms →
              </Link>
            </div>
            <div className="text-xs font-mono text-slate-500 tracking-wide uppercase">
              Transition Wave Isolation • 8-Dimension SLA Risk X-Ray • Deduplicated Operational Assumptions
            </div>
          </div>

          {/* Right Visual: AMS Contract & SLA Telemetry */}
          <div className="bg-[#0F1423] rounded-2xl border border-slate-700 shadow-2xl overflow-hidden relative">
            <div className="bg-slate-800/50 px-4 py-3 border-b border-slate-700 flex justify-between items-center">
              <div className="text-xs font-mono text-slate-300">36-Month Managed Portal Operations</div>
              <div className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-amber-900/40 text-amber-400 border border-amber-500/30">Bid With Conditions</div>
            </div>
            
            <div className="p-6 md:p-8 space-y-4">
              <div className="bg-[#1A2235] border border-slate-700 rounded-lg p-4">
                <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Support & Operations Risk Flagged · SLA Annexure §4.2</div>
                <p className="text-sm text-slate-300 leading-relaxed">24/7 L1/L2 response mandate with 99.9% uptime SLA and uncapped service-credit deductions.</p>
              </div>

              <div className="bg-[#1A2235] border border-slate-700 rounded-lg p-4">
                <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Phased Staffing Separation · Deal Room Rollup</div>
                <p className="text-sm text-slate-300 leading-relaxed">Hypercare stabilization modeled independently from steady-state offshore support pods (30/70 mix + 20% contingency).</p>
              </div>

              <div className="bg-[#1A2235] border border-slate-700 rounded-lg p-4">
                <div className="text-[10px] uppercase tracking-wider text-emerald-500 mb-1">Auto-Generated Bid Condition · Assumptions Register</div>
                <p className="text-sm text-slate-300 leading-relaxed">SLA penalties commence only after 4-week Hypercare burn-in and Client sign-off on baseline ticket volume.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: THE AMS MARGIN TRAP */}
      <section className="py-20 px-6 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-bold text-red-500 uppercase tracking-wider mb-3">The AMS Margin Trap</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">
              Annuity deals bleed profit when transition waves and SLA penalties go unpriced.
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Unlike one-off build projects, a mispriced Managed Services requirement locks your delivery organization into years of margin erosion. Capivue catches the three most expensive AMS blind spots before submission:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200 flex flex-col">
              <div className="text-3xl font-mono font-bold text-slate-300 mb-4">01</div>
              <h3 className="text-lg font-bold text-[#0B1220] mb-3">Unpriced Knowledge Transfer & Reverse Shadowing</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Incumbent vendors rarely leave clean runbooks. When bid teams fail to isolate Transition and Hypercare staffing from steady-state support, senior engineers absorb months of unpaid stabilization work.</p>
            </div>
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200 flex flex-col">
              <div className="text-3xl font-mono font-bold text-slate-300 mb-4">02</div>
              <h3 className="text-lg font-bold text-[#0B1220] mb-3">Punitive 24/7 SLA & Uptime Clauses</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Aggressive P1 resolution timers, weekend on-call coverage, and steep monthly service-credit deductions buried inside operational annexures quietly wipe out thin annuity margins.</p>
            </div>
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200 flex flex-col">
              <div className="text-3xl font-mono font-bold text-slate-300 mb-4">03</div>
              <h3 className="text-lg font-bold text-[#0B1220] mb-3">Blurred Line Between Run & Minor Enhancements</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Without explicit contractual boundaries in your Assumptions Register, buyers treat net-new feature requests and regulatory patches as included "maintenance" under fixed-fee support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: INTERACTIVE WAVE MODELER */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">Phased AMS Architecture</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">Separate handover spikes from steady-state run economics.</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">Explore how Capivue’s Deal Room and Risk X-Ray structure multi-stage Managed Services pursuits.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Tabs */}
          <div className="lg:w-1/3 flex flex-col gap-3 w-full">
            {waves.map((wave) => (
              <button
                key={wave.id}
                onClick={() => setActiveWave(wave.id)}
                className={`text-left p-5 rounded-xl border transition-all duration-200 ${
                  activeWave === wave.id 
                    ? "bg-[#F8FAFC] border-[#1E40AF] shadow-sm ring-1 ring-[#1E40AF]/20" 
                    : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${activeWave === wave.id ? "bg-[#1E40AF] text-white" : "bg-slate-200 text-slate-600"}`}>
                      0{wave.id}
                    </div>
                    <h3 className={`font-bold text-sm ${activeWave === wave.id ? "text-[#0B1220]" : "text-slate-600"}`}>{wave.title.split('·')[0]}</h3>
                  </div>
                  <div className={`text-xs pl-9 font-medium ${activeWave === wave.id ? "text-slate-500" : "text-slate-400"}`}>{wave.timeframe}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Content Panel */}
          <div className="lg:w-2/3 bg-white border border-slate-200 rounded-2xl p-8 md:p-10 w-full min-h-[300px] shadow-sm flex flex-col justify-center">
            <div className="mb-6">
              <span className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-2 block">
                Wave 0{activeWave} · {waves.find(w => w.id === activeWave)?.timeframe}
              </span>
              <h3 className="text-2xl font-bold text-[#0B1220] mb-4 leading-tight">
                {waves.find(w => w.id === activeWave)?.title.split('·')[1]}
              </h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Operational Focus</div>
                <p className="text-slate-700 text-sm leading-relaxed">{waves.find(w => w.id === activeWave)?.focus}</p>
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Deal Room Staffing Model</div>
                <p className="text-slate-700 text-sm leading-relaxed">{waves.find(w => w.id === activeWave)?.staffing}</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                <div className="text-[10px] font-bold text-amber-700 uppercase tracking-widest mb-1 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  Margin & SLA Guardrail
                </div>
                <p className="text-amber-900 text-sm leading-relaxed">{waves.find(w => w.id === activeWave)?.guardrail}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TWO CORE GOVERNANCE ENGINES */}
      <section className="py-20 px-6 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Engine 1 */}
            <div>
              <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">01 · Support & Operations Risk X-Ray</div>
              <h3 className="text-2xl font-bold text-[#0B1220] mb-4">Surface 24/7 SLA penalties and uptime traps automatically.</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Capivue audits every operational and support requirement across multi-hundred-page tender documents, scanned PDFs (via OCR), and Excel SLA matrices—flagging high-risk response windows, penalty deductions, and mandatory staffing certifications before Deal Desk approves pricing.
              </p>
              <Link href="/platform/risk-xray" className="text-[#1E40AF] font-semibold hover:underline text-sm inline-flex items-center gap-1">
                Explore Risk X-Ray <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>

            {/* Engine 2 */}
            <div>
              <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">02 · Deduplicated Assumptions & Grounded Runbooks</div>
              <h3 className="text-2xl font-bold text-[#0B1220] mb-4">Lock in protective scope boundaries and cite proven AMS metrics.</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Automatically compile a Deduplicated Assumptions Register defining ticket volume baselines, client environment access, and change-request boundaries—while grounding your Managed Services proposal in verified past operational SLAs from your Knowledge Repository (and flagging gaps with <span className="bg-amber-100 text-amber-800 px-1 rounded font-mono text-xs">[requires validation]</span>).
              </p>
              <Link href="/platform/capability-grounding" className="text-[#1E40AF] font-semibold hover:underline text-sm inline-flex items-center gap-1">
                Explore Capability Grounding <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: EXECUTIVE DELIVERABLES & CLOSING CTA */}
      <section className="py-20 px-6 bg-[#0B1220] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">Executive Deliverables</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Three synchronized exports for AMS deal desk sign-off.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-800">
                <span className="text-xs font-mono font-bold bg-slate-800 px-2 py-1 rounded text-slate-300">.xlsx</span>
              </div>
              <h3 className="font-bold text-white mb-2">5-Tab CFO Commercial & Risk Workbook</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Phase-by-phase Hypercare vs. Steady-State effort, weekly burn rates, ranked SLA risks, and deduplicated assumptions.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-800">
                <span className="text-xs font-mono font-bold bg-slate-800 px-2 py-1 rounded text-slate-300">.docx</span>
              </div>
              <h3 className="font-bold text-white mb-2">Delivery Design Document</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Formatted transition waves, support governance model, and sprint execution schedules.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-800">
                <span className="text-xs font-mono font-bold bg-slate-800 px-2 py-1 rounded text-slate-300">.docx</span>
              </div>
              <h3 className="font-bold text-white mb-2">Cited Managed Services Proposal</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Strategy-locked narrative grounded in your past operational SLAs and certifications.</p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center border-t border-slate-800 pt-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            Stop signing multi-year AMS contracts with hidden SLA exposure.
          </h2>
          <p className="text-lg text-slate-400 mb-10">
            See how Capivue models phased support pods, isolates SLA risks, and protects annuity margins from day one.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/request-demo" className="bg-[#0EA5E9] text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-sky-400 transition-colors shadow-lg shadow-[#0EA5E9]/20">
              Book an Enterprise Demo
            </Link>
            <Link href="/solutions/consulting" className="bg-transparent border border-slate-600 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-slate-800 transition-colors">
              Explore Management Consulting →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}