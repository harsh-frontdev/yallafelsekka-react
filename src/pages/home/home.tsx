import React, { useState, useEffect } from "react";
import Link from "next/link";
import GraphAPI from "@/services/connection";

import MapBannerImg from "../../assets/images/map-banner.svg";
import YfsHomeImg from "../../assets/images/yfsHome.png";
import RoundCircleImg from "../../assets/images/round-circle.png";
import CustomerService1Img from "../../assets/images/003-customer-service 1.svg";
import Refund1Img from "../../assets/images/refund 1.svg";
import Car1Img from "../../assets/images/car 1.svg";
import CustomerService2Img from "../../assets/images/customer-service 1.svg";
import MobileHandImg from "../../assets/images/mobile-hand.png";
import FormImg from "../../assets/images/form.png";
import AboutHomeImg from "../../assets/images/about-home.png";
import Transforming1Img from "../../assets/images/002-transformation 1.svg";
import RewardImg from "../../assets/images/reward.svg";
import FunImg from "../../assets/images/fun.svg";

export default function Home({homepageSettings}) {

  console.log('homeSettings', homepageSettings);
  
  return (
    <main>
      <section className="main-banner-wrap primary-bg position-relative">
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <span className="title-link text-uppercase mb-1"></span>
              <h1 className="text-white" data-aos="fade-up">
                Deliver Locally <br />
                Faster, Better And <br />
                Cheaper !
              </h1>
              <div className="map-img-wrap">
                <img src={MapBannerImg.src} alt="map-banner" className="w-100" />
              </div>
            </div>
          </div>
        </div>
        <div className="img-wrap">
          <img src={YfsHomeImg.src} alt="yfsHome" className="w-100" />
        </div>
        <div className="circle-wrap">
          <img src={RoundCircleImg.src} alt="round-circle" className="w-100" />
        </div>
      </section>
      <section className="home-our-services">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="text-uppercase" data-aos="fade-right">
                Our services are tailored to our customers' needs
              </h3>
              <ul>
                <li>
                  <div className="box-wrap">
                    <div className="img-wrap position-relative mb-3">
                      <img
                        src={CustomerService1Img.src}
                        alt="003-customer-service 1"
                        className="w-100"
                      />
                    </div>
                    <p>Instant delivery</p>
                  </div>
                </li>
                <li>
                  <div className="box-wrap">
                    <div className="img-wrap position-relative mb-3">
                      <img
                        src={Refund1Img.src}
                        alt="003-customer-service 1"
                        className="w-100"
                      />
                    </div>
                    <p>Cash back in 24hrs</p>
                  </div>
                </li>
                <li>
                  <div className="box-wrap">
                    <div className="img-wrap position-relative mb-3">
                      <img
                        src={Car1Img.src}
                        alt="003-customer-service 1"
                        className="w-100"
                      />
                    </div>
                    <p>All types of vehicles</p>
                  </div>
                </li>
                <li>
                  <div className="box-wrap">
                    <div className="img-wrap position-relative mb-3">
                      <img
                        src={CustomerService2Img.src}
                        alt="003-customer-service 1"
                        className="w-100"
                      />
                    </div>
                    <p>SME friendly</p>
                  </div>
                </li>
              </ul>
              <div className="btn-wrap">
                <Link href="#" title="btn" className="btn text-uppercase">
                  read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="deliver-register position-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 order-xl-1 order-lg-1 order-2">
              <div className="hands-wrap position-relative">
                <div className="hand-img-wrap">
                  <img
                    src={MobileHandImg.src}
                    alt="mobile-hand"
                    className="w-100"
                  />
                </div>
                <div className="form-wrap text-center">
                  <img src={FormImg.src} alt="mobile-hand" className="w-100" />
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 order-xl-2 order-lg-2 order-1"
              data-aos="fade-up"
            >
              <h2 className="mb-2">
                No matter the size of your
                <br /> company, start delivering <br />
                your products with YFS
                <br /> today!
              </h2>
              <p className="mb-3">Create your account in one step</p>
              <div className="btn-wrap">
                <Link href="#" title="btn" className="btn text-uppercase">
                  Register your account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-yfs position-relative">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="about-yfs-conent">
                <h3 className="mb-3" data-aos="fade-right">
                  About YFS
                </h3>
                <p>
                  A leading on-demand urban logistics platform, YFS was
                  established in 2020 to fill a gap in the logistics market,
                  through instant delivery.
                </p>
                <p>
                  Using cutting-edge technology, a strong operations team and a
                  diverse fleet of thousands of captains across Egypt, YFS has
                  quickly fine-tuned the instant delivery experience, serving a
                  range of businesses, both big and small, anytime, anywhere!
                </p>
                <p>
                  Our streamlined business model allows us to deliver locally
                  faster, cheaper and more efficiently, reducing costs and
                  helping our clients win new customers.
                </p>
                <div id="counter-stats" className="counter-stats">
                  <div>
                    <div className="row">
                      <div className="col-lg-3 col-xl-3 col-md-3 col-sm-6 col-6 stats">
                        <div className="wrap-counter">
                          <div className="counting">
                            
                          </div>
                          <h5>Deliveries per day</h5>
                        </div>
                      </div>
                      <div className="col-lg-3 col-xl-3 col-md-3 col-sm-6 col-6 stats">
                        <div className="wrap-counter">
                          <h5>Businesses</h5>
                        </div>
                      </div>
                      <div className="col-lg-3 col-xl-3 col-md-3 col-sm-6 col-6 stats">
                        <div className="wrap-counter">
                          <h5>Diversified Fleet</h5>
                        </div>
                      </div>
                      <div className="col-lg-3 col-xl-3 col-md-3 col-sm-6 col-6 stats">
                        <div className="wrap-counter">
                          <h5>New customers per month</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-wrap">
                  <Link href="#" title="btn" className="btn text-uppercase">
                    read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-home-wrap">
          <img src={AboutHomeImg.src} alt="about-home" className="w-100" />
        </div>
      </section>
      <section className="yes-captains position-relative">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="captains-contet">
                <span className="title mb-2">YFS Captains</span>
                <h2 className="text-white">
                  Whether you are a captain or a<br /> supplier, come join our
                  captain
                  <br /> community
                </h2>
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 text-center">
                    <div className="community-wrap">
                      <div className="community-circle position-relative text-center">
                        <img
                          src={Transforming1Img.src}
                          alt="002-transformation 1"
                          className="w-100"
                        />
                      </div>
                      <p>
                        Deliver more, <br /> Earn more
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 text-center">
                    <div className="community-wrap">
                      <div className="community-circle position-relative text-center">
                        <img src={RewardImg.src} alt="reward" className="w-100" />
                      </div>
                      <p>
                        Reward <br />
                        program
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 text-center">
                    <div className="community-wrap">
                      <div className="community-circle position-relative text-center">
                        <img src={FunImg.src} alt="fun" className="w-100" />
                      </div>
                      <p>
                        Fun <br /> community
                      </p>
                    </div>
                  </div>
                </div>
                <div className="btn-wrap" data-aos="fade-up">
                  <Link href="#" title="btn" className="btn text-uppercase">
                    read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


export async function getStaticProps() {
  const homeOptions = await GraphAPI.homeOptions();

  return {
    props: {
      homeSettings: homeOptions.data.data
    }
  }
}