import { useDispatch } from 'react-redux';
import { popUpBackCall } from '../../Actions/action';
import { Phone } from '../Svg';
import './BackCall.scss';

export function BackCall() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="back-call flex">
        <p>+7 (800) 551-94-31</p>
        <p onClick={() => dispatch(popUpBackCall())} className="flex">
          <Phone />
          Обратный звонок
        </p>
      </div>
    </>
  );
}
