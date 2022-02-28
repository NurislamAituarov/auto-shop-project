import { Phone } from '../Svg';
import './BackCall.scss';

export function BackCall() {
  return (
    <div className="back-call flex">
      <p>+7 (800) 551-94-31</p>
      <p className="flex">
        <Phone />
        Обратный звонок
      </p>
    </div>
  );
}
