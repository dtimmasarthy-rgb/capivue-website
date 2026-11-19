import Link from "next/link";

export default function CaseStudies() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B1220] mb-6">
            Proven at enterprise scale.
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            See how bid teams across IT Services, BFSI, and Consulting are using Capivue to eliminate risk, protect margins, and accelerate delivery planning.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-16">
          
          {/* Case Study 1 */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden grid md:grid-cols-3">
            <div className="bg-[#0B1220] p-10 flex flex-col justify-center text-white">
              <div className="text-[#0EA5E9] font-bold text-sm tracking-wider uppercase mb-4">Enterprise IT Services</div>
              <h2 className="text-2xl font-bold mb-4">260-Page Public Sector Portal RFP</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                A global IT services firm needed to respond to a massive turnkey implementation RFP with strict compliance requirements.
              </p>
            </div>
            <div className="p-10 md:col-span-2 bg-white grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-[#0B1220] mb-2">The Challenge</h3>
                <p className="text-slate-600 text-sm leading-relaxed">The team faced an estimated 120 person-hours just to extract requirements, estimate effort in Excel, and create a first draft across 26 distinct requirements.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0B1220] mb-2">The Capivue Solution</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Used Sprint Planner to model a 525 person-day effort across 15 two-week sprints with an 8.0 FTE pod. Generated the 260-page technical response automatically.</p>
              </div>
              <div className="md:col-span-2 border-t border-slate-100 pt-6 mt-2">
                <h3 className="text-lg font-bold text-[#1E40AF] mb-2">The Result</h3>
                <p className="text-slate-700 font-medium">Reduced initial requirement extraction and first-draft creation from <strong>120 hours down to under 45 minutes</strong> (a 90% time reduction).</p>
              </div>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden grid md:grid-cols-3">
            <div className="bg-[#0B1220] p-10 flex flex-col justify-center text-white">
              <div className="text-[#0EA5E9] font-bold text-sm tracking-wider uppercase mb-4">BFSI & Banking</div>
              <h2 className="text-2xl font-bold mb-4">Core Banking Modernization</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                A Tier-1 Bank faced severe compliance risks and hidden penalties in a highly regulated modernization bid.
              </p>
            </div>
            <div className="p-10 md:col-span-2 bg-white grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-[#0B1220] mb-2">The Challenge</h3>
                <p className="text-slate-600 text-sm leading-relaxed">The RFP contained strict RBI Cybersecurity Directions, DPDP Act data residency rules, and automatic disqualification triggers buried deep in the document.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0B1220] mb-2">The Capivue Solution</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Risk X-Ray automatically isolated the critical regulatory blockers. It also surfaced 40+ technical assumptions regarding legacy data migration and API availability.</p>
              </div>
              <div className="md:col-span-2 border-t border-slate-100 pt-6 mt-2">
                <h3 className="text-lg font-bold text-[#1E40AF] mb-2">The Result</h3>
                <p className="text-slate-700 font-medium">Successfully avoided fixed-price change-request exposure. Responses were grounded in verified FSI reference patterns, flagging unverified claims for SME sign-off before submission.</p>
              </div>
            </div>
          </div>

          {/* Case Study 3 */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden grid md:grid-cols-3">
            <div className="bg-[#0B1220] p-10 flex flex-col justify-center text-white">
              <div className="text-[#0EA5E9] font-bold text-sm tracking-wider uppercase mb-4">Management Consulting</div>
              <h2 className="text-2xl font-bold mb-4">Digital Transformation Pursuit</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                A consulting firm needed to balance aggressive pricing with strict governance and delivery margins.
              </p>
            </div>
            <div className="p-10 md:col-span-2 bg-white grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-[#0B1220] mb-2">The Challenge</h3>
                <p className="text-slate-600 text-sm leading-relaxed">The CFO rejected the initial bid pricing because the margin was too thin. The team needed a way to re-model costs without rewriting the entire proposal.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0B1220] mb-2">The Capivue Solution</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Used the Deal Room to apply a 30% onshore / 70% offshore blended rate, plus 15% QA and 10% PM overhead. A 20% risk contingency was layered onto 22 conditional requirements.</p>
              </div>
              <div className="md:col-span-2 border-t border-slate-100 pt-6 mt-2">
                <h3 className="text-lg font-bold text-[#1E40AF] mb-2">The Result</h3>
                <p className="text-slate-700 font-medium">Leadership received a clear "Bid with Conditions" commercial floor. Multi-stakeholder review (CIO, CISO, CFO) was compressed into a single Win Strategy Blueprint.</p>
              </div>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-[#0B1220] mb-6">See these results on your next bid.</h2>
          <Link href="/request-demo" className="bg-[#1E40AF] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-900 transition-colors shadow-lg shadow-[#1E40AF]/20 inline-block">
            Book an Enterprise Demo
          </Link>
        </div>

      </div>
    </div>
  );
}