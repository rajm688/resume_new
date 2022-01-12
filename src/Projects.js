import * as React from "react";
// import CardMedia from '@mui/material/CardMedia';
export function Projects() {
  const ProjectName = [
    {
      name: "Movie-List CRUD ",
      Details: "Fetching and Performing CRUD operations in Mock API",
      Tools: "Rract",
      link: "https://tic-tak-toe-react.netlify.app/",
    },
    {
      name: "Tic-Tak-Toe",
      Details: "React-based interactive tic-tac-toe game",
      Tools: "React",
      link: "https://tic-tak-toe-react.netlify.app/",
    },
    {
      name: "Movie-List CRUD ",
      Details: "Fetching and Performing CRUD operations in Mock API",
      Tools: "Rract",
      link: "https://tic-tak-toe-react.netlify.app/",
    },
    {
      name: "Tic-Tak-Toe",
      Details: "React-based interactive tic-tac-toe game",
      Tools: "React",
      link: "https://tic-tak-toe-react.netlify.app/",
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
        {ProjectName.map(({ name, Details, Tools, link }) => (
          <ProjectDetails
            name={name}
            Details={Details}
            Tools={Tools}
            link={link}
          />
        ))}
      </div>
    </div>
  );
}
function ProjectDetails({ name, Details, Tools, link }) {
  return (
    <div className="projectcontainer">
    <div class="card">
      <div class="content">
        <div class="imgBx">
          <img src="https://image.flaticon.com/icons/png/256/4213/4213732.png" alt="method"/>
        </div>
        <div class="contentBx">
          <h3>{name}<br/><span>{Tools}</span></h3>
        </div>
      </div>
      <ul class="sci">
        <li>
          <a href={link}>ForntEnd</a>
        </li>
        <li>
          <a href={link}>BackEnd</a>
        </li>
        <li>
          <a href={link}>Deploy</a>
        </li>
      </ul>
    </div>
    </div>
  );
}
