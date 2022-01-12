import * as React from "react";

export function Skills() {
  const src = [
    {
      link: "https://adus.tech/wp-content/uploads/2021/05/html5-logo.png",
      name: "HTML",
    },
    {
      link: "https://coryrylan.com/assets/images/posts/types/css.svg",
      name: "CSS",
    },
    {
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png",
      name: "SASS",
    },
    {
      link: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      name: "JavaScript",
    },
    {
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
      name: "React",
    },
    {
      link: "https://img.icons8.com/color/452/nodejs.png",
      name: "Node.js",
    },
    {
      link: "https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png",
      name: "My SQL",
    },
    {
      link: "https://gocode.colorado.gov/wp-content/uploads/2020/11/MongoDB-logo.gif",
      name: "mongo DB",
    },
    {
      link: "https://5.imimg.com/data5/SELLER/Default/2021/8/NP/YN/DN/3775979/aws-logo-500x500.png",
      name: "AWS",
    },
    {
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
      name: "Python",
    },
    {
      link: "https://www.logolynx.com/images/logolynx/7c/7cd9586a595db92320ebf7beab22a7af.png",
      name: "J Query",
    },
    {
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
      name: "VS Code",
    },
    {
      link: "https://ayushmanbh.netlify.app/static/media/netlify.c779369f.svg",
      name: "Netlify",
    },
    {
      link: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
      name: "GIT",
    },
    {
      link: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
      name: "GitHub",
    },
    {
      link: "https://res.cloudinary.com/practicaldev/image/fetch/s--lrfDQ0H1--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/123/38b10714-65da-4f1d-88ae-e9b28c1d7a5e.png",
      name: "HeroKU",
    },
  ];
  return (
    <div id="Skills" className="skills">
      <h1 id="link" style={{ fontSize: "2.5vw" }}>
        Languages and Tools
      </h1>
      <br />
      <div className="logocontainer">
        {src.map(({ link, name }) => (
          <div className="logodiv">
            <img className="logo" src={link} alt="logo" />
            <h4>{name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
