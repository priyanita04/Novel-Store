import React, { Component } from "react";

class Footer extends Component {
  year = () => {
    let d = new Date();
    return d.getFullYear();
  };

  render() {
    return (
      <footer className="clearfix mt-4">
        <p>
          &copy; {this.year()}
          <a
            href="https://github.com/priyanita04"
            rel="noopener noreferrer"
            target="_blank"
          >
            Priya Gupta
          </a>
          , Welcome to donation of book
        </p>
      </footer>
    );
  }
}

export default Footer;
