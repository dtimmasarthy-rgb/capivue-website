import Link from "next/link";
import Image from "next/image";

export default function RiskXRay() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="pt-24 pb-16 px-6 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1E40AF] text-xs font-semibold uppercase tracking-wider mb-6">
          Compliance & Bid Readiness Intelligence
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B1220] mb-6 max-w-4xl mx-auto leading-[1.1]">
          Surface disqualifying clauses and hidden liabilities before you commit.
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Critical compliance traps and unpriced operational liabilities hide on page 147 of complex RFPs. Capivue cross-examines every requirement in the buyer's tender against your verified Bidder Profile—delivering an objective Bid Strength Score, a ranked risk register, and a legally defensible Assumptions Register in minutes.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <Link href="/request-demo" className="bg-[#1E40AF] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-900 transition-all shadow-lg shadow-[#1E40AF]/20 text-center">
            Request Enterprise Demo
          </Link>
          <Link href="/platform/deal-room" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-lg text-lg font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
            Explore Deal Room →
          </Link>
        </div>
        {/* Micro-Trust Line */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-500">
          <span className="flex items-center gap-1"><span className="text-[#0EA5E9]">✓</span> Multi-Format Intake & OCR</span>
          <span className="flex items-center gap-1"><span className="text-[#0EA5E9]">✓</span> Dual-Sided Compliance Cross-Check</span>
          <span className="flex items-center gap-1"><span className="text-[#0EA5E9]">✓</span> Deduplicated Assumptions Register</span>
        </div>
      </section>

      {/* 2. INTERACTIVE UI PREVIEW */}
      <section className="pb-16 px-6 max-w-5xl mx-auto">
        <div className="relative bg-[#0B1220] rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
          <div className="bg-[#1E293B] px-4 py-3 flex items-center gap-2 border-b border-slate-700">
            <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-400/80"></div>
            <div className="ml-4 bg-[#0B1220] text-xs text-slate-400 px-4 py-1 rounded-md flex-1 border border-slate-700 text-center">
              app.capivuetech.com/risk-xray
            </div>
          </div>
          <div className="aspect-video relative">
            <Image src="/screenshots/Risk_xray.jpg" alt="Risk X-Ray Dashboard" fill className="object-cover object-top" />
          </div>
        </div>
        
        {/* Callout Badges */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-[#0B1220] mb-2 text-sm">0–100 Bid Strength Score</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Objective Go/No-Go readiness scoring before teams burn weeks writing.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-[#0B1220] mb-2 text-sm">Dual-Sided Verification</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Audits buyer mandates directly against your company's certifications and past scale.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-[#0B1220] mb-2 text-sm">Zero-Disqualification Guardrails</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Isolates administrative and mandatory blockers at intake.</p>
          </div>
        </div>
      </section>

      {/* 3. CORE ARCHITECTURE (METHODOLOGY) */}
      <section className="py-24 px-6 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">Audit Methodology</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">
              Stop relying on manual spreadsheet reviews to catch bid-killing clauses.
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              When bid teams triage 300-page RFPs and multi-tab Excel annexures under tight deadlines, subtle regulatory obligations and legacy integration dependencies slip through. Risk X-Ray replaces manual skimming with systematic requirement-by-requirement auditing.
            </p>
          </div>

          <div className="space-y-12">
            {/* Feature 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <span className="text-2xl font-extrabold text-[#1E40AF]">1</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0B1220] mb-3">Universal Document & Scanned Annexure Ingestion</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Whether requirements are buried in dense PDFs, scanned image annexures (processed via built-in OCR), multi-sheet Excel workbooks, or tender emails, Capivue extracts and normalizes every substantive and administrative clause with <strong className="text-[#0B1220]">100% requirement traceability</strong>.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <span className="text-2xl font-extrabold text-[#1E40AF]">2</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0B1220] mb-3">Bidder Profile & Certification Cross-Examination</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Risk X-Ray evaluates both sides of the bid. It cross-checks every extracted requirement against your structured Bidder Profile (ISO/SOC 2 certifications, RBI/DPDP compliance posture, prior delivery scale, and reference architectures) to classify compliance accurately into <strong className="text-[#0B1220]">Yes, Yes with Conditions, No, or Administrative</strong>.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <span className="text-2xl font-extrabold text-[#1E40AF]">3</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0B1220] mb-3">Objective Go / No-Go & Conditioned Bid Verdicts</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Instead of a binary guess, Capivue synthesizes requirement severity into a 0–100 Bid Strength Score and an executive recommendation—identifying exactly which conditions must be negotiated or priced into your contingency buffer before leadership approves the bid.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE 8 DOMAIN DIMENSIONS */}
      <section className="py-24 px-6 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">Comprehensive Coverage</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">
              Every requirement audited across eight enterprise risk dimensions.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "1. Legal & Regulatory", desc: "Identifies state-specific procurement mandates, RBI Cybersecurity Directions, DPDP Act localization rules, PCI-DSS 4.0 standards, and strict automatic bid-disqualification triggers." },
              { title: "2. Eligibility & Qualification", desc: "Audits mandatory organizational certifications, minimum turnover thresholds, and prior comparable-scale deployment requirements before you invest bid hours." },
              { title: "3. Functional Scope", desc: "Detects ambiguous module definitions, undefined workflow edge cases, and custom feature gaps that lead to post-award scope disputes." },
              { title: "4. Integration & Legacy Surface", desc: "Flags undocumented external APIs, legacy database migrations (such as state NCD schemas), and third-party connector dependencies." },
              { title: "5. Technical & Architecture", desc: "Evaluates uptime SLAs, high-availability mandates, sovereign cloud hosting requirements, and peak concurrency constraints." },
              { title: "6. Delivery & Timeline", desc: "Highlights aggressive go-live windows, compressed UAT cycles, and critical-path migration bottlenecks." },
              { title: "7. Support & Operations", desc: "Isolates post-go-live Hypercare obligations, 24/7 L1/L2/L3 support windows, and operational SLA penalty exposure." },
              { title: "8. Commercial & Financial", desc: "Surfaces fixed-price contingency risks, milestone payment delays, and unpriced change-request liabilities." }
            ].map((risk, i) => (
              <div key={i} className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-[#0B1220] mb-2">{risk.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{risk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MARGIN SHIELD & ASSUMPTIONS REGISTER */}
      <section className="py-24 px-6 bg-[#0B1220]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">Contractual & Margin Protection</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Turn identified risks into enforceable bid conditions.
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Flagging a risk is only half the job. Risk X-Ray pairs every conditional requirement with a concrete mitigation strategy and compiles a Deduplicated Assumptions Register—mapped directly to source requirement IDs—ready to embed into your proposal and Statement of Work.
            </p>
          </div>

          <div className="bg-[#1E293B] rounded-2xl border border-slate-700 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-700 bg-slate-800/50 flex justify-between items-center">
              <span className="text-white font-bold">Structured Audit Output Example</span>
              <span className="text-xs font-mono text-[#0EA5E9]">REQ-015 — Legacy Data Migration</span>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Compliance Verdict</span>
                <span className="inline-block bg-amber-500/20 text-amber-400 px-3 py-1 rounded text-sm font-bold border border-amber-500/30">Yes with Conditions (High Priority)</span>
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Identified Risk</span>
                <p className="text-sm text-slate-300">Legacy database schema documentation and historical data quality are unspecified in the RFP.</p>
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Mitigation & Bid Assumption</span>
                <p className="text-sm text-slate-300">Pricing assumes source legacy data will be extracted and provided by the Client in a validated, standardized schema prior to Sprint 3; manual data cleansing is excluded from fixed-price scope.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-400">
              <strong className="text-white">Downstream Synchronization:</strong> Every conditional risk and assumption flows directly into the Deal Room (informing your 20% contingency buffer) and the Win Strategy Blueprint.
            </p>
          </div>
        </div>
      </section>

      {/* 6. ROLE-BASED VALUE STRIP */}
      <section className="py-24 px-6 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0B1220] mb-12 text-center">Built for Risk, Legal, and Bid Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-l-2 border-[#1E40AF] pl-6">
              <h3 className="font-bold text-[#0B1220] mb-2">For Bid Directors & Capture Leads</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Eliminate late-stage surprises by identifying mandatory eligibility blockers and conditioned requirements on Day 1.</p>
            </div>
            <div className="border-l-2 border-[#1E40AF] pl-6">
              <h3 className="font-bold text-[#0B1220] mb-2">For Legal & Compliance Teams</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Audit regulatory, data residency, and disqualification clauses with direct citations back to the exact RFP page.</p>
            </div>
            <div className="border-l-2 border-[#1E40AF] pl-6">
              <h3 className="font-bold text-[#0B1220] mb-2">For Solution Architects</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Surface hidden legacy integration and SLA assumptions early so technical designs and effort estimates stay defensible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CLOSING CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-6">
          Stop submitting unconditioned bids. Protect every margin.
        </h2>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          See how Risk X-Ray audits your next 200-page RFP in minutes.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/request-demo" className="bg-[#1E40AF] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-900 transition-colors shadow-lg shadow-[#1E40AF]/20">
            Book an Enterprise Demo
          </Link>
          <Link href="/platform/sprint-planner" className="bg-white text-[#0B1220] border border-slate-200 px-8 py-4 rounded-lg text-lg font-medium hover:bg-slate-50 transition-colors">
            Explore Sprint Planner
          </Link>
        </div>
      </section>

    </div>
  );
}