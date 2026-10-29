import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-extrabold tracking-tighter text-[#1E40AF]">
          CAPIVUE
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <Link href="/platform" className="hover:text-[#1E40AF] transition-colors">Platform</Link>
          <Link href="/solutions" className="hover:text-[#1E40AF] transition-colors">Solutions</Link>
          <Link href="/pricing" className="hover:text-[#1E40AF] transition-colors">Pricing</Link>
          <Link href="/security" className="hover:text-[#1E40AF] transition-colors">Security</Link>
          <Link href="/blog" className="hover:text-[#1E40AF] transition-colors">Blog</Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <a href="https://app.capivuetech.com" className="hidden md:block text-sm font-medium text-slate-600 hover:text-[#1E40AF] transition-colors">
            Log in
          </a>
          <Link href="/request-demo" className="bg-[#1E40AF] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-900 transition-colors shadow-sm">
            Book a Demo
          </Link>
        </div>
      </div>
    </nav>
  );
}