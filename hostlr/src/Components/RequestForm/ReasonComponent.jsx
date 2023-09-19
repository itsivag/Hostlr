import { TextField, Box } from "@mui/material";
import React from "react";

export const ReasonComponent = () => {
  return (
    <div>
      <TextField label="Reason" multiline maxRows={4} className="w-full" />
    </div>
  );
};
