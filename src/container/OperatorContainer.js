import React from "react";
import Operator from "../component/Operator"

const OperatorContainer = ({ handleOperatorClick }) => {
  return (
    <div className="operator-container">
      <Operator val="AC" handleOperatorClick={handleOperatorClick} />
      <Operator val="+/-" handleOperatorClick={handleOperatorClick} />
      <Operator val="%" handleOperatorClick={handleOperatorClick} />
    </div>
  );
};

export default OperatorContainer;