import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <div className="header_top_section">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="header_top_main">
                  <div className="call_text">
                    <NavLink to="/">
                      <span className="padding_right0">
                        <i className="fa fa-phone" aria-hidden="true" />
                      </span>{" "}
                      Call : +01 1234567890
                    </NavLink>
                  </div>
                  <div className="call_text_2">
                    <NavLink to="/">
                      <span className="padding_right0">
                        <i className="fa fa-envelope" aria-hidden="true" />
                      </span>{" "}
                      demo@gmail.com
                    </NavLink>
                  </div>
                  <div className="call_text_1">
                    <NavLink to="/">
                      <span className="padding_right0">
                        <i className="fa fa-map-marker" aria-hidden="true" />
                      </span>{" "}
                      Location
                    </NavLink>
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
              <NavLink className="navbar-brand" to="index.html">
                <img src="images/logo.png" />
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="/navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <NavLink className="nav-link" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    {/* <a className="nav-link" to="/about">
                      About
                    </NavLink> */}
                    <a className='nav-link' href="#about">about</a>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/treatment">
                      Treatment
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/doctors">
                      Doctor
                    </NavLink>
                  </li>
                  
                  <li className="nav-item">
                    < NavLink className="nav-link" to="/contact">
                      Contact
                    </NavLink>
                  </li>
                </ul>
                <form className="form-inline my-2 my-lg-0"></form>
              </div>
            </nav>
            <div className="custom_bg">
              <div className="custom_menu">
                <ul>
                  <li className="active" >
                    <NavLink to="index.html">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/treatment">Treatment</NavLink>
                  </li>
                  <li>
                    <NavLink to="/doctors">Doctors</NavLink>
                  </li>
                  {/* <li>
                    <NavLink to="blog.html">Blog</NavLink>
                  </li> */}
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </div>
              <form className="form-inline my-2 my-lg-0">
                <div className="search_btn">
                  <li>
                    <NavLink to="/login">
                      <i className="fa fa-user" aria-hidden="true" />
                      <span className="signup_text" >Login</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/signup">
                      <i className="fa fa-user" aria-hidden="true" />
                      <span className="signup_text">Sign Up</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      <i className="fa fa-search" aria-hidden="true" />
                    </NavLink>
                  </li>
                </div>
              </form>
            </div>
          </div>
          {/* header section end */}
          {/* banner section start */}
          <div className="banner_section layout_padding">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="banner_taital">We care Of You</h1>
                  <p className="banner_text">
                    When looking at its layout. The point of using Lorem Ipsum
                    is that it has a more-or-less normal distribution of
                    letters, as opposed to{" "}
                  </p>
                  <div className="read_bt">
                    <NavLink to="/">Read More</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* banner section end */}
        </div>
        {/* header section end */}
        {/* appointment section start */}
        <div className="appointment_section">
          <div className="container">
            <div className="appointment_box">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="appointment_taital">
                    Book <span style={{ color: "/0cb7d6" }}>Appointment</span>
                  </h1>
                </div>
              </div>
              <div className="appointment_section_2">
                <div className="row">
                  <div className="col-md-4">
                    <p className="doctorname_text">Patient Name</p>
                    <input
                      type="text"
                      className="email_text"
                      placeholder=""
                      name=""
                    />
                  </div>
                  <div className="col-md-4">
                    <form>
                      <div className="form-group">
                        <p className="doctorname_text">Doctor  Name</p>
                        <select className="form-control" id="">
                          <option>Normal distribution </option>
                          <option>200</option>
                          <option>300</option>
                          <option>400</option>
                          <option>500</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-4">
                    <form>
                      <div className="form-group">
                        <p className="doctorname_text">Department Name</p>
                        <select className="form-control" id="">
                          <option>Normal distribution </option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <p className="doctorname_text">Phone Number</p>
                    <input
                      type="text"
                      className="email_text"
                      placeholder=""
                      name=""
                    />
                  </div>
                  <div className="col-md-4">
                    <form>
                      <div className="form-group">
                        <p className="doctorname_text">Department</p>
                        <select className="form-control" id="">
                          <option>Normal distribution</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-4">
                    <p className="doctorname_text">Choose Date</p>
                    <input
                      id="datepicker"
                      placeholder="Select Date"
                      width={270}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* appointment section end */}
        {/* about section start */}
        <div className="about_section layout_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="about_taital">About Hospital</h1>
                <p className="about_text">
                  {" "}
                  has a more-or-less normal distribution of letters, as opposed
                  to using 'Content here, content here', making it look like
                  readable English. Many desktop publishing packages and web
                  page editors has a more-or-less normal distribution of
                  letters, as o
                </p>
                <div className="about_bt">
                  <NavLink to="/">Read More</NavLink>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about_img">
                  <img src="images/about-img.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* about section end */}
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
                    alteration in some form, by injected humour, or randomised
                    words which do not look even slightly e sure there is not
                    anything
                  </p>
                  <div className="readmore_bt active">
                    <NavLink to="/">Read More</NavLink>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <h1 className="number_text">02</h1>
                  <h2 className="care_text">Eye Care</h2>
                  <p className="treatment_text_1">
                    alteration in some form, by injected humour, or randomised
                    words which do not  look even{" "}
                  </p>
                  <div className="readmore_bt">
                    <NavLink to="/">Read More</NavLink>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <h1 className="number_text">03</h1>
                  <h2 className="care_text">Pediatrician Clinic</h2>
                  <p className="treatment_text_1">
                    alteration in some form, by injected humour, or randomised
                    words which do not look even
                  </p>
                  <div className="readmore_bt">
                    <NavLink to="/">Read More</NavLink>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <h1 className="number_text">04</h1>
                  <h2 className="care_text">Prenatal Care</h2>
                  <p className="treatment_text_1">
                    alteration in some form, by injected humour, or randomised
                    words which do not look even
                  </p>
                  <div className="readmore_bt">
                    <NavLink to="/">Read More</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* treatment section end */}
        {/* doctores section start */}
        <div className="doctores_section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="doctores_taital">Our doctores</h1>
              </div>
            </div>
            <div className="doctores_section_2">
              <div
                id="my_slider"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="doctores_box">
                          <div className="image_1">
                            <img src="images/img-1.png" />
                          </div>
                          <h4 className="humour_text">
                            Humour <br />
                            <span className="mbbs_text">MBBS</span>
                          </h4>
                          <div className="social_icon">
                            <ul>
                              <li>
                                <NavLink to="/">
                                  <i
                                    className="fa fa-facebook"
                                    aria-hidden="true"
                                  />
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/">
                                  <i
                                    className="fa fa-twitter"
                                    aria-hidden="true"
                                  />
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/">
                                  <i
                                    className="fa fa-linkedin"
                                    aria-hidden="true"
                                  />
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/">
                                  <i
                                    className="fa fa-instagram"
                                    aria-hidden="true"
                                  />
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="doctores_box">
                          <div className="image_1">
                            <img src="images/img-2.png" />
                          </div>
                          <h4 className="humour_text">
                            Jenni <br />
                            <span className="mbbs_text">MBBS</span>
                          </h4>
                          <div className="social_icon">
                            <ul>
                              <li>
                                <NavLink to="/">
                                  <i
                                    className="fa fa-facebook"
                                    aria-hidden="true"
                                  />
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/">
                                  <i
                                    className="fa fa-twitter"
                                    aria-hidden="true"
                                  />
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/">
                                  <i
                                    className="fa fa-linkedin"
                                    aria-hidden="true"
                                  />
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/">
                                  <i
                                    className="fa fa-instagram"
                                    aria-hidden="true"
                                  />
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="doctores_box">
                          <div className="image_1">
                            <img src="images/img-3.png" />
                          </div>
                          <h4 className="humour_text">
                            Morco <br />
                            <span className="mbbs_text">MBBS</span>
                          </h4>
                          <div className="social_icon">
                            <ul>
                              <li>
                                <NavLink to="/">
                                  <i
                                    className="fa fa-facebook"
                                    aria-hidden="true"
                                  />
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/">
                                  <i
                                    className="fa fa-twitter"
                                    aria-hidden="true"
                                  />
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/">
                                  <i
                                    className="fa fa-linkedin"
                                    aria-hidden="true"
                                  />
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/">
                                  <i
                                    className="fa fa-instagram"
                                    aria-hidden="true"
                                  />
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="doctores_box">
                          <div className="image_1">
                            <img src="images/img-1.png" />
                          </div>
                          <h4 className="humour_text">
                            Humour <br />
                            <span className="mbbs_text">MBBS</span>
                          </h4>
                          <div className="social_icon">
                            <ul>
                              <li>
                                <NavLink to="/">
                                  <i
                                    className="fa fa-facebook"
                                    aria-hidden="true"
                                  />
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/">
                                  <i
                                    className="fa fa-twitter"
                                    aria-hidden="true"
                                  />
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/">
                                  <i
                                    className="fa fa-linkedin"
                                    aria-hidden="true"
                                  />
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/">
                                  <i
                                    className="fa fa-instagram"
                                    aria-hidden="true"
                                  />
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="doctores_box">
                          <div className="image_1">
                            <img src="images/img-2.png" />
                          </div>
                          <h4 className="humour_text">
                            Jenni <br />
                            <span className="mbbs_text">MBBS</span>
                          </h4>
                          <div className="social_icon">
                            <ul>
                              <li>
                                <NavLink to="/">
                                  <i
                                    className="fa fa-facebook"
                                    aria-hidden="true"
                                  />
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/">
                                  <i
                                    className="fa fa-twitter"
                                    aria-hidden="true"
                                  />
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/">
                                  <i
                                    className="fa fa-linkedin"
                                    aria-hidden="true"
                                  />
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/">
                                  <i
                                    className="fa fa-instagram"
                                    aria-hidden="true"
                                  />
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="doctores_box">
                          <div className="image_1">
                            <img src="images/img-3.png" />
                          </div>
                          <h4 className="humour_text">
                            Morco <br />
                            <span className="mbbs_text">MBBS</span>
                          </h4>
                          <div className="social_icon">
                            <ul>
                              <li>
                                <NavLink to="/">
                                  <i
                                    className="fa fa-facebook"
                                    aria-hidden="true"
                                  />
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/">
                                  <i
                                    className="fa fa-twitter"
                                    aria-hidden="true"
                                  />
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/">
                                  <i
                                    className="fa fa-linkedin"
                                    aria-hidden="true"
                                  />
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/">
                                  <i
                                    className="fa fa-instagram"
                                    aria-hidden="true"
                                  />
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="doctores_box">
                          <div className="image_1">
                            <img src="images/img-1.png" />
                          </div>
                          <h4 className="humour_text">
                            Humour <br />
                            <span className="mbbs_text">MBBS</span>
                          </h4>
                          <div className="social_icon">
                            <ul>
                              <li>
                                <NavLink to="/">
                                  <i
                                    className="fa fa-facebook"
                                    aria-hidden="true"
                                  />
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/">
                                  <i
                                    className="fa fa-twitter"
                                    aria-hidden="true"
                                  />
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/">
                                  <i
                                    className="fa fa-linkedin"
                                    aria-hidden="true"
                                  />
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/">
                                  <i
                                    className="fa fa-instagram"
                                    aria-hidden="true"
                                  />
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="doctores_box">
                          <div className="image_1">
                            <img src="images/img-2.png" />
                          </div>
                          <h4 className="humour_text">
                            Jenni <br />
                            <span className="mbbs_text">MBBS</span>
                          </h4>
                          <div className="social_icon">
                            <ul>
                              <li>
                                <NavLink to="/">
                                  <i
                                    className="fa fa-facebook"
                                    aria-hidden="true"
                                  />
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/">
                                  <i
                                    className="fa fa-twitter"
                                    aria-hidden="true"
                                  />
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/">
                                  <i
                                    className="fa fa-linkedin"
                                    aria-hidden="true"
                                  />
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/">
                                  <i
                                    className="fa fa-instagram"
                                    aria-hidden="true"
                                  />
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="doctores_box">
                          <div className="image_1">
                            <img src="images/img-3.png" />
                          </div>
                          <h4 className="humour_text">
                            Morco <br />
                            <span className="mbbs_text">MBBS</span>
                          </h4>
                          <div className="social_icon">
                            <ul>
                              <li>
                                <NavLink to="/">
                                  <i
                                    className="fa fa-facebook"
                                    aria-hidden="true"
                                  />
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/">
                                  <i
                                    className="fa fa-twitter"
                                    aria-hidden="true"
                                  />
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/">
                                  <i
                                    className="fa fa-linkedin"
                                    aria-hidden="true"
                                  />
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/">
                                  <i
                                    className="fa fa-instagram"
                                    aria-hidden="true"
                                  />
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <NavLink
                  className="carousel-control-prev"
                  to="/my_slider"
                  role="button"
                  data-slide="prev"
                >
                  <i className="fa fa-angle-left" />
                </NavLink>
                <NavLink
                  className="carousel-control-next"
                  to="/my_slider"
                  role="button"
                  data-slide="next"
                >
                  <i className="fa fa-angle-right" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        {/* doctores section end */}
        {/* testimonial section start */}
        <div className="testimonial_section layout_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="testimonial_taital">Our Testimonial</h1>
              </div>
            </div>
            <div className="customer_section_2">
              <div className="row">
                <div className="col-md-12">
                  <div className="box_main">
                    <div
                      id="main_slider"
                      className="carousel slide"
                      data-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <div className="customer_main">
                            <div className="customer_right">
                              <h3 className="customer_name">
                                Morijorch{" "}
                                <span className="quick_icon">
                                  <img src="images/quick-icon.png" />
                                </span>
                              </h3>
                              <p className="default_text">
                                Default model text,
                              </p>
                              <p className="enim_text">
                                editors now use Lorem Ipsum as their default
                                model text, and a search for lorem ipsum will
                                uncover many web sites still in their infancy.
                                Variouseditors now use Lorem Ipsum as their
                                default model text, and a search for lorem
                                ipsum will uncover many web sites still in
                                their infancy. Variouseditors now use Lorem
                                Ipsum as their default model text, and a search
                                for lorem ipsum will uncover many web sites
                                still in their infancy. Various
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="customer_main">
                            <div className="customer_right">
                              <h3 className="customer_name">
                                Morijorch{" "}
                                <span className="quick_icon">
                                  <img src="images/quick-icon.png" />
                                </span>
                              </h3>
                              <p className="default_text">
                                Default model text,
                              </p>
                              <p className="enim_text">
                                editors now use Lorem Ipsum as their default
                                model text, and a search for lorem ipsum will
                                uncover many web sites still in their infancy.
                                Variouseditors now use Lorem Ipsum as their
                                default model text, and a search for lorem
                                ipsum will uncover many web sites still in
                                their infancy. Variouseditors now use Lorem
                                Ipsum as their default model text, and a search
                                for lorem ipsum will uncover many web sites
                                still in their infancy. Various
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="customer_main">
                            <div className="customer_right">
                              <h3 className="customer_name">
                                Morijorch{" "}
                                <span className="quick_icon">
                                  <img src="images/quick-icon.png" />
                                </span>
                              </h3>
                              <p className="default_text">
                                Default model text,
                              </p>
                              <p className="enim_text">
                                editors now use Lorem Ipsum as their default
                                model text, and a search for lorem ipsum will
                                uncover many web sites still in their infancy.
                                Variouseditors now use Lorem Ipsum as their
                                default model text, and a search for lorem
                                ipsum will uncover many web sites still in
                                their infancy. Variouseditors now use Lorem
                                Ipsum as their default model text, and a search
                                for lorem ipsum will uncover many web sites
                                still in their infancy. Various
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <NavLink
                        className="carousel-control-prev"
                        to="/main_slider"
                        role="button"
                        data-slide="prev"
                      >
                        <i className="fa fa-angle-left" />
                      </NavLink>
                      <NavLink
                        className="carousel-control-next"
                        to="/main_slider"
                        role="button"
                        data-slide="next"
                      >
                        <i className="fa fa-angle-right" />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* testimonial section end */}
        {/* contact section start */}
        <div className="contact_section layout_padding">
          <div className="container-fluid">
            <div className="contact_section_2">
              <div className="row">
                <div className="col-md-6">
                  <h1 className="contact_taital">Get In Touch</h1>
                  <form action="">
                    <div className="mail_section_1">
                      <input
                        type="text"
                        className="mail_text"
                        placeholder="Name"
                        name="Name"
                      />
                      <input
                        type="text"
                        className="mail_text"
                        placeholder="Phone Number"
                        name="Phone Number"
                      />
                      <input
                        type="text"
                        className="mail_text"
                        placeholder="Email"
                        name="Email"
                      />
                      <textarea
                        className="massage-bt"
                        placeholder="Massage"
                        rows={5}
                        id="comment"
                        name="Massage"
                        defaultValue={""}
                      />
                      <div className="send_bt">
                        <NavLink to="/">SEND</NavLink>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-md-6 padding_left_15">
                  <div className="map_main">
                    <div className="map-responsive">
                      <iframe
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                        width={600}
                        height={600}
                        frameBorder={0}
                        style={{ border: 0, width: "100%" }}
                        allowFullScreen=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contact section end */}
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
                <NavLink to="/">Subscribe</NavLink>
              </span>
            </div>
            <div className="footer_section_2">
              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  <h3 className="footer_taital">Address</h3>
                  <div className="location_main">
                    <ul>
                      <li>
                        <NavLink to="/">
                          <i className="fa fa-map-marker" aria-hidden="true" />
                          <span className="padding_15">
                            Making this the first true
                          </span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/">
                          <i className="fa fa-phone" aria-hidden="true" />
                          <span className="padding_15">
                            Call : +01 1234567890
                          </span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/">
                          <i className="fa fa-envelope" aria-hidden="true" />
                          <span className="padding_15">
                            Email : demo@gmail.com
                          </span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  <div className="footer_social_icon">
                    <ul>
                      <li>
                        <NavLink to="/">
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/">
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/">
                          <i className="fa fa-linkedin" aria-hidden="true" />
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/">
                          <i className="fa fa-instagram" aria-hidden="true" />
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <h3 className="footer_taital">Useful Link</h3>
                  <div className="footer_menu">
                    <ul>
                      <li className="active">
                        <NavLink to="index.html">Home</NavLink>
                      </li>
                      <li>
                        <NavLink to="about.html">About</NavLink>
                      </li>
                      <li>
                        <NavLink to="/doctors">Doctors</NavLink> 
                      </li>
                      <li>
                        <NavLink to="/news">News</NavLink>
                      </li>
                      <li>
                        <NavLink to="/treatment">Treatment</NavLink>
                      </li>
                      <li>
                        <NavLink to="/contact">Contact Us</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <h3 className="footer_taital">Help &amp; Support</h3>
                  <p className="ipsum_text">
                    Opposed to using Content here, content here, making it
                    look like readable English. Many desktop publishing packages
                    and web page
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
              <NavLink to="https://html.design">Free Html Templates</NavLink> Distribution
              By <NavLink to="https://themewagon.com">ThemWagons</NavLink>
            </p>
          </div>
        </div>
      </>
  )
}

export default Navbar
