import './Header.scss';
import { Label, Date, Whatsapp } from '../Svg';

interface ITitleInfo {
  text: string;
  index: number;
}

export function TitleInfo({ text, index }: ITitleInfo) {
  const svg = () => {
    switch (index) {
      case 1:
        return <Label />;
      case 2:
        return <Date />;
      case 3:
        return <Whatsapp />;
      default:
        return;
    }
  };

  return (
    <div className="title_info_first flex">
      {svg()}
      <p>{text}</p>
    </div>
  );
}
