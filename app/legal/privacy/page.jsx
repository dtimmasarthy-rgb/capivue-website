"use client";
import Link from "next/link";

export default function PrivacyPolicy() {
  const sections = [
    { id: "introduction", title: "1. Introduction & Scope" },
    { id: "information-we-collect", title: "2. Information We Collect" },
    { id: "how-we-use", title: "3. How We Use Information" },
    { id: "ai-processing", title: "4. Zero Data Retention AI" },
    { id: "data-residency", title: "5. Data Residency & Security" },
    { id: "subprocessors", title: "6. Authorized Subprocessors" },
    { id: "retention", title: "7. Data Retention & Deletion" },
    { id: "rights", title: "8. Your Privacy Rights" }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-[#1E40AF] selection:text-white">

      {/* HEADER METADATA */}
      <section className="bg-[#F8FAFC] pt-20 pb-12 px-6 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1E40AF] text-xs font-bold uppercase tracking-wider mb-6">
            Legal & Data Governance
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B1220] mb-6">
            Privacy Policy
          </h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500 font-medium">
            <span>Effective Date: November 2026</span>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-slate-300"></span>
            <span>Entity: Capivue Solutions Pvt Ltd (Registered in India)</span>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT LAYOUT */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">

          {/* Sticky Sidebar Navigation */}
          <aside className="lg:w-1/4 shrink-0 hidden lg:block">
            <div className="sticky top-24">
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                On This Page
              </h3>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-sm text-slate-600 hover:text-[#1E40AF] hover:bg-slate-50 transition-colors py-1.5 px-2 rounded -mx-2 leading-snug"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Reading Canvas */}
          <article className="lg:w-3/4 max-w-3xl">
            <div className="space-y-12">
              
              {/* Section 1 */}
              <div id="introduction" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-[#0B1220] mb-4">1. Introduction & Scope</h2>
                <div className="space-y-4 text-[17px] text-slate-700 leading-[1.75]">
                  <p>
                    Capivue Solutions Pvt Ltd ("Capivue", "we", "our", or "us"), registered in India with operations in Hyderabad, Telangana, provides an enterprise requirement, commercial, and proposal intelligence platform ("Platform"). This Privacy Policy explains how we collect, process, store, and protect personal data and organizational customer data when you visit capivuetech.com, use app.capivuetech.com, or engage with our enterprise services.
                  </p>
                  <p>
                    For enterprise customers processing confidential requirement documents, rate cards, and workspace user records through the Platform, Capivue acts as a Data Processor (and Data Fiduciary/Controller solely for account administration, billing, and website interactions) in accordance with India's Digital Personal Data Protection (DPDP) Act, 2023 and applicable global data protection standards.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div id="information-we-collect" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-[#0B1220] mb-4">2. Information We Collect</h2>
                <p className="text-[17px] text-slate-700 leading-[1.75] mb-6">
                  We collect only the information required to provision, secure, and support enterprise workspaces:
                </p>
                <ul className="space-y-4 text-[17px] text-slate-700 leading-[1.75]">
                  <li>
                    <strong className="text-[#0B1220]">Account & Identity Information:</strong> Full name, corporate email address, job title, company name, workspace role (Admin, Contributor, Reviewer), and authentication tokens (including Single Sign-On identifiers via Microsoft Entra ID).
                  </li>
                  <li>
                    <strong className="text-[#0B1220]">Customer Workspace & Requirement Content ("Customer Data"):</strong> Requirement documents (RFPs, SOWs, BRDs, Excel schedules, PDFs, emails), Knowledge Repository files, Bidder Profiles, commercial rate cards, and generated deliverables uploaded or created within your workspace.
                  </li>
                  <li>
                    <strong className="text-[#0B1220]">Integration Credentials:</strong> OAuth 2.0 access/refresh tokens and API keys configured for authorized third-party connectors (Microsoft SharePoint, OneDrive, Microsoft Teams, Salesforce, and Custom REST / Webhook endpoints), which are encrypted immediately at rest using Fernet symmetric cryptography.
                  </li>
                  <li>
                    <strong className="text-[#0B1220]">Billing & Subscription Metadata:</strong> Corporate billing contact details, GST/tax identifiers, and subscription tier metadata processed via our payment processor (Stripe). Capivue never stores raw credit card numbers on its servers.
                  </li>
                  <li>
                    <strong className="text-[#0B1220]">Security & Operational Telemetry:</strong> Workspace audit logs, API rate-limiting logs, IP addresses, and system error diagnostics required to maintain service availability and investigate security events.
                  </li>
                </ul>
              </div>

              {/* Section 3 */}
              <div id="how-we-use" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-[#0B1220] mb-4">3. How We Use Information</h2>
                <p className="text-[17px] text-slate-700 leading-[1.75] mb-4">
                  Capivue processes collected data strictly for the following purposes:
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-[17px] text-slate-700 leading-[1.75] mb-6">
                  <li><strong className="text-[#0B1220]">Service Delivery & Orchestration:</strong> Extracting requirements, computing commercial rollups and sprint plans, grounding proposal sections, and delivering interactive notifications via Microsoft Teams.</li>
                  <li><strong className="text-[#0B1220]">Authentication & Tenant Security:</strong> Enforcing user permissions, Single Sign-On, and workspace-level isolation.</li>
                  <li><strong className="text-[#0B1220]">Billing & Account Management:</strong> Managing subscription quotas, invoicing, and enterprise support requests.</li>
                  <li><strong className="text-[#0B1220]">Platform Reliability & Abuse Prevention:</strong> Monitoring API health, enforcing rate limits, and preventing unauthorized access.</li>
                </ol>
                <p className="text-[17px] text-slate-700 leading-[1.75]">
                  We never sell, rent, or monetize Customer Data or personal information, and we never use Customer Data for advertising.
                </p>
              </div>

              {/* Section 4 */}
              <div id="ai-processing" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-[#0B1220] mb-4">4. Zero Data Retention AI Processing & Model Training Commitment</h2>
                <p className="text-[17px] text-slate-700 leading-[1.75] mb-6">
                  Capivue enforces strict boundaries around Artificial Intelligence inference:
                </p>
                <ul className="space-y-4 text-[17px] text-slate-700 leading-[1.75]">
                  <li>
                    <strong className="text-[#0B1220]">No Training on Customer Data:</strong> Your requirement documents, rate cards, repository files, and generated outputs are never used to train, fine-tune, or improve public or foundation AI models.
                  </li>
                  <li>
                    <strong className="text-[#0B1220]">Zero Data Retention Inference:</strong> Managed AI inference is routed over encrypted TLS 1.2/1.3 connections to Microsoft Azure AI Service with Zero Data Retention enabled—meaning prompts and completions are not stored or logged by the AI provider.
                  </li>
                  <li>
                    <strong className="text-[#0B1220]">Bring Your Own Key (BYOK):</strong> Enterprise tier administrators may connect their own private Microsoft Azure OpenAI, Google Vertex AI, or OpenAI-compatible endpoints so all AI processing occurs exclusively inside the customer's own cloud tenant.
                  </li>
                </ul>
              </div>

              {/* Section 5 */}
              <div id="data-residency" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-[#0B1220] mb-4">5. Data Residency, Security & Tenant Isolation</h2>
                <ul className="space-y-4 text-[17px] text-slate-700 leading-[1.75]">
                  <li>
                    <strong className="text-[#0B1220]">Primary Data Residency (Central India):</strong> Production application compute (Azure Container Apps), databases (PostgreSQL), and encrypted file storage are hosted on Microsoft Azure in the Central India (Pune) region. Dedicated US East or West Europe deployments are available for multinational Enterprise tenants upon request.
                  </li>
                  <li>
                    <strong className="text-[#0B1220]">Database-Level Tenant Isolation (PostgreSQL RLS):</strong> Every workspace is logically isolated inside PostgreSQL using Row-Level Security (RLS) policies enforced at the database query engine level, preventing cross-tenant data access.
                  </li>
                  <li>
                    <strong className="text-[#0B1220]">Cryptographic Protection:</strong> Data is encrypted in transit using TLS 1.2/1.3 and at rest using AES-256 (with Fernet symmetric encryption for integration tokens and BYOK secrets).
                  </li>
                </ul>
              </div>

              {/* Section 6 */}
              <div id="subprocessors" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-[#0B1220] mb-4">6. Authorized Subprocessors</h2>
                <p className="text-[17px] text-slate-700 leading-[1.75] mb-6">
                  We engage a minimal set of vetted enterprise subprocessors bound by strict confidentiality and data protection obligations:
                </p>
                <ul className="space-y-3 text-[17px] text-slate-700 leading-[1.75]">
                  <li><strong className="text-[#0B1220]">Microsoft Azure (Central India — US/EU on request):</strong> Cloud hosting, PostgreSQL database, and encrypted blob storage.</li>
                  <li><strong className="text-[#0B1220]">Microsoft Azure AI (Enterprise Tenant / Customer BYOK):</strong> Zero-retention LLM inference for document analysis and drafting.</li>
                  <li><strong className="text-[#0B1220]">Stripe (Global / India):</strong> Subscription billing and payment processing.</li>
                  <li><strong className="text-[#0B1220]">Resend (United States):</strong> Transactional system emails and workspace invitations (metadata only; zero requirement document content transmitted).</li>
                </ul>
              </div>

              {/* Section 7 */}
              <div id="retention" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-[#0B1220] mb-4">7. Data Retention & 30-Day Deletion Guarantee</h2>
                <ul className="space-y-4 text-[17px] text-slate-700 leading-[1.75]">
                  <li>
                    <strong className="text-[#0B1220]">Active Subscriptions:</strong> Customer Data is retained for the duration of your active workspace subscription so your team can access historical pursuits and repository assets.
                  </li>
                  <li>
                    <strong className="text-[#0B1220]">Termination & Deletion:</strong> Workspace administrators may delete individual projects, documents, or repositories at any time. Upon contract termination or written workspace deletion request, all Customer Data, uploaded files, embeddings, and encrypted tokens are permanently purged from active systems within 30 days (and from encrypted backups within standard rolling backup cycles).
                  </li>
                </ul>
              </div>

              {/* Section 8 */}
              <div id="rights" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-[#0B1220] mb-4">8. Your Privacy Rights & Contact Information</h2>
                <p className="text-[17px] text-slate-700 leading-[1.75] mb-6">
                  Depending on your jurisdiction (including rights under India's DPDP Act and global privacy frameworks), you have the right to access, correct, export, or request erasure of your personal data, or withdraw consent for optional communications.
                </p>
                <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6">
                  <ul className="space-y-4 text-[17px] text-slate-700 leading-[1.75]">
                    <li>
                      <strong className="text-[#0B1220]">Privacy & Data Protection Inquiries:</strong>{" "}
                      <a href="mailto:privacy@capivuetech.com" className="text-[#1E40AF] hover:underline">privacy@capivuetech.com</a>
                    </li>
                    <li>
                      <strong className="text-[#0B1220]">Security & DPA Requests:</strong>{" "}
                      <a href="mailto:security@capivuetech.com" className="text-[#1E40AF] hover:underline">security@capivuetech.com</a> (Request our standard Data Processing Agreement (DPA) or completed security diligence package)
                    </li>
                    <li>
                      <strong className="text-[#0B1220]">Registered Entity:</strong> Capivue Solutions Pvt Ltd, Hyderabad, Telangana, India.
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </article>
        </div>
      </section>
    </div>
  );
}