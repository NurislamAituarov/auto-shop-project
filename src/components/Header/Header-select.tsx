import { useEffect, useState } from 'react';
import { Down } from '../Svg';
import './HeaderSelect.scss';

interface IHeaderSelect {
  title: string;
}

export function HeaderSelect({ title }: IHeaderSelect) {
  const [size, setSize] = useState(false);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth <= 768) {
        setSize(true);
      } else {
        setSize(false);
      }
    }
    onResize();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  return (
    <div className="header__select_item flex">
      {size && <Down />}
      <h3>{title}</h3>
      {!size && <Down />}
    </div>
  );
}
