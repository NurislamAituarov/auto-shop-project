let sum = () => {
  let i = 0;
  return (block?: string, prev?: string) => {
    prev ? (i = i - 1) : (i += 1);
    if (i === -1) {
      i = 0;
    }
    if (block === 'подборки' && i >= 6) {
      i = 6;
    }
    if (
      (block === 'partners' ||
        block === 'trusted' ||
        block === 'blok' ||
        block === 'спецпредложения' ||
        block === 'Блог') &&
      i >= 3
    ) {
      i = 3;
    }
    return i;
  };
};
export let sum1 = sum();
export let sum2 = sum();
export let sum3 = sum();
export let sum4 = sum();
export let sum5 = sum();
export let sum6 = sum();
