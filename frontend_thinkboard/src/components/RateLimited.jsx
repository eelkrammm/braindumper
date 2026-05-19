import React from "react";
import { ZapIcon } from "lucide-react";
const RateLimited = () => {
  return (
    <div className="p-10 flex justify-center items-center h-fit">
      <div className="bg-neutral rounded-md shadow-md p-5 font-mono text-base-100 flex flex-row gap-5">
        <ZapIcon className="size-10 text-primary" />
        <div>
          <h2 className="text-xl font-bold">Rate Limited!</h2>
          <p>Terlalu banyak permintaan! Silakan coba lagi setelah beberapa saat.</p>
        </div>
      </div>
    </div>
  );
};

export default RateLimited;
