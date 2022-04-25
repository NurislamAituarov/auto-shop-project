import './Button.scss';
import cn from 'classnames';

interface IButton {
  size?: string;
  title: string;
  click?: (e: any) => void;
}

export function Button({ size, title, click }: IButton) {
  function sizeClass() {
    switch (size) {
      case 'big':
        return 'big';
      case 'small':
        return 'small';
      default:
        return 'normal';
    }
  }

  return (
    <button onClick={click} className={cn(sizeClass(), 'btn')}>
      {title}
    </button>
  );
}
