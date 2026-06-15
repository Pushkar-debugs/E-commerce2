export function Hero() {
  return (
    <div style={styles.hero}>
      <div style={styles.left}>
        <span style={styles.tag}>🔥 New Collection 2026</span>

        <h1 style={styles.heading}>
          Discover Style, Tech & Everyday Essentials
        </h1>

        <p style={styles.description}>
          AuraCart brings together fashion, electronics, gadgets and lifestyle
          products with premium quality and affordable prices. Upgrade your
          shopping experience today.
        </p>

        <button style={styles.button}>
          Shop Now
        </button>
      </div>

      <div style={styles.right}>
        <img
          src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1000"
          alt="Shopping"
          style={styles.image}
        />
      </div>
    </div>
  );
}

const styles = {
  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "70px 60px",
    background: "linear-gradient(135deg, #F8F7FF, #FFE8F2)",
    flexWrap: "wrap",
  },

  left: {
    width: "48%",
    minWidth: "300px",
  },

  tag: {
    backgroundColor: "#6C63FF",
    color: "white",
    padding: "8px 16px",
    borderRadius: "20px",
    fontSize: "14px",
  },

  heading: {
    fontSize: "56px",
    color: "#2D2D2D",
    marginTop: "20px",
    marginBottom: "20px",
    lineHeight: "65px",
  },

  description: {
    fontSize: "18px",
    color: "#666",
    lineHeight: "30px",
    marginBottom: "30px",
  },

  button: {
    background: "linear-gradient(90deg, #6C63FF, #FF6B9A)",
    color: "white",
    border: "none",
    padding: "15px 35px",
    borderRadius: "30px",
    fontSize: "17px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  right: {
    width: "45%",
    minWidth: "320px",
  },

  image: {
    width: "100%",
    borderRadius: "25px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  },
};