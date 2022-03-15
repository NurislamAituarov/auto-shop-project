type TProps = (value: string, refBlock: any, sum: (value: string, prev?: string) => number) => void;

export const onNext: TProps = (value, refBlock, sum) => {
  let node = refBlock.current;
  let index = sum(value);

  node[index] &&
    node[index + 1].scrollIntoView({ block: 'end', inline: 'start', behavior: 'smooth' });
};

export const onPrev: TProps = (value, refBlock, sum) => {
  let node = refBlock.current;
  let index = sum(value, 'prev');

  node[index] && node[index].scrollIntoView({ block: 'end', inline: 'start', behavior: 'smooth' });
};
