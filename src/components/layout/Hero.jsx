export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-secondary to-gray-800"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-yellow-400 opacity-5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight animate-fade-in-up">
            <span className="block">Authentic</span>
            <span className="block text-primary">Cuisine</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90 animate-fade-in-up-delay-1">
            Experience the finest dining with our seasonal menu crafted from local ingredients and traditional techniques
          </p>
          
          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up-delay-2">
            <button className="w-full sm:w-auto bg-primary hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg">
              Reserve a Table
            </button>
            <button className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-secondary font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg">
              View Menu
            </button>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}