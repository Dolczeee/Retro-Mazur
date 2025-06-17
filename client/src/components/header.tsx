import React, { useState } from 'react';
import { Search, ShoppingCart, User, Heart, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = [
    {
      name: 'Konsole',
      items: [
        { name: 'PlayStation 5', href: '#' },
        { name: 'Xbox Series X/S', href: '#' },
        { name: 'Nintendo Switch', href: '#' },
        { name: 'Steam Deck', href: '#' },
        { name: 'Retro Gaming', href: '#' },
      ]
    },
    {
      name: 'Gry',
      items: [
        { name: 'Najnowsze gry', href: '#' },
        { name: 'Pre-order', href: '#' },
        { name: 'Gry niezależne', href: '#' },
        { name: 'Gry retro', href: '#' },
        { name: 'Wyprzedaże', href: '#' },
      ]
    },
    {
      name: 'Akcesoria',
      items: [
        { name: 'Kontrolery', href: '#' },
        { name: 'Słuchawki Gaming', href: '#' },
        { name: 'Klawiatury', href: '#' },
        { name: 'Myszki', href: '#' },
        { name: 'Krzesła Gaming', href: '#' },
      ]
    }
  ];

  const brands = [
    'PlayStation', 'Xbox', 'Nintendo', 'Razer', 'SteelSeries', 
    'Logitech', 'Corsair', 'HyperX', 'ASUS', 'MSI'
  ];

  const promotions = [
    'Cyber Week', 'Black Friday', 'Wyprzedaż zimowa', 
    'Promocje świąteczne', 'Ostatnia szansa'
  ];

  const handleMenuHover = (menu: string) => {
    setActiveMenu(menu);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  return (
    <header className="bg-white border-b-2 border-pixel-black relative z-50">
      {/* Top Bar */}
      <div className="bg-mario-red text-white py-2 px-4 text-center font-pixel text-xs">
        🎮 DARMOWA DOSTAWA OD 199 ZŁ! • EKSPRESOWA DOSTAWA W 24H! 🚀
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-mario-red rounded-lg flex items-center justify-center">
              <span className="text-white font-pixel text-lg">A</span>
            </div>
            <div>
              <h1 className="font-pixel text-xl mario-red">ARCADE</h1>
              <p className="text-xs text-gray-600">Gaming Store</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Szukaj gier, konsol, akcesoriów..."
                className="w-full px-4 py-2 border-2 border-pixel-black rounded-none focus:outline-none focus:border-mario-blue"
              />
              <Button className="absolute right-0 top-0 h-full bg-mario-blue hover:bg-mario-blue/90 rounded-none border-l-2 border-pixel-black">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <User className="h-5 w-5 mr-2" />
              Konto
            </Button>
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Heart className="h-5 w-5 mr-2" />
              Ulubione
            </Button>
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-5 w-5 mr-2" />
              <span className="hidden md:inline">Koszyk</span>
              <span className="absolute -top-2 -right-2 bg-mario-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-pixel">
                3
              </span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav 
        className="bg-pixel-black text-white py-3 relative"
        onMouseLeave={handleMenuLeave}
      >
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-center space-x-8 font-pixel text-sm">
            {/* Kategorie */}
            <li className="relative">
              <button
                className="hover:text-coin-yellow transition-colors py-2 px-4 border-r border-gray-600 flex items-center"
                onMouseEnter={() => handleMenuHover('categories')}
              >
                KATEGORIE
              </button>
              {activeMenu === 'categories' && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-4xl bg-white text-black border-2 border-pixel-black shadow-lg z-50 mt-2">
                  <div className="grid grid-cols-3 gap-8 p-8">
                    {categories.map((category, index) => (
                      <div key={index}>
                        <h3 className="font-pixel text-mario-red mb-4 text-sm">{category.name}</h3>
                        <ul className="space-y-2">
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <a 
                                href={item.href} 
                                className="text-gray-700 hover:text-mario-blue transition-colors text-sm"
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>

            {/* Marki */}
            <li className="relative">
              <button
                className="hover:text-coin-yellow transition-colors py-2 px-4 border-r border-gray-600 flex items-center"
                onMouseEnter={() => handleMenuHover('brands')}
              >
                MARKI
              </button>
              {activeMenu === 'brands' && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-2xl bg-white text-black border-2 border-pixel-black shadow-lg z-50 mt-2">
                  <div className="p-8">
                    <h3 className="font-pixel text-mario-red mb-4 text-sm">Popularne marki</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {brands.map((brand, index) => (
                        <a 
                          key={index}
                          href="#"
                          className="text-gray-700 hover:text-mario-blue transition-colors text-sm py-2"
                        >
                          {brand}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* Promocje */}
            <li className="relative">
              <button
                className="hover:text-coin-yellow transition-colors py-2 px-4 border-r border-gray-600 flex items-center"
                onMouseEnter={() => handleMenuHover('promotions')}
              >
                PROMOCJE
              </button>
              {activeMenu === 'promotions' && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-xl bg-white text-black border-2 border-pixel-black shadow-lg z-50 mt-2">
                  <div className="p-8">
                    <h3 className="font-pixel text-mario-red mb-4 text-sm">Aktualne promocje</h3>
                    <div className="space-y-3">
                      {promotions.map((promo, index) => (
                        <a 
                          key={index}
                          href="#"
                          className="block text-gray-700 hover:text-mario-blue transition-colors text-sm py-2 border-b border-gray-200 last:border-b-0"
                        >
                          🔥 {promo}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* Pozostałe linki */}
            <li>
              <a href="#" className="hover:text-coin-yellow transition-colors py-2 px-4 border-r border-gray-600">
                NOWOŚCI
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-coin-yellow transition-colors py-2 px-4 border-r border-gray-600">
                BESTSELLERY
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-coin-yellow transition-colors py-2 px-4">
                KONTAKT
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t-2 border-pixel-black absolute top-full left-0 w-full z-40">
          <div className="p-4 space-y-4">
            <div className="flex w-full">
              <input
                type="text"
                placeholder="Szukaj..."
                className="flex-1 px-3 py-2 border-2 border-pixel-black"
              />
              <Button className="bg-mario-blue hover:bg-mario-blue/90 border-l-2 border-pixel-black rounded-none">
                <Search className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-2 font-pixel text-sm">
              <a href="#" className="block py-2 border-b border-gray-200">KATEGORIE</a>
              <a href="#" className="block py-2 border-b border-gray-200">MARKI</a>
              <a href="#" className="block py-2 border-b border-gray-200">PROMOCJE</a>
              <a href="#" className="block py-2 border-b border-gray-200">NOWOŚCI</a>
              <a href="#" className="block py-2 border-b border-gray-200">BESTSELLERY</a>
              <a href="#" className="block py-2 border-b border-gray-200">KONTAKT</a>
              <a href="#" className="block py-2 border-b border-gray-200">KONTO</a>
              <a href="#" className="block py-2">ULUBIONE</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;