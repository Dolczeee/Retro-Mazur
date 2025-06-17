import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Clock } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative pt-8 pb-0 px-6 overflow-hidden">
      <div className="mx-auto px-6 sm:px-8 lg:px-12 flex justify-center">
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
    </section>
  );
}