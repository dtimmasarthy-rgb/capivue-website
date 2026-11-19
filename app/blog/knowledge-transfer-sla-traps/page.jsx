"use client";
import { useState } from "react";
import Link from "next/link";

export default function AnnuityBidsArticle() {
  const [tocOpen, setTocOpen] = useState(true);

  const toc = [
    { id: "why-bleed", label: "1. Why Annuity Deals Bleed Margin in 90 Days" },
    { id: "three-wave", label: "2. The Three-Wave Annuity Pricing Architecture" },
    { id: "sla-audit", label: "3. Auditing SLA Annexures & Scope Guardrails" },
    { id: "comparison", label: "4. Flat Run-Rate vs. Three-Wave Governance" },
    { id: "takeaway", label: "5. Key Takeaway for Managed Services Leaders" }
  ];

  const waves = [
    {
      num: "01",
      title: "Transition & Knowledge Transfer",
      subtitle: "Shadowing & Tooling Onboarding",
      scope: "System handover workshops, runbook audit, ITSM/monitoring integration, and reverse shadowing alongside the incumbent team.",
      treatment: "Priced as a dedicated, time-bound transition milestone with onshore-heavy specialist leadership (Solution Architect and Transition Lead) so upfront onboarding costs are recovered cleanly."
    },
    {
      num: "02",
      title: "Post-Go-Live Hypercare Stabilization",
      subtitle: "Burn-In Window",
      scope: "Elevated incident triage, batch monitoring, performance tuning, and defect remediation immediately following cutover.",
      treatment: "Modeled as a peak stabilization pod (max(FTE) across phases) layered with 15% QA and 10% Governance/PM overhead—explicitly insulated from steady-state run pricing."
    },
    {
      num: "03",
      title: "Steady-State Run Operations",
      subtitle: "L1 / L2 / L3 Support",
      scope: "Ongoing 24/7 ticket resolution, preventive maintenance, SLA compliance reporting, and governed minor enhancements.",
      treatment: "Priced using your target onshore/offshore delivery ratio (such as 30% Onshore / 70% Offshore or an optimized offshore-led run pod) across USD, INR, EUR, GBP, or AUD, backed by a configurable 20% Contingency Buffer."
    }
  ];

  const comparison = [
    {
      dimension: "Handover & KT",
      flat: "Absorbed informally into early support months.",
      governed: "Dedicated Transition Wave priced as a distinct milestone."
    },
    {
      dimension: "Stabilization Spike",
      flat: "Understaffed or covered via unbilled senior overtime.",
      governed: "Isolated Hypercare Pod sized via max(FTE) with QA/PM overheads."
    },
    {
      dimension: "SLA Penalty Exposure",
      flat: "Buried in annexures and discovered post-award.",
      governed: "Flagged in Risk X-Ray (\"Yes with Conditions\") prior to sign-off."
    },
    {
      dimension: "Scope Boundaries",
      flat: "Enhancements blur into fixed-fee maintenance.",
      governed: "Deduplicated Assumptions Register defines ticket & change caps."
    },
    {
      dimension: "Executive Audit Trail",
      flat: "Fragile multi-tab spreadsheets prone to formula drift.",
      governed: "5-Tab CFO Workbook (.xlsx) showing phase burn & TCV bands."
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-[#1E40AF] selection:text-white">

      {/* HEADER BANNER */}
      <section className="bg-[#090D16] pt-16 pb-14 px-6 border-b border-slate-800">
        <div className="max-w-5xl mx-auto">

          <nav className="text-xs text-slate-500 mb-6 flex items-center gap-2 font-medium">
            <Link href="/resources" className="hover:text-slate-300 transition-colors">Resources</Link>
            <span className="text-slate-700">/</span>
            <Link href="/resources?category=commercial" className="hover:text-slate-300 transition-colors">
              Commercial & Bid Strategy
            </Link>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[#0EA5E9] text-[10px] font-bold uppercase tracking-widest mb-6">
            Managed Services & Annuity Strategy · Executive Briefing
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-5 leading-[1.1]">
            Isolating Knowledge Transfer Waves and 24/7 SLA Traps in Annuity Bids
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mb-8">
            A practical framework for separating Transition and Hypercare stabilization pods from steady-state L1–L3 support pricing before committing to multi-year uptime guarantees.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500 font-mono tracking-wide">
            <span>Published September 2026</span>
            <span className="w-1 h-1 rounded-full bg-slate-700"></span>
            <span>6 min read</span>
            <span className="w-1 h-1 rounded-full bg-slate-700"></span>
            <span>Capivue Managed Services & Deal Desk Research</span>
          </div>

        </div>
      </section>

      {/* EXECUTIVE SUMMARY BOX */}
      <section className="px-6 -mt-8 relative z-10 mb-16">
        <div className="max-w-4xl mx-auto bg-[#0F1423] border border-slate-700 rounded-2xl p-8 md:p-10 shadow-2xl">
          <div className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-4">
            Executive Takeaways
          </div>

          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            <span className="font-semibold text-white">Key Thesis:</span> Multi-year Application Management Services (AMS) and Managed Services contracts operate on thin gross margins where a single mispriced transition wave or uncapped SLA penalty erodes profitability for thirty-six months. Winning sustainable annuity deals requires decoupling handover staffing from steady-state run rates and converting operational unknowns into enforceable bid assumptions.
          </p>

          <ol className="space-y-3">
            {[
              "Blending Knowledge Transfer (KT) and Hypercare staffing into steady-state run pricing forces senior engineers to absorb months of unpaid stabilization work.",
              "Auditing operational annexures across Support & Operations and Legal & Regulatory risk dimensions exposes punitive 24/7 P1 timers and uncapped service credits before pricing is locked.",
              "Attaching a Deduplicated Assumptions Register establishing baseline ticket volumes, runbook completeness, and SLA burn-in windows shields fixed-fee annuity margins from post-award scope creep."
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

      {/* BODY: 2-COLUMN EDITORIAL GRID */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">

          {/* MAIN COLUMN */}
          <article className="lg:col-span-2 max-w-3xl">

            {/* Section 1 */}
            <div id="why-bleed" className="mb-14 scroll-mt-24">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#1E40AF] mb-3">
                Section 01
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1220] mb-5 leading-tight">
                Why Multi-Year Annuity Deals Bleed Margin in the First 90 Days
              </h2>
              <div className="space-y-5 text-[17px] text-slate-700 leading-[1.75]">
                <p>
                  Unlike turnkey implementation projects—where scope concludes at production cutover—a Managed Services or AMS requirement document binds your delivery organization to multi-year operational SLAs. Yet in most pre-sales workflows, estimators price annuity deals using a flat monthly FTE run rate derived from rough historical ticket counts.
                </p>
                <p>
                  When a 250-page tender or Statement of Work (SOW) arrives with dense operational annexures, three hidden traps routinely destroy deal economics during the first quarter of execution:
                </p>
              </div>

              {[
                {
                  title: "Trap 01 — The Incumbent Handover Deficit",
                  body: "Incumbent vendors rarely leave complete system runbooks, clean configuration management databases (CMDBs), or documented batch schedules. When bid teams fail to model dedicated Knowledge Transfer (KT) and Reverse Shadowing pods, senior architects spend months reverse-engineering undocumented legacy code at steady-state support rates."
                },
                {
                  title: "Trap 02 — Punitive 24/7 SLA & Service-Credit Clauses",
                  body: "Buried inside operational schedules are aggressive Priority-1 resolution timers, weekend on-call mandates, and cascading monthly service-credit deductions (often 10% to 15% of monthly billing) that trigger from Day 1—before your team has stabilized the environment."
                },
                {
                  title: "Trap 03 — Blurred Boundaries Between \"Run\" and \"Change\"",
                  body: "Without explicit contractual definitions separating routine L1–L3 incident resolution from minor enhancements, regulatory patches, and third-party vendor upgrades, buyers treat net-new engineering work as included maintenance."
                }
              ].map((trap, i) => (
                <div key={i} className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6 my-6">
                  <h3 className="font-bold text-[#0B1220] mb-2 text-base">
                    {trap.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{trap.body}</p>
                </div>
              ))}
            </div>

            {/* Pull Quote */}
            <blockquote className="border-l-4 border-[#1E40AF] pl-6 py-2 my-10">
              <p className="text-lg md:text-xl font-medium text-[#0B1220] leading-relaxed italic">
                "In Managed Services, gross margin is won or lost before steady-state operations ever begin. If you price Transition, Hypercare, and Run as a single blended curve, you subsidize the client's legacy technical debt out of your own margin."
              </p>
            </blockquote>

            {/* Section 2 */}
            <div id="three-wave" className="mb-14 scroll-mt-24">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#1E40AF] mb-3">
                Section 02
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1220] mb-5 leading-tight">
                The Three-Wave Annuity Pricing Architecture
              </h2>
              <p className="text-[17px] text-slate-700 leading-[1.75] mb-6">
                To protect gross margins across 36- to 60-month engagements, Deal Desk and Pre-Sales leaders must structure commercial models across three distinct operational waves rather than a single flat run rate:
              </p>

              <div className="space-y-4">
                {waves.map((wave) => (
                  <div key={wave.num} className="border border-slate-200 rounded-xl p-6">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-[#1E40AF] text-white text-sm font-bold flex items-center justify-center font-mono">
                        W{wave.num}
                      </div>
                      <div>
                        <h3 className="font-bold text-[#0B1220] text-base leading-snug">
                          Wave {wave.num} — {wave.title}
                        </h3>
                        <div className="text-xs text-slate-500 font-medium mt-0.5">
                          {wave.subtitle}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3 pl-14">
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-[#1E40AF] mb-1">
                          Operational Scope
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">{wave.scope}</p>
                      </div>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 mb-1">
                          Commercial Treatment
                        </div>
                        <p className="text-sm text-slate-700 leading-relaxed">{wave.treatment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3 */}
            <div id="sla-audit" className="mb-14 scroll-mt-24">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#1E40AF] mb-3">
                Section 03
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1220] mb-5 leading-tight">
                Auditing SLA Annexures & Locking In Scope Guardrails
              </h2>
              <p className="text-[17px] text-slate-700 leading-[1.75] mb-6">
                Pricing three waves accurately only holds if your commercial assumptions are legally anchored to the buyer's requirement document. Before Deal Desk approves a final Total Contract Value (TCV), every annuity pursuit should enforce two deterministic guardrails:
              </p>

              <div className="space-y-5">
                {[
                  {
                    title: "Forensic SLA & Operations Cross-Check (Risk X-Ray)",
                    body: "Every clause across Support & Operations, Technical & Architecture, and Legal & Regulatory dimensions must be audited against your verified Bidder Profile—isolating 99.9%+ uptime mandates, DR drill frequencies, and penalty caps into a ranked risk register."
                  },
                  {
                    title: "The Contractual SLA Burn-In & Baseline Assumption",
                    body: "Every conditional operational clause must map directly to a Deduplicated Assumptions Register embedded in the proposal and SOW—explicitly stating that SLA penalty deductions commence only after the Hypercare stabilization window closes and baseline monthly ticket volumes are validated."
                  }
                ].map((item, i) => (
                  <div key={i} className="border-l-2 border-[#1E40AF] pl-5">
                    <h3 className="font-bold text-[#0B1220] mb-2 text-base leading-snug">
                      {item.title}
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
                Flat Run-Rate Estimation vs. Three-Wave Annuity Governance
              </h2>

              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="bg-[#F8FAFC] border-b border-slate-200">
                        <th className="p-4 font-bold text-[#0B1220] text-xs uppercase tracking-wider w-[22%]">
                          Annuity Dimension
                        </th>
                        <th className="p-4 font-semibold text-red-700 text-xs uppercase tracking-wider w-[39%]">
                          Flat Run-Rate
                        </th>
                        <th className="p-4 font-semibold text-emerald-700 text-xs uppercase tracking-wider w-[39%]">
                          Three-Wave Governance
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
                            {row.flat}
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
                Key Takeaway for Managed Services & Deal Desk Leaders
              </h2>
              <p className="text-[17px] text-slate-700 leading-[1.75]">
                Sustainable annuity profitability depends on pricing operational reality—not optimistic steady-state averages. By separating Transition, Hypercare, and Steady-State Run waves, auditing SLA penalty triggers early, and locking protective assumptions into the proposal, Managed Services leaders can submit competitive bids while safeguarding multi-year gross margins.
              </p>
            </div>

          </article>

          {/* SIDEBAR */}
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

              {/* Annuity Margin Guardrail Spec Card */}
              <div className="bg-[#0F1423] border border-slate-700 rounded-xl p-5">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#0EA5E9] mb-3">
                  Annuity Margin Guardrail Spec
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Pricing Architecture</div>
                    <div className="text-xs text-white font-medium leading-snug">
                      3-Wave Isolation
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1 leading-relaxed">
                      Transition · Hypercare · Steady-State
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-700">
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Risk Surface</div>
                    <div className="font-mono text-xs text-emerald-400">
                      SLA Risk X-Ray
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1 leading-relaxed">
                      Support & Ops · Legal & Regulatory · Technical
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-700">
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Scope Protection</div>
                    <div className="text-xs text-white font-medium">
                      Deduplicated Assumptions
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1 leading-relaxed">
                      Ticket caps · Runbook completeness · Burn-in window
                    </div>
                  </div>
                </div>
              </div>

              {/* Conversion Widget */}
              <div className="bg-gradient-to-br from-[#1E40AF] to-[#0EA5E9] rounded-xl p-5">
                <div className="text-sm font-bold text-white mb-2 leading-snug">
                  Audit Your Next AMS Bid
                </div>
                <p className="text-xs text-blue-50 leading-relaxed mb-4">
                  Isolate SLA penalty clauses, model phased support pods, and generate a 5-tab CFO commercial workbook in minutes.
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
            Audit your next Managed Services requirement document in minutes.
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            See how Capivue isolates SLA penalty clauses, models phased support pods, and generates a 5-tab CFO commercial workbook.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/request-demo"
              className="bg-[#0EA5E9] text-white px-7 py-3 rounded-lg text-sm font-semibold hover:bg-sky-400 transition-colors"
            >
              Book an Enterprise Demo
            </Link>
            <Link
              href="/solutions/managed-services"
              className="bg-transparent border border-slate-600 text-white px-7 py-3 rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors"
            >
              Explore Managed Services →
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
              href="/resources/hidden-cost-of-static-rate-card-spreadsheets"
              className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#0EA5E9] mb-2">
                Commercial & Bid Strategy
              </div>
              <h3 className="text-lg font-bold text-[#0B1220] mb-2 group-hover:text-[#1E40AF] transition-colors leading-snug">
                The Hidden Cost of Static Rate-Card Spreadsheets in Turnkey IT Deals
              </h3>
              <span className="text-sm font-semibold text-[#1E40AF]">Read Briefing →</span>
            </Link>
            <Link
              href="/resources/postgresql-row-level-security"
              className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#0EA5E9] mb-2">
                Enterprise Architecture
              </div>
              <h3 className="text-lg font-bold text-[#0B1220] mb-2 group-hover:text-[#1E40AF] transition-colors leading-snug">
                Database-Level Multi-Tenancy: Designing PostgreSQL Row-Level Security for Sensitive Bids
              </h3>
              <span className="text-sm font-semibold text-[#1E40AF]">Read Briefing →</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}