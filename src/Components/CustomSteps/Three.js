import React from "react";
import ActionButtons from "./ActionButtons";

const Three = (props) => {
  const handleLastStep = () => {
    props.lastStep();
    props.completeCallback();
  };

  return (
    <div>
      <h1>The assignment is complete!</h1>
      <br />
      <ActionButtons {...props} lastStep={handleLastStep} />
    </div>
  );
};
export default Three;
