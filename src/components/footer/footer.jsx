import './footer.css'

function Footer() {

  return (
  <>
    <footer>
        
            <div class="footer-top">
                <div class="footer-top-logo">
                    <img className='footer-top-logo-img' src="/src/assets/header/logo.svg" alt="logo" ></img>
                    <p className='footer-top-logo-text'>Takeaway & Delivery template for small - medium businesses.</p>
                </div>
                <div class="footer-top-menu">
                    <div class="footer-top-menu-list">
                        <div class="footer-top-menu-list-item">
                            <div>
                                <h5>company</h5>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Order</a></li>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                            
                        </div>
                        <div class="footer-top-menu-list-item">
                            <div>
                                <h5>TEMPLATE</h5>
                                <ul>
                                    <li><a href="#">Style Guide</a></li>
                                    <li><a href="#">Changelog</a></li>
                                    <li><a href="#">Licence</a></li>
                                    <li><a href="#">Webflow University</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="footer-top-menu-list-item">
                            <div>
                                <h5>FLOWBASE</h5>
                                <ul>
                                    <li><a href="#">More Cloneables</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <hr />
            <div class="footer-container-bottom">
                <div class="footer-bottom-text">
                    <p> Built by <a href="#">Flowbase</a> · Powered by  <a href="#">Webflow</a></p>
                </div>
                <div class="footer-bottom-icons">
                    <a href="#"><img src="/src/assets/footer/instagram.svg" alt="instagram"></img></a>
                    <a href="#"><img src="/src/assets/footer/twitter.svg" alt="twitter"></img></a>
                    <a href="#"><img src="/src/assets/footer/youtube.svg" alt="youtube"></img></a>
                </div>

            </div>
        
    </footer>
  </>

  );
}

export default Footer