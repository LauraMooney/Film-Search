import React from 'react';
import './App';
import './App.css';

function Footer() {
    return (
      <footer className="footer">
          <p className='footercontent'>
              Created using IMDb API and React
          </p>   
        <div className="copyright">
          © {new Date().getFullYear()} made by{" "}
          <i className="tim-icons icon-heart-2" />
            Laura Mooney
        </div>
    </footer>
    );
  }
  
  export default Footer;