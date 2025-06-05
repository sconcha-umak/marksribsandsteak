export default function Testimonials() {
  const testimonials = [
    {
      quote: "The best dining experience I've had this year! Every detail was perfect, from the ambiance to the exceptional service.",
      author: "Sarah Johnson",
      role: "Food Critic",
      rating: 5,
      image: "SJ"
    },
    {
      quote: "Every dish was a masterpiece. The chef's creativity and attention to detail truly shines through. Will definitely return!",
      author: "Michael Chen",
      role: "Regular Customer",
      rating: 5,
      image: "MC"
    },
    {
      quote: "Outstanding flavors and presentation. The staff made our anniversary dinner absolutely unforgettable.",
      author: "Emily Rodriguez",
      role: "Special Occasion Diner",
      rating: 5,
      image: "ER"
    }
  ]

  const StarRating = ({ rating }) => {
    return (
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-primary' : 'text-gray-400'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    )
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-secondary via-red-900 to-secondary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white mb-4">
            What Our Guests Say
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our valued customers
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 sm:p-8 hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2 border border-white border-opacity-20 hover:shadow-2xl"
            >
              {/* Quote icon */}
              <div className="text-primary mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>

              {/* Rating */}
              <StarRating rating={testimonial.rating} />
              
              {/* Quote */}
              <blockquote className="text-white text-lg italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Author info */}
              <div className="flex items-center">
                {/* Avatar */}
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-black font-bold text-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                  {testimonial.image}
                </div>
                
                {/* Author details */}
                <div>
                  <p className="font-bold text-white text-lg">
                    {testimonial.author}
                  </p>
                  <p className="text-primary text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-xl"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-white text-lg mb-6">
            Ready to create your own memorable experience?
          </p>
          <button className="bg-primary hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg">
            Book Your Table
          </button>
        </div>
      </div>
    </section>
  )
}