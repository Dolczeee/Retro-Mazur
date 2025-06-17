import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Clock } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative pt-8 pb-0 px-6 overflow-hidden">
      {/* Background clouds decoration */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="/src/pixel SVG/chmurka.svg" 
          alt="" 
          className="absolute top-12 left-12 w-24 h-16"
        />
        <img 
          src="/src/pixel SVG/chmurka.svg" 
          alt="" 
          className="absolute top-32 right-20 w-28 h-18"
        />
        <img 
          src="/src/pixel SVG/chmurka.svg" 
          alt="" 
          className="absolute bottom-20 left-1/4 w-32 h-20"
        />
      </div>
      
      <div className="mx-auto px-6 sm:px-8 lg:px-12 flex justify-center relative z-10">
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
                <div className="absolute bottom-8 left-8 text-white max-w-2xl">
                  <h1 className="font-pixel text-4xl lg:text-5xl mb-6 text-shadow-pixel">
                    <span className="text-coin-yellow">Odkryj Klasyki</span><br />
                    <span className="text-white text-2xl lg:text-3xl">Retro Gamingu</span>
                  </h1>
                  
                  <div className="mb-6">
                    <p className="text-lg mb-3 opacity-95 leading-relaxed">
                      Największa kolekcja vintage gaming w Polsce! Oryginalne konsole Atari 2600, 
                      Commodore 64, Amiga 500, Nintendo NES, Sega Genesis i setki klasycznych gier.
                    </p>
                    <p className="text-base opacity-90 leading-relaxed">
                      Wszystkie produkty sprawdzone i gotowe do gry. Idealne dla kolekcjonerów 
                      i miłośników retro gamingu.
                    </p>
                  </div>
                  
                  
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
    </section>
  );
}