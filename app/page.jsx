"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ROIComparison from "../components/ROIComparison";
import HomeFAQ from "../components/HomeFAQ";

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="flex flex-col bg-[#F8FAFC]">
      
      {/* 1. HERO SECTION */}
      <section className="pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0EA5E9]/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1E40AF] text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0EA5E9]" />
              Enterprise Bid Intelligence Infrastructure
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[#0B1220] leading-[1.1] mb-6">
              Win the bid before <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E40AF] to-[#0EA5E9]">
                you write a single word.
              </span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Capivue turns 300-page RFPs, SOWs, and commercial schedules into an audited risk register, a margin-protected pricing model, and an evidence-backed submission—in hours, not weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link href="/request-demo" className="bg-[#1E40AF] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-900 transition-all shadow-lg shadow-[#1E40AF]/20 text-center">
                Book a 15-Min Walkthrough
              </Link>
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-lg text-lg font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5 text-[#1E40AF]" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                Watch Demo
              </button>
            </div>
            {/* Micro-Trust Line */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1"><span className="text-[#0EA5E9]">✓</span> Deployed on Microsoft Azure Central India</span>
              <span className="flex items-center gap-1"><span className="text-[#0EA5E9]">✓</span> PostgreSQL Row-Level Security</span>
              <span className="flex items-center gap-1"><span className="text-[#0EA5E9]">✓</span> Zero-Retention AI</span>
            </div>
          </div>

          {/* Right: Screenshot */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1E40AF]/20 to-[#0EA5E9]/20 rounded-2xl blur-2xl transform scale-95" />
            <div className="relative bg-[#0B1220] rounded-2xl border border-slate-700 shadow-2xl overflow-hidden group">
              <div className="bg-[#1E293B] px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-400/80"></div>
                <div className="ml-4 bg-[#0B1220] text-xs text-slate-400 px-4 py-1 rounded-md flex-1 border border-slate-700 text-center">
                  app.capivuetech.com/deal-room
                </div>
              </div>
              <div className="aspect-video relative overflow-hidden bg-slate-900">
                <Image src="/screenshots/Deal_Room_Dark.png" alt="Deal Room Analytics" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EXECUTIVE METRICS STRIP */}
      <section className="border-y border-slate-200 bg-white py-12 relative z-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200 text-center">
          <div className="flex flex-col items-center justify-center pt-4 md:pt-0 px-4">
            <span className="text-3xl font-extrabold text-[#1E40AF] tracking-tight mb-2">100%</span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Requirement Traceability</span>
          </div>
          <div className="flex flex-col items-center justify-center pt-4 md:pt-0 px-4">
            <span className="text-3xl font-extrabold text-[#1E40AF] tracking-tight mb-2">&lt; 45 Min</span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">To Go/No-Go Decision</span>
          </div>
          <div className="flex flex-col items-center justify-center pt-4 md:pt-0 px-4">
            <span className="text-3xl font-extrabold text-[#1E40AF] tracking-tight mb-2">Zero</span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Hallucinated Proof</span>
          </div>
          <div className="flex flex-col items-center justify-center pt-4 md:pt-0 px-4">
            <span className="text-3xl font-extrabold text-[#1E40AF] tracking-tight mb-2">100%</span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Data Sovereignty</span>
          </div>
        </div>
      </section>

      {/* 2.5 ROI COMPARISON TABLE */}
      <ROIComparison />

      {/* 3. THE CORE ENGINE (4 PILLARS) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">The Capivue Platform</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">
            Four engines. One unified bid lifecycle.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Stop stitching together fragile Excel trackers, Word drafts, and email threads. Capivue connects commercial, legal, and delivery intelligence in a single workspace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Risk X-Ray */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
            <div className="p-8 pb-0">
              <div className="text-[#1E40AF] font-bold text-sm tracking-wider uppercase mb-2">Risk X-Ray</div>
              <h3 className="text-2xl font-bold text-[#0B1220] mb-3">Surface deal-breaker clauses before you commit.</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">Ingest complex PDFs, scanned schedules, and multi-sheet Excel workbooks. Capivue audits every requirement across eight legal, regulatory, and technical dimensions—flagging automatic disqualification triggers and generating a deduplicated Assumptions Register.</p>
              <Link href="/platform/risk-xray" className="text-[#1E40AF] font-semibold text-sm hover:underline mb-6 inline-block">Explore Risk X-Ray →</Link>
            </div>
            <div className="mt-auto border-t border-slate-100 bg-[#0B1220] relative aspect-[16/9]">
               <Image src="/screenshots/Risk_xray.jpg" alt="Risk X-Ray" fill className="object-cover object-top" />
            </div>
          </div>

          {/* Deal Room */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
            <div className="p-8 pb-0">
              <div className="text-[#1E40AF] font-bold text-sm tracking-wider uppercase mb-2">Deal Room</div>
              <h3 className="text-2xl font-bold text-[#0B1220] mb-3">Price complex deliveries with CFO-grade precision.</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">Translate requirement complexity into phased effort estimates across Discovery, Build, SIT, UAT, and Hypercare. Apply custom onshore/offshore blended rate cards, automatic QA and governance overheads, and risk contingency buffers to lock in target margins.</p>
              <Link href="/platform/deal-room" className="text-[#1E40AF] font-semibold text-sm hover:underline mb-6 inline-block">Explore Deal Room →</Link>
            </div>
            <div className="mt-auto border-t border-slate-100 bg-[#0B1220] relative aspect-[16/9]">
               <Image src="/screenshots/commercial_planner.jpg" alt="Deal Room" fill className="object-cover object-top" />
            </div>
          </div>

          {/* Sprint Planner */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
            <div className="p-8 pb-0">
              <div className="text-[#1E40AF] font-bold text-sm tracking-wider uppercase mb-2">Sprint Planner</div>
              <h3 className="text-2xl font-bold text-[#0B1220] mb-3">Turn bid promises into realistic sprint capacity.</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">Eliminate the friction between Sales and Delivery. Capivue converts estimated person-days into capacity-planned Agile sprints based on peak role FTEs—ensuring every proposed go-live date is backed by an executable engineering roadmap.</p>
              <Link href="/platform/sprint-planner" className="text-[#1E40AF] font-semibold text-sm hover:underline mb-6 inline-block">Explore Sprint Planner →</Link>
            </div>
            <div className="mt-auto border-t border-slate-100 bg-[#0B1220] relative aspect-[16/9]">
               <Image src="/screenshots/Sprint_planner2.jpg" alt="Sprint Planner" fill className="object-cover object-top" />
            </div>
          </div>

          {/* Proposal Studio */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
            <div className="p-8 pb-0">
              <div className="text-[#1E40AF] font-bold text-sm tracking-wider uppercase mb-2">Grounded Proposal Studio</div>
              <h3 className="text-2xl font-bold text-[#0B1220] mb-3">Draft with authority. Cite every claim.</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">Lock narrative generation to an executive-approved Win Strategy Blueprint. Capivue synthesizes your past wins, compliance certifications, and reference architectures into submission-ready Word documents—with inline source citations on every section.</p>
              <Link href="/solutions/proposal-intelligence" className="text-[#1E40AF] font-semibold text-sm hover:underline mb-6 inline-block">Explore Proposal Studio →</Link>
            </div>
            <div className="mt-auto border-t border-slate-100 bg-[#0B1220] relative aspect-[16/9]">
               <Image src="/screenshots/Section_Editor_with_Citations_dark.jpg" alt="Proposal Studio" fill className="object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. INDUSTRY BENCHMARKS (CASE STUDIES) */}
      <section className="py-24 px-6 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">Industry Benchmarks</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">
              Engineered for complex, regulated bids.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#F8FAFC] rounded-2xl border border-slate-200 flex flex-col">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">IT Services & System Integrators</div>
              <h3 className="text-xl font-bold text-[#0B1220] mb-4">Compress delivery estimation by over 80%.</h3>
              <p className="text-sm text-slate-600 mb-6 flex-grow leading-relaxed">Map 250+ page turnkey transformation RFPs into phased FTE allocations, 2-week sprint plans, and multi-document submission packs without manual spreadsheet rework.</p>
              <Link href="/solutions/it-services" className="text-[#1E40AF] font-semibold text-sm hover:underline">View IT Services Architecture →</Link>
            </div>
            
            <div className="p-8 bg-[#F8FAFC] rounded-2xl border border-slate-200 flex flex-col">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">BFSI & Regulated Infrastructure</div>
              <h3 className="text-xl font-bold text-[#0B1220] mb-4">Enforce zero-defect regulatory compliance.</h3>
              <p className="text-sm text-slate-600 mb-6 flex-grow leading-relaxed">Automatically cross-check RBI, DPDP Act, and PCI-DSS mandates against your verified compliance profile—isolating hidden operational liabilities before submission.</p>
              <Link href="/solutions/it-services" className="text-[#1E40AF] font-semibold text-sm hover:underline">View BFSI Governance →</Link>
            </div>

            <div className="p-8 bg-[#F8FAFC] rounded-2xl border border-slate-200 flex flex-col">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Management & Strategy Consulting</div>
              <h3 className="text-xl font-bold text-[#0B1220] mb-4">Protect partner margins on fixed-fee engagements.</h3>
              <p className="text-sm text-slate-600 mb-6 flex-grow leading-relaxed">Align executive win themes, commercial contingencies, and stakeholder talking points in one governed workspace before senior partners review the bid.</p>
              <Link href="/solutions/consulting" className="text-[#1E40AF] font-semibold text-sm hover:underline">View Consulting Workflow →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECURITY & GOVERNANCE */}
      <section className="py-24 px-6 bg-[#0B1220]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">Security & Compliance</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Built for your CISO's toughest diligence review.
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Your bid data, rate cards, and intellectual property represent your sharpest competitive edge. Capivue enforces strict cryptographic and architectural isolation at every layer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#1E293B]/50 p-6 rounded-xl border border-slate-700/50">
              <h3 className="font-bold text-white mb-2">Database-Level Tenant Isolation</h3>
              <p className="text-sm text-slate-400">Enforced via PostgreSQL Row-Level Security (RLS) so workspace data is mathematically isolated at the query engine level.</p>
            </div>
            <div className="bg-[#1E293B]/50 p-6 rounded-xl border border-slate-700/50">
              <h3 className="font-bold text-white mb-2">Zero Data Retention AI</h3>
              <p className="text-sm text-slate-400">Inference runs over TLS 1.2+ with contractual zero-retention guarantees—or directly inside your private Azure OpenAI / Vertex AI tenant via BYOK.</p>
            </div>
            <div className="bg-[#1E293B]/50 p-6 rounded-xl border border-slate-700/50">
              <h3 className="font-bold text-white mb-2">Regional Data Residency</h3>
              <p className="text-sm text-slate-400">Hosted on Microsoft Azure Central India (Pune) to support strict Indian data localization mandates, with dedicated global regions for multinational enterprises.</p>
            </div>
            <div className="bg-[#1E293B]/50 p-6 rounded-xl border border-slate-700/50">
              <h3 className="font-bold text-white mb-2">Compliance & Identity</h3>
              <p className="text-sm text-slate-400">Native Microsoft Entra ID (SSO), AES-256 encryption at rest, CSA STAR Level 1 transparency, and active SOC 2 Type I readiness with Type II audit targeted for Q2 2027.</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/security" className="inline-block bg-white text-[#0B1220] px-8 py-3 rounded-lg font-medium hover:bg-slate-100 transition-colors">
              Visit the Trust Center
            </Link>
          </div>
        </div>
      </section>

      {/* 6. INTEGRATIONS */}
      <section className="py-24 px-6 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0B1220] mb-4">Native to the Enterprise Stack</h2>
          <p className="text-slate-600 mb-12 max-w-2xl mx-auto">Ingest capability documents, route SME approvals, and sync deal milestones without forcing teams out of their daily tools.</p>
          
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-[#0B1220] mb-2">Microsoft Entra ID</h4>
              <p className="text-xs text-slate-500">Enterprise Single Sign-On and role-based access governance.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-[#0B1220] mb-2">SharePoint & OneDrive</h4>
              <p className="text-xs text-slate-500">Automated ingestion of past proposals, compliance certificates, and case studies.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-[#0B1220] mb-2">Microsoft Teams</h4>
              <p className="text-xs text-slate-500">Interactive Adaptive Cards that let SMEs review and sign off directly in chat.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-[#0B1220] mb-2">Salesforce</h4>
              <p className="text-xs text-slate-500">Bidirectional sync between CRM opportunity stages and live bid readiness.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 md:col-span-2">
              <h4 className="font-bold text-[#0B1220] mb-2">Custom REST & Webhooks</h4>
              <p className="text-xs text-slate-500">Event-driven extensibility for internal ERP and deal-desk workflows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6.5 BUILT-IN GOVERNANCE, AUDIT TRAIL & MONITORING */}
      <section className="py-24 px-6 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">Enterprise Governance</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">
              Built-in governance, audit trail & monitoring.
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Because you can't win an enterprise deal without proving how the AI arrived at its conclusion.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#F8FAFC] rounded-2xl border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-[#1E40AF]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B1220] mb-3">Complete Action Audit Trail</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Every AI extraction, user edit, and assumption override is timestamped and permanently logged. You know exactly who changed what and when.</p>
            </div>
            
            <div className="p-8 bg-[#F8FAFC] rounded-2xl border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-[#1E40AF]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B1220] mb-3">Verified Audit Log Reports (On Request)</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Tamper-proof audit logs are securely retained and generated exclusively by Capivue Superadmins upon authorized customer request—ensuring strict chain-of-custody for internal compliance reviews or client security audits.</p>
            </div>

            <div className="p-8 bg-[#F8FAFC] rounded-2xl border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-[#1E40AF]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B1220] mb-3">Real-Time System Monitoring</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Continuous visibility into data access patterns and strict tenant isolation. Every query is mathematically sandboxed by PostgreSQL RLS.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6.6 FOUNDING CUSTOMER / PILOT PROGRAM */}
      <section className="py-24 px-6 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#0B1220] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0EA5E9]/20 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
                Founding Customer Program
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Looking for 5 Founding Bid Teams.
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                We are partnering closely with a small cohort of early-adopter teams. Get hands-on white-glove onboarding, custom RFP template setup, and locked-in early-adopter pricing for your first year.
              </p>
              <div className="flex gap-4 text-sm text-slate-400">
                <span className="flex items-center gap-1"><span className="text-[#0EA5E9]">✓</span> White-glove onboarding</span>
                <span className="flex items-center gap-1"><span className="text-[#0EA5E9]">✓</span> Locked-in pricing</span>
              </div>
            </div>

            <div className="relative z-10 shrink-0 w-full md:w-auto">
              <Link href="/request-demo" className="block w-full text-center bg-[#0EA5E9] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-sky-400 transition-colors shadow-lg shadow-[#0EA5E9]/20">
                Apply for the Pilot →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6.7 OBJECTION-BUSTING FAQ */}
      <HomeFAQ />

      {/* 7. CLOSING BANNER */}
      <section className="bg-[#0B1220] py-24 px-6 text-center border-t border-slate-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Stop bidding on guesswork. Start winning with intelligence.
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            See how Capivue transforms your next complex RFP from intake to executive sign-off.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/request-demo" className="bg-[#0EA5E9] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-sky-400 transition-colors shadow-lg shadow-[#0EA5E9]/20">
              Book a 15-Min Walkthrough
            </Link>
            <Link href="/pricing" className="bg-transparent border border-slate-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-slate-800 transition-colors">
              Start Free Pilot
            </Link>
          </div>
        </div>
      </section>

      {/* 8. VIDEO LIGHTBOX MODAL */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm animate-in fade-in duration-200">
          {/* Click outside to close */}
          <div className="absolute inset-0" onClick={() => setIsVideoOpen(false)}></div>
          
          <div className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-slate-700 animate-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-md transition-all"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            {/* The Video */}
            <div className="aspect-video bg-black flex items-center justify-center">
              <video 
                className="w-full h-full" 
                controls 
                autoPlay 
                muted // <--- CRITICAL: Allows autoplay to work
                playsInline
                src="/capivue-demo.mp4" 
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}