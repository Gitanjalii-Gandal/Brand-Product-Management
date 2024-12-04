import BrandList from "../components/BrandList";
import ProductList from "../components/ProductList";

function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Brands and Products</h1>
      <BrandList />
      <ProductList />
    </div>
  );
}

export default Home;
