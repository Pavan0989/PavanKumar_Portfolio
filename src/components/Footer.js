import React from "react";

function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-400 text-center py-6 mt-16 border-t border-zinc-800">
      <p className="text-base font-medium">
        © {new Date().getFullYear()} Pavan Kumar. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
