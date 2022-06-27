import React from "react";
import JupyterViewer from "react-jupyter-notebook";
import heartdiseaseprediction from "./heartdiseaseprediction.json";
import "../styles/login.css";
import "../styles/auth.css";
import "../styles/loginbutton.css";
import "../styles/register.css";
import "../styles/dashboard.min.css";
import "../styles/daterangepicker.css";
import "../styles/ion.rangeSlider.min.css";
import "../styles/jquery.scrollbar.css";
import "../styles/select2.css";
import "../styles/swiper.css";

function DiagnosisNotebook() {
  return (
    <div class="section section--content">
      <div id="content">
        <div class="grid grid--margin">
          <div class="form"></div>
          <div class="form-content">
            <JupyterViewer rawIpynb={heartdiseaseprediction} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiagnosisNotebook;
