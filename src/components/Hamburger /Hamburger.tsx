import { useEffect, useRef, useState } from 'react';
import { HeaderSelect } from '../Header/Header-select';
import { NavList } from '../Header/NavList';
import { Logo } from '../Svg';
import './Hamburger.scss';
import '../Header/Header.scss';
import { listMenu, listSelect } from '../Header';
import { motion } from 'framer-motion';

interface IProps {
  trigger: boolean;
  setTrigger: (value: boolean) => void;
}

export function Hamburger({ trigger, setTrigger }: IProps) {
  const [activeClass, setActiveClass] = useState(localStorage.getItem('active') || 'Подбор авто');
  const [size, setSize] = useState(false);
  const refLabel = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth < 768) {
        setSize(true);
      } else {
        setSize(false);
        setTrigger(false);
      }
    }
    onResize();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  function showMenu() {
    if (size) {
      trigger ? setTrigger(false) : setTrigger(true);
    }
  }

  const variants = {
    visible: {
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    hidden: {},
  };

  const variantsChildren = {
    visible: {
      opacity: 1,
    },
    hidden: { opacity: 0 },
  };

  return (
    <div className="header__nav_logo flex">
      <input type="checkbox" id="checkbox1" className="checkbox1 visuallyHidden" />
      <label ref={refLabel} htmlFor="checkbox1">
        <div onClick={showMenu} className="hamburger hamburger1">
          <span className="bar bar1"></span>
          <span className="bar bar2"></span>
          <span className="bar bar3"></span>
          <span className="bar bar4"></span>
        </div>
      </label>
      <Logo />
      {trigger && (
        <motion.div
          layout
          variants={variants}
          initial={'hidden'}
          animate={trigger ? 'visible' : 'hidden'}
          className="showMenu">
          {listSelect.map((el, i) => {
            return (
              <motion.div key={i} variants={variantsChildren}>
                <HeaderSelect title={el} />
              </motion.div>
            );
          })}
          {listMenu.map((el, i) => {
            return (
              <motion.div key={i} variants={variantsChildren}>
                <NavList el={el} activeClass={activeClass} setActiveClass={setActiveClass} />
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </div>
  );
}
