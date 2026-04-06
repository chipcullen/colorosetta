import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      &copy; {new Date().getFullYear()}{" "}
      <a href="https://chipcullen.com">chip cullen</a> |{" "}
      <a href="https://marketplace.visualstudio.com/items?itemName=chipcullen.colorosetta">
        vs code extension
      </a>{" "}
      | <a href="https://chipcullen.com/colorosetta/">explanatory blog post</a>{" "}
      |{" "}
      <a href="https://github.com/chipcullen/colorosetta">
        this project on github
      </a>{" "}
      |{" "}
      <a href="https://mastodon.social/@chipcullen" rel="me">
        i'm occasionally on mastodon
      </a>
      <br />
      color conversion logic powered by{" "}
      <a href="https://colorjs.io/">color.js</a> - thanks to{" "}
      <a href="https://lea.verou.me/">lea verou</a> and{" "}
      <a href="https://svgees.us/">chris lilley</a>
      <br />
      thank you to <a href="https://jonkantner.com/">jon kanter</a> for much of
      the original conversion logic.
    </footer>
  );
};

export { Footer };
