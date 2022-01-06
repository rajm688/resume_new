import * as React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export function Contact() {
  return (
    <div id="Contact" className="Contact">
      <h1 id="text" style={{ fontSize: "2em" }}>
        {" "}
        I'd be delighted to hear from you..
      </h1>
      <IconButton aria-label="Phone">
        <PhoneAndroidIcon />
        <p id="link" style={{ fontSize: "1.5vw", color: "black" }}>
          +91-965 925 6401
        </p>
      </IconButton>

      <IconButton
        href="mailto:rajkumarm688@gmail.com"
        target="_blank"
        aria-label="mailto"
      >
        <EmailIcon />
        <p id="link" style={{ fontSize: "1.5vw", color: "black" }}>
          rajkumarm688@gmail.com
        </p>
      </IconButton>

      <IconButton
        href="https://github.com/rajm688"
        target="_blank"
        aria-label="GitHub"
      >
        {" "}
        <GitHubIcon />
        <p id="link" style={{ fontSize: "1.5vw", color: "black" }}>
          GitHub
        </p>
      </IconButton>
      <IconButton
        href="https://www.linkedin.com/in/rajkumar-murugesan-b7065495/"
        target="_blank"
        aria-label="LinkedIn"
      >
        <LinkedInIcon />
        <p id="link" style={{ fontSize: "1.5vw", color: "black" }}>
          LinkedIn
        </p>
      </IconButton>
    </div>
  );
}
