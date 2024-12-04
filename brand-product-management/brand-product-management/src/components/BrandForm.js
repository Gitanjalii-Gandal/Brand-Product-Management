import { useState, useEffect } from "react";
import axios from "axios";

function BrandForm({ brand, onSave }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [logo, setLogo] = useState("");

  useEffect(() => {
    if (brand) {
      setName(brand.name || "");
      setDescription(brand.description || "");
      setLogo(brand.logo || "");
    } else {
      setName("");
      setDescription("");
      setLogo("");
    }
  }, [brand]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, description, logo };

    if (brand) {
      await axios.put(`http://localhost:3000/brands/${brand.id}`, data);
    } else {
      await axios.post("http://localhost:3000/brands", data);
    }

    onSave();
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
        type="text"
        placeholder="Logo URL"
        value={logo}
        onChange={(e) => setLogo(e.target.value)}
        className="block mb-2 p-2 border"
      />
      <button type="submit" className="bg-green-500 text-white p-2">
        Save
      </button>
    </form>
  );
}

export default BrandForm;
