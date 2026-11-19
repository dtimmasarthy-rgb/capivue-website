import Link from "next/link";

export default function DeliveryHead() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <section className="pt-24 pb-16 px-6 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1E40AF] text-xs font-semibold uppercase tracking-wider mb-6">
          For Delivery Heads
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B1220] mb-6">
          Don't let Sales sign a deal you can't deliver.
        </h1>
        <p className="text-xl text-slate-600 mb-8">
          Translate AI-estimated person-days into a realistic sprint-by-sprint capacity plan. Know exactly what resources are needed before the contract is signed.
        </p>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
          <h2 className="text-3xl font-bold text-[#0B1220] mb-6">The Sales-Delivery Gap</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Sales promises a 9-month go-live to win the deal. Delivery gets the contract and realizes the scope actually requires 15 months and two extra architects. You are left holding the bag, forced to crunch or ask for a change request.
          </p>

          <h3 className="text-xl font-bold text-[#0B1220] mb-4">How Capivue Solves It</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-[#1E40AF] font-bold">1</div>
              <div>
                <h4 className="font-bold text-[#0B1220] mb-1">Capacity-Constrained Sprint Plans</h4>
                <p className="text-slate-600 text-sm">The Sprint Planner uses real FTE math: Peak FTEs × 5 days × Sprint weeks. It assigns every user story to a sprint, proving whether the timeline is physically possible.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-[#1E40AF] font-bold">2</div>
              <div>
                <h4 className="font-bold text-[#0B1220] mb-1">Delivery Design Documents</h4>
                <p className="text-slate-600 text-sm">Export a complete delivery roadmap, including sprint breakdown tables and mapped requirements. Hand this directly to your engineering managers on Day 1.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 text-center">
        <Link href="/request-demo" className="bg-[#1E40AF] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-900 transition-colors">
          See Capivue for Delivery Heads
        </Link>
      </section>
    </div>
  );
}