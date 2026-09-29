export default function Hero() {
  return (
    <section
      id="home"
      className="mt-[68px] min-h-[calc(100vh-68px)] flex items-center px-5 md:px-10 py-16 gap-12 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #9b0b21 0%, #C8102E 60%, #e8345a 100%)' }}
    >
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute -bottom-24 left-[35%] w-72 h-72 rounded-full bg-white/[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 z-10">

        {/* ---- Text Content ---- */}
        <div className="flex-1 text-white text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide mb-5">
            <i className="fa-solid fa-location-dot" /> Pudupet, Egmore · Chennai
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-tight mb-5">
            Your Trusted{' '}
            <span className="text-yellow-300">Print & Copy</span>{' '}
            Partner
          </h1>

          <p className="text-base leading-relaxed opacity-90 max-w-md mx-auto lg:mx-0 mb-9">
            Fast, affordable and reliable printing, xerox, scanning &amp; lamination services —
            right in the heart of Egmore. Serving students, professionals &amp; businesses.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href="#services" className="btn-primary">
              <i className="fa-solid fa-list-check" /> Our Services
            </a>
            <a href="#location" className="btn-outline">
              <i className="fa-solid fa-map-location-dot" /> Get Directions
            </a>
          </div>
        </div>

        {/* ---- Shop Image ---- */}
        <div className="flex-1 max-w-[480px] w-full relative z-10">
          {/* Open badge */}
          <div className="absolute -top-4 -right-4 sm:right-0 flex items-center gap-2 bg-green-500 text-white text-xs font-semibold px-3.5 py-2 rounded-xl shadow-lg z-20">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse-dot" />
            Open Today
          </div>

          <img
            src="/shop.png"
            alt="Spot Copy Centre Shop Front"
            className="w-full rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
          />

          {/* Rating card */}
          <div className="absolute -bottom-5 -left-4 sm:left-0 bg-white rounded-2xl px-5 py-3 shadow-xl flex items-center gap-4 z-20">
            <div>
              <p className="text-3xl font-extrabold text-primary leading-none">3.4</p>
              <p className="text-yellow-400 text-sm mt-0.5">★★★☆☆</p>
              <p className="text-gray-400 text-[0.65rem]">22 Google Reviews</p>
            </div>
            <div className="text-[0.7rem] text-gray-500 leading-relaxed">
              Verified on{' '}
              <span className="font-bold text-[#4285F4]">Google</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
