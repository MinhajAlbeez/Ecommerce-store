import React, { useState } from 'react';
import './NewNavbar.css';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState({
    category1: false,
    category2: false,
    category3: false,
  });

  const toggleDropdown = (category) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  const closeDropdown = (category) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [category]: false,
    }));
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <a className="navbar-brand" href="https://bootstrapcreative.com/">Mega Dropdown</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Category</a>
          </li>
          <li 
            className={`nav-item dropdown ${isDropdownOpen.category1 ? 'show' : ''}`}
            onMouseEnter={() => toggleDropdown('category1')}
            onMouseLeave={() => closeDropdown('category1')}
          >
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded={isDropdownOpen.category1}>
              Category 1
            </a>
            <div className={`dropdown-menu ${isDropdownOpen.category1 ? 'show' : ''}`} aria-labelledby="navbarDropdown">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <span className="text-uppercase">Category 1</span>
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link active" href="#">Active</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Link item</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Link item</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link active" href="#">Active</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Link item</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Link item</a>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="col-md-4">
                    <a target="_blank" href="https://bootstrapcreative.com/resources/a-beginners-guide-to-hubspot-cms/">
                      <img src="https://i0.wp.com/bootstrapcreative.com/wp-bc/wp-content/uploads/2022/07/beginners-guide-to-hubspot-cms-cover.png?w=200&ssl=1" alt="Web Design Guides" className="img-fluid" />
                    </a>
                    <p>Get Free Guides</p>
                  </div> */}
                </div>
              </div>
            </div>
          </li>
          {/* Repeat similar structure for Category 2 and Category 3 */}
        </ul>
        {/* <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
        </form> */}
      </div>
    </nav>
  );
};

export default Navbar;
