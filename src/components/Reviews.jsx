const ratingBars = [
  { star: 5, pct: 45 },
  { star: 4, pct: 20 },
  { star: 3, pct: 10 },
  { star: 2, pct: 8  },
  { star: 1, pct: 17 },
]

const reviews = [
  {
    name: 'Taufiq',
    meta: '5 months ago',
    stars: 5,
    text: '"Literally my last time saver fr they r so quick and efficient and cost friendly. I always come here with my friends for any of my uni related things and regardless of the time they will give the customers what they want. Really please keep up this good work."',
    positive: true,
  },
  {
    name: 'Ramesh P',
    meta: '2 months ago · Local Guide',
    stars: 4,
    text: '"Quick service and available on Sunday. Great to have a reliable copy centre that\'s open on weekends when everything else is closed."',
    positive: true,
  },
  {
    name: 'Jayan Jp',
    meta: '7 years ago · Local Guide · 282 reviews',
    stars: 5,
    text: '"Good view. Color and B&W Xerox, BPO typing, photo printing, all type lamination done here. Very clean shop with helpful staff. Very close to Egmore Court, Adithanar Salai, Pudupet."',
    positive: true,
  },
]

function StarRow({ count }) {
  return (
    <span className="text-yellow-400 text-sm">
      {'★'.repeat(count)}{'☆'.repeat(5 - count)}
    </span>
  )
}

function ReviewCard({ name, meta, stars, text, positive }) {
  return (
    <div className={`bg-white rounded-2xl p-6 shadow-sm border-l-4 hover:-translate-y-1 hover:shadow-xl transition-all duration-200 ${positive ? 'border-primary' : 'border-gray-200'}`}>
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-base">
            {name[0]}
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">{name}</p>
            <p className="text-[0.68rem] text-gray-400">{meta}</p>
          </div>
        </div>
        <StarRow count={stars} />
      </div>
      <p className="text-xs text-gray-500 leading-relaxed">{text}</p>
      <div className="flex items-center gap-1.5 mt-3 text-[0.67rem] text-gray-400">
        <i className="fab fa-google text-[#4285F4]" /> Google Review
      </div>
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 px-5 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <span className="section-tag">Testimonials</span>
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="section-divider" />

        {/* Summary row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-10">
          <p className="text-gray-500 text-sm max-w-sm">
            Real reviews from Google — hear directly from our valued customers.
          </p>

          {/* Rating summary card */}
          <div className="flex items-center gap-6 bg-white rounded-2xl px-6 py-5 shadow-sm shrink-0">
            <p className="text-5xl font-extrabold text-primary leading-none">3.4</p>
            <div>
              <p className="text-yellow-400 text-lg mb-1">★★★☆☆</p>
              <p className="text-[0.72rem] text-gray-400">Based on 22 Reviews</p>
            </div>
            <div className="flex flex-col gap-1.5 min-w-[140px]">
              {ratingBars.map(({ star, pct }) => (
                <div key={star} className="flex items-center gap-2">
                  <span className="text-[0.7rem] text-gray-400 w-8">{star} ★</span>
                  <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Review cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <ReviewCard key={r.name} {...r} />
          ))}
        </div>
      </div>
    </section>
  )
}
