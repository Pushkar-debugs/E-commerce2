export function Offers() {
  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <span style={styles.badge}>🎉 Limited Time Offer</span>

        <h1 style={styles.heading}>
          Flat 50% OFF <br />
          On Selected Collections
        </h1>

        <p style={styles.text}>
          Upgrade your lifestyle with exclusive discounts on fashion,
          electronics, accessories, and home essentials. Hurry, the offer
          ends soon!
        </p>

        <button style={styles.button}>
          Grab the Deal
        </button>
      </div>

      <div style={styles.right}>
        <img
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900"
          alt="Special Offer"
          style={styles.image}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    margin: "60px 40px",
    padding: "50px",
    borderRadius: "25px",
    background: "linear-gradient(135deg, #6C63FF, #FF6B9A)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    color: "white",
  },

  left: {
    width: "50%",
    minWidth: "300px",
  },

  badge: {
    backgroundColor: "white",
    color: "#6C63FF",
    padding: "8px 16px",
    borderRadius: "20px",
    fontWeight: "bold",
  },

  heading: {
    fontSize: "48px",
    marginTop: "20px",
    marginBottom: "20px",
    lineHeight: "60px",
  },

  text: {
    fontSize: "18px",
    lineHeight: "30px",
    marginBottom: "25px",
  },

  button: {
    backgroundColor: "white",
    color: "#6C63FF",
    border: "none",
    padding: "14px 30px",
    borderRadius: "30px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  right: {
    width: "40%",
    minWidth: "280px",
  },

  image: {
    width: "100%",
    borderRadius: "20px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
  },
};