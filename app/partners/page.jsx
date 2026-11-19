"use client";
import { useState } from "react";
import Link from "next/link";

export default function Partners() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    track: "Bid & Proposal Consultancy",
    industries: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const telemetry = [
    {
      label: "Pillar 01 · Client Data Isolation",
      detail: "Manage multiple client pursuits with mathematical tenant separation at the PostgreSQL Row-Level Security (RLS) layer.",
      color: "emerald"
    },
    {
      label: "Pillar 02 · White-Label Readiness",
      detail: "Deliver branded workspaces and submission packs tailored to your advisory practice (Enterprise Tier).",
      color: "sky"
    },
    {
      label: "Pillar 03 · Sovereign Cloud Compliance",
      detail: "Pass strict BFSI and public sector CISO reviews out of the box with Azure Central India residency.",
      color: "emerald"
    },
    {
      label: "Pillar 04 · Joint Go-To-Market",
      detail: "Dedicated solutions architects supporting live client demos, pilot scoping, and co-sell motions.",
      color: "amber"
    }
  ];

  const tracks = [
    {
      num: "01",
      title: "Bid & Proposal Consultancies",
      audience: "Firms that manage end-to-end RFP, SOW, and tender responses on behalf of enterprise clients.",
      value: "Compress requirement extraction, Risk X-Ray auditing, and first-draft creation by over 80%—delivering higher-margin advisory services while earning recurring software revenue.",
      enabler: "Multi-workspace isolation via PostgreSQL RLS and custom White-Label Branding."
    },
    {
      num: "02",
      title: "Systems Integrators & Tech Partners",
      audience: "IT services, cloud transformation, and Microsoft/Salesforce implementation partners.",
      value: "Embed Capivue into your revenue-operations offerings—connecting Microsoft Entra ID, SharePoint, Teams, and Salesforce directly into your clients' pre-sales workflows.",
      enabler: "Co-selling support, joint architectural workshops, and Custom REST / Webhook extensibility."
    },
    {
      num: "03",
      title: "Fractional Capture & Deal Desk Leaders",
      audience: "Independent pre-sales directors, commercial advisors, and fractional executives.",
      value: "Standardize Go/No-Go qualification, blended rate-card rollups, and sprint capacity validation across every client portfolio without building custom Excel models.",
      enabler: "Fast-track client pilot provisioning and recurring first-year subscription commissions."
    }
  ];

  const advantages = [
    {
      num: "01",
      title: "Predictable Recurring Revenue",
      copy: "Earn competitive recurring commissions on annual and multi-year subscriptions (Starter $4,000/yr, Professional $10,000/yr, Enterprise $30,000/yr) referred or co-sold through your practice."
    },
    {
      num: "02",
      title: "Zero-Friction CISO & Procurement Approval",
      copy: "Confidently introduce Capivue into regulated BFSI, IT Services, and public sector accounts—backed by Microsoft Azure Central India residency, PostgreSQL RLS, Zero-Retention Azure AI, and BYOK private tenant support."
    },
    {
      num: "03",
      title: "Co-Selling & Solutions Engineering Support",
      copy: "Pitch alongside Capivue's enterprise sales and solutions engineering team. We support custom client dry-runs, security questionnaire reviews (SIG Lite / CAIQ), and pilot onboarding."
    },
    {
      num: "04",
      title: "Multi-Client Governance & White-Label Options",
      copy: "Consultancies running managed bid desks can isolate each client's proprietary rate cards and Knowledge Repository in dedicated RLS-protected workspaces with custom domain and logo branding."
    }
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-800 font-sans selection:bg-[#1E40AF] selection:text-white">

      {/* SECTION 1: DARK OBSIDIAN HERO + PARTNER TELEMETRY */}
      <section className="bg-[#090D16] pt-24 pb-20 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[#0EA5E9] text-xs font-bold uppercase tracking-wider mb-6">
              Capivue Global Partner Ecosystem
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              Deliver enterprise requirement and bid intelligence to your clients—and unlock recurring revenue.
            </h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl">
              Capivue partners with leading proposal consultancies, system integrators, and independent capture leaders to modernize how enterprises qualify, price, and respond to complex requirement documents. Together, we eliminate bid waste, enforce compliance, and accelerate submission velocity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#apply" className="bg-[#1E40AF] text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-[#1E40AF]/30 text-center">
                Apply to Become a Partner
              </a>
              <Link href="/request-demo" className="bg-transparent border border-slate-600 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-slate-800 transition-all text-center">
                Book a Partner Briefing →
              </Link>
            </div>
            <div className="text-xs font-mono text-slate-500 tracking-wide uppercase">
              Recurring Subscription Revenue • Multi-Tenant Workspace Isolation • Co-Selling Support
            </div>
          </div>

          {/* Right Visual: Partner Telemetry */}
          <div className="bg-[#0F1423] rounded-2xl border border-slate-700 shadow-2xl overflow-hidden relative">
            <div className="bg-slate-800/50 px-4 py-3 border-b border-slate-700 flex justify-between items-center">
              <div className="text-xs font-mono text-slate-300">Enterprise Partner Architecture</div>
              <div className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-emerald-900/40 text-emerald-400 border border-emerald-500/30">
                Accepting Partners
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-3">
              {telemetry.map((item, idx) => (
                <div key={idx} className="bg-[#1A2235] border border-slate-700 rounded-lg p-4 flex gap-3 items-start">
                  <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                    item.color === "emerald" ? "bg-emerald-500" :
                    item.color === "amber" ? "bg-amber-500" : "bg-[#0EA5E9]"
                  }`}></div>
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

      {/* SECTION 2: THREE PARTNER TRACKS */}
      <section className="py-20 px-6 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-bold text-[#1E40AF] uppercase tracking-wider mb-3">Partner Tracks</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">
              Three partnership models tailored to your advisory or delivery practice.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {tracks.map((track) => (
              <div key={track.num} className="bg-[#F8FAFC] rounded-2xl border border-slate-200 p-8 flex flex-col">
                <div className="text-3xl font-mono font-bold text-slate-300 mb-4">{track.num}</div>
                <h3 className="text-xl font-bold text-[#0B1220] mb-4 leading-snug">{track.title}</h3>
                
                <div className="space-y-4 flex-grow">
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Audience</div>
                    <p className="text-sm text-slate-600 leading-relaxed">{track.audience}</p>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Value Proposition</div>
                    <p className="text-sm text-slate-600 leading-relaxed">{track.value}</p>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Key Enabler</div>
                    <p className="text-sm text-slate-700 leading-relaxed font-medium">{track.enabler}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY ENTERPRISE ADVISORS PARTNER WITH CAPIVUE */}
      <section className="py-20 px-6 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-bold text-[#1E40AF] uppercase tracking-wider mb-3">Ecosystem Advantages</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220]">
              Enterprise-grade infrastructure backed by dedicated partner enablement.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((adv) => (
              <div key={adv.num} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-xs font-bold text-[#1E40AF] mb-2">{adv.num} · Capivue Partner Advantage</div>
                <h3 className="text-xl font-bold text-[#0B1220] mb-3 leading-snug">{adv.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{adv.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW TO JOIN */}
      <section className="py-20 px-6 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-bold text-[#1E40AF] uppercase tracking-wider mb-3">How to Join</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220]">
              Three steps to launch your Capivue practice.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-slate-200 z-0"></div>

            {[
              {
                step: "01",
                title: "Submit Partner Application",
                copy: "Share your firm's vertical focus (IT Services, BFSI, Consulting, or Managed Services) and advisory model."
              },
              {
                step: "02",
                title: "Technical & Commercial Enablement",
                copy: "Complete a 60-minute deep-dive walkthrough of Risk X-Ray, Deal Room, Sprint Planner, and Grounded Authoring with our solutions team."
              },
              {
                step: "03",
                title: "Co-Sell & Provision Client Pilots",
                copy: "Launch guided 50-credit trials or full enterprise deployments for your clients with dedicated deal registration and co-sell support."
              }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#1E40AF] text-white flex items-center justify-center text-xl font-bold mb-6 shadow-lg shadow-[#1E40AF]/30 ring-4 ring-white">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-[#0B1220] mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-xs">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: PARTNER APPLICATION FORM & CLOSING CTA */}
      <section id="apply" className="py-24 px-6 bg-[#090D16] border-t border-slate-800">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Ready to bring governed deal intelligence to your clients?
            </h2>
            <p className="text-lg text-slate-400">
              Apply to join the Capivue Partner Ecosystem or reach our alliances team directly at{" "}
              <a href="mailto:partners@capivuetech.com" className="text-[#0EA5E9] hover:underline">
                partners@capivuetech.com
              </a>.
            </p>
          </div>

          <div className="bg-[#0F1423] border border-slate-700 rounded-2xl p-8 md:p-10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#1A2235] border border-slate-600 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#0EA5E9] transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Work Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#1A2235] border border-slate-600 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#0EA5E9] transition-colors"
                    placeholder="jane@consultancy.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Company / Practice Name</label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#1A2235] border border-slate-600 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#0EA5E9] transition-colors"
                  placeholder="Acme Advisory Group"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Partner Track</label>
                <select
                  name="track"
                  value={formData.track}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#1A2235] border border-slate-600 text-white text-sm focus:outline-none focus:border-[#0EA5E9] transition-colors appearance-none"
                >
                  <option value="Bid & Proposal Consultancy">Bid & Proposal Consultancy</option>
                  <option value="Systems Integrator / Technology Partner">Systems Integrator / Technology Partner</option>
                  <option value="Fractional Capture & Deal Desk Leader">Fractional Capture & Deal Desk Leader</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Primary Client Industries</label>
                <input
                  type="text"
                  name="industries"
                  value={formData.industries}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#1A2235] border border-slate-600 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#0EA5E9] transition-colors"
                  placeholder="BFSI, IT Services, Public Sector"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#0EA5E9] text-white px-6 py-3.5 rounded-lg text-base font-semibold hover:bg-sky-400 transition-colors shadow-lg shadow-[#0EA5E9]/20"
                >
                  Submit Partner Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}