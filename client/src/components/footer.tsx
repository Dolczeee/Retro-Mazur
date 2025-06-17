export default function Footer() {
  return (
    <footer className="bg-pixel-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/retro-mazur-logo.png" 
              alt="Retro Mazur Logo" 
              className="h-16 mb-4"
            />
            <p className="text-gray-300 mb-4">
              Twój sklep z retro grami i konsolami. 
              Odkryj nostalgię gier z lat 80. i 90.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-mario-red text-2xl hover:text-coin-yellow transition-colors wiggle">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-pipe-green text-2xl hover:text-coin-yellow transition-colors wiggle">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-mario-blue text-2xl hover:text-coin-yellow transition-colors wiggle">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="font-pixel text-lg mb-4 coin-yellow">KATEGORIE</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Konsole Nintendo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Konsole Sega</a></li>
              <li><a href="#" className="hover:text-white transition-colors">PlayStation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gry NES</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Akcesoria</a></li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h3 className="font-pixel text-lg mb-4 coin-yellow">OBSŁUGA KLIENTA</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Kontakt</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dostawa i płatność</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Zwroty i reklamacje</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Regulamin</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Polityka prywatności</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-pixel text-lg mb-4 coin-yellow">KONTAKT</h3>
            <div className="text-gray-300 space-y-2">
              <p><i className="fas fa-envelope mr-2"></i> info@retromazur.pl</p>
              <p><i className="fas fa-phone mr-2"></i> +48 123 456 789</p>
              <p>
                <i className="fas fa-map-marker-alt mr-2"></i> 
                ul. Retro 1<br />
                <span className="ml-6">00-123 Warszawa</span>
              </p>
              <p className="text-sm mt-4">
                <strong>Godziny pracy:</strong><br />
                Pon-Pt: 9:00-18:00<br />
                Sob: 10:00-15:00
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Retro Mazur. Wszystkie prawa zastrzeżone. 
            <span className="font-pixel coin-yellow ml-2">🎮 Made with ❤️ for retro gamers</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Wizualizacja: Julia Bloch
          </p>
        </div>
      </div>
    </footer>
  );
}
