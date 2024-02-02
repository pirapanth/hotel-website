import './footer.css'

const Footer =() => {
    return(
        <div className='footer'>
        <img src='/src/assets/footer.jpg' alt="" className='footer-pic'></img>
        <div className="row-container">
        <div className="row-item">
        <h1>About</h1>
        <ul>
            <li>About Cinnamon Hotels & Resorts</li>
            <li>Media & Accolades</li>
            <li>Gallery</li>
            <li>CSR & Sustainability</li>
            <li>John Keelis Group</li>
            <li>Cinnamon Air</li>
            <li>Nature Trails</li>
            <li>Cinnamon Box Office</li>
            <li>Terms & Conditions</li>
            <li>Privacy Statement</li>
        </ul>
        </div>
        <div className="row-item">
        <h1>Get In Touch</h1>
        <ul>
            <li>Know  Sri lanka</li>
            <li>Know Maldives</li>
            <li>Contact Us</li>
            <li>FAQs</li>
        </ul>
        <br />
        <br />
        <h1>Sections</h1>
        <ul>
            <li>Careers</li>
            <li>Blog</li>
        </ul>
        </div>
        <div className="row-item">
        <h1>Follow</h1>
        <div className="social-media-row">
        <img src="/src/assets/facebook-logo.png" alt="Facebook" />
        <img src="/src/assets/twitter-logo.png" alt="Twitter" />
        <img src="/src/assets/linkedin-logo.png" alt="LinkedIn" />
        <img src="/src/assets/instagram-logo.png" alt="Instagram" />
        <img src="/src/assets/youtube-logo.png" alt="YouTube" />
        </div>
        <br />
        <h1>Get Cinnamon in your inbox</h1>
        <div className='comment'>
        <input type="email" name="email" id="email" placeholder='Gmail Address' />
        <button className='arrow-button'></button>
        </div>
        </div>
        </div>
  </div>
    )
  }
  
  
  export default Footer;