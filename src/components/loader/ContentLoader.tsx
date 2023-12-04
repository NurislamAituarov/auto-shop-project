import ContentLoader from 'react-content-loader';
import s from './ContentLoader.module.scss';

export function ReactContentLoader() {
  return (
    <>
      <div className={s.content__title}>
        <ContentLoader
          speed={2}
          width={550}
          height={40}
          viewBox="0 0 650 50"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="46" y="72" rx="0" ry="0" width="212" height="30" />
          <rect x="56" y="9" rx="0" ry="0" width="623" height="123" />
        </ContentLoader>
      </div>
      <div className={s.wrapper__items}>
        {[1, 2, 3, 4, 5, 6].map((el, i) => {
          return (
            <div className={s.content_loader} key={i}>
              <ContentLoader
                speed={2}
                width={450}
                height={450}
                viewBox="0 0 450 450"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb">
                <rect x="25" y="39" rx="0" ry="0" width="215" height="24" />
                <rect x="25" y="74" rx="0" ry="0" width="270" height="30" />
                <circle cx="373" cy="40" r="13" />
                <rect x="397" y="30" rx="0" ry="0" width="20" height="22" />
                <circle cx="331" cy="214" r="101" />
                <rect x="25" y="252" rx="0" ry="0" width="174" height="51" />
                <rect x="25" y="343" rx="0" ry="0" width="389" height="30" />
                <rect x="25" y="382" rx="0" ry="0" width="390" height="34" />
                <rect x="25" y="195" rx="0" ry="0" width="174" height="51" />
                <rect x="25" y="135" rx="0" ry="0" width="174" height="51" />
              </ContentLoader>
            </div>
          );
        })}
      </div>
    </>
  );
}
