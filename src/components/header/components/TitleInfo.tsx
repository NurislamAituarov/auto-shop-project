import '../Header.scss';
import { Label, Date, Whatsapp } from '../../svg';

interface ITitleInfo {
  text: string;
  index: number;
}

export function TitleInfo({ text, index }: ITitleInfo) {
  const svg = () => {
    switch (index) {
      case 1:
        return <Date />;
      case 2:
        return <Label />;
      case 3:
        return <Whatsapp />;
      default:
        return;
    }
  };

  return (
    <div className="flex">
      {svg()}
      <p>{text}</p>
    </div>
  );
}
