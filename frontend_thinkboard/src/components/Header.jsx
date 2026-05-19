import React from "react";
import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky right-0 top-0 flex justify-evenly bg-neutral p-3 items-center shadow-sm font-mono">
      <h1 className="text-base-100 text-lg font-bold">BrainDumper</h1>
      <Link to={"/create"} className="btn btn-xs sm:btn-sm btn-primary text-base-100 text-xs sm:text-md">
        <PlusIcon className="h-5 w-5"/>
        Buat Catatan
      </Link>
    </header>
  );
};

export default Header;
