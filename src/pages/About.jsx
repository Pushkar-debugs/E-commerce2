export function About() {
  return (
    <div style={styles.page}>

      {/* About Title */}
      <h1 style={styles.mainTitle}>
        About Us
      </h1>

      {/* Welcome Section */}
      <div style={styles.welcomeBox}>
        <h2 style={styles.welcomeTitle}>
          Welcome to ShopKart 🛍️
        </h2>

        <p style={styles.welcomeText}>
          Your trusted online shopping destination for
          quality products at the best prices. We bring
          you a curated selection of fashion, electronics,
          beauty, home essentials, and much more — all
          delivered right to your doorstep with love and
          care.
        </p>
      </div>

      {/* Story Section */}
      <div style={styles.card}>
        <h2 style={styles.heading}>
          Our Story
        </h2>

        <p style={styles.text}>
          ShopKart was born out of a simple idea — to make
          online shopping easy, affordable, and trustworthy
          for everyone in India. We noticed that many
          shoppers struggled with unreliable products,
          inflated prices, and poor customer service.
          We set out to change that by building a platform
          that puts the customer first.
        </p>

        <p style={styles.text}>
          From humble beginnings, we have grown into a
          marketplace that serves thousands of happy
          customers across India, offering products from
          top brands and trusted sellers at competitive
          prices.
        </p>

        <h2 style={styles.heading}>
          Our Mission
        </h2>

        <p style={styles.text}>
          To provide every Indian household access to
          quality products at fair prices, backed by
          exceptional customer service and a seamless
          shopping experience. We believe that everyone
          deserves the best, regardless of where they
          live or what their budget is.
        </p>
      </div>

      {/* Why Choose Us */}
      <h2 style={styles.sectionTitle}>
        Why Choose Us?
      </h2>

      <div style={styles.featureCard}>
        <div style={styles.icon}>🛡️</div>

        <h3 style={styles.featureTitle}>
          100% Genuine Products
        </h3>

        <p style={styles.featureText}>
          Every product is quality-checked and sourced
          from verified sellers and brands.
        </p>
      </div>

      <div style={styles.featureCard}>
        <div style={styles.icon}>🚚</div>

        <h3 style={styles.featureTitle}>
          Fast & Free Delivery
        </h3>

        <p style={styles.featureText}>
          Enjoy free delivery on most orders with
          real-time tracking for peace of mind.
        </p>
      </div>

      <div style={styles.featureCard}>
        <div style={styles.icon}>💙</div>

        <h3 style={styles.featureTitle}>
          Customer First
        </h3>

        <p style={styles.featureText}>
          Your satisfaction is our top priority.
          Easy returns, quick refunds, and 24/7 support.
        </p>
      </div>

      <div style={styles.featureCard}>
        <div style={styles.icon}>⭐</div>

        <h3 style={styles.featureTitle}>
          Best Prices
        </h3>

        <p style={styles.featureText}>
          We negotiate directly with brands to bring
          you the lowest prices and biggest deals.
        </p>
      </div>

      <div style={styles.featureCard}>
        <div style={styles.icon}>👥</div>

        <h3 style={styles.featureTitle}>
          Trusted by Thousands
        </h3>

        <p style={styles.featureText}>
          Thousands of satisfied customers trust ShopKart
          for their daily shopping needs.
        </p>
      </div>

      <div style={styles.featureCard}>
        <div style={styles.icon}>🏅</div>

        <h3 style={styles.featureTitle}>
          Quality Assured
        </h3>

        <p style={styles.featureText}>
          Rigorous quality checks ensure every product
          meets our high standards.
        </p>
      </div>

      {/* Our Values */}
      <div style={styles.card}>
        <h2 style={styles.heading}>
          Our Values
        </h2>

        <ul style={styles.list}>
          <li>
            <b>Transparency:</b> Honest pricing,
            clear policies, no hidden charges
          </li>

          <li>
            <b>Trust:</b> Building long-term
            relationships with our customers
          </li>

          <li>
            <b>Quality:</b> Offering only products
            that meet our quality standards
          </li>

          <li>
            <b>Innovation:</b> Continuously improving
            our platform for a better experience
          </li>

          <li>
            <b>Community:</b> Supporting local
            businesses and artisans
          </li>
        </ul>

        {/* Contact */}
        <h2 style={styles.heading}>
          Contact Information
        </h2>

        <p style={styles.text}>
          We're always here to help. Reach out to us anytime:
        </p>

        <div style={styles.contact}>
          <p>📧 Email: support@shopkart.com</p>
          <p>📞 Phone: +91-XXXXXXXXXX</p>
          <p>📍 Address: [Your Business Address], India</p>
          <p>⏰ Business Hours: Mon-Sat, 9:00 AM - 7:00 PM IST</p>
        </div>
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

  mainTitle: {
    fontSize: "55px",
    fontWeight: "bold",
    color: "#111",
    marginBottom: "25px",
  },

  welcomeBox: {
    backgroundColor: "#eef2ff",
    padding: "40px",
    borderRadius: "22px",
    textAlign: "center",
    marginBottom: "30px",
  },

  welcomeTitle: {
    fontSize: "42px",
    marginBottom: "20px",
  },

  welcomeText: {
    fontSize: "26px",
    color: "#666",
    lineHeight: "45px",
  },

  card: {
    backgroundColor: "white",
    padding: "35px",
    borderRadius: "20px",
    marginBottom: "30px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },

  heading: {
    fontSize: "42px",
    marginBottom: "25px",
    color: "#111",
  },

  text: {
    fontSize: "25px",
    color: "#666",
    lineHeight: "45px",
    marginBottom: "25px",
  },

  sectionTitle: {
    fontSize: "50px",
    marginBottom: "25px",
    color: "#111",
  },

  featureCard: {
    backgroundColor: "#f9fafb",
    padding: "35px",
    borderRadius: "22px",
    textAlign: "center",
    marginBottom: "25px",
  },

  icon: {
    fontSize: "60px",
    marginBottom: "20px",
  },

  featureTitle: {
    fontSize: "38px",
    marginBottom: "15px",
    color: "#111",
  },

  featureText: {
    fontSize: "24px",
    color: "#666",
    lineHeight: "40px",
  },

  list: {
    fontSize: "25px",
    color: "#666",
    lineHeight: "50px",
    paddingLeft: "30px",
  },

  contact: {
    fontSize: "24px",
    color: "#666",
    lineHeight: "45px",
    marginTop: "15px",
  },
};