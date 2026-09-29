import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className={`fixed bottom-7 right-7 z-50 w-11 h-11 bg-primary text-white rounded-full shadow-[0_4px_16px_rgba(200,16,46,0.4)] flex items-center justify-center text-base hover:-translate-y-1 hover:bg-primary-dark transition-all duration-200 ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
    >
      <i className="fa-solid fa-chevron-up" />
    </button>
  )
}
