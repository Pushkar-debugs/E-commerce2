export function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Brand */}
        <div style={styles.section}>
          <h2 style={styles.logo}>AuraCart</h2>
          <p style={styles.text}>
            Your one-stop destination for fashion, electronics, lifestyle, and
            premium accessories. Shop smarter with AuraCart.
          </p>
        </div>

        {/* Quick Links */}
        <div style={styles.section}>
          <h3 style={styles.title}>Quick Links</h3>
          <p>Home</p>
          <p>Products</p>
          <p>About</p>
          <p>Contact</p>
        </div>

        {/* Categories */}
        <div style={styles.section}>
          <h3 style={styles.title}>Categories</h3>
          <p>Fashion</p>
          <p>Electronics</p>
          <p>Beauty</p>
          <p>Accessories</p>
        </div>

        {/* Contact */}
        <div style={styles.section}>
          <h3 style={styles.title}>Contact</h3>
          <p>📧 support@auracart.com</p>
          <p>📞 +91 98765 43210</p>
          <p>📍 Mumbai, Maharashtra</p>
        </div>
      </div>

      <hr style={styles.line} />

      <p style={styles.copyright}>
        © 2026 AuraCart. All Rights Reserved.
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    background: "linear-gradient(90deg, #6C63FF, #FF6B9A)",
    color: "white",
    padding: "50px 40px 20px",
    marginTop: "50px",
  },

  container: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "30px",
  },

  section: {
    width: "220px",
  },

  logo: {
    fontSize: "30px",
    marginBottom: "15px",
  },

  title: {
    marginBottom: "15px",
  },

  text: {
    lineHeight: "26px",
  },

  line: {
    marginTop: "30px",
    border: "1px solid rgba(255,255,255,0.3)",
  },

  copyright: {
    textAlign: "center",
    marginTop: "20px",
    fontSize: "15px",
  },
};