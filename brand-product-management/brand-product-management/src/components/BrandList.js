import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../api";
import BrandForm from "./BrandForm";
import axios from "axios";

function BrandList() {
  const [brands, setBrands] = useState([]);
  const [editingBrand, setEditingBrand] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/brands")
      .then((res) => setBrands(res.data));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/brands/${id}`)
      .then(() => setBrands(brands.filter((b) => b.id !== id)));
  };

  const handleSave = () => {
    setEditingBrand(null);
    axios
      .get("http://localhost:3000/brands")
      .then((res) => setBrands(res.data));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Brands</h2>
      {brands.map((brand) => (
        <div key={brand.id} className="mb-4">
          <Link to={`/brands/${brand.id}`} className="text-blue-500">
            {brand.name}
          </Link>
          <button onClick={() => setEditingBrand(brand)} className="ml-2">
            Edit
          </button>
          <button onClick={() => handleDelete(brand.id)} className="ml-2">
            Delete
          </button>
        </div>
      ))}
      <BrandForm brand={editingBrand} onSave={handleSave} />
    </div>
  );
}

export default BrandList;
