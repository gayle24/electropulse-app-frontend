import React from 'react';

function Footer() {
  return (
    <footer className="footer bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <h5>Need Help?</h5>
            <ul className="list-unstyled">
              <li>
                <a href='#'>Help Center</a>
              </li>
              <li>
                <a href='#'>Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5>Contact Us</h5>
            <p>Contact Information:</p>
            <p>Phone: 0720000093</p>
            <p>Email: <a href="mailto:info@ElectroPulse.com">info@ElectroPulse.com</a></p>
          </div>
          <div className="col-lg-4 col-md-12">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer" className="text-light">Instagram</a></li>
              <li><a href="https://www.facebook.com/your-facebook-profile" target="_blank" rel="noopener noreferrer" className="text-light">Facebook</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <p>&copy; {new Date().getFullYear()} Electronic Shop. All rights reserved.</p>
      </div>
    </footer>

  );
}

export default Footer;
