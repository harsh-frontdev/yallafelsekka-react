import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// console.log(FooterLogo);

export default function Footer({ footerSettings }) {
  const router = useRouter()
  return (
    <footer>
      <div className="top-footer text-3xl">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 order-xl-1 order-lg-1 order-md-1 order-sm-1 order-1">
              <div className="footer-logo-wrap" data-aos="zoom-in">
                <Link href="index.php" title="home" className="d-block">
                  <img src={footerSettings.footerLogo.sourceUrl} alt="logo" />
                </Link>
              </div>
              <ul className="social-icon">
                <li>
                  <Link href="#" target="_blank" title="facebook">
                    <i className="fab fa-facebook-f" aria-hidden="true"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#" target="_blank" title="likedin">
                    <i className="fab fa-linkedin" aria-hidden="true"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#" target="_blank" title="instagram">
                    <i className="fab fa-instagram" aria-hidden="true"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#" target="_blank" title="youtube">
                    <i className="fab fa-youtube" aria-hidden="true"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 order-xl-2 order-lg-2 order-md-2 order-sm-2  order-4">
              <h4 data-aos="zoom-in">Company</h4>
              <ul className="company">
                <li className={router.pathname == '/career' ? "active" : ""}>
                  <Link href="career.php" title="Careers">
                    Careers
                  </Link>
                </li>
                <li className="">
                  <Link href={router.pathname == '/yfscaptain' ? "active" : ""} title="YFS Captain">
                    YFS Captain
                  </Link>
                </li>
                <li>
                  <Link href={router.pathname == '/myaccount' ? "active" : ""} title="My account">
                    My account
                  </Link>
                </li>
                <li>
                  <Link href={router.pathname == 'privacypolicy' ? "active" : ""} title="Private policy">
                    Private policy
                  </Link>
                </li>
                <li>
                  <Link href={router.pathname == 'termsconditions' ? "active" : ""} title="Terms & conditions">
                    Terms & conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 order-xl-3 order-lg-3 order-md-3 order-sm-3 order-3">
              <h4 data-aos="zoom-in">Contact us</h4>
              <ul className="contact-us">
                <li>
                  <span className="icon-wrap text-white">
                    <i className="fa fa-map-marker-alt" aria-hidden="true"></i>
                  </span>
                  <p dangerouslySetInnerHTML={{__html: footerSettings.footerAddress}}></p>
                </li>
                <li>
                  <span className="icon-wrap text-white">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </span>
                  <Link href={'mailto:' + footerSettings.footerEmail}>{footerSettings.footerEmail}</Link>
                </li>
              </ul>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 order-xl-4 order-lg-4 order-md-4 order-sm-4  order-2">
              <div className="f-last-wrap">
                <h4 data-aos="zoom-in">Languages</h4>
                <div className="language-dropdown-wrapper">
                  <div className="wrapper">
                    <dl id="footer-country-select" className="dropdown">
                      <dt>
                        <Link href="javascript:;">
                          <span>
                            <span
                              style={{ backgroundPosition: "0px -55px" }}
                            ></span>
                            <span>English</span>
                            <span>+247</span>
                          </span>
                        </Link>
                      </dt>
                      <dd>
                        <ul style={{ display: "none" }}>
                          <li>
                            <Link href="javascript:;">
                              <span
                                style={{ backgroundPosition: "0px -1694px" }}
                              ></span>
                              <span>India</span>
                              <span>+91</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="javascript:;">
                              <span
                                style={{ backgroundPosition: "0px -1694px" }}
                              ></span>
                              <span>India-Tollfree</span>
                              <span></span>
                            </Link>
                          </li>
                          <li>
                            <Link href="javascript:;">
                              <span
                                style={{ backgroundPosition: "0px -44px" }}
                              ></span>
                              <span>United States</span>
                              <span>+1</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="javascript:;">
                              <span
                                style={{ backgroundPosition: "0px -2311px" }}
                              ></span>
                              <span>Afghanistan</span>
                              <span>+93</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="javascript:;">
                              <span
                                style={{ backgroundPosition: "0px -1034px" }}
                              ></span>
                              <span>Albania</span>
                              <span>+355</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="javascript:;">
                              <span
                                style={{ backgroundPosition: "0px -528px" }}
                              ></span>
                              <span>Algeria</span>
                              <span>+213</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="javascript:;">
                              <span
                                style={{ backgroundPosition: "0px -1562px" }}
                              ></span>
                              <span>American Samoa</span>
                              <span>+1684</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="javascript:;">
                              <span
                                style={{ backgroundPosition: "0px -594px" }}
                              ></span>
                              <span>Andorra</span>
                              <span>+376</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="javascript:;">
                              <span
                                style={{ backgroundPosition: "0px -1947px" }}
                              ></span>
                              <span>Angola</span>
                              <span>+244</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="javascript:;">
                              <span
                                style={{ backgroundPosition: "0px -1980px" }}
                              ></span>
                              <span>Anguilla</span>
                              <span>+1264</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="javascript:;">
                              <span
                                style={{ backgroundPosition: "0px -869px" }}
                              ></span>
                              <span>Antigua and Barbuda</span>
                              <span>+1268</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="javascript:;">
                              <span
                                style={{ backgroundPosition: "0px -2377px" }}
                              ></span>
                              <span>Argentina</span>
                              <span>+54</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="javascript:;">
                              <span
                                style={{ backgroundPosition: "0px -176px" }}
                              ></span>
                              <span>Armenia</span>
                              <span>+374</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="javascript:;">
                              <span
                                style={{ backgroundPosition: "0px -792px" }}
                              ></span>
                              <span>Aruba</span>
                              <span>+297</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="javascript:;">
                              <span
                                style={{ backgroundPosition: "0px -55px" }}
                              ></span>
                              <span>Ascension Island</span>
                              <span>+247</span>
                            </Link>
                          </li>
                        </ul>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p>© 2022 YFS • All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
