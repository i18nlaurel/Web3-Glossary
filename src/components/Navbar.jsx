import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher'; // Import LanguageSwitcher

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.logo}>
        <img src="./education-dao-circle.png" alt="Logo" style={styles.logoImage} />
        Education DAO Glossary
      </Link>
      <LanguageSwitcher /> {/* Add LanguageSwitcher */}
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
    justifyContent: 'space-between', // Adjust to space items
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
