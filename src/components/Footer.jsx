const serviceLinks = [
  'Xerox / Photocopy',
  'Printing',
  'Scanning & Email',
  'Photo Printing',
  'Lamination',
  'DTP / Typing',
]

const quickLinks = [
  { label: 'Home',          href: '#home'     },
  { label: 'Why Choose Us', href: '#why'      },
  { label: 'Working Hours', href: '#hours'    },
  { label: 'Reviews',       href: '#reviews'  },
  { label: 'Location',      href: '#location' },
]

export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-400 pt-14 pb-6 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center text-white text-base">
                <i className="fa-solid fa-print" />
              </div>
              <p className="text-white font-bold text-base">Spot Copy Centre</p>
            </div>
            <p className="text-xs leading-relaxed mb-5 max-w-xs">
              Your reliable one-stop shop for all printing, xerox, scanning and lamination needs
              in Egmore, Chennai. Fast, affordable and open 7 days.
            </p>
            <div className="flex gap-2.5">
              <a
                href="https://www.google.com/maps/search/Spot+Copy+Centre,+No.+2,+1st+Floor,+Velayutha+Chetty+St,+Pudupet,+Komaleeswaranpet,+Egmore,+Chennai,+Tamil+Nadu+600002,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#222] rounded-lg flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-200 text-sm"
                aria-label="Google Maps"
              >
                <i className="fab fa-google" />
              </a>
              <a
                href="tel:09380586873"
                className="w-9 h-9 bg-[#222] rounded-lg flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-200 text-sm"
                aria-label="Call us"
              >
                <i className="fa-solid fa-phone" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="relative text-white text-sm font-semibold pb-2 mb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-7 after:h-0.5 after:bg-primary">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#services" className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-primary transition-colors no-underline">
                    <i className="fa-solid fa-chevron-right text-[0.55rem]" /> {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="relative text-white text-sm font-semibold pb-2 mb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-7 after:h-0.5 after:bg-primary">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-primary transition-colors no-underline">
                    <i className="fa-solid fa-chevron-right text-[0.55rem]" /> {label}
                  </a>
                </li>
              ))}
              <li>
                <a href="tel:09380586873" className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-primary transition-colors no-underline">
                  <i className="fa-solid fa-chevron-right text-[0.55rem]" /> Call Now
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#222] pt-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-center">
          <p className="text-[0.75rem] text-gray-600">
            © {new Date().getFullYear()}{' '}
            <span className="text-primary font-semibold">Spot Copy Centre</span>.
            {' '}All rights reserved.{' '}|{' '}
            Developed by{' '}
            <a
              href="https://www.iniyan-s.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline transition-colors"
            >
              Iniyan S
            </a>
          </p>
          <p className="text-[0.72rem] text-gray-600">
            No. 2, 1st Floor, Velayutha Chetty St, Pudupet, Egmore, Chennai – 600002
          </p>
        </div>

      </div>
    </footer>
  )
}
