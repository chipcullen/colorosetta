import React from "react";

const Footer: React.FC = () => {

  return (
    <footer>
        &copy; {new Date().getFullYear()}{" "}
        <a href="https://chipcullen.com">
          chip cullen</a> |{" "}
        <a href="https://marketplace.visualstudio.com/items?itemName=chipcullen.colorosetta">
          vs code extension
        </a>{" "}
        |{" "}
        <a href="https://chipcullen.com/colorosetta/">
          explanatory blog post
        </a>{" "}
        |{" "}
        <a href="https://github.com/chipcullen/colorosetta">
          this project on github
        </a>{" "}
        |{" "}
        <a href="https://twitter.com/chipcullen">
          i'm occasionally on twitter
        </a>
        <br />
        thank you to <a href="https://jonkantner.com/">jon kanter</a> for much of the conversion logic,<br /> and to <a href="https://lea.verou.me/">lea verou</a> and <a href="https://svgees.us/">chris lilley</a> for the fiddly lch bits.
      </footer>
  );
};

export { Footer };
