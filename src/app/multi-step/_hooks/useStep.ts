import { useCallback, useState } from "react";

type Props = {
  steps: number;
  currentStep: number;
  goToStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
};
export function useStep(steps: number): Props {
  const [currentStep, setCurrentStep] = useState(1);

  const goToStep = (step: number) => {
    if (step >= 1 && step <= steps) {
      setCurrentStep(step);
    }
  };
  const nextStep = useCallback(() => {
    if (currentStep < steps) {
      setCurrentStep(currentStep + 1);
    }
  }, [steps, currentStep]);

  const prevStep = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  }, [currentStep]);

  return {
    currentStep,
    steps,
    goToStep,
    nextStep,
    prevStep,
  };
}
