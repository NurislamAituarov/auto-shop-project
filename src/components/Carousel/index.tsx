import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import './Carousel.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { Tag } from '../Tag';
import rio from '../../Images/rio.png';
import tiguan from '../../Images/tiguan.png';
import rapid from '../../Images/rapid.png';
import camry1 from '../../Images/camry-black.png';
import camry2 from '../../Images/camry-white.png';

export default function CustomCarousel() {
  return (
    <div className="section__slider">
      <div className="wrapper__slider">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          // showIndicators={false}
          showThumbs={false}
          transitionTime={500}>
          <div className="item list1">
            <div className="wrapper__rio">
              <LazyLoadImage effect="blur" alt="" src={rio} />
            </div>
            <div>
              <LazyLoadImage effect="blur" alt="" src={tiguan} />
            </div>
            <div>
              <LazyLoadImage effect="blur" alt="" src={rapid} />
            </div>
          </div>
          <div className="item list2">
            <div className="wrapper__rio">
              <LazyLoadImage effect="blur" alt="" src={camry1} />
            </div>
            <div>
              <LazyLoadImage effect="blur" alt="" src={camry2} />
            </div>
          </div>
          <div className="item list1">
            <div className="wrapper__rio">
              <LazyLoadImage effect="blur" alt="" src={rio} />
            </div>
            <div>
              <LazyLoadImage effect="blur" alt="" src={tiguan} />
            </div>
            <div>
              <LazyLoadImage effect="blur" alt="" src={rapid} />
            </div>
          </div>
          <div className="item list2">
            <div className="wrapper__rio">
              <LazyLoadImage effect="blur" alt="" src={camry1} />
            </div>
            <div>
              <LazyLoadImage effect="blur" alt="" src={camry2} />
            </div>
          </div>
        </Carousel>
      </div>
      <div className="main__title">
        <Tag title="Осталось всего 10 авто!" size="m" />
        <h1>Грандиозная распродажа тестового парка!</h1>
        <p>Узнай свою цену!</p>
      </div>
    </div>
  );
}
