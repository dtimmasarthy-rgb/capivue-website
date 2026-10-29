export default function About() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight text-[#0B1220] mb-6">
          Building the intelligence layer for enterprise revenue.
        </h1>
        <p className="text-xl text-slate-600 mb-12">
          Capivue was founded to fix a broken process. Enterprises spend millions responding to RFPs with fragmented knowledge, manual compliance checks, and high-stress deadlines.
        </p>
        
        <h2 className="text-2xl font-bold text-[#0B1220] mb-4">Our Mission</h2>
        <p className="text-lg text-slate-600 leading-relaxed mb-12">
          We believe that winning complex deals shouldn't depend on how fast you can copy-paste old answers. It should depend on the quality of your strategy. We build tools that give bid teams the intelligence, evidence, and time to win the right deals.
        </p>

        <h2 className="text-2xl font-bold text-[#0B1220] mb-4">Security is the Foundation</h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          We handle high-stakes enterprise data. That's why we are built on Microsoft Azure (Central India), enforce tenant isolation via Row-Level Security, and operate with Zero Data Retention for AI inference.
        </p>
      </div>
    </div>
  );
}