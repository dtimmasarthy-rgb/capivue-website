"use client";
import { useState } from "react";
import Link from "next/link";

export default function Careers() {
  const [activeFilter, setActiveFilter] = useState("All Roles");
  const [selectedRole, setSelectedRole] = useState(null);

  // Role Data
  const roles = [
    {
      id: 1,
      title: "Senior Full-Stack Engineer",
      department: "Engineering & Product",
      location: "Remote (India) / Hyderabad",
      scope: "Own end-to-end features across our Next.js frontend and FastAPI backend, integrating Azure AI and PostgreSQL RLS."
    },
    {
      id: 2,
      title: "Applied AI / RAG Engineer",
      department: "Engineering & Product",
      location: "Remote (India) / Hyderabad",
      scope: "Design deterministic retrieval pipelines, prompt guardrails, and multi-format OCR parsing for 300-page requirement documents."
    },
    {
      id: 3,
      title: "Product Designer",
      department: "Engineering & Product",
      location: "Remote (India)",
      scope: "Craft intuitive interfaces for complex enterprise workflows like Deal Rooms, Risk X-Rays, and multi-tab Excel exports."
    },
    {
      id: 4,
      title: "Enterprise Account Executive",
      department: "Go-To-Market",
      location: "Mumbai / Delhi NCR",
      scope: "Drive new logo acquisition across BFSI and IT Services, selling to Bid Directors, CFOs, and Deal Desk leaders."
    },
    {
      id: 5,
      title: "Pre-Sales Solutions Architect",
      department: "Go-To-Market",
      location: "Remote (India)",
      scope: "Partner with AEs to run technical deep-dives, CISO security reviews, and custom architectural demos for enterprise prospects."
    },
    {
      id: 6,
      title: "Customer Success Manager",
      department: "Customer Operations",
      location: "Hyderabad",
      scope: "Onboard new enterprise workspaces, drive product adoption among bid teams, and ensure high retention through proactive support."
    }
  ];

  const filters = [
    "All Roles (6)",
    "Engineering & Product (3)",
    "Go-To-Market (2)",
    "Customer Operations (1)"
  ];

  // Filter Logic
  const filteredRoles = roles.filter((role) => {
    if (activeFilter === "All Roles (6)") return true;
    if (activeFilter.includes("Engineering") && role.department === "Engineering & Product") return true;
    if (activeFilter.includes("Go-To-Market") && role.department === "Go-To-Market") return true;
    if (activeFilter.includes("Customer") && role.department === "Customer Operations") return true;
    return false;
  });

  // Handle Apply Click
  const handleApplyClick = (role) => {
    setSelectedRole(role);
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-800 font-sans selection:bg-[#1E40AF] selection:text-white">

      {/* SECTION 1: DARK OBSIDIAN HERO + TELEMETRY */}
      <section className="bg-[#090D16] pt-24 pb-20 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[#0EA5E9] text-xs font-bold uppercase tracking-wider mb-6">
              Careers at Capivue
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              Build the intelligence layer for enterprise deals.
            </h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl">
              We are an engineering-driven, remote-first organization solving one of the most expensive, complex problems in B2B revenue and delivery: transforming 300-page requirement documents, SOWs, and tenders into audited pricing, sprint plans, and verified proposals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#open-roles" className="bg-[#1E40AF] text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-[#1E40AF]/30 text-center">
                View Open Roles
              </a>
            </div>
            <div className="text-xs font-mono text-slate-500 tracking-wide uppercase">
              Remote-First (India) • Hyderabad Hub • FastAPI / Next.js / Azure AI
            </div>
          </div>

          {/* Right Visual: Engineering Telemetry */}
          <div className="bg-[#0F1423] rounded-2xl border border-slate-700 shadow-2xl overflow-hidden relative">
            <div className="bg-slate-800/50 px-4 py-3 border-b border-slate-700 flex justify-between items-center">
              <div className="text-xs font-mono text-slate-300">Why Builders Join Capivue</div>
              <div className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-emerald-900/40 text-emerald-400 border border-emerald-500/30">
                Hard Engineering
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-3">
              {[
                { label: "Complex Data Ingestion", detail: "Multi-format OCR, Excel parsing, and unstructured document extraction." },
                { label: "Enterprise Security", detail: "PostgreSQL Row-Level Security (RLS) and Fernet encryption at rest." },
                { label: "Deterministic Math", detail: "Building algorithms for capacity-planned Agile sprints and financial rollups." },
                { label: "Applied AI", detail: "Zero-Retention Azure AI inference and strict hallucination guardrails." }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#1A2235] border border-slate-700 rounded-lg p-4 flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-[#0EA5E9]"></div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">{item.label}</div>
                    <p className="text-sm text-slate-300 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: ENGINEERING & OPERATING PRINCIPLES */}
      <section className="py-20 px-6 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-bold text-[#1E40AF] uppercase tracking-wider mb-3">How We Work</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220]">
              Engineering principles behind our culture.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Remote-First with Hyderabad Hub",
                copy: "Remote flexibility across India with a central engineering and operations hub in Hyderabad for deep work and team syncs."
              },
              {
                title: "Security & Sovereignty by Default",
                copy: "Every feature ships with PostgreSQL RLS, Fernet credential encryption, and zero-retention AI boundaries. Security is not a bolt-on."
              },
              {
                title: "Practitioner-Led Product Craft",
                copy: "Built alongside real Bid Directors, CFOs, CISOs, and Delivery Heads—never in an ivory tower."
              },
              {
                title: "Deterministic Precision Over AI Hype",
                copy: "We pair applied LLMs with hard engineering math and explicit [requires validation] guardrails to ensure absolute accuracy."
              }
            ].map((principle, i) => (
              <div key={i} className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200">
                <h3 className="text-lg font-bold text-[#0B1220] mb-3">{principle.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{principle.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: FILTERABLE OPEN ROLES BOARD */}
      <section id="open-roles" className="py-20 px-6 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220]">
              Open Roles
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
                  activeFilter === filter
                    ? "bg-[#0B1220] text-white border-[#0B1220]"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-[#0B1220]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Role List */}
          <div className="space-y-4">
            {filteredRoles.map((role) => (
              <div key={role.id} className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-[#0B1220]">{role.title}</h3>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-blue-50 text-[#1E40AF] border border-blue-100">
                      {role.department}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm mb-3">{role.scope}</p>
                  <div className="text-xs font-medium text-slate-400 flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      {role.location}
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => handleApplyClick(role)}
                  className="shrink-0 bg-white text-[#1E40AF] border border-slate-200 px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-50 hover:border-slate-300 transition-colors w-full md:w-auto"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION MODAL */}
      {selectedRole && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-slate-100">
              <div>
                <div className="text-xs font-bold text-[#1E40AF] uppercase tracking-wider mb-1">Application</div>
                <h3 className="text-xl font-bold text-[#0B1220]">{selectedRole.title}</h3>
              </div>
              <button 
                onClick={() => setSelectedRole(null)}
                className="text-slate-400 hover:text-slate-600 transition-colors p-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            {/* Modal Body (Form) */}
            <form 
              className="p-6 space-y-4" 
              onSubmit={(e) => {
                e.preventDefault();
                alert("Application submitted successfully!");
                setSelectedRole(null);
              }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                  <input required type="text" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#1E40AF] transition-colors" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email</label>
                  <input required type="email" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#1E40AF] transition-colors" placeholder="jane@example.com" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">LinkedIn / GitHub URL</label>
                <input required type="url" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#1E40AF] transition-colors" placeholder="https://linkedin.com/in/janedoe" />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Resume Upload (.pdf)</label>
                <input required type="file" accept=".pdf" className="w-full px-4 py-2 rounded-lg border border-slate-200 text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-[#1E40AF] hover:file:bg-blue-100 transition-colors" />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">What have you built recently?</label>
                <textarea required rows="3" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#1E40AF] transition-colors resize-none" placeholder="Briefly describe a project or problem you are proud of..."></textarea>
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full bg-[#1E40AF] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-[#1E40AF]/20">
                  Submit Application
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}