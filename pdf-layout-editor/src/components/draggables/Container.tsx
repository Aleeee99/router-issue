// components/user/Button.js
import React from "react";
import { Paper } from "@mui/material";

interface Props {
  // any other props that come into the component, you don't have to explicitly define children.
  background: any
  padding: any
  children: any
  }
  export const Container: React.FC<Props> = ({background, padding = 0, children}) => {
    return (
      <Paper style={{margin: "5px 0", background, padding: `${padding}px`}}>
        {children}
      </Paper>
    )
  }