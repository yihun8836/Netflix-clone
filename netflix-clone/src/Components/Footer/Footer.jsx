import React from "react";
import "./footer.css";
import CopyrightIcon from "@mui/icons-material/Copyright";
function Footer() {
  return (
    <>
      <footer className="">
        <div className="four-div-wraper">
          <div className="col-1">
            <ul>
              <li>Audo descritpion</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
              <li>
                <CopyrightIcon
                  style={{
                    fontSize: "16px",
                    paddingTop: "5px",
                  }}
                  className="copy-write"
                />{" "}
                <span>1997 Netflix Inc.</span>
              </li>
            </ul>
          </div>
          <div className="col-1">
            <ul>
              <li>Audo descritpion</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div className="col-1">
            <ul>
              <li>Audo descritpion</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div className="col-1">
            <ul>
              <li>Audo descritpion</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
