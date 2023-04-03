import React from 'react';
import { Link } from 'react-router-dom';
import '././styles/footer.css';


const Footer = () => {
  return (
    <div>
        <div className="footer-dark">
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="#">Tree Planting</a></li>
                                <li><a href="#">Home Visits</a></li>
                                <li><a href="#">Charity Work</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                <li><a href="https://pioneers-cloud-storage.herokuapp.com/">Company</a></li>
                                <li><a href="https://pioneers-cloud-storage.herokuapp.com/">Team</a></li>
                                <li><a href="https://pioneers-cloud-storage.herokuapp.com/">Activities</a></li>
                            </ul>

                        </div>
                        <div className="col-md-6 item text">
                            <h3>Future Pioneers Kenya</h3>
                            <p>Future Pioneers Kenya is a Non-Governmental organization based in Kenya.
                                It is mainly concerned with charity work in the society and solving challenges being faced
                                in Kenya such us Hunger, Floods, Water Pollution etc</p>
                        </div>
                        <br />
                        <Link to='/Donate'>
                            <button>Donate</button>
                        </Link>
                        <br/>
                        <div className="col item social">
                            <a href="https://m.facebook.com/Future-pioneers-105867837759040/"><i className="icon ion-social-facebook">f</i></a>
                            <a href="https://twitter.com/fpioneers_kenya"><i className="icon ion-social-twitter">t</i></a>
                            <a href="https://www.instagram.com/futurepioneerskenya/"><i className="icon ion-social-instagram">i</i></a>
                         <br />

                        </div>

                    </div>
                    <p className="copyright">Future Pioneers Kenya  &copy; 2023 All Rights Reserved</p>
                    </div>
            </footer>
        </div>
    </div>
)
}

export default Footer;