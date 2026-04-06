import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="p-5 bg-black text-white text-center text-lg">
        <div className="container mx-auto">
          @{new Date().getFullYear()} Movie - All rights reserved
        </div>
      </footer>
    </div>
  );
};

export default Footer;
