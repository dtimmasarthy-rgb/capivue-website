"use client";
import { useState } from "react";
import Link from "next/link";

export default function Security() {
  const [activeTab, setActiveTab] = useState("active");

  const posture = [
    {
      label: "Cloud & Data Residency",
      value: "Microsoft Azure Central India (Pune)",
      detail: "Sovereign Indian data localization.",
      status: "emerald"
    },
    {
      label: "Database Isolation",
      value: "PostgreSQL Row-Level Security (RLS)",
      detail: "Enforced at the query engine layer.",
      status: "emerald"
    },
    {
      label: "AI Inference Boundary",
      value: "Azure AI Service · Zero Data Retention",
      detail: "BYOK Private Tenant support available.",
      status: "emerald"
    },
    {
      label: "Identity & Access",
      value: "Microsoft Entra ID SSO + RBAC",
      detail: "Fernet credential encryption at rest.",
      status: "emerald"
    }
  ];

  const safeguards = [
    {
      num: "01",
      title: "Database-Level Tenant Isolation (PostgreSQL RLS)",
      copy: "Customer data is logically isolated directly at the PostgreSQL database engine layer using Row-Level Security (RLS). Every query executes within an authenticated workspace context—preventing cross-tenant data access even in the event of an application-layer bug.",
      badge: "RLS Enforced",
      badgeColor: "emerald"
    },
    {
      num: "02",
      title: "Sovereign Cloud Architecture (Microsoft Azure)",
      copy: "Capivue runs on a decoupled enterprise stack: a Next.js frontend hosted on Azure Static Web Apps communicating over encrypted API boundaries with a FastAPI backend on Azure Container Apps in Azure Central India (Pune).",
      badge: "Azure Central India",
      badgeColor: "emerald"
    },
    {
      num: "03",
      title: "Azure AI Inference & Zero Data Retention (BYOK Ready)",
      copy: "Requirement documents and repository files are processed via Microsoft Azure AI with Zero Data Retention—your content is never stored, logged, or used to train foundation models. Enterprise tier customers can also connect their own private Azure OpenAI or Google Vertex AI endpoint via Bring Your Own Key (BYOK).",
      badge: "Zero Retention",
      badgeColor: "emerald"
    },
    {
      num: "04",
      title: "Enterprise Identity & Access Control (Microsoft Entra ID SSO)",
      copy: "Supports native Microsoft Entra ID (Azure AD) Single Sign-On alongside cryptographically hashed credentials, signed JWT session tokens, and granular workspace Role-Based Access Control (Admin, Contributor, Reviewer).",
      badge: "Entra ID SSO",
      badgeColor: "emerald"
    },
    {
      num: "05",
      title: "End-to-End Encryption (TLS 1.3 & AES-256)",
      copy: "All network traffic is encrypted in transit using TLS 1.2 / 1.3. All databases, uploaded requirement documents, and exports are encrypted at rest using AES-256, while third-party OAuth tokens and API keys are protected with Fernet symmetric encryption.",
      badge: "AES-256 · TLS 1.3",
      badgeColor: "emerald"
    },
    {
      num: "06",
      title: "Deterministic Prompt-Injection & Hallucination Guardrails",
      copy: "Uploaded documents are sanitized against prompt-injection attacks prior to processing, and strict negative constraints prevent AI models from fabricating unverified certifications or case studies ([requires validation]).",
      badge: "Guardrails Active",
      badgeColor: "amber"
    }
  ];

  const subprocessors = [
    {
      name: "Microsoft Azure",
      purpose: "Primary cloud infrastructure (Container Apps, PostgreSQL, Blob Storage)",
      location: "Central India (Pune) — US/EU on request",
      retention: "Retained for active subscription; purged within 30 days of termination."
    },
    {
      name: "Microsoft Azure AI",
      purpose: "Enterprise LLM inference for requirement analysis & section drafting",
      location: "Azure Enterprise Tenant (or Customer BYOK)",
      retention: "Zero Data Retention — never logged or used for model training."
    },
    {
      name: "Resend",
      purpose: "Transactional system notifications & workspace invites",
      location: "United States",
      retention: "Metadata-only delivery logs; zero RFP document content transmitted."
    }
  ];

  const activeToday = [
    {
      title: "CSA STAR Level 1 (CAIQ)",
      copy: "Self-assessed cloud security controls mapped across 197+ enterprise governance criteria."
    },
    {
      title: "Azure Infrastructure Inheritance",
      copy: "Hosted on Microsoft Azure (SOC 2 Type II, ISO 27001, HIPAA, and GDPR compliant infrastructure)."
    },
    {
      title: "Data Processing Agreement (DPA)",
      copy: "Standard enterprise DPA with explicit zero-training and 30-day deletion commitments available on request."
    },
    {
      title: "Application Rate Limiting & Audit Logging",
      copy: "Active API rate limiting and workspace-level audit trails across user actions."
    }
  ];

  const roadmap = [
    {
      title: "SOC 2 Type I & Type II Audit",
      copy: "Readiness program underway with external CPA audit targeted for Q2–Q3 2027."
    },
    {
      title: "ISO 27001 Certification",
      copy: "Scheduled immediately following SOC 2 attestation to support regulated European and APAC enterprise deployments."
    },
    {
      title: "Okta & Google Workspace SSO (SAML 2.0)",
      copy: "Available on the Enterprise roadmap alongside native Microsoft Entra ID SSO."
    }
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-800 font-sans selection:bg-[#1E40AF] selection:text-white">

      {/* SECTION 1: DARK OBSIDIAN FORTRESS HERO + LIVE POSTURE STRIP */}
      <section className="bg-[#090D16] pt-24 pb-20 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[#0EA5E9] text-xs font-bold uppercase tracking-wider mb-6">
              Security, Privacy & Compliance Architecture
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              Engineered to pass your CISO's strictest diligence review.
            </h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl">
              Your requirement documents, commercial rate cards, and intellectual property represent your sharpest competitive edge. Capivue enforces database-level tenant isolation, sovereign Azure Central India hosting, and zero-retention Azure AI inference—paired with radical transparency into our active compliance roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/request-demo" className="bg-[#1E40AF] text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-[#1E40AF]/30 text-center">
                Request Security & DPA Package
              </Link>
              <a href="mailto:security@capivuetech.com" className="bg-transparent border border-slate-600 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-slate-800 transition-all text-center">
                Contact Security Team →
              </a>
            </div>
            <div className="text-xs font-mono text-slate-500 tracking-wide uppercase">
              Azure Central India • PostgreSQL RLS • Azure AI Zero-Retention • CSA STAR Level 1
            </div>
          </div>

          {/* Right Visual: Live Security Posture Card */}
          <div className="bg-[#0F1423] rounded-2xl border border-slate-700 shadow-2xl overflow-hidden relative">
            <div className="bg-slate-800/50 px-4 py-3 border-b border-slate-700 flex justify-between items-center">
              <div className="text-xs font-mono text-slate-300">Capivue Security Posture · Live Architecture</div>
              <div className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-emerald-900/40 text-emerald-400 border border-emerald-500/30">
                All Systems Verified
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-3">
              {posture.map((p, idx) => (
                <div key={idx} className="bg-[#1A2235] border border-slate-700 rounded-lg p-4 flex gap-3 items-start">
                  <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${p.status === "emerald" ? "bg-emerald-500" : "bg-amber-500"}`}></div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">{p.label}</div>
                    <p className="text-sm text-slate-200 font-medium leading-snug">{p.value}</p>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{p.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: SIX CORE TECHNICAL SAFEGUARDS */}
      <section className="py-20 px-6 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">Cryptographic & Infrastructure Safeguards</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">
              Defense-in-depth across application, database, and AI inference layers.
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Every layer of the Capivue stack is engineered for tenant isolation, encryption, and deterministic guardrails—from the PostgreSQL query engine to the Azure AI inference boundary.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safeguards.map((s) => (
              <div key={s.num} className="bg-[#F8FAFC] p-7 rounded-2xl border border-slate-200 flex flex-col">
                <div className="text-2xl font-mono font-bold text-slate-300 mb-3">{s.num}</div>
                <h3 className="text-base font-bold text-[#0B1220] mb-3 leading-snug">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">{s.copy}</p>
                <div className={`mt-4 inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wide ${
                  s.badgeColor === "emerald"
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : "bg-amber-50 text-amber-700 border border-amber-200"
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${s.badgeColor === "emerald" ? "bg-emerald-500" : "bg-amber-500"}`}></span>
                  {s.badge}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: SUBPROCESSOR & DATA RESIDENCY LEDGER */}
      <section className="py-20 px-6 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-3">Subprocessors & Data Localization</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">
              Complete visibility into where your data resides and how it is processed.
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Primary application compute, PostgreSQL databases, and file storage reside in Microsoft Azure Central India (Pune) to support India's DPDP Act localization standards. Dedicated US East or West Europe deployments are available for multinational Enterprise tenants.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            {/* Table Header */}
            <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-slate-50 border-b border-slate-200 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              <div className="col-span-3">Subprocessor</div>
              <div className="col-span-4">Purpose & Scope</div>
              <div className="col-span-2">Hosting Location</div>
              <div className="col-span-3">Data Retention Policy</div>
            </div>

            {/* Table Rows */}
            {subprocessors.map((sp, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-5 border-b border-slate-100 last:border-b-0 hover:bg-slate-50 transition-colors">
                <div className="md:col-span-3">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 md:hidden">Subprocessor</div>
                  <div className="font-bold text-[#0B1220] text-sm">{sp.name}</div>
                </div>
                <div className="md:col-span-4">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 md:hidden">Purpose</div>
                  <div className="text-sm text-slate-600 leading-relaxed">{sp.purpose}</div>
                </div>
                <div className="md:col-span-2">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 md:hidden">Location</div>
                  <div className="text-sm text-slate-600 leading-relaxed">{sp.location}</div>
                </div>
                <div className="md:col-span-3">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 md:hidden">Retention</div>
                  <div className="text-sm text-slate-600 leading-relaxed">{sp.retention}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: RADICAL TRANSPARENCY — ACTIVE VS ROADMAP */}
      <section className="py-20 px-6 bg-[#090D16] border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">Compliance Transparency</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              We would rather tell you our exact compliance status today than surprise you in procurement.
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Active certifications, inherited controls, and audit milestones—stated plainly so your diligence team can plan accordingly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Column 1 — Active Today */}
            <div className="bg-[#0F1423] border border-emerald-700/40 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Active Today</div>
              </div>
              <div className="space-y-5">
                {activeToday.map((item, idx) => (
                  <div key={idx} className="border-l-2 border-emerald-600/40 pl-4">
                    <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 — Roadmap */}
            <div className="bg-[#0F1423] border border-amber-700/40 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <div className="text-xs font-bold text-amber-400 uppercase tracking-widest">Active Compliance Roadmap</div>
              </div>
              <div className="space-y-5">
                {roadmap.map((item, idx) => (
                  <div key={idx} className="border-l-2 border-amber-600/40 pl-4">
                    <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.copy}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-slate-700/50">
                <p className="text-[11px] text-slate-500 leading-relaxed italic">
                  Roadmap dates are illustrative targets and may shift based on external auditor availability. Current status is confirmed in writing during vendor diligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: SECURITY CONTACT & DILIGENCE CONVERSION BANNER */}
      <section className="py-24 px-6 bg-[#0B1220] text-center border-t border-slate-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            Need a completed security questionnaire (SIG Lite / CAIQ) or our DPA?
          </h2>
          <p className="text-lg text-slate-400 mb-10">
            Our security and engineering leadership works directly with enterprise CISO and procurement teams during vendor diligence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/request-demo" className="bg-[#0EA5E9] text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-sky-400 transition-colors shadow-lg shadow-[#0EA5E9]/20">
              Request Security Diligence Pack
            </Link>
            <a href="mailto:security@capivuetech.com" className="bg-transparent border border-slate-600 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-slate-800 transition-colors">
              Email security@capivuetech.com →
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}