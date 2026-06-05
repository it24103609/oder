import { useState } from "react";

function ItemForm({ initialValues, onSubmit, submitText, isSubmitting }) {
  const [formData, setFormData] = useState(
    initialValues || {
      name: "",
      category: "",
      price: "",
      description: "",
      imageUrl: "",
      serialNumber: "",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      price: Number(formData.price),
    });
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h2>{submitText}</h2>

      <label htmlFor="name">Item Name</label>
      <input
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        disabled={isSubmitting}
      />

      <label htmlFor="category">Category</label>
      <input
        id="category"
        name="category"
        value={formData.category}
        onChange={handleChange}
        required
        disabled={isSubmitting}
      />

      <label htmlFor="price">Price</label>
      <input
        id="price"
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        required
        disabled={isSubmitting}
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        rows="4"
        value={formData.description}
        onChange={handleChange}
        required
        disabled={isSubmitting}
      />

      <label htmlFor="imageUrl">Image URL</label>
      <input
        id="imageUrl"
        name="imageUrl"
        value={formData.imageUrl}
        onChange={handleChange}
        disabled={isSubmitting}
      />

      <label htmlFor="serialNumber">Serial Number</label>
      <input
        id="serialNumber"
        name="serialNumber"
        value={formData.serialNumber}
        onChange={handleChange}
        required
        disabled={isSubmitting}
      />

      <button className="btn primary" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Saving..." : submitText}
      </button>
    </form>
  );
}

export default ItemForm;
