export default function Security() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B1220] mb-6">
          Security & Data Protection
        </h1>
        <p className="text-xl text-slate-600 mb-12">
          Capivue is built for enterprise bid teams. We take a transparent approach to security: here is what we do, what we don't have yet, and what we're working toward.
        </p>

        {/* Technical Safeguards */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0B1220] mb-4 border-b pb-2 border-slate-200">Technical Safeguards</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-[#0B1220] mb-1">Architecture</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Capivue is built on a modern, decoupled architecture: a Next.js frontend hosted on Azure Static Web Apps, communicating with a FastAPI backend deployed on Azure Container Apps. This separation of concerns ensures high availability and secure API boundaries.</p>
            </div>
            
            <div>
              <h3 className="font-bold text-[#0B1220] mb-1">Authentication & Access Control</h3>
              <p className="text-slate-600 text-sm leading-relaxed">We use custom JWT (JSON Web Token) authentication issued by our FastAPI backend. Passwords are cryptographically hashed, and tokens are securely managed by the client. Production access to our Azure infrastructure is restricted to authorised personnel with role-based permissions and multi-factor authentication.</p>
            </div>

            <div>
              <h3 className="font-bold text-[#0B1220] mb-1">Tenant Isolation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Customer data is logically isolated at the database layer using PostgreSQL Row-Level Security (RLS). Even in the event of an application-layer bug, one customer cannot access another customer's data.</p>
            </div>

            <div>
              <h3 className="font-bold text-[#0B1220] mb-1">Encryption</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Data is encrypted in transit (TLS 1.3) and at rest (AES-256 via Azure infrastructure-level encryption).</p>
            </div>

            <div>
              <h3 className="font-bold text-[#0B1220] mb-1">AI Data Handling</h3>
              <p className="text-slate-600 text-sm leading-relaxed">RFP text is sent to GroqCloud for inference with Zero Data Retention enabled — your content is not stored, logged, or used for model training by the provider. We are in the process of enabling Azure OpenAI inference within our own Azure tenant; once live, AI processing will remain entirely within Azure.</p>
            </div>
          </div>
        </div>

        {/* Subprocessors */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0B1220] mb-4 border-b pb-2 border-slate-200">Subprocessors</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-slate-600">
              <thead className="text-xs text-slate-500 uppercase bg-slate-100">
                <tr>
                  <th className="px-4 py-3">Subprocessor</th>
                  <th className="px-4 py-3">Purpose</th>
                  <th className="px-4 py-3">Location</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="px-4 py-3 font-medium text-[#0B1220]">Microsoft Azure</td>
                  <td className="px-4 py-3">Cloud infrastructure (compute, database, storage)</td>
                  <td className="px-4 py-3">Central India</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="px-4 py-3 font-medium text-[#0B1220]">GroqCloud</td>
                  <td className="px-4 py-3">AI Inference (Zero Data Retention enabled)</td>
                  <td className="px-4 py-3">US</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-[#0B1220]">Resend</td>
                  <td className="px-4 py-3">Transactional Email</td>
                  <td className="px-4 py-3">US</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* What We Don't Have */}
        <div className="mb-12 bg-white p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-bold text-[#0B1220] mb-4">What We Don't Have Yet</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
            <li>SOC 2 Type I report (Audit in progress, targeting Q2 2027)</li>
            <li>ISO 27001 certification (Planned post-SOC 2, based on EU demand)</li>
            <li>EU-region hosting (Available on request)</li>
          </ul>
          <p className="mt-4 text-sm font-medium text-[#1E40AF]">
            We'd rather tell you what we don't have than have you find out during procurement. If you need something that's not listed here, ask us.
          </p>
        </div>

        <div className="text-center pt-8 border-t border-slate-200">
          <p className="text-slate-600">Contact our security team: <a href="mailto:security@capivuetech.com" className="text-[#1E40AF] font-semibold hover:underline">security@capivuetech.com</a></p>
        </div>

      </div>
    </div>
  );
}