
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Clock } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="bg-retro-beige py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main banner - left side */}
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-mario-red to-mario-blue p-8 text-white">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-4 right-4 text-4xl animate-bounce">🎮</div>
                <div className="absolute bottom-4 left-4 text-3xl animate-pulse">⭐</div>
                <div className="absolute top-1/2 right-1/4 text-2xl animate-bounce">🪙</div>
              </div>
              
              <div className="relative z-10">
                <div className="mb-4">
                  <span className="bg-coin-yellow text-pixel-black px-3 py-1 rounded font-pixel text-sm">
                    🏆 MEGA PROMOCJA
                  </span>
                </div>
                
                <h1 className="font-pixel text-3xl lg:text-4xl mb-4 text-shadow-pixel">
                  Retro Gaming<br />
                  <span className="text-coin-yellow">do -50%</span>
                </h1>
                
                <p className="text-lg mb-6 opacity-90">
                  Konsole Nintendo, Sega, PlayStation i wiele więcej!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="mario-button text-white px-6 py-3 font-pixel hover:bg-mario-red">
                    ZOBACZ OFERTĘ
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button className="bg-coin-yellow text-pixel-black px-6 py-3 font-pixel hover:bg-coin-yellow">
                    🎯 NOWOŚCI
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right sidebar with blog links */}
          <div className="space-y-4">
            {/* Blog post 1 */}
            <div className="pixel-card bg-white p-4 cursor-pointer hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-3">
                <div className="w-16 h-16 bg-mario-blue rounded flex items-center justify-center text-white text-2xl">
                  📰
                </div>
                <div className="flex-1">
                  <h3 className="font-pixel text-sm mb-2 leading-relaxed">
                    Historia konsol Nintendo
                  </h3>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>2 dni temu</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <span className="text-mario-red text-xs font-pixel">CZYTAJ WIĘCEJ</span>
                    <ArrowRight className="w-3 h-3 ml-1 text-mario-red" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Blog post 2 */}
            <div className="pixel-card bg-white p-4 cursor-pointer hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-3">
                <div className="w-16 h-16 bg-pipe-green rounded flex items-center justify-center text-white text-2xl">
                  🎯
                </div>
                <div className="flex-1">
                  <h3 className="font-pixel text-sm mb-2 leading-relaxed">
                    Top 10 gier retro
                  </h3>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>5 dni temu</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <span className="text-mario-red text-xs font-pixel">CZYTAJ WIĘCEJ</span>
                    <ArrowRight className="w-3 h-3 ml-1 text-mario-red" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Special offer box */}
            <div className="pixel-card bg-gradient-to-br from-coin-yellow to-yellow-400 p-4 text-center">
              <div className="text-2xl mb-2">🎁</div>
              <h3 className="font-pixel text-sm mb-2 text-pixel-black">
                DARMOWA DOSTAWA
              </h3>
              <p className="text-xs text-gray-700 mb-2">
                Od 199 zł
              </p>
              <div className="flex items-center justify-center">
                <Star className="w-3 h-3 text-orange-500 mr-1" />
                <span className="text-xs font-pixel text-orange-600">SPRAWDŹ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
