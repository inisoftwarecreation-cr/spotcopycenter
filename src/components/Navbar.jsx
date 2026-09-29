import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why' },
  { label: 'Hours', href: '#hours' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Location', href: '#location' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setIsOpen(false)

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'shadow-[0_2px_20px_rgba(200,16,46,0.12)]' : 'shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-[68px] flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 no-underline">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white text-lg">
            <i className="fa-solid fa-print" />
          </div>
          <div>
            <p className="font-bold text-primary text-[1rem] leading-none">Spot Copy Centre</p>
            <p className="text-gray-400 text-[0.68rem] font-normal">Egmore, Chennai</p>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="relative text-gray-700 text-sm font-medium no-underline group transition-colors hover:text-primary"
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-200 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="tel:09380586873"
              className="flex items-center gap-2 bg-primary text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-primary-dark transition-colors duration-200"
            >
              <i className="fa-solid fa-phone text-xs" /> Call Now
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer bg-transparent border-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-primary rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-primary rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-primary rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <ul className="flex flex-col gap-1 px-5 py-4 list-none m-0">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={handleLinkClick}
                className="block py-2.5 text-sm text-gray-700 font-medium no-underline hover:text-primary transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="tel:09380586873"
              onClick={handleLinkClick}
              className="flex items-center gap-2 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full w-fit hover:bg-primary-dark transition-colors"
            >
              <i className="fa-solid fa-phone text-xs" /> Call Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
