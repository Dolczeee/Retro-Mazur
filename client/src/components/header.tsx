import React, { useState, useRef } from "react";
import { Search, User, Heart, ShoppingCart, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const promotions = [
    {
      icon: "💰",
      title: "PROMOCJE CENOWE",
      badge: "HOT!",
      badgeColor: "bg-mario-red",
      subcategories: [
        "-60% na Mario Bros Combo Pack 🎮",
        "-45% Sonic Genesis Collection 💨",
        "-25% Super Mario Bros. NES 🍄",
        "-30% Zelda: Link's Awakening 🗡️",
        "-40% Street Fighter Alpha 👊",
        "-50% Mega Man X Series 🤖",
        "-35% Final Fantasy VII 🎭"
      ]
    },
    {
      icon: "⏰",
      title: "AKCJE PROMOCYJNE",
      badge: "LIMITED",
      badgeColor: "bg-pipe-green",
      subcategories: [
        "-15% Retro Gaming Pack 📦",
        "-20% Arcade Stick Bundle 🕹️",
        "-25% Controller Master Set 🎮",
        "-30% Vintage Console Deal 📺",
        "Kup 2, zapłać za 1 - Gry NES 🎁",
        "Darmowa dostawa od 199 zł 🚚",
        "Mystery Box - Zestaw losowy 🎁"
      ]
    },
    {
      icon: "📅",
      title: "RETRO TYDZIEŃ",
      badge: "7 DNI",
      badgeColor: "bg-coin-yellow text-pixel-black",
      subcategories: [
        "Konsole PlayStation - 30% taniej 🎯",
        "Pady Xbox - Buy 2 Get 1 Free 🎮",
        "Gry Nintendo - Mega wyprzedaż 🎈",
        "Akcesoria Retro - do 40% off ⚡",
        "Kable HDMI - 2+1 gratis 📺",
        "Cleaning Kity - 50% taniej 🧽",
        "Vintage Collection - Extra 25% 🏆"
      ]
    },
    {
      icon: "🏆",
      title: "GAMING PROMOCJE",
      badge: "EXTRA",
      badgeColor: "bg-mario-blue",
      subcategories: [
        "Gaming Chair + Gratis Pad 🪑",
        "Retro Console + 5 gier gratis 🕹️",
        "Arcade Stick + Fighting Games 👊",
        "Gaming Setup - 70% off 📦",
        "Collector's Edition Bundle 💎",
        "Pro Gaming Pack + Akcesoria ⚙️",
        "Ultimate Retro Experience 🌟"
      ]
    }
  ];

  const openMenu = (menuName: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setActiveMenu(menuName);
  };

  const closeMenu = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    hoverTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 100);
  };

  const cancelClose = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  return (
    <header className="bg-white shadow-lg border-b-4 border-pixel-black relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex justify-between items-center py-2 text-sm border-b border-gray-200">
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-mario-blue transition-colors">
              Koszty dostawy
            </a>
            <a href="#" className="text-gray-600 hover:text-mario-blue transition-colors">
              Reklamacje i zwroty
            </a>
            <a href="#" className="text-gray-600 hover:text-mario-blue transition-colors">
              Blog
            </a>
            <a href="#" className="text-gray-600 hover:text-mario-blue transition-colors">
              Kontakt
            </a>
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
              <Button className="mario-button bg-mario-red text-white px-6 py-3 border-3 border-pixel-black hover:bg-red-700 transition-colors">
                <Search className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="p-2">
              <User className="w-6 h-6" />
            </Button>
            <Button variant="ghost" className="p-2 relative">
              <Heart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-mario-red text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Button>
            <Button variant="ghost" className="p-2 relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-mario-red text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="border-t border-gray-200">
          <nav className="flex items-center space-x-8 py-4">
            <Button variant="ghost" className="flex items-center space-x-1">
              <Menu className="w-5 h-5" />
              <span>Wszystkie kategorie</span>
              <ChevronDown className="w-4 h-4" />
            </Button>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-mario-blue transition-colors">Konsole</a>
              <a href="#" className="text-gray-700 hover:text-mario-blue transition-colors">Gry</a>
              <a href="#" className="text-gray-700 hover:text-mario-blue transition-colors">Akcesoria</a>
              <a href="#" className="text-gray-700 hover:text-mario-blue transition-colors">Kolekcje</a>
              <a href="#" className="text-gray-700 hover:text-mario-blue transition-colors">Promocje</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}