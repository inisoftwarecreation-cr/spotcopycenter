const DAYS_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const hoursData = [
  { day: 'Monday',    time: '8:45 AM – 10:00 PM' },
  { day: 'Tuesday',   time: '8:45 AM – 10:00 PM' },
  { day: 'Wednesday', time: '8:45 AM – 10:00 PM' },
  { day: 'Thursday',  time: '8:45 AM – 10:00 PM' },
  { day: 'Friday',    time: '8:45 AM – 10:00 PM' },
  { day: 'Saturday',  time: '8:45 AM – 10:00 PM' },
  { day: 'Sunday',    time: '10:00 AM – 9:00 PM' },
]

const todayName = DAYS_NAMES[new Date().getDay()]

export default function Hours() {
  return (
    <section
      id="hours"
      className="py-20 px-5 md:px-10"
      style={{ background: 'linear-gradient(135deg, #9b0b21, #C8102E)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <span className="inline-block bg-white/20 text-white text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-3">
          Timings
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">Working Hours</h2>
        <div className="w-14 h-1 bg-white/50 rounded-full my-3" />
        <p className="text-white/80 text-sm leading-relaxed max-w-xl mb-12">
          We're open almost every day. Walk in anytime during business hours — no appointment needed.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Hours Table */}
          <div className="bg-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
            {hoursData.map(({ day, time }) => {
              const isToday = day === todayName
              return (
                <div
                  key={day}
                  className={`flex justify-between items-center px-6 py-4 border-b border-white/10 last:border-b-0 transition-colors hover:bg-white/10 ${isToday ? 'bg-white/15' : ''}`}
                >
                  <span className="flex items-center gap-2.5 text-white/90 text-sm font-medium">
                    <i className="fa-regular fa-calendar-check text-white/60 text-xs" />
                    {day}
                    {isToday && (
                      <span className="bg-yellow-300 text-primary-dark text-[0.6rem] font-bold px-2 py-0.5 rounded-lg">
                        Today
                      </span>
                    )}
                  </span>
                  <span className="text-white text-sm font-semibold">{time}</span>
                </div>
              )
            })}
          </div>

          {/* Contact Info */}
          <div className="text-white/90">
            <h3 className="text-xl font-bold text-white mb-5">Visit Us Today</h3>

            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-location-dot text-yellow-300 mt-0.5" />
                <p className="text-sm leading-relaxed">
                  No. 2, 1st Floor, Velayutha Chetty St,<br />
                  Pudupet, Komaleeswaranpet,<br />
                  Egmore, Chennai – 600002
                </p>
              </div>

              <div className="flex items-center gap-3">
                <i className="fa-solid fa-phone text-yellow-300" />
                <a href="tel:09380586873" className="text-sm text-yellow-300 font-semibold hover:underline">
                  093805 86873
                </a>
              </div>

              <div className="flex items-start gap-3">
                <i className="fa-solid fa-circle-info text-yellow-300 mt-0.5" />
                <p className="text-sm leading-relaxed">
                  Walk-in welcome. No appointment needed.<br />
                  Special hours may apply on public holidays.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <i className="fa-solid fa-star text-yellow-300" />
                <p className="text-sm">
                  Rated <strong className="text-white">3.4 ★</strong> on Google with 22 customer reviews.
                </p>
              </div>

              <a
                href="https://www.google.com/maps/search/Spot+Copy+Centre,+No.+2,+1st+Floor,+Velayutha+Chetty+St,+Pudupet,+Komaleeswaranpet,+Egmore,+Chennai,+Tamil+Nadu+600002,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary font-bold text-sm px-6 py-3 rounded-full w-fit shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 mt-2"
              >
                <i className="fa-solid fa-map-location-dot" /> Open in Google Maps
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
