import Link from "next/link";

export default function Partners() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B1220] mb-6">
            Partner with Capivue
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Deliver enterprise-grade bid intelligence to your clients and build a new recurring revenue stream.
          </p>
        </div>

        <p className="text-lg text-slate-600 leading-relaxed mb-12 text-center max-w-3xl mx-auto">
          Capivue partners with leading bid consultancies, system integrators, and technology providers to modernize how enterprises respond to complex RFPs. Together, we help clients reduce bid waste, enforce compliance, and accelerate time-to-submission.
        </p>

        <h2 className="text-2xl font-bold text-[#0B1220] mb-6">Why Partner with Capivue?</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-[#0B1220] mb-2">Recurring Revenue</h3>
            <p className="text-slate-600 text-sm">Earn industry-leading commissions on the first year of every subscription you refer.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-[#0B1220] mb-2">Enterprise-Grade Security</h3>
            <p className="text-slate-600 text-sm">Offer your clients a platform that meets strict data residency (Central India) and tenant isolation (Row-Level Security) requirements.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-[#0B1220] mb-2">Co-Selling Support</h3>
            <p className="text-slate-600 text-sm">Jointly pitch Capivue to your clients alongside our enterprise sales team, backed by dedicated technical enablement.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-[#0B1220] mb-2">Dedicated Partner Portal</h3>
            <p className="text-slate-600 text-sm">(Coming Q4) Track referrals, monitor customer activation, and manage payouts in one place.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#0B1220] mb-6">Who We Partner With</h2>
        <ul className="space-y-4 mb-16">
          <li className="flex gap-3">
            <span className="text-[#1E40AF] font-bold">•</span>
            <span className="text-slate-600"><strong className="text-[#0B1220]">Bid & Proposal Consultancies:</strong> Firms that manage RFP responses for clients and want to deliver services 10x faster while earning software margin.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#1E40AF] font-bold">•</span>
            <span className="text-slate-600"><strong className="text-[#0B1220]">System Integrators (SIs):</strong> Technology implementation firms that want to add intelligent bid management to their digital transformation offerings.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#1E40AF] font-bold">•</span>
            <span className="text-slate-600"><strong className="text-[#0B1220]">Fractional Executives:</strong> Independent pre-sales leaders and bid directors who advise multiple enterprise clients.</span>
          </li>
        </ul>

        <div className="bg-[#0B1220] p-12 rounded-2xl text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to expand your service offering?</h2>
          <Link href="mailto:partners@capivuetech.com" className="inline-block bg-[#0EA5E9] text-white px-8 py-3 rounded-lg font-medium hover:bg-sky-400 transition-colors">
            Apply to become a Partner
          </Link>
        </div>
      </div>
    </div>
  );
}