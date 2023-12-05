import { MutableRefObject, createContext } from 'react';

export const scrollToSection = (elementRef: any) => {
  window.scrollTo({
    top: elementRef?.current.offsetTop,
    behavior: 'smooth',
  });
};

interface ScrollContext {
  scrollToSection: (elementRef: any) => void;
  refCarAvailable: MutableRefObject<HTMLDivElement | null>;
  refSpecialOffers: MutableRefObject<HTMLDivElement | null>;
  refApplication: MutableRefObject<HTMLDivElement | null>;
  refQuickSelection: MutableRefObject<HTMLDivElement | null>;
}

export const scrollContext = createContext<ScrollContext | null>(null);
