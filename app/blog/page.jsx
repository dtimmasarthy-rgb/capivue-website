import Link from "next/link";

export default function Blog() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B1220] mb-6">
            Capivue Insights
          </h1>
          <p className="text-xl text-slate-600">
            Strategy, AI, and the future of enterprise bid management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Article 1 - Live */}
          <Link href="/blog/why-40-percent-of-bids-should-never-be-submitted" className="group">
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
              <div className="h-48 bg-slate-100 flex items-center justify-center border-b border-slate-200">
                <span className="text-slate-400 font-medium">Cover Image Placeholder</span>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <span className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-2">Strategy</span>
                <h2 className="text-xl font-bold text-[#0B1220] mb-3 group-hover:text-[#1E40AF] transition-colors">Why 40% of Enterprise Bids Should Never Be Submitted</h2>
                <p className="text-slate-600 text-sm mb-4 flex-grow">The traditional bid process incentivizes teams to chase every RFP. But winning the wrong deals is worse than losing the right ones.</p>
                <span className="text-sm font-semibold text-[#1E40AF]">Read Article →</span>
              </div>
            </div>
          </Link>

          {/* Article 2 - Coming Soon */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden opacity-60">
            <div className="h-48 bg-slate-100 flex items-center justify-center border-b border-slate-200">
              <span className="text-slate-400 font-medium">Coming Soon</span>
            </div>
            <div className="p-6">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Commercial</span>
              <h2 className="text-xl font-bold text-[#0B1220] mb-3">The True Cost of Template-Based Pricing</h2>
              <p className="text-slate-600 text-sm">Why bottom-up FTE ramp modeling is essential for maintaining margin in managed services deals.</p>
            </div>
          </div>

          {/* Article 3 - Coming Soon */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden opacity-60">
            <div className="h-48 bg-slate-100 flex items-center justify-center border-b border-slate-200">
              <span className="text-slate-400 font-medium">Coming Soon</span>
            </div>
            <div className="p-6">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Delivery</span>
              <h2 className="text-xl font-bold text-[#0B1220] mb-3">Sprint Planning Before Award</h2>
              <p className="text-slate-600 text-sm">A new standard for bid teams: how to plan delivery and user stories before the contract is even signed.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}