export default function MenuSection() {
  const menuItems = [
    {
      name: "Truffle Pasta",
      description: "Handmade pasta with black truffle and parmesan, finished with extra virgin olive oil",
      price: "$24",
      category: "Pasta",
      popular: true
    },
    {
      name: "Grilled Salmon",
      description: "Fresh Atlantic salmon with lemon butter sauce and seasonal vegetables",
      price: "$28",
      category: "Seafood",
      popular: false
    },
    {
      name: "Filet Mignon",
      description: "8oz premium cut with red wine reduction and roasted fingerling potatoes",
      price: "$36",
      category: "Meat",
      popular: true
    },
    {
      name: "Lobster Risotto",
      description: "Creamy arborio rice with fresh lobster and saffron",
      price: "$32",
      category: "Seafood",
      popular: false
    },
    {
      name: "Duck Confit",
      description: "Traditional French duck leg with cherry gastrique",
      price: "$29",
      category: "Meat",
      popular: false
    },
    {
      name: "Vegetarian Tasting",
      description: "Chef's selection of seasonal vegetables and grains",
      price: "$26",
      category: "Vegetarian",
      popular: true
    }
  ]

  return (
    <section id="menu" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
            Our Signature Dishes
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each dish is carefully crafted with the finest ingredients and presented with artistic flair
          </p>
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {menuItems.map((item, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Popular badge */}
              {item.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-primary text-black text-xs font-bold px-2 py-1 rounded-full">
                    Popular
                  </span>
                </div>
              )}
              
              {/* Card content */}
              <div className="p-6 sm:p-8 relative">
                {/* Category */}
                <span className="inline-block text-sm text-secondary font-semibold uppercase tracking-wide mb-2">
                  {item.category}
                </span>
                
                {/* Dish name */}
                <h3 className="text-xl sm:text-2xl font-serif text-gray-900 mb-3 group-hover:text-secondary transition-colors duration-300">
                  {item.name}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                {/* Price */}
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">
                    {item.price}
                  </span>
                  <button className="opacity-0 group-hover:opacity-100 bg-secondary text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    Order Now
                  </button>
                </div>
              </div>
              
              {/* Hover effect line */}
              <div className="h-1 bg-gradient-to-r from-primary to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <button className="group inline-flex items-center gap-2 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 font-semibold text-lg">
            View Full Menu
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}