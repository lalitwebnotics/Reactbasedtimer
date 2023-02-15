import React from "react";
import ActionButtons from "./ActionButtons";

const Two = (props) => {
  const { seconds, minutes, hours, reset } = props;
  
  const validate2 = () => {
    props.nextStep();
  };
  const validate = () => {
    props.previousStep();
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "50px", color: "#000000" }}>
          <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        </div>
      </div>
      <br />
      <ActionButtons {...props} nextStep={validate2} previousStep={validate} />
    </div>
  );
};

export default Two;
