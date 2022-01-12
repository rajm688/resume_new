import * as React from "react";
// import CardMedia from '@mui/material/CardMedia';
export function Projects() {
  const ProjectName = [
    {
      name: "React MOKE API CRUD ",
      Details: "Performing CRUD operations",
      Tools: "React",
      link: "https://pokemon-cerd.netlify.app/",
      backend:"https://github.com/rajm688/Task-Day-29"
    },
    {
      name: "React CRUD and Routing",
      Details: "React-based CRUD operation on MOCK API",
      Tools: "React",
      link: "https://tic-tak-toe-react.netlify.app/",
      backend:"https://github.com/rajm688/react"
    },
    
  ];
  return (
    <div id="Projects" className="Projects">
      <h1 id="link" style={{ fontSize: "2.5vw" }}>
        My Initiatives
      </h1>
      <h1 id="link" style={{ fontSize: "1.5vw" }}>
        Take a peek at some of my work listed below.
      </h1>{" "}
      <div className="container">
        {ProjectName.map(({ name, Details, Tools, link, backend }) => (
          <ProjectDetails
            name={name}
            Details={Details}
            Tools={Tools}
            link={link}
            backend = {backend}
          />
        ))}
      </div>
    </div>
  );
}
function ProjectDetails({ name, Details, Tools, link, backend }) {
  return (
    <div className="projectcontainer">
    <div class="card">
      <div class="content">
        <div class="imgBx">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="method"/>
        </div>
        <div class="contentBx">
          <h3>{name}<br/><span>{Tools}</span></h3>
        </div>
      </div>
      <ul class="sci">
        <li>
          <a href={backend}>Source Code</a>
        </li>
        {/* <li> */}
          {/* <a href={link}>BackEnd</a> */}
        {/* </li> */}
        <li>
          <a href={link}>Deploy Link</a>
        </li>
      </ul>
    </div>
    </div>
  );
}
