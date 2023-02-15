import React, { useState } from "react";
import { Stepper, Step } from "react-form-stepper";
import StepWizard from "react-step-wizard";
import { useStopwatch } from "react-timer-hook";
import One from "./One";
import Three from "./Three";
import Two from "./Two";

export const CustomSteps = () => {
  const { seconds, minutes, hours, reset } = useStopwatch({
    autoStart: true,
  });
  const [stepWizard, setStepWizard] = useState(null);
  const [user, setUser] = useState({});
  const [activeStep, setActiveStep] = useState(0);

  const assignStepWizard = (instance) => {
    setStepWizard(instance);
  };

  const assignUser = (val) => {
    setUser((user) => ({
      ...user,
      ...val,
    }));
  };

  const handleStepChange = (e) => {
    reset();
    console.log("step change");
    console.log(e);
    setActiveStep(e.activeStep - 1);
  };

  const handleComplete = () => {
    alert("Completed");
  };

  return (
    <div>
      <Stepper activeStep={activeStep}>
        <Step label="Step 1" />
        <Step label="Step 2" />
        <Step label="Step 3" />
      </Stepper>

      <StepWizard instance={assignStepWizard} onStepChange={handleStepChange}>
        <One userCallback={assignUser} />
        <Two
          user={user}
          userCallback={assignUser}
          seconds={seconds}
          minutes={minutes}
          hours={hours}
        />
        <Three user={user} completeCallback={handleComplete} />
      </StepWizard>
    </div>
  );
};
