import { useState } from "react";
import { supabase } from "../supabase";

export function Add() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (!name || !price || !image) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    // Unique file name
    const fileName = `${Date.now()}-${image.name}`;

    // Upload image to Supabase Storage
    const { error: uploadError } = await supabase.storage
      .from("product-images")
      .upload(fileName, image);

   if (uploadError) {
  console.log(uploadError);
  alert(uploadError.message);
  setLoading(false);
  return;
}

    // Get public URL
    const { data } = supabase.storage
      .from("product-images")
      .getPublicUrl(fileName);

    const imageUrl = data.publicUrl;

    // Save in database
    const { error } = await supabase.from("products").insert({
      name: name,
      price: Number(price),
      image: imageUrl,
    });

    if (error) {
      alert("Failed to save product");
    } else {
      alert("Product Added Successfully!");

      setName("");
      setPrice("");
      setImage(null);

      // file input clear karne ke liye page reload ki zarurat nahi
      document.getElementById("product-image").value = "";
    }

    setLoading(false);
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>Add Product</h1>

        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />

        <input
          type="number"
          placeholder="Product Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={styles.input}
        />

        <input
          id="product-image"
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          style={styles.input}
        />

        {image && (
          <img
            src={URL.createObjectURL(image)}
            alt="Preview"
            style={styles.preview}
          />
        )}

        <button onClick={handleSubmit} style={styles.button}>
          {loading ? "Uploading..." : "Add Product"}
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "50px",
    background: "#F8F7FF",
    minHeight: "100vh",
  },

  card: {
    width: "420px",
    background: "white",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginTop: "15px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },

  preview: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    marginTop: "20px",
    borderRadius: "12px",
  },

  button: {
    width: "100%",
    marginTop: "20px",
    padding: "14px",
    border: "none",
    borderRadius: "10px",
    background: "#6C63FF",
    color: "white",
    fontSize: "17px",
    cursor: "pointer",
  },
};