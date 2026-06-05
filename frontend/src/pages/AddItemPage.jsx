import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemForm from "../components/ItemForm.jsx";
import { createItem } from "../api/itemApi.js";

function AddItemPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCreate = async (formData) => {
    setIsSubmitting(true);
    try {
      await createItem(formData);
      navigate("/");
    } catch (error) {
      console.error("Failed to create item", error);
      alert("Failed to create item");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ItemForm
      submitText="Add Item"
      onSubmit={handleCreate}
      isSubmitting={isSubmitting}
    />
  );
}

export default AddItemPage;
