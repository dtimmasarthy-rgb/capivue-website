"use client";
import { useState } from "react";
import Link from "next/link";

export default function PostgresRlsArticle() {
  const [tocOpen, setTocOpen] = useState(true);

  const toc = [
    { id: "why-fails", label: "1. Why Application-Only Multi-Tenancy Fails" },
    { id: "engine-isolation", label: "2. Isolation at the PostgreSQL Engine" },
    { id: "sovereign-encryption", label: "3. Sovereign Residency & Encryption" },
    { id: "byok", label: "4. Zero-Retention Azure AI & BYOK" },
    { id: "comparison", label: "5. Standard SaaS vs. Capivue Architecture" },
    { id: "takeaway", label: "6. Key Takeaway for CISOs" }
  ];

  const comparison = [
    {
      dimension: "Tenant Data Isolation",
      standard: "Application-level query filters vulnerable to developer omission.",
      capivue: "PostgreSQL Row-Level Security (RLS) enforced inside the database engine."
    },
    {
      dimension: "Data Residency",
      standard: "Default US-only multi-region cloud hosting.",
      capivue: "Microsoft Azure Central India (Pune) primary hosting (US/EU on request)."
    },
    {
      dimension: "Credential & Token Storage",
      standard: "Standard database columns or basic environment variables.",
      capivue: "AES-256 at rest + Fernet symmetric encryption for OAuth/API secrets."
    },
    {
      dimension: "AI Inference Privacy",
      standard: "Routes prompts to shared endpoints without retention guarantees.",
      capivue: "Zero-Retention Microsoft Azure AI + Enterprise BYOK private endpoints."
    },
    {
      dimension: "Identity & Access Control",
      standard: "Basic username/password login.",
      capivue: "Microsoft Entra ID (Azure AD) SSO + workspace RBAC & audit trails."
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
            <Link href="/resources?category=ai-governance" className="hover:text-slate-300 transition-colors">
              AI Governance & Compliance
            </Link>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[#0EA5E9] text-[10px] font-bold uppercase tracking-widest mb-6">
            Enterprise Architecture & Security · Executive Briefing
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-5 leading-[1.1]">
            Database-Level Multi-Tenancy: Designing PostgreSQL Row-Level Security for Sensitive Bids
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mb-8">
            Inside Capivue's security architecture on Microsoft Azure Central India—how RLS policies, AES-256 encryption, and Bring Your Own Key (BYOK) AI routing protect proprietary rate cards and intellectual property.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500 font-mono tracking-wide">
            <span>Published August 2026</span>
            <span className="w-1 h-1 rounded-full bg-slate-700"></span>
            <span>8 min read</span>
            <span className="w-1 h-1 rounded-full bg-slate-700"></span>
            <span>Capivue Platform Security & Infrastructure Engineering</span>
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
            <span className="font-semibold text-white">Key Thesis:</span> Requirement documents, onshore/offshore rate cards, and past proposal repositories represent an enterprise's most sensitive commercial intellectual property. Relying solely on application-level WHERE workspace_id = ? filters leaves multi-tenant SaaS platforms vulnerable to accidental cross-tenant exposure. True enterprise isolation requires enforcing tenant boundaries directly inside the database engine, storage layer, and AI inference boundary.
          </p>

          <ol className="space-y-3">
            {[
              "PostgreSQL Row-Level Security (RLS) enforces tenant isolation at the database query engine level—blocking cross-workspace data reads or writes even in the event of an application-layer bug.",
              "Sovereign Cloud Hosting on Microsoft Azure Central India (Pune) paired with AES-256 storage encryption and Fernet symmetric credential encryption satisfies strict Indian DPDP Act and enterprise CISO governance.",
              "Zero-Retention Microsoft Azure AI & Bring Your Own Key (BYOK) Routing ensures sensitive requirement clauses never train public models and can execute inside a customer's own private AI tenant."
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
            <div id="why-fails" className="mb-14 scroll-mt-24">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#1E40AF] mb-3">
                Section 01
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1220] mb-5 leading-tight">
                Why Application-Only Multi-Tenancy Fails CISO Diligence
              </h2>
              <div className="space-y-5 text-[17px] text-slate-700 leading-[1.75]">
                <p>
                  In standard B2B SaaS applications, multi-tenancy is commonly implemented solely inside the application code—relying on developers to remember to append a tenant filter to every API endpoint, background worker, and search query.
                </p>
                <p>
                  For casual productivity tools, that pattern may suffice. For Enterprise Bid Intelligence, it is unacceptable. A single pursuit workspace contains a company's crown jewels:
                </p>
              </div>

              <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6 my-6">
                <ul className="space-y-3">
                  {[
                    { label: "Unpublished Commercial Rate Cards", detail: "Exact onshore and offshore daily rates, overhead ratios, and target margin floors." },
                    { label: "Confidential Client Requirement Documents", detail: "Pre-tender RFPs, core banking architecture specs, and sovereign infrastructure SOWs." },
                    { label: "Proprietary Knowledge Repositories", detail: "Past winning proposals, compliance audit reports, and named executive credentials." }
                  ].map((item, i) => (
                    <li key={i} className="text-sm text-slate-700 leading-relaxed">
                      <span className="font-bold text-[#0B1220]">{item.label}:</span>{" "}
                      <span className="text-slate-600">{item.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pull Quote */}
            <blockquote className="border-l-4 border-[#1E40AF] pl-6 py-2 my-10">
              <p className="text-lg md:text-xl font-medium text-[#0B1220] leading-relaxed italic">
                "In enterprise security architecture, defense-in-depth means assuming an application bug will eventually occur—and ensuring the database engine itself refuses to cross tenant boundaries."
              </p>
            </blockquote>

            <div className="space-y-5 text-[17px] text-slate-700 leading-[1.75] mb-14">
              <p>
                When CISOs in Banking, Financial Services, and Global System Integrators audit an AI platform, their first question is always the same: If a background job or API route omits a tenant filter, what prevents Workspace A from seeing Workspace B's rate card?
              </p>
            </div>

            {/* Section 2 */}
            <div id="engine-isolation" className="mb-14 scroll-mt-24">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#1E40AF] mb-3">
                Section 02
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1220] mb-5 leading-tight">
                Enforcing Isolation at the PostgreSQL Engine Layer
              </h2>
              <p className="text-[17px] text-slate-700 leading-[1.75] mb-6">
                Capivue solves cross-tenant risk by enforcing isolation directly inside PostgreSQL using Row-Level Security (RLS) rather than trusting application code alone. Here is how the isolation boundary operates across every request:
              </p>

              <div className="space-y-5">
                {[
                  {
                    n: "1",
                    title: "Authenticated Tenant Context Binding",
                    body: "Every incoming API request (authenticated via Microsoft Entra ID Single Sign-On or signed JWT session tokens) and every asynchronous background task resolves the caller's verified workspace_id before opening a database session."
                  },
                  {
                    n: "2",
                    title: "Engine-Level Policy Enforcement",
                    body: "PostgreSQL RLS policies are attached directly to tenant-scoped tables—covering projects, extracted requirements, commercial rollups, sprint plans, and knowledge repository chunks."
                  },
                  {
                    n: "3",
                    title: "Mathematical Query Filtering",
                    body: "Before PostgreSQL executes any SELECT, INSERT, UPDATE, or DELETE operation, the database engine automatically evaluates the active session's tenant policy. Even if an application endpoint lacked a filter clause, PostgreSQL strictly blocks access to any row belonging to another workspace."
                  }
                ].map((item) => (
                  <div key={item.n} className="border-l-2 border-[#1E40AF] pl-5">
                    <h3 className="font-bold text-[#0B1220] mb-2 text-base leading-snug">
                      {item.n}. {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3 */}
            <div id="sovereign-encryption" className="mb-14 scroll-mt-24">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#1E40AF] mb-3">
                Section 03
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1220] mb-5 leading-tight">
                Sovereign Data Residency & Layered Encryption on Azure
              </h2>
              <p className="text-[17px] text-slate-700 leading-[1.75] mb-6">
                Database isolation must be paired with physical data sovereignty and cryptographic protection across every storage and integration tier:
              </p>

              <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6 my-6">
                <h3 className="font-bold text-[#0B1220] mb-2 text-base">
                  Sovereign Regional Hosting (Microsoft Azure Central India)
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Capivue's primary compute (Azure Container Apps), static frontend (Azure Static Web Apps), encrypted blob storage, and PostgreSQL databases are deployed in Microsoft Azure Central India (Pune)—supporting Indian DPDP Act data localization requirements, with dedicated US East or West Europe deployments available for multinational Enterprise tenants.
                </p>
              </div>

              <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6 my-6">
                <h3 className="font-bold text-[#0B1220] mb-2 text-base">
                  Encryption in Transit and at Rest
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  All network communication is secured over TLS 1.2 / 1.3, while all databases, uploaded requirement documents, and generated exports are encrypted at rest using AES-256.
                </p>
              </div>

              <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6 my-6">
                <h3 className="font-bold text-[#0B1220] mb-2 text-base">
                  Fernet Symmetric Credential Encryption
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Enterprise bid teams connect Capivue to Microsoft SharePoint, OneDrive, Microsoft Teams, and Salesforce. All third-party OAuth tokens and API keys are encrypted at rest using Fernet symmetric cryptography so raw credentials are never stored in plaintext.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div id="byok" className="mb-14 scroll-mt-24">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#1E40AF] mb-3">
                Section 04
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1220] mb-5 leading-tight">
                Zero-Retention Azure AI & Bring Your Own Key (BYOK) Routing
              </h2>
              <p className="text-[17px] text-slate-700 leading-[1.75] mb-6">
                The final security boundary in any AI platform is the inference layer—where extracted requirement text and repository context are processed by Large Language Models. Capivue eliminates third-party data leakage across two enterprise deployment modes:
              </p>

              <div className="bg-[#0F1423] rounded-xl p-6 my-6 border border-slate-800">
                <h3 className="font-bold text-white mb-2 text-base">
                  1. Managed Azure AI with Zero Data Retention
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Inference runs via Microsoft Azure AI Service under contractual Zero Data Retention—meaning your requirement documents, rate cards, and drafted narratives are never logged, stored, or used to train foundation models.
                </p>
              </div>

              <div className="bg-[#0F1423] rounded-xl p-6 my-6 border border-slate-800">
                <h3 className="font-bold text-white mb-2 text-base">
                  2. Enterprise Bring Your Own Key (BYOK)
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  For banks, defense contractors, and global system integrators with dedicated cloud AI subscriptions, Capivue's workspace configuration lets administrators route all AI analysis and drafting directly to their own private Azure OpenAI or Google Vertex AI endpoint.
                </p>
              </div>
            </div>

            {/* Section 5: Comparison Table */}
            <div id="comparison" className="mb-14 scroll-mt-24">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#1E40AF] mb-3">
                Section 05
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1220] mb-5 leading-tight">
                Standard SaaS Security vs. Capivue Enterprise Architecture
              </h2>

              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="bg-[#F8FAFC] border-b border-slate-200">
                        <th className="p-4 font-bold text-[#0B1220] text-xs uppercase tracking-wider w-[22%]">
                          Security Dimension
                        </th>
                        <th className="p-4 font-semibold text-red-700 text-xs uppercase tracking-wider w-[39%]">
                          Standard Multi-Tenant SaaS
                        </th>
                        <th className="p-4 font-semibold text-emerald-700 text-xs uppercase tracking-wider w-[39%]">
                          Capivue Enterprise
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
                            {row.standard}
                          </td>
                          <td className="p-4 text-sm text-slate-700 leading-relaxed align-top bg-emerald-50/30">
                            {row.capivue}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div id="takeaway" className="mb-14 scroll-mt-24">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#1E40AF] mb-3">
                Section 06
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1220] mb-5 leading-tight">
                Key Takeaway for CISOs & Enterprise Architecture Teams
              </h2>
              <p className="text-[17px] text-slate-700 leading-[1.75]">
                Adopting AI across complex revenue and delivery operations does not require compromising on data sovereignty or tenant isolation. By combining PostgreSQL Row-Level Security, Azure Central India residency, Fernet credential encryption, and Zero-Retention Azure AI / BYOK routing, Capivue gives security and procurement leaders verifiable architectural proof at every layer of the stack.
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

              {/* Sovereign Security Spec Card */}
              <div className="bg-[#0F1423] border border-slate-700 rounded-xl p-5">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#0EA5E9] mb-3">
                  Sovereign Security Spec
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Tenant Isolation</div>
                    <div className="font-mono text-xs text-emerald-400">
                      PostgreSQL RLS
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1 leading-relaxed">
                      Enforced at query engine layer
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-700">
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Data Residency</div>
                    <div className="text-xs text-white font-medium">
                      Azure Central India (Pune)
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1 leading-relaxed">
                      DPDP Act localization · US/EU on request
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-700">
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Encryption</div>
                    <div className="text-xs text-white font-medium font-mono">
                      AES-256 & Fernet
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1 leading-relaxed">
                      TLS 1.2/1.3 in transit · Fernet for OAuth
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-700">
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">AI Inference</div>
                    <div className="text-xs text-white font-medium">
                      Zero-Retention / BYOK
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1 leading-relaxed">
                      Azure AI · Private tenant routing
                    </div>
                  </div>
                </div>
              </div>

              {/* Conversion Widget */}
              <div className="bg-gradient-to-br from-[#1E40AF] to-[#0EA5E9] rounded-xl p-5">
                <div className="text-sm font-bold text-white mb-2 leading-snug">
                  Inspect Our Security Architecture
                </div>
                <p className="text-xs text-blue-50 leading-relaxed mb-4">
                  Explore our technical safeguards, subprocessor ledger, and SOC 2 roadmap in the Security & Trust Center.
                </p>
                <Link
                  href="/security"
                  className="block text-center bg-white text-[#1E40AF] px-4 py-2.5 rounded-lg text-xs font-bold hover:bg-slate-100 transition-colors"
                >
                  Visit Security & Trust Center →
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
            Review Capivue's complete security architecture and Data Processing Agreement.
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Explore our technical safeguards, subprocessor ledger, and SOC 2 Type II roadmap in the Security & Trust Center.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/security"
              className="bg-[#0EA5E9] text-white px-7 py-3 rounded-lg text-sm font-semibold hover:bg-sky-400 transition-colors"
            >
              Visit Security & Trust Center →
            </Link>
            <Link
              href="/request-demo"
              className="bg-transparent border border-slate-600 text-white px-7 py-3 rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors"
            >
              Request Security & DPA Package
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
              href="/resources/eliminating-ai-hallucinations-in-regulated-bids"
              className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#0EA5E9] mb-2">
                AI Governance & Compliance
              </div>
              <h3 className="text-lg font-bold text-[#0B1220] mb-2 group-hover:text-[#1E40AF] transition-colors leading-snug">
                Eliminating AI Hallucinations in Regulated BFSI & Public Sector Bids
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