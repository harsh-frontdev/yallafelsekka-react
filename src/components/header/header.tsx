import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export default function Header({ logo }) {
  const router = useRouter();
  return (
    <header className="primary-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="menu-wrapper">
              <div className="menu-toggle d-block d-xl-none d-lg-none">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                  <span className="navbar-toggler-icon" />
                  <span className="navbar-toggler-icon" />
                </button>
              </div>
              <div className="logo">
                <Link href="index.php" title="logo" className="d-block">
                  <img src={logo.sourceUrl} alt="logo" className="w-100" />
                </Link>
              </div>
              <div className="menu-right">
                <nav className="navbar navbar-expand-lg position-relative p-0">
                  <div className="navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                      <li className={router.pathname == "/" ? "nav-item active" : "nav-item"}>
                        <Link
                          href="/"
                          className="nav-link position-relative text-capitalize"
                          title="Home"
                        >
                          Home
                        </Link>
                      </li>
                      <li className={router.pathname == "/services" ? "nav-item active" : "nav-item"}>
                        <Link
                          href="/services"
                          className="nav-link position-relative text-capitalize"
                          title="Services"
                        >
                          Services
                        </Link>
                      </li>
                      <li className={router.pathname == "/aboutus" ? "nav-item active" : "nav-item"}>
                        <Link
                          href="/aboutus"
                          className="nav-link position-relative text-capitalize"
                          title="About Us"
                        >
                          About Us
                        </Link>
                      </li>
                      <li className={router.pathname == "/yfscaptain" ? "nav-item active" : "nav-item"}>
                        <Link
                          href="/yfscaptain"
                          className="nav-link position-relative text-capitalize"
                          title="YFS Captains"
                        >
                          YFS Captains
                        </Link>
                      </li>
                      <li className={router.pathname == "/career" ? "nav-item active" : "nav-item"}>
                        <Link
                          href="/career"
                          className="nav-link position-relative text-capitalize"
                          title="Career"
                        >
                          Career
                        </Link>
                      </li>
                      <li className={router.pathname == "/contact" ? "nav-item active" : "nav-item"}>
                        <Link
                          href="/contact"
                          className="nav-link position-relative text-capitalize"
                          title="Contact"
                        >
                          Contact
                        </Link>
                      </li>
                      <li className={router.pathname == "/myaccount" ? "nav-item active" : "nav-item"}>
                        <Link
                          href="/myaccount"
                          className="nav-link position-relative text-capitalize"
                          title="My Account"
                        >
                          My Account
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
                <div className="language-dropdown-wrapper">
                  <div className="wrapper">
                    <dl id="country-select" className="dropdown">
                      <dt>
                        <Link href="javascript:;">
                          <span>
                            <span style={{ backgroundPosition: "0px -55px" }} />
                            <span>Ascension Island</span>
                            <span>+247</span>
                          </span>
                        </Link>
                      </dt>
                      <dd>
                        <ul style={{ display: "none" }} className="ul-language">
                          <li>
                            <Link href="javascript:;">
                              <span
                                style={{ backgroundPosition: "0px -1694px" }}
                              />
                              <span>India</span>
                              <span>+91</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="javascript:;">
                              <span
                                style={{ backgroundPosition: "0px -1694px" }}
                              />
                              <span>India-Tollfree</span>
                              <span />
                            </Link>
                          </li>
                          <li>
                            <Link href="javascript:;">
                              <span
                                style={{ backgroundPosition: "0px -44px" }}
                              />
                              <span>United States</span>
                              <span>+1</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="javascript:;">
                              <span
                                style={{ backgroundPosition: "0px -2311px" }}
                              />
                              <span>Afghanistan</span>
                              <span>+93</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="javascript:;">
                              <span
                                style={{ backgroundPosition: "0px -1034px" }}
                              />
                              <span>Albania</span>
                              <span>+355</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="javascript:;">
                              <span
                                style={{ backgroundPosition: "0px -528px" }}
                              />
                              <span>Algeria</span>
                              <span>+213</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="javascript:;">
                              <span
                                style={{ backgroundPosition: "0px -1562px" }}
                              />
                              <span>American Samoa</span>
                              <span>+1684</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="javascript:;">
                              <span
                                style={{ backgroundPosition: "0px -594px" }}
                              />
                              <span>Andorra</span>
                              <span>+376</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="javascript:;">
                              <span
                                style={{ backgroundPosition: "0px -1947px" }}
                              />
                              <span>Angola</span>
                              <span>+244</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="javascript:;">
                              <span
                                style={{ backgroundPosition: "0px -1980px" }}
                              />
                              <span>Anguilla</span>
                              <span>+1264</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="javascript:;">
                              <span
                                style={{ backgroundPosition: "0px -869px" }}
                              />
                              <span>Antigua and Barbuda</span>
                              <span>+1268</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="javascript:;">
                              <span
                                style={{ backgroundPosition: "0px -2377px" }}
                              />
                              <span>Argentina</span>
                              <span>+54</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="javascript:;">
                              <span
                                style={{ backgroundPosition: "0px -176px" }}
                              />
                              <span>Armenia</span>
                              <span>+374</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="javascript:;">
                              <span
                                style={{ backgroundPosition: "0px -792px" }}
                              />
                              <span>Aruba</span>
                              <span>+297</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="javascript:;">
                              <span
                                style={{ backgroundPosition: "0px -55px" }}
                              />
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
    </header>
  );
}
