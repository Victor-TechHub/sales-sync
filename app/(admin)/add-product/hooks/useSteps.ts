import React from "react";

const useSteps = (steps: React.ReactNode[]) => {
  const [current, setCurrent] = React.useState(0);

  const nextStep = () => {
    if (isLastStep) return;
    setCurrent((prev) => prev + 1);
  };
  const previousStep = () => {
    if (isFirstStep) return;
    setCurrent((prev) => prev - 1);
  };

  const isFirstStep = current === 0;
  const isLastStep = steps.length === current + 1;

  return {
    steps,
    current,
    setCurrent,
    nextStep,
    previousStep,
    isFirstStep,
    isLastStep,
  };
};

export default useSteps;
