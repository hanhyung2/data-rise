import { useState, useEffect } from 'react';

const useDebounceState = <T>(initialValue: T, delay: number) => {
  const [state, setState] = useState<T>(initialValue);
  const [debouncedState, setDebouncedState] = useState<T>(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedState(state);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [state, delay]);

  return [state, setState, debouncedState] as const;
};

export default useDebounceState;
