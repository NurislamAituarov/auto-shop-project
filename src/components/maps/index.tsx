import React, { useEffect, useState } from 'react';
import { defaultTheme } from './theme';
import GoogleMapReact from 'google-map-react';
import s from './Maps.module.scss';

interface IProps {
  lng?: number;
  lat?: number;
}
const AnyReactComponent = ({ lng, lat }: IProps) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="red" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 1.25C8.1773 1.25215 6.42987 1.97717 5.14102 3.26602C3.85218 4.55486 3.12716 6.3023 3.12501 8.125C3.12282 9.61452 3.60937 11.0636 4.51001 12.25C4.51001 12.25 4.69751 12.4969 4.72813 12.5325L10 18.75L15.2744 12.5294C15.3019 12.4963 15.49 12.25 15.49 12.25L15.4906 12.2481C16.3908 11.0623 16.8771 9.61383 16.875 8.125C16.8729 6.3023 16.1478 4.55486 14.859 3.26602C13.5701 1.97717 11.8227 1.25215 10 1.25ZM12.25 11.25L10 9.81812L7.75001 11.25L8.12501 8.70375L6.25001 6.98313L8.87501 6.66625L10 4.375L11.195 6.66687L13.75 6.98313L11.875 8.70375L12.25 11.25Z" />
  </svg>
);

const defaultOptions = {
  styles: defaultTheme,
};

const SimpleMap = () => {
  const [center, setCenter] = useState({
    lat: 53.21435,
    lng: 63.62463,
  });

  useEffect(() => {
    const successfulLookup = (position: any) => {
      const { latitude, longitude } = position.coords;
      setCenter({ lat: latitude, lng: longitude });
    };
    navigator.geolocation.getCurrentPosition(successfulLookup);
  }, []);

  return (
    <>
      {center.lat > 0 && (
        <section className={s.section}>
          <div className={s.maps__container}>
            <GoogleMapReact
              options={defaultOptions}
              bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_MAPS_KEY}` }}
              center={center}
              zoom={11}>
              <AnyReactComponent lat={center.lat} lng={center.lng} />
            </GoogleMapReact>
          </div>
        </section>
      )}
    </>
  );
};

export default SimpleMap;
