"use client";
import Link from "next/link";

export default function CommercialIntelligence() {
  return (
    <div className="bg-[#0F172A] min-h-screen text-slate-200 font-sans selection:bg-emerald-500 selection:text-white">
      
      {/* SECTION 1: DARK SLATE & EMERALD HERO */}
      <section className="pt-24 pb-20 px-6 max-w-6xl mx-auto border-b border-slate-800">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
            Commercial & Delivery Intelligence
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            Price complex deliveries with CFO-grade precision—and prove you can build them.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed max-w-3xl mx-auto">
            Enterprise deals lose margin in the handoff between Pre-Sales, Deal Desk, and Delivery. Capivue converts extracted requirement complexity into phased FTE allocations, blended onshore/offshore rate cards, risk-adjusted Total Contract Value (TCV) bands, and deterministic Agile sprint schedules before a single commitment is signed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <Link href="/request-demo" className="bg-emerald-500 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 text-center">
              Request Enterprise Demo
            </Link>
            <Link href="/solutions/bid-governance" className="bg-transparent border border-slate-600 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-slate-800 transition-all text-center">
              Explore Bid Governance →
            </Link>
          </div>
          <div className="text-xs font-mono text-slate-500 tracking-wide uppercase">
            Zero Double-Counted FTEs • 5-Currency Blended Rate Cards • Deterministic Sprint Capacity
          </div>
        </div>
      </section>

      {/* SECTION 2: CONNECTED PIPELINE */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3">The Capivue Mechanism</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            One unified math engine linking effort, margin, and engineering capacity.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="bg-[#1E293B] border border-slate-700 rounded-2xl p-8 flex flex-col hover:border-emerald-500/50 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-emerald-400 mb-6 font-bold text-lg">1</div>
            <h3 className="text-xl font-bold text-white mb-3">Peak FTE & Phased Staffing Modeling (max(FTE))</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Capivue distributes requirement effort across Discovery, Build, SIT, UAT, Go-Live, and Hypercare. Rather than inflating headcount by summing sequential phases, the engine computes peak staffing per role (Solution Architect, Senior Developer, Developer, QA Engineer, Business Analyst, Project Manager) using max(FTE) logic.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-[#1E293B] border border-slate-700 rounded-2xl p-8 flex flex-col hover:border-emerald-500/50 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-emerald-400 mb-6 font-bold text-lg">2</div>
            <h3 className="text-xl font-bold text-white mb-3">Blended Onshore/Offshore Rates & Governance Overheads</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Manage dynamic rate cards across USD, INR, EUR, GBP, and AUD. Capivue applies your target delivery mix (such as 30% Onshore / 70% Offshore) across an 8-hour workday, layers 15% QA and 10% PM Governance overhead onto base development days, and applies a configurable Contingency Buffer (default 20%) to establish defensible low-to-high TCV bands.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-[#1E293B] border border-slate-700 rounded-2xl p-8 flex flex-col hover:border-emerald-500/50 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-emerald-400 mb-6 font-bold text-lg">3</div>
            <h3 className="text-xl font-bold text-white mb-3">Synchronized Agile Sprint Capacity Planning</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Every staffing change in the Deal Room flows directly into the Sprint Planner. Configure sprint cadences from 1 to 6 weeks (defaulting to 2 weeks) and validate per-sprint capacity (Peak FTEs × 5 Working Days × Sprint Weeks)—preventing Sales from committing to impossible go-live dates.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: EXECUTIVE DELIVERABLES */}
      <section className="py-20 px-6 bg-[#0B1220] border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3">Executive Deliverables</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Three synchronized exports ready for deal desk sign-off.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Export 1 */}
            <div className="bg-[#1E293B] border border-slate-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-700">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <span className="text-xs font-mono font-bold bg-slate-800 px-2 py-1 rounded text-slate-300">.xlsx</span>
              </div>
              <h3 className="font-bold text-white mb-2">5-Tab CFO Commercial Workbook</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Executive Summary, Phase-by-Phase Commercial Breakdown & Weekly Burn Rate, Ranked Risks, Deduplicated Assumptions Register, and Line-by-Line Requirements Costing.</p>
            </div>

            {/* Export 2 */}
            <div className="bg-[#1E293B] border border-slate-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-700">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <span className="text-xs font-mono font-bold bg-slate-800 px-2 py-1 rounded text-slate-300">.xlsx</span>
              </div>
              <h3 className="font-bold text-white mb-2">Sprint Delivery Plan Workbook</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Sprint-by-sprint capacity days vs. committed effort days, role allocation, and mapped requirement stories.</p>
            </div>

            {/* Export 3 */}
            <div className="bg-[#1E293B] border border-slate-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-700">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <span className="text-xs font-mono font-bold bg-slate-800 px-2 py-1 rounded text-slate-300">.docx</span>
              </div>
              <h3 className="font-bold text-white mb-2">Delivery Design Document</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Formatted implementation roadmap, phase schedules, and sprint execution tables ready to embed into your proposal or SOW.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CLOSING CTA */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
          Eliminate unpriced scope creep and impossible delivery dates.
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/request-demo" className="bg-emerald-500 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-emerald-400 transition-all shadow-md shadow-emerald-500/20">
            Book an Enterprise Demo
          </Link>
          <Link href="/solutions/bid-governance" className="bg-transparent border border-slate-600 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-slate-800 transition-all">
            Explore Bid Governance →
          </Link>
        </div>
      </section>

    </div>
  );
}