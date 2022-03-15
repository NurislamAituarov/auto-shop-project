import * as React from 'react';
import Modal from '@mui/material/Modal';
import { useAppSelector } from '../../Hooks/Hooks';
import { popUpBackCall } from '../../Actions/action';
import { useDispatch } from 'react-redux';
import s from './PopUpBackCall.module.scss';
import { Button } from '../Btn/Button';
import girl from '../../Images/girl.png';
import fon from '../../Images/first.png';

export default function BasicModal() {
  const trigger = useAppSelector((state: any) => state.reducer.popUpBackCall);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
    dispatch(popUpBackCall());
  };

  React.useEffect(() => {
    setOpen(trigger);
  }, [trigger]);
  return (
    <div className={s.container}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <div className={s.modal__content}>
          <div className={s.modal__content_inf}>
            <h2>Обратный звонок</h2>
            <input type="text" placeholder="Ваше имя" />
            <input type="text" placeholder="Ваш телефон" />
            <Button title="Перезвоните мне" />
            <p>
              Нажимая кнопку “Получить предложение” Вы даете согласие на обработку своих
              <span> персональных данных</span>
            </p>
          </div>
          <img className={s.modal__content_img} src={girl} alt="фото девушки" />
          <img className={s.modal__content_fon} src={fon} alt="задний фон" />
          <div onClick={handleClose} className={s.modal__close}>
            <p></p>
            <p></p>
          </div>
        </div>
      </Modal>
    </div>
  );
}
