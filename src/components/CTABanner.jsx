export default function CTABanner() {
  return (
    <div
      className="py-20 px-5 md:px-10 text-center text-white"
      style={{ background: 'linear-gradient(135deg, #9b0b21, #C8102E)' }}
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-3">Need Printing Done Right Now?</h2>
        <p className="text-white/85 text-sm mb-8 leading-relaxed">
          Walk in anytime or give us a call — we're ready to serve you 7 days a week, fast and affordable.
        </p>
        <a
          href="tel:09380586873"
          className="inline-flex items-center gap-2.5 bg-white text-primary font-bold text-sm px-9 py-4 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.18)] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-200"
        >
          <i className="fa-solid fa-phone-volume" /> Call: 093805 86873
        </a>
      </div>
    </div>
  )
}
