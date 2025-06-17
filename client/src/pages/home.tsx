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
          background: `linear-gradient(to bottom, #42c1f2 33.33%, #64c8ee 33.33%, #64c8ee 66.66%, #84d0f0 66.66%), url('/src/pixel SVG/tło niebieskie.svg')`,
          backgroundSize: 'cover, 970px auto',
          backgroundPosition: 'center, center',
          backgroundRepeat: 'no-repeat, repeat-x'
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
