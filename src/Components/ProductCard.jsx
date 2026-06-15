export function ProductCard() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Trending Products</h1>
      <p style={styles.subHeading}>
        Handpicked products loved by thousands of customers.
      </p>

      <div style={styles.grid}>
        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
            alt="Sneakers"
            style={styles.image}
          />
          <h3>Premium Sneakers</h3>
          <p style={styles.price}>₹4,999</p>
          <button style={styles.button}>Add to Cart</button>
        </div>

        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600"
            alt="Phone"
            style={styles.image}
          />
          <h3>Smartphone Pro</h3>
          <p style={styles.price}>₹39,999</p>
          <button style={styles.button}>Add to Cart</button>
        </div>

        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
            alt="Headphones"
            style={styles.image}
          />
          <h3>Wireless Headphones</h3>
          <p style={styles.price}>₹5,499</p>
          <button style={styles.button}>Add to Cart</button>
        </div>

        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
            alt="Watch"
            style={styles.image}
          />
          <h3>Smart Watch</h3>
          <p style={styles.price}>₹8,999</p>
          <button style={styles.button}>Add to Cart</button>
        </div>

        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600"
            alt="Shoes"
            style={styles.image}
          />
          <h3>Running Shoes</h3>
          <p style={styles.price}>₹3,499</p>
          <button style={styles.button}>Add to Cart</button>
        </div>

        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600"
            alt="Backpack"
            style={styles.image}
          />
          <h3>Travel Backpack</h3>
          <p style={styles.price}>₹2,299</p>
          <button style={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "70px 40px",
    backgroundColor: "#F8F7FF",
    textAlign: "center",
  },

  heading: {
    fontSize: "42px",
    color: "#2D2D2D",
    marginBottom: "10px",
  },

  subHeading: {
    color: "#666",
    fontSize: "18px",
    marginBottom: "40px",
  },

  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "25px",
  },

  card: {
    width: "250px",
    backgroundColor: "white",
    borderRadius: "18px",
    overflow: "hidden",
    boxShadow: "0 8px 18px rgba(0,0,0,0.08)",
    paddingBottom: "20px",
  },

  image: {
    width: "100%",
    height: "190px",
    objectFit: "cover",
  },

  price: {
    color: "#6C63FF",
    fontSize: "22px",
    fontWeight: "bold",
    margin: "12px 0",
  },

  button: {
    background: "linear-gradient(90deg, #6C63FF, #FF6B9A)",
    color: "white",
    border: "none",
    padding: "10px 22px",
    borderRadius: "25px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};