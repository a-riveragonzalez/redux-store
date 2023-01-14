import React from "react";

const Footer = () => {
  return (
    <footer className="custom-footer mt-auto p-1">
      <div className="text-center mb-1 ">
        <p className="footer-font my-1">
          <span role="img" aria-label="shopping bag">
            🛍️
          </span>
          Shop & Shop | Copyright <span>&copy;</span> 2023 |{" "}
          <a href="https://github.com/a-riveragonzalez/redux-store">
            <i class="fa-brands fa-github fa-lg"></i>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
