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
      <div className="absolute inset-0 opacity-15">
        <img 
          src="/src/pixel SVG/chmurka.svg" 
          alt="" 
          className="absolute top-16 left-16 w-20 h-13"
        />
        <img 
          src="/src/pixel SVG/chmurka.svg" 
          alt="" 
          className="absolute top-24 right-24 w-22 h-14"
        />
        <img 
          src="/src/pixel SVG/chmurka.svg" 
          alt="" 
          className="absolute bottom-24 left-1/3 w-24 h-15"
        />
        <img 
          src="/src/pixel SVG/chmurka.svg" 
          alt="" 
          className="absolute bottom-32 right-16 w-20 h-13"
        />
        <img 
          src="/src/pixel SVG/chmurka.svg" 
          alt="" 
          className="absolute top-1/2 left-8 w-18 h-12"
        />
        <img 
          src="/src/pixel SVG/chmurka.svg" 
          alt="" 
          className="absolute top-1/3 right-1/3 w-19 h-12"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-4">
          <div className="relative inline-block mb-2">
            {/* Simple text banner */}
            <div className="bg-white/90 backdrop-blur-sm rounded-lg px-6 py-3 shadow-lg border-2 border-white">
              <h2 className="font-pixel text-lg lg:text-xl text-pixel-black tracking-wider">
                WYBIERZ SWÓJ ŚWIAT
              </h2>
            </div>
          </div>
          
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {worlds.map((world, index) => (
            <div
              key={index}
              className={`${world.color} text-white border-2 border-white transform hover:scale-[1.02] transition-all duration-300 cursor-pointer group relative p-4`}
            >
              {/* Top - World number */}
              <div className="font-pixel text-xs text-coin-yellow mb-3 bg-pixel-black px-2 py-0.5 inline-block">
                WORLD {world.world}
              </div>
              
              <div className="flex items-center">
                {/* Left - Icon */}
                <div className="text-3xl power-up mr-4">
                  {world.icon}
                </div>
                
                {/* Middle - Name and Description */}
                <div className="flex-grow">
                  <h3 className="font-pixel text-sm mb-1">
                    {world.name}
                  </h3>
                  <p className="text-xs mb-1 opacity-90 leading-tight">
                    {world.description}
                  </p>
                  <div className="font-pixel text-xs text-coin-yellow">
                    {world.items}
                  </div>
                </div>

                {/* Right - Enter button */}
                <div className="flex-shrink-0 ml-4 opacity-70 group-hover:opacity-100 transition-opacity">
                  <Button className="bg-coin-yellow text-pixel-black font-pixel text-xs px-4 py-2 mario-button">
                    ENTER →
                  </Button>
                </div>
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