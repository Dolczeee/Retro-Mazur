import { Button } from "@/components/ui/button";

export default function HeroBanner() {
  return (
    <section className="gradient-mario py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-pixel text-white text-4xl lg:text-6xl mb-6 leading-tight text-shadow-pixel">
              POWRÓT DO<br />
              <span className="text-coin-yellow">RETRO GIER!</span>
            </h1>
            <p className="text-white text-lg mb-8 font-medium">
              Odkryj nostalgiczne światy klasycznych gier! Konsole Nintendo, Sega, PlayStation i wiele więcej. 
              Najlepsza jakość, oryginalne produkty, szybka dostawa.
            </p>
            <div className="flex space-x-4">
              <Button className="mario-button text-white px-8 py-4 font-pixel text-lg hover:bg-mario-red">
                🎮 ZOBACZ OFERTĘ
              </Button>
              <Button className="bg-coin-yellow text-pixel-black px-8 py-4 font-pixel text-lg mario-button hover:bg-coin-yellow">
                💰 PROMOCJE -50%
              </Button>
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
