import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Clock } from "lucide-react";

export default function HeroBanner() {
  const categories = [
    { icon: "🎮", name: "KONSOLE", description: "Nintendo, Sega, Sony", hoverColor: "hover:bg-mario-red" },
    { icon: "💿", name: "GRY", description: "Kasety", hoverColor: "hover:bg-mario-blue" },
    { icon: "🕹️", name: "PADY", description: "Kontrolery", hoverColor: "hover:bg-pipe-green" },
    { icon: "🔧", name: "AKCESORIA", description: "Kable, adaptery", hoverColor: "hover:bg-coin-yellow hover:text-pixel-black" },
    { icon: "⚙️", name: "CZĘŚCI", description: "Zamienne elementy", hoverColor: "hover:bg-mario-red" },
    { icon: "💎", name: "KOLEKCJE", description: "Limitowane serie", hoverColor: "hover:bg-mario-blue" }
  ];

  return (
    <section className="relative pt-8 pb-16 px-6 overflow-hidden" style={{
      backgroundImage: `url('/src/pixel SVG/tło niebieskie.svg')`,
      backgroundSize: '970px auto',
      backgroundPosition: 'center',
      backgroundRepeat: 'repeat-x'
    }}>
      {/* Banner Section */}
      <div className="mx-auto px-6 sm:px-8 lg:px-12 flex justify-center mb-16">
        <div className="flex gap-6">
          {/* Main banner - left side */}
          <div className="flex-shrink-0">
            <div className="relative overflow-hidden rounded-lg" style={{width: '1200px', height: '450px'}}>
              <img 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=450"
                alt="Vintage gaming collection"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent">
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="mb-4">
                    <span className="bg-mario-red text-white px-4 py-2 rounded font-pixel text-sm">
                      ⚡ MEGA WYPRZEDAŻ VINTAGE
                    </span>
                  </div>
                  <h1 className="font-pixel text-4xl lg:text-5xl mb-4 text-shadow-pixel">
                    Arcade Legends<br />
                    <span className="text-coin-yellow">do -70%</span>
                  </h1>
                  <p className="text-xl mb-6 opacity-90">
                    Atari, Commodore, Amiga i więcej!
                  </p>
                  <Button className="mario-button text-white px-8 py-4 font-pixel hover:bg-mario-red text-lg">
                    KOLEKCJA VINTAGE
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="flex-shrink-0 space-y-4">
            {/* First small banner */}
            <div className="relative overflow-hidden rounded-lg" style={{width: '380px', height: '215px'}}>
              <img 
                src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=380&h=215"
                alt="Konsole przenośne"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-pixel text-lg mb-2 text-shadow-pixel">
                    📱 Handheld Zone
                  </h3>
                  <p className="text-sm opacity-90 mb-2">
                    Game Gear, Lynx, Wonder Swan
                  </p>
                  <Button className="mario-button bg-coin-yellow text-pixel-black px-3 py-1 font-pixel hover:bg-coin-yellow text-xs">
                    ODKRYJ →
                  </Button>
                </div>
              </div>
            </div>

            {/* Second small banner */}
            <div className="relative overflow-hidden rounded-lg" style={{width: '380px', height: '215px'}}>
              <img 
                src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=380&h=215"
                alt="Akcesoria retro"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-pixel text-lg mb-2 text-shadow-pixel">
                    🎯 Akcesoria Retro
                  </h3>
                  <p className="text-sm opacity-90">
                    Pady, kable, memory cards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
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