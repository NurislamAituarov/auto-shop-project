import * as React from 'react';
import Modal from '@mui/material/Modal';

import { popUpBackCall } from '../../Actions/action';
import { useDispatch } from 'react-redux';
import s from './PopUpBackCall.module.scss';
import { Button } from '../Btn/Button';
import girl from '../../Images/girl.png';
import fon from '../../Images/first.png';
import rio from '../../Images/rio.png';
import tiguan from '../../Images/tiguan.png';
import suzuki from '../../Images/suzuki.png';
import camry from '../../Images/camry-white.png';

interface IProps {
  title: string[];
  popUpBlock: string;
  button: string;
}

export default function BasicModal({ popUpBlock, title, button }: IProps) {
  const [open, setOpen] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
    dispatch(popUpBackCall(''));
    setSent(false);
  };

  React.useEffect(() => {
    popUpBlock && setOpen(true);
  }, [popUpBlock]);

  function getImg(name: string) {
    switch (name) {
      case 'back call':
        return girl;
      case 'a discount':
        return suzuki;
      case 'offer':
        return camry;
      default:
        return;
    }
  }
  const img = popUpBlock && getImg(popUpBlock);

  return (
    <div className={s.container}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        {!sent ? (
          <div className={s.modal__content}>
            <div className={s.modal__content_inf}>
              <div className={s.modal__content_title}>
                <h2>{title[0]}</h2>
                <p>{title[1]}</p>
              </div>
              <input type="text" placeholder="Ваше имя" />
              <input type="text" placeholder="Ваш телефон" />
              <Button click={() => setSent(true)} title={button} />
              <p>
                Нажимая кнопку “Получить предложение” Вы даете согласие на обработку своих
                <span> персональных данных</span>
              </p>
            </div>
            <img className={s.modal__content_img} src={img} alt="фото девушки" />
            <img className={s.modal__content_fon} src={fon} alt="задний фон" />
            <div onClick={handleClose} className={s.modal__close}>
              <p></p>
              <p></p>
            </div>
          </div>
        ) : (
          <div className={s.modal__sent}>
            <div>
              <img src={tiguan} alt="tiguan" width="235" />
              <img src={rio} alt="rio" width="366" />
            </div>
            <h2>Спасибо за обращение!</h2>
            <p>Наш менеджер свяжется с Вами в ближайшее время</p>
            <Button title="ok" click={handleClose} />
          </div>
        )}
      </Modal>
    </div>
  );
}
