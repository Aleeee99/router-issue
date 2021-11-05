// components/user/Text.js
import React from "react";

interface Props {
  // any other props that come into the component, you don't have to explicitly define children.
  text: any
  fontSize: any
  }

export const Text: React.FC<Props> = ({text, fontSize}) => {
  return (
      <div>
         <p style={{fontSize}}>{text}</p>
      </div>
  )
}