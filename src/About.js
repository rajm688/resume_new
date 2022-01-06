import * as React from "react";

export function About() {
  const src= [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
    "https://img.icons8.com/color/452/nodejs.png",
    "https://gocode.colorado.gov/wp-content/uploads/2020/11/MongoDB-logo.gif",
    "https://5.imimg.com/data5/SELLER/Default/2021/8/NP/YN/DN/3775979/aws-logo-500x500.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
    "https://ayushmanbh.netlify.app/static/media/netlify.c779369f.svg",
    "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    "https://res.cloudinary.com/practicaldev/image/fetch/s--lrfDQ0H1--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/123/38b10714-65da-4f1d-88ae-e9b28c1d7a5e.png"
  ]
  return (
    <div id="About" className="About">
      <br />
      <h1 id="link" style={{ fontSize: "2.3em" }}>
        Basic Information
      </h1>
      <p id="link" style={{ fontSize: "1.5em" }}>
        Full stack Developer Based on Tamil Nadu, India.
      </p>
      <p id="link" style={{ fontSize: "1.5em" }}>
        Bachelor in Electronics and Communication Engineering, Always on the
        lookout for new and exciting ways to leverage Web Development to create
        unforgettable experiences and impressions.
      </p>
      <h1 id="link" style={{ fontSize: "2.3em" }}>
        Languages and Tools
      </h1>
      <br/>
     <div className="logocontainer">
       {src.map((img)=><img className="logo" src={img} alt="logo"/>)}
    </div>
    </div>
  );
}
