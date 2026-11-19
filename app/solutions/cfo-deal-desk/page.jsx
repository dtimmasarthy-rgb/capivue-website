"use client";
import { useState } from "react";
import Link from "next/link";

export default function CFODealDesk() {
  const [mix, setMix] = useState("30/70");
  const [buffer, setBuffer] = useState("20");

  // Simulator Math (Illustrative)
  const baseDays = 525;
  const qaOverhead = 15;
  const pmOverhead = 10;
  const totalOverheadDays = baseDays * ((qaOverhead + pmOverhead) / 100);
  const totalEffortDays = baseDays + totalOverheadDays;

  // Rates (Illustrative blended daily rates for simulation)
  const onshoreRate = 1200;
  const offshoreRate = 400;

  const mixSplit = mix === "30/70" ? { on: 0.3, off: 0.7 } : { on: 0.15, off: 0.85 };
  const blendedDailyRate = (mixSplit.on * onshoreRate) + (mixSplit.off * offshoreRate);
  
  const subtotalCost = totalEffortDays * blendedDailyRate;
  const contingencyMultiplier = 1 + (parseInt(buffer) / 100);
  const finalTCV = subtotalCost * contingencyMultiplier;

  return (
    <div className="bg-[#FAFAFA] min-h-screen text-slate-800 font-sans selection:bg-[#1E40AF] selection:text-white">
      
      {/* SECTION 1: EDITORIAL SPLIT HERO + LIVE MARGIN CARD */}
      <section className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1E40AF] text-xs font-bold uppercase tracking-wider mb-6">
              For CFOs & Deal Desk Leaders
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B1220] mb-6 leading-[1.1]">
              Enforce margin floors and contractual guardrails before every bid leaves the building.
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
              Fixed-price contracts rarely fail because of base development rates—they fail because of unpriced QA overheads, double-counted staffing, and unstated technical assumptions buried in 300-page requirement documents. Capivue replaces fragile estimation spreadsheets with governed blended rate cards, automated contingency buffers, and a Deduplicated Assumptions Register.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/request-demo" className="bg-[#1E40AF] text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-blue-900 transition-all shadow-md shadow-[#1E40AF]/20 text-center">
                Request Enterprise Demo
              </Link>
              <Link href="/solutions/solution-architects" className="bg-white text-slate-900 border border-slate-300 px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-slate-50 transition-all shadow-sm text-center">
                For Solution Architects →
              </Link>
            </div>
            <div className="text-xs font-mono text-slate-500 tracking-wide uppercase">
              Multi-Currency Blended Rate Cards • 15% QA + 10% PM Governance • Deduplicated Assumptions Register
            </div>
          </div>

          {/* Right Visual: Deal Room Financial Telemetry */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
              <div className="text-sm font-bold text-[#0B1220]">Deal Room · Financial Governance Summary</div>
              <div className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-emerald-100 text-emerald-700 border border-emerald-200">Margin Floor Verified</div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-[#FAFAFA] border border-slate-200 rounded-xl p-4">
                <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">Derived Delivery Effort</div>
                <div className="text-slate-900 font-semibold text-sm">525 Person-Days <span className="text-slate-500 font-normal">(Base Dev + 15% QA + 10% PM Governance)</span></div>
              </div>
              <div className="bg-[#FAFAFA] border border-slate-200 rounded-xl p-4">
                <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">Blended Rate Structure</div>
                <div className="text-slate-900 font-semibold text-sm">30% Onshore / 70% Offshore · 8-Hour Workday</div>
                <div className="text-xs text-slate-500 mt-1">USD, INR, EUR, GBP, AUD</div>
              </div>
              <div className="bg-[#FAFAFA] border border-slate-200 rounded-xl p-4">
                <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">Risk Contingency Buffer</div>
                <div className="text-amber-600 font-semibold text-sm">+20% Contingency Floor <span className="text-slate-500 font-normal">(Low-to-High TCV Band Locked)</span></div>
              </div>
              <div className="bg-[#FAFAFA] border border-slate-200 rounded-xl p-4">
                <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">Contractual Protection</div>
                <div className="text-emerald-600 font-semibold text-sm">45 Deduplicated Assumptions <span className="text-slate-500 font-normal">(100% Mapped to Requirement IDs)</span></div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: WHERE FIXED-PRICE DEALS BLEED MARGIN */}
      <section className="py-20 px-6 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-bold text-red-500 uppercase tracking-wider mb-3">Financial Governance Gaps</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">
              Broken Excel macros and unstated assumptions cost more than aggressive discounting.
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              When Deal Desk teams review complex RFPs, Statements of Work (SOWs), and multi-year service tenders under deadline pressure, three recurring blind spots erode gross margin:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200">
              <div className="text-3xl font-mono font-bold text-slate-300 mb-4">01</div>
              <h3 className="text-lg font-bold text-[#0B1220] mb-3">Unpriced Overheads & Staffing Math Errors</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Pre-sales spreadsheets frequently omit dedicated Quality Assurance and Project Governance ratios—or mistakenly sum FTEs across sequential phases instead of computing peak pod headcount.</p>
            </div>
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200">
              <div className="text-3xl font-mono font-bold text-slate-300 mb-4">02</div>
              <h3 className="text-lg font-bold text-[#0B1220] mb-3">Hidden Contractual & SLA Liabilities</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Punitive SLA service credits, legacy data migration responsibilities, and 24/7 support mandates hide inside technical annexures—creating unbudgeted post-award delivery costs.</p>
            </div>
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200">
              <div className="text-3xl font-mono font-bold text-slate-300 mb-4">03</div>
              <h3 className="text-lg font-bold text-[#0B1220] mb-3">Missing or Duplicate Scope Assumptions</h3>
              <p className="text-slate-600 text-sm leading-relaxed">When assumptions are scattered across individual engineering emails, critical dependencies never make it into the formal proposal—leaving the firm unable to claim change requests when client data or APIs are unready.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FOUR FINANCIAL & CONTRACTUAL CONTROLS */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">Financial & Contractual Controls</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">Four core controls built for Deal Desk.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="text-xs font-bold text-[#0EA5E9] mb-2">01 · Governed Onshore / Offshore Blended Rate Cards</div>
            <h3 className="text-xl font-bold text-[#0B1220] mb-3">Standardize rate math across five global currencies.</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Configure approved workspace rate cards in USD, INR, EUR, GBP, and AUD. Capivue dynamically calculates blended daily rates using your exact delivery mix (such as 30% Onshore / 70% Offshore) multiplied by an 8-hour workday—eliminating manual formula overrides.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="text-xs font-bold text-[#0EA5E9] mb-2">02 · Automated QA, Governance & Peak FTE Layering</div>
            <h3 className="text-xl font-bold text-[#0B1220] mb-3">Bottom-up effort modeling with zero resource double-counting.</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Capivue distributes requirement effort across Discovery, Build, SIT, UAT, Go-Live, and Hypercare, computes peak headcount per role using max(FTE) logic, and automatically layers 15% QA and 10% Governance/PM overhead onto base development effort.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="text-xs font-bold text-[#0EA5E9] mb-2">03 · Risk-Adjusted Contingency Bands & Burn-Rate Tracking</div>
            <h3 className="text-xl font-bold text-[#0B1220] mb-3">Tie commercial contingency directly to requirement risk.</h3>
            <p className="text-slate-600 text-sm leading-relaxed">When Risk X-Ray flags conditional requirements ("Yes with Conditions"), Deal Desk applies a configurable Contingency Buffer (default 20%) to establish defensible low-to-high Total Contract Value (TCV) bands alongside phase-by-phase weekly burn rates.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="text-xs font-bold text-[#0EA5E9] mb-2">04 · Deduplicated Assumptions Register (Scope Creep Shield)</div>
            <h3 className="text-xl font-bold text-[#0B1220] mb-3">Convert every technical dependency into an enforceable bid condition.</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Capivue extracts implicit client obligations (such as legacy schema validation, synchronous API availability, and environment readiness), deduplicates overlapping items, and links each assumption to its exact requirement ID for immediate inclusion in the SOW.</p>
          </div>
        </div>
      </section>

      {/* SECTION 3.5: INTERACTIVE MARGIN SIMULATOR (DARK OBSIDIAN) */}
      <section className="py-20 px-6 bg-[#090D16] text-white border-y border-slate-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">Interactive Margin Simulator</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Model blended rates and contingency bands instantly.</h2>
          </div>

          <div className="bg-[#0F1423] border border-slate-700 rounded-2xl p-6 md:p-10 shadow-2xl flex flex-col md:flex-row gap-8">
            {/* Controls */}
            <div className="md:w-1/3 space-y-6">
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Delivery Mix</label>
                <div className="flex flex-col gap-2">
                  <button onClick={() => setMix("30/70")} className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-all text-left ${mix === "30/70" ? "bg-[#1E40AF] border-[#1E40AF] text-white" : "bg-transparent border-slate-600 text-slate-300 hover:bg-slate-800"}`}>30% Onshore / 70% Offshore</button>
                  <button onClick={() => setMix("15/85")} className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-all text-left ${mix === "15/85" ? "bg-[#1E40AF] border-[#1E40AF] text-white" : "bg-transparent border-slate-600 text-slate-300 hover:bg-slate-800"}`}>15% Onshore / 85% Offshore</button>
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Contingency Buffer</label>
                <div className="flex gap-2">
                  {["10", "20", "25"].map((val) => (
                    <button key={val} onClick={() => setBuffer(val)} className={`flex-1 px-3 py-2 rounded-lg text-sm font-semibold border transition-all ${buffer === val ? "bg-[#F59E0B] border-[#F59E0B] text-slate-900" : "bg-transparent border-slate-600 text-slate-300 hover:bg-slate-800"}`}>
                      {val}%
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Output Display */}
            <div className="md:w-2/3 bg-[#1A2235] border border-slate-700 rounded-xl p-6 md:p-8">
              <div className="grid grid-cols-2 gap-6 mb-6 pb-6 border-b border-slate-700">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Total Effort</div>
                  <div className="text-xl font-mono text-white">{totalEffortDays.toLocaleString()} <span className="text-sm font-sans text-slate-400">Days</span></div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Blended Rate</div>
                  <div className="text-xl font-mono text-white">${blendedDailyRate.toFixed(2)} <span className="text-sm font-sans text-slate-400">/ Day</span></div>
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-2">Estimated Total Contract Value (TCV)</div>
                <div className="text-4xl font-mono font-bold text-[#0EA5E9] mb-2">
                  ${finalTCV.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
                <div className="text-xs text-slate-400">Includes {buffer}% contingency risk buffer. Based on 525 base person-days with 15% QA + 10% PM overhead.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE 5-TAB CFO AUDIT WORKBOOK */}
      <section className="py-20 px-6 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">Executive Audit Deliverable</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">One-click 5-tab Commercial & Risk Workbook ready for Deal Desk sign-off.</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Export an audit-ready .xlsx package before any proposal or SOW goes to executive leadership.</p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            <div className="bg-[#F8FAFC] border border-slate-200 p-4 rounded-xl">
              <div className="text-xs font-mono font-bold text-[#1E40AF] mb-2">TAB 01</div>
              <h4 className="font-bold text-[#0B1220] text-sm mb-1">Executive Summary</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Go/No-Go verdict, substantive vs. administrative requirement counts, total effort in person-days, and headline TCV cost bands.</p>
            </div>
            <div className="bg-[#F8FAFC] border border-slate-200 p-4 rounded-xl">
              <div className="text-xs font-mono font-bold text-[#1E40AF] mb-2">TAB 02</div>
              <h4 className="font-bold text-[#0B1220] text-sm mb-1">Commercial Breakdown</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Phase-by-phase effort distribution, low/high cost ranges, and weekly burn rates from Discovery through Hypercare.</p>
            </div>
            <div className="bg-[#F8FAFC] border border-slate-200 p-4 rounded-xl">
              <div className="text-xs font-mono font-bold text-[#1E40AF] mb-2">TAB 03</div>
              <h4 className="font-bold text-[#0B1220] text-sm mb-1">Top Risks Register</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Ranked legal, regulatory, operational, and financial risks paired with concrete mitigation strategies.</p>
            </div>
            <div className="bg-[#F8FAFC] border border-slate-200 p-4 rounded-xl">
              <div className="text-xs font-mono font-bold text-[#1E40AF] mb-2">TAB 04</div>
              <h4 className="font-bold text-[#0B1220] text-sm mb-1">Deduplicated Assumptions</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Consolidated technical and commercial assumptions mapped directly to source requirement IDs.</p>
            </div>
            <div className="bg-[#F8FAFC] border border-slate-200 p-4 rounded-xl">
              <div className="text-xs font-mono font-bold text-[#1E40AF] mb-2">TAB 05</div>
              <h4 className="font-bold text-[#0B1220] text-sm mb-1">Requirements & Costing Matrix</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Line-by-line audit of every extracted obligation with complexity rating, confidence score, blended day rate, and low/high cost estimates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CLOSING BANNER */}
      <section className="py-24 px-6 bg-[#090D16] text-center border-t border-slate-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            Give your CFO and Deal Desk complete financial visibility on every pursuit.
          </h2>
          <p className="text-lg text-slate-400 mb-10">
            See how Capivue turns complex requirement documents into audited rate-card rollups and protected margins.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/request-demo" className="bg-[#0EA5E9] text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-sky-400 transition-colors shadow-lg shadow-[#0EA5E9]/20">
              Book an Enterprise Demo
            </Link>
            <Link href="/solutions/solution-architects" className="bg-transparent border border-slate-600 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-slate-800 transition-colors">
              Explore For Solution Architects →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}