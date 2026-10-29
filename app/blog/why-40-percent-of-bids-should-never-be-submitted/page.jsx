import Link from "next/link";

export default function BlogArticle() {
  return (
    <div className="bg-white min-h-screen py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <Link href="/blog" className="text-sm font-semibold text-[#1E40AF] hover:underline mb-8 inline-block">
          ← Back to Insights
        </Link>
        
        <span className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-4 block">Strategy</span>
        <h1 className="text-4xl font-extrabold tracking-tight text-[#0B1220] mb-6 leading-tight">
          Why 40% of Enterprise Bids Should Never Be Submitted
        </h1>
        
        <div className="flex items-center gap-4 text-sm text-slate-500 mb-12 border-b border-slate-200 pb-8">
          <span>By Capivue Strategy Team</span>
          <span>•</span>
          <span>October 2026</span>
        </div>

        <div className="prose prose-slate prose-lg max-w-none">
          <p className="text-xl text-slate-600 mb-8 font-medium">
            The traditional bid process incentivizes teams to chase every RFP. But winning the wrong deals is worse than losing the right ones.
          </p>

          <p>In enterprise services, the "bid/no-bid" decision is often the most expensive decision a company makes. Yet, in most organizations, it is made in a 15-minute phone call based on gut feeling and a quick scan of the RFP's page count.</p>

          <h2 className="text-2xl font-bold text-[#0B1220] mt-10 mb-4">The Cost of a Bad Bid</h2>
          <p>When a bid team decides to pursue an RFP, the cost is immediate and substantial. A single enterprise response can consume 80 to 120 hours of cross-functional time from solution architects, legal, finance, and senior partners. If the win probability is low, that time is not just wasted—it is stolen from deals you could actually win.</p>
          
          <p>We analyzed historical bid data across IT services and consulting firms. The findings were consistent: the top 20% of "strategic fits" generated 80% of the profit. The bottom 40% of submitted bids generated negative ROI when factoring in the cost of pursuit.</p>

          <h2 className="text-2xl font-bold text-[#0B1220] mt-10 mb-4">Why Teams Bid on Everything</h2>
          <p>Why do teams chase deals they can't win? It usually comes down to three factors:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Fear of the empty pipeline:</strong> Sales teams push for volume, assuming more bids equal more wins.</li>
            <li><strong>Lack of historical intelligence:</strong> Teams don't have easy access to data showing where they historically win and lose.</li>
            <li><strong>Sunk cost fallacy:</strong> Once a team starts reading the RFP, they feel compelled to finish the response.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#0B1220] mt-10 mb-4">Moving from Gut Feeling to Data</h2>
          <p>The solution is not to bid less. It is to bid smarter. Before a single word is written, enterprise teams need a clear, data-backed answer to a simple question: <em>Can we win this?</em></p>

          <p>This is the foundation of Capivue's <strong>Bid Decision Intelligence</strong>. By analyzing the RFP's actual requirements against your historical win/loss data and past proposals, the platform generates a <strong>Bid Strength Score (/100)</strong>. It tells you, objectively, where you have a strong evidence base and where you are lacking.</p>

          <p>If your score is low, you don't bid. You save 100 hours of team time. If your score is high, you proceed with confidence, knowing exactly which win themes to emphasize.</p>

          <h2 className="text-2xl font-bold text-[#0B1220] mt-10 mb-4">The Paradigm Shift</h2>
          <p>The best bid teams in the world are not the ones who write the fastest. They are the ones who say "no" the most often, so that when they do say "yes," they have the resources and strategy to win.</p>
          
          <p>Stop writing from scratch. Start winning with strategy.</p>
        </div>

        <div className="mt-16 p-8 bg-[#F8FAFC] border border-slate-200 rounded-2xl text-center">
          <h3 className="text-xl font-bold text-[#0B1220] mb-3">See your Bid Strength Score in action.</h3>
          <p className="text-slate-600 mb-6 text-sm">Upload an RFP and let Capivue tell you if you should bid.</p>
          <Link href="/request-demo" className="bg-[#1E40AF] text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-900 transition-colors inline-block">
            Book a Demo
          </Link>
        </div>
      </div>
    </div>
  );
}