import { Button } from "@/components/ui/button";

export default function Categories() {
  const worlds = [
    {
      world: "1-1",
      name: "KONSOLE WORLD",
      description: "Klasyczne konsole Nintendo, Sega, PlayStation",
      color: "bg-mario-red",
      icon: "🏰",
      items: "250+ produktów"
    },
    {
      world: "1-2",
      name: "UNDERGROUND",
      description: "Rzadkie i kolekcjonerskie gry",
      color: "bg-pixel-black",
      icon: "🍄",
      items: "500+ gier"
    },
    {
      world: "1-3",
      name: "SKY WORLD",
      description: "Akcesoria i kontrolery",
      color: "bg-mario-blue",
      icon: "☁️",
      items: "150+ akcesoriów"
    },
    {
      world: "1-4",
      name: "CASTLE",
      description: "Ekskluzywne kolekcje i zestawy",
      color: "bg-pipe-green",
      icon: "👑",
      items: "Limitowane"
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-b from-mario-blue to-mario-blue/80">
      {/* Background clouds decoration */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="/src/pixel SVG/chmurka.svg" 
          alt="" 
          className="absolute top-10 left-10 w-32 h-20 transform rotate-12"
        />
        <img 
          src="/src/pixel SVG/chmurka.svg" 
          alt="" 
          className="absolute top-20 right-20 w-24 h-16 transform -rotate-6"
        />
        <img 
          src="/src/pixel SVG/chmurka.svg" 
          alt="" 
          className="absolute bottom-32 left-1/4 w-40 h-24 transform rotate-3"
        />
        <img 
          src="/src/pixel SVG/chmurka.svg" 
          alt="" 
          className="absolute bottom-20 right-10 w-28 h-18"
        />
        <img 
          src="/src/pixel SVG/chmurka.svg" 
          alt="" 
          className="absolute top-1/2 left-0 w-36 h-22 transform -rotate-12"
        />
        <img 
          src="/src/pixel SVG/chmurka.svg" 
          alt="" 
          className="absolute top-1/3 right-0 w-32 h-20 transform rotate-8"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="relative inline-block mb-6">
            {/* Cloud background */}
            <div className="relative">
              <img 
                src="/src/pixel SVG/chmurka.svg" 
                alt="Cloud" 
                className="w-96 h-32 object-contain mx-auto filter drop-shadow-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="font-pixel text-xl lg:text-2xl text-pixel-black text-shadow-white tracking-wider px-4">
                  ☁️ WYBIERZ POZIOM
                </h2>
              </div>
            </div>
          </div>
          
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {worlds.map((world, index) => (
            <div
              key={index}
              className={`${world.color} text-white p-6 border-4 border-white transform hover:scale-105 transition-all duration-300 cursor-pointer group relative`}
            >
              {/* World number */}
              <div className="font-pixel text-xs text-coin-yellow mb-2 bg-pixel-black px-2 py-1 inline-block">
                WORLD {world.world}
              </div>

              {/* Icon */}
              <div className="text-5xl mb-4 text-center power-up">{world.icon}</div>

              {/* Title */}
              <h3 className="font-pixel text-lg mb-3 text-center">
                {world.name}
              </h3>

              {/* Description */}
              <p className="text-sm mb-4 text-center opacity-90">
                {world.description}
              </p>

              {/* Items count */}
              <div className="text-center font-pixel text-xs text-coin-yellow">
                {world.items}
              </div>

              {/* Enter button */}
              <div className="mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Button className="bg-coin-yellow text-pixel-black font-pixel text-xs px-4 py-2 mario-button">
                  ENTER →
                </Button>
              </div>

              {/* Mario-style decoration */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-coin-yellow"></div>
              <div className="absolute bottom-2 left-2 w-2 h-2 bg-coin-yellow"></div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}