import * as React from 'react';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import s from './PopUpBackCall.module.scss';

import { addPopUpBackCall } from '../../Actions/action';
import { Button } from '../Btn/Button';
import girl from '../../Images/girl.png';
import fon from '../../Images/first.png';
import rio from '../../Images/rio.png';
import tiguan from '../../Images/tiguan.png';
import camry from '../../Images/camry-white.png';
import { useAppSelector } from '../../Hooks/Hooks';
import { useValueValidate } from '../../Hooks/useValueValidate';

interface IProps {
  title: string[];
  popUpBlock: string;
  button: string;
}

export default function BasicModal({ popUpBlock, title, button }: IProps) {
  const { brandList } = useAppSelector((state: any) => state.reducer);
  const [open, setOpen] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const { valuePhone, setValuePhone, onChange } = useValueValidate();
  const dispatch = useDispatch();

  function handleClose() {
    setOpen(false);
    dispatch(addPopUpBackCall(''));
    setSent(false);
  }
  function handleSubmit(e: any) {
    e.preventDefault();
    if (valuePhone) {
      setSent(true);
    }
  }

  React.useEffect(() => {
    popUpBlock && setOpen(true);
    if (popUpBlock === 'offer' || popUpBlock === 'a discount') {
      setSent(true);
    }
  }, [popUpBlock]);

  function getImg(name: string) {
    switch (name) {
      case 'back call':
        return girl;
      case 'a discount':
        return brandList.url_img;
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
            <form onSubmit={handleSubmit} className={s.modal__content_inf}>
              <div className={s.modal__content_title}>
                <h2>{title[0]}</h2>
                <p>{title[1]}</p>
              </div>
              <input type="text" placeholder="Ваше имя" />
              <input
                type="tel"
                placeholder="Ваш телефон"
                value={valuePhone}
                onChange={(e) => onChange(e.target.value)}
              />
              <Button click={handleSubmit} title={button} />
              <p>
                Нажимая кнопку “Получить предложение” Вы даете согласие на обработку своих
                <span> персональных данных</span>
              </p>
            </form>
            <img className={s.modal__content_img} src={img} alt="фото контента" width="344" />
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
