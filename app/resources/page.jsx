"use client";
import { useState } from "react";
import Link from "next/link";

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState("All Resources");

  const categories = [
    "All Resources",
    "Commercial & Bid Strategy",
    "AI Governance & Compliance",
    "Delivery Engineering"
  ];

  const articles = [
    {
      category: "Commercial & Bid Strategy",
      date: "October 2026",
      readTime: "6 min read",
      title: "The Hidden Cost of Static Rate-Card Spreadsheets in Turnkey IT Deals",
      summary: "Why naive FTE summation...",
      // FIX: Match this exactly to your folder name
      href: "/blog/hidden-cost-of-static-rate-card-spreadsheets" 
    },
    {
      category: "AI Governance & Compliance",
      date: "October 2026",
      readTime: "7 min read",
      title: "Eliminating AI Hallucinations in Regulated BFSI & Public Sector Bids",
      summary: "Why generic chatbots fail...",
      // FIX: Match this exactly to your folder name
      href: "/blog/eliminating-ai-hallucinations-in-regulated-bids"
    },
    {
      category: "Delivery Engineering",
      date: "September 2026",
      readTime: "5 min read",
      title: "Sprint Planning Before Contract Award: Closing the Sales-to-Delivery Gap",
      summary: "How VPs of Delivery validate...",
      // FIX: Match this exactly to your folder name
      href: "/blog/sprint-planning-before-contract-award"
    },
    {
      category: "Commercial & Bid Strategy",
      date: "September 2026",
      readTime: "6 min read",
      title: "Isolating Knowledge Transfer Waves and 24/7 SLA Traps in Annuity Bids",
      summary: "A practical framework...",
      // FIX: Match this exactly to your folder name
      href: "/blog/isolating-knowledge-transfer-waves-and-sla-traps-in-annuity-bids"
    },
    {
      category: "AI Governance & Compliance",
      date: "August 2026",
      readTime: "8 min read",
      title: "Database-Level Multi-Tenancy: Designing PostgreSQL Row-Level Security for Sensitive Bids",
      summary: "Inside Capivue's security architecture...",
      // FIX: Match this exactly to your folder name
      href: "/blog/database-level-multi-tenancy-postgresql-rls"
    },
    {
      category: "Delivery Engineering",
      date: "August 2026",
      readTime: "5 min read",
      title: "Ending the 48-Hour SME Fire Drill with Interactive Microsoft Teams Workflows",
      summary: "How modern bid managers...",
      // FIX: Match this exactly to your folder name
      href: "/blog/ending-the-48-hour-sme-fire-drill-with-microsoft-teams"
    }
  ];
  const filteredArticles =
    activeCategory === "All Resources"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-[#1E40AF] selection:text-white">

      {/* SECTION 1: EDITORIAL HERO + CATEGORY FILTER STRIP */}
      <section className="bg-[#F8FAFC] pt-24 pb-12 px-6 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#1E40AF] text-xs font-bold uppercase tracking-wider mb-6">
              Capivue Research & Briefings
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B1220] mb-6">
              Enterprise Intelligence for Complex Revenue & Delivery Teams.
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Architectural whitepapers, commercial governance frameworks, and field guides from the engineering and pre-sales leaders building Capivue.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
                  activeCategory === cat
                    ? "bg-[#0B1220] text-white border-[#0B1220]"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-[#0B1220]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: FEATURED EXECUTIVE BRIEFING (DARK OBSIDIAN 2-COLUMN) */}
      <section className="px-6 py-16 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#090D16] rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-2">

            {/* Left: Typographic Cover Graphic */}
            <div className="relative bg-[#0F1423] p-10 md:p-12 flex flex-col justify-between min-h-[380px] border-b md:border-b-0 md:border-r border-slate-800">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(148,163,184,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.15) 1px, transparent 1px)",
                  backgroundSize: "40px 40px"
                }}
              ></div>

              <div className="relative">
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">
                  Executive Briefing · 8 min read
                </div>
                <div className="text-xs font-mono text-slate-400">
                  BID STRENGTH SCORE
                </div>
                <div className="text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-none mt-1">
                  38<span className="text-slate-600 text-3xl md:text-4xl">/100</span>
                </div>
              </div>

              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-amber-500/10 border border-amber-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                    Verdict: Condition or Walk Away
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Article Summary */}
            <div className="p-10 md:p-12 flex flex-col justify-center">
              <div className="text-xs font-bold uppercase tracking-wider text-[#0EA5E9] mb-4">
                Commercial & Bid Strategy · November 2026
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-5">
                Why 40% of Enterprise Requirement Documents Should Be Conditioned—or Declined.
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Traditional revenue teams measure pre-sales activity by submission volume. Yet chasing poorly scoped RFPs and fixed-price Statements of Work (SOWs) with hidden SLA penalties drains senior architects and locks delivery teams into years of margin erosion. Learn how top bid directors use 8-dimension risk scoring and deduplicated contractual assumptions to qualify pursuits in under an hour.
              </p>
              <Link
                href="/blog/why-40-percent-of-bids-should-never-be-submitted"
                className="inline-flex items-center gap-2 text-[#0EA5E9] font-semibold text-sm hover:text-sky-400 transition-colors w-fit"
              >
                Read Full Briefing →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PUBLISHED RESEARCH & FIELD GUIDES */}
      <section className="py-20 px-6 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="text-xs font-bold text-[#1E40AF] uppercase tracking-wider mb-2">
                Published Research & Field Guides
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220]">
                {activeCategory === "All Resources"
                  ? "Latest from Capivue Research"
                  : activeCategory}
              </h2>
            </div>
            <div className="text-sm text-slate-500">
              {filteredArticles.length} {filteredArticles.length === 1 ? "article" : "articles"}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, idx) => (
              <Link
                key={idx}
                href={article.href}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col"
              >
                <div className="h-32 bg-gradient-to-br from-[#0F1423] to-[#1A2235] p-5 flex flex-col justify-between relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(148,163,184,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.15) 1px, transparent 1px)",
                      backgroundSize: "24px 24px"
                    }}
                  ></div>
                  <div className="relative text-[9px] font-bold uppercase tracking-widest text-slate-500">
                    {article.category}
                  </div>
                  <div className="relative text-[10px] font-mono text-slate-500">
                    {article.date} · {article.readTime}
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-lg font-bold text-[#0B1220] mb-3 group-hover:text-[#1E40AF] transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
                    {article.summary}
                  </p>
                  <span className="text-sm font-semibold text-[#1E40AF] inline-flex items-center gap-1">
                    Read Article <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: NEWSLETTER + DEMO CONVERSION */}
      <section className="py-20 px-6 bg-[#090D16]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">

          <div className="bg-[#0F1423] border border-slate-700 rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold text-white mb-3 leading-snug">
              Subscribe to the Enterprise Bid Intelligence Briefing
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Monthly research on commercial governance, requirement auditing, and AI security for pre-sales, finance, and delivery leaders.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                required
                placeholder="Enter work email"
                className="flex-grow px-4 py-3 rounded-lg bg-[#1A2235] border border-slate-600 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#0EA5E9] transition-colors"
              />
              <button
                type="submit"
                className="bg-[#0EA5E9] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-sky-400 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-[11px] text-slate-500 mt-3">
              No spam. Unsubscribe anytime.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#1E40AF] to-[#0EA5E9] rounded-2xl p-8 md:p-10 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-white mb-3 leading-snug">
              See these frameworks running live on your own requirement documents.
            </h2>
            <p className="text-blue-50 text-sm leading-relaxed mb-6">
              Watch how Capivue's risk scoring, commercial rollups, and sprint planning work on a real pursuit—not a demo script.
            </p>
            <Link
              href="/request-demo"
              className="bg-white text-[#1E40AF] px-6 py-3 rounded-lg text-sm font-bold hover:bg-slate-100 transition-colors w-fit"
            >
              Book an Enterprise Demo →
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}