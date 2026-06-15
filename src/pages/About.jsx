export function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About AuraCart</h1>

      <p style={styles.description}>
        AuraCart is a next-generation online shopping platform that brings
        together fashion, electronics, lifestyle products, and accessories
        under one roof. Our goal is to provide premium quality products,
        affordable prices, and an exceptional shopping experience for every
        customer.
      </p>

      <div style={styles.stats}>
        <div style={styles.statCard}>
          <h2>50K+</h2>
          <p>Happy Customers</p>
        </div>

        <div style={styles.statCard}>
          <h2>1,000+</h2>
          <p>Products</p>
        </div>

        <div style={styles.statCard}>
          <h2>100+</h2>
          <p>Trusted Brands</p>
        </div>

        <div style={styles.statCard}>
          <h2>24/7</h2>
          <p>Customer Support</p>
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.left}>
          <img
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=900"
            alt="Shopping Team"
            style={styles.image}
          />
        </div>

        <div style={styles.right}>
          <h2 style={styles.subTitle}>Why Choose AuraCart?</h2>

          <ul style={styles.list}>
            <li>✅ Premium Quality Products</li>
            <li>✅ Fast & Secure Delivery</li>
            <li>✅ Affordable Prices</li>
            <li>✅ Easy Returns & Refunds</li>
            <li>✅ Trusted by Thousands of Customers</li>
            <li>✅ Excellent Customer Support</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "70px 40px",
    backgroundColor: "#F8F7FF",
    minHeight: "100vh",
  },

  heading: {
    textAlign: "center",
    fontSize: "46px",
    color: "#2D2D2D",
    marginBottom: "20px",
  },

  description: {
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center",
    fontSize: "18px",
    color: "#666",
    lineHeight: "30px",
  },

  stats: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    marginTop: "50px",
    marginBottom: "60px",
  },

  statCard: {
    width: "200px",
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "18px",
    boxShadow: "0 8px 18px rgba(0,0,0,0.08)",
    textAlign: "center",
  },

  section: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "40px",
  },

  left: {
    flex: 1,
    minWidth: "300px",
  },

  right: {
    flex: 1,
    minWidth: "300px",
  },

  image: {
    width: "100%",
    borderRadius: "20px",
    boxShadow: "0 8px 18px rgba(0,0,0,0.12)",
  },

  subTitle: {
    fontSize: "34px",
    color: "#6C63FF",
    marginBottom: "20px",
  },

  list: {
    fontSize: "18px",
    lineHeight: "38px",
    color: "#444",
  },
};