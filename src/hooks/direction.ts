type TProps = (value: string, refBlock: any, sum: (value: string, prev?: string) => number) => void;

export const onNext: TProps = (value, refBlock, sum) => {
  let node = refBlock.current;
  let index = sum(value);

  // console.log(index);

  node[index] &&
    node[index + 1].scrollIntoView({ block: 'nearest', inline: 'start', behavior: 'smooth' });
};

export const onPrev: TProps = (value, refBlock, sum) => {
  let node = refBlock.current;
  let index = sum(value, 'prev');

  const inline = value === 'trusted' ? 'end' : 'start';

  // console.log(index);

  node[index] &&
    node[index].scrollIntoView({ block: 'nearest', inline: inline, behavior: 'smooth' });
};
