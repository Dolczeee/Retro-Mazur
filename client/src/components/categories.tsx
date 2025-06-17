export default function Categories() {
  const categories = [
    { icon: "🎮", name: "KONSOLE", description: "Nintendo, Sega, Sony", hoverColor: "hover:bg-mario-red" },
    { icon: "💿", name: "GRY", description: "Kasety", hoverColor: "hover:bg-mario-blue" },
    { icon: "🕹️", name: "PADY", description: "Kontrolery", hoverColor: "hover:bg-pipe-green" },
    { icon: "🔧", name: "AKCESORIA", description: "Kable, adaptery", hoverColor: "hover:bg-coin-yellow hover:text-pixel-black" },
    { icon: "⚙️", name: "CZĘŚCI", description: "Zamienne elementy", hoverColor: "hover:bg-mario-red" },
    { icon: "💎", name: "KOLEKCJE", description: "Limitowane serie", hoverColor: "hover:bg-mario-blue" }
  ];

  return (
    <section className="py-16" style={{
      backgroundImage: `url('/src/pixel SVG/tło niebieskie.svg')`,
      backgroundSize: '970px auto',
      backgroundPosition: 'center',
      backgroundRepeat: 'repeat-x'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-pixel text-3xl text-center mb-12 text-pixel-black">
          🎯 KATEGORIE PRODUKTÓW
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className={`pixel-card p-6 text-center group cursor-pointer transition-all duration-300 ${category.hoverColor} hover:transform hover:scale-105 relative overflow-hidden`}
            >
              {/* Mario-style border decoration */}
              <div className="absolute top-2 left-2 w-3 h-3 bg-coin-yellow border border-pixel-black"></div>
              <div className="absolute top-2 right-2 w-3 h-3 bg-coin-yellow border border-pixel-black"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 bg-coin-yellow border border-pixel-black"></div>
              <div className="absolute bottom-2 right-2 w-3 h-3 bg-coin-yellow border border-pixel-black"></div>

              <div className="text-5xl mb-4 mario-jump group-hover:power-up">{category.icon}</div>
              <div className="font-pixel text-xs text-mario-blue mb-1 group-hover:text-white transition-colors">
                {category.subtitle}
              </div>
              <h3 className="font-pixel text-lg mb-2 text-pixel-black group-hover:text-white transition-colors">
                {category.name}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-200 transition-colors font-medium">
                {category.description}
              </p>

              {/* Mario-style coin indicator */}
              <div className="mt-4 flex justify-center">
                <span className="text-coin-yellow coin-spin group-hover:text-white transition-colors">🪙</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}