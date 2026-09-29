const features = [
  {
    icon: 'fa-solid fa-bolt',
    title: 'Quick Turnaround',
    desc: 'We value your time. Most jobs are completed while you wait — no long queues or unnecessary delays.',
  },
  {
    icon: 'fa-solid fa-tag',
    title: 'Cost Friendly Pricing',
    desc: 'Transparent and affordable prices — perfect for students, working professionals and businesses alike.',
  },
  {
    icon: 'fa-solid fa-clock',
    title: 'Open 7 Days a Week',
    desc: "We're open every single day including Sundays (10 AM – 9 PM), so you're never stuck without a copy.",
  },
  {
    icon: 'fa-solid fa-map-pin',
    title: 'Prime Location',
    desc: 'Located on 1st Floor, Velayutha Chetty St — just steps from Egmore Court and Pudupet junction.',
  },
]

function Feature({ icon, title, desc }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-12 h-12 min-w-[48px] bg-primary-light rounded-xl flex items-center justify-center text-primary text-lg">
        <i className={icon} />
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-900 mb-1">{title}</h4>
        <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

export default function WhyUs() {
  return (
    <section id="why" className="py-20 px-5 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left: Features */}
        <div>
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">Fast, Affordable &amp; Reliable</h2>
          <div className="section-divider" />
          <p className="section-sub">
            Our customers keep coming back because we deliver what matters — speed, quality and fair prices.
          </p>
          <div className="flex flex-col gap-7">
            {features.map((f) => (
              <Feature key={f.title} {...f} />
            ))}
          </div>
        </div>

        {/* Right: Shop image with stat card */}
        <div className="relative hidden lg:block">
          <img
            src="/shop.png"
            alt="Spot Copy Centre interior"
            className="w-full rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
          />
          {/* Stat card */}
          <div className="absolute -bottom-6 -left-7 bg-primary text-white rounded-2xl px-6 py-4 shadow-[0_8px_24px_rgba(200,16,46,0.3)] text-center">
            <p className="text-3xl font-extrabold leading-none">7</p>
            <p className="text-xs opacity-90 mt-1">Days Open</p>
          </div>
        </div>

      </div>
    </section>
  )
}
