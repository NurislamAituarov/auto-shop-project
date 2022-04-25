import { useEffect, useState } from 'react';
import { Down } from '../Svg';
import s from './Block.module.scss';

export function Up() {
  const [size, setSize] = useState(false);
  useEffect(() => {
    function onResize() {
      if (window.pageYOffset > 500) {
        setSize(true);
      }
      if (window.pageYOffset < 500) {
        setSize(false);
      }
    }
    onResize();
    window.addEventListener('scroll', onResize);
    return () => {
      window.removeEventListener('scroll', onResize);
    };
  }, []);

  return (
    <>
      {size && (
        <a href="#header-nav">
          <div className={s.block}>
            <Down />
          </div>
        </a>
      )}
    </>
  );
}
