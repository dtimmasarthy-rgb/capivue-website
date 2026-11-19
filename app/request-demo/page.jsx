"use client";
import { useState } from "react";
import Link from "next/link";

export default function RequestDemo() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "Bid Director / Capture Manager",
    focus: [],
    message: ""
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocusToggle = (area) => {
    setFormData((prev) => {
      const currentFocus = prev.focus;
      if (currentFocus.includes(area)) {
        return { ...prev, focus: currentFocus.filter((item) => item !== area) };
      } else {
        return { ...prev, focus: [...currentFocus, area] };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send `formData` to your backend/API
    console.log("Demo Request Submitted:", formData);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">

      {/* LEFT COLUMN: EXECUTIVE WALKTHROUGH PANEL (DARK OBSIDIAN) */}
      <div className="lg:w-[55%] bg-[#090D16] p-8 md:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden">
        {/* Subtle background grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        ></div>

        <div className="relative z-10 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[#0EA5E9] text-[10px] font-bold uppercase tracking-widest mb-8">
            Enterprise Demo & Pilot Scoping
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            See Capivue audit, price, and draft a complex requirement document live.
          </h1>
          
          <p className="text-lg text-slate-400 leading-relaxed mb-12">
            Schedule a tailored 30-minute walkthrough with our solutions engineering team. Bring a real or sample RFP, Statement of Work (SOW), or technical specification—and watch Capivue extract obligations, flag compliance traps, and model delivery margins in real time.
          </p>

          <div className="mb-12">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">
              What We Cover in Your 30-Minute Session
            </h3>
            <div className="space-y-6">
              {[
                {
                  time: "Minutes 0–10",
                  title: "Forensic Requirement & Risk X-Ray",
                  desc: "Watch Capivue ingest multi-hundred-page PDFs, scanned annexures (OCR), and multi-sheet Excel schedules to compute a 0–100 Bid Strength Score and generate a Deduplicated Assumptions Register."
                },
                {
                  time: "Minutes 10–20",
                  title: "Deal Room Margin & Sprint Capacity",
                  desc: "Inspect bottom-up max(FTE) staffing across Discovery through Hypercare, onshore/offshore blended rate cards, 15% QA + 10% PM overheads, and deterministic Agile sprint capacity."
                },
                {
                  time: "Minutes 20–30",
                  title: "Grounded Proposal & MS Stack Sync",
                  desc: "See how locked Win Strategy Blueprints, Knowledge Repository RAG ([requires validation] guardrails), Microsoft Teams Adaptive Cards, and one-click Submission Packs work together."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="shrink-0 pt-1">
                    <div className="w-6 h-6 rounded-full bg-[#1E40AF]/20 border border-[#1E40AF]/40 text-[#0EA5E9] flex items-center justify-center text-xs font-bold">
                      0{idx + 1}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-[#0EA5E9] uppercase tracking-wider mb-1">{item.time}</div>
                    <h4 className="text-base font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Trust Strip */}
        <div className="relative z-10 bg-[#0F1423] border border-slate-800 rounded-xl p-5 mt-8">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              <span className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-white">Zero-Retention Demo Environment:</strong> Any sample requirement document shared for your walkthrough is processed under strict Zero Data Retention on Azure Central India (Pune) and purged immediately after your session.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              <span className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-white">50-Credit Guided Pilot:</strong> Qualified teams can unlock a 50-Call Free Trial (no credit card required) immediately following the walkthrough.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* RIGHT COLUMN: STRUCTURED DEMO REQUEST FORM (PURE WHITE) */}
      <div className="lg:w-[45%] bg-white p-8 md:p-12 lg:p-16 flex flex-col justify-center">
        
        {!isSubmitted ? (
          <div className="max-w-md w-full mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#0B1220] mb-2">Schedule your tailored walkthrough</h2>
              <p className="text-sm text-slate-500">Tell us a bit about your team so we can pair you with the right Solutions Architect.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#1E40AF] transition-colors"
                    placeholder="Rajesh Sharma"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Work Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#1E40AF] transition-colors"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Company Name</label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#1E40AF] transition-colors"
                  placeholder="Apex Enterprise Systems"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Your Role</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-[#0B1220] focus:outline-none focus:border-[#1E40AF] transition-colors appearance-none bg-white"
                >
                  <option value="Bid Director / Capture Manager">Bid Director / Capture Manager</option>
                  <option value="CFO / Deal Desk / Commercial Lead">CFO / Deal Desk / Commercial Lead</option>
                  <option value="VP of Delivery / Practice Head">VP of Delivery / Practice Head</option>
                  <option value="Enterprise / Solution Architect">Enterprise / Solution Architect</option>
                  <option value="CISO / Information Security / Legal">CISO / Information Security / Legal</option>
                  <option value="Executive Leadership">Executive Leadership (CEO / COO / Managing Partner)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Primary Focus Area (Select all that apply)</label>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Requirement Auditing & Compliance (Risk X-Ray)",
                    "Commercial Margin & FTE Modeling (Deal Room)",
                    "Agile Sprint & Capacity Planning",
                    "Grounded Proposal & Deck Generation",
                    "Microsoft Teams / SharePoint / Salesforce Integration"
                  ].map((area) => {
                    const isSelected = formData.focus.includes(area);
                    return (
                      <button
                        type="button"
                        key={area}
                        onClick={() => handleFocusToggle(area)}
                        className={`px-3 py-1.5 rounded-full text-[11px] font-semibold transition-colors border ${
                          isSelected 
                            ? "bg-[#1E40AF] text-white border-[#1E40AF]" 
                            : "bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        {area}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">What are you looking to solve? (Optional)</label>
                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#1E40AF] transition-colors resize-none"
                  placeholder="e.g., We respond to 15+ turnkey IT RFPs per quarter and need faster effort estimation..."
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#1E40AF] text-white px-6 py-3.5 rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-[#1E40AF]/20"
                >
                  Request Enterprise Demo →
                </button>
                <p className="text-center text-[11px] text-slate-500 mt-4 flex items-center justify-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  Response within 4 business hours • Protected by TLS 1.3 & NDA upon request
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="max-w-md w-full mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h2 className="text-2xl font-bold text-[#0B1220] mb-4">
              Your demo request has been routed to our Solutions Engineering team.
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-8">
              Thank you—we have received your details and will reach out within one business day with calendar options tailored to your role and industry.
            </p>
            
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-5 text-left mb-8">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Immediate Next Actions</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/platform" className="text-sm font-semibold text-[#1E40AF] hover:underline flex items-center gap-2">
                    Explore the Interactive Platform Lifecycle →
                  </Link>
                </li>
                <li>
                  <Link href="/security" className="text-sm font-semibold text-[#1E40AF] hover:underline flex items-center gap-2">
                    Review Our Security & Trust Architecture →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Bottom Strip: Self-Serve Alternative */}
        <div className="mt-12 pt-6 border-t border-slate-200 text-center">
          <p className="text-sm text-slate-500">
            Prefer to test the platform independently first?{" "}
            <Link href="/pricing" className="text-[#1E40AF] font-semibold hover:underline">
              Launch a self-serve Free Trial
            </Link>{" "}
            (50 AI Processing Calls · No credit card required).
          </p>
        </div>

      </div>
    </div>
  );
}