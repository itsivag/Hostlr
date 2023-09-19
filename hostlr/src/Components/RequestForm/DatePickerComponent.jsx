import { DatePicker, TimeClock, TimePicker } from "@mui/x-date-pickers";
import React from "react";
export const DatePickerComponent = () => {
  return (
    <>
      <div className="space-y-4">
        <div className="flex gap-3">
          <DatePicker label="Pick the depart Date" className="w-full" />
          <TimePicker label="Time" />
        </div>
        <div className="flex gap-3">
          <DatePicker label="Pick the arrival Date" className="w-full" />
          <TimePicker label="Time" />
        </div>
      </div>
    </>
  );
};
