export const useDebounce = <F extends (...args: any) => any>(func: F, waitFor: number) => {
  let timeout: any;
  return function (...args: any) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), waitFor);
  };
};
