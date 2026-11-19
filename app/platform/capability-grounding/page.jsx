import Link from "next/link";
import Image from "next/image";

export default function CapabilityGrounding() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="pt-24 pb-16 px-6 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1E40AF] text-xs font-semibold uppercase tracking-wider mb-6">
          Institutional Knowledge & Evidence Engine
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B1220] mb-6 max-w-4xl mx-auto leading-[1.1]">
          Ground every proposal claim in verified proof. Zero hallucinations.
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Generic AI invents case studies and overstates certifications—putting your organization at legal and disqualification risk. Capivue indexes your past proposals, compliance certificates, reference architectures, and Bidder Profile to inject verified evidence into every section, complete with source citations.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <Link href="/request-demo" className="bg-[#1E40AF] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-900 transition-all shadow-lg shadow-[#1E40AF]/20 text-center">
            Request Enterprise Demo
          </Link>
          <Link href="/security" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-lg text-lg font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
            Explore Security Center →
          </Link>
        </div>
        {/* Micro-Trust Line */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-500">
          <span className="flex items-center gap-1"><span className="text-[#0EA5E9]">✓</span> Universal Ingestion & OCR</span>
          <span className="flex items-center gap-1"><span className="text-[#0EA5E9]">✓</span> Automatic RAG + Profile Injection</span>
          <span className="flex items-center gap-1"><span className="text-[#0EA5E9]">✓</span> Explicit Validation Guardrails</span>
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
              app.capivuetech.com/capability-grounding
            </div>
          </div>
          <div className="aspect-video relative bg-slate-900 flex items-center justify-center">
             <Image src="/screenshots/Section_Editor_with_Citations.jpg" alt="Capability Grounding Dashboard" fill className="object-cover object-top opacity-90" />
          </div>
        </div>
        
        {/* Callout Badges */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-[#0B1220] mb-2 text-sm">Zero-Prompt Evidence Retrieval</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Automatically matches repository proof to every RFP requirement without manual searching.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-[#0B1220] mb-2 text-sm">Inline Source Citations</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Every drafted section tracks exact source documents in an auditable citation log.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-[#0B1220] mb-2 text-sm">Strict Anti-Fabrication Protocol</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Missing evidence is flagged with [requires validation] rather than invented.</p>
          </div>
        </div>
      </section>

      {/* 3. CORE ARCHITECTURE (METHODOLOGY) */}
      <section className="py-24 px-6 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">Grounding Architecture</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">
              Turn scattered institutional files into a governed knowledge engine.
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Your sharpest competitive proof is trapped across SharePoint folders, past Word proposals, capability decks, and tender emails. Capivue unifies unstructured documents and structured company credentials into a single retrieval layer that governs every AI output.
            </p>
          </div>

          <div className="space-y-12">
            {/* Feature 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <span className="text-2xl font-extrabold text-[#1E40AF]">1</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0B1220] mb-3">Dual-Layer Retrieval (Repository RAG + Bidder Profile)</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  When interpreting requirements or drafting sections, Capivue automatically queries two authoritative sources: your Knowledge Repository (past technical proposals, case studies, architecture blueprints) and your structured Bidder Profile (active ISO/SOC 2 certifications, RBI/DPDP compliance posture, prior delivery scale, and reference metrics).
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <span className="text-2xl font-extrabold text-[#1E40AF]">2</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0B1220] mb-3">Blueprint-Governed Narrative Synthesis</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Retrieved evidence is never dumped raw into a document. Capivue weaves matching proof points directly into your Win Strategy Blueprint—ensuring every technical response directly addresses buyer concerns while reinforcing executive win themes.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <span className="text-2xl font-extrabold text-[#1E40AF]">3</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0B1220] mb-3">Audit-Grade Source Traceability (citations_json)</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Every generated section records structured source metadata linking paragraphs back to the exact repository files and requirement IDs used during synthesis—allowing Bid Managers and Legal reviewers to audit claims in seconds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. UNIVERSAL INGESTION PIPELINE */}
      <section className="py-24 px-6 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">Universal Ingestion Pipeline</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">
              Ingest every artifact your organization already owns.
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Upload files directly or sync from Microsoft SharePoint and OneDrive (up to 50 MB per file). Capivue's extraction pipeline normalizes complex layouts automatically:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-[#0B1220] mb-2">Documents & Presentations</h3>
              <p className="text-sm text-slate-600">.docx (narrative and tables) and .pptx capability decks (preserving slide context).</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-[#0B1220] mb-2">PDFs & Scanned Annexures</h3>
              <p className="text-sm text-slate-600">Native .pdf extraction with automatic Tesseract OCR fallback for scanned certificates and image-only pages.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-[#0B1220] mb-2">Multi-Sheet Spreadsheets</h3>
              <p className="text-sm text-slate-600">.xlsx and .xls workbooks parsed across every worksheet, preserving tabular pricing and schedules.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-[#0B1220] mb-2">Images & Correspondence</h3>
              <p className="text-sm text-slate-600">Images (.png, .jpg, .tiff, .webp) via OCR, plus .eml and Outlook .msg emails (sender, body, attachments).</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-[#0B1220] mb-2">Plain Text & Runbooks</h3>
              <p className="text-sm text-slate-600">.txt and .md architectural runbooks and technical specifications.</p>
            </div>
            <div className="bg-[#0B1220] p-6 rounded-xl border border-slate-800 flex flex-col justify-center">
              <p className="text-[#0EA5E9] font-mono text-xs mb-1">// Audit Note</p>
              <p className="text-white text-sm">Every ingested file is hashed and versioned to ensure legal traceability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE ANTI-HALLUCINATION SAFETY NET */}
      <section className="py-24 px-6 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">Deterministic Guardrails</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">
              When proof is missing, Capivue flags the gap instead of guessing.
            </h2>
            <p className="text-lg text-slate-600">
              In government, BFSI, and enterprise procurement, submitting an unverified metric or non-existent certification is grounds for immediate disqualification. Capivue enforces strict negative constraints across every generation prompt.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200 mb-8">
            <h3 className="text-xl font-bold text-[#0B1220] mb-3">Explicit Gap Tagging</h3>
            <p className="text-slate-600 mb-4">If an RFP demands a specific prior deployment metric, named architect credential, or compliance certificate that does not exist in your Knowledge Repository or Bidder Profile, Capivue inserts an explicit <span className="bg-amber-100 text-amber-800 px-1 rounded font-mono text-sm">[requires validation]</span> marker directly in the draft.</p>
            <div className="bg-[#0B1220] p-4 rounded-lg font-mono text-sm text-slate-300">
              <span className="text-[#0EA5E9]">AI Draft:</span> "Our team deployed a Tier-1 core banking solution for a top-5 Indian bank in 2024..."<br/>
              <span className="text-amber-400 mt-2 block">[requires validation: No matching case study found in repository. Route to Solution Architect.]</span>
            </div>
          </div>

          <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-bold text-[#0B1220] mb-3">Actionable SME Handoff</h3>
            <p className="text-slate-600">Bid Managers can filter flagged sections immediately and route specific questions to Subject Matter Experts via Microsoft Teams Adaptive Cards—turning blind spots into verified proof before submission.</p>
          </div>
        </div>
      </section>

      {/* 6. ROLE-BASED VALUE STRIP */}
      <section className="py-24 px-6 bg-[#0B1220]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Built for Proposal, Knowledge, and Compliance Teams</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-l-2 border-[#0EA5E9] pl-6">
              <h3 className="font-bold text-white mb-2">For Proposal & Bid Managers</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Eliminate hours of digging through old SharePoint folders for the latest case studies, SLA metrics, and security boilerplate.</p>
            </div>
            <div className="border-l-2 border-[#0EA5E9] pl-6">
              <h3 className="font-bold text-white mb-2">For Solution Architects</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Ensure every technical section automatically references your organization's approved cloud, core banking, and integration reference patterns.</p>
            </div>
            <div className="border-l-2 border-[#0EA5E9] pl-6">
              <h3 className="font-bold text-white mb-2">For Legal & Compliance Reviewers</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Audit proposal claims with full source attribution and zero risk of unverified AI fabrications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CLOSING CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-6">
          Stop babysitting generic AI. Ground every bid in your real track record.
        </h2>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          See how Capivue turns your past wins and compliance credentials into an automated evidence engine.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/request-demo" className="bg-[#1E40AF] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-900 transition-colors shadow-lg shadow-[#1E40AF]/20">
            Book an Enterprise Demo
          </Link>
          <Link href="/solutions" className="bg-white text-[#0B1220] border border-slate-200 px-8 py-4 rounded-lg text-lg font-medium hover:bg-slate-50 transition-colors">
            Explore Solutions
          </Link>
        </div>
      </section>

    </div>
  );
}