"use client";
import { useState } from "react";
import Link from "next/link";

export default function TeamsSmeArticle() {
  const [tocOpen, setTocOpen] = useState(true);

  const toc = [
    { id: "fire-drill", label: "1. Anatomy of the Final-48-Hour Fire Drill" },
    { id: "win-strategy", label: "2. Locking the Win Strategy Blueprint" },
    { id: "adaptive-cards", label: "3. Meeting Engineers in Microsoft Teams" },
    { id: "comparison", label: "4. Email Chasing vs. Teams Orchestration" },
    { id: "takeaway", label: "5. Key Takeaway for Bid Managers" }
  ];

  const comparison = [
    {
      dimension: "SME Context",
      legacy: "Engineers receive 200-page PDFs with vague \"please review\" emails.",
      governed: "Focused Adaptive Card showing only the assigned requirement and gap."
    },
    {
      dimension: "Strategic Alignment",
      legacy: "SMEs write in isolation without seeing overall bid win themes.",
      governed: "Governed by a locked Win Strategy Blueprint across every section."
    },
    {
      dimension: "Tool Friction",
      legacy: "Requires logging into separate portals or editing heavy Word files.",
      governed: "Submit technical sign-offs directly inside Microsoft Teams in seconds."
    },
    {
      dimension: "Version Control",
      legacy: "Multiple conflicting .docx files circulating 24 hours before deadline.",
      governed: "Single live workspace syncing directly to .docx, .pptx, and .xlsx exports."
    },
    {
      dimension: "Audit Visibility",
      legacy: "Bid managers manually track completion in status spreadsheets.",
      governed: "Real-time section readiness tracking across the entire Submission Pack."
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-[#1E40AF] selection:text-white">

      {/* HEADER BANNER */}
      <section className="bg-[#090D16] pt-16 pb-14 px-6 border-b border-slate-800">
        <div className="max-w-5xl mx-auto">

          <nav className="text-xs text-slate-500 mb-6 flex items-center gap-2 font-medium">
            <Link href="/resources" className="hover:text-slate-300 transition-colors">Resources</Link>
            <span className="text-slate-700">/</span>
            <Link href="/resources?category=delivery" className="hover:text-slate-300 transition-colors">
              Delivery Engineering
            </Link>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[#0EA5E9] text-[10px] font-bold uppercase tracking-widest mb-6">
            Bid Orchestration & Delivery Engineering · Executive Briefing
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-5 leading-[1.1]">
            Ending the 48-Hour SME Fire Drill with Interactive Microsoft Teams Workflows
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mb-8">
            How modern bid managers replace scattered email chains with locked Win Strategy Blueprints and automated Teams Adaptive Cards for rapid technical sign-off.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500 font-mono tracking-wide">
            <span>Published August 2026</span>
            <span className="w-1 h-1 rounded-full bg-slate-700"></span>
            <span>5 min read</span>
            <span className="w-1 h-1 rounded-full bg-slate-700"></span>
            <span>Capivue Bid Operations & Enterprise Workflow Research</span>
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
            <span className="font-semibold text-white">Key Thesis:</span> Complex enterprise pursuits rarely stall because the organization lacks technical expertise—they stall because Subject Matter Experts (SMEs) are trapped outside the proposal workflow. When bid managers chase busy architects across email threads and disconnected Word attachments, technical sign-offs collapse into a chaotic 48-hour fire drill before submission.
          </p>

          <ol className="space-y-3">
            {[
              "Locking an executive Win Strategy Blueprint before drafting begins gives SMEs clear buyer context and section-level instructions instead of an intimidating blank page.",
              "Routing targeted [requires validation] flags and assigned requirements directly into Microsoft Teams via interactive Adaptive Cards lets architects submit responses in chat without context-switching.",
              "Real-time synchronization between Teams submissions, section status tracking, and multi-document exports eliminates late-night version conflicts."
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

      {/* BODY: 2-COLUMN EDITORIAL GRID */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">

          {/* MAIN COLUMN */}
          <article className="lg:col-span-2 max-w-3xl">

            {/* Section 1 */}
            <div id="fire-drill" className="mb-14 scroll-mt-24">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#1E40AF] mb-3">
                Section 01
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1220] mb-5 leading-tight">
                Anatomy of the Final-48-Hour Bid Fire Drill
              </h2>
              <div className="space-y-5 text-[17px] text-slate-700 leading-[1.75]">
                <p>
                  Every Bid Director and Delivery Head recognizes the pattern. A 300-page requirement document or fixed-price Statement of Work (SOW) lands with a three-week turnaround. During Week 1, the bid team extracts requirements into Excel. During Week 2, email requests go out to Principal Architects, Security Leads, and Practice Heads asking them to "review Section 8 and confirm our integration and SLA posture."
                </p>
                <p>
                  Because senior engineers are focused on live client deliveries, those emails sit unread beneath dozens of project notifications. By Day 18—48 hours before portal submission—the bid manager is chasing five different SMEs across chat, email, and urgent calls while reconciling conflicting Word attachments (Technical_Response_v4_FINAL_ArchitectEdits.docx).
                </p>
              </div>
            </div>

            {/* Pull Quote */}
            <blockquote className="border-l-4 border-[#1E40AF] pl-6 py-2 my-10">
              <p className="text-lg md:text-xl font-medium text-[#0B1220] leading-relaxed italic">
                "Subject Matter Experts do not ignore bid requests out of apathy—they ignore them because legacy proposal workflows force engineers to dig through 200-page documents just to answer a single technical question."
              </p>
            </blockquote>

            {/* Section 2 */}
            <div id="win-strategy" className="mb-14 scroll-mt-24">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#1E40AF] mb-3">
                Section 02
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1220] mb-5 leading-tight">
                Locking the Win Strategy Blueprint Before Involving SMEs
              </h2>
              <p className="text-[17px] text-slate-700 leading-[1.75] mb-6">
                The first step to eliminating SME friction is ensuring architects never receive an unstructured blank page. Before any technical section is assigned, Capivue synthesizes requirement risks, compliance gaps, and buyer evaluation priorities into a versioned Win Strategy Blueprint:
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Executive Narrative Arc & Win Themes",
                    body: "Defines the core positioning across the entire pursuit so every technical answer reinforces the same strategic differentiation."
                  },
                  {
                    title: "Stakeholder Concern Mapping",
                    body: "Identifies what the buyer's CIO, CISO, COO, and CFO care about most so SMEs know which proof points matter."
                  },
                  {
                    title: "Section-Level Drafting Instructions",
                    body: "Breaks complex proposals into clear, scoped sections with explicit buyer concerns and required evidence—locked by leadership as the single source of truth."
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

              <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6 mt-6">
                <p className="text-sm text-slate-600 leading-relaxed">
                  When Capivue drafts the initial response using your Knowledge Repository and Bidder Profile, it automatically populates verified reference architectures and flags only the specific gaps that require human expertise using <span className="font-mono text-xs bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded border border-amber-200">[requires validation]</span> markers.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div id="adaptive-cards" className="mb-14 scroll-mt-24">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#1E40AF] mb-3">
                Section 03
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1220] mb-5 leading-tight">
                Meeting Engineers in Microsoft Teams with Adaptive Cards
              </h2>
              <p className="text-[17px] text-slate-700 leading-[1.75] mb-6">
                Instead of forcing busy architects to log into another tool, learn a complex editor, or hunt for their assigned paragraphs, Capivue brings the exact decision directly into Microsoft Teams. Powered by Capivue's Bot Framework integration, requirement assignments and validation flags trigger an interactive Adaptive Card inside the SME's personal Teams chat:
              </p>

              <div className="space-y-4">
                {[
                  {
                    n: "1",
                    title: "Focused Context Card",
                    body: "Displays the exact project name, assigned requirement text (REQ-015 · Legacy Data Migration Strategy), and the specific validation question flagged during drafting."
                  },
                  {
                    n: "2",
                    title: "Inline Response Capture",
                    body: "The SME types their technical response, confirms an SLA parameter, or validates an architectural assumption directly inside the Teams card and clicks Submit Response."
                  },
                  {
                    n: "3",
                    title: "Instant Workspace Synchronization",
                    body: "Capivue's backend webhook receives the submission immediately, updates the requirement and section status in the pursuit workspace, and preserves a clean audit trail—with zero email attachments or manual copy-pasting."
                  }
                ].map((item) => (
                  <div key={item.n} className="bg-[#0F1423] rounded-xl p-5 border border-slate-800">
                    <div className="flex items-start gap-3 mb-2">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-[#0EA5E9]/20 border border-[#0EA5E9]/40 text-[#0EA5E9] text-xs font-bold flex items-center justify-center">
                        {item.n}
                      </span>
                      <h3 className="font-bold text-white text-base leading-snug pt-0.5">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed pl-9">{item.body}</p>
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
                Legacy Email Chasing vs. Governed Teams Orchestration
              </h2>

              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="bg-[#F8FAFC] border-b border-slate-200">
                        <th className="p-4 font-bold text-[#0B1220] text-xs uppercase tracking-wider w-[22%]">
                          Collaboration Dimension
                        </th>
                        <th className="p-4 font-semibold text-red-700 text-xs uppercase tracking-wider w-[39%]">
                          Legacy Email Workflows
                        </th>
                        <th className="p-4 font-semibold text-emerald-700 text-xs uppercase tracking-wider w-[39%]">
                          Capivue + Teams
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
                            {row.legacy}
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
                Key Takeaway for Bid Managers & Delivery Leaders
              </h2>
              <p className="text-[17px] text-slate-700 leading-[1.75]">
                High-velocity bid operations depend on respecting your Subject Matter Experts' time. By combining an executive-locked Win Strategy Blueprint, automated [requires validation] gap detection, and interactive Microsoft Teams Adaptive Cards, enterprise bid teams turn chaotic last-minute fire drills into a predictable, auditable sign-off workflow.
              </p>
            </div>

          </article>

          {/* SIDEBAR */}
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

              {/* SME Orchestration Spec Card */}
              <div className="bg-[#0F1423] border border-slate-700 rounded-xl p-5">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#0EA5E9] mb-3">
                  SME Orchestration Spec
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Strategy Lock</div>
                    <div className="text-xs text-white font-medium">
                      Win Strategy Blueprint
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1 leading-relaxed">
                      Versioned · Executive-approved · Single source of truth
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-700">
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">SME Channel</div>
                    <div className="font-mono text-xs text-emerald-400">
                      Teams Adaptive Cards
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1 leading-relaxed">
                      Interactive response capture in chat
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-700">
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Status Sync</div>
                    <div className="text-xs text-white font-medium">
                      Live Section Readiness
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1 leading-relaxed">
                      Real-time across the Submission Pack
                    </div>
                  </div>
                </div>
              </div>

              {/* Conversion Widget */}
              <div className="bg-gradient-to-br from-[#1E40AF] to-[#0EA5E9] rounded-xl p-5">
                <div className="text-sm font-bold text-white mb-2 leading-snug">
                  Streamline Your Bid Approvals
                </div>
                <p className="text-xs text-blue-50 leading-relaxed mb-4">
                  See how Capivue's Win Strategy Blueprint and Microsoft Teams SME Cards compress turnaround from days to minutes.
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
            See Capivue's Win Strategy Blueprint and Microsoft Teams SME Cards live.
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Discover how bid and delivery teams compress SME turnaround from days to minutes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/request-demo"
              className="bg-[#0EA5E9] text-white px-7 py-3 rounded-lg text-sm font-semibold hover:bg-sky-400 transition-colors"
            >
              Book an Enterprise Demo
            </Link>
            <Link
              href="/solutions/bid-governance"
              className="bg-transparent border border-slate-600 text-white px-7 py-3 rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors"
            >
              Explore Bid Governance & Orchestration →
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
              href="/resources/sprint-planning-before-contract-award"
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
              href="/resources/hidden-cost-of-static-rate-card-spreadsheets"
              className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#0EA5E9] mb-2">
                Commercial & Bid Strategy
              </div>
              <h3 className="text-lg font-bold text-[#0B1220] mb-2 group-hover:text-[#1E40AF] transition-colors leading-snug">
                The Hidden Cost of Static Rate-Card Spreadsheets in Turnkey IT Deals
              </h3>
              <span className="text-sm font-semibold text-[#1E40AF]">Read Briefing →</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}