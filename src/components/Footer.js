import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-200 text-center py-4 mt-8">
      <p className="text-sm text-gray-600">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
