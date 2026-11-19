"use client";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    topic: "Enterprise Platform Demo & Pilot Scoping",
    name: "",
    email: "",
    company: "",
    role: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to API)
    console.log("Form submitted:", formData);
    alert("Inquiry submitted successfully! Our team will respond within one business day.");
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-800 font-sans selection:bg-[#1E40AF] selection:text-white">

      {/* SECTION 1: DARK OBSIDIAN HEADER STRIP */}
      <section className="bg-[#090D16] pt-24 pb-20 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[#0EA5E9] text-xs font-bold uppercase tracking-wider mb-6">
            Contact & Enterprise Engagement
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1] max-w-4xl lg:mx-0 mx-auto">
            Connect with our solutions, security, and alliances teams.
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl lg:mx-0 mx-auto">
            Whether you are scoping an enterprise deployment, requesting a CISO security package, or exploring a strategic partnership, our specialists respond within one business day.
          </p>
        </div>
      </section>

      {/* SECTION 2: TWO-COLUMN WORKSPACE */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">

          {/* LEFT COLUMN: STRUCTURED INQUIRY FORM */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-10">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#0B1220] mb-2">Send a direct message</h2>
                <p className="text-sm text-slate-500">Select a topic below so we can route your inquiry to the right specialist immediately.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Topic Selector */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">How can we route your inquiry?</label>
                  <select
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-[#0B1220] focus:outline-none focus:border-[#1E40AF] focus:ring-1 focus:ring-[#1E40AF] transition-all appearance-none bg-white"
                  >
                    <option value="Enterprise Platform Demo & Pilot Scoping">Enterprise Platform Demo & Pilot Scoping</option>
                    <option value="Security, CISO Diligence & DPA Request">Security, CISO Diligence & DPA Request</option>
                    <option value="Commercial & Enterprise Pricing (BYOK / White-Label)">Commercial & Enterprise Pricing (BYOK / White-Label)</option>
                    <option value="Partner & Advisory Ecosystem">Partner & Advisory Ecosystem</option>
                    <option value="General & Press Inquiries">General & Press Inquiries</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#1E40AF] transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Work Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#1E40AF] transition-colors"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Company / Organization Name</label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#1E40AF] transition-colors"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Role / Title (optional)</label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#1E40AF] transition-colors"
                      placeholder="e.g., VP of Delivery, Bid Director, CISO"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#1E40AF] transition-colors resize-none"
                    placeholder="Tell us about your team size, primary requirement document types, or compliance needs..."
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#1E40AF] text-white px-6 py-3.5 rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-[#1E40AF]/20"
                  >
                    Submit Inquiry
                  </button>
                  <p className="text-center text-[11px] text-slate-500 mt-4 flex items-center justify-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                    Protected by TLS 1.3 encryption. We never share your contact details or send unsolicited marketing.
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* RIGHT COLUMN: DEDICATED CHANNELS & CORPORATE PROFILE */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Routing Cards */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-[#F8FAFC] px-6 py-4 border-b border-slate-200">
                <h3 className="text-sm font-bold text-[#0B1220] uppercase tracking-wider">Dedicated Enterprise Channels</h3>
              </div>
              <div className="divide-y divide-slate-100">
                
                {/* Sales */}
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-[#1E40AF] flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0B1220] mb-1">Enterprise Sales & Live Walkthroughs</h4>
                      <p className="text-sm text-slate-600 mb-3 leading-relaxed">Guided platform demos, 50-credit pilot provisioning, and multi-workspace Enterprise pricing.</p>
                      <a href="mailto:contact@capivuetech.com" className="text-sm font-semibold text-[#1E40AF] hover:underline block mb-1">contact@capivuetech.com</a>
                      <Link href="/request-demo" className="text-xs font-semibold text-slate-500 hover:text-[#0B1220]">Book a 30-Minute Demo →</Link>
                    </div>
                  </div>
                </div>

                {/* Security */}
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0B1220] mb-1">Security, Privacy & CISO Diligence</h4>
                      <p className="text-sm text-slate-600 mb-3 leading-relaxed">Data Processing Agreements (DPA), completed SIG Lite / CAIQ questionnaires, and architecture reviews.</p>
                      <a href="mailto:contact@capivuetech.com" className="text-sm font-semibold text-[#1E40AF] hover:underline block mb-1">contact@capivuetech.com</a>
                      <Link href="/security" className="text-xs font-semibold text-slate-500 hover:text-[#0B1220]">Visit Security & Trust Center →</Link>
                    </div>
                  </div>
                </div>

                {/* Partners */}
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0B1220] mb-1">Partner & Advisory Alliances</h4>
                      <p className="text-sm text-slate-600 mb-3 leading-relaxed">Bid consultancies, system integrators, and fractional capture leaders.</p>
                      <a href="mailto:contact@capivuetech.com" className="text-sm font-semibold text-[#1E40AF] hover:underline block mb-1">contact@capivuetech.com</a>
                      <Link href="/partners" className="text-xs font-semibold text-slate-500 hover:text-[#0B1220]">Explore Partner Program →</Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Corporate & Cloud Operations */}
            <div className="bg-[#0F1423] rounded-2xl border border-slate-700 p-6">
              <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Corporate & Cloud Operations</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Legal Entity</div>
                  <div className="text-sm font-semibold text-slate-200">Capivue Solutions Pvt Ltd</div>
                  <div className="text-xs text-slate-400">Registered in India</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Engineering & Operations Hub</div>
                  <div className="text-sm font-semibold text-slate-200">Hyderabad, Telangana, India</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Primary Cloud Infrastructure</div>
                  <div className="text-sm font-semibold text-slate-200">Microsoft Azure Central India</div>
                  <div className="text-xs text-slate-400">Pune · DPDP Act Localized</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: PRE-CALL QUICK LINKS STRIP */}
      <section className="py-12 px-6 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Prefer to self-serve?</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/pricing" className="group bg-[#F8FAFC] p-5 rounded-xl border border-slate-200 hover:border-[#1E40AF] hover:shadow-md transition-all flex items-center justify-between">
              <div>
                <div className="font-bold text-[#0B1220] group-hover:text-[#1E40AF] transition-colors">Compare Plans & Quotas</div>
                <div className="text-xs text-slate-500">View Starter, Professional, and Enterprise</div>
              </div>
              <svg className="w-5 h-5 text-slate-300 group-hover:text-[#1E40AF] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/security" className="group bg-[#F8FAFC] p-5 rounded-xl border border-slate-200 hover:border-[#1E40AF] hover:shadow-md transition-all flex items-center justify-between">
              <div>
                <div className="font-bold text-[#0B1220] group-hover:text-[#1E40AF] transition-colors">Inspect Technical Safeguards</div>
                <div className="text-xs text-slate-500">Review PostgreSQL RLS & Zero-Retention AI</div>
              </div>
              <svg className="w-5 h-5 text-slate-300 group-hover:text-[#1E40AF] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/platform" className="group bg-[#F8FAFC] p-5 rounded-xl border border-slate-200 hover:border-[#1E40AF] hover:shadow-md transition-all flex items-center justify-between">
              <div>
                <div className="font-bold text-[#0B1220] group-hover:text-[#1E40AF] transition-colors">Explore Platform Architecture</div>
                <div className="text-xs text-slate-500">Walk through the 5-Phase Intelligence Lifecycle</div>
              </div>
              <svg className="w-5 h-5 text-slate-300 group-hover:text-[#1E40AF] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}