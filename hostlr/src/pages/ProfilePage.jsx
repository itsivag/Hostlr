import React from "react";
// import { TextField } from '@mui/material';

export const ProfilePage = () => {
  return (
    <div className="bg-white m-4 p-4">
      <form className="flex flex-col gap-1">
        <label htmlFor="name" className="text-neutral-500 text-sm">
          Name
        </label>
        <div className="flex border border-neutral-300 items-center">
          <input
            type="text"
            id="name"
            aria-label="disabled input"
            value="John Doe"
            className="py-1 px-2 grow"
            disabled
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mx-2 text-neutral-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
          </svg>
        </div>
        {/* name */}

        <label htmlFor="reg_no" className="text-neutral-500 text-sm mt-2">
          Register Number
        </label>
        <input
          type="text"
          id="reg_no"
          aria-label="disabled input"
          value="710020104000"
          className="py-1 px-2 grow border border-neutral-300"
          disabled
        />
        {/* register number */}

        <h1 className="mt-2 text-sm text-neutral-500">Hostel Type</h1>
        <div className="flex items-center space-x-4">
          <div className="space-x-1">
            <input type="radio" id="hostel_type_boys" value="B" />
            <label htmlFor="hostel_type_boys">Boys</label>
          </div>

          <div className="space-x-1">
            <input type="radio" id="hostel_type_girls" value="G" />
            <label htmlFor="hostel_type_girls">Girls</label>
          </div>
        </div>

        
      </form>
    </div>
  );
};
