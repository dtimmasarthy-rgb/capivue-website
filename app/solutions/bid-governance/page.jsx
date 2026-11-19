"use client";
import Link from "next/link";

export default function BidGovernance() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-800 font-sans selection:bg-[#1E40AF] selection:text-white">
      
      {/* SECTION 1: HERO (Light Architectural Layout) */}
      <section className="pt-24 pb-20 px-6 max-w-7xl mx-auto border-b border-slate-200">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1E40AF] text-xs font-bold uppercase tracking-wider mb-6">
              Bid Governance & Enterprise Orchestration
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B1220] mb-6 leading-[1.1]">
              Eliminate approval bottlenecks across SMEs, Deal Desk, and Leadership.
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
              Complex requirement pursuits stall in scattered email threads, stale spreadsheets, and disconnected storage folders. Capivue orchestrates your entire pursuit lifecycle—enforcing executive Win Strategy locks, routing interactive sign-offs directly into Microsoft Teams, and synchronizing bid status with Salesforce and SharePoint.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/request-demo" className="bg-[#1E40AF] text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-blue-900 transition-all shadow-md shadow-[#1E40AF]/20 text-center">
                Request Enterprise Demo
              </Link>
              <Link href="/security" className="bg-white text-slate-900 border border-slate-300 px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-slate-50 transition-all shadow-sm text-center">
                Visit Security & Trust Center →
              </Link>
            </div>
            <div className="text-xs font-mono text-slate-500 tracking-wide uppercase">
              Microsoft Teams Adaptive Cards • Win Strategy Approval Locks • Salesforce & SharePoint Sync
            </div>
          </div>

          {/* Right Visual: Live Workflow Schematic */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xl">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
              <div className="text-sm font-bold text-[#0B1220]">Pursuit Orchestration</div>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <div className="w-2 h-2 rounded-full bg-slate-200"></div>
              </div>
            </div>
            
            <div className="space-y-4 relative">
              {/* Connector Line */}
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-slate-100 -z-10"></div>

              {/* Step 1 */}
              <div className="flex gap-4 items-start bg-[#F8FAFC] p-4 rounded-xl border border-slate-200">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[#1E40AF] shrink-0 font-bold text-xs">1</div>
                <div>
                  <h4 className="font-bold text-[#0B1220] text-sm">Win Strategy Approval</h4>
                  <p className="text-xs text-slate-500 mt-1">Executive sign-off locks the narrative blueprint.</p>
                  <span className="inline-block mt-2 px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded uppercase tracking-wide">Locked v1.0</span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4 items-start bg-[#F8FAFC] p-4 rounded-xl border border-slate-200">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 shrink-0 font-bold text-xs">2</div>
                <div>
                  <h4 className="font-bold text-[#0B1220] text-sm">SME Validation Required</h4>
                  <p className="text-xs text-slate-500 mt-1">REQ-045 flagged. Adaptive Card pushed to Teams.</p>
                  <span className="inline-block mt-2 px-2 py-0.5 bg-amber-100 text-amber-700 text-[10px] font-bold rounded uppercase tracking-wide">Awaiting Input</span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4 items-start bg-[#F8FAFC] p-4 rounded-xl border border-slate-200">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 font-bold text-xs">3</div>
                <div>
                  <h4 className="font-bold text-[#0B1220] text-sm">CRM & Storage Sync</h4>
                  <p className="text-xs text-slate-500 mt-1">Deal value and status pushed to Salesforce.</p>
                  <span className="inline-block mt-2 px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-bold rounded uppercase tracking-wide">Syncing...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ENTERPRISE ORCHESTRATION ARCHITECTURE */}
      <section className="py-20 px-6 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">The Capivue Mechanism</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">
              Automated execution in the background. Human governance at every gate.
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-8 flex flex-col hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-700 mb-6">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B1220] mb-3">Interactive Microsoft Teams SME Adaptive Cards</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                When requirements are assigned or flagged with [requires validation], Capivue’s Bot Framework integration pushes interactive Adaptive Cards directly to Subject Matter Experts in Microsoft Teams—allowing engineers and architects to submit technical inputs without context-switching or chasing email threads.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-8 flex flex-col hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-[#1E40AF] mb-6">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B1220] mb-3">Executive Win Strategy Approval Gates</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Prevent rogue drafting before leadership aligns on deal posture. Capivue versions your Win Strategy Blueprint (v1, v2) and locks approved win themes, buyer concerns, and commercial conditions as the immutable source of truth for narrative generation.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-8 flex flex-col hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 mb-6">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B1220] mb-3">Bidirectional Enterprise Stack & Custom API Sync</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Connect Capivue seamlessly to Microsoft Entra ID (SSO), SharePoint, OneDrive, and Salesforce, or trigger downstream Deal Desk and ERP workflows via Custom REST APIs and Outbound Webhooks—all powered by asynchronous background workers built for 300-page requirement documents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: GOVERNANCE MATRIX */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">Governance Matrix</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">
            Unstructured Bid Chaos vs. Capivue Orchestration
          </h2>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-5 font-bold text-slate-500 text-sm w-1/4">Dimension</th>
                  <th className="p-5 font-bold text-red-500 text-sm w-3/8">Without Capivue</th>
                  <th className="p-5 font-bold text-emerald-600 text-sm bg-emerald-50/30 w-3/8">With Capivue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-5 font-semibold text-[#0B1220] text-sm">SME Collaboration</td>
                  <td className="p-5 text-sm text-slate-600">Lost email chains and version conflicts.</td>
                  <td className="p-5 text-sm font-medium text-[#0B1220] bg-emerald-50/30">Targeted Microsoft Teams Adaptive Cards with centralized section tracking.</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-[#0B1220] text-sm">Executive Sign-Off</td>
                  <td className="p-5 text-sm text-slate-600">Late-night PDF redlines hours before submission.</td>
                  <td className="p-5 text-sm font-medium text-[#0B1220] bg-emerald-50/30">Locked Win Strategy Blueprint gates and auditable citation logs.</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-[#0B1220] text-sm">Enterprise Connectivity</td>
                  <td className="p-5 text-sm text-slate-600">Manual uploads and stale CRM opportunity fields.</td>
                  <td className="p-5 text-sm font-medium text-[#0B1220] bg-emerald-50/30">Native SharePoint/OneDrive ingestion, Salesforce sync, and BYOK AI routing.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 4: CLOSING BANNER */}
      <section className="bg-[#0B1220] py-24 px-6 text-center border-t border-slate-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            Run every high-value pursuit with institutional discipline.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/request-demo" className="bg-[#0EA5E9] text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-sky-400 transition-colors shadow-lg shadow-[#0EA5E9]/20">
              Book an Enterprise Demo
            </Link>
            <Link href="/security" className="bg-transparent border border-slate-600 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-slate-800 transition-colors">
              Explore Security & Trust Center →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}