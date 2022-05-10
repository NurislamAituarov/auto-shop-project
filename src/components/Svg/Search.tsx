import { NavLink } from 'react-router-dom';

export function Search({ link = false }) {
  return (
    <>
      {link ? (
        <NavLink to="auto-shop-project/search">
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22 22L15.3397 15.3397M9.4 17.8C4.76081 17.8 1 14.0392 1 9.4C1 4.76081 4.76081 1 9.4 1C14.0392 1 17.8 4.76081 17.8 9.4C17.8 14.0392 14.0392 17.8 9.4 17.8Z"
              stroke="#737373"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </NavLink>
      ) : (
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M22 22L15.3397 15.3397M9.4 17.8C4.76081 17.8 1 14.0392 1 9.4C1 4.76081 4.76081 1 9.4 1C14.0392 1 17.8 4.76081 17.8 9.4C17.8 14.0392 14.0392 17.8 9.4 17.8Z"
            stroke="#737373"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );
}
