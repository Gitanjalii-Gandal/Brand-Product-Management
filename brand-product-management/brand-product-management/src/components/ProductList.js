import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductForm from "./ProductForm";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => setProducts(res.data));
    axios
      .get("http://localhost:3000/brands")
      .then((res) => setBrands(res.data));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/products/${id}`)
      .then(() => setProducts(products.filter((p) => p.id !== id)));
  };

  const handleSave = () => {
    setEditingProduct(null);
    axios
      .get("http://localhost:3000/products")
      .then((res) => setProducts(res.data));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Products</h2>
      {products.map((product) => (
        <div key={product.id} className="mb-4">
          <Link to={`/products/${product.id}`} className="text-blue-500">
            {product.name}
          </Link>
          <button onClick={() => setEditingProduct(product)} className="ml-2">
            Edit
          </button>
          <button onClick={() => handleDelete(product.id)} className="ml-2">
            Delete
          </button>
        </div>
      ))}
      <ProductForm
        product={editingProduct}
        brands={brands}
        onSave={handleSave}
      />
    </div>
  );
}

export default ProductList;
