import React from "react";
import { HistoryListItem } from "./HistoryListItem";

export const HistoryComponent = () => {
  return (
    <>
      <div className="flex flex-col m-4 p-4 bg-white">
        <div className="flex">
          <div className="mb-4 font-semibold text-lg grow">History</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </div>
        {/* search */}
        <div className="py-1 px-3 grow bg-neutral-100 border  border-b-black flex hover:border-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <input
            type="text"
            placeholder="Find your requests"
            className="grow bg-transparent outline-none pl-2"
          />
        </div>
        {/* <HistoryListItem /> */}
        <ul className="mt-2">
          <li>
            <HistoryListItem />
          </li>
          <li>
            <HistoryListItem />
          </li>
          <li>
            <HistoryListItem />
          </li>
          <li>
            <HistoryListItem />
          </li>
          <li>
            <HistoryListItem />
          </li>
          <li>
            <HistoryListItem />
          </li>
        </ul>
      </div>
    </>
  );
};
