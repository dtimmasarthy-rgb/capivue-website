"use client";
import { useState } from "react";
import Link from "next/link";

export default function SprintPlanningArticle() {
  const [tocOpen, setTocOpen] = useState(true);

  const toc = [
    { id: "timeline-trap", label: "1. The Pre-Sales Timeline Trap" },
    { id: "capacity-math", label: "2. Deterministic Capacity Math" },
    { id: "separating-build", label: "3. Core Build vs. Transition & Hypercare" },
    { id: "comparison", label: "4. Static Roadmaps vs. Capacity-Planned Sprints" },
    { id: "takeaway", label: "5. Key Takeaway for VPs of Delivery" }
  ];

  const comparison = [
    {
      dimension: "Resource Sizing",
      static: "Rough headcount guesses disconnected from requirement effort.",
      governed: "Synced directly with Deal Room max(FTE) across 6 phases."
    },
    {
      dimension: "Sprint Velocity Math",
      static: "Arbitrary milestone dates with no capacity validation.",
      governed: "Deterministic Peak FTEs × 5 Days × Sprint Weeks across 1–6 week cadences."
    },
    {
      dimension: "QA & PMO Overheads",
      static: "Frequently omitted from timeline calculations.",
      governed: "+15% QA and +10% Governance/PM embedded in total effort days."
    },
    {
      dimension: "Risk & Dependency Alignment",
      static: "Legacy migration and SLA bottlenecks discovered post-award.",
      governed: "Linked to Risk X-Ray & Assumptions Register before sign-off."
    },
    {
      dimension: "PMO Kickoff Handoff",
      static: "Weeks spent re-reading the requirement document to build a backlog.",
      governed: "One-click .xlsx Sprint Workbook & .docx Delivery Design Doc."
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
            <Link href="/resources?category=delivery" className="hover:text-slate-300 transition-colors">
              Delivery Engineering
            </Link>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[#0EA5E9] text-[10px] font-bold uppercase tracking-widest mb-6">
            Delivery Engineering · Executive Briefing
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-5 leading-[1.1]">
            Sprint Planning Before Contract Award: Closing the Sales-to-Delivery Gap
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mb-8">
            How VPs of Delivery validate proposed go-live dates against deterministic sprint capacity (Peak FTEs × 5 Days × Sprint Weeks) before Sales signs a binding schedule.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500 font-mono tracking-wide">
            <span>Published September 2026</span>
            <span className="w-1 h-1 rounded-full bg-slate-700"></span>
            <span>5 min read</span>
            <span className="w-1 h-1 rounded-full bg-slate-700"></span>
            <span>Capivue Delivery & PMO Research</span>
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
            <span className="font-semibold text-white">Key Thesis:</span> In enterprise IT services and complex system integration, gross margins are rarely lost during execution—they are lost before the contract is signed, when Pre-Sales commits to an aggressive go-live timeline without validating engineering sprint capacity.
          </p>

          <ol className="space-y-3">
            {[
              "Disconnected pre-sales Gantt charts ignore role-level utilization bottlenecks across Discovery, Build, SIT, UAT, Go-Live, and Hypercare.",
              "Synchronizing the Deal Room Resource Matrix directly with the Sprint Planner enforces deterministic capacity math (Peak FTEs × 5 Working Days × Sprint Weeks).",
              "Exporting a Sprint Delivery Workbook (.xlsx) and Delivery Design Document (.docx) prior to submission gives VPs of Delivery auditable sign-off and eliminates cold project handovers."
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
            <div id="timeline-trap" className="mb-14 scroll-mt-24">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#1E40AF] mb-3">
                Section 01
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1220] mb-5 leading-tight">
                The Pre-Sales Timeline Trap
              </h2>
              <div className="space-y-5 text-[17px] text-slate-700 leading-[1.75]">
                <p>
                  In traditional enterprise pursuits, delivery leadership is routinely brought into the deal cycle 24 to 48 hours before a final tender or Statement of Work (SOW) deadline. By that stage, commercial pricing has already been anchored to a buyer-mandated go-live date, leaving Practice Heads and Delivery VPs with a binary choice: rubber-stamp an unvalidated schedule or delay the submission.
                </p>
                <p>
                  When pre-sales teams draw high-level roadmap bars in PowerPoint without connecting them to actual person-day effort, three structural failures follow immediately after contract award:
                </p>
              </div>

              <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6 my-6">
                <h3 className="font-bold text-[#0B1220] mb-2 text-base">
                  Failure 01 — Invisible Utilization Spikes
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  A timeline that looks balanced at a high level frequently hides severe bottlenecks during System Integration Testing (SIT), User Acceptance Testing (UAT), and legacy data cutover.
                </p>
              </div>

              <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6 my-6">
                <h3 className="font-bold text-[#0B1220] mb-2 text-base">
                  Failure 02 — Unaccounted QA and Governance Effort
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Estimators who size sprints purely from functional coding days leave zero buffer for test automation, defect triage, and PMO governance—forcing engineering pods into unbilled weekend overtime.
                </p>
              </div>

              <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6 my-6">
                <h3 className="font-bold text-[#0B1220] mb-2 text-base">
                  Failure 03 — The Cold Kickoff Handoff
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Once the deal closes, the Delivery PMO spends the first three weeks of the contract re-reading a 300-page requirement document to translate static prose back into an actionable sprint backlog.
                </p>
              </div>
            </div>

            {/* Pull Quote */}
            <blockquote className="border-l-4 border-[#1E40AF] pl-6 py-2 my-10">
              <p className="text-lg md:text-xl font-medium text-[#0B1220] leading-relaxed italic">
                "Sales teams do not intentionally promise impossible dates—they simply lack a live engineering model that shows how every added requirement shifts sprint capacity."
              </p>
            </blockquote>

            {/* Section 2 */}
            <div id="capacity-math" className="mb-14 scroll-mt-24">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#1E40AF] mb-3">
                Section 02
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1220] mb-5 leading-tight">
                Deterministic Capacity Math (Peak FTEs × 5 Days × Sprint Weeks)
              </h2>
              <div className="space-y-5 text-[17px] text-slate-700 leading-[1.75]">
                <p>
                  Closing the gap between Sales and Delivery requires replacing subjective schedule guesses with deterministic engineering math.
                </p>
                <p>
                  In Capivue's architecture, every requirement extracted during intake is mapped to base development person-days, layered with 15% Quality Assurance (QA) and 10% Project Governance/PM overhead, and distributed across six delivery phases (Discovery, Build, SIT, UAT, Go-Live, and Hypercare).
                </p>
                <p>
                  Rather than double-counting staff across sequential phases, Capivue derives peak specialist headcount per role (Solution Architect, Senior Developer, Developer, QA Engineer, Business Analyst, Project Manager) using max(FTE) logic and synchronizes that pod directly into the Sprint Planner:
                </p>
              </div>

              {/* Formula Callouts */}
              <div className="bg-[#0F1423] rounded-xl p-6 my-8 border border-slate-800 space-y-5">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#0EA5E9] mb-2">
                    Sprint Capacity Formula
                  </div>
                  <div className="font-mono text-sm md:text-base text-white leading-relaxed">
                    Capacity Per Sprint (Person-Days) ={" "}
                    <span className="text-emerald-400">Peak Team FTEs</span>{" "}
                    × <span className="text-[#0EA5E9]">5 Working Days</span>{" "}
                    × <span className="text-amber-400">Sprint Length (Weeks)</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-700">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#0EA5E9] mb-2">
                    Sprint Count Formula
                  </div>
                  <div className="font-mono text-sm md:text-base text-white leading-relaxed">
                    Total Sprints = ceil(
                    <span className="text-[#0EA5E9]">Total Commercial Timeline Weeks</span>{" "}
                    ÷ <span className="text-amber-400">Sprint Length Weeks</span>)
                  </div>
                </div>
              </div>

              {/* Worked Example */}
              <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6 my-6">
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">
                  Worked Example
                </div>
                <div className="space-y-2 text-sm text-slate-700 leading-relaxed">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span>Total Effort</span>
                    <span className="font-mono font-semibold">525 person-days</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span>Peak Pod</span>
                    <span className="font-mono font-semibold">8.0 FTEs</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span>Commercial Timeline</span>
                    <span className="font-mono font-semibold">29 weeks</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span>Sprint Length</span>
                    <span className="font-mono font-semibold">2 weeks (10 days)</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span>Sprint Capacity</span>
                    <span className="font-mono font-semibold text-emerald-700">80.0 person-days / sprint</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Sprints</span>
                    <span className="font-mono font-semibold">15 balanced sprints</span>
                  </div>
                </div>
              </div>

              <div className="space-y-5 text-[17px] text-slate-700 leading-[1.75]">
                <p>
                  If Sales compresses the timeline to 20 weeks without increasing peak FTEs, the capacity deficit surfaces immediately—before the bid is submitted.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div id="separating-build" className="mb-14 scroll-mt-24">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#1E40AF] mb-3">
                Section 03
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1220] mb-5 leading-tight">
                Separating Core Build from Transition and Hypercare
              </h2>
              <p className="text-[17px] text-slate-700 leading-[1.75] mb-6">
                True delivery feasibility depends on more than raw velocity; it requires isolating specialized operational waves so core engineering sprints are never starved of capacity:
              </p>

              <div className="space-y-5">
                {[
                  {
                    n: "1",
                    title: "Discovery & Architecture Sign-Off",
                    body: "Locks target landing zones, integration interface control documents (ICDs), and data migration schemas before feature sprints begin."
                  },
                  {
                    n: "2",
                    title: "Core Build & Integration Sprints",
                    body: "Allocates interpreted requirements and user stories across sequential sprints with transparent Capacity Days vs. Committed Days tracking."
                  },
                  {
                    n: "3",
                    title: "SIT, UAT & Hypercare Stabilization",
                    body: "Explicitly budgets dedicated testing and post-go-live support pods so stabilization work never cannibalizes feature delivery."
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
                Static Proposal Roadmaps vs. Capacity-Planned Sprints
              </h2>

              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="bg-[#F8FAFC] border-b border-slate-200">
                        <th className="p-4 font-bold text-[#0B1220] text-xs uppercase tracking-wider w-[22%]">
                          Delivery Dimension
                        </th>
                        <th className="p-4 font-semibold text-red-700 text-xs uppercase tracking-wider w-[39%]">
                          Static Gantt Charts
                        </th>
                        <th className="p-4 font-semibold text-emerald-700 text-xs uppercase tracking-wider w-[39%]">
                          Capivue Sprint Planner
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
                Key Takeaway for VPs of Delivery & PMO Leaders
              </h2>
              <p className="text-[17px] text-slate-700 leading-[1.75]">
                When delivery capacity is modeled alongside commercial pricing during pre-sales, VPs of Delivery shift from late-stage approvers to strategic deal architects. Every proposed go-live date is backed by auditable sprint math, every specialist role is accounted for, and the PMO receives a structured, execution-ready delivery plan on Day 1 of contract award.
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

              {/* Deterministic Capacity Spec Card */}
              <div className="bg-[#0F1423] border border-slate-700 rounded-xl p-5">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#0EA5E9] mb-3">
                  Deterministic Capacity Spec
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Formula</div>
                    <div className="font-mono text-xs text-white leading-relaxed">
                      Peak FTEs × 5 Days × Sprint Weeks
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-700">
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Example Pod</div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-slate-400">Peak FTEs</span>
                      <span className="text-lg font-bold text-white font-mono">8.0</span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-slate-400">Days / Sprint</span>
                      <span className="text-lg font-bold text-emerald-400 font-mono">80</span>
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1 leading-relaxed">
                      8.0 FTEs × 5 days × 2-week sprint = 80 person-days capacity
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-700">
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Companion Overheads</div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-slate-400">+ QA</span>
                      <span className="text-sm font-semibold text-emerald-400 font-mono">15%</span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-slate-400">+ PM Governance</span>
                      <span className="text-sm font-semibold text-emerald-400 font-mono">10%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conversion Widget */}
              <div className="bg-gradient-to-br from-[#1E40AF] to-[#0EA5E9] rounded-xl p-5">
                <div className="text-sm font-bold text-white mb-2 leading-snug">
                  Validate Your Next Timeline
                </div>
                <p className="text-xs text-blue-50 leading-relaxed mb-4">
                  Convert a requirement document into phased FTE allocations and capacity-balanced sprints—before Sales signs.
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
            Validate your next pursuit timeline before Sales signs.
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            See how Capivue converts requirement documents into phased FTE allocations and capacity-balanced Agile sprints.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/request-demo"
              className="bg-[#0EA5E9] text-white px-7 py-3 rounded-lg text-sm font-semibold hover:bg-sky-400 transition-colors"
            >
              Book an Enterprise Demo
            </Link>
            <Link
              href="/sprint-planner"
              className="bg-transparent border border-slate-600 text-white px-7 py-3 rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors"
            >
              Explore Sprint Planner →
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
              href="/resources/knowledge-transfer-sla-traps"
              className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#0EA5E9] mb-2">
                Managed Services (AMS)
              </div>
              <h3 className="text-lg font-bold text-[#0B1220] mb-2 group-hover:text-[#1E40AF] transition-colors leading-snug">
                Isolating Knowledge Transfer Waves and 24/7 SLA Traps in Annuity Bids
              </h3>
              <span className="text-sm font-semibold text-[#1E40AF]">Read Briefing →</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}