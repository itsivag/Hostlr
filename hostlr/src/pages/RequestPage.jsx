import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ReasonComponent } from "../Components/RequestForm/ReasonComponent";
import { DatePickerComponent } from "../Components/RequestForm/DatePickerComponent";

export const RequestPage = () => {
  function formSubmitted(e) {
    e.preventDefault();
    console.log("submitted");
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <form onSubmit={formSubmitted}>
        <div className="flex flex-col space-y-4 m-4 bg-white p-4   ">
          <DatePickerComponent />
          <ReasonComponent />
          <input
            type="submit"
            className="bg-black text-white p-2 rounded-sm"
            value="submit"
          />
        </div>
      </form>
    </LocalizationProvider>
  );
};
