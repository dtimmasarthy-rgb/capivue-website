export default function DemoVideo() {
  return (
    <section className="py-20 px-6 bg-white border-y border-slate-200">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">
            See Capivue in action
          </h2>
          <p className="text-lg text-slate-600">
            Watch how to turn a 300-page RFP into a verified, capacity-planned proposal in minutes.
          </p>
        </div>

        {/* The Video Container */}
        <div className="relative bg-[#0F1423] rounded-2xl border border-slate-700 shadow-2xl overflow-hidden aspect-video">
          <video
            className="w-full h-full object-cover"
            controls
            preload="metadata"
            poster="/video-poster.jpg" // Optional: Add a thumbnail image to the public folder
          >
            <source src="/capivue-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* CTA Below Video */}
        <div className="text-center mt-8">
          <a href="/request-demo" className="inline-block bg-[#1E40AF] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Book a Live Demo
          </a>
        </div>
      </div>
    </section>
  );
}