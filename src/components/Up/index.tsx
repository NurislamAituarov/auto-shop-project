import { useEffect, useState } from 'react';
import { Down } from '../Svg';
import s from './Block.module.scss';

export function Up({ scrollToSection, refHeader }: any) {
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
        <div onClick={() => scrollToSection(refHeader)} className={s.block}>
          <Down />
        </div>
      )}
    </>
  );
}
