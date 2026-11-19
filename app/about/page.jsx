"use client";
import Link from "next/link";

export default function About() {
  const principles = [
    {
      num: "01",
      title: "Evidence Over Fabrication",
      subtitle: "Zero Hallucinations",
      copy: "In regulated enterprise procurement, a single invented metric or unverified certification is unacceptable. Every AI capability in Capivue is anchored in dual-layer retrieval (Knowledge Repository RAG + Bidder Profile) and enforced with explicit [requires validation] guardrails."
    },
    {
      num: "02",
      title: "Commercial & Engineering Truth",
      subtitle: "Deterministic Math",
      copy: "Proposal narratives mean nothing if the underlying economics fail. We connect requirement analysis directly to bottom-up max(FTE) staffing models, blended onshore/offshore rate cards, and capacity-planned Agile sprints before Sales signs a single commitment."
    },
    {
      num: "03",
      title: "Security & Sovereignty by Architecture",
      subtitle: "Fortress-Grade Isolation",
      copy: "Proprietary rate cards and pre-tender specifications require fortress-grade isolation. We enforce tenant boundaries at the PostgreSQL Row-Level Security (RLS) layer on Microsoft Azure Central India, paired with Zero-Retention Azure AI and Bring Your Own Key (BYOK) routing."
    }
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-800 font-sans selection:bg-[#1E40AF] selection:text-white">

      {/* SECTION 1: EDITORIAL HERO + INSTITUTIONAL FACT SHEET */}
      <section className="bg-white pt-24 pb-20 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1E40AF] text-xs font-bold uppercase tracking-wider mb-6">
              About Capivue
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B1220] mb-6 leading-[1.1]">
              Eliminating bid waste across complex enterprise revenue operations.
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
              Capivue was founded by enterprise technology, cloud architecture, and pre-sales veterans who watched high-performing teams burn hundreds of hours copying requirements into spreadsheets, chasing Subject Matter Experts across chat threads, and pricing multi-year transformations on guesswork.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/request-demo" className="bg-[#1E40AF] text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-[#1E40AF]/30 text-center">
                Book an Enterprise Demo
              </Link>
              <Link href="/security" className="bg-transparent border border-slate-300 text-[#0B1220] px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-slate-50 transition-all text-center">
                Explore Security & Trust Center →
              </Link>
            </div>
          </div>

          {/* Right-Column: Fact Sheet */}
          <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="bg-white px-6 py-4 border-b border-slate-200">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">
                Corporate & Infrastructure Profile
              </div>
            </div>
            <div className="p-6 md:p-8 space-y-5">
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Legal Entity</div>
                <div className="text-sm font-semibold text-[#0B1220]">Capivue Solutions Pvt Ltd</div>
                <div className="text-xs text-slate-500">Registered in India</div>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Primary Cloud Residency</div>
                <div className="text-sm font-semibold text-[#0B1220]">Microsoft Azure Central India</div>
                <div className="text-xs text-slate-500">Pune · DPDP Act Localized</div>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Core Platform Focus</div>
                <div className="text-sm font-semibold text-[#0B1220]">Requirement Auditing · Commercial Modeling · Grounded Proposal Intelligence</div>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Enterprise Ecosystem</div>
                <div className="text-sm font-semibold text-[#0B1220]">Microsoft Entra ID · SharePoint · OneDrive · Teams · Salesforce</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: OUR MISSION & THESIS */}
      <section className="py-20 px-6 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-bold text-[#1E40AF] uppercase tracking-wider mb-3">Our Mission & Thesis</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-6">
              To eliminate bid waste and bring financial and technical precision to enterprise revenue teams.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-bold text-[#0B1220] mb-4">The Problem We Solve</h3>
              <p className="text-slate-600 text-[17px] leading-[1.75]">
                Enterprise IT services, consulting, and managed services organizations routinely respond to 300-page RFPs, Statements of Work (SOWs), and technical specifications under compressed deadlines. Yet most teams still manage multi-million-dollar pursuits using disconnected Excel macros, static Word templates, and email follow-ups—resulting in unpriced scope creep, compliance blind spots, and exhausted senior architects.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0B1220] mb-4">Our Conviction</h3>
              <p className="text-slate-600 text-[17px] leading-[1.75]">
                Winning complex deals should not depend on how fast a team can copy-paste outdated boilerplate. It should depend on the rigor of your qualification, the accuracy of your margin model, and the verifiability of your technical proof. Capivue provides the unified intelligence infrastructure that turns raw requirement documents into decisive, profitable wins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THREE CORE OPERATING PRINCIPLES */}
      <section className="py-20 px-6 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-bold text-[#1E40AF] uppercase tracking-wider mb-3">How We Build</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220]">
              Three engineering principles behind every Capivue release.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {principles.map((p) => (
              <div key={p.num} className="bg-white p-8 rounded-2xl border border-slate-200 flex flex-col">
                <div className="text-3xl font-mono font-bold text-slate-300 mb-4">{p.num}</div>
                <h3 className="text-lg font-bold text-[#0B1220] mb-1 leading-snug">{p.title}</h3>
                <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-4">{p.subtitle}</div>
                <p className="text-slate-600 text-sm leading-relaxed flex-grow">{p.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: DOMAIN PEDIGREE & ENTERPRISE OPERATIONS */}
      <section className="py-20 px-6 bg-[#090D16] border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3">Institutional Pedigree</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
              Built by practitioners who have led complex enterprise pursuits.
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Capivue is led by veterans across enterprise IT services, global delivery management, cloud security architecture, and applied AI systems. Having managed multi-hundred-page tenders, Deal Desk margin reviews, and cross-continental delivery pods firsthand, our team builds software engineered for real-world procurement scrutiny—not superficial demos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Hyderabad Engineering & Operations Hub",
                copy: "Anchoring product engineering, applied AI research, and customer success out of Hyderabad, India."
              },
              {
                title: "Sovereign Azure Cloud Infrastructure",
                copy: "Production workloads deployed on Microsoft Azure Central India (Pune) with global multi-region support for multinational enterprises."
              },
              {
                title: "Direct Enterprise Partnership",
                copy: "Working alongside Bid Directors, CFOs, CISOs, and Delivery Heads to standardize revenue operations across global system integrators and BFSI institutions."
              }
            ].map((pillar, i) => (
              <div key={i} className="bg-[#0F1423] p-6 rounded-xl border border-slate-700">
                <h3 className="text-base font-bold text-white mb-3 leading-snug">{pillar.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{pillar.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CAREERS & CLOSING CONVERSION BANNER */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          
          {/* Careers Block */}
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-8 md:p-10 flex flex-col justify-center">
            <div className="text-xs font-bold text-[#1E40AF] uppercase tracking-wider mb-3">Careers</div>
            <h2 className="text-2xl font-bold text-[#0B1220] mb-4 leading-snug">
              Build the intelligence layer for enterprise deals.
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              We are an engineering-driven, remote-first organization solving hard problems in document intelligence, financial modeling, and enterprise AI governance.
            </p>
            <Link href="/careers" className="text-sm font-semibold text-[#1E40AF] hover:underline w-fit">
              View Open Roles →
            </Link>
          </div>

          {/* Demo Block */}
          <div className="bg-[#0F1423] border border-slate-800 rounded-2xl p-8 md:p-10 flex flex-col justify-center">
            <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">Get Started</div>
            <h2 className="text-2xl font-bold text-white mb-4 leading-snug">
              See Capivue on your next requirement document.
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Schedule a tailored architectural and commercial walkthrough with our solutions team.
            </p>
            <Link href="/request-demo" className="bg-[#0EA5E9] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-sky-400 transition-colors w-fit shadow-lg shadow-[#0EA5E9]/20">
              Book an Enterprise Demo →
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}