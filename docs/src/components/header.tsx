import { Search, User, Heart, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Header() {
  return (
    <header className="bg-white shadow-lg border-b-4 border-pixel-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex justify-between items-center py-2 text-sm border-b border-gray-200">
          <div className="flex space-x-4">
            <span className="text-gray-600">📧 info@retromazur.pl</span>
            <span className="text-gray-600">📞 +48 123 456 789</span>
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
            <div className="bg-mario-red text-white px-4 py-2 font-pixel text-lg pixel-border mr-4">
              RETRO<br />MAZUR
            </div>
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
      <nav className="bg-pixel-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-8">
              <Button className="bg-pipe-green px-4 py-2 font-pixel text-sm mario-button flex items-center hover:bg-pipe-green">
                <Menu className="w-4 h-4 mr-2" /> KATEGORIE
              </Button>
              <a href="#" className="hover:text-coin-yellow transition-colors font-medium">KONSOLE</a>
              <a href="#" className="hover:text-coin-yellow transition-colors font-medium">GRY</a>
              <a href="#" className="hover:text-coin-yellow transition-colors font-medium">AKCESORIA</a>
              <a href="#" className="hover:text-coin-yellow transition-colors font-medium">CZĘŚCI</a>
              <a href="#" className="hover:text-coin-yellow transition-colors font-medium">MARKI</a>
              <a href="#" className="hover:text-coin-yellow transition-colors font-medium">KOLEKCJE</a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-coin-yellow font-pixel text-sm">⭐ PROMOCJE</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
