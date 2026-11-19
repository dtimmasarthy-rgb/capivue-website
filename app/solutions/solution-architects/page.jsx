"use client";
import { useState } from "react";
import Link from "next/link";

export default function SolutionArchitects() {
  const [activeTab, setActiveTab] = useState(1);

  const clauses = [
    {
      id: 1,
      tab: "Legacy Data Migration",
      req: "REQ-015",
      buyerClause:
        "Migrate 12 years of historical cooperative society records from legacy NCD database prior to Phase 1 Go-Live with zero data loss.",
      response:
        "Executes a phased ETL migration pipeline utilizing automated schema validation, SHA-256 checksum verification per batch, and parallel dry-run reconciliation in staging prior to final cutover.",
      citation: "FSI_Core_Data_Migration_Runbook.pdf · Verified",
      assumption:
        "Assumes Client provides validated source database schema documentation and cleansed data extracts prior to Sprint 3; manual data remediation is excluded.",
      flag: null
    },
    {
      id: 2,
      tab: "Sovereign Cloud & Security",
      req: "REQ-005",
      buyerClause:
        "Host application in a sovereign cloud environment compliant with state cybersecurity directions, data localization, and audit logging mandates.",
      response:
        "Deployed on Microsoft Azure Central India (Pune) with PostgreSQL Row-Level Security (RLS), AES-256 encryption at rest, TLS 1.2+ in transit, and tamper-evident audit trails aligned with RBI and DPDP Act mandates.",
      citation: "Bidder Profile: ISO 27001, RBI & DPDP Posture · Verified",
      assumption:
        "Assumes Client security team approves standard Azure Central India landing zone architecture during Discovery Phase (Weeks 1–2).",
      flag: null
    },
    {
      id: 3,
      tab: "External System Integration",
      req: "REQ-014",
      buyerClause:
        "Integrate portal seamlessly with external payment gateways, SMS notification engines, and state identity verification registries.",
      response:
        "Architected around an API-first microservices gateway enforcing OAuth2/OIDC authentication, idempotent message queues, and circuit-breaker fault tolerance across all external state connectors.",
      citation: "Reference_API_Gateway_Blueprint.docx · Grounded",
      assumption:
        "Assumes third-party registry sandbox credentials and interface control documents (ICDs) are provisioned at kickoff.",
      flag: "[requires validation: State Registry API SLA]"
    }
  ];

  const active = clauses.find((c) => c.id === activeTab) || clauses[0];

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-800 font-sans selection:bg-[#1E40AF] selection:text-white">

      {/* SECTION 1: DARK OBSIDIAN HERO + TECHNICAL GROUNDING INSPECTOR */}
      <section className="bg-[#090D16] pt-24 pb-20 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[#0EA5E9] text-xs font-bold uppercase tracking-wider mb-6">
              For Enterprise & Solution Architects
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              Ground technical designs in verified reference architectures - not generic AI guesses.
            </h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl">
              Solution Architects spend countless hours rewriting standard cloud, security, and integration narratives from scratch while hunting for hidden NFRs buried in 300-page requirement documents. Capivue maps buyer technical specifications against your pre-seeded domain repository, isolates legacy integration and SLA risks early, and enforces strict citation guardrails.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/request-demo" className="bg-[#1E40AF] text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-[#1E40AF]/30 text-center">
                Request Enterprise Demo
              </Link>
              <Link href="/solutions/delivery-heads" className="bg-transparent border border-slate-600 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-slate-800 transition-all text-center">
                For Delivery & PMO Heads →
              </Link>
            </div>
            <div className="text-xs font-mono text-slate-500 tracking-wide uppercase">
              Pre-Seeded Reference Patterns • NFR & Integration Risk X-Ray • Explicit [requires validation] Guardrails
            </div>
          </div>

          {/* Right Visual: Technical Grounding Inspector · Live Trace */}
          <div className="bg-[#0F1423] rounded-2xl border border-slate-700 shadow-2xl overflow-hidden relative">
            <div className="bg-slate-800/50 px-4 py-3 border-b border-slate-700 flex justify-between items-center">
              <div className="text-xs font-mono text-slate-300">REQ-017 · Cloud-Native ICT Platform & API Gateway</div>
              <div className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-emerald-900/40 text-emerald-400 border border-emerald-500/30">
                Verdict: Yes with Conditions
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-3">
              <div className="bg-[#1A2235] border border-slate-700 rounded-lg p-4 flex gap-3 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] mt-1.5 shrink-0"></div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Layer 01 · Grounded Reference Pattern</div>
                  <p className="text-sm text-slate-300 leading-relaxed">Synthesizes microservices stack, OAuth2/OIDC identity federation, and Prometheus/Grafana observability from verified FSI reference architectures.</p>
                </div>
              </div>

              <div className="bg-[#1A2235] border border-slate-700 rounded-lg p-4 flex gap-3 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Layer 02 · Compliance & Hosting Cross-Check</div>
                  <p className="text-sm text-slate-300 leading-relaxed">Maps RBI Cybersecurity Directions, DPDP Act localization, and ISO 27001 controls directly to sovereign cloud hosting mandates.</p>
                </div>
              </div>

              <div className="bg-[#1A2235] border border-slate-700 rounded-lg p-4 flex gap-3 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Layer 03 · Architectural Assumption & SME Flag</div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Auto-generates synchronous API assumption; flags{" "}
                    <span className="font-mono text-amber-400">[requires validation: Named Lead Architect CISSP Credential]</span>{" "}
                    for review.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: THE SOLUTION ARCHITECT'S BOTTLENECK */}
      <section className="py-20 px-6 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-bold text-red-500 uppercase tracking-wider mb-3">The Technical Pre-Sales Bottleneck</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">
              Your best architects are trapped rewriting boilerplate instead of solving hard system problems.
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              When scoping complex RFPs, Statements of Work (SOWs), and technical specifications under tight submission windows, three recurring issues undermine architectural quality:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200">
              <div className="text-3xl font-mono font-bold text-slate-300 mb-4">01</div>
              <h3 className="text-lg font-bold text-[#0B1220] mb-3">Buried Non-Functional & Integration Traps</h3>
              <p className="text-slate-600 text-sm leading-relaxed">High-availability uptime SLAs, peak concurrency loads, sovereign data residency rules, and undocumented legacy migration schemas hide inside dense annexures—discovered only after effort estimates are locked.</p>
            </div>
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200">
              <div className="text-3xl font-mono font-bold text-slate-300 mb-4">02</div>
              <h3 className="text-lg font-bold text-[#0B1220] mb-3">Reinventing Reference Architectures on Every Pursuit</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Architects waste days digging through old SharePoint folders for proven cloud, security, and data-pipeline diagrams instead of adapting standardized, battle-tested blueprints.</p>
            </div>
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200">
              <div className="text-3xl font-mono font-bold text-slate-300 mb-4">03</div>
              <h3 className="text-lg font-bold text-[#0B1220] mb-3">Unverified Technical Claims & Hallucination Risk</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Generic AI writing tools invent benchmark throughput numbers, unsupported certifications, or non-existent client deployments—exposing the firm to technical disqualification during oral defense.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FOUR ARCHITECTURAL CONTROLS */}
      <section className="py-20 px-6 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">Built for Architectural Rigor</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">Four architectural controls built into Capivue.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200">
              <div className="text-xs font-bold text-[#0EA5E9] mb-2">01 · Pre-Seeded Domain & Reference Architecture Repository</div>
              <h3 className="text-xl font-bold text-[#0B1220] mb-3">Start every technical response from institutional architectural intelligence.</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Capivue ships with 200+ pre-seeded domain and architectural artifacts (including BFSI core banking patterns, regulatory security frameworks, and integration blueprints) and layers your firm's uploaded capability decks, .docx specs, and .pdf diagrams on top via RAG.</p>
            </div>
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200">
              <div className="text-xs font-bold text-[#0EA5E9] mb-2">02 · Forensic NFR, Integration & Migration X-Ray</div>
              <h3 className="text-xl font-bold text-[#0B1220] mb-3">Isolate technical, integration, and operational risk dimensions on Day 1.</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Capivue audits every requirement across Technical & Architecture, Integration & Legacy Surface, Delivery & Timeline, and Support & Operations—converting undocumented APIs and legacy database migrations into explicit entries in your Deduplicated Assumptions Register.</p>
            </div>
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200">
              <div className="text-xs font-bold text-[#0EA5E9] mb-2">03 · Deterministic Anti-Hallucination Guardrails</div>
              <h3 className="text-xl font-bold text-[#0B1220] mb-3">Zero fabricated benchmarks, credentials, or certifications.</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Every generated technical section logs structured source metadata (citations_json). When a requirement demands throughput metrics, named architect credentials, or compliance proofs missing from your repository, Capivue inserts an explicit <span className="font-semibold text-amber-700">[requires validation]</span> marker for architect sign-off.</p>
            </div>
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200">
              <div className="text-xs font-bold text-[#0EA5E9] mb-2">04 · Effort-to-Architecture Synchronization</div>
              <h3 className="text-xl font-bold text-[#0B1220] mb-3">Ensure complex modules get realistic specialist staffing and sprint allocation.</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Tag requirements by architectural complexity and map specialist roles (Solution Architect, Senior Developer, Data Engineer, Integration Developer, QA Engineer) directly into phased timelines and 1–6 week Agile sprints.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: INTERACTIVE CLAUSE DECOMPOSITION SHOWCASE */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">Interactive Clause Decomposition</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">See how Capivue maps complex technical clauses.</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Select a technical requirement category to inspect how Capivue synthesizes grounded responses, source citations, and protective scope assumptions.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6 justify-center">
          {clauses.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(c.id)}
              className={`px-6 py-3 rounded-xl border text-sm font-semibold transition-all duration-200 ${
                activeTab === c.id
                  ? "bg-[#1E40AF] border-[#1E40AF] text-white shadow-lg shadow-[#1E40AF]/30"
                  : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              {c.tab} ({c.req})
            </button>
          ))}
        </div>

        {/* Dark Obsidian 3-Column Decomposition Card */}
        <div className="bg-[#0F1423] rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
          <div className="bg-slate-800/50 px-6 py-4 border-b border-slate-700 flex justify-between items-center">
            <div className="text-xs font-mono text-slate-300">{active.req} · {active.tab}</div>
            <div className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-sky-900/40 text-sky-400 border border-sky-500/30">
              Decomposed
            </div>
          </div>

          <div className="p-6 md:p-8 grid md:grid-cols-3 gap-4">
            {/* Column 1: Buyer Clause */}
            <div className="bg-[#1A2235] border border-slate-700 rounded-xl p-5">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span> Extracted Buyer Clause
              </div>
              <p className="text-sm text-slate-300 leading-relaxed italic">"{active.buyerClause}"</p>
            </div>

            {/* Column 2: Grounded Response */}
            <div className="bg-[#1A2235] border border-slate-700 rounded-xl p-5">
              <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Grounded Architectural Response
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">{active.response}</p>
              <div className="mt-3 inline-flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-900/30 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
                <span>✓</span> {active.citation}
              </div>
            </div>

            {/* Column 3: Scope Assumption */}
            <div className="bg-[#1A2235] border border-slate-700 rounded-xl p-5">
              <div className="text-[10px] font-bold text-amber-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Auto-Generated Scope Assumption
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">{active.assumption}</p>
              {active.flag && (
                <div className="mt-3 inline-flex items-center gap-1.5 px-2 py-1 rounded bg-amber-900/30 border border-amber-500/30 text-[10px] font-mono text-amber-400">
                  <span>⚠</span> {active.flag}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CLOSING CONVERSION BANNER */}
      <section className="py-24 px-6 bg-[#090D16] text-center border-t border-slate-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            Let your Solution Architects focus on system design—not boilerplate assembly.
          </h2>
          <p className="text-lg text-slate-400 mb-10">
            See how Capivue grounds technical proposals in verified architectures and isolates integration risks before sign-off.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/request-demo" className="bg-[#0EA5E9] text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-sky-400 transition-colors shadow-lg shadow-[#0EA5E9]/20">
              Book an Enterprise Demo
            </Link>
            <Link href="/solutions/delivery-heads" className="bg-transparent border border-slate-600 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-slate-800 transition-colors">
              Explore For Delivery & PMO Heads →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}