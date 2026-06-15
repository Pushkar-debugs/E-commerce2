export function Contact() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact AuraCart</h1>

      <p style={styles.subHeading}>
        We'd love to hear from you! Feel free to reach out with any questions,
        feedback, or support requests.
      </p>

      <div style={styles.wrapper}>
        {/* Left Side */}
        <div style={styles.infoCard}>
          <h2 style={styles.title}>Get in Touch</h2>

          <p>📍 Mumbai, Maharashtra, India</p>
          <p>📧 support@auracart.com</p>
          <p>📞 +91 98765 43210</p>
          <p>🕒 Mon - Sat | 9:00 AM - 8:00 PM</p>

          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800"
            alt="Office"
            style={styles.image}
          />
        </div>

        {/* Right Side */}
        <div style={styles.formCard}>
          <h2 style={styles.title}>Send a Message</h2>

          <input
            type="text"
            placeholder="Enter your name"
            style={styles.input}
          />

          <input
            type="email"
            placeholder="Enter your email"
            style={styles.input}
          />

          <input
            type="text"
            placeholder="Subject"
            style={styles.input}
          />

          <textarea
            placeholder="Write your message..."
            rows="6"
            style={styles.textarea}
          ></textarea>

          <button style={styles.button}>
            Send Message
          </button>
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
    marginBottom: "10px",
  },

  subHeading: {
    textAlign: "center",
    color: "#666",
    fontSize: "18px",
    marginBottom: "45px",
  },

  wrapper: {
    display: "flex",
    justifyContent: "center",
    gap: "35px",
    flexWrap: "wrap",
  },

  infoCard: {
    flex: 1,
    minWidth: "320px",
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 8px 18px rgba(0,0,0,0.08)",
    lineHeight: "35px",
  },

  formCard: {
    flex: 1,
    minWidth: "320px",
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 8px 18px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  title: {
    color: "#6C63FF",
    marginBottom: "15px",
  },

  input: {
    padding: "14px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    fontSize: "16px",
  },

  textarea: {
    padding: "14px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    fontSize: "16px",
    resize: "none",
  },

  button: {
    background: "linear-gradient(90deg, #6C63FF, #FF6B9A)",
    color: "white",
    border: "none",
    padding: "14px",
    borderRadius: "30px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  image: {
    width: "100%",
    marginTop: "20px",
    borderRadius: "15px",
  },
};