export function Categories() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Shop by Category</h1>
      <p style={styles.subHeading}>
        Explore thousands of products across our most popular collections.
      </p>

      <div style={styles.grid}>
        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500"
            alt="Fashion"
            style={styles.image}
          />
          <h3>Fashion</h3>
        </div>

        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
            alt="Electronics"
            style={styles.image}
          />
          <h3>Electronics</h3>
        </div>

        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
            alt="Shoes"
            style={styles.image}
          />
          <h3>Shoes</h3>
        </div>

        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500"
            alt="Beauty"
            style={styles.image}
          />
          <h3>Beauty</h3>
        </div>

        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500"
            alt="Home Decor"
            style={styles.image}
          />
          <h3>Home Decor</h3>
        </div>

        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500"
            alt="Accessories"
            style={styles.image}
          />
          <h3>Accessories</h3>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "70px 40px",
    backgroundColor: "#ffffff",
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
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "25px",
  },

  card: {
    width: "220px",
    backgroundColor: "#F8F7FF",
    borderRadius: "18px",
    overflow: "hidden",
    boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
    transition: "0.3s",
    paddingBottom: "15px",
  },

  image: {
    width: "100%",
    height: "170px",
    objectFit: "cover",
  },
};