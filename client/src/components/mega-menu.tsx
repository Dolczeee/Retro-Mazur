
import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";

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
      "Konsole kolekcjonerskie",
      "Limitowane edycje",
      "Pudełka i instrukcje",
      "Figurki i gadżety",
      "Plakaty i artworki",
      "Vintage merchandise"
    ]
  }
];

export default function MegaMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-pipe-green px-4 py-2 font-pixel text-sm mario-button text-white hover:bg-pipe-green data-[state=open]:bg-pipe-green">
            <Menu className="w-4 h-4 mr-2" /> KATEGORIE
          </NavigationMenuTrigger>
          <NavigationMenuContent className="min-w-[900px] bg-white border-4 border-pixel-black rounded-lg shadow-2xl">
            <div className="grid grid-cols-3 gap-6 p-6">
              {categories.map((category, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center space-x-2 border-b-2 border-gray-200 pb-2">
                    <span className="text-2xl">{category.icon}</span>
                    <h3 className="font-pixel text-sm text-mario-red font-bold">{category.title}</h3>
                  </div>
                  <ul className="space-y-1">
                    {category.subcategories?.map((sub, subIndex) => (
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
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
