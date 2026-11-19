"use client";
import { useState } from "react";
import Link from "next/link";

export default function DeliveryHeads() {
  const [activeStage, setActiveStage] = useState(1);

  const stages = [
    {
      id: 1,
      title: "Scope Handoff",
      legacy: "PMO inherits a proposal full of implicit assumptions—no register, no owners, no margin flags.",
      capivue: "Deduplicated Assumptions Register converts every buried NFR and integration clause into an owned, validation-tracked line item."
    },
    {
      id: 2,
      title: "Risk Mobilisation",
      legacy: "Integration traps and legacy migration surprises surface mid-sprint as unbudgeted change requests.",
      capivue: "NFR & Integration Risk X-Ray audits Technical, Integration, Delivery, and Support dimensions before Sprint 1 kickoff."
    },
    {
      id: 3,
      title: "Staffing & Sprints",
      legacy: "Effort estimates built on unverified surfaces under-staff specialists, forcing emergency contractor spend.",
      capivue: "Effort-to-Architecture Sync maps complexity-tagged requirements to named specialist roles across 1–6 week Agile sprints."
    },
    {
      id: 4,
      title: "Delivery Governance",
      legacy: "No traceable link between what was promised in the bid and what the PMO actually delivers.",
      capivue: "Every deliverable carries structured source metadata (citations_json) with explicit [requires validation] guardrails for sign-off."
    }
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-800 font-sans selection:bg-[#1E40AF] selection:text-white">

      {/* SECTION 1: DARK OBSIDIAN HERO + LIVE TELEMETRY */}
      <section className="bg-[#090D16] pt-24 pb-20 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[#0EA5E9] text-xs font-bold uppercase tracking-wider mb-6">
              For VPs of Delivery & PMO Heads
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              Protect margin and de-risk delivery before the SOW is signed.
            </h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl">
              Delivery leaders inherit the consequences of optimistic pre-sales. Capivue surfaces hidden NFRs, integration traps, and staffing gaps at bid stage—so your PMO plans against verified scope, not wishful assumptions. Every assumption carries an owner, a validation status, and a margin-impact flag.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/request-demo" className="bg-[#1E40AF] text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-[#1E40AF]/30 text-center">
                Request Enterprise Demo
              </Link>
              <Link href="/solutions/solution-architects" className="bg-transparent border border-slate-600 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-slate-800 transition-all text-center">
                For Solution Architects →
              </Link>
            </div>
            <div className="text-xs font-mono text-slate-500 tracking-wide uppercase">
              Deduplicated Assumptions Register • NFR & Integration Risk X-Ray • Sprint-Ready Handoffs
            </div>
          </div>

          {/* Right Visual: Bid-to-Delivery Handoff Telemetry */}
          <div className="bg-[#0F1423] rounded-2xl border border-slate-700 shadow-2xl overflow-hidden relative">
            <div className="bg-slate-800/50 px-4 py-3 border-b border-slate-700 flex justify-between items-center">
              <div className="text-xs font-mono text-slate-300">DEAL-042 · Core Banking Migration Handoff</div>
              <div className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-amber-900/40 text-amber-400 border border-amber-500/30">
                Margin Risk: Elevated
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-3">
              <div className="bg-[#1A2235] border border-slate-700 rounded-lg p-4 flex gap-3 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] mt-1.5 shrink-0"></div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Assumptions Register · Deduplicated</div>
                  <p className="text-sm text-slate-300 leading-relaxed">14 Implicit Assumptions Extracted — 7 Flagged [requires validation], 4 Owned by Solution Architect, 3 Blocked Pending SME Sign-Off.</p>
                </div>
              </div>

              <div className="bg-[#1A2235] border border-slate-700 rounded-lg p-4 flex gap-3 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] mt-1.5 shrink-0"></div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">NFR & Integration Risk X-Ray</div>
                  <p className="text-sm text-slate-300 leading-relaxed">4 Legacy Integration Surfaces · 2 Undocumented APIs · 1 Cutover SLA Conflict (4-hr clause vs. 6–8 hr pattern estimate).</p>
                </div>
              </div>

              <div className="bg-[#1A2235] border border-slate-700 rounded-lg p-4 flex gap-3 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Staffing & Sprint Allocation</div>
                  <p className="text-sm text-slate-300 leading-relaxed">3 Specialist Roles Under-Staffed — 2× Integration Developer, 1× Senior Data Engineer. Sprint 4–6 at Risk of Slippage.</p>
                </div>
              </div>

              <div className="bg-[#1A2235] border border-slate-700 rounded-lg p-4 flex gap-3 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Delivery Governance · Guardrails Active</div>
                  <p className="text-sm text-slate-300 leading-relaxed">100% Citation Coverage on 18 Deliverables — 0 Fabricated Benchmarks, 0 Unverified Credentials, All [requires validation] Markers Signed Off.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: THE DELIVERY & PMO BOTTLENECK */}
      <section className="py-20 px-6 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-bold text-red-500 uppercase tracking-wider mb-3">The Delivery & PMO Bottleneck</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">
              Your delivery engine is running on pre-sales assumptions nobody validated.
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              When complex SOWs move from bid to mobilisation, three systemic gaps erode margin and burn out delivery teams:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200">
              <div className="text-3xl font-mono font-bold text-slate-300 mb-4">01</div>
              <h3 className="text-lg font-bold text-[#0B1220] mb-3">Scope Creep from Buried NFRs</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Uptime SLAs, concurrency ceilings, and data-residency clauses hide in annexures—then surface mid-sprint as unbudgeted change requests that eat directly into delivery margin.</p>
            </div>
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200">
              <div className="text-3xl font-mono font-bold text-slate-300 mb-4">02</div>
              <h3 className="text-lg font-bold text-[#0B1220] mb-3">Staffing Against Fiction</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Effort estimates built on unverified integration surfaces under-staff specialist roles, forcing emergency contractor spend and delivery slippage that the PMO absorbs.</p>
            </div>
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200">
              <div className="text-3xl font-mono font-bold text-slate-300 mb-4">03</div>
              <h3 className="text-lg font-bold text-[#0B1220] mb-3">No Assumption-to-Risk Ledger</h3>
              <p className="text-slate-600 text-sm leading-relaxed">PMOs inherit a proposal full of implicit assumptions with no traceable register—so contractual disputes and margin erosion become inevitable once delivery begins.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: DELIVERY WORKFLOW TRANSFORMATION */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">Operational Shift</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">From bid-stage assumptions to sprint-ready delivery.</h2>
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
                  <h3 className={`font-bold text-sm ${activeStage === stage.id ? "text-[#0B1220]" : "text-slate-600"}`}>{stage.title}</h3>
                </div>
              </button>
            ))}
          </div>

          {/* Content Panel */}
          <div className="lg:w-2/3 bg-white border border-slate-200 rounded-2xl p-8 md:p-10 w-full min-h-[260px] shadow-sm flex flex-col justify-center">
            <div className="mb-6">
              <span className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-2 block">Delivery Stage 0{activeStage}</span>
              <h3 className="text-2xl font-bold text-[#0B1220] mb-4 leading-tight">
                {stages.find(s => s.id === activeStage)?.title}
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 border border-red-100 rounded-lg p-4">
                <div className="text-[10px] font-bold text-red-700 uppercase tracking-widest mb-2 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> Legacy Workflow
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">{stages.find(s => s.id === activeStage)?.legacy}</p>
              </div>
              <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4">
                <div className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest mb-2 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> With Capivue
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">{stages.find(s => s.id === activeStage)?.capivue}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FOUR DELIVERY CONTROLS */}
      <section className="py-20 px-6 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">Built for Delivery & PMO Leaders</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">Four controls to protect margin from bid to go-live.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200">
              <div className="text-xs font-bold text-[#0EA5E9] mb-2">01 · Deduplicated Assumptions Register</div>
              <h3 className="text-xl font-bold text-[#0B1220] mb-3">Every implicit assumption becomes an explicit, owned line item.</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Capivue extracts and deduplicates technical, integration, and operational assumptions from RFP responses—each with an owner, validation status, and margin-impact flag that the PMO can track through delivery.</p>
            </div>
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200">
              <div className="text-xs font-bold text-[#0EA5E9] mb-2">02 · NFR & Integration Risk X-Ray</div>
              <h3 className="text-xl font-bold text-[#0B1220] mb-3">Isolate delivery risk dimensions before mobilisation.</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Audits every requirement across Technical & Architecture, Integration & Legacy Surface, Delivery & Timeline, and Support & Operations—surfacing undocumented APIs and migration schemas as explicit risk entries.</p>
            </div>
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200">
              <div className="text-xs font-bold text-[#0EA5E9] mb-2">03 · Deterministic Guardrails</div>
              <h3 className="text-xl font-bold text-[#0B1220] mb-3">Zero fabricated benchmarks or credentials in delivery plans.</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Every generated deliverable logs structured source metadata (citations_json). When throughput metrics or named credentials are missing from your repository, Capivue inserts an explicit <span className="font-semibold text-amber-700">[requires validation]</span> marker for PMO sign-off.</p>
            </div>
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200">
              <div className="text-xs font-bold text-[#0EA5E9] mb-2">04 · Effort-to-Architecture Sync</div>
              <h3 className="text-xl font-bold text-[#0B1220] mb-3">Realistic specialist staffing and sprint allocation.</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Tag requirements by architectural complexity and map specialist roles (Solution Architect, Data Engineer, Integration Developer, QA Engineer) into phased timelines and 1–6 week Agile sprints.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: ENTERPRISE ECOSYSTEM */}
      <section className="py-16 px-6 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-lg font-bold text-[#0B1220] mb-4">Fits directly into your existing delivery & PMO stack.</h3>
          <p className="text-slate-600 text-sm max-w-3xl mx-auto">
            Ingest bid artifacts from SharePoint & OneDrive • Sync assumption registers to Jira & Azure DevOps • Route SME sign-offs through Microsoft Teams • Govern access via Microsoft Entra ID (SSO).
          </p>
        </div>
      </section>

      {/* SECTION 6: CLOSING CONVERSION BANNER */}
      <section className="py-24 px-6 bg-[#090D16] text-center border-t border-slate-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            Let your PMO plan against verified scope—not pre-sales optimism.
          </h2>
          <p className="text-lg text-slate-400 mb-10">
            See how Capivue converts bid-stage assumptions into a traceable, margin-aware delivery plan before mobilisation begins.
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