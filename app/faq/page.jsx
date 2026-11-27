"use client";
import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const faqs = [
    { q: "What exactly does Capivue do?", a: "Capivue is an AI-powered bid intelligence platform. We help enterprise bid teams extract RFP requirements, decide whether to bid, generate a strategic blueprint, draft evidence-backed responses, and plan delivery—all in one platform." },
    { q: "How is this different from other RFP automation tools?", a: "Most tools focus only on faster drafting. Capivue focuses on the intelligence before and after the document. We generate a Bid Strength Score to help you decide if a deal is worth pursuing, and we provide evidence traceability so every claim is linked to a source document." },
    { q: "Do you train AI models on my documents?", a: "No. Managed AI inference executes via Microsoft Azure AI Service with contractual Zero Data Retention. Your documents are never stored by model providers, logged, or used to train foundation models." },
    { q: "Where is my data stored?", a: "Your data is hosted on Microsoft Azure in the Central India region. We enforce tenant isolation via PostgreSQL Row-Level Security (RLS)." },
    { q: "Can users download or alter audit logs?", a: "No. To guarantee tamper-proof compliance and prevent unauthorized data exfiltration, all AI extractions and edits are permanently logged and verified audit reports are issued exclusively by Capivue Superadmins upon authorized request." },
    { q: "How fast can we test Capivue on a real RFP?", a: "You can join our Founding Customer Pilot and run your first live RFP walkthrough with our engineering team in under 24 hours." },
    { q: "What file formats does Capivue support?", a: "Upload multi-hundred-page PDFs, Word documents (.docx), and Excel pricing/compliance sheets directly into the Deal Room." },
    { q: "Is Capivue SOC 2 compliant?", a: "We are currently in SOC 2 Type I readiness and targeting our audit for Q2 2027. We can provide our CAIQ self-assessment and security policies upon request." },
    { q: "Can users download or alter audit logs?", a: "No. To guarantee tamper-proof compliance and prevent unauthorized data exfiltration, all AI extractions and edits are permanently logged and verified audit reports are issued exclusively by Capivue Superadmins upon authorized request." },
    { q: "How fast can we test Capivue on a real RFP?", a: "You can join our Founding Customer Pilot and run your first live RFP walkthrough with our engineering team in under 24 hours." },
    { q: "What file formats does Capivue support?", a: "Upload multi-hundred-page PDFs, Word documents (.docx), and Excel pricing/compliance sheets directly into the Deal Room." },
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B1220] mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-600">
            Common questions about the platform, security, and pricing.
          </p>
        </div>

        <div className="divide-y divide-slate-200 border-y border-slate-200 bg-white rounded-xl overflow-hidden">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:text-[#1E40AF] transition-colors"
                aria-expanded={open === i}
              >
                <span className="font-bold text-[#0B1220] text-base leading-snug">
                  {faq.q}
                </span>
                <span
                  className={`shrink-0 w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center transition-transform ${
                    open === i ? "rotate-45 border-[#1E40AF]" : ""
                  }`}
                >
                  <svg
                    className={`w-3.5 h-3.5 ${open === i ? "text-[#1E40AF]" : "text-slate-500"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 pr-14 text-slate-600 text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}