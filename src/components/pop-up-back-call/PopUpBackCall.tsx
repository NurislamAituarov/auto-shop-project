import * as React from 'react';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import s from './PopUpBackCall.module.scss';

import { addPopUpBackCall } from '../../redux/actions/action';
import { Button } from '../btn/Button';
import { useAppSelector } from '../../hooks/Hooks';
import { PopUpForm } from './components/PopUpForm';
import { camry, credit, fon2, girl, rio2, tiguan2 } from '../../assets';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface IProps {
  title: string[];
  popUpBlock: string;
  button: string;
}

export default function BasicModal({ popUpBlock, title, button }: IProps) {
  const { brandList } = useAppSelector((state: any) => state.reducer);
  const [open, setOpen] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const dispatch = useDispatch();

  function handleClose() {
    setOpen(false);
    dispatch(addPopUpBackCall(''));
    setSent(false);
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
      case 'credit':
        return credit;
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
            <PopUpForm setSent={setSent} title={title} button={button} />
            <div className={s.modal__content_img}>
              <LazyLoadImage
                effect="blur"
                src={img}
                alt="фото контента"
                width="100%"
                height="100%"
              />
            </div>
            <div className={s.modal__content_fon}>
              <LazyLoadImage effect="blur" src={fon2} alt="задний фон" width="100%" height="100%" />
            </div>

            <div onClick={handleClose} className={s.modal__close}>
              <p></p>
              <p></p>
            </div>
          </div>
        ) : (
          <div className={s.modal__sent}>
            <div>
              <img src={tiguan2} alt="tiguan" width="235" />
              <img src={rio2} alt="rio" width="366" />
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
