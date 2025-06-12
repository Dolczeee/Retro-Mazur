export default function BrandsSection() {
  const brands = [
    {
      name: "Nintendo",
      logo: "🎮",
      description: "Kultowe konsole od NES do Switch",
      color: "mario-red"
    },
    {
      name: "Sega",
      logo: "🔵",
      description: "Genesis, Dreamcast i więcej",
      color: "mario-blue"
    },
    {
      name: "Sony",
      logo: "🎯",
      description: "PlayStation 1, 2, PSP",
      color: "pipe-green"
    },
    {
      name: "Atari",
      logo: "🕹️",
      description: "Pionier gier wideo",
      color: "coin-yellow"
    },
    {
      name: "Commodore",
      logo: "💻",
      description: "C64, Amiga i klasyki",
      color: "mario-red"
    },
    {
      name: "SNK",
      logo: "⚡",
      description: "Neo Geo i arcade",
      color: "mario-blue"
    }
  ];

  return (
    <section className="py-16 bg-pixel-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-pixel text-3xl text-center mb-12 text-white">
          🏷️ NASZE MARKI
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="pixel-card p-6 text-center bg-white hover:bg-gray-100 transition-all cursor-pointer"
            >
              <div className="text-4xl mb-3">{brand.logo}</div>
              <h3 className={`font-pixel text-sm mb-2 ${brand.color}`}>
                {brand.name}
              </h3>
              <p className="text-xs text-gray-600">{brand.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}