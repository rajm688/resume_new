import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
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
      name: "Thirukkural API",
      Details:
        "Collection of thirukkurals ordered by the number chosen from the API",
      Tools: "Javascript DOM",
      link: "https://findmythirukkural.netlify.app/",
    },
    {
      name: "Harrypotter API",
      Details:
        "Fetching and presenting information of the characters in Harry Potter moive",
      Tools: "Javascript DOM",
      link: "https://harrypotter-api.netlify.app/",
    },
    {
      name: "Calculator",
      Details:
        "Created an interactive Calculator to do simple math operations.",
      Tools: "Javascript DOM",
      link: "https://calculatorwithdom.netlify.app/",
    },
    {
      name: "CRUD with Local Data",
      Details: "Created and performed CRED operation with Local Data ",
      Tools: "React",
      link: "https://pokemon-cerd.netlify.app/",
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
      <div className="projects">
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
    <div className="trans">
      <Card sx={{ width: 200, height: 240, boxShadow: "5px 5px 5px gray",background: "linear-gradient(90deg, #a3a3a39c, #d0d0d0cd, #fdfdfd)" }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 14, color: "black" }}
            color="text.secondary"
            gutterBottom
          >
            {Tools}
          </Typography>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2">
            S{Details}
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Button href={link} target="_blank" size="small">
            <span id="link">explore</span>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
