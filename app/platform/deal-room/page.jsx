import Link from "next/link";
import Image from "next/image";

export default function DealRoom() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="pt-24 pb-16 px-6 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1E40AF] text-xs font-semibold uppercase tracking-wider mb-6">
          Commercial & Margin Intelligence Engine
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B1220] mb-6 max-w-4xl mx-auto leading-[1.1]">
          Price every bid with CFO-grade precision before you commit.
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Replace fragile, error-prone estimation spreadsheets with a governed financial modeling engine. Capivue translates requirement-level complexity into phased FTE allocations, blended onshore/offshore rate cards, and risk-adjusted Total Contract Value (TCV) bands—automatically.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <Link href="/request-demo" className="bg-[#1E40AF] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-900 transition-all shadow-lg shadow-[#1E40AF]/20 text-center">
            Request Enterprise Demo
          </Link>
          <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-lg text-lg font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
            Explore Sample Workbook
          </button>
        </div>
        {/* Micro-Trust Line */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-500">
          <span className="flex items-center gap-1"><span className="text-[#0EA5E9]">✓</span> Multi-Currency Rate Cards</span>
          <span className="flex items-center gap-1"><span className="text-[#0EA5E9]">✓</span> Automated QA & Governance Overheads</span>
          <span className="flex items-center gap-1"><span className="text-[#0EA5E9]">✓</span> Audit-Ready 5-Tab Excel Export</span>
        </div>
      </section>

      {/* 2. INTERACTIVE UI PREVIEW */}
      <section className="pb-16 px-6 max-w-5xl mx-auto">
        <div className="relative bg-[#0B1220] rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
          <div className="bg-[#1E293B] px-4 py-3 flex items-center gap-2 border-b border-slate-700">
            <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-400/80"></div>
            <div className="ml-4 bg-[#0B1220] text-xs text-slate-400 px-4 py-1 rounded-md flex-1 border border-slate-700 text-center">
              app.capivuetech.com/deal-room
            </div>
          </div>
          <div className="aspect-video relative">
            <Image src="/screenshots/Deal_Room_Dark.png" alt="Deal Room Dashboard" fill className="object-cover object-top" />
          </div>
        </div>
        
        {/* Callout Badges */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-[#0B1220] mb-2 text-sm">Zero Double-Counting</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Peak headcount computed via max(FTE) across sequential delivery phases.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-[#0B1220] mb-2 text-sm">Risk-Adjusted TCV Bands</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Low-to-high contract pricing driven by configurable contingency buffers.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-[#0B1220] mb-2 text-sm">100% Traceability</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Every dollar in the commercial summary links back to an extracted RFP clause.</p>
          </div>
        </div>
      </section>

      {/* 3. CORE ARCHITECTURE (METHODOLOGY) */}
      <section className="py-24 px-6 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">Financial Methodology</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">
              Eliminate the blind spots between technical scope and commercial pricing.
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Traditional proposal tools stop at drafting text, leaving Deal Desk and Finance teams to manually estimate effort in disconnected Excel sheets days before submission. Capivue embeds commercial governance directly into the RFP analysis pipeline.
            </p>
          </div>

          <div className="space-y-12">
            {/* Feature 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <span className="text-2xl font-extrabold text-[#1E40AF]">1</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0B1220] mb-3">Phased FTE & Peak Resource Modeling</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Capivue distributes requirement effort across Discovery, Build, SIT, UAT, Go-Live, and Hypercare. Instead of naively summing staff across overlapping stages, the engine computes peak headcount per role (Solution Architect, Senior Developer, Developer, QA Engineer, Business Analyst, Project Manager) using <strong className="text-[#0B1220]">max(FTE) logic</strong>—preventing inflated staffing estimates while preserving realistic phase timelines.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <span className="text-2xl font-extrabold text-[#1E40AF]">2</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0B1220] mb-3">Dynamic Onshore / Offshore Blended Rate Cards</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Configure workspace rate cards across USD, INR, EUR, GBP, and AUD. Capivue dynamically calculates blended daily rates using your target delivery ratio (such as 30% Onshore / 70% Offshore) multiplied by an 8-hour workday—allowing Deal Desk teams to test delivery-mix scenarios without rebuilding formulas.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <span className="text-2xl font-extrabold text-[#1E40AF]">3</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0B1220] mb-3">Automated Overheads & Risk Contingency Buffers</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Base development effort rarely reflects true delivery cost. Capivue automatically layers <strong className="text-[#0B1220]">15% Quality Assurance (QA)</strong> and <strong className="text-[#0B1220]">10% Project Governance/PM</strong> overhead onto base estimates, then applies a configurable Contingency Buffer (default 20%) to generate defensible low-to-high TCV bands and weekly burn-rate projections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINANCIAL GOVERNANCE & SCOPE PROTECTION */}
      <section className="py-24 px-6 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">Margin Protection</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">
              Built-in guardrails against fixed-price scope creep.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#0B1220] mb-3">Conditioned Pricing for High-Risk Clauses</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                When Capivue's Risk X-Ray flags a requirement as "Yes with Conditions" (such as legacy data migration or undocumented third-party APIs), the Deal Room ties those technical dependencies directly to your contingency buffer and Deduplicated Assumptions Register.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#0B1220] mb-3">Live Timeline & Burn-Rate Synchronization</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Any adjustment to phase duration or FTE allocation in the Deal Room immediately recalculates weekly burn rates and synchronizes with the Sprint Planner—ensuring Sales never signs off on a price that Delivery cannot execute.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CFO-READY EXPORT */}
      <section className="py-24 px-6 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">Executive Deliverable</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">
              A 5-tab Commercial & Risk Workbook ready for executive review.
            </h2>
            <p className="text-lg text-slate-600">
              Export a clean, structured .xlsx package in one click for internal Go/No-Go committees and Deal Desk approvals:
            </p>
          </div>

          <div className="space-y-3">
            {[
              { title: "Tab 1 — Executive Summary", desc: "Go/No-Go verdict, total effort in person-days, substantive vs. administrative requirement counts, and headline TCV cost bands." },
              { title: "Tab 2 — Commercial Breakdown", desc: "Phase-by-phase effort distribution, low/high cost ranges, and weekly burn rates across Discovery through Hypercare." },
              { title: "Tab 3 — Top Risks Register", desc: "Ranked legal, regulatory, and technical risks paired with concrete mitigation strategies." },
              { title: "Tab 4 — Deduplicated Assumptions", desc: "Consolidated technical and commercial assumptions mapped directly to source requirement IDs." },
              { title: "Tab 5 — Requirements & Costing Matrix", desc: "Line-by-line audit of every extracted RFP requirement with complexity rating, confidence score, blended day rate, and low/high cost estimates." }
            ].map((tab, i) => (
              <div key={i} className="flex gap-4 p-5 bg-[#F8FAFC] rounded-xl border border-slate-200">
                <div className="font-bold text-[#1E40AF] shrink-0 w-48">{tab.title}</div>
                <div className="text-sm text-slate-600">{tab.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ROLE-BASED VALUE STRIP */}
      <section className="py-24 px-6 bg-[#0B1220]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Built for Every Stakeholder at the Deal Table</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-l-2 border-[#0EA5E9] pl-6">
              <h3 className="font-bold text-white mb-2">For the CFO & Deal Desk</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Audit every margin assumption, overhead percentage, and contingency floor in minutes rather than untangling broken Excel macros.</p>
            </div>
            <div className="border-l-2 border-[#0EA5E9] pl-6">
              <h3 className="font-bold text-white mb-2">For Pre-Sales & Architects</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Translate technical complexity into defensible person-day estimates backed by standardized role rates.</p>
            </div>
            <div className="border-l-2 border-[#0EA5E9] pl-6">
              <h3 className="font-bold text-white mb-2">For Delivery Heads</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Verify that proposed phase timelines and weekly burn rates match real-world engineering capacity before the bid goes out.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CLOSING CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-6">
          Stop guessing your margins. Model every deal with certainty.
        </h2>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          See how Capivue turns your next complex RFP into an audited commercial model and 5-tab CFO workbook.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/request-demo" className="bg-[#1E40AF] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-900 transition-colors shadow-lg shadow-[#1E40AF]/20">
            Book an Enterprise Demo
          </Link>
          <Link href="/platform/risk-xray" className="bg-white text-[#0B1220] border border-slate-200 px-8 py-4 rounded-lg text-lg font-medium hover:bg-slate-50 transition-colors">
            Explore Risk X-Ray
          </Link>
        </div>
      </section>

    </div>
  );
}