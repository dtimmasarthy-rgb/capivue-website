export default function RequestDemo() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen py-24 px-6 flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h1 className="text-3xl font-extrabold tracking-tight text-[#0B1220] mb-2">
          Book a Demo
        </h1>
        <p className="text-slate-600 mb-8 text-sm">
          See how Capivue can transform your bid process. Fill out the form and our team will be in touch.
        </p>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
            <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent outline-none" placeholder="Jane Doe" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Work Email</label>
            <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent outline-none" placeholder="jane@company.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
            <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent outline-none" placeholder="Acme Corp" />
          </div>
          <button type="button" className="w-full bg-[#1E40AF] text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-900 transition-colors mt-2">
            Request Demo
          </button>
        </form>
      </div>
    </div>
  );
}