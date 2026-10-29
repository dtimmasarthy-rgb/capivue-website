import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B1220] text-slate-300 py-16 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
        
        {/* Brand */}
        <div className="col-span-2 lg:col-span-2">
          <div className="text-2xl font-extrabold tracking-tighter text-white mb-4">CAPIVUE</div>
          <p className="text-sm text-slate-400 mb-6 max-w-xs">
            Intelligence infrastructure for complex revenue operations. Built for the security and compliance requirements of modern enterprise bid teams.
          </p>
          <div className="flex gap-4 text-sm font-medium text-slate-400">
            <span>Azure Cloud</span>
            <span>•</span>
            <span>RLS</span>
            <span>•</span>
            <span>Zero Data Retention</span>
          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm">Product</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/platform" className="hover:text-white transition-colors">Platform</Link></li>
            <li><Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link></li>
            <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            <li><Link href="/security" className="hover:text-white transition-colors">Security</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm">Company</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link href="/partners" className="hover:text-white transition-colors">Partners</Link></li>
            <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Resources & Legal */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm">Resources & Legal</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            <li><Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/legal/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link href="/legal/dpa" className="hover:text-white transition-colors">DPA</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <div>
          © 2026 Capivue Solutions Pvt Ltd. All rights reserved.
        </div>
        <div className="flex items-center gap-2">
          <span>Registered in India</span>
          <span>•</span>
          <span>Central India Data Residency</span>
        </div>
      </div>
    </footer>
  );
}