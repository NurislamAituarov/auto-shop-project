import { useDispatch } from 'react-redux';
import { addPopUpBackCall } from '../../redux/actions/action';
import { Phone } from '../Svg';
import './BackCall.scss';

export function BackCall() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="back-call flex">
        <p>+7 (800) 551-94-31</p>
        <p onClick={() => dispatch(addPopUpBackCall('back call'))} className="flex">
          <Phone />
          Обратный звонок
        </p>
      </div>
    </>
  );
}
