import React from 'react'

function Treatement() {
  return (
    <>
  <div className="header_top_section">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="header_top_main">
            <div className="call_text">
              <a href="#">
                <span className="padding_right0">
                  <i className="fa fa-phone" aria-hidden="true" />
                </span>{" "}
                Call : +01 1234567890
              </a>
            </div>
            <div className="call_text_2">
              <a href="#">
                <span className="padding_right0">
                  <i className="fa fa-envelope" aria-hidden="true" />
                </span>{" "}
                demo@gmail.com
              </a>
            </div>
            <div className="call_text_1">
              <a href="#">
                <span className="padding_right0">
                  <i className="fa fa-map-marker" aria-hidden="true" />
                </span>{" "}
                Location
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* header top section end */}
  {/* header section start */}
  <div className="header_section">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="index.html">
          <img src="images/logo.png" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="index.html">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about.html">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="treatment.html">
                Treatment
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="doctors.html">
                Doctors
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="blog.html">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">
                Contact Us
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0"></form>
        </div>
      </nav>
      <div className="custom_bg">
        <div className="custom_menu">
          <ul>
            <li className="active">
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="treatment.html">Treatment</a>
            </li>
            <li>
              <a href="doctors.html">Doctors</a>
            </li>
            <li>
              <a href="blog.html">Blog</a>
            </li>
            <li>
              <a href="contact.html">Contact Us</a>
            </li>
          </ul>
        </div>
        <form className="form-inline my-2 my-lg-0">
          <div className="search_btn">
            <li>
              <a href="#">
                <i className="fa fa-user" aria-hidden="true" />
                <span className="signup_text">Login</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-user" aria-hidden="true" />
                <span className="signup_text">Sign Up</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-search" aria-hidden="true" />
              </a>
            </li>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* header section end */}
  {/* treatment section start */}
  <div className="treatment_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="treatment_taital">Hospital Treatment</h1>
        </div>
      </div>
      <div className="treatment_section_2">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <h1 className="number_text">01</h1>
            <h2 className="care_text">Nephrologist Care</h2>
            <p className="treatment_text">
              alteration in some form, by injected humour, or randomised words
              which don't look even slightly e sure there isn't anything
            </p>
            <div className="readmore_bt active">
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h1 className="number_text">02</h1>
            <h2 className="care_text">Eye Care</h2>
            <p className="treatment_text_1">
              alteration in some form, by injected humour, or randomised words
              which don't look even{" "}
            </p>
            <div className="readmore_bt">
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h1 className="number_text">03</h1>
            <h2 className="care_text">Pediatrician Clinic</h2>
            <p className="treatment_text_1">
              alteration in some form, by injected humour, or randomised words
              which don't look even
            </p>
            <div className="readmore_bt">
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h1 className="number_text">04</h1>
            <h2 className="care_text">Prenatal Care</h2>
            <p className="treatment_text_1">
              alteration in some form, by injected humour, or randomised words
              which don't look even
            </p>
            <div className="readmore_bt">
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* treatment section end */}
  {/* footer section start */}
  <div className="footer_section">
    <div className="container">
      <div className="input_bt">
        <input
          type="text"
          className="mail_bt"
          placeholder="Enter Your Email"
          name="Enter your email"
        />
        <span className="subscribe_bt" id="basic-addon2">
          <a href="#">Subscribe</a>
        </span>
      </div>
      <div className="footer_section_2">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <h3 className="footer_taital">Address</h3>
            <div className="location_main">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-map-marker" aria-hidden="true" />
                    <span className="padding_15">
                      Making this the first true
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-phone" aria-hidden="true" />
                    <span className="padding_15">Call : +01 1234567890</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-envelope" aria-hidden="true" />
                    <span className="padding_15">Email : demo@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer_social_icon">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h3 className="footer_taital">Useful Link</h3>
            <div className="footer_menu">
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="doctors.html">Doctors</a>
                </li>
                <li>
                  <a href="news.html">News</a>
                </li>
                <li className="active">
                  <a href="treatment.html">Treatment</a>
                </li>
                <li>
                  <a href="contact.html">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h3 className="footer_taital">Help &amp; Support</h3>
            <p className="ipsum_text">
              Opposed to using 'Content here, content here', making it look like
              readable English. Many desktop publishing packages and web page
            </p>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h3 className="footer_taital">News</h3>
            <div className="dryfood_text">
              <img src="images/img-4.png" />
              <span className="padding_15">Normal distribution</span>
            </div>
            <div className="dryfood_text">
              <img src="images/img-5.png" />
              <span className="padding_15">Normal distribution</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* footer section end */}
  {/* copyright section start */}
  <div className="copyright_section">
    <div className="container">
      <p className="copyright_text">
        2024 All Rights Reserved. Design by{" "}
        <a href="https://html.design">Free Html Templates</a> Distribution By{" "}
        <a href="https://themewagon.com">ThemWagons</a>
      </p>
    </div>
  </div>
</>

  )
}

export default Treatement