import React, { useState } from "react";

export const StatusComponent = () => {
  const [status, setStatus] = useState(1);
  return (
    <div className="m-4 p-4 bg-white">
      <label htmlFor="status_progress">Status</label>
      <div className="w-full bg-gray-200 my-2 ">
        <div
          className="bg-black  p-1  leading-none "
          style={{ width: status * 50 + "%" }}
        />
      </div>
      <div className="flex mt-2 text-neutral-500">
        <span className="w-1/3" />
        <p className="w-1/3 text-center">Tutor</p>
        <p className="w-1/3 text-end">Dept Warden</p>
      </div>
    </div>
  );
};
