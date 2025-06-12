import { Button } from "@/components/ui/button";
import { Calendar, User } from "lucide-react";

export default function BlogSection() {
  const blogPosts = [
    {
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      title: "Historia konsol Nintendo - od NES do Switch",
      excerpt: "Przegląd ewolucji konsol Nintendo przez dekady. Jak japońska firma zrewolucjonizowała branżę gier.",
      date: "15 Stycznia 2025",
      author: "Admin",
      category: "Historia gier"
    },
    {
      image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      title: "Top 10 gier retro, które musisz zagrać",
      excerpt: "Nasza lista kultowych gier z lat 80. i 90., które do dziś dostarczają niesamowitej rozrywki.",
      date: "12 Stycznia 2025",
      author: "Redakcja",
      category: "Ranking"
    },
    {
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      title: "Jak dbać o stare konsole? Porady konserwatorskie",
      excerpt: "Praktyczne wskazówki dotyczące przechowywania i konserwacji retro sprzętu gamingowego.",
      date: "8 Stycznia 2025",
      author: "Ekspert",
      category: "Poradniki"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="font-pixel text-3xl text-pixel-black">
            📰 AKTUALNOŚCI
          </h2>
          <Button className="mario-button text-white px-6 py-3 font-pixel hover:bg-mario-red">
            PRZEJDŹ DO BLOGA
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="pixel-card p-6 bg-white">
              <div className="relative mb-4">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded"
                />
                <span className="absolute top-2 left-2 bg-mario-blue text-white px-2 py-1 font-pixel text-xs">
                  {post.category}
                </span>
              </div>
              <h3 className="font-pixel text-sm mb-3 leading-relaxed">{post.title}</h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex justify-between items-center text-xs text-gray-500">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-3 h-3" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="w-3 h-3" />
                  <span>{post.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}