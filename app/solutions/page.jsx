import Link from "next/link";

export default function Solutions() {
  const solutions = [
    {
      title: "Proposal Intelligence",
      desc: "Move from strategy to a controlled blueprint. Generate a strategic brief, win themes, and a section-level response plan before you write a single word.",
      link: "/solutions/proposal-intelligence"
    },
    {
      title: "RFP Intelligence",
      desc: "Extract requirements, build compliance matrices, and ensure every claim is traceable to a source document. Eliminate hallucinations and compliance risk.",
      link: "/solutions/rfp-intelligence"
    },
    {
      title: "AI Agents",
      desc: "Deploy co-pilot agents that read the RFP, build the compliance matrix, and draft responses from your past wins. Eliminate blank-page syndrome.",
      link: "/solutions/ai-agents"
    }
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <section className="pt-24 pb-16 px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B1220] mb-6">
          Solutions for Enterprise Bid Teams
        </h1>
        <p className="text-xl text-slate-600">
          Purpose-built intelligence for the teams responsible for winning complex, high-value contracts.
        </p>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {solutions.map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <h2 className="text-xl font-bold text-[#0B1220] mb-3">{item.title}</h2>
            <p className="text-slate-600 leading-relaxed mb-8 flex-grow">{item.desc}</p>
            <Link href={item.link} className="text-[#1E40AF] font-semibold text-sm hover:underline">
              Learn more →
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}