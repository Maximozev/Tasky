import React from "react";

const Navbar = () => {
  return (
    <div className="flex py-3 flex-wrap justify-around">
      <h1 className="text-lg font-semibold">Tasky</h1>
      <ul className="flex gap-[40px] text-m">
        <li>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
        </li>
        <li>
          {" "}
          <a href="https://github.com/Maximozev?tab=repositories">Products</a>
        </li>
        <li>
          <a href="https://github.com/Maximozev">About</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/max-enriquez-009912226/overlay/contact-info/">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
