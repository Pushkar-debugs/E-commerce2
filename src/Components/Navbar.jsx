import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabase";

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    let mounted = true;
    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return;
      setUser(data.session?.user ?? null);
    });

    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      mounted = false;
      // unsubscribe if available
      try { data?.subscription?.unsubscribe(); } catch (e) {}
    };
  }, []);

  // hide navbar on auth pages (after hooks)
  const hideOn = ['/login', '/signup'];
  if (hideOn.includes(location.pathname)) return null;

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    navigate('/login');
  };

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

        {user ? (
          <button onClick={signOut} style={styles.signout}>Sign out</button>
        ) : (
          <Link to="/login" style={styles.link}>Sign in</Link>
        )}
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