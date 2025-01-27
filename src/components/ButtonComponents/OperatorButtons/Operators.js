import React, { useState } from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";
//import any components needed

//Import your array data to from the provided data file


export const Operators = () => {
  const [operatorState] = useState(operators)
  return (
    <div className="operator">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
      it any props needed by the child component*/}
      {operatorState.map((item, index) => {
        return <OperatorButton key={index} value={item.char} />
      })}
    </div>
  );
};
