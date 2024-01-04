import React from "react";

const Sidebaritems = ({ icon, text, active, alert }) => {
  return (
    <>
      <li className=" flex items-center gap-x-3 text-md">
        {icon}
        <span>{text}</span>
      </li>
    </>
  );
};

export default Sidebaritems;
