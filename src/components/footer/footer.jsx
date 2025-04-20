import React from "react";
import "./footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className='footer-top'>
          <div className='footer-top-logo'>
            <img
              className='footer-top-logo-img'
              src='/src/assets/header/logo.svg'
              alt='logo'
            ></img>
            <p className='footer-top-logo-text'>
              Takeaway & Delivery template for small - medium businesses.
            </p>
          </div>
          <div className='footer-top-menu'>
            <div className='footer-top-menu-list'>
              <div className='footer-top-menu-list-item'>
                <div>
                  <h5>company</h5>
                  <ul>
                    <li>
                      <a href='#'>Home</a>
                    </li>
                    <li>
                      <a href='#'>Order</a>
                    </li>
                    <li>
                      <a href='#'>FAQ</a>
                    </li>
                    <li>
                      <a href='#'>Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='footer-top-menu-list-item'>
                <div>
                  <h5>TEMPLATE</h5>
                  <ul>
                    <li>
                      <a href='https://www.google.com/'>Style Guide</a>
                    </li>
                    <li>
                      <a href='https://www.google.com/'>Changelog</a>
                    </li>
                    <li>
                      <a href='https://www.google.com/'>Licence</a>
                    </li>
                    <li>
                      <a href='https://www.google.com/'>Webflow University</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='footer-top-menu-list-item'>
                <div>
                  <h5>FLOWBASE</h5>
                  <ul>
                    <li>
                      <a href='#'>More Cloneables</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className='footer-container-bottom'>
          <div className='footer-bottom-text'>
            <p>
              Built by <a href='#'>Flowbase</a> · Powered by&nbsp;
              <a href='#'>Webflow</a>
            </p>
          </div>
          <div className='footer-bottom-icons'>
            <a href='#'>
              <img src='/src/assets/footer/instagram.svg' alt='instagram'></img>
            </a>
            <a href='#'>
              <img src='/src/assets/footer/twitter.svg' alt='twitter'></img>
            </a>
            <a href='#'>
              <img src='/src/assets/footer/youtube.svg' alt='youtube'></img>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
