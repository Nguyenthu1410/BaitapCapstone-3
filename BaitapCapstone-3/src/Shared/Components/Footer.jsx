import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center text-lg py-5 mt-auto">
      <div className="container mx-auto">
        @{new Date().getFullYear()} Movie - All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
