export default function FAQ() {
  const faqs = [
    { q: "What exactly does Capivue do?", a: "Capivue is an AI-powered bid intelligence platform. We help enterprise bid teams extract RFP requirements, decide whether to bid, generate a strategic blueprint, draft evidence-backed responses, and plan delivery—all in one platform." },
    { q: "How is this different from other RFP automation tools?", a: "Most tools focus only on faster drafting. Capivue focuses on the intelligence before and after the document. We generate a Bid Strength Score to help you decide if a deal is worth pursuing, and we provide evidence traceability so every claim is linked to a source document." },
    { q: "Do you train AI models on my documents?", a: "No. We use GroqCloud for inference with Zero Data Retention enabled by default. Your documents are not stored, logged, or used for model training." },
    { q: "Where is my data stored?", a: "Your data is hosted on Microsoft Azure in the Central India region. We enforce tenant isolation via PostgreSQL Row-Level Security (RLS)." },
    { q: "Is Capivue SOC 2 compliant?", a: "We are currently in SOC 2 Type I readiness and targeting our audit for Q2 2027. We can provide our CAIQ self-assessment and security policies upon request." },
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B1220] mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-600">
            Common questions about the platform, security, and pricing.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#0B1220] mb-2">{faq.q}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}