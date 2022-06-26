import React from "react";
import "../styles/dashboard.min.css";
import "../styles/daterangepicker.css";
import "../styles/ion.rangeSlider.min.css";
import "../styles/jquery.scrollbar.css";
import "../styles/select2.css";
import "../styles/swiper.css";
import Avatar from "../images/IMG_0793.jpg";
import Results from "../images/icons/icons-64-white/flask.png";
import Stethoscope from "../images/icons/icons-64-white/stethoscope.png";
import Doctor from "../images/icons/icons-64-white/doctor.png";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div
      style={{
        height: "100%",
      }}
    >
      <body
        style={{
          height: "100%",
        }}
      >
        <div
          class="dashboard-wrap"
          style={{
            height: "100%",
          }}
        >
          <div class="section section--content" id="content">
            <div class="grid grid--margin">
              <div
                class="grid__row dashboard-intro"
                style={{
                  textAlign: "left",
                }}
              >
                <div class="grid__col grid__col--margin grid__col--padding bg-white">
                  <div class="grid__row">
                    <div class="grid__col grid__col--margin grid__col--12">
                      <div class="dashboard-intro__subtitle"></div>
                      <div class="dashboard-intro__title">
                        Welcome Back, <span>Abrahim</span>
                      </div>
                      <div class="dashboard-intro__subtitle"></div>
                      <div class="dashboard-intro__subtitle">
                        Here is your dashboard where you can see data on your
                        latest exam as well as report and submit any new data.
                      </div>
                    </div>
                  </div>
                  <div class="grid__row">
                    <div class="grid__col grid__col--margin grid__col--45">
                      <div class="patient-info">
                        <div class="patient-info__thumb">
                          <img src={Avatar} alt="" title="" />
                        </div>
                        <div class="patient-info__details">
                          <div class="patient-info__title">Abrahim Mahmud</div>
                          <div class="patient-info__row">
                            <div class="patient-info__col">
                              <span>Birth Date:</span> 12 December 2005 (16
                              y.o.)
                            </div>
                            <div class="patient-info__col">
                              <span>Gender:</span> Male
                            </div>
                            <div class="patient-info__col">
                              <span>Address:</span> 123 Coles St, Jersey City,
                              NJ
                            </div>
                          </div>
                          <div class="patient-info__row">
                            <div class="patient-info__col">
                              <span>Email:</span>{" "}
                              <a href="#">abrahimm1205@gmail.com</a>
                            </div>
                            <div class="patient-info__col">
                              <span>Phone:</span> <a href="tel:123"> </a>
                            </div>
                            <div class="patient-info__col">
                              <span>Languages:</span> English
                            </div>
                          </div>
                          <div class="patient-info__row">
                            <div class="patient-info__col">
                              <span>Blood Type:</span> B
                            </div>
                            <div class="patient-info__col">
                              <span>Allergies:</span> None
                            </div>
                            <div class="patient-info__col">
                              <span>Diseases:</span> Influenza
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="grid__col grid__col--margin grid__col--15 d-flex justify-fe aligns-fs">
                      <span
                        class="show-more show-more--select show-more--select-gray has-dropdown"
                        data-dropdown="moreoptions"
                      >
                        Edit your profile
                      </span>
                    </div>
                    <nav
                      class="dropdown-menu dropdown-menu--content"
                      id="moreoptions"
                    ></nav>
                  </div>

                  <div class="grid__row">
                    <div class="grid__col grid__col--14 grid__col--margin grid__col--padding bg-gray10 mb0">
                      <div class="grid__row justify-sb">
                        <div class="grid__col grid__col--mb-12">
                          <h3 class="grid__col-title">Risk of Cancer %</h3>
                          <span class="grid__col-subtitle"></span>
                          <span class="grid__col-subinfo gradient-blue gradient-text">
                            17%
                          </span>
                          <span class="grid__col-subtitle">MODERATE LEVEL</span>
                        </div>
                        <div class="grid__col grid__col--mb-12 d-flex justify-fe"></div>
                      </div>

                      <nav
                        class="dropdown-menu dropdown-menu--content"
                        id="tasksdropdown"
                      ></nav>
                    </div>
                    <div class="grid__col grid__col--14 grid__col--margin grid__col--padding bg-gray10 mb0">
                      <div class="grid__row justify-sb">
                        <div class="grid__col grid__col--mb-12">
                          <h3 class="grid__col-title">Risk of Diabetes %</h3>
                          <span class="grid__col-subtitle"></span>
                          <span class="grid__col-subinfo gradient-lightblue gradient-text">
                            57%
                          </span>
                          <span class="grid__col-subtitle">LOW-HIGH LEVEL</span>
                        </div>
                        <div class="grid__col grid__col--mb-12 d-flex justify-fe"></div>
                      </div>
                      <nav
                        class="dropdown-menu dropdown-menu--content"
                        id="newpatientsdropdown"
                      ></nav>
                    </div>
                    <div class="grid__col grid__col--14 grid__col--margin grid__col--padding bg-gray10 mb0">
                      <div class="grid__row justify-sb">
                        <div class="grid__col grid__col--mb-12">
                          <h3 class="grid__col-title">PNEUMONIA</h3>
                          <span class="grid__col-subtitle"></span>
                          <span class="grid__col-subinfo gradient-pink gradient-text">
                            NEGATIVE
                          </span>
                        </div>
                        <div class="grid__col grid__col--mb-12 d-flex justify-fe"></div>
                      </div>
                      <nav
                        class="dropdown-menu dropdown-menu--content"
                        id="alertdropdown"
                      ></nav>
                    </div>
                    <div class="grid__col grid__col--14 grid__col--margin grid__col--padding bg-gray10 mb0">
                      <div class="grid__row justify-sb">
                        <div class="grid__col grid__col--mb-12">
                          <h3 class="grid__col-title">Last Doctor's Visit</h3>
                          <span class="grid__col-subtitle"></span>
                          <span class="grid__col-subinfo">12 / 27 / 2021</span>
                        </div>
                        <div class="grid__col grid__col--mb-12 d-flex justify-fe"></div>
                      </div>
                      <nav
                        class="dropdown-menu dropdown-menu--content"
                        id="alertdropdown"
                      ></nav>
                    </div>
                  </div>

                  <div class="grid__row">
                    <div class="grid__col grid__col--16 grid__col--mb-12 grid__col--margin grid__col--padding gradient-blue widget-icon selected">
                      <Link
                        to="/patient-database"
                        style={{ padding: "1px", color: "white" }}
                      >
                        {" "}
                        <img src={Stethoscope} alt="" title="" />
                        <h5>VIEW PATIENT DATABASE</h5>
                      </Link>
                    </div>

                    <div class="grid__col grid__col--16 grid__col--mb-12 grid__col--margin grid__col--padding gradient-lightblue widget-icon selected" >
                      <a
                        href="https://github.com/AbrahimMahmud/heart-disease-prediction-v2/blob/main/heart_disease_prediction.ipynb"
                        style={{ padding: "1px", color: "white" }}
                        target="_blank"
                      >
                        {" "}
                        <span class="widget-icon__badge" href="https://github.com/AbrahimMahmud/heart-disease-prediction-v2/blob/main/heart_disease_prediction.ipynb">GITHUB</span>
                        <img src={Results} alt="" title="" />
                        <h5>VIEW THE NOTEBOOK</h5>
                      </a>
                    </div>
                    <div class="grid__col grid__col--16 grid__col--mb-12 grid__col--margin grid__col--padding gradient-pink widget-icon selected">
                      <Link
                        to="/update-info"
                        style={{ padding: "1px", color: "white" }}
                      >
                        <span class="widget-icon__badge">PROFILE</span>
                        <img src={Doctor} alt="" title="" />
                        <h5>UPDATE YOUR PROFILE</h5>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Dashboard;
