
export function Hero() {
  return (
    <div style={styles.hero}>

      {/* Left Arrow */}
      <button style={{ ...styles.arrow, left: "20px" }}>
        ❮
      </button>

      {/* Content */}
      <div style={styles.content}>

        <p style={styles.smallText}>
          INDIA'S BIGGEST ONLINE SHOPPING STORE
        </p>

        <h1 style={styles.title}>
          ShopKart
        </h1>

        <h2 style={styles.subtitle}>
          Upgrade Your Lifestyle
        </h2>

        <p style={styles.description}>
          Discover fashion, electronics, gadgets,
          accessories and more with amazing deals
          and fast delivery.
        </p>

        <div style={styles.buttons}>
          <button style={styles.shopBtn}>
            Shop Now 🛒
          </button>

          <button style={styles.offerBtn}>
            View Offers
          </button>
        </div>

        {/* Dots */}
        <div style={styles.dots}>
          <span style={styles.activeDot}></span>
          <span style={styles.dot}></span>
          <span style={styles.dot}></span>
          <span style={styles.dot}></span>
          <span style={styles.dot}></span>
        </div>

      </div>

      {/* Right Side Image */}
      <div style={styles.imageSection}>
        <div style={styles.circle}></div>

        <div style={styles.shoppingBag}>
          🛍️
        </div>

        <div style={styles.phone}>
          📱
        </div>

        <div style={styles.box}>
          📦
        </div>

        <div style={styles.mainImage}>
          🛒
        </div>
      </div>

      {/* Right Arrow */}
      <button style={{ ...styles.arrow, right: "20px" }}>
        ❯
      </button>

    </div>
  );
}

const styles = {
  hero: {
    width: "91%",
    minHeight: "500px",
    background:
      "linear-gradient(135deg, #000428, #004e92, #3a0ca3)",
    borderRadius: "30px",
    padding: "50px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    color: "white",
    fontFamily: "Arial",
  },

  content: {
    width: "50%",
    zIndex: 2,
  },

  smallText: {
    color: "#ffd166",
    letterSpacing: "2px",
    fontSize: "14px",
    marginBottom: "70px",
  },

  title: {
    fontSize: "90px",
    margin: 0,
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: "45px",
    marginTop: "50px",
    color: "#f8f9fa",
  },

  description: {
    fontSize: "20px",
    lineHeight: "32px",
    color: "#dddddd",
    maxWidth: "550px",
    marginTop: "20px",
  },

  buttons: {
    display: "flex",
    gap: "20px",
    marginTop: "35px",
  },

  shopBtn: {
    padding: "16px 35px",
    border: "none",
    borderRadius: "40px",
    background:
      "linear-gradient(90deg, #ff006e, #ffbe0b)",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  offerBtn: {
    padding: "6px 35px",
    borderRadius: "40px",
    border: "2px solid white",
    background: "transparent",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
  },



  imageSection: {
    width: "40%",
    position: "relative",
    height: "400px",
  },

 

  mainImage: {
    fontSize: "180px",
    position: "absolute",
    top: "70px",
    right: "80px",
  },

  shoppingBag: {
    position: "absolute",
    top: "20px",
    right: "280px",
    fontSize: "60px",
    transform: "rotate(-15deg)",
  },

  phone: {
    position: "absolute",
    bottom: "30px",
    left: "50px",
    fontSize: "60px",
    transform: "rotate(20deg)",
  },

  box: {
    position: "absolute",
    top: "250px",
    right: "20px",
    fontSize: "55px",
    transform: "rotate(15deg)",
  },

  arrow: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "",
    fontSize: "28px",
    cursor: "pointer",
    zIndex: 5,
  },
};