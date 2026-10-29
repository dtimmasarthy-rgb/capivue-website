import Link from "next/link";

export default function AIAgents() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight text-[#0B1220] mb-6">
          AI Agents for Bid Teams
        </h1>
        <p className="text-xl text-slate-600 mb-12">
          Eliminate blank-page syndrome. Deploy co-pilot agents that handle the heavy lifting of compliance and drafting, so your team can focus on strategy.
        </p>

        <h2 className="text-2xl font-bold text-[#0B1220] mb-4">Auto-Build Compliance Matrices</h2>
        <p className="text-lg text-slate-600 leading-relaxed mb-8">
          Agents read the RFP, extract every requirement, and map them to standard company capabilities. What used to take a week now takes minutes.
        </p>

        <h2 className="text-2xl font-bold text-[#0B1220] mb-4">Draft from Past Wins</h2>
        <p className="text-lg text-slate-600 leading-relaxed mb-12">
          Agents generate tailored responses by pulling evidence and case studies directly from your company's past proposals. The output is a 70% draft grounded in actual evidence, ready for human refinement.
        </p>

        <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl mb-12">
          <p className="text-[#1E40AF] font-semibold text-sm">
            Human-in-the-loop by design. Capivue agents are co-pilots, not autonomous submitters. You maintain final review and approval.
          </p>
        </div>

        <Link href="/request-demo" className="bg-[#1E40AF] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-900 transition-colors">
          See AI Agents in Action
        </Link>
      </div>
    </div>
  );
}