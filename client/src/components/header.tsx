import { Search, User, Heart, ShoppingCart, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Header() {
  const [showCategories, setShowCategories] = useState(false);
  const [showBrands, setShowBrands] = useState(false);

  const categories = [
    {
      icon: "🎮",
      title: "KONSOLE",
      subcategories: [
        "Nintendo (NES, SNES, N64, GameCube)",
        "Sony (PlayStation 1-5, PSP, PS Vita)",
        "Microsoft (Xbox, Xbox 360, Xbox One)",
        "Sega (Master System, Genesis, Dreamcast)",
        "Atari (2600, 7800, Lynx)",
        "Konsole przenośne",
        "Mini konsole retro"
      ]
    },
    {
      icon: "💿",
      title: "GRY",
      subcategories: [
        "Kasety Nintendo",
        "Płyty PlayStation",
        "Kasety Sega",
        "Gry Atari",
        "Gry Xbox",
        "Gry PC retro",
        "Gry przenośne"
      ]
    },
    {
      icon: "🕹️",
      title: "KONTROLERY",
      subcategories: [
        "Pady Nintendo",
        "Kontrolery PlayStation",
        "Pady Xbox",
        "Joysticki Atari",
        "Arcade Sticki",
        "Adaptery kontrolerów",
        "Bezprzewodowe pady"
      ]
    },
    {
      icon: "🔧",
      title: "AKCESORIA",
      subcategories: [
        "Kable AV/HDMI",
        "Zasilacze",
        "Karty pamięci",
        "Adaptery",
        "Pokrowce i etui",
        "Cleaning kit",
        "Modyfikacje"
      ]
    },
    {
      icon: "⚙️",
      title: "CZĘŚCI ZAMIENNE",
      subcategories: [
        "Lasery do konsol",
        "Mechanizmy napędów",
        "Kondensatory",
        "Gumki kontrolerów",
        "Ekrany LCD",
        "Obudowy",
        "Przyciski i switche"
      ]
    },
    {
      icon: "🏪",
      title: "SKLEP VINTAGE",
      subcategories: [
        "Automaty arcade",
        "Komputery retro",
        "Handheld konsole",
        "Kalkulatory gier",
        "Zegarki z grami",
        "Gadżety retro",
        "Kolekcjonerskie"
      ]
    }
  ];

  const brands = [
    {
      icon: "🎮",
      title: "NINTENDO",
      subcategories: [
        "Nintendo Entertainment System (NES)",
        "Super Nintendo (SNES)",
        "Nintendo 64 (N64)",
        "GameCube",
        "Nintendo Wii/Wii U",
        "Game Boy/Game Boy Color",
        "Nintendo DS/3DS",
        "Nintendo Switch"
      ]
    },
    {
      icon: "🔵",
      title: "SEGA",
      subcategories: [
        "Sega Master System",
        "Sega Genesis/Mega Drive",
        "Sega Saturn",
        "Sega Dreamcast",
        "Game Gear",
        "Sega CD/32X",
        "Sega Nomad"
      ]
    },
    {
      icon: "🎯",
      title: "SONY",
      subcategories: [
        "PlayStation 1 (PSX)",
        "PlayStation 2 (PS2)",
        "PlayStation 3 (PS3)",
        "PlayStation 4 (PS4)",
        "PlayStation 5 (PS5)",
        "PlayStation Portable (PSP)",
        "PlayStation Vita (PS Vita)"
      ]
    },
    {
      icon: "🕹️",
      title: "ATARI",
      subcategories: [
        "Atari 2600",
        "Atari 5200",
        "Atari 7800",
        "Atari Jaguar",
        "Atari Lynx",
        "Atari ST",
        "Atari 8-bit"
      ]
    },
    {
      icon: "💻",
      title: "COMMODORE",
      subcategories: [
        "Commodore 64 (C64)",
        "Commodore 128",
        "Amiga 500/600/1200",
        "Amiga CD32",
        "VIC-20",
        "Commodore PET",
        "Plus/4"
      ]
    },
    {
      icon: "⚡",
      title: "SNK",
      subcategories: [
        "Neo Geo AES",
        "Neo Geo MVS",
        "Neo Geo CD",
        "Neo Geo Pocket",
        "Neo Geo Pocket Color",
        "Neo Geo X"
      ]
    }
  ];

  return (
    <header className="bg-white shadow-lg border-b-4 border-pixel-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex justify-between items-center py-2 text-sm border-b border-gray-200">
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-mario-blue transition-colors">Koszty dostawy</a>
            <a href="#" className="text-gray-600 hover:text-mario-blue transition-colors">Reklamacje i zwroty</a>
            <a href="#" className="text-gray-600 hover:text-mario-blue transition-colors">Blog</a>
            <a href="#" className="text-gray-600 hover:text-mario-blue transition-colors">Kontakt</a>
          </div>
          <div className="flex items-center space-x-4">
            <select className="text-sm border-none bg-transparent">
              <option>Polski</option>
              <option>English</option>
            </select>
            <span className="text-gray-600">PLN</span>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/src/logo/Arcade 2.png" 
              alt="Retro Mazur Logo" 
              className="h-20 w-auto mr-4 object-contain"
            />
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative flex">
              <Input 
                type="text" 
                placeholder="Wpisz nazwę lub kod produktu..." 
                className="flex-1 px-4 py-3 border-3 border-pixel-black border-r-0 text-lg focus:outline-none focus:border-mario-blue rounded-r-none"
              />
              <Button className="mario-button text-white px-4 py-3 border-l-0 rounded-l-none">
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <Button className="bg-mario-blue text-white p-3 rounded-full hover:bg-blue-700 transition-colors">
              <User className="w-5 h-5" />
            </Button>
            <Button className="bg-pipe-green text-white p-3 rounded-full hover:bg-green-700 transition-colors">
              <Heart className="w-5 h-5" />
            </Button>
            <Button className="bg-coin-yellow text-pixel-black p-3 rounded-full hover:bg-yellow-500 transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-mario-red text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">3</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-pixel-black text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-8">
              <Button 
                className="bg-pipe-green px-4 py-2 font-pixel text-sm mario-button flex items-center hover:bg-pipe-green"
                onMouseEnter={() => setShowCategories(true)}
                onMouseLeave={() => setShowCategories(false)}
              >
                <Menu className="w-4 h-4 mr-2" /> KATEGORIE
                <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${showCategories ? 'rotate-180' : ''}`} />
              </Button>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                className="bg-transparent px-4 py-2 font-pixel text-sm text-coin-yellow hover:text-white flex items-center"
                onMouseEnter={() => setShowBrands(true)}
                onMouseLeave={() => setShowBrands(false)}
              >
                🏷️ MARKI
                <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${showBrands ? 'rotate-180' : ''}`} />
              </Button>

              <span className="text-coin-yellow font-pixel text-sm">⭐ PROMOCJE</span>
            </div>
          </div>

          {/* Categories Dropdown */}
          {showCategories && (
            <div 
              className="absolute top-full left-4 right-4 mt-2 bg-white border-4 border-pixel-black rounded-lg shadow-2xl z-[9999]"
              onMouseEnter={() => setShowCategories(true)}
              onMouseLeave={() => setShowCategories(false)}
            >
              <div className="grid grid-cols-6 gap-6 p-6">
                {categories.map((category, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center space-x-2 border-b-2 border-gray-200 pb-2">
                      <span className="text-2xl">{category.icon}</span>
                      <h3 className="font-pixel text-sm text-gray-800 font-bold">{category.title}</h3>
                    </div>
                    <ul className="space-y-1">
                      {category.subcategories.map((sub, subIndex) => (
                        <li key={subIndex}>
                          <a 
                            href="#" 
                            className="text-gray-800 text-xs hover:text-mario-blue hover:bg-gray-100 block px-2 py-1 rounded transition-colors font-medium"
                          >
                            {sub}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Brands Dropdown */}
          {showBrands && (
            <div 
              className="absolute top-full left-4 right-4 mt-2 bg-white border-4 border-pixel-black rounded-lg shadow-2xl z-[9999]"
              onMouseEnter={() => setShowBrands(true)}
              onMouseLeave={() => setShowBrands(false)}
            >
              <div className="grid grid-cols-6 gap-6 p-6">
                {brands.map((brand, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center space-x-2 border-b-2 border-gray-200 pb-2">
                      <span className="text-2xl">{brand.icon}</span>
                      <h3 className="font-pixel text-sm text-gray-800 font-bold">{brand.title}</h3>
                    </div>
                    <ul className="space-y-1">
                      {brand.subcategories.map((sub, subIndex) => (
                        <li key={subIndex}>
                          <a 
                            href="#" 
                            className="text-gray-800 text-xs hover:text-mario-blue hover:bg-gray-100 block px-2 py-1 rounded transition-colors font-medium"
                          >
                            {sub}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Overlay to close dropdowns */}
        {(showCategories || showBrands) && (
          <div 
            className="fixed inset-0 z-[9998]" 
            onClick={() => {
              setShowCategories(false);
              setShowBrands(false);
            }}
          />
        )}
      </nav>
    </header>
  );
}