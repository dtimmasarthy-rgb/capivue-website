"use client";
import Link from "next/link";

export default function DPA() {
  const sections = [
    { id: "scope", title: "1. Scope, Roles & Definitions" },
    { id: "nature", title: "2. Nature & Purpose of Processing" },
    { id: "obligations", title: "3. Processor Obligations" },
    { id: "security", title: "4. Technical Security Measures" },
    { id: "subprocessors", title: "5. Authorized Subprocessors" },
    { id: "breach", title: "6. Breach Notification" },
    { id: "cross-border", title: "7. Cross-Border Transfers" },
    { id: "audits", title: "8. Audits & Data Deletion" },
    { id: "request", title: "9. Request Executed DPA" }
  ];

  const subprocessors = [
    { name: "Microsoft Azure", activity: "Primary cloud compute, PostgreSQL database & encrypted storage", location: "Central India (Pune) (US/EU on request)", safeguards: "ISO 27001, SOC 2 Type II, AES-256 at rest" },
    { name: "Microsoft Azure AI", activity: "Enterprise LLM inference (requirement analysis & drafting)", location: "Azure Enterprise Tenant (or Customer BYOK)", safeguards: "Contractual Zero Data Retention; no model training" },
    { name: "Stripe", activity: "Subscription payment processing & tax invoicing", location: "Global / India", safeguards: "PCI-DSS Level 1 certified payment processor" },
    { name: "Resend", activity: "Transactional system alerts & workspace invite delivery", location: "United States", safeguards: "Metadata-only delivery logs; zero RFP content" }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-[#1E40AF] selection:text-white">

      {/* HEADER METADATA */}
      <section className="bg-[#F8FAFC] pt-20 pb-12 px-6 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1E40AF] text-xs font-bold uppercase tracking-wider mb-6">
            Enterprise Data Governance & Compliance
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B1220] mb-6">
            Data Processing Agreement (DPA)
          </h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500 font-medium">
            <span>Effective Date: November 2026</span>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-slate-300"></span>
            <span>Processor: Capivue Solutions Pvt Ltd (Registered in India)</span>
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
              <div id="scope" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-[#0B1220] mb-4">1. Scope, Roles & Definitions</h2>
                <div className="space-y-4 text-[17px] text-slate-700 leading-[1.75]">
                  <p>
                    This Data Processing Agreement ("DPA") forms an integral part of the Terms of Service or Master Subscription Agreement ("Agreement") between Capivue Solutions Pvt Ltd, a company registered in India with operations in Hyderabad, Telangana ("Capivue" or "Processor"), and the enterprise customer executing the Agreement ("Customer" or "Controller").
                  </p>
                  <ul className="space-y-4">
                    <li>
                      <strong className="text-[#0B1220]">Roles of the Parties:</strong> With respect to all Personal Data contained within requirement documents, Knowledge Repository files, Bidder Profiles, and workspace user directories uploaded or processed through app.capivuetech.com ("Customer Personal Data"), Customer acts as the Data Controller / Data Fiduciary and Capivue acts as the Data Processor, processing data solely on Customer's documented instructions.
                    </li>
                    <li>
                      <strong className="text-[#0B1220]">Regulatory Alignment:</strong> This DPA is designed to satisfy the contractual processor requirements under India's Digital Personal Data Protection (DPDP) Act, 2023, the EU/UK General Data Protection Regulation (GDPR) where applicable, and enterprise procurement security standards.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 2 */}
              <div id="nature" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-[#0B1220] mb-4">2. Nature, Purpose & Categories of Processing</h2>
                <ul className="space-y-4 text-[17px] text-slate-700 leading-[1.75]">
                  <li>
                    <strong className="text-[#0B1220]">Subject Matter & Purpose:</strong> Capivue processes Customer Personal Data strictly to deliver, maintain, and support the Capivue Requirement, Commercial, and Proposal Intelligence Platform—including document extraction (OCR), requirement risk auditing, commercial and sprint capacity modeling, grounded section drafting, and authorized third-party integrations.
                  </li>
                  <li>
                    <strong className="text-[#0B1220]">Duration of Processing:</strong> Processing continues for the duration of Customer's active Subscription Term plus up to 30 calendar days post-termination to complete permanent data erasure.
                  </li>
                  <li>
                    <strong className="text-[#0B1220]">Categories of Data Subjects:</strong> Customer's employees, workspace administrators, Subject Matter Experts (SMEs), named delivery personnel/architects referenced in CVs or case studies, and buyer procurement contacts listed in tender correspondence.
                  </li>
                  <li>
                    <strong className="text-[#0B1220]">Categories of Personal Data:</strong> Business contact details (full names, corporate email addresses, job titles, phone numbers), authentication identifiers (Microsoft Entra ID SSO tokens), professional credentials/certifications, and workspace audit logs. Customer agrees not to intentionally upload regulated special-category health data or payment cardholder numbers into requirement documents unless covered by a mutually executed addendum.
                  </li>
                </ul>
              </div>

              {/* Section 3 */}
              <div id="obligations" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-[#0B1220] mb-4">3. Processor Obligations & Confidentiality</h2>
                <p className="text-[17px] text-slate-700 leading-[1.75] mb-4">Capivue shall:</p>
                <ol className="list-decimal pl-5 space-y-3 text-[17px] text-slate-700 leading-[1.75]">
                  <li><strong className="text-[#0B1220]">Process Only on Documented Instructions:</strong> Process Customer Personal Data strictly in accordance with Customer's written instructions as configured within the Platform and Agreement, unless required otherwise by applicable Indian or statutory law.</li>
                  <li><strong className="text-[#0B1220]">Personnel Confidentiality:</strong> Ensure all engineering, operations, and support personnel authorized to access production infrastructure are bound by written confidentiality obligations and complete mandatory security training.</li>
                  <li><strong className="text-[#0B1220]">Zero AI Model Training:</strong> Never use Customer Personal Data, requirement documents, rate cards, or generated outputs to train, fine-tune, or improve public or shared Artificial Intelligence models.</li>
                  <li><strong className="text-[#0B1220]">Data Subject Rights Assistance:</strong> Provide reasonable technical and organizational assistance to enable Customer to respond to requests from Data Subjects exercising rights of access, correction, erasure, or grievance redressal under the DPDP Act or GDPR.</li>
                </ol>
              </div>

              {/* Section 4 */}
              <div id="security" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-[#0B1220] mb-4">4. Technical & Organizational Security Measures (TOMs)</h2>
                <p className="text-[17px] text-slate-700 leading-[1.75] mb-4">
                  Capivue implements and maintains the following cryptographic and architectural safeguards across its production environment:
                </p>
                <ul className="space-y-4 text-[17px] text-slate-700 leading-[1.75]">
                  <li>
                    <strong className="text-[#0B1220]">Sovereign Regional Hosting:</strong> Primary compute (Azure Container Apps), databases (PostgreSQL), and encrypted file storage are hosted on Microsoft Azure in the Central India (Pune) region, with dedicated US East or West Europe deployments available for multinational Enterprise tenants upon written Order Form.
                  </li>
                  <li>
                    <strong className="text-[#0B1220]">Database-Level Tenant Isolation (PostgreSQL RLS):</strong> Logical multi-tenant separation is enforced directly inside the PostgreSQL database engine using Row-Level Security (RLS) policies bound to each authenticated workspace_id.
                  </li>
                  <li>
                    <strong className="text-[#0B1220]">Encryption in Transit & at Rest:</strong> All external and internal network traffic is encrypted using TLS 1.2 / 1.3. All databases, uploaded files, and generated deliverables are encrypted at rest using AES-256, while OAuth tokens and Bring Your Own Key (BYOK) secrets are encrypted using Fernet symmetric cryptography.
                  </li>
                  <li>
                    <strong className="text-[#0B1220]">AI Inference Boundary:</strong> Managed LLM inference runs via Microsoft Azure AI Service with contractual Zero Data Retention, or routes directly to Customer's private Azure OpenAI / Google Vertex AI endpoint via Enterprise BYOK.
                  </li>
                  <li>
                    <strong className="text-[#0B1220]">Access Governance & Audit Trails:</strong> Administrative access to Azure production resources is restricted to authorized personnel enforcing Multi-Factor Authentication (MFA) and Role-Based Access Control (RBAC), backed by immutable workspace audit logs.
                  </li>
                </ul>
              </div>

              {/* Section 5 */}
              <div id="subprocessors" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-[#0B1220] mb-4">5. Authorized Subprocessors & Change Notification</h2>
                <p className="text-[17px] text-slate-700 leading-[1.75] mb-6">
                  Customer grants Capivue general written authorization to engage the following vetted enterprise subprocessors to deliver the Platform:
                </p>
                
                <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm mb-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                      <thead>
                        <tr className="bg-[#F8FAFC] border-b border-slate-200">
                          <th className="p-4 font-bold text-[#0B1220] text-xs uppercase tracking-wider w-[20%]">Subprocessor</th>
                          <th className="p-4 font-semibold text-slate-500 text-xs uppercase tracking-wider w-[30%]">Processing Activity</th>
                          <th className="p-4 font-semibold text-slate-500 text-xs uppercase tracking-wider w-[25%]">Hosting Location</th>
                          <th className="p-4 font-semibold text-slate-500 text-xs uppercase tracking-wider w-[25%]">Safeguards</th>
                        </tr>
                      </thead>
                      <tbody>
                        {subprocessors.map((sub, idx) => (
                          <tr key={idx} className="border-b border-slate-100 last:border-b-0">
                            <td className="p-4 text-sm font-semibold text-[#0B1220] align-top">{sub.name}</td>
                            <td className="p-4 text-sm text-slate-600 leading-relaxed align-top">{sub.activity}</td>
                            <td className="p-4 text-sm text-slate-600 leading-relaxed align-top">{sub.location}</td>
                            <td className="p-4 text-sm text-slate-600 leading-relaxed align-top">{sub.safeguards}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <p className="text-[17px] text-slate-700 leading-[1.75]">
                  Capivue will notify Customer at least 15 days prior to authorizing any new subprocessor that processes Customer Data, giving Customer the opportunity to raise reasonable data-protection objections.
                </p>
              </div>

              {/* Section 6 */}
              <div id="breach" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-[#0B1220] mb-4">6. Security Incident & Breach Notification</h2>
                <p className="text-[17px] text-slate-700 leading-[1.75] mb-4">
                  In the event Capivue becomes aware of a confirmed unauthorized access, disclosure, or loss of Customer Personal Data ("Security Incident"), Capivue shall:
                </p>
                <ol className="list-decimal pl-5 space-y-3 text-[17px] text-slate-700 leading-[1.75]">
                  <li>Notify Customer's designated workspace administrator and security contact without undue delay and in no event later than 48 hours after confirmation.</li>
                  <li>Provide timely details regarding the nature of the Security Incident, affected workspace scope, containment measures executed, and recommended remediation steps.</li>
                  <li>Cooperate reasonably with Customer to fulfill regulatory reporting obligations under India's CERT-In / DPDP Act guidelines or applicable global breach-notification laws.</li>
                </ol>
              </div>

              {/* Section 7 */}
              <div id="cross-border" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-[#0B1220] mb-4">7. Cross-Border Data Transfers</h2>
                <p className="text-[17px] text-slate-700 leading-[1.75]">
                  For organizations transferring personal data subject to European (EEA/UK) or international data transfer restrictions into Capivue's cloud infrastructure, such transfers are governed by the Standard Contractual Clauses (SCCs) adopted by the European Commission (and the UK International Data Transfer Addendum, where applicable), incorporated into this DPA by reference alongside technical supplementary measures (TLS 1.3, AES-256, and Zero-Retention inference).
                </p>
              </div>

              {/* Section 8 */}
              <div id="audits" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-[#0B1220] mb-4">8. Audits, Diligence & Post-Termination Deletion</h2>
                <ul className="space-y-4 text-[17px] text-slate-700 leading-[1.75]">
                  <li>
                    <strong className="text-[#0B1220]">Security Diligence & Verification:</strong> Capivue maintains a published CSA STAR Level 1 (CAIQ) self-assessment and active SOC 2 Type II readiness (external CPA audit targeted for Q2–Q3 2027). Upon written request, Capivue will provide completed security questionnaires and architectural documentation to verify compliance with this DPA.
                  </li>
                  <li>
                    <strong className="text-[#0B1220]">30-Day Permanent Data Deletion:</strong> Upon termination or expiration of the Agreement, Customer may export all workspace deliverables prior to account closure. Within 30 calendar days of termination, Capivue shall permanently delete all Customer Data, uploaded documents, vector embeddings, and encrypted integration credentials from active production systems and certify deletion upon written request.
                  </li>
                </ul>
              </div>

            </div>
          </article>
        </div>
      </section>

      {/* SECTION 9: DARK OBSIDIAN ACTION STRIP */}
      <section id="request" className="py-20 px-6 bg-[#090D16] border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Need a countersigned DPA for your vendor onboarding or CISO review?
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            Email our team with your legal entity name and registered address to receive a countersigned PDF copy within one business day.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:contact@capivuetech.com?subject=Request%20for%20Countersigned%20DPA&body=Please%20provide%20a%20countersigned%20DPA.%20Our%20legal%20entity%20name%20is%20%5BInsert%20Entity%5D%20and%20our%20registered%20address%20is%20%5BInsert%20Address%5D."
              className="bg-[#0EA5E9] text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-sky-400 transition-colors shadow-lg shadow-[#0EA5E9]/20"
            >
              Request Countersigned DPA
            </a>
            <Link
              href="/security"
              className="bg-transparent border border-slate-600 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-slate-800 transition-colors"
            >
              Visit Security & Trust Center →
            </Link>
          </div>
          <p className="text-xs text-slate-500 mt-6">
            Direct contact: <a href="mailto:contact@capivuetech.com" className="text-slate-400 hover:text-white transition-colors">contact@capivuetech.com</a>
          </p>
        </div>
      </section>

    </div>
  );
}