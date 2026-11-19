"use client";
import { useState } from "react";
import Link from "next/link";

export default function Pricing() {
  const [billing, setBilling] = useState("monthly");

  const tiers = [
    {
      name: "Starter",
      desc: "For individual bid managers and boutique practices.",
      monthly: 400,
      annual: 4000,
      cta: "Start Free Trial",
      highlight: false,
      features: [
        "1,000 AI Processing Calls / month",
        "Unlimited Team Members (Admin, Contributor, Reviewer)",
        "Requirement Extraction & 8-Dimension Risk X-Ray",
        "Win Strategy Blueprint & Grounded Section Drafting",
        "Word (.docx) Proposal Exports",
        "Microsoft OneDrive Integration"
      ]
    },
    {
      name: "Professional",
      desc: "For active revenue and delivery teams running complex pursuits.",
      monthly: 1000,
      annual: 10000,
      cta: "Start Free Trial",
      highlight: true,
      features: [
        "3,000 AI Processing Calls / month (3x Starter)",
        "Everything in Starter, plus:",
        "Deal Room Financial Engine (blended rates, 15% QA + 10% PM overheads, 20% contingency)",
        "Agile Sprint Planner (1–6 week sprints & capacity math)",
        "Full Multi-Format Exports (.docx, 5-tab CFO .xlsx, .pptx)",
        "Microsoft Entra ID SSO, Microsoft Teams Adaptive Cards & Salesforce Sync"
      ]
    },
    {
      name: "Enterprise",
      desc: "For global system integrators, BFSI teams, and strict compliance mandates.",
      monthly: 3000,
      annual: 30000,
      cta: "Contact Enterprise Sales",
      highlight: false,
      features: [
        "10,000 AI Processing Calls / month (built for 300-page pursuits)",
        "Everything in Professional, plus:",
        "Bring Your Own Key (BYOK) — route inference to your private Azure OpenAI or Vertex AI tenant",
        "SharePoint Knowledge Sync, Custom REST API & Outbound Webhooks",
        "White-Label Workspace Branding (custom logo and domain)",
        "Dedicated Enterprise Onboarding, Custom DPA & Priority SLA"
      ]
    }
  ];

  const matrix = [
    {
      category: "Usage & Capacity",
      items: [
        { name: "Monthly AI Processing Quota", trial: "50 Calls (Total)", starter: "1,000 / mo", pro: "3,000 / mo", ent: "10,000 / mo" },
        { name: "Workspace Team Members", trial: "1 User", starter: "Unlimited", pro: "Unlimited", ent: "Unlimited" },
        { name: "Multi-Document Submission Packs", trial: "1 Doc", starter: "Multi-Doc", pro: "Multi-Doc", ent: "Multi-Doc" }
      ]
    },
    {
      category: "Requirement & Proposal Intelligence",
      items: [
        { name: "Multi-Format Intake (PDF, OCR, XLSX, DOCX, Email)", trial: "✓", starter: "✓", pro: "✓", ent: "✓" },
        { name: "8-Dimension Risk X-Ray & Bid Strength Score", trial: "✓", starter: "✓", pro: "✓", ent: "✓" },
        { name: "Deduplicated Assumptions Register", trial: "✓", starter: "✓", pro: "✓", ent: "✓" },
        { name: "Executive Win Strategy Blueprint & Approval Locks", trial: "✓", starter: "✓", pro: "✓", ent: "✓" },
        { name: "Knowledge Repository RAG & Citation Drawer", trial: "✓", starter: "✓", pro: "✓", ent: "✓" }
      ]
    },
    {
      category: "Commercial & Delivery Engines",
      items: [
        { name: "Deal Room (Blended Rate Cards & TCV Bands)", trial: "—", starter: "—", pro: "✓", ent: "✓" },
        { name: "Automated QA (15%), PM (10%) & Contingency (20%)", trial: "—", starter: "—", pro: "✓", ent: "✓" },
        { name: "Agile Sprint Planner & Capacity Math", trial: "—", starter: "—", pro: "✓", ent: "✓" }
      ]
    },
    {
      category: "Submission Exports",
      items: [
        { name: "Export to Word (.docx Proposal & Drafts)", trial: "—", starter: "✓", pro: "✓", ent: "✓" },
        { name: "Export to Excel (5-Tab CFO & Risk Workbook .xlsx)", trial: "—", starter: "—", pro: "✓", ent: "✓" },
        { name: "Export to PowerPoint (Executive Deck .pptx)", trial: "—", starter: "—", pro: "✓", ent: "✓" }
      ]
    },
    {
      category: "Integrations, Security & Governance",
      items: [
        { name: "PostgreSQL Row-Level Security (RLS) & AES-256", trial: "✓", starter: "✓", pro: "✓", ent: "✓" },
        { name: "Microsoft OneDrive Integration", trial: "—", starter: "✓", pro: "✓", ent: "✓" },
        { name: "Microsoft Entra ID (Azure AD) SSO", trial: "—", starter: "—", pro: "✓", ent: "✓" },
        { name: "Microsoft Teams Adaptive Cards & Salesforce CRM", trial: "—", starter: "—", pro: "✓", ent: "✓" },
        { name: "Microsoft SharePoint Sync, Custom REST & Webhooks", trial: "—", starter: "—", pro: "—", ent: "✓" },
        { name: "Bring Your Own Key (BYOK / Private Azure AI)", trial: "—", starter: "—", pro: "—", ent: "✓" },
        { name: "White-Label Workspace Branding", trial: "—", starter: "—", pro: "—", ent: "✓" },
        { name: "Custom DPA & Dedicated Solutions Architect", trial: "—", starter: "—", pro: "—", ent: "✓" }
      ]
    }
  ];

  const faqs = [
    {
      q: "What types of documents can Capivue process?",
      a: "Capivue ingests complete pursuit packages—including primary RFPs, Statements of Work (SOWs), Business Requirement Documents (BRDs), scanned PDF annexures (via Tesseract OCR), multi-sheet Excel compliance schedules, capability decks, and tender emails (.eml / .msg) up to 50 MB per file."
    },
    {
      q: "Are team seats really unlimited on paid plans?",
      a: "Yes. Enterprise pursuits require input from Pre-Sales, Solution Architects, Legal, Finance, and Delivery Heads. We never charge per-seat fees—you can invite unlimited reviewers, contributors, and SMEs across your workspace."
    },
    {
      q: "How does currency conversion work for Indian and international customers?",
      a: "Plans are billed in USD via Stripe. For organizations paying with Indian corporate cards, your issuing bank automatically handles real-time USD-to-INR conversion at checkout, and GST-compliant invoices are issued upon request."
    },
    {
      q: "Can we connect our own Azure OpenAI or private LLM keys?",
      a: "Yes. On the Enterprise plan, Bring Your Own Key (BYOK) allows you to route all AI analysis and section drafting directly through your organization's private Azure OpenAI, Google Vertex AI, or OpenAI-compatible endpoint."
    },
    {
      q: "Is our data ever used to train AI models?",
      a: "Never. All inference runs with contractual Zero Data Retention, and your workspace data is isolated at the database layer using PostgreSQL Row-Level Security (RLS) on Microsoft Azure Central India (Pune)."
    },
    {
      q: "Can we upgrade mid-cycle if we take on a 300-page tender?",
      a: "Yes. You can upgrade between Starter, Professional, and Enterprise at any time—new AI quotas and features unlock immediately with prorated billing."
    }
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-800 font-sans selection:bg-[#1E40AF] selection:text-white">

      {/* SECTION 1: HERO + BILLING TOGGLE */}
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1E40AF] text-xs font-bold uppercase tracking-wider mb-6">
            Transparent Enterprise Pricing
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B1220] mb-6">
            Predictable pricing built for enterprise revenue and delivery teams.
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Start with a free trial on your next requirement document. Scale cleanly from individual capture leads to multi-practice global system integrators—with unlimited workspace seats on every paid tier.
          </p>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-slate-700 mb-10">
            <span className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Unlimited users on every paid plan</span>
            <span className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Azure Central India residency & PostgreSQL RLS</span>
            <span className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Zero Data Retention AI — never trains public models</span>
          </div>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white border border-slate-200 rounded-full p-1 shadow-sm">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                billing === "monthly"
                  ? "bg-[#0B1220] text-white shadow"
                  : "text-slate-600 hover:text-[#0B1220]"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBilling("annual")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                billing === "annual"
                  ? "bg-[#0B1220] text-white shadow"
                  : "text-slate-600 hover:text-[#0B1220]"
              }`}
            >
              Annual Billing
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 border border-emerald-500/30">
                Save 16%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: THREE-TIER PRICING CARDS + FREE TRIAL STRIP */}
      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {tiers.map((tier) => {
              const isAnnual = billing === "annual";
              const displayPrice = isAnnual ? tier.annual : tier.monthly;
              const priceLabel = tier.name === "Enterprise" && displayPrice === 30000 ? "$30,000" :
                                 tier.name === "Professional" && displayPrice === 10000 ? "$10,000" :
                                 tier.name === "Starter" && displayPrice === 4000 ? "$4,000" :
                                 `$${displayPrice.toLocaleString()}`;
              const period = isAnnual ? "/ year" : "/ month";

              return (
                <div
                  key={tier.name}
                  className={`relative flex flex-col p-8 rounded-2xl border ${
                    tier.highlight
                      ? "bg-[#090D16] border-[#090D16] shadow-2xl"
                      : "bg-white border-slate-200 shadow-sm"
                  }`}
                >
                  {tier.highlight && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg">
                      Most Popular
                    </div>
                  )}

                  <h2 className={`text-2xl font-bold mb-2 ${tier.highlight ? "text-white" : "text-[#0B1220]"}`}>
                    {tier.name}
                  </h2>
                  <p className={`text-sm mb-6 min-h-[40px] ${tier.highlight ? "text-slate-400" : "text-slate-500"}`}>
                    {tier.desc}
                  </p>

                  <div className="mb-2">
                    <span className={`text-4xl font-extrabold tracking-tight ${tier.highlight ? "text-white" : "text-[#0B1220]"}`}>
                      {priceLabel}
                    </span>
                    <span className={`text-sm ml-1 ${tier.highlight ? "text-slate-400" : "text-slate-500"}`}>
                      {period}
                    </span>
                  </div>
                  {isAnnual && tier.name !== "Enterprise" && (
                    <div className={`text-xs mb-4 ${tier.highlight ? "text-emerald-400" : "text-emerald-600"} font-medium`}>
                      Billed annually — 2 months free
                    </div>
                  )}
                  {isAnnual && tier.name === "Enterprise" && (
                    <div className={`text-xs mb-4 ${tier.highlight ? "text-emerald-400" : "text-emerald-600"} font-medium`}>
                      Custom volume tiers available
                    </div>
                  )}
                  {!isAnnual && <div className="mb-4 h-4" />}

                  <Link
                    href={tier.name === "Enterprise" ? "/contact-sales" : "/request-demo"}
                    className={`w-full py-3 rounded-lg text-center text-sm font-semibold transition-colors mb-8 ${
                      tier.highlight
                        ? "bg-[#0EA5E9] text-white hover:bg-sky-400"
                        : "bg-[#1E40AF] text-white hover:bg-blue-700"
                    }`}
                  >
                    {tier.cta}
                  </Link>

                  <ul className="space-y-3 flex-grow">
                    {tier.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <svg
                          className={`w-4 h-4 shrink-0 mt-0.5 ${tier.highlight ? "text-emerald-400" : "text-emerald-500"}`}
                          fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={`text-sm leading-relaxed ${tier.highlight ? "text-slate-300" : "text-slate-600"}`}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Free Trial Strip */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold text-[#0B1220] mb-1">
                Evaluating Capivue on an active requirement document?
              </h3>
              <p className="text-sm text-slate-600">
                Start a Free Trial (50 AI Processing Calls · No credit card required) to test requirement extraction, Risk X-Ray, and Win Strategy generation on one pursuit.
              </p>
            </div>
            <Link
              href="/request-demo"
              className="shrink-0 bg-[#0B1220] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors whitespace-nowrap"
            >
              Launch Free Trial →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURE MATRIX */}
      <section className="py-16 px-6 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-3">
              Full feature & governance matrix
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Every capability, quota, and integration—laid out plainly so your procurement team can map tiers to requirements.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-[#F8FAFC] border-b border-slate-200">
                    <th className="p-5 font-bold text-[#0B1220] text-sm w-[34%]">Capability</th>
                    <th className="p-5 font-semibold text-slate-500 text-xs uppercase tracking-wider text-center w-[16%]">Free Trial</th>
                    <th className="p-5 font-semibold text-slate-500 text-xs uppercase tracking-wider text-center w-[16%]">Starter</th>
                    <th className="p-5 font-bold text-[#1E40AF] text-xs uppercase tracking-wider text-center w-[17%] bg-blue-50/50">Professional</th>
                    <th className="p-5 font-semibold text-slate-500 text-xs uppercase tracking-wider text-center w-[17%]">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {matrix.map((section, idx) => (
                    <>
                      <tr key={`cat-${idx}`} className="border-y border-slate-200">
                        <td colSpan="5" className="px-5 py-3 text-[11px] font-bold text-slate-600 uppercase tracking-widest bg-slate-100">
                          {section.category}
                        </td>
                      </tr>
                      {section.items.map((item, i) => (
                        <tr key={`item-${idx}-${i}`} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="px-5 py-3.5 text-sm text-[#0B1220]">{item.name}</td>
                          <td className="px-5 py-3.5 text-sm text-center text-slate-500">{item.trial}</td>
                          <td className="px-5 py-3.5 text-sm text-center text-slate-500">{item.starter}</td>
                          <td className="px-5 py-3.5 text-sm text-center font-semibold text-[#1E40AF] bg-blue-50/30">{item.pro}</td>
                          <td className="px-5 py-3.5 text-sm text-center text-slate-500">{item.ent}</td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: ENTERPRISE PROCUREMENT FAQ */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-3">
              Enterprise procurement & billing FAQ
            </h2>
            <p className="text-slate-600">Straight answers to the questions your diligence team will ask.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-[#0B1220] text-sm mb-2 leading-snug">{faq.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CLOSING CONVERSION BANNER */}
      <section className="py-24 px-6 bg-[#090D16] text-center border-t border-slate-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            Ready to standardize how your organization qualifies, prices, and wins complex deals?
          </h2>
          <p className="text-lg text-slate-400 mb-10">
            Start a free trial today or schedule a tailored walkthrough with our enterprise solutions team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/request-demo"
              className="bg-[#0EA5E9] text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-sky-400 transition-colors shadow-lg shadow-[#0EA5E9]/20"
            >
              Book an Enterprise Demo
            </Link>
            <Link
              href="/request-demo"
              className="bg-transparent border border-slate-600 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-slate-800 transition-colors"
            >
              Start Free Trial →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}