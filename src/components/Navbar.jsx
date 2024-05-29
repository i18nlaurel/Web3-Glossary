import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.logo}>
        <img src="./public/education-dao-circle.png" alt="Logo" style={styles.logoImage} />
        Education DAO Glossary
      </Link>
    </nav>
  );
};

const styles = {
  navbar: {
    padding: '1rem',
    backgroundColor: '#333',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    textDecoration: 'none',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
  },
  logoImage: {
    marginRight: '0.5rem',
    height: '40px',
  },
};

export default Navbar;
