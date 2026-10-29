import Link from "next/link";

export default function Careers() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B1220] mb-6">
            Build the future of enterprise deal intelligence.
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We are a remote-first team solving one of the most expensive, complex problems in B2B revenue: the RFP process.
          </p>
        </div>

        <p className="text-lg text-slate-600 leading-relaxed mb-16 text-center max-w-3xl mx-auto">
          At Capivue, we are replacing legacy document-chasing with AI-driven strategy. We believe in deep work, high autonomy, and building software that enterprises can actually trust with their most sensitive data.
        </p>

        <h2 className="text-2xl font-bold text-[#0B1220] mb-6">Our Culture</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-[#0B1220] mb-2">Remote-First, Globally Distributed</h3>
            <p className="text-slate-600 text-sm">Work from anywhere. We measure output, not hours.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-[#0B1220] mb-2">Security by Default</h3>
            <p className="text-slate-600 text-sm">We handle high-stakes enterprise data. We take our responsibility to protect it seriously.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-[#0B1220] mb-2">Customer Obsession</h3>
            <p className="text-slate-600 text-sm">We don't build features in a vacuum. We build what bid teams actually need.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-[#0B1220] mb-2">Continuous Learning</h3>
            <p className="text-slate-600 text-sm">We are navigating the frontier of generative AI. We expect everyone to be a student of the game.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#0B1220] mb-6">Open Roles</h2>
        <div className="space-y-4 mb-16">
          {[
            { title: "Senior Full-Stack Engineer (Python / Next.js)", dept: "Engineering & Product", loc: "Remote (India preferred)" },
            { title: "AI/LLM Engineer (RAG & Prompt Architecture)", dept: "Engineering & Product", loc: "Remote" },
            { title: "Product Designer (Enterprise SaaS)", dept: "Engineering & Product", loc: "Remote" },
            { title: "Enterprise Account Executive (B2B SaaS)", dept: "Go-To-Market", loc: "Mumbai / Bengaluru / Remote" },
            { title: "Pre-Sales Solutions Architect", dept: "Go-To-Market", loc: "Remote" },
            { title: "Customer Success Manager (Enterprise)", dept: "Operations", loc: "Remote" },
          ].map((role, i) => (
            <div key={i} className="flex flex-col sm:flex-row justify-between sm:items-center p-6 bg-white border border-slate-200 rounded-xl hover:border-[#1E40AF]/30 transition-colors">
              <div>
                <h3 className="font-bold text-[#0B1220]">{role.title}</h3>
                <p className="text-sm text-slate-500">{role.dept} • {role.loc}</p>
              </div>
              <Link href={`mailto:careers@capivuetech.com?subject=Application: ${role.title}`} className="mt-4 sm:mt-0 text-sm font-semibold text-[#1E40AF] hover:underline">
                Apply
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-[#0B1220] p-12 rounded-2xl text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Don't see your role?</h2>
          <p className="text-slate-400 mb-6">We are always looking for curious, driven people who want to build at the intersection of AI and enterprise revenue.</p>
          <Link href="mailto:careers@capivuetech.com" className="inline-block bg-[#0EA5E9] text-white px-8 py-3 rounded-lg font-medium hover:bg-sky-400 transition-colors">
            Send your resume
          </Link>
        </div>
      </div>
    </div>
  );
}