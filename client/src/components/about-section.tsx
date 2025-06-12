export default function AboutSection() {
  const features = [
    {
      icon: "🚀",
      title: "SZYBKA DOSTAWA",
      description: "Wysyłka w 24h na terenie całej Polski",
      color: "mario-red"
    },
    {
      icon: "✅",
      title: "GWARANCJA JAKOŚCI",
      description: "Wszystkie produkty sprawdzone i przetestowane",
      color: "mario-blue"
    },
    {
      icon: "💝",
      title: "OBSŁUGA KLIENTA",
      description: "Profesjonalne doradztwo i wsparcie techniczne",
      color: "pipe-green"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-pixel text-3xl mb-6 text-pixel-black">
            🏆 O NAS
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Retro Mazur to pasja do klasycznych gier komputerowych i konsolowych. 
            Od ponad 10 lat dostarczamy najwyższej jakości produkty retro dla kolekcjonerów i miłośników nostalgicznych gier.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center pixel-card p-6">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className={`font-pixel text-lg mb-3 ${feature.color}`}>
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
