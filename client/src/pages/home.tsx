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
            linear-gradient(to bottom, 
              #42c1f2 0%, 
              #42c1f2 32.5%, 
              #64c8ee 32.6%, 
              #42c1f2 32.7%, 
              #64c8ee 32.8%, 
              #42c1f2 32.9%, 
              #64c8ee 33.0%, 
              #42c1f2 33.1%, 
              #64c8ee 33.2%, 
              #42c1f2 33.3%, 
              #64c8ee 33.4%, 
              #42c1f2 33.5%, 
              #64c8ee 33.6%, 
              #42c1f2 33.7%, 
              #64c8ee 33.8%, 
              #64c8ee 65.5%, 
              #84d0f0 65.6%, 
              #64c8ee 65.7%, 
              #84d0f0 65.8%, 
              #64c8ee 65.9%, 
              #84d0f0 66.0%, 
              #64c8ee 66.1%, 
              #84d0f0 66.2%, 
              #64c8ee 66.3%, 
              #84d0f0 66.4%, 
              #64c8ee 66.5%, 
              #84d0f0 66.6%, 
              #64c8ee 66.7%, 
              #84d0f0 66.8%, 
              #84d0f0 100%
            ),
            url('/pixel SVG/tło niebieskie.svg')
          `,
          backgroundSize: '100% 100%, cover',
          backgroundPosition: 'center, center',
          backgroundRepeat: 'no-repeat, repeat',
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
