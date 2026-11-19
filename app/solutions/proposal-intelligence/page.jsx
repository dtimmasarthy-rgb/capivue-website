"use client";
import { useState } from "react";
import Link from "next/link";

export default function ProposalIntelligence() {
  const [activeStage, setActiveStage] = useState(1);

  const stages = [
    {
      id: 1,
      name: "Blueprint Lock",
      title: "Align every writer before a single paragraph is drafted.",
      copy: "Capivue synthesizes requirement risks and buyer priorities into a structured Win Strategy Blueprint—defining your executive narrative arc, stakeholder talking points (CIO, CISO, CFO, COO), and section-by-section drafting instructions. Once approved by leadership, the blueprint locks as the single source of truth across the entire bid team.",
      control: "Versioned Blueprint Approval Lock"
    },
    {
      id: 2,
      name: "Evidence Grounding",
      title: "Every claim backed by institutional proof—or explicitly flagged.",
      copy: "During section drafting, Capivue automatically queries your Knowledge Repository (past technical proposals, capability decks, architecture diagrams) and structured Bidder Profile (certifications, prior delivery metrics). Every generated section logs exact source metadata (citations_json), while unsupported claims are tagged with [requires validation] for immediate SME review.",
      control: "Zero-Fabrication Negative Constraints"
    },
    {
      id: 3,
      name: "Multi-Document Export",
      title: "Export branded Word, PowerPoint, and Excel deliverables in one click.",
      copy: "Manage complex pursuits with multiple required submission artifacts—such as a Technical Response, Executive Briefing Deck, Statement of Work, and Compliance Matrix—in one workspace. Capivue compiles TipTap rich-text drafts, risk registers, and commercial schedules into formatted .docx, .pptx, and .xlsx files ready for final review.",
      control: "Synchronized Multi-Artifact Export"
    }
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen text-slate-800 font-sans selection:bg-[#1E40AF] selection:text-white">
      
      {/* 1. EDITORIAL HERO & LIVE CITATION PREVIEW */}
      <section className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1E40AF] text-xs font-bold uppercase tracking-wider mb-6">
              Proposal Intelligence & Grounded Authoring
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B1220] mb-6 leading-[1.1]">
              Stop rewriting boilerplate. Draft every submission with verifiable proof.
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Proposal teams burn weeks stitching together outdated Word templates across disconnected folders—risking off-strategy messaging and unverified claims that trigger compliance disqualification. Capivue locks drafting to an executive-approved Win Strategy Blueprint and grounds every section in your verified Knowledge Repository.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/request-demo" className="bg-[#1E40AF] text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-blue-900 transition-all shadow-md shadow-[#1E40AF]/20 text-center">
                Request Enterprise Demo
              </Link>
              <Link href="/solutions/requirement-intelligence" className="bg-white text-slate-900 border border-slate-300 px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-slate-50 transition-all shadow-sm text-center">
                Explore Requirement Intelligence →
              </Link>
            </div>
          </div>

          {/* Right Visual: Live Citation & Guardrail Inspector */}
          <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/40 to-transparent rounded-3xl transform translate-x-4 translate-y-4 -z-10"></div>
            
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xl">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div className="text-sm font-bold text-[#0B1220]">Grounded Draft Preview</div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                </div>
              </div>
              
              <div className="space-y-4 font-serif text-slate-700 leading-relaxed">
                <p>
                  Our proposed regulatory architecture ensures full compliance across state borders. As demonstrated in previous engagements, we successfully migrated legacy systems for the Department of Transport while maintaining continuous uptime.
                </p>
                
                {/* Inline Citations */}
                <div className="flex flex-wrap gap-2 py-2 font-sans">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-semibold tracking-wide">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Source: FSI_Core_Migration_CaseStudy.pdf · p.14
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-50 border border-indigo-200 text-indigo-700 text-[11px] font-semibold tracking-wide">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Profile: ISO 27001 & DPDP Verified
                  </span>
                </div>

                <p>
                  To lead this initiative, we have allocated our Principal Architect, who holds over 15 years of specialized experience in public sector digital transformation.
                </p>

                {/* SME Flag */}
                <div className="flex flex-wrap gap-2 py-2 font-sans">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-700 text-[11px] font-semibold tracking-wide">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    requires validation: Named Lead Architect CV for State Portal
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. THE 3-STAGE AUTHORING ARCHITECTURE */}
      <section className="py-20 px-6 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">The Capivue Mechanism</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">Controlled synthesis from executive strategy to final export.</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Generic AI tools generate plausible-sounding filler before anyone agrees on win themes. Capivue enforces strict governance across every stage of response creation.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Interactive Tabs */}
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
                    <h3 className={`font-bold ${activeStage === stage.id ? "text-[#0B1220]" : "text-slate-600"}`}>{stage.name}</h3>
                  </div>
                </button>
              ))}
            </div>

            {/* Stage Content Panel */}
            <div className="lg:w-2/3 bg-[#FAFAFA] border border-slate-200 rounded-2xl p-8 md:p-10 w-full min-h-[300px] flex flex-col justify-center">
              <div className="mb-6">
                <span className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-2 block">Stage 0{activeStage}</span>
                <h3 className="text-2xl font-bold text-[#0B1220] mb-4 leading-tight">
                  {stages.find(s => s.id === activeStage)?.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {stages.find(s => s.id === activeStage)?.copy}
                </p>
              </div>
              <div className="mt-auto pt-6 border-t border-slate-200">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B1220]">
                  <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  Governance Control: {stages.find(s => s.id === activeStage)?.control}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GOVERNANCE COMPARISON TABLE */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0B1220] mb-4">Generic AI Writers vs. Capivue Proposal Intelligence</h2>
          <p className="text-slate-600">Built for Proposal Directors, Legal, and CISO review.</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-5 font-bold text-slate-500 text-sm w-1/4">Governance Dimension</th>
                  <th className="p-5 font-bold text-slate-500 text-sm w-1/3">Generic AI & Chatbot Tools</th>
                  <th className="p-5 font-bold text-[#1E40AF] text-sm bg-blue-50/50 w-5/12">Capivue Proposal Intelligence</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-5 font-semibold text-[#0B1220] text-sm">Strategic Alignment</td>
                  <td className="p-5 text-sm text-slate-600">Writes isolated answers with no awareness of deal win themes or buyer risks.</td>
                  <td className="p-5 text-sm font-medium text-[#0B1220] bg-blue-50/30">Locked to an approved Win Strategy Blueprint across every section.</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-[#0B1220] text-sm">Factual Grounding</td>
                  <td className="p-5 text-sm text-slate-600">Invents case studies, SLA metrics, and certifications when data is missing.</td>
                  <td className="p-5 text-sm font-medium text-[#0B1220] bg-blue-50/30">Strict RAG + Bidder Profile retrieval; flags gaps with [requires validation].</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-[#0B1220] text-sm">Audit Traceability</td>
                  <td className="p-5 text-sm text-slate-600">No record of where claims originated during Legal or CISO review.</td>
                  <td className="p-5 text-sm font-medium text-[#0B1220] bg-blue-50/30">Structured citations_json audit log linking claims to source files.</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-[#0B1220] text-sm">Multi-Document Scale</td>
                  <td className="p-5 text-sm text-slate-600">Forces manual copy-pasting between Word, PowerPoint, and Excel trackers.</td>
                  <td className="p-5 text-sm font-medium text-[#0B1220] bg-blue-50/30">Unified multi-document workspace exporting .docx, .pptx, and .xlsx.</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-[#0B1220] text-sm">Data Privacy</td>
                  <td className="p-5 text-sm text-slate-600">Prompts may be retained or logged on shared consumer endpoints.</td>
                  <td className="p-5 text-sm font-medium text-[#0B1220] bg-blue-50/30">Zero-retention inference with PostgreSQL RLS and BYOK support.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. SUBMISSION PACK DELIVERABLE GRID */}
      <section className="py-20 px-6 bg-[#0B1220] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">Review-Ready Deliverables</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Four synchronized artifacts exported directly from your workspace.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Technical Proposal",
                format: ".docx",
                desc: "Full multi-section narrative with structured requirement decision cards, scope assumptions, and risk mitigations."
              },
              {
                title: "Draft Sections Export",
                format: ".docx",
                desc: "Clean, editable rich-text narrative document for rapid SME redlining and executive formatting."
              },
              {
                title: "Executive Strategy Deck",
                format: ".pptx",
                desc: "Boardroom-ready presentation covering bid readiness score, effort breakdown, top risks, stakeholder map, and win themes."
              },
              {
                title: "Commercial & Compliance Workbook",
                format: ".xlsx",
                desc: "5-tab audit matrix linking every extracted requirement to effort days, blended rates, and compliance verdicts."
              }
            ].map((item, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:bg-slate-800/80 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-[#0EA5E9]">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>
                  <span className="text-xs font-mono font-bold bg-slate-800 px-2 py-1 rounded text-slate-300">{item.format}</span>
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CLOSING CTA */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-6">
          Turn institutional knowledge into audit-ready submissions in hours.
        </h2>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          See how Capivue eliminates blank-page syndrome and unverified claims across your most complex requirement documents.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/request-demo" className="bg-[#1E40AF] text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-blue-900 transition-all shadow-md shadow-[#1E40AF]/20">
            Book an Enterprise Demo
          </Link>
          <Link href="/solutions/requirement-intelligence" className="bg-white text-slate-900 border border-slate-300 px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-slate-50 transition-all shadow-sm">
            Explore Requirement Intelligence →
          </Link>
        </div>
      </section>

    </div>
  );
}