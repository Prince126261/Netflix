import React from 'react';
import './NetflixErrorPage.css'; // Assuming the CSS is in this file

const NetflixErrorPage = () => {
  return (
    <div className="netflix-error-container">
      <header className="netflix-header">
        <a href="/" className="netflix-logo">NETFLIX</a>
      </header>

      <main className="netflix-content">
        <h1>Lost your way?</h1>
        <p>Sorry, we can't find that page. You'll find lots to explore on the home page.</p>
        <a href="/" className="netflix-home-button">Netflix Home</a>
      </main>

      <footer className="netflix-footer">
        <span className="error-code">Error Code NSES-404</span>
        <span className="from-text">FROM LOST IN SPACE</span>
      </footer>
    </div>
  );
};

export default NetflixErrorPage;