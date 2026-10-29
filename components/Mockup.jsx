export default function Mockup() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-16 bg-[#0B1220] rounded-xl border border-slate-700 shadow-2xl overflow-hidden">
      {/* Browser Header */}
      <div className="bg-[#1E293B] px-4 py-3 flex items-center gap-2 border-b border-slate-700">
        <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
        <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
        <div className="w-3 h-3 rounded-full bg-emerald-400/80"></div>
        <div className="ml-4 bg-[#0B1220] text-xs text-slate-400 px-4 py-1 rounded-md flex-1 max-w-md border border-slate-700 flex items-center gap-2">
          <svg className="w-3 h-3 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          app.capivuetech.com
        </div>
      </div>

      {/* App Body */}
      <div className="flex h-[400px]">
        {/* Sidebar */}
        <div className="w-48 bg-[#0F172A] border-r border-slate-800 p-4 hidden md:block">
          <div className="text-white font-bold tracking-tighter mb-6 text-sm">CAPIVUE</div>
          <div className="space-y-2">
            <div className="bg-[#1E40AF]/20 text-[#0EA5E9] px-3 py-2 rounded-md text-xs font-medium flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]"></div> Discover
            </div>
            <div className="text-slate-400 px-3 py-2 text-xs font-medium flex items-center gap-2 hover:bg-slate-800/50 rounded-md">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div> Evaluate
            </div>
            <div className="text-slate-400 px-3 py-2 text-xs font-medium flex items-center gap-2 hover:bg-slate-800/50 rounded-md">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div> Draft
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-[#0B1220] p-6 overflow-hidden">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-white font-semibold text-lg">Bid Assessment</h3>
              <p className="text-slate-400 text-xs">RFP-2026-089 | Global Bank Infrastructure</p>
            </div>
            <div className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/20">
              High Probability
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-[#0F172A] p-4 rounded-lg border border-slate-800">
              <p className="text-slate-400 text-xs mb-1">Bid Strength Score</p>
              <p className="text-3xl font-bold text-white">84<span className="text-sm text-slate-500">/100</span></p>
            </div>
            <div className="bg-[#0F172A] p-4 rounded-lg border border-slate-800">
              <p className="text-slate-400 text-xs mb-1">Compliance Match</p>
              <p className="text-3xl font-bold text-white">92%</p>
            </div>
          </div>

          <div className="bg-[#0F172A] p-4 rounded-lg border border-slate-800 h-32">
             <p className="text-slate-400 text-xs mb-3">Evidence Traceability</p>
             <div className="space-y-2">
               <div className="h-2 bg-slate-800 rounded w-full"><div className="h-2 bg-[#0EA5E9] rounded w-[92%]"></div></div>
               <div className="h-2 bg-slate-800 rounded w-full"><div className="h-2 bg-[#1E40AF] rounded w-[75%]"></div></div>
               <div className="h-2 bg-slate-800 rounded w-full"><div className="h-2 bg-emerald-500 rounded w-[88%]"></div></div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}