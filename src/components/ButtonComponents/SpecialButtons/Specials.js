import React, { useState } from "react";
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";

//import any components needed

//Import your array data to from the provided data file

export const Specials = () => {
  const [specialState] = useState(specials)
  return (
    <div className="specials">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
      it any props needed by the child component*/}
      {specialState.map((item, index) => {
        return <SpecialButton key={index} item={item} />
      })}
    </div>
  );
};
