import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function NewProducts() {
  const newProducts = [
    {
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      name: "Atari 2600",
      description: "Konsola z 1977 roku + 5 gier",
      price: "599 zł",
      badge: "NOWOŚĆ",
      badgeColor: "bg-mario-blue"
    },
    {
      image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      name: "Game Boy Color",
      description: "Kolorowa wersja kultowej konsoli",
      price: "349 zł",
      badge: "NOWOŚĆ",
      badgeColor: "bg-mario-blue"
    },
    {
      image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      name: "Neo Geo Pocket",
      description: "Rzadka konsola przenośna SNK",
      price: "899 zł",
      badge: "LIMITOWANY",
      badgeColor: "bg-mario-red"
    },
    {
      image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      name: "Commodore 64",
      description: "Legendarny komputer domowy",
      price: "1299 zł",
      badge: "NOWOŚĆ",
      badgeColor: "bg-mario-blue"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="font-pixel text-3xl text-pixel-black">
            🆕 NOWOŚCI
          </h2>
          <Button className="mario-button text-white px-6 py-3 font-pixel hover:bg-mario-red">
            ZOBACZ WSZYSTKIE
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newProducts.map((product, index) => (
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