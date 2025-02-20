import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/32483.jpg";

const NavbarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

const links = ["NGOs", "PENSIL", "How to help", "Contact us"];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  const Pencil = () => {
    <a href="https://pencil.gov.in/" target="_blank">
      PENSIL
    </a>;
  };
  return (
    <nav className="w-full flex  justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        {/* <img src={logo} alt="logo" className="w-20 cursor-pointer mx-10 mt-5" /> */}
        <p className="w-40 cursor-pointer mx-10 mt-5 text-white font-bold italic border-r-4 pl-5 py-2 pr-10 bg-zinc-400 bg-opacity-10">
          Nurturing Tree
        </p>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial ">
        <div>
          <div className="grid sm:grid-cols-4 grid-cols-2 w-full mt-3S pr-10">
            <div className="">
              <a href="https://www.savethechildren.in/" target="_blank">
                NGOs
              </a>
            </div>
            <a href="https://pencil.gov.in/" target="_blank">
              <div className="w-full h-full">PENSIL</div>
            </a>
            <div className="">
              <a
                href="https://www.childlineindia.org/blog/How-To-Stop-Child-Labour-inia-with-Case-study-Childline-India-1098.html#:~:text=Education%20and%20awareness,the%20laws%20and%20their%20penalties."
                target="_blank"
              >
                How to help
              </a>
            </div>
            <div className="pl-10">Contact us</div>
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
