import { useState, useCallback } from 'react';

const useBooleanState = (
  defaultValue = false,
): readonly [boolean, () => void, () => void, () => void] => {
  const [bool, setBool] = useState(defaultValue);

  const setTrue = useCallback(() => {
    setBool(true);
  }, []);

  const setFalse = useCallback(() => {
    setBool(false);
  }, []);

  const toggle = useCallback(() => {
    setBool((boolean) => !boolean);
  }, []);

  return [bool, setTrue, setFalse, toggle] as const;
};

export default useBooleanState;
