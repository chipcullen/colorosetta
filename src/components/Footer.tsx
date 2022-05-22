import React from "react";

const Footer: React.FC = () => {

  return (
    <footer>
        <strong><a href="https://marketplace.visualstudio.com/items?itemName=chipcullen.colorosetta">now available as a VS Code Extension!</a></strong><br />
        &copy; {new Date().getFullYear()}{" "}
        <a href="https://chipcullen.com">
          chip cullen</a> |{" "}
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
      </footer>
  );
};

export { Footer };
