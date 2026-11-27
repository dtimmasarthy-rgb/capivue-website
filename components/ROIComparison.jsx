export default function ROIComparison() {
  const rows = [
    { metric: "Go / No-Go Decision", manual: "2–3 days of manual reading", capivue: "Under 45 minutes" },
    { metric: "Compliance Matrix", manual: "Error-prone manual copy-paste", capivue: "100% traced to exact RFP page & clause" },
    { metric: "Audit & Governance", manual: "Scattered email threads", capivue: "Timestamped trail + Superadmin-verified logs" },
    { metric: "Data Privacy", manual: "Uncontrolled public AI tools", capivue: "Zero-Retention AI + PostgreSQL RLS" },
  ];

  return (
    <section className="py-20 px-6 bg-[#F8FAFC] border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">The Math of Bid Intelligence</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">
            What changes when you replace Excel + Word with Capivue.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Same RFP. Same team. A fraction of the turnaround time — with a governance trail you can hand to your CISO.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-slate-50 border-b border-slate-200 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            <div className="col-span-3">Metric</div>
            <div className="col-span-4">Manual RFP Process (Excel + Word)</div>
            <div className="col-span-5">With Capivue Bid Intelligence</div>
          </div>
          {rows.map((r, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-5 border-b border-slate-100 last:border-b-0">
              <div className="md:col-span-3">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 md:hidden">Metric</div>
                <div className="font-bold text-[#0B1220] text-sm">{r.metric}</div>
              </div>
              <div className="md:col-span-4">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 md:hidden">Manual</div>
                <div className="text-sm text-slate-500 line-through decoration-slate-300">{r.manual}</div>
              </div>
              <div className="md:col-span-5">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 md:hidden">Capivue</div>
                <div className="text-sm font-semibold text-emerald-700 flex items-start gap-2">
                  <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {r.capivue}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}