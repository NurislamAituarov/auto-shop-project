import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Tag } from '../Tag';
import s from './Slider.module.scss';

const rio = require('../Images/rio.png');
const tiguan = require('../Images/tiguan.png');
const rapid = require('../Images/rapid.png');

export function CustomCarousel() {
  return (
    <div className={s.section}>
      <div className={s.wrapper__slider}>
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}>
          <div className={s.item1}>
            <div className={s.wrapper__rio}>
              <img loading="lazy" alt="" src={rio} />
            </div>
            <div>
              <img loading="lazy" alt="" src={tiguan} />
            </div>
            <div>
              <img loading="lazy" alt="" src={rapid} />
            </div>
            {/* <img className={s.fon} src={fon} alt="" /> */}
          </div>
          <div className={s.item1}>
            <div className={s.wrapper__rio}>
              <img loading="lazy" alt="" src={rio} />
            </div>
            <div>
              <img loading="lazy" alt="" src={tiguan} />
            </div>
            <div>
              <img loading="lazy" alt="" src={rapid} />
            </div>
          </div>
        </Carousel>
      </div>
      <div className={s.main__title}>
        <Tag title="Осталось всего 10 авто!" size="m" />
        <h1>Грандиозная распродажа тестового парка!</h1>
        <p>Узнай свою цену!</p>
      </div>
    </div>
  );
}
