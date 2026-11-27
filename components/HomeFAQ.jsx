"use client";
import { useState } from "react";
import Link from "next/link";

export default function HomeFAQ() {
  const [open, setOpen] = useState(null);
  const faqs = [
    { q: "Does our confidential RFP data train any public AI models?", a: "No. Managed AI inference executes via Microsoft Azure AI Service with contractual Zero Data Retention. Your documents are never stored by model providers, logged, or used to train foundation models." },
    { q: "Where is our data hosted?", a: "All data is encrypted at rest and in transit within Microsoft Azure Central India, with strict tenant isolation via PostgreSQL Row-Level Security (RLS)." },
    { q: "Can users download or alter audit logs?", a: "No. To guarantee tamper-proof compliance and prevent unauthorized data exfiltration, all AI extractions and edits are permanently logged and verified audit reports are issued exclusively by Capivue Superadmins upon authorized request." },
    { q: "How fast can we test Capivue on a real RFP?", a: "You can join our Founding Customer Pilot and run your first live RFP walkthrough with our engineering team in under 24 hours." },
    { q: "What file formats does Capivue support?", a: "Upload multi-hundred-page PDFs, Word documents (.docx), and Excel pricing/compliance sheets directly into the Deal Room." },
  ];

  return (
    <section className="py-20 px-6 bg-white border-t border-slate-200">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">Enterprise Buyer FAQ</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">
            The questions your CISO and procurement team will ask.
          </h2>
        </div>
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((item, idx) => (
            <div key={idx}>
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left hover:text-[#1E40AF] transition-colors"
                aria-expanded={open === idx}
              >
                <span className="font-semibold text-[#0B1220] text-base leading-snug">{item.q}</span>
                <span className={`shrink-0 w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center transition-transform ${open === idx ? "rotate-45 border-[#1E40AF]" : ""}`}>
                  <svg className={`w-3.5 h-3.5 ${open === idx ? "text-[#1E40AF]" : "text-slate-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              {open === idx && (
                <div className="pb-5 pr-10 text-slate-600 text-[15px] leading-relaxed">{item.a}</div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/faq" className="text-sm font-semibold text-[#1E40AF] hover:underline">
            View all frequently asked questions →
          </Link>
        </div>
      </div>
    </section>
  );
}