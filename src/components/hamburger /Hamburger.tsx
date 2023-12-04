import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import { HeaderSelect } from '../header/components/Header-select';
import { NavList } from '../header/components/NavList';
import { Logo } from '../svg';
import { listMenu, listSelect } from '../header';
import { Contacts } from '../footer/Contacts';

import './Hamburger.scss';
import '../header/Header.scss';

interface IProps {
  trigger: boolean;
  setTrigger: (value: boolean) => void;
  refCarAvailable: any;
  refSpecialOffers: any;
  refApplication: any;
}

export function Hamburger({
  trigger,
  setTrigger,
  refCarAvailable,
  refSpecialOffers,
  refApplication,
}: IProps) {
  const [activeClass, setActiveClass] = useState(localStorage.getItem('active') || 'Подбор авто');
  const [size, setSize] = useState(false);
  const refLabel = useRef<HTMLLabelElement>(null);
  const refInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth <= 768) {
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
      refInput.current?.checked ? setTrigger(false) : setTrigger(true);
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
      <input ref={refInput} type="checkbox" id="checkbox1" className="checkbox1 visuallyHidden" />
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
                <HeaderSelect
                  title={el}
                  setTrigger={setTrigger}
                  refInput={refInput}
                  refCarAvailable={refCarAvailable}
                  refSpecialOffers={refSpecialOffers}
                  refApplication={refApplication}
                />
              </motion.div>
            );
          })}
          {listMenu.map((el, i) => {
            return (
              <motion.div key={i} variants={variantsChildren}>
                <NavList
                  el={el}
                  activeClass={activeClass}
                  setActiveClass={setActiveClass}
                  setTrigger={setTrigger}
                  refInput={refInput}
                />
              </motion.div>
            );
          })}
          <motion.div variants={variantsChildren} className="shoMenu_info">
            <Contacts />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
