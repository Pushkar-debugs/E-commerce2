import { useState } from "react";
import { supabase } from "../supabase";

export function Add() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (!name || !price || !imageUrl) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("products")
      .insert([
        {
          name,
          price: Number(price),
          image: imageUrl,
        },
      ]);

    if (error) {
      console.log(error);
      alert(error.message);
    } else {
      alert("Product Added Successfully!");

      setName("");
      setPrice("");
      setImageUrl("");
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
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          style={styles.input}
        />

        {imageUrl && (
          <img
            src={imageUrl}
            alt="Preview"
            style={styles.preview}
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        )}

        <button
          onClick={handleSubmit}
          style={styles.button}
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Product"}
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
    boxSizing: "border-box",
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