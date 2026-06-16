

export function Footer() {
  return (
    <div style={styles.footer}>
      
      {/* Top Section */}
      <div style={styles.topSection}>
        
        {/* About */}
        <div>
          <h3 style={styles.heading}>ABOUT</h3>
          <p style={styles.text}>Contact Us</p>
          <p style={styles.text}>About Us</p>
          <p style={styles.text}>Careers</p>
          <p style={styles.text}>ShopKart Stories</p>
          <p style={styles.text}>Press</p>
          <p style={styles.text}>Corporate Information</p>
        </div>

        {/* Help */}
        <div>
          <h3 style={styles.heading}>HELP</h3>
          <p style={styles.text}>Payments</p>
          <p style={styles.text}>Shipping</p>
          <p style={styles.text}>Cancellation & Returns</p>
          <p style={styles.text}>FAQ</p>

{/* Social + App */}
          <h3 style={{ ...styles.heading, marginTop: "30px" }}>
            SOCIAL
          </h3>

          <div style={styles.socialIcons}>
            <span style={styles.icon}>📘</span>
            <span style={styles.icon}>🐦</span>
            <span style={styles.icon}>📷</span>
            <span style={styles.icon}>▶️</span>
          </div>

          <h3 style={{ ...styles.heading, marginTop: "30px" }}>
            DOWNLOAD APP
          </h3>

          <button style={styles.button}>📱 Google Play</button>
          <button style={styles.button}>🍎 App Store</button>
        </div>

        {/* Policy */}
        <div>
          <h3 style={styles.heading}>POLICY</h3>
          <p style={styles.text}>Return Policy</p>
          <p style={styles.text}>Terms of Use</p>
          <p style={styles.text}>Security</p>
          <p style={styles.text}>Privacy</p>
          <p style={styles.text}>Shipping Policy</p>
        </div>

      </div>

      {/* Bottom Section */}
      <div style={styles.bottom}>
        <div style={styles.features}>
          <span>🔒 Secure Payments</span>
          <span>↩️ Easy Returns</span>
          <span>✅ Genuine Products</span>
        </div>

        <div style={styles.bottomLinks}>
          <span>Terms</span>
          <span>•</span>
          <span>Privacy</span>
          <span>•</span>
          <span>Returns</span>
          <span>•</span>
          <span>© 2026 ShopKart</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  footer: {
    backgroundColor: "#0b1020",
    color: "white",
    padding: "30px 20px",
    fontFamily: "Arial",
  },

  topSection: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "40px",
    
  },

  heading: {
    fontSize: "20px",
    marginBottom: "20px",
    fontWeight: "bold",
  },

  text: {
    color: "#b0b0b0",
    marginBottom: "15px",
    fontSize: "16px",
    cursor: "pointer",
  },

  socialIcons: {
    display: "flex",
    gap: "10px",
  },

  icon: {
    width: "45px",
    height: "45px",
    backgroundColor: "#1b2235",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "22px",
    cursor: "pointer",
  },

  button: {
    width: "100%",
    padding: "15px",
    marginTop: "10px",
    border: "none",
    borderRadius: "12px",
    backgroundColor: "#1b2235",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",

  },

  bottom: {
    marginTop: "40px",
    borderTop: "1px solid #222",
    paddingTop: "20px",
    textAlign: "right",
  },

  features: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
   
    marginBottom: "20px",
    color: "#cfcfcf",
  },

  bottomLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
   
    color: "#999",
  },
};
