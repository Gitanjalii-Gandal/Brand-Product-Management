import { useState, useEffect } from "react";
import axios from "axios";

function ProductForm({ product, brands, onSave }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [brandId, setBrandId] = useState("");

  useEffect(() => {
    if (product) {
      setName(product.name || "");
      setDescription(product.description || "");
      setPrice(product.price || "");
      setCategory(product.category || "");
      setImage(product.image || "");
      setBrandId(product.brandId || "");
    } else {
      setName("");
      setDescription("");
      setPrice("");
      setCategory("");
      setImage("");
      setBrandId("");
    }
  }, [product]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, description, price, category, image, brandId };
    try {
      if (product) {
        await axios.put(`http://localhost:3000/products/${product.id}`, data);
      } else {
        await axios.post("http://localhost:3000/products", data);
      }
      onSave();
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="block mb-2 p-2 border"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="block mb-2 p-2 border"
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="block mb-2 p-2 border"
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="block mb-2 p-2 border"
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="block mb-2 p-2 border"
      />
      <select
        value={brandId}
        onChange={(e) => setBrandId(e.target.value)}
        className="block mb-2 p-2 border"
      >
        <option value="">Select Brand</option>
        {brands.map((brand) => (
          <option key={brand.id} value={brand.id}>
            {brand.name}
          </option>
        ))}
      </select>
      <button type="submit" className="bg-green-500 text-white p-2">
        Save
      </button>
    </form>
  );
}

export default ProductForm;
