import Link from "next/link";
import Image from "next/image";

export default function SprintPlanner() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="pt-24 pb-16 px-6 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1E40AF] text-xs font-semibold uppercase tracking-wider mb-6">
          Delivery & Capacity Intelligence Engine
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B1220] mb-6 max-w-4xl mx-auto leading-[1.1]">
          Validate every delivery timeline before Sales signs the contract.
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Stop discovering resource bottlenecks after the deal is won. Capivue converts extracted RFP requirements and person-day effort estimates into a capacity-planned Agile delivery roadmap—synchronized directly with your Deal Room staffing matrix.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <Link href="/request-demo" className="bg-[#1E40AF] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-900 transition-all shadow-lg shadow-[#1E40AF]/20 text-center">
            Request Enterprise Demo
          </Link>
          <Link href="/platform/capability-grounding" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-lg text-lg font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
            Explore Capability Grounding →
          </Link>
        </div>
        {/* Micro-Trust Line */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-500">
          <span className="flex items-center gap-1"><span className="text-[#0EA5E9]">✓</span> Live Deal Room FTE Sync</span>
          <span className="flex items-center gap-1"><span className="text-[#0EA5E9]">✓</span> Configurable 1–6 Week Sprints</span>
          <span className="flex items-center gap-1"><span className="text-[#0EA5E9]">✓</span> Exportable Delivery Plan & Design Docs</span>
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
              app.capivuetech.com/delivery-plan
            </div>
          </div>
          <div className="aspect-video relative">
            <Image src="/screenshots/Sprint_planner2.jpg" alt="Sprint Planner Dashboard" fill className="object-cover object-top" />
          </div>
        </div>
        
        {/* Callout Badges */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-[#0B1220] mb-2 text-sm">Zero Sales-to-Delivery Disconnect</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Sprint capacity pulls peak FTE headcount directly from your Commercial Resource Matrix.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-[#0B1220] mb-2 text-sm">Automated Backlog Decomposition</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Every scoped RFP requirement maps to sprint-level work items with committed effort days.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-[#0B1220] mb-2 text-sm">Instant Executive Sign-Off</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Delivery Heads audit utilization, sprint count, and go-live feasibility in minutes.</p>
          </div>
        </div>
      </section>

      {/* 3. CORE ARCHITECTURE (METHODOLOGY) */}
      <section className="py-24 px-6 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">Delivery Methodology</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">
              Eliminate guesswork from pre-sales timeline commitments.
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              When bid teams guess delivery dates in isolation, engineering leaders inherit impossible schedules and unpriced overtime. Capivue bridges pre-sales estimation and Agile execution in one governed workflow.
            </p>
          </div>

          <div className="space-y-12">
            {/* Feature 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <span className="text-2xl font-extrabold text-[#1E40AF]">1</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0B1220] mb-3">Direct Synchronization with the Commercial Resource Matrix</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  The Sprint Planner pulls peak role headcount (Solution Architect, Senior Developer, Developer, QA Engineer, Business Analyst, Project Manager) directly from your Deal Room using <strong className="text-[#0B1220]">max(FTE) phase logic</strong>. If Deal Desk adjusts team size or phase weeks, your sprint capacity recalculates immediately.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <span className="text-2xl font-extrabold text-[#1E40AF]">2</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0B1220] mb-3">Deterministic Sprint Capacity & Utilization Math</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Configure sprint cadences from 1 to 6 weeks (defaulting to 2-week sprints). Capivue automatically computes total sprint count (ceil(total_weeks / sprint_length_weeks)) and locks per-sprint capacity using deterministic engineering math—preventing over-committed sprints before submission.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <span className="text-2xl font-extrabold text-[#1E40AF]">3</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0B1220] mb-3">Requirement-to-Sprint Story Allocation</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Capivue distributes interpreted requirements and their person-day effort estimates across sequential sprints—giving Delivery Heads clear visibility into capacity days vs. committed days from Sprint 1 through UAT and Hypercare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CAPACITY SPECIFICATION (MATH) */}
      <section className="py-24 px-6 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">Capacity Specification</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">
              Deterministic math. Zero spreadsheet formulas to break.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Sprint Capacity Formula</h3>
              <div className="bg-[#0B1220] p-6 rounded-xl">
                <p className="font-mono text-sm text-[#0EA5E9] leading-relaxed">Sprint Capacity = <br/><span className="text-white">Peak Team FTEs × 5 Days × Sprint Weeks</span></p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Total Sprint Count Formula</h3>
              <div className="bg-[#0B1220] p-6 rounded-xl">
                <p className="font-mono text-sm text-[#0EA5E9] leading-relaxed">Total Sprints = <br/><span className="text-white">ceil(Total Timeline Weeks ÷ Sprint Length Weeks)</span></p>
              </div>
            </div>
          </div>

          <div className="bg-[#0B1220] p-8 md:p-12 rounded-2xl border border-slate-800">
            <h3 className="text-white font-bold text-xl mb-6">Live Benchmark Example</h3>
            <p className="text-slate-400 text-sm mb-6">260-Page Public Sector Portal RFP</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-2 border-[#0EA5E9] pl-4">
                <div className="text-xs text-slate-500 mb-1 uppercase tracking-wider">Derived Commercial Team</div>
                <div className="text-white font-bold">8.0 Peak FTEs</div>
                <div className="text-xs text-slate-400 mt-1">Architecture, Engineering, QA, and Governance</div>
              </div>
              <div className="border-l-2 border-[#0EA5E9] pl-4">
                <div className="text-xs text-slate-500 mb-1 uppercase tracking-wider">Per-Sprint Capacity</div>
                <div className="text-white font-bold">80.0 person-days</div>
                <div className="text-xs text-slate-400 mt-1">8.0 FTEs × 10 days (2-week sprint)</div>
              </div>
              <div className="border-l-2 border-[#0EA5E9] pl-4">
                <div className="text-xs text-slate-500 mb-1 uppercase tracking-wider">Delivery Horizon</div>
                <div className="text-white font-bold">29 Commercial Weeks</div>
                <div className="text-xs text-slate-400 mt-1">Mapped across 15 capacity-balanced sprints</div>
              </div>
              <div className="border-l-2 border-[#0EA5E9] pl-4">
                <div className="text-xs text-slate-500 mb-1 uppercase tracking-wider">Total Effort</div>
                <div className="text-white font-bold">525 person-days</div>
                <div className="text-xs text-slate-400 mt-1">Fully capacity-validated before submission</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DELIVERY ARTIFACTS */}
      <section className="py-24 px-6 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">Submission & Handoff Artifacts</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">
              Two structured deliverables ready for bid submission and engineering handoff.
            </h2>
            <p className="text-lg text-slate-600">
              Export your capacity-validated delivery plan in one click—both for customer evaluation committees and internal PMO kickoffs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-[#F8FAFC] rounded-2xl border border-slate-200">
              <div className="text-[#1E40AF] font-bold text-sm mb-2">.XLSX</div>
              <h3 className="text-xl font-bold text-[#0B1220] mb-3">Delivery Plan Workbook</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">Quantitative audit for PMO, Delivery Heads, and commercial evaluators.</p>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>• Sprint-by-sprint breakdown (start/end weeks)</li>
                <li>• Available capacity vs. committed effort</li>
                <li>• Role-level FTE allocation</li>
                <li>• Mapped requirement stories</li>
              </ul>
            </div>
            <div className="p-8 bg-[#F8FAFC] rounded-2xl border border-slate-200">
              <div className="text-[#1E40AF] font-bold text-sm mb-2">.DOCX</div>
              <h3 className="text-xl font-bold text-[#0B1220] mb-3">Delivery Design Document</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">Narrative implementation plan ready to embed into your Technical Proposal.</p>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>• Formatted phase schedules (Discovery → Hypercare)</li>
                <li>• Sprint cadence governance</li>
                <li>• Structured execution tables</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ROLE-BASED VALUE STRIP */}
      <section className="py-24 px-6 bg-[#0B1220]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Built for Delivery, Architecture, and Capture Leaders</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-l-2 border-[#0EA5E9] pl-6">
              <h3 className="font-bold text-white mb-2">For VPs of Delivery</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Audit utilization and sprint feasibility before signing off on fixed-date bids—eliminating post-award delivery surprises.</p>
            </div>
            <div className="border-l-2 border-[#0EA5E9] pl-6">
              <h3 className="font-bold text-white mb-2">For Solution Architects</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Validate that complex architectural modules (such as legacy migrations) receive realistic sprint allocation.</p>
            </div>
            <div className="border-l-2 border-[#0EA5E9] pl-6">
              <h3 className="font-bold text-white mb-2">For Bid Managers</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Replace hand-drawn Gantt charts with data-backed delivery schedules that align 100% with your commercial pricing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CLOSING CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-6">
          Never promise a go-live date your engineering team cannot hit.
        </h2>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          See how Capivue turns RFP requirements into a capacity-balanced sprint plan in minutes.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/request-demo" className="bg-[#1E40AF] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-900 transition-colors shadow-lg shadow-[#1E40AF]/20">
            Book an Enterprise Demo
          </Link>
          <Link href="/platform/capability-grounding" className="bg-white text-[#0B1220] border border-slate-200 px-8 py-4 rounded-lg text-lg font-medium hover:bg-slate-50 transition-colors">
            Explore Capability Grounding
          </Link>
        </div>
      </section>

    </div>
  );
}