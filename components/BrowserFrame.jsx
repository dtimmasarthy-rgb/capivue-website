export default function BrowserFrame({ imageSrc, altText }) {
  return (
    <div className="w-full bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden my-8">
      {/* Fake Browser Header */}
      <div className="bg-slate-50 px-4 py-2 flex items-center gap-2 border-b border-slate-200">
        <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
        <div className="ml-4 bg-white border border-slate-200 text-[10px] text-slate-400 px-3 py-0.5 rounded text-center w-48 truncate">
          app.capivuetech.com
        </div>
      </div>
      {/* Image Area */}
      <div className="bg-slate-100 flex items-center justify-center min-h-[300px] relative">
        {imageSrc ? (
          <img src={imageSrc} alt={altText} className="w-full h-auto" />
        ) : (
          <div className="text-slate-400 text-sm font-medium flex flex-col items-center gap-2">
            <svg className="w-8 h-8 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            Screenshot Placeholder
          </div>
        )}
      </div>
    </div>
  );
}