import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div style={styles.navbar}>
      <h2 style={styles.logo}>Shopkart</h2>

      <div style={styles.menu}>
        <Link to="/" style={styles.link}>Home</Link>

        <Link to="/products" style={styles.link}>
          Products
        </Link>

        <Link to="/add" style={styles.link}>
          Add Product
        </Link>

        <Link to="/about" style={styles.link}>
          About
        </Link>

        <Link to="/contact" style={styles.link}>
          Contact
        </Link>
        <br />
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    background: "linear-gradient(90deg, blue, green)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 40px",
    color: "white",
  },

  logo: {
    margin: 0,
    fontSize: "30px",
    fontWeight: "bold",
  },

  menu: {
    display: "flex",
    gap: "25px",
  },

  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "17px",
  },
};