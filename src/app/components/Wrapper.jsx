import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="w-[98%] px-2 md:px-4 mx-auto py-4 rounded-md border-1 my-2 bg-white">
      {children}
    </div>
  );
};

export default Wrapper;
