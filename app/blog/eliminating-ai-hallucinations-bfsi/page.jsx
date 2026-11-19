"use client";
import { useState } from "react";
import Link from "next/link";

export default function AiHallucinationsArticle() {
  const [tocOpen, setTocOpen] = useState(true);

  const toc = [
    { id: "why-fails", label: "1. Why Generic AI Fails Regulated Audits" },
    { id: "dual-layer", label: "2. Dual-Layer Grounding Architecture" },
    { id: "safety-net", label: "3. The [requires validation] Safety Net" },
    { id: "comparison", label: "4. Uncontrolled LLM vs. Zero-Fabrication" },
    { id: "takeaway", label: "5. Key Takeaway for CISOs & Legal" }
  ];

  const comparison = [
    {
      dimension: "Source of Truth",
      uncontrolled: "Relies on general internet training data and user copy-pasting.",
      governed: "Dual-layer retrieval across Knowledge Repository RAG + Bidder Profile."
    },
    {
      dimension: "Behavior When Data Is Missing",
      uncontrolled: "Silently fabricates case studies, SLA numbers, and certifications.",
      governed: "Explicit [requires validation] flags halt fabrication and alert SMEs."
    },
    {
      dimension: "Audit & Legal Traceability",
      uncontrolled: "Zero visibility into where specific claims originated.",
      governed: "Structured citations_json audit log mapping claims to source files."
    },
    {
      dimension: "Strategic Consistency",
      uncontrolled: "Writes isolated answers disconnected from bid win themes.",
      governed: "Locked to an executive-approved Win Strategy Blueprint across all sections."
    },
    {
      dimension: "Data Sovereignty & Privacy",
      uncontrolled: "Prompts may traverse shared endpoints without regional guarantees.",
      governed: "Azure Central India hosting, PostgreSQL RLS, and Zero-Retention Azure AI / BYOK."
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-[#1E40AF] selection:text-white">

      {/* HEADER BANNER: DARK OBSIDIAN EDITORIAL HEADER */}
      <section className="bg-[#090D16] pt-16 pb-14 px-6 border-b border-slate-800">
        <div className="max-w-5xl mx-auto">

          {/* Breadcrumb */}
          <nav className="text-xs text-slate-500 mb-6 flex items-center gap-2 font-medium">
            <Link href="/resources" className="hover:text-slate-300 transition-colors">Resources</Link>
            <span className="text-slate-700">/</span>
            <Link href="/resources?category=ai-governance" className="hover:text-slate-300 transition-colors">
              AI Governance & Compliance
            </Link>
          </nav>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[#0EA5E9] text-[10px] font-bold uppercase tracking-widest mb-6">
            AI Governance & Compliance · Executive Briefing
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-5 leading-[1.1]">
            Eliminating AI Hallucinations in Regulated BFSI & Public Sector Bids
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mb-8">
            Why generic chatbots fail CISO and procurement audits, and how dual-layer retrieval (Knowledge Repository RAG + Bidder Profile) with explicit [requires validation] flags enforces zero-fabrication governance.
          </p>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500 font-mono tracking-wide">
            <span>Published October 2026</span>
            <span className="w-1 h-1 rounded-full bg-slate-700"></span>
            <span>7 min read</span>
            <span className="w-1 h-1 rounded-full bg-slate-700"></span>
            <span>Capivue AI Architecture & Governance Research</span>
          </div>

        </div>
      </section>

      {/* EXECUTIVE SUMMARY BOX */}
      <section className="px-6 -mt-8 relative z-10 mb-16">
        <div className="max-w-4xl mx-auto bg-[#0F1423] border border-slate-700 rounded-2xl p-8 md:p-10 shadow-2xl">
          <div className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-4">
            Executive Takeaways
          </div>

          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            <span className="font-semibold text-white">Key Thesis:</span> In banking, insurance, and sovereign public sector procurement, a single fabricated case study, invented SLA benchmark, or unverified compliance certification is grounds for immediate bid disqualification and legal blacklisting. Generic Large Language Models are trained to sound plausible - not to enforce contractual truth.
          </p>

          <ol className="space-y-3">
            {[
              "Generic LLM tools optimize for fluent completion, silently inventing credentials and project metrics whenever source evidence is missing.",
              "Dual-layer grounding (Knowledge Repository RAG + Structured Bidder Profile) anchors every response in verified organizational proof and logs inline source citations (citations_json).",
              "Deterministic negative constraints force the engine to insert explicit [requires validation] markers whenever evidence is absent - converting blind spots into auditable SME review tasks."
            ].map((point, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="shrink-0 w-6 h-6 rounded-full bg-[#0EA5E9]/15 border border-[#0EA5E9]/30 text-[#0EA5E9] text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <span className="text-sm text-slate-300 leading-relaxed">{point}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* BODY: 2-COLUMN EDITORIAL GRID (68/32) */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">

          {/* MAIN COLUMN */}
          <article className="lg:col-span-2 max-w-3xl">

            {/* Section 1 */}
            <div id="why-fails" className="mb-14 scroll-mt-24">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#1E40AF] mb-3">
                Section 01
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1220] mb-5 leading-tight">
                Why Generic AI Fails Regulated Procurement Audits
              </h2>
              <div className="space-y-5 text-[17px] text-slate-700 leading-[1.75]">
                <p>
                  Enterprise bid teams in Banking, Financial Services, Insurance (BFSI), and Public Sector Infrastructure operate under zero-tolerance compliance rules. A single 300-page tender frequently mandates strict adherence to RBI Cybersecurity Directions, DPDP Act data localization, PCI-DSS 4.0 controls, ISO 27001 certifications, and state procurement disqualification clauses.
                </p>
                <p>
                  When pre-sales teams paste these requirements into general-purpose AI assistants, the underlying model behaves as a probabilistic text predictor. If a tender demands "proven experience migrating 10 million core banking records with sub-second latency," and the model has no access to your firm's actual delivery records, it will routinely generate a confident, plausible-sounding paragraph claiming that exact capability.
                </p>
              </div>
            </div>

            {/* Pull Quote */}
            <blockquote className="border-l-4 border-[#1E40AF] pl-6 py-2 my-10">
              <p className="text-lg md:text-xl font-medium text-[#0B1220] leading-relaxed italic">
                "In consumer software, an AI hallucination is a minor inconvenience. In a regulated bank or government tender, an unverified capability claim is a breach of bid compliance that voids months of capture investment."
              </p>
            </blockquote>

            <div className="space-y-5 text-[17px] text-slate-700 leading-[1.75] mb-14">
              <p>
                Even worse, generic tools provide no audit trail. When Legal, Compliance, or the CISO reviews a 250-page draft hours before submission, reviewers cannot tell which paragraphs came from approved case studies and which were invented by the model.
              </p>
            </div>

            {/* Section 2 */}
            <div id="dual-layer" className="mb-14 scroll-mt-24">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#1E40AF] mb-3">
                Section 02
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1220] mb-5 leading-tight">
                Dual-Layer Grounding (Knowledge Repository RAG + Bidder Profile)
              </h2>
              <div className="space-y-5 text-[17px] text-slate-700 leading-[1.75]">
                <p>
                  Eliminating fabrication requires separating narrative synthesis from institutional facts. Instead of relying on model weights to recall your company's capabilities, Capivue enforces a dual-layer retrieval architecture before a single sentence is drafted:
                </p>
              </div>

              {/* Guardrail Callout Boxes */}
              <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6 my-6">
                <h3 className="font-bold text-[#0B1220] mb-2 text-base">
                  Layer 01 — Unstructured Knowledge Repository (Multi-Format RAG)
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Capivue indexes your firm's past technical proposals, architecture runbooks, security whitepapers, capability decks (.pptx), multi-sheet Excel schedules (.xlsx), and scanned compliance certificates (processed via Tesseract OCR)—alongside 200+ pre-seeded BFSI and enterprise reference patterns.
                </p>
              </div>

              <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6 my-6">
                <h3 className="font-bold text-[#0B1220] mb-2 text-base">
                  Layer 02 — Structured Bidder Profile (Verified Corporate Credentials)
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Active certifications (ISO 27001, SOC 2, PCI-DSS), regulatory compliance posture (RBI, DPDP), hosting regions (Microsoft Azure Central India), and validated delivery metrics are stored as structured corporate truth and injected directly into the evaluation context.
                </p>
              </div>

              <div className="space-y-5 text-[17px] text-slate-700 leading-[1.75]">
                <p>
                  Every requirement extracted from a buyer's tender or Statement of Work (SOW) is cross-examined against both layers simultaneously. Rather than guessing whether your organization meets a mandatory clause, Capivue classifies compliance accurately into Yes, Yes with Conditions, No, or Administrative.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div id="safety-net" className="mb-14 scroll-mt-24">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#1E40AF] mb-3">
                Section 03
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1220] mb-5 leading-tight">
                The [requires validation] Safety Net & Inline Citations
              </h2>
              <div className="space-y-5 text-[17px] text-slate-700 leading-[1.75] mb-6">
                <p>
                  The true test of enterprise AI governance is not how well it writes when data is abundant—it is how it behaves when proof is missing.
                </p>
                <p>
                  Capivue enforces strict negative constraints across both requirement interpretation and section drafting:
                </p>
              </div>

              <div className="space-y-5">
                {[
                  {
                    title: "Inline Source Attribution (citations_json)",
                    body: "Every generated section records structured citation metadata linking claims directly back to the exact repository document, page reference, or Bidder Profile credential used during synthesis."
                  },
                  {
                    title: "Explicit Gap Tagging ([requires validation])",
                    body: "When a buyer requirement demands a named Lead Architect credential (such as a CISSP certification), a specific historical SLA metric, or a niche regulatory approval not found in your repository, Capivue is strictly prohibited from inventing it. Instead, it inserts an explicit [requires validation] flag inline."
                  },
                  {
                    title: "Targeted SME Routing in Microsoft Teams",
                    body: "Bid Directors filter flagged sections immediately and push targeted validation requests to Subject Matter Experts via Microsoft Teams Adaptive Cards—ensuring every gap is resolved by a human owner before export."
                  }
                ].map((item, i) => (
                  <div key={i} className="border-l-2 border-[#1E40AF] pl-5">
                    <h3 className="font-bold text-[#0B1220] mb-2 text-base leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4: Comparison Table */}
            <div id="comparison" className="mb-14 scroll-mt-24">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#1E40AF] mb-3">
                Section 04
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1220] mb-5 leading-tight">
                Uncontrolled LLM Drafting vs. Zero-Fabrication Governance
              </h2>

              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="bg-[#F8FAFC] border-b border-slate-200">
                        <th className="p-4 font-bold text-[#0B1220] text-xs uppercase tracking-wider w-[22%]">
                          Governance Control
                        </th>
                        <th className="p-4 font-semibold text-red-700 text-xs uppercase tracking-wider w-[39%]">
                          Uncontrolled AI & Chatbots
                        </th>
                        <th className="p-4 font-semibold text-emerald-700 text-xs uppercase tracking-wider w-[39%]">
                          Capivue Grounded Engine
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparison.map((row, i) => (
                        <tr key={i} className="border-b border-slate-100 last:border-b-0">
                          <td className="p-4 text-sm font-semibold text-[#0B1220] align-top">
                            {row.dimension}
                          </td>
                          <td className="p-4 text-sm text-slate-600 leading-relaxed align-top">
                            {row.uncontrolled}
                          </td>
                          <td className="p-4 text-sm text-slate-700 leading-relaxed align-top bg-emerald-50/30">
                            {row.governed}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div id="takeaway" className="mb-14 scroll-mt-24">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#1E40AF] mb-3">
                Section 05
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1220] mb-5 leading-tight">
                Key Takeaway for CISOs, Legal & Bid Directors
              </h2>
              <p className="text-[17px] text-slate-700 leading-[1.75]">
                Enterprise AI adoption in regulated revenue operations depends on verifiability, not just velocity. By combining dual-layer repository grounding, database-level tenant isolation, and explicit [requires validation] guardrails, organizations can compress proposal drafting from weeks to hours—while giving Legal, Compliance, and executive reviewers complete confidence in every word submitted.
              </p>
            </div>

          </article>

          {/* SIDEBAR (sticky) */}
          <aside className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-24 space-y-6">

              {/* TOC */}
              <div className="bg-white border border-slate-200 rounded-xl p-5">
                <button
                  onClick={() => setTocOpen(!tocOpen)}
                  className="w-full flex items-center justify-between mb-3"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    On This Page
                  </span>
                  <span className="text-slate-400 text-xs">{tocOpen ? "−" : "+"}</span>
                </button>
                {tocOpen && (
                  <nav className="space-y-1">
                    {toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block text-sm text-slate-600 hover:text-[#1E40AF] hover:bg-slate-50 transition-colors py-1.5 px-2 rounded -mx-2 leading-snug"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                )}
              </div>

              {/* Zero-Fabrication Guardrail Spec Card */}
              <div className="bg-[#0F1423] border border-slate-700 rounded-xl p-5">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#0EA5E9] mb-3">
                  Zero-Fabrication Guardrail Spec
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Grounding Layer</div>
                    <div className="text-xs text-slate-300 font-medium leading-snug">
                      Dual-Layer RAG + Bidder Profile
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-700">
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Audit Artifact</div>
                    <div className="font-mono text-xs text-emerald-400">
                      citations_json
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1 leading-relaxed">
                      Structured metadata per claim → source document
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-700">
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Missing Evidence</div>
                    <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-amber-900/30 border border-amber-500/30 text-[10px] font-mono text-amber-400">
                      <span>⚠</span> [requires validation]
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1.5 leading-relaxed">
                      Halts fabrication → routes to SME via Teams
                    </div>
                  </div>
                </div>
              </div>

              {/* Conversion Widget */}
              <div className="bg-gradient-to-br from-[#1E40AF] to-[#0EA5E9] rounded-xl p-5">
                <div className="text-sm font-bold text-white mb-2 leading-snug">
                  See Grounded Drafting Live
                </div>
                <p className="text-xs text-blue-50 leading-relaxed mb-4">
                  Upload capability documents and a requirement spec—watch zero-fabrication drafting with inline citations in real time.
                </p>
                <Link
                  href="/request-demo"
                  className="block text-center bg-white text-[#1E40AF] px-4 py-2.5 rounded-lg text-xs font-bold hover:bg-slate-100 transition-colors"
                >
                  Book an Enterprise Demo →
                </Link>
              </div>

            </div>
          </aside>

        </div>
      </section>

      {/* BOTTOM CONVERSION CALLOUT */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto bg-[#090D16] rounded-2xl p-10 md:p-14 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
            See Capivue's Grounded Proposal Engine and Citation Inspector live.
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Upload your capability documents and requirement specs to experience zero-fabrication drafting with inline source citations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/request-demo"
              className="bg-[#0EA5E9] text-white px-7 py-3 rounded-lg text-sm font-semibold hover:bg-sky-400 transition-colors"
            >
              Book an Enterprise Demo
            </Link>
            <Link
              href="/capability-grounding"
              className="bg-transparent border border-slate-600 text-white px-7 py-3 rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors"
            >
              Explore Capability Grounding →
            </Link>
          </div>
        </div>
      </section>

      {/* RELATED BRIEFINGS */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-4">
            Related Briefings
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <Link
              href="/resources/sprint-planning-before-award"
              className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#0EA5E9] mb-2">
                Delivery Engineering
              </div>
              <h3 className="text-lg font-bold text-[#0B1220] mb-2 group-hover:text-[#1E40AF] transition-colors leading-snug">
                Sprint Planning Before Contract Award: Closing the Sales-to-Delivery Gap
              </h3>
              <span className="text-sm font-semibold text-[#1E40AF]">Read Briefing →</span>
            </Link>
            <Link
              href="/resources/postgresql-row-level-security"
              className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#0EA5E9] mb-2">
                Enterprise Architecture
              </div>
              <h3 className="text-lg font-bold text-[#0B1220] mb-2 group-hover:text-[#1E40AF] transition-colors leading-snug">
                Database-Level Multi-Tenancy: Designing PostgreSQL Row-Level Security for Sensitive Bids
              </h3>
              <span className="text-sm font-semibold text-[#1E40AF]">Read Briefing →</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}