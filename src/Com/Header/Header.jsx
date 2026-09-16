import "./Header.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { tns } from "tiny-slider";
import "tiny-slider/dist/tiny-slider.css";

const Header = () => {
  useEffect(() => {
    const slider = tns({
      container: ".carousel-testimony",

      items: 3,
      slideBy: 1,

      gutter: 20,

      loop: true,

      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      autoplayButtonOutput: false,

      controls: false,

      nav: true,

      mouseDrag: true,
      swipeAngle: false,

      speed: 700,

      responsive: {
        0: {
          items: 1,
        },

        576: {
          items: 1,
        },

        768: {
          items: 2,
        },

        992: {
          items: 3,
        },
      },
    });

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      <div className="box1">
        <div className="overlay"></div>
        <a
          rel="stylesheet"
          href="https://wa.me/0000000000?text=Hi%20Saipur%20Bagh%20%7C%20Please%20let%20us%20know%20About%20Hotels%20Rates%20%3F target=_blank"
          className="corner-icon"
        >
          <i className="fa fa-whatsapp"></i>
        </a>
        <div className="container">
          <div className="row">
            <div className="box2">
              <img src="img/2.webp" alt="2" />

              {/* <ul>
                    <li style={{ color: "#fff" }}>HOME</li>
                     <li style={{color:"#FFFFFFB3"}}>ABOUT</li>
                      <li  style={{color:" #FFFFFFB3"}}>ROOMS</li>
                       <li style={{color:"#fff"}}>SERVICES</li>
                       <li  style={{color:" #FFFFFFB3"}}>CONTACT</li>
                </ul>  */}
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    Home
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://saipurabagh.in/about.html"
                  >
                    About
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://saipurabagh.in/rooms.html"
                  >
                    Rooms
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://saipurabagh.in/services.html"
                  >
                    Services
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://saipurabagh.in/contact.html"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="n1">
              <span>The Most Relaxing Place</span>
              <h1>Unwind at Saipura Bagh</h1>
              <div className="n3">
                <div className="b1">
                  <button>
                    {" "}
                    TAKE A TOUR{" "}
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  </button>
                </div>
                <div className="b2">
                  <a href="https://saipurabagh.in/about.html">
                    LEARN MORE{" "}
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box4">
        <div className="container">
          <div className="row">
            <div className="box3">
              <div className="d1">
                <p>CHECK-IN</p>
                <span>
                  <i className="fa fa-calendar" aria-hidden="true"></i> Check-In
                  Date
                </span>
              </div>
              <div className="d1">
                <p>CHECK-OUT</p>
                <span>
                  <i className="fa fa-calendar" aria-hidden="true"></i> Check-In
                  Date
                </span>
              </div>
              <div className="d1">
                <p>ROOMS</p>
                <span>
                  <i className="fa fa-angle-down" aria-hidden="true"></i> Suit
                </span>
              </div>
              <div className="d1">
                <p>GUESTS</p>
                <span>
                  <i className="fa fa-angle-down" aria-hidden="true"></i> 1 Person
                </span>
              </div>
              <div className="d2">
                <span>CHECK AVAILABILITY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="box6">
                <div className="k1">
                  <div className="icon">
                    <span class="flaticon-pillow">
                      <i className="fa fa-hospital-o" aria-hidden="true"></i>
                    </span>
                  </div>
                  <h3>Cozy Rooms</h3>
                  <p>
                    Peaceful garden-view rooms <br></br>offering comfort,
                    elegance, and <br></br>true Rajasthani hospitality.
                  </p>
                </div>
                <div className="k1">
                  <img
                    src="https://saipurabagh.in/images/about-2.webp"
                    alt="22"
                  />
                </div>
                <div className="k1">
                  <img
                    src="https://saipurabagh.in/images/about-1.webp"
                    alt="23"
                  />
                </div>
                <div className="k1">
                  <div className="icon">
                    <span class="flaticon-pillow">
                      <i className="fa fa-superpowers" aria-hidden="true"></i>
                    </span>
                  </div>
                  <h3>Special Offers</h3>
                  <p>
                    Save with family, weekend, and <br></br>festive stay
                    packages at Saipura <br></br>Bagh.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="box6">
                <h2>
                  Discover Saipura Bagh – A Resort Away<br></br> From the
                  Everyday
                </h2>
                <h6>
                  Nestled in Saipura village on Jamwa Ramgarh Road,
                  approximately 20 km from central <br></br>Jaipur, Saipura Bagh
                  offers a peaceful retreat outside the city bustle.<br></br>
                  Here, you’ll be surrounded by green lawns and quiet spaces,
                  with modern amenities<br></br> including a swimming pool,
                  restaurant, 24-hour room service and air-conditioned <br></br>
                  rooms. Whether you’re travelling with family, friends or for a
                  special celebration, Saipura Bagh<br></br> balances nature,
                  comfort and accessibility.
                </h6>
                <p>
                  <a
                    href="https://saipurabagh.in/rooms.html"
                    class="btn btn-primary py-3 px-4"
                  >
                    Book Your Room Now
                  </a>
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="ftco-section">
        <div className="container-xl">
          <div className="row justify-content-center">
            <div
              className="col-md-8 heading-section text-center mb-5 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span className="subheading">Unwind Services</span>
              <h2 className="mb-4">Explore Our Hotel Services</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-md-3 col-xl-2 text-center d-flex align-items-stretch aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <a href="index.html#" class="services">
                <div className="icon">
                  <span>
                    <i className="fa fa-wifi" aria-hidden="true"></i>
                  </span>
                </div>
                <div className="text">
                  <h2>Stay</h2>
                </div>
              </a>
            </div>
            <div
              className="col-md-3 col-xl-2 text-center d-flex align-items-stretch aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <a href="index.html#" class="services">
                <div className="icon">
                  <span>
                    <i className="fa fa-laptop" aria-hidden="true"></i>
                  </span>
                </div>
                <div className="text">
                  <h2>Easy Booking</h2>
                </div>
              </a>
            </div>
            <div
              className="col-md-3 col-xl-2 text-center d-flex align-items-stretch aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <a href="index.html#" class="services">
                <div className="icon">
                  <span>
                    <i className="fa fa-folder-open-o" aria-hidden="true"></i>
                  </span>
                </div>
                <div className="text">
                  <h2>Restaurant</h2>
                </div>
              </a>
            </div>
            <div
              className="col-md-3 col-xl-2 text-center d-flex align-items-stretch aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <a href="index.html#" class="services">
                <div className="icon">
                  <span>
                    <i className="fa fa-tint" aria-hidden="true"></i>
                  </span>
                </div>
                <div className="text">
                  <h2>Swimming Pool</h2>
                </div>
              </a>
            </div>
            <div
              className="col-md-3 col-xl-2 text-center d-flex align-items-stretch aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <a href="index.html#" class="services">
                <div className="icon">
                  <span>
                    <i className="fa fa-medkit" aria-hidden="true"></i>
                  </span>
                </div>
                <div className="text">
                  <h2>Beauty &amp; Health</h2>
                </div>
              </a>
            </div>
            <div
              className="col-md-3 col-xl-2 text-center d-flex align-items-stretch aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <a href="index.html#" class="services">
                <div className="icon">
                  <span>
                    <i className="fa fa-life-ring" aria-hidden="true"></i>
                  </span>
                </div>
                <div className="text">
                  <h2>Help &amp; Support</h2>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="box10">
        <div className="box11"></div>
        <div className="container">
          <div className="row">
            <div className="box12">
              <span>Find Best stay For Leaving</span>
              <h1>
                Find the Best stay in our hotel<br></br> on your Next Vacation
              </h1>
              <button>BOOK NOW</button>
            </div>
          </div>
        </div>
      </div>
      <div className="box13">
        <div className="container">
          <div className="row">
            <div className="box14">
              <div className="nn1">
                <span>Our Rooms</span>
                <h2> Featured Rooms</h2>
              </div>
              <div className="row justify-content-center">
                {/* Deluxe Room */}
                <div
                  className="col-md-6 col-lg-4 d-flex align-items-stretch"
                  data-aos="flip-left"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  <div className="room-wrap d-md-flex flex-md-column-reverse">
                    <a
                      href="deluxe-room.html"
                      className="img img-room"
                      style={{
                        backgroundImage:
                          "url('https://saipurabagh.in/images/delux-room.webp')",
                      }}
                    ></a>

                    <div className="text p-5 text-center">
                      <h3>
                        <a href="deluxe-room.html">Deluxe Room</a>
                      </h3>

                      <p>
                        Stylish comfort, equipped with A/C, WiFi, daily
                        housekeeping and relaxing views.
                      </p>

                      <p className="mb-0 mt-2">
                        <a href="deluxe-room.html" className="btn-custom">
                          Book Now
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Swiss Tent */}
                <div
                  className="col-md-6 col-lg-4 d-flex align-items-stretch"
                  data-aos="flip-left"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                >
                  <div className="room-wrap">
                  <a
  to="/swiss-tent"
  className="img img-room"
  style={{
    backgroundImage: `url("https://saipurabagh.in/images/tent-room.webp")`,
  }}
></a>

                    <div className="text p-5 text-center">
                      <h3>
                        <a href="swiss-tent.html">Swiss Tent</a>
                      </h3>

                      <p>
                        A more open-nature experience with garden views, roomy
                        interiors and all the essentials for a memorable stay.
                      </p>

                      <p className="mb-0 mt-2">
                        <a href="swiss-tent.html" className="btn-custom">
                          Book Now
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Family Room */}
                <div
                  className="col-md-6 col-lg-4 d-flex align-items-stretch"
                  data-aos="flip-left"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                >
                  <div className="room-wrap d-md-flex flex-md-column-reverse">
                    <a
                      href="family-room.html"
                      className="img img-room"
                      style={{
                        backgroundImage:
                          "url('https://saipurabagh.in/images/family-room.webp')",
                      }}
                    ></a>

                    <div className="text p-5 text-center">
                      <h3>
                        <a href="family-room.html">Deluxe Room With Jacuzzi</a>
                      </h3>

                      <p>
                        Ideal for families or groups looking to stay together
                        comfortably in one unit with our facilities.
                      </p>

                      <p className="mb-0 mt-2">
                        <a href="family-room.html" className="btn-custom">
                          Book Now
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box15">
        <div className="container">
          <div className="row">
            <div className="box16">
              <div className="container-xl">
                {/* Heading */}
                <div className="row justify-content-center pb-4">
                  <div
                    className="col-md-7 text-center heading-section"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <span className="subheading">Testimonial</span>
                    <h2 className="mb-3">Happy Guests</h2>
                  </div>
                </div>

                {/* Carousel */}
                <div className="testimony-section">
                  <div className="tns-outer">
                    <div className="tns-ovh">
                      <div className="carousel-testimony">
                        {/* Wasim Khan */}
                        <div className="testimonial-slide">
                          <div className="testimony-wrap">
                            <div className="text">
                              <div className="d-flex align-items-center mb-4">
                                <div
                                  className="user-img"
                                  style={{
                                    backgroundImage:
                                      "url('https://saipurabagh.in/images/review-1.png')",
                                  }}
                                >
                                  <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-quote-left"></span>
                                  </div>
                                </div>

                                <div className="ps-3 tx">
                                  <p className="name">Wasim Khan</p>
                                </div>
                              </div>

                              <p className="mb-4 msg">
                                Superb Location, Well Maintained Resort.
                                Beautiful Tent House, Huge size Garden for
                                outdoor games..
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Arsh Dhaliwal */}
                        <div className="testimonial-slide">
                          <div className="testimony-wrap">
                            <div className="text">
                              <div className="d-flex align-items-center mb-4">
                                <div
                                  className="user-img"
                                  style={{
                                    backgroundImage:
                                      "url('https://saipurabagh.in/images/review-2.png')",
                                  }}
                                >
                                  <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-quote-left"></span>
                                  </div>
                                </div>

                                <div className="ps-3 tx">
                                  <p className="name">Arsh Dhaliwal</p>
                                </div>
                              </div>

                              <p className="mb-4 msg">
                                Our stay was exceptionally satisfying. All
                                services were provided promptly, and the
                                property itself is commendable.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Vidhu Chaudhary */}
                        <div className="testimonial-slide">
                          <div className="testimony-wrap">
                            <div className="text">
                              <div className="d-flex align-items-center mb-4">
                                <div
                                  className="user-img"
                                  style={{
                                    backgroundImage:
                                      "url('https://saipurabagh.in/images/review-3.png')",
                                  }}
                                >
                                  <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-quote-left"></span>
                                  </div>
                                </div>

                                <div className="ps-3 tx">
                                  <p className="name">Vidhu Chaudhary</p>
                                </div>
                              </div>

                              <p className="mb-4 msg">
                                The interior of the resort is really amazing.
                                Really good for a group activity or corporate
                                event.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Deepti Verma */}
                        <div className="testimonial-slide">
                          <div className="testimony-wrap">
                            <div className="text">
                              <div className="d-flex align-items-center mb-4">
                                <div
                                  className="user-img"
                                  style={{
                                    backgroundImage:
                                      "url('https://saipurabagh.in/images/review-4.png')",
                                  }}
                                >
                                  <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-quote-left"></span>
                                  </div>
                                </div>

                                <div className="ps-3 tx">
                                  <p className="name">Deepti Verma</p>
                                </div>
                              </div>

                              <p className="mb-4 msg">
                                Perfect example of "chivalry isn't dead". Best
                                food, beautiful ambience, humble staff, place,
                                comfortable room service.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Neeraj Tuli */}
                        <div className="testimonial-slide">
                          <div className="testimony-wrap">
                            <div className="text">
                              <div className="d-flex align-items-center mb-4">
                                <div
                                  className="user-img"
                                  style={{
                                    backgroundImage:
                                      "url('https://saipurabagh.in/images/review-5.png')",
                                  }}
                                >
                                  <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-quote-left"></span>
                                  </div>
                                </div>

                                <div className="ps-3 tx">
                                  <p className="name">Neeraj Tuli</p>
                                </div>
                              </div>

                              <p className="mb-4 msg">
                                Set in semi rural surroundings.. away from
                                hustle and rush of city... good getaway resort.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Dots */}
                    <div className="tns-nav">
                      <button aria-controls="tns1"></button>
                      <button aria-controls="tns1"></button>
                      <button aria-controls="tns1"></button>
                      <button aria-controls="tns1"></button>
                      <button aria-controls="tns1"></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="ftco-section-counter">
          <div className="container">
            <div className="row section-counter viewed">
              <div
                className="col-6 col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="counter-wrap">
                  <span className="number">
                    <span class="countup">800</span>
                  </span>
                  <span className="caption">+ of Happy Guests</span>
                </div>
              </div>
              <div
                className="col-6 col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="counter-wrap">
                  <span className="number">
                    <span class="countup">500</span>
                  </span>
                  <span className="caption">+ positive reviews</span>
                </div>
              </div>
              <div
                className="col-6 col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="counter-wrap">
                  <span className="number">
                    <span class="countup">100</span>
                  </span>
                  <span className="caption">+ of Staffs</span>
                </div>
              </div>
              <div
                className="col-6 col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="counter-wrap">
                  <span className="number">
                    <span class="countup">8</span>
                  </span>
                  <span className="caption">+ of rating</span>
                </div>
              </div>
            </div>
            <div className="row"></div>
          </div>
        </section>

        <section className="ftco-gallery">
          <div className="container-fluid">
            <div className="row g-3">
              {/* Gallery 3 */}
              <div
                className="col-md"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <a
                  href="https://saipurabagh.in/images/gallery-3.webp"
                  className="gallery-wrap img d-flex align-items-center justify-content-center glightbox"
                  style={{
                    backgroundImage:
                      "url('https://saipurabagh.in/images/gallery-3.webp')",
                  }}
                >
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-search"></span>
                  </div>
                </a>
              </div>

              {/* Gallery 4 */}
              <div
                className="col-md"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1000"
              >
                <a
                  href="https://saipurabagh.in/images/gallery-4.webp"
                  className="gallery-wrap img d-flex align-items-center justify-content-center glightbox"
                  style={{
                    backgroundImage:
                      "url('https://saipurabagh.in/images/gallery-4.webp')",
                  }}
                >
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-search"></span>
                  </div>
                </a>
              </div>

              {/* Gallery 5 */}
              <div
                className="col-md"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                <a
                  href="https://saipurabagh.in/images/gallery-5.webp"
                  className="gallery-wrap img d-flex align-items-center justify-content-center glightbox"
                  style={{
                    backgroundImage:
                      "url('https://saipurabagh.in/images/gallery-5.webp')",
                  }}
                >
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-search"></span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="hotel-footer">
        {/* Main Footer */}
        <div className="footer-main">
          <div className="footer-container">
            {/* Column 1 - About */}
            <div className="footer-column footer-about">
              <div className="footer-logo">
                <a href="/">
                  <img src="img/2.webp" alt="Saipura Bagh Hotel & Resort" />
                </a>
              </div>

              <p>
                Saipura Bagh Hotel &amp; Resort is a great choice for travellers
                looking for a 4 star hotel in Jaipur.
              </p>

              <div className="footer-social">
                <a
                  href="https://facebook.com/Saipurabagh0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <i className="fa fa-facebook"></i>
                </a>

                <a
                  href="https://www.instagram.com/saipurabagh/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            </div>

            {/* Column 2 - Services */}
            <div className="footer-column">
              <h3>Services</h3>

              <ul className="footer-links">
                <li>
                  <a href="#!">
                    <i className="fa fa-chevron-right"></i>
                    Free Wifi
                  </a>
                </li>

                <li>
                  <a href="#!">
                    <i className="fa fa-chevron-right"></i>
                    Easy Booking
                  </a>
                </li>

                <li>
                  <a href="#!">
                    <i className="fa fa-chevron-right"></i>
                    Restaurant
                  </a>
                </li>

                <li>
                  <a href="#!">
                    <i className="fa fa-chevron-right"></i>
                    Swimming Pool
                  </a>
                </li>

                <li>
                  <a href="#!">
                    <i className="fa fa-chevron-right"></i>
                    Beauty &amp; Health
                  </a>
                </li>

                <li>
                  <a href="#!">
                    <i className="fa fa-chevron-right"></i>
                    60&quot; Flatscreen TV
                  </a>
                </li>

                <li>
                  <a href="#!">
                    <i className="fa fa-chevron-right"></i>
                    Cold Aircondition
                  </a>
                </li>

                <li>
                  <a href="#!">
                    <i className="fa fa-chevron-right"></i>
                    Help &amp; Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 - Quick Links */}
            <div className="footer-column">
              <h3>Quick Links</h3>

              <ul className="footer-links">
                <li>
                  <a href="/">
                    <i className="fa fa-chevron-right"></i>
                    Home
                  </a>
                </li>

                <li>
                  <a href="/about">
                    <i className="fa fa-chevron-right"></i>
                    About
                  </a>
                </li>

                <li>
                  <a href="/rooms">
                    <i className="fa fa-chevron-right"></i>
                    Rooms
                  </a>
                </li>

                <li>
                  <a href="/contact">
                    <i className="fa fa-chevron-right"></i>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 - Contact */}
            <div className="footer-column">
              <h3>Have a Questions?</h3>

              <div className="footer-contact">
                <div className="contact-item">
                  <span className="contact-icon">
                    <i className="fa fa-map-marker"></i>
                  </span>

                  <span className="contact-text">
                    Saipura, Saiwad Road, Jaipur, Rajasthan 302027
                  </span>
                </div>

                <div className="contact-item">
                  <span className="contact-icon">
                    <i className="fa fa-envelope"></i>
                  </span>

                  <a
                    href="mailto:saipurabagh01@gmail.com"
                    className="contact-text"
                  >
                    saipurabagh01@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <div className="footer-container">
            <p>
              Copyright &copy; {new Date().getFullYear()} All rights reserved
              {" | "}
              Made with{" "}
              <i className="fa fa-heart footer-heart" aria-hidden="true"></i> by
              team{" "}
              <a
                href="https://brandmyhotel.com"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                BrandMyHotel
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Header;
