import { Button } from "@/components/ui/button";

export default function PromotionalBanners() {
  return (
    <section className="py-12 bg-pixel-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="pixel-card p-8 text-center relative overflow-hidden" 
               style={{background: 'linear-gradient(135deg, #e53e3e 0%, #3182ce 100%)'}}>
            <h3 className="font-pixel text-2xl mb-4 text-white text-shadow-pixel">🎮 MEGA WYPRZEDAŻ!</h3>
            <p className="text-lg mb-6 text-white">Konsole Nintendo do -40%</p>
            <Button className="mario-button bg-coin-yellow text-pixel-black px-6 py-3 font-pixel hover:bg-coin-yellow">
              SPRAWDŹ OFERTĘ
            </Button>
          </div>
          
          <div className="pixel-card p-8 text-center relative overflow-hidden" 
               style={{background: 'linear-gradient(135deg, #38a169 0%, #3182ce 100%)'}}>
            <h3 className="font-pixel text-2xl mb-4 text-white text-shadow-pixel">💿 KOLEKCJE GIER</h3>
            <p className="text-lg mb-6 text-white">Limitowane wydania w super cenach</p>
            <Button className="mario-button bg-coin-yellow text-pixel-black px-6 py-3 font-pixel hover:bg-coin-yellow">
              ZOBACZ KOLEKCJE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
