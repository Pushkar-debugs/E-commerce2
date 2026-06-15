export function Testimonials() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>What Our Customers Say</h1>

      <p style={styles.subHeading}>
        Thousands of happy customers trust AuraCart for quality and service.
      </p>

      <div style={styles.cards}>
        <div style={styles.card}>
          <img
            src="https://randomuser.me/api/portraits/women/65.jpg"
            alt="Customer"
            style={styles.avatar}
          />

          <h3>Ananya Sharma</h3>

          <p style={styles.review}>
            “Amazing shopping experience! The quality exceeded my expectations
            and the delivery was super fast.”
          </p>

          <p style={styles.rating}>⭐⭐⭐⭐⭐</p>
        </div>

        <div style={styles.card}>
          <img
            src="https://randomuser.me/api/portraits/men/41.jpg"
            alt="Customer"
            style={styles.avatar}
          />

          <h3>Rohan Mehta</h3>

          <p style={styles.review}>
            “I ordered electronics and everything arrived perfectly packed.
            Highly recommended for online shopping.”
          </p>

          <p style={styles.rating}>⭐⭐⭐⭐⭐</p>
        </div>

        <div style={styles.card}>
          <img
            src="https://randomuser.me/api/portraits/women/32.jpg"
            alt="Customer"
            style={styles.avatar}
          />

          <h3>Priya Verma</h3>

          <p style={styles.review}>
            “Stylish products, affordable prices and excellent customer support.
            I’ll definitely shop again.”
          </p>

          <p style={styles.rating}>⭐⭐⭐⭐⭐</p>
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
    fontSize: "18px",
    color: "#666",
    marginBottom: "40px",
  },

  cards: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "25px",
  },

  card: {
    width: "300px",
    backgroundColor: "#F8F7FF",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 8px 18px rgba(0,0,0,0.08)",
  },

  avatar: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "15px",
  },

  review: {
    color: "#555",
    lineHeight: "28px",
    marginTop: "15px",
  },

  rating: {
    fontSize: "22px",
    marginTop: "15px",
  },
};