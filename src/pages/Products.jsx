import { useEffect, useState } from "react";
import { supabase } from "../supabase";

export function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      console.error(error);
    } else {
      setProducts(data || []);
    }

    setLoading(false);
  };

  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this product?"
    );

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("products")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    setProducts((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        Shopkart Products
      </h1>

      {loading ? (
        <div style={styles.loading}>
          Loading Products...
        </div>
      ) : products.length === 0 ? (
        <div style={styles.empty}>
          No Products Found
        </div>
      ) : (
        <div style={styles.grid}>
          {products.map((product) => (
            <div
              key={product.id}
              style={styles.card}
            >
              <button
                style={styles.deleteBtn}
                onClick={() =>
                  deleteProduct(product.id)
                }
              >
                🗑
              </button>

              <img
                src={product.image}
                alt={product.name}
                style={styles.image}
              />

              <div style={styles.content}>
                <h3>{product.name}</h3>

                <p style={styles.price}>
                  ₹{product.price}
                </p>

                <button style={styles.buyBtn}>
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "40px",
    background: "#f5f7ff",
  },

  heading: {
    textAlign: "center",
    fontSize: "42px",
    marginBottom: "40px",
    color: "#6d5dfc",
  },

  loading: {
    textAlign: "center",
    fontSize: "22px",
  },

  empty: {
    textAlign: "center",
    fontSize: "24px",
    color: "#999",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fill,minmax(260px,1fr))",
    gap: "25px",
  },

  card: {
    position: "relative",
    background: "#fff",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow:
      "0 8px 20px rgba(0,0,0,0.08)",
    transition: "0.3s",
  },

  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
  },

  content: {
    padding: "15px",
    textAlign: "center",
  },

  price: {
    color: "#6d5dfc",
    fontSize: "22px",
    fontWeight: "bold",
  },

  buyBtn: {
    width: "100%",
    padding: "10px",
    border: "none",
    borderRadius: "8px",
    background: "#6d5dfc",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  },

  deleteBtn: {
    position: "absolute",
    top: "10px",
    right: "10px",
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    border: "none",
    background: "#ff4d4f",
    color: "white",
    cursor: "pointer",
    zIndex: 10,
  },
};