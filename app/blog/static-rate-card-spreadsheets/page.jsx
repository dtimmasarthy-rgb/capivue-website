"use client";
import { useState } from "react";
import Link from "next/link";

export default function StaticRateCardArticle() {
  const [tocOpen, setTocOpen] = useState(true);

  const toc = [
    { id: "anatomy", label: "1. Anatomy of a Broken Spreadsheet" },
    { id: "peak-fte", label: "2. Why Peak max(FTE) Modeling Fixes Sizing" },
    { id: "layering", label: "3. Blended Rates, Overheads & Contingency" },
    { id: "comparison", label: "4. Static vs. Governed Deal Modeling" },
    { id: "takeaway", label: "5. Key Takeaway for Deal Desk Leaders" }
  ];

  const comparison = [
    {
      dimension: "Staffing Calculation",
      static: "Manual SUM() across phases inflates FTEs or relies on rough guesses.",
      governed: "Peak max(FTE) per role across Discovery through Hypercare."
    },
    {
      dimension: "QA & PM Overheads",
      static: "Frequently omitted or trimmed arbitrarily to hit target price.",
      governed: "Deterministic +15% QA & +10% PM Governance layered automatically."
    },
    {
      dimension: "Delivery Mix & Currency",
      static: "Fragile manual formulas prone to broken cell references.",
      governed: "Dynamic Onshore/Offshore mix (30/70) across USD, INR, EUR, GBP, AUD."
    },
    {
      dimension: "Scope Creep Defense",
      static: "Assumptions scattered across emails and omitted from SOW.",
      governed: "Deduplicated Assumptions Register linked to requirement IDs + 20% contingency."
    },
    {
      dimension: "Engineering Alignment",
      static: "Pricing disconnected from Agile sprint capacity.",
      governed: "Direct sync with Sprint Planner (Peak FTEs × 5 Days × Sprint Weeks)."
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-[#1E40AF] selection:text-white">

      {/* HEADER BANNER: DARK OBSIDIAN EDITORIAL HEADER */}
      <section className="bg-[#090D16] pt-16 pb-14 px-6 border-b border-slate-800">
        <div className="max-w-5xl mx-auto">

          {/* Breadcrumb */}
          <nav className="text-xs text-slate-500 mb-6 flex items-center gap-2 font-medium">
            <Link href="/resources" className="hover:text-slate-300 transition-colors">Resources</Link>
            <span className="text-slate-700">/</span>
            <Link href="/resources?category=commercial" className="hover:text-slate-300 transition-colors">
              Commercial & Bid Strategy
            </Link>
          </nav>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[#0EA5E9] text-[10px] font-bold uppercase tracking-widest mb-6">
            Commercial & Bid Strategy · Executive Briefing
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-5 leading-[1.1]">
            The Hidden Cost of Static Rate-Card Spreadsheets in Turnkey IT Deals
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mb-8">
            Why naive FTE summation across Discovery, Build, SIT, and UAT distorts staffing models—and how peak max(FTE) modeling paired with automated QA and governance overheads protects fixed-price margins.
          </p>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500 font-mono tracking-wide">
            <span>Published October 2026</span>
            <span className="w-1 h-1 rounded-full bg-slate-700"></span>
            <span>6 min read</span>
            <span className="w-1 h-1 rounded-full bg-slate-700"></span>
            <span>Capivue Commercial & Deal Desk Research</span>
          </div>

        </div>
      </section>

      {/* EXECUTIVE SUMMARY BOX (overlaps header + body) */}
      <section className="px-6 -mt-8 relative z-10 mb-16">
        <div className="max-w-4xl mx-auto bg-[#0F1423] border border-slate-700 rounded-2xl p-8 md:p-10 shadow-2xl">
          <div className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-4">
            Executive Takeaways
          </div>

          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            <span className="font-semibold text-white">Key Thesis:</span> Most fixed-price IT Services and System Integration bids do not lose margin because base developer rates are wrong—they lose margin because static Excel estimators either double-count headcount across sequential delivery phases or omit mandatory QA, governance, and risk contingency overheads.
          </p>

          <ol className="space-y-3">
            {[
              "Summing FTEs across sequential phases (Discovery + Build + SIT + UAT) artificially inflates pod sizes and prices your bid out of contention.",
              "Computing peak pod headcount via max(FTE) per role establishes realistic resource utilization across the delivery horizon.",
              "Layering deterministic 15% QA, 10% Project Governance, and a 20% Risk Contingency Buffer onto onshore/offshore blended rate cards protects gross margin before Deal Desk sign-off."
            ].map((point, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="shrink-0 w-6 h-6 rounded-full bg-[#0EA5E9]/15 border border-[#0EA5E9]/30 text-[#0EA5E9] text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <span className="text-sm text-slate-300 leading-relaxed">{point}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* BODY: 2-COLUMN EDITORIAL GRID (68/32) */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">

          {/* MAIN COLUMN (68%) */}
          <article className="lg:col-span-2 max-w-3xl">

            {/* Section 1 */}
            <div id="anatomy" className="mb-14 scroll-mt-24">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#1E40AF] mb-3">
                Section 01
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1220] mb-5 leading-tight">
                The Anatomy of a Broken Pre-Sales Spreadsheet
              </h2>
              <div className="space-y-5 text-[17px] text-slate-700 leading-[1.75]">
                <p>
                  In enterprise IT services and turnkey system integration pursuits, the commercial estimation workbook is often the most fragile artifact in the entire submission package.
                </p>
                <p>
                  When a 300-page requirement document arrives with a three-week submission deadline, solution architects estimate effort per module in isolation while Deal Desk applies blended rate cards in a separate tab. Under deadline pressure, two systemic errors routinely corrupt the final Total Contract Value (TCV):
                </p>

                <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6 my-6">
                  <h3 className="font-bold text-[#0B1220] mb-2 text-base">
                    Error 1 — Naive Phase Summation (The Cloning Fallacy)
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    When staffing is entered across Discovery, Build, SIT, UAT, Go-Live, and Hypercare, manual spreadsheet formulas frequently sum FTE values horizontally across all phases. If a Solution Architect or Senior Developer is allocated at 2.0 FTE during Build, 2.0 FTE during SIT, and 2.0 FTE during UAT, a naive SUM() formula reports 6.0 FTEs of peak team capacity—tripling the apparent headcount and distorting sprint velocity calculations.
                  </p>
                </div>

                <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6 my-6">
                  <h3 className="font-bold text-[#0B1220] mb-2 text-base">
                    Error 2 — Unpriced Quality & Governance Overheads
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Conversely, when estimators calculate effort purely from functional feature complexity, they routinely under-allocate non-coding obligations—specifically end-to-end integration testing, UAT defect triage, PMO reporting, and post-go-live Hypercare stabilization.
                  </p>
                </div>
              </div>
            </div>

            {/* Pull Quote */}
            <blockquote className="border-l-4 border-[#1E40AF] pl-6 py-2 my-10">
              <p className="text-lg md:text-xl font-medium text-[#0B1220] leading-relaxed italic">
                "A commercial model that overstates peak headcount loses the bid on price. A commercial model that omits QA and governance overhead wins the bid—and bleeds margin for the next eighteen months."
              </p>
            </blockquote>

            {/* Section 2 */}
            <div id="peak-fte" className="mb-14 scroll-mt-24">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#1E40AF] mb-3">
                Section 02
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1220] mb-5 leading-tight">
                Why Peak max(FTE) Modeling Fixes Resource Sizing
              </h2>
              <div className="space-y-5 text-[17px] text-slate-700 leading-[1.75]">
                <p>
                  Engineers and architects move across sequential delivery waves; they do not clone themselves at each phase gate. To model a delivery pod that both CFOs and VPs of Delivery can sign off on, commercial pricing must distinguish between total cumulative effort (person-days) and peak concurrent headcount (max(FTE)).
                </p>
                <p>
                  In Capivue's Deal Room architecture, every scoped requirement maps to base development effort across six standardized delivery phases:
                </p>

                <ol className="space-y-2 pl-1 my-6">
                  {[
                    "Discovery & Architecture Sign-Off",
                    "Core Build & Integration",
                    "System Integration Testing (SIT)",
                    "User Acceptance Testing (UAT)",
                    "Production Cutover & Go-Live",
                    "Hypercare Stabilization"
                  ].map((phase, i) => (
                    <li key={i} className="flex gap-3 items-start text-base">
                      <span className="shrink-0 w-6 h-6 rounded-md bg-[#1E40AF]/10 text-[#1E40AF] text-xs font-bold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-slate-700">{phase}</span>
                    </li>
                  ))}
                </ol>

                <p>
                  Instead of summing headcount across sequential stages, Capivue derives peak pod capacity per role (Solution Architect, Senior Developer, Developer, QA Engineer, Business Analyst, Project Manager) using max(FTE) across phases. That peak headcount flows directly into the Sprint Planner, enforcing deterministic capacity math so Sales never commits to a delivery timeline that Engineering cannot execute.
                </p>
              </div>

              {/* Formula Callout */}
              <div className="bg-[#0F1423] rounded-xl p-6 my-8 border border-slate-800">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#0EA5E9] mb-3">
                  Deterministic Capacity Formula
                </div>
                <div className="font-mono text-sm md:text-base text-white leading-relaxed">
                  Sprint Capacity ={" "}
                  <span className="text-emerald-400">Peak FTEs</span>{" "}
                  × <span className="text-[#0EA5E9]">5 Working Days</span>{" "}
                  × <span className="text-amber-400">Sprint Weeks</span>
                </div>
                <div className="text-xs text-slate-400 mt-3">
                  Evaluated per role, per sprint. Prevents optimistic timelines by enforcing real concurrent headcount.
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div id="layering" className="mb-14 scroll-mt-24">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#1E40AF] mb-3">
                Section 03
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1220] mb-5 leading-tight">
                Layering Blended Rates, Overheads, and Risk Contingency
              </h2>
              <p className="text-[17px] text-slate-700 leading-[1.75] mb-6">
                Once base development person-days and peak role FTEs are established, protecting fixed-price margins requires three deterministic commercial guardrails:
              </p>

              <div className="space-y-5">
                {[
                  {
                    n: "1",
                    title: "Dynamic Onshore / Offshore Blended Day Rates",
                    body: "Rather than hardcoding static currency conversions or manual rate overrides, Capivue computes blended daily rates dynamically from your configured delivery mix (for example, 30% Onshore / 70% Offshore) multiplied by an 8-hour workday across USD, INR, EUR, GBP, or AUD."
                  },
                  {
                    n: "2",
                    title: "Automated QA (15%) and Governance (10%) Layering",
                    body: "Every turnkey implementation carries non-negotiable verification and management overhead. Automatically layering 15% Quality Assurance and 10% Project Governance/PM onto base development effort ensures testing and PMO leadership are priced into the baseline—not absorbed out of gross margin."
                  },
                  {
                    n: "3",
                    title: "Risk-Adjusted Contingency Bands (Default 20%)",
                    body: "When requirements carry unresolved dependencies—such as legacy database migrations or undocumented third-party APIs—Capivue applies a configurable Contingency Buffer (default 20%) to establish a defensible low-to-high TCV band, paired with a Deduplicated Assumptions Register mapped directly to source requirement IDs."
                  }
                ].map((item) => (
                  <div key={item.n} className="border-l-2 border-[#1E40AF] pl-5">
                    <h3 className="font-bold text-[#0B1220] mb-2 text-base leading-snug">
                      {item.n}. {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4: Comparison Table */}
            <div id="comparison" className="mb-14 scroll-mt-24">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#1E40AF] mb-3">
                Section 04
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1220] mb-5 leading-tight">
                Static Spreadsheets vs. Governed Deal Modeling
              </h2>

              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="bg-[#F8FAFC] border-b border-slate-200">
                        <th className="p-4 font-bold text-[#0B1220] text-xs uppercase tracking-wider w-[24%]">
                          Commercial Dimension
                        </th>
                        <th className="p-4 font-semibold text-red-700 text-xs uppercase tracking-wider w-[38%]">
                          Static Excel Workbooks
                        </th>
                        <th className="p-4 font-semibold text-emerald-700 text-xs uppercase tracking-wider w-[38%]">
                          Governed Deal Room
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparison.map((row, i) => (
                        <tr key={i} className="border-b border-slate-100 last:border-b-0">
                          <td className="p-4 text-sm font-semibold text-[#0B1220] align-top">
                            {row.dimension}
                          </td>
                          <td className="p-4 text-sm text-slate-600 leading-relaxed align-top">
                            {row.static}
                          </td>
                          <td className="p-4 text-sm text-slate-700 leading-relaxed align-top bg-emerald-50/30">
                            {row.governed}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div id="takeaway" className="mb-14 scroll-mt-24">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#1E40AF] mb-3">
                Section 05
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1220] mb-5 leading-tight">
                Key Takeaway for Deal Desk & Pre-Sales Leaders
              </h2>
              <p className="text-[17px] text-slate-700 leading-[1.75]">
                Winning complex enterprise bids requires aligning technical scope, commercial pricing, and sprint capacity before the submission leaves the building. By replacing static spreadsheets with governed bottom-up modeling, Deal Desk leaders gain instant visibility into weekly burn rates, margin floors, and conditional scope assumptions—turning commercial review from a last-minute bottleneck into a decisive competitive advantage.
              </p>
            </div>

          </article>

          {/* SIDEBAR (32%, sticky) */}
          <aside className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-24 space-y-6">

              {/* TOC */}
              <div className="bg-white border border-slate-200 rounded-xl p-5">
                <button
                  onClick={() => setTocOpen(!tocOpen)}
                  className="w-full flex items-center justify-between mb-3"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    On This Page
                  </span>
                  <span className="text-slate-400 text-xs">{tocOpen ? "−" : "+"}</span>
                </button>
                {tocOpen && (
                  <nav className="space-y-1">
                    {toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block text-sm text-slate-600 hover:text-[#1E40AF] hover:bg-slate-50 transition-colors py-1.5 px-2 rounded -mx-2 leading-snug"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                )}
              </div>

              {/* Benchmark Math Summary */}
              <div className="bg-[#0F1423] border border-slate-700 rounded-xl p-5">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#0EA5E9] mb-3">
                  Benchmark Math Summary
                </div>
                <div className="space-y-3">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-slate-400">Person-Days</span>
                    <span className="text-lg font-bold text-white font-mono">525</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-slate-400">Peak FTEs</span>
                    <span className="text-lg font-bold text-white font-mono">8.0</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-slate-400">Onshore / Offshore</span>
                    <span className="text-lg font-bold text-white font-mono">30/70</span>
                  </div>
                  <div className="pt-3 border-t border-slate-700 space-y-2">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-slate-500">+ QA</span>
                      <span className="text-sm font-semibold text-emerald-400 font-mono">15%</span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-slate-500">+ PM Governance</span>
                      <span className="text-sm font-semibold text-emerald-400 font-mono">10%</span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-slate-500">+ Contingency</span>
                      <span className="text-sm font-semibold text-amber-400 font-mono">20%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conversion Widget */}
              <div className="bg-gradient-to-br from-[#1E40AF] to-[#0EA5E9] rounded-xl p-5">
                <div className="text-sm font-bold text-white mb-2 leading-snug">
                  Model Your Next Deal
                </div>
                <p className="text-xs text-blue-50 leading-relaxed mb-4">
                  Upload a requirement document and see phased FTE effort, blended rates, and risk contingency in minutes.
                </p>
                <Link
                  href="/request-demo"
                  className="block text-center bg-white text-[#1E40AF] px-4 py-2.5 rounded-lg text-xs font-bold hover:bg-slate-100 transition-colors"
                >
                  Book an Enterprise Demo →
                </Link>
              </div>

            </div>
          </aside>

        </div>
      </section>

      {/* BOTTOM CONVERSION CALLOUT */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto bg-[#090D16] rounded-2xl p-10 md:p-14 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
            See Capivue's Deal Room and 5-Tab CFO Workbook in action.
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Upload your next requirement document and model phased FTE effort, blended rates, and risk contingency in minutes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/request-demo"
              className="bg-[#0EA5E9] text-white px-7 py-3 rounded-lg text-sm font-semibold hover:bg-sky-400 transition-colors"
            >
              Book an Enterprise Demo
            </Link>
            <Link
              href="/deal-room"
              className="bg-transparent border border-slate-600 text-white px-7 py-3 rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors"
            >
              Explore Deal Room →
            </Link>
          </div>
        </div>
      </section>

      {/* RELATED BRIEFINGS */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-4">
            Related Briefings
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <Link
              href="/resources/eliminating-ai-hallucinations-bfsi"
              className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#0EA5E9] mb-2">
                AI Governance & Compliance
              </div>
              <h3 className="text-lg font-bold text-[#0B1220] mb-2 group-hover:text-[#1E40AF] transition-colors leading-snug">
                Eliminating AI Hallucinations in Regulated BFSI & Public Sector Bids
              </h3>
              <span className="text-sm font-semibold text-[#1E40AF]">Read Briefing →</span>
            </Link>
            <Link
              href="/resources/sprint-planning-before-award"
              className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#0EA5E9] mb-2">
                Delivery Engineering
              </div>
              <h3 className="text-lg font-bold text-[#0B1220] mb-2 group-hover:text-[#1E40AF] transition-colors leading-snug">
                Sprint Planning Before Contract Award: Closing the Sales-to-Delivery Gap
              </h3>
              <span className="text-sm font-semibold text-[#1E40AF]">Read Briefing →</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}