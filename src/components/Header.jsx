import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ clearUserData }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearUserData(); // Clear user data on logout
    navigate('/');
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.title}>MovieNight</h1>
      <button onClick={handleLogout} style={styles.button} aria-label="Log out">
        Log Out
      </button>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1em',
    backgroundColor: '#333',
    color: '#fff',
  },
  title: {
    margin: 0,
  },
  button: {
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    padding: '0.5em 1em',
    cursor: 'pointer',
    borderRadius: '4px',
  },
};

export default Header;

