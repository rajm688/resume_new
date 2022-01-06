import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export function About() {
  return (
    <div id="About" className="About">
      <br />
      <h1 id="link" style={{ fontSize: ".7em" }}>
        Basic  Information
      </h1>
      <p id="link" style={{ fontSize: ".4em" }}>
        Full stack Developer Based on Tamil Nadu, India.
      </p>
      <p id="link" style={{ fontSize: ".4em" }}>
        Bachelor in Electronics and Communication Engineering, Always on the
        lookout for new and exciting ways to leverage Web Development to create
        unforgettable experiences and impressions.
      </p>
      <h1 id="link" style={{ fontSize: ".7em" }}>
        Languages and Libraries
      </h1>
      <Stack
        className="chips"
        direction="row"
        spacing={2}
        flexWrap="wrap"
        gap="10px"
      >
        <Chip color="primary" label="HTML 5" />
        <Chip color="primary" label="CSS 3" />
        <Chip color="primary" label="JavaScript" />
        <Chip color="primary" label="React.JS" />
        <Chip color="primary" label="Node.JS" />
        <Chip color="primary" label="REST API" />
        <Chip color="primary" label="My SQL" />
        <Chip color="primary" label="MongoDB" />
        <Chip color="primary" label="Bootstrap" />
        <Chip color="primary" label="AWS" />
        <Chip color="primary" label="Material UI" />
        <Chip color="primary" label="Python" variant="outlined" />
        <Chip color="primary" label="Jquery" variant="outlined" />
      </Stack>
      <h1 id="link" style={{ fontSize: ".7em" }}>
        Tools and Softwares
      </h1>
      <Stack direction="row" spacing={2} flexWrap="wrap" gap="10px">
        <Chip color="primary" label="VS Code" />
        <Chip color="primary" label="Git" />
        <Chip color="primary" label="Git Hub" />
        <Chip color="primary" label="Netlify" />
        <Chip color="primary" label="HeroKu" />
        <Chip color="primary" label="CodeSand Box" />
      </Stack>
    </div>
  );
}
