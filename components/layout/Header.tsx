// components/layout/Header.tsx

import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#111111]/95 backdrop-blur-md border-b border-orange-500/20">
      <div className="container mx-auto px-4 lg:px-8">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;