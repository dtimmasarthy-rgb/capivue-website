"use client";
import { useState } from "react";
import Link from "next/link";

export default function Consulting() {
  const [activeLens, setActiveLens] = useState(1);

  const lenses = [
    {
      id: 1,
      title: "CEO & Steering Committee",
      focus: "Strategic business outcomes, transformation velocity, and executive governance milestones.",
      detail: "Capivue frames the narrative around enterprise value—highlighting phased risk mitigation, executive steering cadence, and clear alignment to the board's strategic objectives."
    },
    {
      id: 2,
      title: "CFO & Procurement",
      focus: "Fixed-fee cost certainty, transparent phase burn rates, and clear commercial assumptions.",
      detail: "Every section is backed by a 5-Tab CFO Workbook, detailing weekly burn rates, onshore/offshore mix, and a Deduplicated Assumptions Register that protects fixed-fee margins."
    },
    {
      id: 3,
      title: "CIO & Architecture Review Board",
      focus: "Reference architectures, regulatory compliance posture (ISO 27001, DPDP, RBI), and realistic sprint execution.",
      detail: "Technical narratives are grounded in verified reference architectures from your Knowledge Repository, with [requires validation] flags for missing proofs and deterministic sprint validation."
    }
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen text-slate-800 font-sans selection:bg-[#1E40AF] selection:text-white">
      
      {/* SECTION 1: EDITORIAL HERO + WIN STRATEGY BLUEPRINT */}
      <section className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-[#4F46E5] text-xs font-bold uppercase tracking-wider mb-6">
              For Management & Strategy Consulting
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] mb-6 leading-[1.1]">
              Protect partner margins and ship boardroom-ready proposals without late-night rewrites.
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
              High-stakes advisory and transformation pursuits demand sharp executive framing backed by defensible fixed-fee economics. Capivue compresses requirement discovery, locks win themes into an executive-approved blueprint, and grounds every narrative section in your firm’s verified methodology and case studies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/request-demo" className="bg-[#4F46E5] text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-indigo-700 transition-all shadow-md shadow-[#4F46E5]/20 text-center">
                Request Enterprise Demo
              </Link>
              <Link href="/solutions/bid-managers" className="bg-white text-slate-900 border border-slate-300 px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-slate-50 transition-all shadow-sm text-center">
                For Bid Managers →
              </Link>
            </div>
            <div className="text-xs font-mono text-slate-500 tracking-wide uppercase">
              Approved Win Strategy Locks • Grounded Methodology Citations • Protected Fixed-Fee Assumptions
            </div>
          </div>

          {/* Right Visual: Win Strategy Blueprint Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
              <div className="text-sm font-bold text-[#0F172A]">WIN_STRATEGY_BLUEPRINT · v2</div>
              <div className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-emerald-100 text-emerald-700 border border-emerald-200">Approved for Drafting</div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-[#FAFAFA] border border-slate-200 rounded-xl p-4">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Pillar 01 · Executive Narrative Arc</div>
                <p className="text-sm text-slate-700 leading-relaxed">Position regulatory modernization as a phased, risk-conditioned operating model rather than a rip-and-replace IT build.</p>
              </div>
              <div className="bg-[#FAFAFA] border border-slate-200 rounded-xl p-4">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Pillar 02 · Grounded Firm Proof</div>
                <p className="text-sm text-slate-700 leading-relaxed">Synthesizes verified transformation outcomes from your Knowledge Repository; flags missing partner credentials with <span className="bg-amber-100 text-amber-800 px-1 rounded font-mono text-[10px]">[requires validation]</span>.</p>
              </div>
              <div className="bg-[#FAFAFA] border border-slate-200 rounded-xl p-4">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Pillar 03 · Commercial & Scope Guardrail</div>
                <p className="text-sm text-slate-700 leading-relaxed">Locks onshore-heavy advisory pod pricing (5-Tab CFO Workbook) with explicit client data-readiness assumptions.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: THE PARTNER BOTTLENECK */}
      <section className="py-20 px-6 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-bold text-[#4F46E5] uppercase tracking-wider mb-3">The Partner Bottleneck</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0F172A] mb-4">
              Senior partners are billed to advise clients—not rewrite weak drafts at 2 AM.
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              When consulting teams respond to complex transformation RFPs, Statements of Work (SOWs), or strategic advisory tenders under compressed timelines, three structural bottlenecks erode realization rates:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200">
              <div className="text-3xl font-mono font-bold text-slate-300 mb-4">01</div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-3">Late-Stage Partner Rewrites</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Engagement managers and associates spend days assembling generic methodology boilerplate that lacks executive sharp edges—forcing senior partners to rewrite the narrative hours before submission.</p>
            </div>
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200">
              <div className="text-3xl font-mono font-bold text-slate-300 mb-4">02</div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-3">Unpriced Scope Creep on Fixed-Fee Advisory</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Advisory bids frequently absorb unbudgeted workshops, stakeholder interviews, and messy client data discovery because implicit dependencies were never captured in a formal Assumptions Register.</p>
            </div>
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200">
              <div className="text-3xl font-mono font-bold text-slate-300 mb-4">03</div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-3">Disconnected Volumes</h3>
              <p className="text-slate-600 text-sm leading-relaxed">The executive briefing deck promises a rapid strategic roadmap while the detailed Statement of Work and commercial rate card reflect different staffing assumptions—creating friction during client oral defenses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW CAPIVUE EMPOWERS CONSULTING */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-bold text-[#4F46E5] uppercase tracking-wider mb-3">The Capivue Mechanism for Consulting</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0F172A] mb-4">From requirement discovery to a boardroom-ready submission package.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-[#4F46E5] mb-6 font-bold">01</div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Executive Win Strategy Blueprint</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Capivue analyzes buyer evaluation criteria across every requirement document and generates a structured Win Strategy Blueprint—mapping buyer concerns across CEO, CFO, CIO, and COO personas. Once the lead partner approves the blueprint, it locks as the single source of truth for every section writer.
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-[#4F46E5] mb-6 font-bold">02</div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Methodology & Case Study Grounding</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Capivue automatically retrieves matching transformation case studies, industry benchmarks, and delivery frameworks from your Knowledge Repository and Bidder Profile—attaching inline source citations and flagging unverified metrics with <span className="bg-amber-100 text-amber-800 px-1 rounded font-mono text-[10px]">[requires validation]</span> for partner sign-off.
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-[#4F46E5] mb-6 font-bold">03</div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Advisory Pod Pricing & Scope Protection</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Configure blended onshore/offshore rate cards across USD, INR, EUR, GBP, and AUD, automatically layer 15% QA and 10% Governance/PM overhead alongside a 20% Contingency Buffer, and attach a Deduplicated Assumptions Register to protect against post-award scope expansion.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: INTERACTIVE STAKEHOLDER LENS SWITCHER */}
      <section className="py-20 px-6 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-xs font-bold text-[#4F46E5] uppercase tracking-wider mb-3">Stakeholder Lens</div>
            <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Tailored to Every Executive Evaluator</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-2 justify-center mb-8">
            {lenses.map((lens) => (
              <button
                key={lens.id}
                onClick={() => setActiveLens(lens.id)}
                className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all ${
                  activeLens === lens.id 
                    ? "bg-[#4F46E5] text-white shadow-md" 
                    : "bg-[#F8FAFC] text-slate-600 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {lens.title}
              </button>
            ))}
          </div>

          <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-8 md:p-10 min-h-[160px] flex flex-col justify-center">
            <div className="text-xs font-bold text-[#4F46E5] uppercase tracking-wider mb-3">Focus Area</div>
            <p className="text-lg text-[#0F172A] font-medium mb-4">{lenses.find(l => l.id === activeLens)?.focus}</p>
            <p className="text-slate-600 leading-relaxed">{lenses.find(l => l.id === activeLens)?.detail}</p>
          </div>
        </div>
      </section>

      {/* SECTION 5: SYNCHRONIZED SUBMISSION DELIVERABLES & CLOSING BANNER */}
      <section className="py-20 px-6 bg-[#090D16] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-bold text-[#4F46E5] uppercase tracking-wider mb-3">Synchronized Deliverables</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Three artifacts exported in one click.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-800">
                <span className="text-xs font-mono font-bold bg-slate-800 px-2 py-1 rounded text-slate-300">.pptx</span>
              </div>
              <h3 className="font-bold text-white mb-2">Executive Strategy Deck</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Boardroom-ready presentation covering bid readiness, win themes, stakeholder map, and phased delivery roadmap.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-800">
                <span className="text-xs font-mono font-bold bg-slate-800 px-2 py-1 rounded text-slate-300">.docx</span>
              </div>
              <h3 className="font-bold text-white mb-2">Technical & Methodology Proposal</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Strategy-locked narrative with inline source citations and requirement traceability.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-800">
                <span className="text-xs font-mono font-bold bg-slate-800 px-2 py-1 rounded text-slate-300">.xlsx</span>
              </div>
              <h3 className="font-bold text-white mb-2">5-Tab Commercial & Assumptions Workbook</h3>
              <p className="text-sm text-slate-400 leading-relaxed">CFO-ready rate card rollup, weekly burn rates, ranked risks, and deduplicated scope assumptions.</p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center border-t border-slate-800 pt-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            Give your partners a strategy-locked first draft—not a blank page.
          </h2>
          <p className="text-lg text-slate-400 mb-10">
            See how Capivue turns complex requirement documents into winning advisory proposals and protected margins.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/request-demo" className="bg-[#4F46E5] text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-indigo-600 transition-colors shadow-lg shadow-[#4F46E5]/20">
              Book an Enterprise Demo
            </Link>
            <Link href="/solutions/bid-managers" className="bg-transparent border border-slate-600 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-slate-800 transition-colors">
              Explore For Bid Managers →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}