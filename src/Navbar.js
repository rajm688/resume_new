import Button from "@mui/material/Button";

export function Navbar() {
  return (
    <div className="navbar wrapper" id="navbar">
        <div id="title" title="Rajkumar Murugesan">Rajkumar Murugesan</div>
      <div>
        <Button href="#Profile" color="inherit">
          Profile
        </Button>

        <Button href="#About" color="inherit">
          About
        </Button>
        <Button href="#Projects" color="inherit">
          Projects
        </Button>
        <Button href="#Contact" color="inherit">
          Contact
        </Button>
        <Button id="resume"
          href="https://drive.google.com/file/d/1sAxJo9PuNuvFaAfHfJRg0QzB4xSZc0fR/view?usp=sharing"
          target="_blank"
          color="inherit"
        >
          Resume
        </Button>

      </div>
    </div>
  );
}
