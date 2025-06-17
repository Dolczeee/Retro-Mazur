import { Button } from "@/components/ui/button";

export default function HeroBanner() {
  return (
    <section className="gradient-mario py-16 relative overflow-hidden">
      {/* Mario-themed background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl animate-bounce">🍄</div>
        <div className="absolute top-20 right-20 text-4xl animate-pulse">⭐</div>
        <div className="absolute bottom-20 left-1/4 text-5xl animate-bounce">🪙</div>
        <div className="absolute top-1/3 right-1/3 text-3xl animate-pulse">🌸</div>
        <div className="absolute bottom-10 right-10 text-6xl animate-bounce">🏰</div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <span className="font-pixel text-coin-yellow text-xl bg-mario-red px-4 py-2 border-3 border-pixel-black mb-4 inline-block animate-pulse">
                🏆 WORLD 1-1
              </span>
            </div>
            <h1 className="font-pixel text-white text-5xl lg:text-7xl mb-8 leading-tight text-shadow-pixel">
              IT'S-A ME,<br />
              <span className="text-coin-yellow animate-bounce inline-block">RETRO!</span>
            </h1>
            <p className="text-white text-xl mb-10 font-medium bg-pixel-black/30 p-6 border-l-4 border-coin-yellow leading-relaxed">
              🎮 Wejdź do magicznego świata retro gier! <br />
              🏰 Przygoda zaczyna się tutaj - konsole Nintendo, Sega i PlayStation. <br />
              💰 Zbieraj punkty i monety za każdy zakup!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="mario-button text-white px-8 py-4 font-pixel text-lg hover:bg-mario-red transform hover:scale-105 transition-transform">
                🎮 START GAME!
              </Button>
              <Button className="bg-coin-yellow text-pixel-black px-8 py-4 font-pixel text-lg mario-button hover:bg-coin-yellow transform hover:scale-105 transition-transform">
                ⭐ POWER-UP -50%
              </Button>
              <Button className="bg-pipe-green text-white px-8 py-4 font-pixel text-lg mario-button hover:bg-pipe-green transform hover:scale-105 transition-transform">
                🍄 BONUS STAGE
              </Button>
            </div>
            
            {/* Mario-style status bar */}
            <div className="mt-8 bg-pixel-black text-white p-4 font-pixel text-sm border-3 border-white">
              <div className="grid grid-cols-3 gap-4">
                <div>MARIO<br /><span className="text-coin-yellow">🪙 000000</span></div>
                <div className="text-center">WORLD<br /><span className="text-pipe-green">🌍 1-1</span></div>
                <div className="text-right">TIME<br /><span className="text-mario-red">⏰ ∞</span></div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 mb-8">
              <img 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250" 
                alt="Retro gaming console collection" 
                className="pixel-card rounded-lg float-slow"
              />
              <img 
                src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250" 
                alt="Vintage game cartridges" 
                className="pixel-card rounded-lg slide-in"
              />
              <img 
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250" 
                alt="Classic arcade machine" 
                className="pixel-card rounded-lg pulse-slow"
              />
              <img 
                src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250" 
                alt="Retro handheld games" 
                className="pixel-card rounded-lg float-slow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
