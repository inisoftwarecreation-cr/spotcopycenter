const services = [
  {
    icon: 'fa-solid fa-copy',
    title: 'Xerox / Photocopy',
    desc: 'High-quality B&W and color photocopying at the most affordable rates in Egmore.',
  },
  {
    icon: 'fa-solid fa-print',
    title: 'Printing',
    desc: 'Document, photo and presentation printing in both black & white and full color.',
  },
  {
    icon: 'fa-solid fa-scanner',
    title: 'Scanning',
    desc: 'Scan your documents, certificates and marksheets — with email delivery available.',
  },
  {
    icon: 'fa-solid fa-image',
    title: 'Photo Printing',
    desc: 'Passport size, ID card photos and custom-size photo prints at quick turnaround.',
  },
  {
    icon: 'fa-solid fa-fire-flame-curved',
    title: 'Lamination',
    desc: 'All-type lamination — ID cards, certificates, photos and documents of any size.',
  },
  {
    icon: 'fa-solid fa-keyboard',
    title: 'DTP / Typing',
    desc: 'Professional document typing and desktop publishing work handled quickly.',
  },
  {
    icon: 'fa-solid fa-envelope-open-text',
    title: 'Email & Internet',
    desc: 'Scan-and-send via email, and internet services available for your convenience.',
  },
  {
    icon: 'fa-solid fa-graduation-cap',
    title: 'University Docs',
    desc: 'Hall tickets, mark sheets, applications and all university-related printing needs.',
  },
]

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="group bg-white rounded-2xl p-7 text-center shadow-sm border-2 border-transparent hover:border-primary hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(200,16,46,0.12)] transition-all duration-300 cursor-default">
      <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
        <i className={icon} />
      </div>
      <h3 className="text-sm font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-20 px-5 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <span className="section-tag">What We Offer</span>
        <h2 className="section-title">Our Services</h2>
        <div className="section-divider" />
        <p className="section-sub">
          From everyday photocopying to professional document handling — we've got you covered at unbeatable prices.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
