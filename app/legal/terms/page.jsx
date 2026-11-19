"use client";
import Link from "next/link";

export default function TermsOfService() {
  const sections = [
    { id: "agreement", title: "1. Agreement to Terms" },
    { id: "platform-access", title: "2. Platform Access & Roles" },
    { id: "ip-ownership", title: "3. Data & IP Ownership" },
    { id: "ai-governance", title: "4. AI Governance & BYOK" },
    { id: "billing", title: "5. Subscriptions & Billing" },
    { id: "confidentiality", title: "6. Confidentiality & Security" },
    { id: "termination", title: "7. Term & Data Purge" },
    { id: "warranties", title: "8. Warranties & Liability" },
    { id: "governing-law", title: "9. Governing Law" },
    { id: "contact", title: "10. Contact Information" }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-[#1E40AF] selection:text-white">

      {/* HEADER METADATA */}
      <section className="bg-[#F8FAFC] pt-20 pb-12 px-6 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1E40AF] text-xs font-bold uppercase tracking-wider mb-6">
            Legal & Commercial Governance
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B1220] mb-6">
            Terms of Service
          </h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500 font-medium">
            <span>Last Updated: November 2026</span>
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
              <div id="agreement" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-[#0B1220] mb-4">1. Agreement to Terms</h2>
                <div className="space-y-4 text-[17px] text-slate-700 leading-[1.75]">
                  <p>
                    These Terms of Service ("Terms") constitute a legally binding agreement between Capivue Solutions Pvt Ltd, a company registered in India with operations in Hyderabad, Telangana ("Capivue", "we", "us", or "our"), and the organization or individual accessing or using capivuetech.com, app.capivuetech.com, or any related APIs and enterprise services ("Customer" or "you").
                  </p>
                  <p>
                    By creating a workspace, executing an Order Form, or accessing the Platform, you represent that you have the legal authority to bind your organization to these Terms. If your organization has executed a separate Master Subscription Agreement (MSA) or Data Processing Agreement (DPA) with Capivue, the terms of that executed agreement govern in the event of any conflict.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div id="platform-access" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-[#0B1220] mb-4">2. Platform Access, Workspaces & User Roles</h2>
                <ul className="space-y-4 text-[17px] text-slate-700 leading-[1.75]">
                  <li>
                    <strong className="text-[#0B1220]">Workspace Provisioning:</strong> Capivue grants Customer a non-exclusive, non-transferable, revocable right during the active Subscription Term to access and use the Platform for internal business and revenue-operations purposes.
                  </li>
                  <li>
                    <strong className="text-[#0B1220]">Unlimited Users & Role Governance:</strong> Paid subscription tiers include unlimited workspace seats across role-based permissions (Admin, Contributor, and Reviewer). Customer is responsible for maintaining the confidentiality of workspace credentials, enforcing Multi-Factor Authentication (MFA) via Microsoft Entra ID Single Sign-On (SSO) where enabled, and managing user access rights.
                  </li>
                  <li>
                    <strong className="text-[#0B1220]">Acceptable Use Restrictions:</strong> Customer shall not: (a) resell, sublicense, or provide service-bureau access to third parties outside authorized advisory partner agreements; (b) reverse-engineer, decompile, or attempt to extract underlying source code, prompts, or PostgreSQL database schemas; (c) upload malicious code or attempt to bypass API rate limits or Row-Level Security (RLS) boundaries; or (d) use the Platform to build a competing product.
                  </li>
                </ul>
              </div>

              {/* Section 3 */}
              <div id="ip-ownership" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-[#0B1220] mb-4">3. Customer Data & Intellectual Property Ownership</h2>
                <ul className="space-y-4 text-[17px] text-slate-700 leading-[1.75]">
                  <li>
                    <strong className="text-[#0B1220]">Customer Ownership:</strong> As between the parties, Customer retains 100% ownership and all intellectual property rights in and to all uploaded requirement documents (RFPs, SOWs, BRDs, Excel schedules, PDFs, emails), Knowledge Repository files, Bidder Profiles, commercial rate cards ("Customer Input"), and all generated proposals, commercial workbooks, sprint plans, and executive decks ("Customer Output").
                  </li>
                  <li>
                    <strong className="text-[#0B1220]">Limited License to Operate:</strong> Customer grants Capivue a limited, worldwide, royalty-free license strictly to host, parse, index, and process Customer Input solely as necessary to provide and support the Platform during the Subscription Term.
                  </li>
                  <li>
                    <strong className="text-[#0B1220]">Capivue Intellectual Property:</strong> Capivue retains all right, title, and interest in the Platform software, user interface, analytical engines (Risk X-Ray, Deal Room, Sprint Planner, Grounded Narrative Engine), pre-seeded domain reference templates, and anonymized operational telemetry.
                  </li>
                </ul>
              </div>

              {/* Section 4 */}
              <div id="ai-governance" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-[#0B1220] mb-4">4. AI Governance, Human Review & BYOK Responsibility</h2>
                <ul className="space-y-4 text-[17px] text-slate-700 leading-[1.75]">
                  <li>
                    <strong className="text-[#0B1220]">Zero-Training Guarantee:</strong> Capivue never uses Customer Input or Customer Output to train, fine-tune, or improve shared or public foundation models. Managed AI inference executes via Microsoft Azure AI Service with contractual Zero Data Retention.
                  </li>
                  <li>
                    <strong className="text-[#0B1220]">Human-in-the-Loop Verification ([requires validation]):</strong> Artificial Intelligence outputs are decision-support drafts. While Capivue enforces dual-layer repository grounding and flags unverified claims with <span className="font-mono text-xs bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded border border-amber-200">[requires validation]</span>, Customer remains solely responsible for reviewing, verifying, and approving all final compliance verdicts, pricing figures, legal assumptions, and technical claims prior to submitting any bid or contract to a third party.
                  </li>
                  <li>
                    <strong className="text-[#0B1220]">Bring Your Own Key (BYOK) & Third-Party Connectors:</strong> Where Customer configures its own private AI endpoints (Azure OpenAI, Google Vertex AI, or OpenAI-compatible APIs) or connects third-party integrations (Microsoft SharePoint, OneDrive, Microsoft Teams, Salesforce, or Custom REST endpoints), Customer is responsible for maintaining valid third-party licenses and complying with those providers' terms.
                  </li>
                </ul>
              </div>

              {/* Section 5 */}
              <div id="billing" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-[#0B1220] mb-4">5. Subscriptions, Quotas, Billing & Taxes</h2>
                <ul className="space-y-4 text-[17px] text-slate-700 leading-[1.75]">
                  <li>
                    <strong className="text-[#0B1220]">Subscription Plans & Quotas:</strong> Paid tiers (Starter, Professional, and Enterprise) are billed monthly or annually in advance in USD (or the currency specified on an Order Form) and include monthly AI processing call quotas (1,000, 3,000, or 10,000 calls/month respectively). Unused monthly AI calls do not roll over unless agreed in an Enterprise Order Form.
                  </li>
                  <li>
                    <strong className="text-[#0B1220]">Payment Processing & Currency:</strong> Online subscription payments are processed securely via Stripe. For customers paying with corporate cards denominated in INR or other local currencies, currency conversion is governed by your issuing bank's exchange rates. All fees are exclusive of applicable taxes (including Indian Goods and Services Tax (GST) where applicable), which Customer shall pay in addition to subscription fees.
                  </li>
                  <li>
                    <strong className="text-[#0B1220]">Renewals & Upgrades:</strong> Subscriptions automatically renew for successive monthly or annual terms unless cancelled prior to the renewal date. Plan upgrades take effect immediately with prorated billing. Fees paid are non-refundable except as required by law or in the event of an uncured material breach by Capivue.
                  </li>
                </ul>
              </div>

              {/* Section 6 */}
              <div id="confidentiality" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-[#0B1220] mb-4">6. Confidentiality & Data Security</h2>
                <ul className="space-y-4 text-[17px] text-slate-700 leading-[1.75]">
                  <li>
                    <strong className="text-[#0B1220]">Mutual Confidentiality:</strong> Each party agrees to protect the other party's non-public Confidential Information (including Customer's rate cards, requirement documents, and Capivue's pricing and security documentation) using at least the same degree of care it uses for its own confidential information, and no less than reasonable care.
                  </li>
                  <li>
                    <strong className="text-[#0B1220]">Security Architecture:</strong> Capivue maintains administrative, technical, and physical safeguards as detailed in our Security & Trust Center, including Microsoft Azure Central India (Pune) hosting, PostgreSQL Row-Level Security (RLS), TLS 1.2/1.3 encryption in transit, AES-256 encryption at rest, and Fernet symmetric encryption for integration credentials.
                  </li>
                </ul>
              </div>

              {/* Section 7 */}
              <div id="termination" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-[#0B1220] mb-4">7. Term, Termination & 30-Day Data Purge</h2>
                <ul className="space-y-4 text-[17px] text-slate-700 leading-[1.75]">
                  <li>
                    <strong className="text-[#0B1220]">Term & Termination for Cause:</strong> These Terms remain in effect throughout your active Trial or Subscription Term. Either party may terminate immediately upon written notice if the other party materially breaches these Terms and fails to cure such breach within 15 days of written notice.
                  </li>
                  <li>
                    <strong className="text-[#0B1220]">Post-Termination Data Deletion:</strong> Upon expiration or termination of Customer's subscription, Customer may export its deliverables prior to account closure. Within 30 days following termination, Capivue will permanently purge all Customer Data, uploaded files, repository embeddings, and encrypted tokens from active production systems.
                  </li>
                </ul>
              </div>

              {/* Section 8 */}
              <div id="warranties" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-[#0B1220] mb-4">8. Warranties, Disclaimers & Limitation of Liability</h2>
                <ul className="space-y-4 text-[17px] text-slate-700 leading-[1.75]">
                  <li>
                    <strong className="text-[#0B1220]">Service Warranty:</strong> Capivue warrants that the Platform will perform materially in accordance with its published documentation during the Subscription Term.
                  </li>
                  <li>
                    <strong className="text-[#0B1220]">Disclaimer:</strong> EXCEPT AS EXPRESSLY PROVIDED HEREIN, THE PLATFORM IS PROVIDED "AS IS" WITHOUT IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. CAPIVUE DOES NOT GUARANTEE THAT ANY SUBMITTED BID OR PROPOSAL WILL BE AWARDED.
                  </li>
                  <li>
                    <strong className="text-[#0B1220]">Limitation of Liability:</strong> TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, NEITHER PARTY SHALL BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR LOSS OF PROFITS OR REVENUE. EXCEPT FOR BREACHES OF CONFIDENTIALITY OR INTELLECTUAL PROPERTY INFRINGEMENT, EACH PARTY'S TOTAL AGGREGATE LIABILITY ARISING OUT OF THESE TERMS SHALL NOT EXCEED THE TOTAL FEES PAID BY CUSTOMER TO CAPIVUE IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
                  </li>
                </ul>
              </div>

              {/* Section 9 */}
              <div id="governing-law" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-[#0B1220] mb-4">9. Governing Law & Dispute Resolution</h2>
                <p className="text-[17px] text-slate-700 leading-[1.75]">
                  These Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict-of-law principles. Any dispute arising out of or relating to these Terms that cannot be resolved amicably within 30 days shall be subject to the exclusive jurisdiction of the courts located in Hyderabad, Telangana, India.
                </p>
              </div>

              {/* Section 10 */}
              <div id="contact" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-[#0B1220] mb-4">10. Contact Information</h2>
                <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6">
                  <ul className="space-y-4 text-[17px] text-slate-700 leading-[1.75]">
                    <li>
                      <strong className="text-[#0B1220]">Legal, Contract & General Inquiries:</strong>{" "}
                      <a href="mailto:contact@capivuetech.com" className="text-[#1E40AF] hover:underline">contact@capivuetech.com</a>
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