import Link from "next/link";

export default function Contact() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B1220] mb-6">
          Contact Capivue
        </h1>
        <p className="text-xl text-slate-600 mb-12">
          Whether you are evaluating the platform, exploring a partnership, or need security details, our team is ready to help.
        </p>

        <div className="bg-white p-8 rounded-2xl border border-slate-200 text-left">
          <h2 className="text-xl font-bold text-[#0B1220] mb-6">Send us a message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
              <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent outline-none" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Work Email</label>
              <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent outline-none" placeholder="you@company.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
              <textarea rows="4" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent outline-none" placeholder="How can we help?"></textarea>
            </div>
            <button type="button" className="w-full bg-[#1E40AF] text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-900 transition-colors">
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-12 text-slate-600">
          <p>For general inquiries: <a href="mailto:contact@capivuetech.com" className="text-[#1E40AF] hover:underline">contact@capivuetech.com</a></p>
          <p className="mt-2">For security and compliance: <a href="mailto:contact@capivuetech.com" className="text-[#1E40AF] hover:underline">contact@capivuetech.com</a></p>
        </div>
      </div>
    </div>
  );
}