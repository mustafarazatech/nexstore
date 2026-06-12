import CategoriesSection from "../components/CategoriesSection";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import MainLayout from "../layouts/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <CategoriesSection />
      <ProductGrid />
    </MainLayout>
  );
};

export default Home;
