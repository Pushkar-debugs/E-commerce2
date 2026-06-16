
export function Contact() {
  return (
    <div style={styles.page}>
      <div style={styles.h}><h1> 
        Contact Us 
         </h1></div>
      {/* CONTACT INFO */}
      <div style={styles.card}>

        <h1 style={styles.mainTitle}>
          Get In Touch
        </h1>

        <p style={styles.description}>
          We'd love to hear from you! Whether you have a
          question about orders, products, pricing, or
          anything else — our team is ready to help.
        </p>

        {/* Email */}
        <div style={styles.infoRow}>
          <div style={styles.iconBox}>✉️</div>

          <div>
            <h3 style={styles.infoTitle}>
              Email
            </h3>

            <p style={styles.infoText}>
              support@shopkart.com
            </p>

            <p style={styles.subText}>
              We reply within 24-48 hours
            </p>
          </div>
        </div>

        {/* Phone */}
        <div style={styles.infoRow}>
          <div style={styles.iconBox}>📞</div>

          <div>
            <h3 style={styles.infoTitle}>
              Phone
            </h3>

            <p style={styles.infoText}>
              +91-XXXXXXXXXX
            </p>

            <p style={styles.subText}>
              Mon-Sat, 9:00 AM - 7:00 PM IST
            </p>
          </div>
        </div>

        {/* Address */}
        <div style={styles.infoRow}>
          <div style={styles.iconBox}>📍</div>

          <div>
            <h3 style={styles.infoTitle}>
              Office Address
            </h3>

            <p style={styles.infoText}>
              [Your Business Address]
            </p>

            <p style={styles.subText}>
              India
            </p>
          </div>
        </div>

        {/* Business Hours */}
        <div style={styles.infoRow}>
          <div style={styles.iconBox}>🕒</div>

          <div>
            <h3 style={styles.infoTitle}>
              Business Hours
            </h3>

            <p style={styles.infoText}>
              Monday - Saturday: 9:00 AM - 7:00 PM IST
            </p>

            <p style={styles.subText}>
              Sunday: Closed
            </p>
          </div>
        </div>

      </div>

      {/* MESSAGE FORM */}
      <div style={styles.card}>

        <h1 style={styles.mainTitle}>
          Send Us a Message
        </h1>

        {/* Full Name */}
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Full Name *
          </label>

          <input
            type="text"
            placeholder="Your full name"
            style={styles.input}
          />
        </div>

        {/* Email */}
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Email Address *
          </label>

          <input
            type="email"
            placeholder="your@email.com"
            style={styles.input}
          />
        </div>

        {/* Subject */}
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Subject
          </label>

          <input
            type="text"
            placeholder="What is this regarding?"
            style={styles.input}
          />
        </div>

        {/* Message */}
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Message *
          </label>

          <textarea
            placeholder="Write your message here..."
            style={styles.textarea}
          ></textarea>
        </div>

        {/* Button */}
        <button style={styles.button}>
          ✈️ Send Message
        </button>

      </div>

    </div>
  );
}

const styles = {
  page: {
    backgroundColor: "#f5f5f5",
    padding: "25px",
    fontFamily: "Arial",
  },

  h: {
    fontSize: "48px",
    marginBottom: "25px",
    backgroundColor: "blue",
    padding: "35px",
    height: "80px",
    color: "black",
   
    textAlign: "left",
    },

  card: {
    backgroundColor: "white",
    borderRadius: "22px",
    padding: "35px",
    marginBottom: "30px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },

  mainTitle: {
    fontSize: "48px",
    marginBottom: "25px",
    color: "#111",
  },

  description: {
    fontSize: "25px",
    color: "#666",
    lineHeight: "42px",
    marginBottom: "35px",
  },

  infoRow: {
    display: "flex",
    gap: "25px",
    marginBottom: "35px",
    alignItems: "center",
  },

  iconBox: {
    width: "75px",
    height: "75px",
    borderRadius: "50%",
    backgroundColor: "#eef2ff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "34px",
  },

  infoTitle: {
    fontSize: "34px",
    margin: 0,
    color: "#111",
    aligntItems: "left",
    alignContent: "left",
    aligntext: "left",

  },

  infoText: {
    fontSize: "28px",
    color: "#555",
    marginTop: "10px",
    marginBottom: "5px",
  },

  subText: {
    fontSize: "24px",
    color: "#777",
  },

  formGroup: {
    marginBottom: "28px",
    textAlign: "left",
  },

  label: {
    display: "block",
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "12px",
    color: "#111",
  },

  input: {
    width: "100%",
    padding: "22px",
    fontSize: "24px",
    borderRadius: "14px",
    border: "1px solid #ddd",
    backgroundColor: "#f9fafb",
    outline: "none",
    boxSizing: "border-box",
  },

  textarea: {
    width: "100%",
    height: "220px",
    padding: "22px",
    fontSize: "24px",
    borderRadius: "14px",
    border: "1px solid #ddd",
    backgroundColor: "#f9fafb",
    resize: "none",
    outline: "none",
    boxSizing: "border-box",
  },

  button: {
    width: "100%",
    padding: "22px",
    border: "none",
    borderRadius: "14px",
    backgroundColor: "#0d6efd",
    color: "white",
    fontSize: "30px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px",
  },
};