
import { assets } from '../../assets/assets';
import './Footer.css';

const Footer = () => {
  return (
   <div id="footer" className="footer">
    <div className="footer-content">
      <div className="footer-content-left">
        <img src={assets.logo}></img>
        <p>Food Delivery Website</p>
        <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt=""/>
            <img src={assets.twitter_icon} alt=""/>
            <img src={assets.linkedin_icon} alt=""/>
        </div>
        </div> 
        <div className="footer-content-center">
<h2
  style={{
    fontSize: "34px",
    fontWeight: "900",
    color: "rgb(124, 64, 25)",
  }}
>
  Company
</h2>

            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div> 
        <div className="footer-content-right">
            <h2>get in touch</h2>
            <ul>
                <li>+1-222-353-3674</li>
                <li>contact@fooddeliveryweb.com</li>
            </ul>
        </div>
        
    </div>
  <hr
  style={{
    border: "none",
    height: "2px",
    width: "70%",
    margin: "40px auto",
    backgroundColor: "rgba(26, 29, 37, 1)",
  }}
/>

    
   </div>
  )
}

export default Footer  ;
