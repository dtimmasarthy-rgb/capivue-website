import Link from "next/link";

export default function Pricing() {
  const tiers = [
    {
      name: "Trial",
      price: "Free",
      desc: "For evaluation and single-bid testing.",
      features: ["1 Full RFP", "Read-only after expiry", "No exports", "Standard support"],
      cta: "Start Free Trial",
      highlight: false
    },
    {
      name: "Starter",
      price: "$300",
      desc: "For small bid teams getting started.",
      features: ["5 RFPs/month", "Word exports only", "Single workspace", "Standard support"],
      cta: "Get Started",
      highlight: false
    },
    {
      name: "Professional",
      price: "$900",
      desc: "For growing consultancies and pre-sales teams.",
      features: ["20 RFPs/month", "All export formats (Word, PDF, Excel)", "Multi-client isolation", "Priority support"],
      cta: "Get Started",
      highlight: true
    },
    {
      name: "Enterprise",
      price: "$2,500",
      desc: "For large system integrators and global teams.",
      features: ["Unlimited RFPs", "Readiness scoring", "BYOK (Bring Your Own Key)", "Dedicated Success Manager"],
      cta: "Contact Sales",
      highlight: false
    }
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B1220] mb-6">
            Predictable pricing for enterprise teams.
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Start with a free trial. Upgrade when you are ready to win.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {tiers.map((tier, i) => (
            <div key={i} className={`flex flex-col p-8 rounded-2xl border ${tier.highlight ? 'bg-[#0B1220] border-[#0B1220] shadow-xl relative' : 'bg-white border-slate-200 shadow-sm'}`}>
              {tier.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0EA5E9] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h2 className={`text-xl font-bold mb-2 ${tier.highlight ? 'text-white' : 'text-[#0B1220]'}`}>{tier.name}</h2>
              <p className={`text-sm mb-6 h-10 ${tier.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{tier.desc}</p>
              <div className="mb-6">
                <span className={`text-4xl font-extrabold ${tier.highlight ? 'text-white' : 'text-[#0B1220]'}`}>{tier.price}</span>
                {tier.price !== "Free" && <span className={`text-sm ${tier.highlight ? 'text-slate-400' : 'text-slate-500'}`}>/mo</span>}
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <svg className={`w-5 h-5 shrink-0 ${tier.highlight ? 'text-[#0EA5E9]' : 'text-[#1E40AF]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm ${tier.highlight ? 'text-slate-300' : 'text-slate-600'}`}>{feat}</span>
                  </li>
                ))}
              </ul>
              <Link href="/request-demo" className={`w-full py-3 rounded-lg text-center font-medium transition-colors ${tier.highlight ? 'bg-[#0EA5E9] text-white hover:bg-sky-400' : 'bg-[#1E40AF] text-white hover:bg-blue-900'}`}>
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}