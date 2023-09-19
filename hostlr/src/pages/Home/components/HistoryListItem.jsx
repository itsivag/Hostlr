import React, { useState } from "react";
import { HistoryComponent } from "./HistoryComponent";
import { HistoryStatusComponent } from "./HistoryStatusComponent";

export const HistoryListItem = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className="my-2 border border-neutral-200"
      onClick={() => {
        setExpanded((s) => !s);
      }}
    >
      <div className="flex py-4 px-2  space-x-2 ">
        <div>
          <h1 className="text-lg ">11 July</h1>
          <p className="text-sm">5:50 PM</p>
        </div>
        <div>-</div>
        <div>
          <h1 className="text-lg ">11 July</h1>
          <p className="text-sm">5:50 PM</p>
        </div>
        <span className="border border-l border-neutral-200" />
        <div className="my-auto text-lg grow">Approved</div>
        <div className="flex flex-col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 ml-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
          <div className="mt-auto text-sm text-neutral-500">2:30 PM</div>
        </div>
      </div>
      <div>{expanded && <HistoryStatusComponent />}</div>
    </div>
  );
};
