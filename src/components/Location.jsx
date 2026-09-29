const infoCards = [
  {
    icon: 'fa-solid fa-location-dot',
    title: 'Address',
    content: (
      <>
        No. 2, 1st Floor, Velayutha Chetty St,<br />
        Pudupet, Komaleeswaranpet,<br />
        Egmore, Chennai, Tamil Nadu – 600002
      </>
    ),
  },
  {
    icon: 'fa-solid fa-phone',
    title: 'Phone',
    content: (
      <a href="tel:09380586873" className="text-primary font-semibold hover:underline text-xs">
        093805 86873
      </a>
    ),
  },
  {
    icon: 'fa-solid fa-clock',
    title: 'Working Hours',
    content: (
      <>
        Mon – Sat: 8:45 AM – 10:00 PM<br />
        Sunday: 10:00 AM – 9:00 PM
      </>
    ),
  },
  {
    icon: 'fa-solid fa-landmark',
    title: 'Nearby Landmarks',
    content: (
      <>
        Egmore Court · Adithanar Salai<br />
        Pudupet Junction
      </>
    ),
  },
]

function InfoCard({ icon, title, content }) {
  return (
    <div className="flex gap-4 items-start bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-primary transition-colors duration-200">
      <div className="w-11 h-11 min-w-[44px] bg-primary-light rounded-xl flex items-center justify-center text-primary text-base">
        <i className={icon} />
      </div>
      <div>
        <p className="text-xs font-semibold text-gray-900 mb-1">{title}</p>
        <div className="text-xs text-gray-500 leading-relaxed">{content}</div>
      </div>
    </div>
  )
}

export default function Location() {
  return (
    <section id="location" className="py-20 px-5 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <span className="section-tag">Find Us</span>
        <h2 className="section-title">Our Location</h2>
        <div className="section-divider" />
        <p className="section-sub">
          Conveniently located near Egmore Court on 1st Floor — easy to find and easy to reach.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 items-start">

          {/* Info Cards */}
          <div className="flex flex-col gap-4">
            {infoCards.map((c) => (
              <InfoCard key={c.title} {...c} />
            ))}
            <a
              href="https://www.google.com/maps/search/Spot+Copy+Centre,+No.+2,+1st+Floor,+Velayutha+Chetty+St,+Pudupet,+Komaleeswaranpet,+Egmore,+Chennai,+Tamil+Nadu+600002,+India"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red w-fit mt-1"
            >
              <i className="fa-solid fa-map-location-dot" /> Open in Google Maps
            </a>
          </div>

          {/* Google Maps Embed */}
          <div className="rounded-2xl overflow-hidden shadow-[0_8px_28px_rgba(0,0,0,0.10)] h-[380px]">
            <iframe
              src="https://maps.google.com/maps?q=Spot+Copy+Centre,+No.+2,+1st+Floor,+Velayutha+Chetty+St,+Pudupet,+Komaleeswaranpet,+Egmore,+Chennai,+Tamil+Nadu+600002,+India&hl=en&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Spot Copy Centre Location Map"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
