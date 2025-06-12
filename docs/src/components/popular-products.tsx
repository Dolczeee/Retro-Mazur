import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function PopularProducts() {
  const popularProducts = [
    {
      image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      name: "Super Mario Bros 3",
      description: "Oryginalna kaseta NES",
      price: "149 zł",
      badge: "TOP 1",
      badgeColor: "bg-coin-yellow text-pixel-black"
    },
    {
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      name: "Zelda: A Link to the Past",
      description: "Kultowa gra SNES",
      price: "199 zł",
      badge: "TOP 2",
      badgeColor: "bg-pipe-green"
    },
    {
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      name: "Tetris Game Boy",
      description: "Najpopularniejsza gra przenośna",
      price: "89 zł",
      badge: "TOP 3",
      badgeColor: "bg-mario-blue"
    },
    {
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      name: "Sonic the Hedgehog",
      description: "Ikona konsoli Sega Genesis",
      price: "129 zł",
      badge: "TOP 4",
      badgeColor: "bg-mario-red"
    }
  ];

  return (
    <section className="py-16 bg-retro-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="font-pixel text-3xl text-pixel-black">
            🏆 NAJCZĘŚCIEJ KUPOWANE
          </h2>
          <Button className="mario-button text-white px-6 py-3 font-pixel hover:bg-mario-red">
            ZOBACZ RANKING
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularProducts.map((product, index) => (
            <div key={index} className="pixel-card p-6 bg-white">
              <div className="relative mb-4">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded"
                />
                <span className={`absolute top-2 right-2 ${product.badgeColor} text-white px-2 py-1 font-pixel text-xs`}>
                  {product.badge}
                </span>
              </div>
              <h3 className="font-pixel text-sm mb-2">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{product.description}</p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-lg font-bold mario-red">{product.price}</span>
                </div>
                <Button className="bg-pipe-green text-white px-3 py-2 rounded hover:bg-green-700 transition-colors">
                  <ShoppingCart className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}