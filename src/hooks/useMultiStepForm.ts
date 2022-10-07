import { ReactElement, useState } from 'react';

export function useMultiStepForm(steps: ReactElement[]) {
  const [currStepIdx, setCurrStepIdx] = useState<number>(0);

  function next() {
    setCurrStepIdx((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  }

  function back() {
    setCurrStepIdx((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  function goto(idx: number) {
    setCurrStepIdx(idx);
  }

  return {
    currStepIdx,
    step: steps[currStepIdx],
    firstStep: currStepIdx === 0,
    lastStep: currStepIdx === steps.length - 1,
    steps,
    next,
    back,
    goto,
  };
}
