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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-pixel text-3xl text-center mb-12 text-pixel-black">
          🎯 KATEGORIE PRODUKTÓW
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className={`pixel-card p-6 text-center ${category.hoverColor} hover:text-white transition-all cursor-pointer`}
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="font-pixel text-sm mb-2">{category.name}</h3>
              <p className="text-xs">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
