import { useEffect, useState } from 'react';
import s from './CallMe.module.scss';
import { motion } from 'framer-motion';
import { addPopUpBackCall } from '../../Actions/action';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../Hooks/Hooks';

export default function CallMe() {
  const popUpBackCall = useAppSelector((state: any) => state.reducer.popUpBackCall);
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    animate();
  }, []);

  function animate() {
    setTimeout(() => {
      setHover(true);
      setTimeout(() => {
        setHover(false);
      }, 400);
    }, 400);
  }

  function onHover(str: string) {
    if (str === 'enter') {
      setHover(true);
    } else {
      setHover(false);
      animate();
    }
  }

  return (
    <>
      {popUpBackCall === '' && (
        <motion.div
          animate={
            !hover
              ? {
                  scale: 1,
                  rotate: 0,
                }
              : { scale: 1.2, rotate: 0 }
          }
          onClick={() => {
            setHover(false);
            dispatch(addPopUpBackCall('back call'));
          }}
          onMouseLeave={() => onHover('leave')}
          onMouseEnter={() => onHover('enter')}
          className={s.callMe}>
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="40px"
            height="40px"
            viewBox="0 0 477.156 477.156"
            xmlSpace="preserve">
            <g>
              <path
                d="M475.009,380.316l-2.375-7.156c-5.625-16.719-24.062-34.156-41-38.75l-62.688-17.125c-17-4.625-41.25,1.594-53.688,14.031
		l-22.688,22.688c-82.453-22.28-147.109-86.938-169.359-169.375L145.9,161.94c12.438-12.438,18.656-36.656,14.031-53.656
		l-17.094-62.719c-4.625-16.969-22.094-35.406-38.781-40.969L96.9,2.19c-16.719-5.563-40.563,0.063-53,12.5L9.962,48.659
		C3.899,54.69,0.024,71.94,0.024,72.003c-1.187,107.75,41.063,211.562,117.281,287.781
		c76.031,76.031,179.454,118.219,286.891,117.313c0.562,0,18.312-3.813,24.375-9.845l33.938-33.938
		C474.946,420.878,480.571,397.035,475.009,380.316z"
              />
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </motion.div>
      )}
    </>
  );
}
