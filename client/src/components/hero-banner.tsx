import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Clock } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative py-16 px-4 overflow-hidden" style={{
      backgroundImage: `url('/src/pixel SVG/tło niebieskie.svg')`,
      backgroundSize: '400px auto',
      backgroundPosition: 'center',
      backgroundRepeat: 'repeat-x'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main banner - left side */}
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-lg h-96">
              <img 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                alt="Retro gaming collection"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent">
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="mb-4">
                    <span className="bg-mario-red text-white px-3 py-1 rounded font-pixel text-sm">
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
                  <Button className="mario-button text-white px-6 py-3 font-pixel hover:bg-mario-red">
                    ZOBACZ OFERTĘ
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right sidebar with blog links and offers */}
          <div className="space-y-4">
            {/* Featured article */}
            <div className="relative overflow-hidden rounded-lg h-44">
              <img 
                src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=180"
                alt="Game Boy collection"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-pixel text-sm mb-2">
                    Historia Game Boy
                  </h3>
                  <div className="flex items-center text-xs opacity-80">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>2 dni temu</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Second article */}
            <div className="relative overflow-hidden rounded-lg h-44">
              <img 
                src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=180"
                alt="PlayStation retro"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-pixel text-sm mb-2">
                    PlayStation Retro
                  </h3>
                  <div className="flex items-center text-xs opacity-80">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>5 dni temu</span>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}