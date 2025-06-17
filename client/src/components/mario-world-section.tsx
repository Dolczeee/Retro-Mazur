
import { Button } from "@/components/ui/button";

export default function MarioWorldSection() {
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
    <section className="py-16 bg-gradient-to-b from-mario-blue to-pipe-green relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-8xl">🌊</div>
        <div className="absolute top-20 right-20 text-6xl">☁️</div>
        <div className="absolute bottom-20 left-1/4 text-7xl">🌱</div>
        <div className="absolute bottom-10 right-10 text-8xl">🏰</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="font-pixel text-white text-sm mb-2 bg-mario-red px-4 py-2 inline-block border-3 border-white">
            🌍 WYBIERZ SWÓJ ŚWIAT
          </div>
          <h2 className="font-pixel text-white text-3xl lg:text-5xl mb-4 text-shadow-pixel">
            MARIO RETRO WORLDS
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Każdy świat skrywa inne skarby retro gamingu. Gdzie rozpoczniesz swoją przygodę?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {worlds.map((world, index) => (
            <div
              key={index}
              className={`${world.color} text-white p-6 border-3 border-white transform hover:scale-105 transition-all duration-300 cursor-pointer group relative`}
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

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Button className="bg-coin-yellow text-pixel-black font-pixel text-lg px-8 py-4 mario-button transform hover:scale-105 transition-transform">
            🚀 START YOUR ADVENTURE!
          </Button>
        </div>
      </div>
    </section>
  );
}
