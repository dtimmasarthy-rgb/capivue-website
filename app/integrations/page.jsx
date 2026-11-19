"use client";
import { useState } from "react";
import Link from "next/link";

export default function Integrations() {
  const [activeTab, setActiveTab] = useState(1);

  const workflows = [
    {
      id: 1,
      tab: "Identity & Access",
      tool: "Microsoft Entra ID SSO",
      trigger: "User signs in via corporate directory.",
      mechanism: "Native MSAL authentication verifies tenant identity and maps workspace roles (Admin, Contributor, Reviewer) inside PostgreSQL Row-Level Security.",
      outcome: "Enforces corporate MFA policies with zero separate passwords to manage."
    },
    {
      id: 2,
      tab: "Knowledge & Requirement Sync",
      tool: "SharePoint & OneDrive",
      trigger: "Bid team imports requirement documents or refreshes capability decks.",
      mechanism: "Delegated Microsoft Graph OAuth2 (Files.Read.All, offline_access) pulls multi-sheet Excel workbooks, Word templates, and PDFs directly into Capivue's extraction and RAG pipeline.",
      outcome: "Always grounds proposals in the latest approved corporate credentials and case studies."
    },
    {
      id: 3,
      tab: "SME Sign-Off Loop",
      tool: "Microsoft Teams Bot Framework",
      trigger: "A requirement is assigned or flagged with [requires validation].",
      mechanism: "Capivue's Bot Framework service pushes an interactive Adaptive Card directly into the SME's personal Teams chat; submitted responses post back to the workspace in real time.",
      outcome: "Compresses technical validation from days of email chasing to minutes in chat."
    },
    {
      id: 4,
      tab: "Deal Desk & ERP Extensibility",
      tool: "Salesforce, Custom REST & Webhooks",
      trigger: "Go/No-Go assessment completes or Win Strategy Blueprint is approved.",
      mechanism: "Synchronizes pursuit status with Salesforce and fires signed JSON payloads to internal Deal Desk, ERP, or pricing systems via Custom REST APIs and Outbound Webhooks.",
      outcome: "Keeps executive revenue forecasts aligned with live commercial rollups."
    }
  ];

  const connectors = [
    {
      name: "Microsoft Entra ID (Azure AD)",
      status: "Live",
      category: "Identity & SSO",
      protocol: "OAuth 2.0 / OpenID Connect via MSAL",
      capability: "Enterprise Single Sign-On enforcing corporate Multi-Factor Authentication (MFA), conditional access policies, and role-based workspace governance."
    },
    {
      name: "Microsoft SharePoint",
      status: "Live",
      category: "Institutional Knowledge",
      protocol: "Microsoft Graph API with automated token refresh",
      capability: "Connects directly to central proposal libraries, compliance certificates, and architecture repositories to keep RAG grounding synchronized."
    },
    {
      name: "Microsoft OneDrive",
      status: "Live",
      category: "Document Intake",
      protocol: "Delegated OAuth 2.0 (PKCE + offline_access)",
      capability: "Pulls requirement documents, customer templates, and capability decks directly from user drives into active pursuit workspaces."
    },
    {
      name: "Microsoft Teams",
      status: "Live",
      category: "Proactive SME Bot",
      protocol: "Microsoft Bot Framework & Adaptive Cards v1.4",
      capability: "Delivers interactive requirement cards directly to Subject Matter Experts in Teams so they can submit technical inputs without switching tools."
    },
    {
      name: "Salesforce CRM",
      status: "Live",
      category: "Revenue Pipeline",
      protocol: "OAuth 2.0 with PKCE & automated token rotation",
      capability: "Links active pursuits to Salesforce opportunities—keeping commercial TCV bands, bid verdicts, and submission milestones visible to revenue leadership."
    },
    {
      name: "Custom REST API & Outbound Webhooks",
      status: "Live",
      category: "Extensibility",
      protocol: "Configurable HTTP/JSON providers with asynchronous Celery execution",
      capability: "Connects Capivue to proprietary Deal Desk tools, internal ERP systems, or custom approval workflows without custom backend forks."
    }
  ];

  const eventStreams = [
    {
      label: "Event Stream 01 · Inbound Knowledge",
      detail: "SharePoint / OneDrive → Ingests .pdf, .docx, .xlsx, and .pptx capability decks into RAG repository.",
      color: "sky"
    },
    {
      label: "Event Stream 02 · SME Orchestration",
      detail: "requirement.assigned → Dispatches interactive Bot Framework Adaptive Card to SME in Microsoft Teams.",
      color: "amber"
    },
    {
      label: "Event Stream 03 · CRM Lifecycle",
      detail: "blueprint.approved → Syncs Bid Strength Score, TCV bands, and submission readiness with Salesforce.",
      color: "emerald"
    },
    {
      label: "Event Stream 04 · Cryptographic Boundary",
      detail: "Fernet AES-128-CBC + HMAC → All OAuth access/refresh tokens encrypted at rest inside PostgreSQL RLS.",
      color: "sky"
    }
  ];

  const activeWorkflow = workflows.find((w) => w.id === activeTab) || workflows[0];

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-800 font-sans selection:bg-[#1E40AF] selection:text-white">

      {/* SECTION 1: DARK OBSIDIAN HERO + EVENT BUS TELEMETRY */}
      <section className="bg-[#090D16] pt-24 pb-20 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[#0EA5E9] text-xs font-bold uppercase tracking-wider mb-6">
              Enterprise Ecosystem & Integration Hub
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              Connected directly to your identity, knowledge, collaboration, and CRM stack.
            </h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl">
              Complex requirement pursuits stall when teams manually move files between SharePoint, chase Subject Matter Experts in chat, and re-key deal metrics into CRM. Capivue's event-driven Integration Hub synchronizes your Microsoft Enterprise ecosystem, Salesforce pipeline, and private AI endpoints under strict cryptographic governance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/request-demo" className="bg-[#1E40AF] text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-[#1E40AF]/30 text-center">
                Book a Technical Demo
              </Link>
              <Link href="/security" className="bg-transparent border border-slate-600 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-slate-800 transition-all text-center">
                Explore Security & Trust Center →
              </Link>
            </div>
            <div className="text-xs font-mono text-slate-500 tracking-wide uppercase">
              Native MSAL Single Sign-On • Fernet-Encrypted OAuth Tokens • Event-Driven Celery Workers
            </div>
          </div>

          {/* Right Visual: Integration Hub Telemetry */}
          <div className="bg-[#0F1423] rounded-2xl border border-slate-700 shadow-2xl overflow-hidden relative">
            <div className="bg-slate-800/50 px-4 py-3 border-b border-slate-700 flex justify-between items-center">
              <div className="text-xs font-mono text-slate-300">Capivue Integration Hub · Live Architecture</div>
              <div className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-emerald-900/40 text-emerald-400 border border-emerald-500/30">
                6 Connectors Active
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-3">
              {eventStreams.map((stream, idx) => (
                <div key={idx} className="bg-[#1A2235] border border-slate-700 rounded-lg p-4 flex gap-3 items-start">
                  <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                    stream.color === "emerald" ? "bg-emerald-500" :
                    stream.color === "amber" ? "bg-amber-500" : "bg-[#0EA5E9]"
                  }`}></div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">{stream.label}</div>
                    <p className="text-sm text-slate-300 leading-relaxed font-mono text-[13px]">{stream.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: INTERACTIVE EVENT-DRIVEN WORKFLOW EXPLORER */}
      <section className="py-20 px-6 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-bold text-[#1E40AF] uppercase tracking-wider mb-3">Event-Driven Orchestration</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">
              Zero manual copy-pasting from intake to executive sign-off.
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Select a lifecycle trigger to inspect how Capivue moves data securely across your enterprise stack.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-col sm:flex-row gap-2 mb-6 justify-center">
            {workflows.map((w) => (
              <button
                key={w.id}
                onClick={() => setActiveTab(w.id)}
                className={`px-5 py-3 rounded-xl border text-sm font-semibold transition-all duration-200 text-left sm:text-center ${
                  activeTab === w.id
                    ? "bg-[#1E40AF] border-[#1E40AF] text-white shadow-lg shadow-[#1E40AF]/30"
                    : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <span className="block text-[10px] font-mono opacity-70 mb-0.5">0{w.id}</span>
                {w.tab}
              </button>
            ))}
          </div>

          {/* 3-Column Breakdown */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-[#0F1423] px-6 py-4 border-b border-slate-800 flex justify-between items-center">
              <div className="text-xs font-mono text-slate-300">
                <span className="text-slate-500">Workflow ·</span> {activeWorkflow.tool}
              </div>
              <div className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-emerald-900/40 text-emerald-400 border border-emerald-500/30">
                Live in Production
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              <div className="p-6">
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">
                  Trigger
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">{activeWorkflow.trigger}</p>
              </div>
              <div className="p-6">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#1E40AF] mb-3">
                  Mechanism
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">{activeWorkflow.mechanism}</p>
              </div>
              <div className="p-6 bg-emerald-50/30">
                <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 mb-3">
                  Governance Outcome
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">{activeWorkflow.outcome}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: NATIVE ENTERPRISE CONNECTORS */}
      <section className="py-20 px-6 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-bold text-[#1E40AF] uppercase tracking-wider mb-3">Native Production Connectors</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">
              Pre-built connectors engineered for enterprise security and scale.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {connectors.map((c, i) => (
              <div key={i} className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 flex flex-col">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#1E40AF] mb-1">
                      {c.category}
                    </div>
                    <h3 className="text-base font-bold text-[#0B1220] leading-snug">
                      {c.name}
                    </h3>
                  </div>
                  <span className="shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                    {c.status}
                  </span>
                </div>

                <div className="mb-4 pb-4 border-b border-slate-200">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">
                    Protocol
                  </div>
                  <div className="font-mono text-xs text-slate-700 leading-relaxed">
                    {c.protocol}
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                  {c.capability}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: BYOK & PRIVATE AI ROUTING */}
      <section className="py-20 px-6 bg-[#090D16] border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">Enterprise AI Deployment Options</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Route AI inference through your own private cloud tenant.
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Enterprise tier workspaces retain full control over where requirement documents are processed—configurable directly inside Workspace AI Settings with encrypted key storage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "Private Microsoft Azure AI / Azure OpenAI",
                body: "Connect your organization's dedicated Azure AI deployment so every token stays inside your enterprise Azure boundary under your existing Microsoft Enterprise Agreement.",
                highlight: "Enterprise Agreement"
              },
              {
                title: "Google Cloud / Vertex AI & Gemini Endpoints",
                body: "Configure high-context Gemini models (1M+ token context window) for multi-hundred-page tender synthesis.",
                highlight: "1M+ Token Context"
              },
              {
                title: "Any OpenAI-Compatible Private Endpoint",
                body: "Bring your own API keys and custom base URLs for internal vLLM, LiteLLM, or sovereign enterprise gateways—backed by Fernet encryption at rest and Zero Data Retention.",
                highlight: "Zero Retention"
              }
            ].map((item, i) => (
              <div key={i} className="bg-[#0F1423] border border-slate-700 rounded-2xl p-6 flex flex-col">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-sky-900/40 text-sky-400 border border-sky-500/30 self-start mb-4">
                  {item.highlight}
                </div>
                <h3 className="text-base font-bold text-white mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed flex-grow">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: SECURITY STRIP + CLOSING CTA */}
      <section className="py-16 px-6 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-xs font-bold text-[#1E40AF] uppercase tracking-wider mb-2">Cryptographic Governance</div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#0B1220]">
              Three guarantees enforced at the integration boundary.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "Fernet Token Encryption",
                body: "Every OAuth refresh token, client secret, and BYOK API key is encrypted at rest before hitting PostgreSQL."
              },
              {
                title: "Asynchronous Resilience",
                body: "All external API calls and webhook deliveries execute via isolated Celery + Redis background workers with automatic retries."
              },
              {
                title: "Tenant-Scoped Isolation",
                body: "Integration credentials and sync logs are strictly isolated per workspace via PostgreSQL Row-Level Security (RLS)."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center">
                    ✓
                  </span>
                  <h3 className="text-sm font-bold text-[#0B1220]">{item.title}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-24 px-6 bg-[#090D16] text-center border-t border-slate-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            See Capivue running inside your Microsoft and Salesforce stack.
          </h2>
          <p className="text-lg text-slate-400 mb-10">
            Schedule an architectural walkthrough with our solutions engineering team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/request-demo"
              className="bg-[#0EA5E9] text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-sky-400 transition-colors shadow-lg shadow-[#0EA5E9]/20"
            >
              Book a Technical Demo
            </Link>
            <Link
              href="/security"
              className="bg-transparent border border-slate-600 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-slate-800 transition-colors"
            >
              Visit Security & Trust Center →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}