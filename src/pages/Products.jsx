import { useEffect, useState } from "react";
import { supabase } from "../supabase";

export function Products() {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("id", { ascending: false });

    if (!error) {
      setProducts(data);
    }
  }

  async function deleteProduct(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    await supabase.from("products").delete().eq("id", id);

    fetchProducts();
  }
  useEffect(() => {
  const loadProducts = async () => {
    await fetchProducts();
  };

  loadProducts();
}, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Our Products</h1>

      {/* ---------- Existing Static Products ---------- */}

      <h2 style={styles.subHeading}>Featured Products</h2>

      <div style={styles.grid}>
        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=700"
            alt=""
            style={styles.image}
          />
          <h3>Smartphone Pro</h3>
          <p style={styles.price}>₹39,999</p>
        </div>

        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700"
            alt=""
            style={styles.image}
          />
          <h3>Wireless Headphones</h3>
          <p style={styles.price}>₹5,999</p>
        </div>

        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700"
            alt=""
            style={styles.image}
          />
          <h3>Smart Watch</h3>
          <p style={styles.price}>₹8,999</p>
        </div>
      </div>

      {/* ---------- Supabase Products ---------- */}

      <h2 style={styles.subHeading}>
        Products Added by Admin
      </h2>

      <div style={styles.grid}>
        {products.map((item) => (
          <div key={item.id} style={styles.cardWrapper}>
            <button
              style={styles.deleteButton}
              onClick={() => deleteProduct(item.id)}
            >
              🗑
            </button>

            <div style={styles.card}>
              <img
                src={item.image}
                alt={item.name}
                style={styles.image}
              />

              <h3>{item.name}</h3>

              <p style={styles.price}>
                ₹{item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    background: "#F8F7FF",
    minHeight: "100vh",
  },

  heading: {
    textAlign: "center",
    fontSize: "42px",
    marginBottom: "30px",
    color: "#2D2D2D",
  },

  subHeading: {
    marginTop: "40px",
    marginBottom: "20px",
    color: "#6C63FF",
  },

  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "25px",
  },

  cardWrapper: {
    position: "relative",
  },

  deleteButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    border: "none",
    background: "red",
    color: "white",
    cursor: "pointer",
    fontSize: "18px",
    zIndex: 10,
  },

  card: {
    width: "250px",
    background: "white",
    borderRadius: "18px",
    overflow: "hidden",
    boxShadow: "0 8px 18px rgba(0,0,0,0.08)",
    textAlign: "center",
    paddingBottom: "20px",
  },

  image: {
    width: "100%",
    height: "190px",
    objectFit: "cover",
  },

  price: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#6C63FF",
  },
};