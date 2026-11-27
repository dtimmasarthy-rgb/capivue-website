"use client";
import { useState } from "react";
import Link from "next/link";

export default function Pricing() {
  const [billing, setBilling] = useState("annual");

  const tiers = [
    {
      name: "Free Trial",
      monthly: 0,
      annual: 0,
      desc: "For evaluating the platform on a single active pursuit.",
      cta: "Start Free Trial",
      highlight: false,
      features: [
        "1 Active Pursuit",
        "1 Core Bid Creator",
        "Basic AI Analysis",
        "No Exports"
      ]
    },
    {
      name: "Starter",
      monthly: 720,
      annual: 7200,
      desc: "For small bid teams running regular pursuits.",
      cta: "Start Trial",
      highlight: false,
      features: [
        "4 Active Pursuits",
        "3 Core Bid Creators",
        "SharePoint Integration",
        "Word & Excel Exports",
        "Risk-first exports",
        "Bring Your Own Key (BYOK)"
      ]
    },
    {
      name: "Professional",
      monthly: 1800,
      annual: 18000,
      desc: "For active revenue and delivery teams running complex pursuits.",
      cta: "Start Trial",
      highlight: true,
      features: [
        "15 Active Pursuits",
        "10 Core Bid Creators",
        "Deal Room Financial Engine",
        "Agile Sprint Planner",
        "Full Multi-Format Exports (.docx, .xlsx, .pptx)",
        "Microsoft Entra ID SSO & Teams Integration"
      ]
    },
    {
      name: "Enterprise",
      monthly: "Custom",
      annual: "Custom",
      desc: "For global system integrators, BFSI teams, and strict compliance mandates.",
      cta: "Contact Enterprise Sales",
      highlight: false,
      features: [
        "40 Active Pursuits",
        "50 Core Bid Creators",
        "Priority AI Queue",
        "White-Label Branding",
        "Dedicated Solutions Architect",
        "Unlimited Documents per Bid"
      ]
    }
  ];

  const matrix = [
    {
      category: "Usage & Capacity",
      items: [
        { name: "Active Pursuits (Add-ons available)", trial: "1", starter: "4", pro: "15", ent: "40" },
        { name: "Core Bid Creators / Seats (Add-ons available)", trial: "1", starter: "3", pro: "10", ent: "50" },
        { name: "Workspace Team Members", trial: "1 User", starter: "Unlimited", pro: "Unlimited", ent: "Unlimited" },
        { name: "Documents per Bid", trial: "1", starter: "2", pro: "3", ent: "Unlimited" }
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
        { name: "Export to Excel (5-Tab CFO & Risk Workbook .xlsx)", trial: "—", starter: "✓", pro: "✓", ent: "✓" },
        { name: "Export to PowerPoint (Executive Deck .pptx)", trial: "—", starter: "—", pro: "✓", ent: "✓" }
      ]
    },
    {
      category: "Integrations, Security & Governance",
      items: [
        { name: "PostgreSQL Row-Level Security (RLS) & AES-256", trial: "✓", starter: "✓", pro: "✓", ent: "✓" },
        { name: "Microsoft OneDrive Integration", trial: "—", starter: "✓", pro: "✓", ent: "✓" },
        { name: "Microsoft SharePoint Sync", trial: "—", starter: "✓", pro: "✓", ent: "✓" },
        { name: "Microsoft Entra ID (Azure AD) SSO", trial: "—", starter: "—", pro: "✓", ent: "✓" },
        { name: "Microsoft Teams Adaptive Cards & Salesforce CRM", trial: "—", starter: "—", pro: "✓", ent: "✓" },
        { name: "Custom REST & Webhooks", trial: "—", starter: "—", pro: "✓", ent: "✓" },
        { name: "Bring Your Own Key (BYOK / Private Azure AI)", trial: "—", starter: "✓", pro: "✓", ent: "✓" },
        { name: "Priority AI Queue", trial: "—", starter: "—", pro: "—", ent: "✓" },
        { name: "White-Label Workspace Branding", trial: "—", starter: "—", pro: "—", ent: "✓" },
        { name: "Dedicated Solutions Architect / CSM", trial: "—", starter: "—", pro: "—", ent: "✓" }
      ]
    }
  ];

  const faqs = [
    {
      q: "What counts as an Active Pursuit?",
      a: "A single active pursuit includes the primary RFP document, associated SOWs, and any Q&A documents uploaded for that specific client engagement. Additional pursuit add-ons can be purchased from your billing portal."
    },
    {
      q: "Are workspace members unlimited?",
      a: "Yes. While there are limits on 'Core Bid Creators' (the people actively drafting and managing the bid), you can invite unlimited reviewers, SMEs, and stakeholders to collaborate and approve sections."
    },
    {
      q: "How do I connect my own AI key (BYOK)?",
      a: "On the Starter, Professional, and Enterprise tiers, you can connect your own private Azure OpenAI, Google Gemini, or OpenAI-compatible endpoints directly in Workspace Settings to route sensitive inference."
    },
    {
      q: "What payment methods do you accept?",
      a: "We process all payments securely via Stripe. For organizations paying with Indian corporate cards, your issuing bank handles USD-to-INR conversion, and GST-compliant invoices are issued upon request."
    },
    {
      q: "Is our data used to train AI models?",
      a: "Never. All inference runs with contractual Zero Data Retention, and your workspace data is isolated at the database layer using PostgreSQL Row-Level Security (RLS) on Microsoft Azure Central India."
    },
    {
      q: "Can we upgrade mid-cycle if we take on a massive tender?",
      a: "Yes. You can upgrade between Starter, Professional, and Enterprise at any time. New quotas and features unlock immediately with prorated billing."
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
            Predictable pricing for enterprise teams.
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Scale your pursuits with transparent governance. Start with a free trial, then upgrade as your bid volume grows. Every paid tier includes enterprise-grade security.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white border border-slate-200 rounded-full p-1 shadow-sm">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                billing === "monthly" ? "bg-[#0B1220] text-white shadow" : "text-slate-600 hover:text-[#0B1220]"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBilling("annual")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                billing === "annual" ? "bg-[#0B1220] text-white shadow" : "text-slate-600 hover:text-[#0B1220]"
              }`}
            >
              Annual Billing
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 border border-emerald-500/30">
                Save 2 Months
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: FOUR-TIER PRICING CARDS */}
      <section className="pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {tiers.map((tier) => {
              const isAnnual = billing === "annual";
              const isCustom = tier.monthly === "Custom";
              const isFree = tier.monthly === 0;
              
              // Calculate display price (annual is 20% off monthly * 12, displayed as monthly equivalent)
              const displayPrice = isCustom ? "Custom" : isFree ? "$0" : isAnnual ? Math.round((tier.annual / 12)) : tier.monthly;

              return (
                <div
                  key={tier.name}
                  className={`relative flex flex-col p-8 rounded-2xl border ${
                    tier.highlight ? "bg-[#0B1220] border-[#0B1220] shadow-2xl" : "bg-white border-slate-200 shadow-sm"
                  }`}
                >
                  {tier.highlight && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0EA5E9] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg">
                      Most Popular
                    </div>
                  )}

                  <h2 className={`text-xl font-bold mb-2 ${tier.highlight ? "text-white" : "text-[#0B1220]"}`}>
                    {tier.name}
                  </h2>
                  <p className={`text-xs mb-6 h-12 ${tier.highlight ? "text-slate-400" : "text-slate-500"}`}>
                    {tier.desc}
                  </p>

                  <div className="mb-4">
                    <span className={`text-3xl font-extrabold tracking-tight ${tier.highlight ? "text-white" : "text-[#0B1220]"}`}>
                      {displayPrice === "Custom" || displayPrice === "$0" ? displayPrice : `$${displayPrice.toLocaleString()}`}
                    </span>
                    {!isCustom && !isFree && (
                      <span className={`text-sm ml-1 ${tier.highlight ? "text-slate-400" : "text-slate-500"}`}>/mo</span>
                    )}
                    {isAnnual && !isCustom && !isFree && (
                      <div className={`text-[10px] mt-1 font-medium ${tier.highlight ? "text-emerald-400" : "text-emerald-600"}`}>
                        Billed ${tier.annual.toLocaleString()} annually
                      </div>
                    )}
                  </div>

                  <Link
                    href={isCustom ? "/contact" : "/request-demo"}
                    className={`w-full py-2.5 rounded-lg text-center text-sm font-semibold transition-colors mb-8 ${
                      tier.highlight ? "bg-[#0EA5E9] text-white hover:bg-sky-400" : "bg-[#1E40AF] text-white hover:bg-blue-900"
                    }`}
                  >
                    {tier.cta}
                  </Link>

                  <ul className="space-y-3 flex-grow">
                    {tier.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <svg className={`w-4 h-4 shrink-0 mt-0.5 ${tier.highlight ? "text-[#0EA5E9]" : "text-[#1E40AF]"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={`text-xs leading-relaxed ${tier.highlight ? "text-slate-300" : "text-slate-600"}`}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURE MATRIX */}
      <section className="py-16 px-6 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
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
              <table className="w-full text-left border-collapse min-w-[900px]">
                <thead>
                  <tr className="bg-[#F8FAFC] border-b border-slate-200">
                    <th className="p-5 font-bold text-[#0B1220] text-sm w-[30%]">Capability</th>
                    <th className="p-5 font-semibold text-slate-500 text-xs uppercase tracking-wider text-center w-[15%]">Free Trial</th>
                    <th className="p-5 font-semibold text-slate-500 text-xs uppercase tracking-wider text-center w-[15%]">Starter</th>
                    <th className="p-5 font-bold text-[#1E40AF] text-xs uppercase tracking-wider text-center w-[20%] bg-blue-50/50">Professional</th>
                    <th className="p-5 font-semibold text-slate-500 text-xs uppercase tracking-wider text-center w-[20%]">Enterprise</th>
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
                          <td className="px-5 py-3.5 text-sm font-medium text-[#0B1220]">{item.name}</td>
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

      {/* SECTION 4: FAQs */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-3">
              Pricing Questions
            </h2>
            <p className="text-slate-600">Straight answers to the questions your diligence team will ask.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-[#0B1220] text-sm mb-2 leading-snug">{faq.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CLOSING BANNER */}
      <section className="py-24 px-6 bg-[#0B1220] text-center border-t border-slate-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            Ready to standardize how your organization wins complex deals?
          </h2>
          <p className="text-lg text-slate-400 mb-10">
            Start a free trial today or schedule a tailored walkthrough with our enterprise solutions team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/request-demo" className="bg-[#0EA5E9] text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-sky-400 transition-colors shadow-lg shadow-[#0EA5E9]/20">
              Book an Enterprise Demo
            </Link>
            <Link href="/request-demo" className="bg-transparent border border-slate-600 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-slate-800 transition-colors">
              Start Free Trial →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}