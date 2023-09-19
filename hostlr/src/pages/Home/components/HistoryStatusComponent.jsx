import React from "react";

export const HistoryStatusComponent = () => {
  return (
    <>
      <div className="mb-2 p-2">
        <table className="w-full">
          <tr className="bg-neutral-200 text-md">
            <td>Designation</td>
            <td>Date</td>
            <td>Time</td>
            <td className="text-end">Status</td>
          </tr>

          <tr className="text-sm border bg-neutral-100">
            <td>Tutor</td>
            <td>11 Jul</td>
            <td>7:00 PM</td>
            <td className="text-end">Forwaded</td>
          </tr>

          <tr className="text-sm border bg-neutral-100">
            <td>Dept Warden</td>
            <td>11 Jul</td>
            <td>7:30 PM</td>
            <td className="text-end">Accepted</td>
          </tr>
        </table>
      </div>
    </>
  );
};
