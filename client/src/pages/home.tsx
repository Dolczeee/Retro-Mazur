import Header from "@/components/header";
import HeroBanner from "@/components/hero-banner";
import Categories from "@/components/categories";
import FeaturedProducts from "@/components/featured-products";
import NewProducts from "@/components/new-products";
import PopularProducts from "@/components/popular-products";
import PromotionalBanners from "@/components/promotional-banners";
import MarioWorldSection from "@/components/mario-world-section";
import BrandsSection from "@/components/brands-section";
import BlogSection from "@/components/blog-section";
import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-retro-beige">
      <Header />
      <main>
        <div className="bg-mario-blue" style={{
          backgroundImage: `
            linear-gradient(to bottom, #87ceeb 0%, #6bb6ff 25%, #4682b4 75%, #1e90ff 100%),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(255,255,255,0.1) 2px,
              rgba(255,255,255,0.1) 4px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 8px,
              rgba(255,255,255,0.05) 8px,
              rgba(255,255,255,0.05) 16px
            )
          `,
          backgroundSize: '100% 100%, 16px 16px, 16px 16px',
          backgroundPosition: '0 0, 0 0, 0 0',
          imageRendering: 'pixelated'
        }}>
          <HeroBanner />
          <Categories />
        </div>
        <FeaturedProducts />
        <NewProducts />
        <PopularProducts />
        <PromotionalBanners />
        <MarioWorldSection />
        <BrandsSection />
        <BlogSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
