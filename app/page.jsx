import Mockup from "../components/Mockup";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0EA5E9]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1E40AF] text-xs font-semibold uppercase tracking-wider mb-8">
          <span className="w-2 h-2 rounded-full bg-[#0EA5E9]" />
          Enterprise Intelligence Platform
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-[1.1] relative z-10">
          Win the bid <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E40AF] to-[#0EA5E9]">
            before you write it.
          </span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-slate-600 max-w-2xl relative z-10 leading-relaxed">
          Turn complex RFPs and fragmented knowledge into an evidence-backed response strategy, a controlled proposal blueprint, and review-ready deliverables.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 relative z-10 w-full sm:w-auto">
          <Link href="/request-demo" className="bg-[#1E40AF] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-900 transition-all shadow-lg shadow-[#1E40AF]/20 text-center">
            Book a Demo
          </Link>
          <Link href="/platform" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-lg text-lg font-medium hover:bg-slate-50 transition-all text-center">
            See How It Works
          </Link>
        </div>
                {/* Add the Mockup right here */}
        <Mockup />
      </section>

      {/* SOCIAL PROOF STRIP */}
      <section className="border-y border-slate-200 bg-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-medium text-slate-500 mb-6 uppercase tracking-wider">
            Built for the security and compliance requirements of modern enterprise bid teams
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">
            <span className="text-lg font-bold tracking-tight text-slate-800">Azure Cloud</span>
            <span className="text-lg font-bold tracking-tight text-slate-800">SOC 2 Type I (In Progress)</span>
            <span className="text-lg font-bold tracking-tight text-slate-800">Row-Level Security</span>
            <span className="text-lg font-bold tracking-tight text-slate-800">Zero Data Retention</span>
          </div>
        </div>
      </section>

      {/* METRICS BAND */}
      <section className="bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200 text-center">
          <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
            <span className="text-4xl font-extrabold text-[#1E40AF] tracking-tight">80%</span>
            <span className="mt-2 text-sm font-medium text-slate-500 uppercase tracking-wider">Faster first draft</span>
          </div>
          <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
            <span className="text-4xl font-extrabold text-[#1E40AF] tracking-tight">3x</span>
            <span className="mt-2 text-sm font-medium text-slate-500 uppercase tracking-wider">Bid throughput per seat</span>
          </div>
          <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
            <span className="text-4xl font-extrabold text-[#1E40AF] tracking-tight">+12 pt</span>
            <span className="mt-2 text-sm font-medium text-slate-500 uppercase tracking-wider">Average win rate improvement</span>
          </div>
        </div>
      </section>

      {/* THE 3 PILLARS */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-white border-y border-slate-200">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220]">
            Not just faster drafting. Better decisions.
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            The market is crowded with RFP automation tools. Capivue differentiates on the intelligence that happens before and after the document is written.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl border border-slate-200 hover:border-[#1E40AF]/30 transition-colors bg-[#F8FAFC]">
            <h3 className="text-xl font-bold text-[#0B1220] mb-3">Bid Decision Intelligence</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Before you write a single word, Capivue tells you whether to bid at all. Score the bid (Bid Strength Score /100), generate win themes, and produce a section-level strategy blueprint grounded in the RFP's actual requirements.
            </p>
          </div>
          <div className="p-8 rounded-2xl border border-slate-200 hover:border-[#1E40AF]/30 transition-colors bg-[#F8FAFC]">
            <h3 className="text-xl font-bold text-[#0B1220] mb-3">Commercial Modeling Depth</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Bottom-up pricing, not template pricing. Rate cards with onshore/offshore mix, FTE ramp modeling, transition costs, and full Total Contract Value (TCV) calculation.
            </p>
          </div>
          <div className="p-8 rounded-2xl border border-slate-200 hover:border-[#1E40AF]/30 transition-colors bg-[#F8FAFC]">
            <h3 className="text-xl font-bold text-[#0B1220] mb-3">Delivery Planning</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Turns RFP requirements into user stories with acceptance criteria, packs them into capacity-constrained sprints based on team composition, and exports a full design document.
            </p>
          </div>
        </div>
      </section>

      {/* 5-STEP WORKFLOW */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">
            From RFP to signed contract.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A guided workflow that mirrors exactly what your team sees inside the platform.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          {[
            { step: "01", title: "Discover", desc: "Ingest the RFP and map requirements." },
            { step: "02", title: "Evaluate", desc: "Score the bid and decide if it's worth pursuing." },
            { step: "03", title: "Draft", desc: "Generate evidence-backed responses." },
            { step: "04", title: "Plan", desc: "Model commercial pricing and delivery." },
            { step: "05", title: "Deliver", desc: "Export review-ready deliverables." }
          ].map((item, i) => (
            <div key={i} className="relative p-6 bg-white border border-slate-200 rounded-xl">
              <span className="text-4xl font-extrabold text-slate-100 absolute top-4 right-4">{item.step}</span>
              <h4 className="text-lg font-bold text-[#1E40AF] mb-2 relative z-10">{item.title}</h4>
              <p className="text-sm text-slate-600 relative z-10">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xl text-slate-800 font-medium leading-relaxed italic mb-6">
              "We used to spend two days deciding if an RFP was worth bidding on. Now we make that call in 15 minutes, and we only chase the deals we can actually win."
            </p>
            <div className="text-sm font-bold text-[#0B1220]">Head of Bid Management</div>
            <div className="text-sm text-slate-500">IT Services Firm</div>
          </div>
          <div>
            <p className="text-xl text-slate-800 font-medium leading-relaxed italic mb-6">
              "Capivue turned a blank page into a 70% draft in minutes. My team now spends their time refining strategy instead of hunting for past case studies."
            </p>
            <div className="text-sm font-bold text-[#0B1220]">Pre-Sales Director</div>
            <div className="text-sm text-slate-500">Global Consultancy</div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-[#0B1220] py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            See Capivue on your next bid.
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            Stop writing from scratch. Start winning with strategy.
          </p>
          <Link href="/request-demo" className="inline-block bg-[#0EA5E9] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-sky-400 transition-colors shadow-lg shadow-[#0EA5E9]/20">
            Book a Demo
          </Link>
        </div>
      </section>

    </div>
  );
}