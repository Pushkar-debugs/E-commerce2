export function Categories() {
  const categories = [
    { icon: "🎭", name: "Silicone Mask" },
    { icon: "❄️", name: "AC" },
    { icon: "🏠", name: "Appliances" },
    { icon: "👜", name: "Bags" },

    { icon: "💄", name: "Beauty" },
    { icon: "💠", name: "Body" },
    { icon: "📚", name: "Books" },
    { icon: "📷", name: "Cameras" },

    { icon: "👔", name: "Clothing" },
    { icon: "💻", name: "Electronics" },
    { icon: "🎭", name: "Fancy Dress" },
    { icon: "👗", name: "Fashion" },

    { icon: "👟", name: "Footwear" },
    { icon: "🛋️", name: "Furniture" },
    { icon: "💊", name: "Health Supplements" },
    { icon: "🛋️", name: "Home & Furniture" },

    { icon: "🏡", name: "Home Decor" },
    { icon: "💠", name: "Home Furnishing" },
    { icon: "🛠️", name: "Home Improvement" },
    { icon: "💎", name: "Jewellery" },

    { icon: "🍳", name: "Kitchen, Cookware & Serveware" },
    { icon: "⌨️", name: "Laptop Accessories" },
    { icon: "🎁", name: "Laptops" },
    { icon: "📱", name: "Mobile Back Cover" },

    { icon: "📲", name: "Mobiles" },
    { icon: "🏷️", name: "Other" },
    { icon: "⚽", name: "Sports" },
    { icon: "📺", name: "Televisions" },

    { icon: "🧸", name: "Toys" },
    { icon: "🎁", name: "Vehicles" },
    { icon: "✨", name: "Watch" },
    { icon: "⌚", name: "Watches" },
  ];

  return (
    <div style={styles.container}>

      {/* Header */}
      <div style={styles.header}>
        <h2 style={styles.title}>Shop By Category</h2>
        <p style={styles.viewAll}>View All →</p>
      </div>

      {/* Categories */}
      <div style={styles.grid}>
        {categories.map((item, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.iconBox}>
              {item.icon}
            </div>

            <p style={styles.name}>
              {item.name}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}

const styles = {
  container: {
    background: "linear-gradient(to Bottom right , #470fc0, #0af244)",
    
    padding: "25px",
    borderRadius: "12px",
    fontFamily: "Arial",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "25px",
  },

  title: {
    margin: 0,
    fontSize: "32px",
    fontWeight: "bold",
    color: "#111",
  },

  viewAll: {
    color: "#0066ff",
    fontSize: "22px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "30px 20px",
  },

  card: {
    textAlign: "center",
  },

  iconBox: {
    width: "85px",
    height: "85px",
    margin: "auto",
    backgroundColor: "#ececf1",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "38px",
  },

  name: {
    marginTop: "12px",
    fontSize: "16px",
    color: "#555",
    lineHeight: "22px",
  },
};
