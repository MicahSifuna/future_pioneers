import React from 'react';
import '././styles/header.css';
import logo from"../Assets/logo.jpg";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className='header-content'>
        <header className="p-3 bg-dark text-white w-100" style={{position: 'sticky'}}>
            <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                <img className="bi me-2 img-round" width="40" height="40" role="img" aria-label="Bootstrap" src={logo} />
                <h4 className='me-5'>Future Pioneers Kenya</h4>
                </a>
                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to='/' className="nav-link px-2 text-white">Home</Link></li>
                    <li><Link to='/Services' className="nav-link px-2 text-white">Services</Link></li>
                    <li><a href='https://pioneers-cloud-storage.herokuapp.com/' className="nav-link px-2 text-white">More</a></li>
                    <li><Link to='/Donate' className="nav-link px-2 text-white">Donate</Link></li>
                </ul>
                <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                    <input type="search" className="form-control form-control-dark" placeholder="Search Services" aria-label="Search"/>
                </form>

                <div className="text-end">
                <a href='https://pioneers-cloud-storage.herokuapp.com/' type="button" className="btn btn-outline-light me-0">Blogs</a>
                </div>
            </div>
            </div>
        </header>
    </div>
  )

}

export default Header