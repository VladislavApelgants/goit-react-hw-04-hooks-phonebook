import { useState, useEffect } from 'react';

const useLocalStorage = (key, defaultState) => {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(key) ?? defaultState);
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};
export default useLocalStorage;
