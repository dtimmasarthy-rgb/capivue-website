import Link from "next/link";

export default function Platform() {
  const steps = [
    { step: "01", title: "Discover", desc: "Ingest the RFP and map requirements. Our system extracts every requirement, compliance clause, and evaluation criteria automatically, eliminating manual document review." },
    { step: "02", title: "Evaluate", desc: "Score the bid and decide if it's worth pursuing. We generate a Bid Strength Score (/100) based on your historical win data, competitor presence, and strategic fit." },
    { step: "03", title: "Draft", desc: "Generate evidence-backed responses. Every claim is traceable to a source document. Your team reviews and refines, rather than starting from a blank page." },
    { step: "04", title: "Plan", desc: "Model commercial pricing and delivery. Build bottom-up rate cards, FTE ramp models, and transition plans to ensure the deal is profitable before submission." },
    { step: "05", title: "Deliver", desc: "Export review-ready deliverables. Generate full compliance matrices, draft proposals, and delivery plans in Word, PDF, or Excel." }
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <section className="pt-24 pb-16 px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B1220] mb-6">
          The 5-Phase Bid Intelligence Workflow
        </h1>
        <p className="text-xl text-slate-600">
            Built on a modern Next.js and FastAPI architecture, Capivue is an end-to-end intelligence platform that handles the entire lifecycle of an enterprise bid.
        </p>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <div className="space-y-12">
          {steps.map((item, i) => (
            <div key={i} className="flex gap-8 items-start">
              <div className="text-5xl font-extrabold text-[#1E40AF]/20 font-mono tracking-tighter shrink-0">
                {item.step}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#0B1220] mb-3">{item.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 text-center">
        <Link href="/request-demo" className="bg-[#1E40AF] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-900 transition-colors shadow-lg shadow-[#1E40AF]/20">
          See the Platform in Action
        </Link>
      </section>
    </div>
  );
}