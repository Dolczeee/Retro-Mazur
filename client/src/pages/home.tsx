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
            radial-gradient(circle at 5% 33%, #42c1f2 8px, transparent 8px),
            radial-gradient(circle at 15% 33%, #42c1f2 6px, transparent 6px),
            radial-gradient(circle at 25% 33%, #42c1f2 10px, transparent 10px),
            radial-gradient(circle at 35% 33%, #42c1f2 7px, transparent 7px),
            radial-gradient(circle at 45% 33%, #42c1f2 9px, transparent 9px),
            radial-gradient(circle at 55% 33%, #42c1f2 8px, transparent 8px),
            radial-gradient(circle at 65% 33%, #42c1f2 11px, transparent 11px),
            radial-gradient(circle at 75% 33%, #42c1f2 6px, transparent 6px),
            radial-gradient(circle at 85% 33%, #42c1f2 9px, transparent 9px),
            radial-gradient(circle at 95% 33%, #42c1f2 7px, transparent 7px),
            radial-gradient(circle at 8% 66%, #64c8ee 9px, transparent 9px),
            radial-gradient(circle at 18% 66%, #64c8ee 7px, transparent 7px),
            radial-gradient(circle at 28% 66%, #64c8ee 10px, transparent 10px),
            radial-gradient(circle at 38% 66%, #64c8ee 8px, transparent 8px),
            radial-gradient(circle at 48% 66%, #64c8ee 11px, transparent 11px),
            radial-gradient(circle at 58% 66%, #64c8ee 6px, transparent 6px),
            radial-gradient(circle at 68% 66%, #64c8ee 9px, transparent 9px),
            radial-gradient(circle at 78% 66%, #64c8ee 8px, transparent 8px),
            radial-gradient(circle at 88% 66%, #64c8ee 10px, transparent 10px),
            radial-gradient(circle at 98% 66%, #64c8ee 7px, transparent 7px),
            linear-gradient(to bottom, 
              #42c1f2 0%, 
              #42c1f2 32%, 
              #64c8ee 33%, 
              #64c8ee 65%, 
              #84d0f0 66%, 
              #84d0f0 100%
            ),
            url('/pixel SVG/tło niebieskie.svg')
          `,
          backgroundSize: 'cover, cover, cover, cover, cover, cover, cover, cover, cover, cover, cover, cover, cover, cover, cover, cover, cover, cover, cover, cover, 100% 100%, cover',
          backgroundPosition: 'center, center, center, center, center, center, center, center, center, center, center, center, center, center, center, center, center, center, center, center, center, center',
          backgroundRepeat: 'no-repeat',
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
