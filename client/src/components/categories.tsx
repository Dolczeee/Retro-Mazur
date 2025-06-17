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
    <section className="pt-8 pb-16 bg-retro-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-pixel text-3xl text-center mb-12 text-pixel-black">
          🎯 KATEGORIE PRODUKTÓW
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className={`pixel-card p-6 text-center group cursor-pointer transition-all duration-300 ${category.hoverColor} hover:transform hover:scale-105 relative overflow-hidden bg-white hover:shadow-xl border-4 border-pixel-black`}
            >
              {/* Mario-style border decoration */}
              <div className="absolute top-1 left-1 w-4 h-4 bg-coin-yellow border-2 border-pixel-black rounded-sm"></div>
              <div className="absolute top-1 right-1 w-4 h-4 bg-coin-yellow border-2 border-pixel-black rounded-sm"></div>
              <div className="absolute bottom-1 left-1 w-4 h-4 bg-coin-yellow border-2 border-pixel-black rounded-sm"></div>
              <div className="absolute bottom-1 right-1 w-4 h-4 bg-coin-yellow border-2 border-pixel-black rounded-sm"></div>

              {/* Power-up background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-mario-blue opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

              <div className="text-5xl mb-4 mario-jump group-hover:power-up relative z-10">{category.icon}</div>
              <h3 className="font-pixel text-lg mb-2 text-pixel-black group-hover:text-white transition-colors relative z-10">
                {category.name}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-200 transition-colors font-medium text-sm relative z-10">
                {category.description}
              </p>

              {/* Mario-style coin indicator with bounce effect */}
              <div className="mt-4 flex justify-center relative z-10">
                <span className="text-coin-yellow coin-spin group-hover:text-white transition-all duration-300 transform group-hover:scale-125">🪙</span>
              </div>

              {/* Pixel-style shine effect */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-white opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}